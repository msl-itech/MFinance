import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { OdooService } from '../services/odoo.service';

// Déclaration pour grecaptcha
declare global {
  interface Window {
    grecaptcha: any;
    onCaptchaLoaded: () => void;
  }
}

interface ContactForm {
  contact_name: string;
  phone: string;
  email_from: string;
  industry: string;
  vat_number: string;
  service_type: string;
  best_time: string;
  description: string;
  recaptcha: string;
}

@Component({
  selector: 'app-zone-contact',
  templateUrl: './zone-contact.component.html',
  styleUrl: './zone-contact.component.css',
})
export class ZoneContactComponent implements OnInit {
  isLoading: boolean = false;
  contact_name: string = '';
  phone: string = '';
  email_from: string = '';
  industry: string = '';
  vat_number: string = '';
  service_type: string = '';
  best_time: string = '';
  description: string = '';
  recaptchaResponse: string = '';
  recaptchaSiteKey: string = environment.recaptchaSiteKey;
  recaptchaWidget: any = null;

  // Préfixes téléphoniques disponibles
  phoneCountries = [
    { code: 'BE', label: '(+32)', prefix: '+32' },
    { code: 'FR', label: '(+33)', prefix: '+33' },
  ];

  selectedPhoneCountry: string = 'BE'; // Par défaut: Belgique

  // Options pour les services
  serviceOptions = [
    { value: 'devenir_independant', label: 'Devenir indépendant' },
    { value: 'creation_societe', label: "Création d'une société" },
    { value: 'passage_societe', label: 'Passage en société' },
    { value: 'changer_expert', label: "Changer d'Expert-Comptable" },
    {
      value: 'declaration_impot',
      label: 'Déclaration impôt des personnes physiques',
    },
    { value: 'autres', label: 'Autres' },
  ];

  // Options pour les horaires
  timeOptions = [
    { value: '8h-11h', label: '8h-11h' },
    { value: '11h-15h', label: '11h-15h' },
    { value: '15h-19h', label: '15h-19h' },
    { value: 'no_preference', label: 'Pas de préférence' },
  ];

  constructor(
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadRecaptchaScript();
  }

  // Charger le script reCAPTCHA
  loadRecaptchaScript(): void {
    window.onCaptchaLoaded = () => {
      this.renderReCaptcha();
    };

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?onload=onCaptchaLoaded&render=explicit&hl=fr`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  // Rendre le reCAPTCHA
  renderReCaptcha(): void {
    if (window.grecaptcha) {
      this.recaptchaWidget = window.grecaptcha.render('recaptcha-container', {
        sitekey: this.recaptchaSiteKey,
        callback: (response: string) => {
          this.resolved(response);
        },
        theme: 'light',
        size: 'normal',
      });
    }
  }

  // Méthode appelée lorsque le reCAPTCHA est résolu
  resolved(captchaResponse: string): void {
    this.recaptchaResponse = captchaResponse || '';
  }

  // Formater le numéro de téléphone avec le préfixe du pays
  formatPhoneNumber(nationalNumber: string, countryCode: string): string {
    try {
      const prefix =
        this.phoneCountries.find((country) => country.code === countryCode)
          ?.prefix || '';
      // Supprime tous les caractères non numériques
      let cleanNumber = nationalNumber.replace(/\D/g, '');

      // Vérifie si le numéro commence déjà par le préfixe
      if (cleanNumber.startsWith('0')) {
        cleanNumber = cleanNumber.substring(1);
      }

      return `${prefix}${cleanNumber}`;
    } catch (error) {
      console.error('Erreur lors du formatage du numéro de téléphone:', error);
      return nationalNumber;
    }
  }

  // Valider le numéro de téléphone
  validatePhoneNumber(phoneNumber: string, countryCode: string): boolean {
    try {
      const formattedNumber = this.formatPhoneNumber(phoneNumber, countryCode);
      const phoneNumberObj = parsePhoneNumberFromString(formattedNumber);
      return phoneNumberObj ? phoneNumberObj.isValid() : false;
    } catch (error) {
      console.error(
        'Erreur lors de la validation du numéro de téléphone:',
        error
      );
      return false;
    }
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    if (!this.recaptchaResponse) {
      this.toastr.error(
        "Veuillez confirmer que vous n'êtes pas un robot",
        'Erreur'
      );
      return;
    }

    // Validation du numéro de téléphone
    if (!this.validatePhoneNumber(this.phone, this.selectedPhoneCountry)) {
      this.toastr.error('Numéro de téléphone invalide', 'Erreur');
      return;
    }

    this.isLoading = true;
    const formValue = form.value;

    // Formatage du numéro de téléphone avec le préfixe avant envoi
    const formattedPhone = this.formatPhoneNumber(
      formValue.phone,
      this.selectedPhoneCountry
    );

    // Assemblage de la description complète
    const descriptionParts = [
      `<p>Secteur d'activité: ${formValue.industry}</p>`,
      `<p>N° TVA/BCE: ${formValue.vat_number || 'Non fourni'}</p>`,
      `<p>Service demandé: ${this.getServiceLabel(formValue.service_type)}</p>`,
      `<p>Horaire préféré: ${this.getTimeLabel(formValue.best_time)}</p>`,
      `<p>Description détaillée: ${
        formValue.description || 'Aucune description fournie'
      }</p>`,
    ];

    const fullDescription = descriptionParts.join('\n');

    const leadData = {
      name: formValue.contact_name,
      phone: formattedPhone,
      email_from: formValue.email_from,
      description: fullDescription,
      recaptcha: this.recaptchaResponse,
      // Ajoutez d'autres champs si nécessaire pour votre API
    };

    this.odooService.createLead(leadData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.toastr.success(
          'Votre message a été envoyé avec succès!',
          'Succès'
        );
        form.reset();
        // Réinitialiser le captcha
        if (window.grecaptcha && this.recaptchaWidget !== null) {
          window.grecaptcha.reset(this.recaptchaWidget);
        }
        this.recaptchaResponse = '';
        this.selectedPhoneCountry = 'BE'; // Réinitialiser au pays par défaut
      },
      error: (error) => {
        this.isLoading = false;
        this.toastr.error(
          "Une erreur est survenue lors de l'envoi du message.",
          'Erreur'
        );
        console.error('Erreur lors de la création du lead:', error);
      },
    });
  }

  // Méthode pour obtenir le libellé du service
  private getServiceLabel(value: string): string {
    const service = this.serviceOptions.find(
      (option) => option.value === value
    );
    return service ? service.label : value;
  }

  // Méthode pour obtenir le libellé de l'horaire
  private getTimeLabel(value: string): string {
    const time = this.timeOptions.find((option) => option.value === value);
    return time ? time.label : value;
  }
}
