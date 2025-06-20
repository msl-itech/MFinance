import { Component, OnDestroy, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-investir-tresorerie',
  templateUrl: './investir-tresorerie.component.html',
  styleUrl: './investir-tresorerie.component.css',
})
export class InvestirTresorerieComponent implements OnInit, OnDestroy {
  // Popup properties
  showPopup = false;
  popupTimer: any;

  // Form properties
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  showAutreFrein = false;
  showAutreActivite = false;
  showMarchandises = false;

  // Form data
  formData = {
    souhaite_investir: '',
    frein_principal: '',
    frein_autre: '',
    nom: '',
    email: '',
    telephone: '',
    chiffre_affaires: '',
    type_activite: '',
    activite_autre: '',
    type_marchandises: '',
  };

  // Form configuration
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: '💸 Investissement & Trésorerie',
    title:
      'Découvrez en 3 minutes si votre investissement va booster… ou ruiner votre trésorerie !',
    description:
      'Prêt à investir ? Vérifiez si votre trésorerie est prête, elle aussi. Un mauvais timing peut transformer un bon investissement en cauchemar financier.',
    phoneButton: 'Appeler maintenant',
    contactButton: 'Faire mon diagnostic',

    // En-tête du formulaire
    formTitle: 'Diagnostic Investissement Express',
    formDescription: 'Formulaire rapide : 5 étapes – Moins de 3 minutes',
    badge: 'Gratuit & Confidentiel',

    // Boutons et messages
    submitButton: 'Recevoir mon diagnostic',
    successTitle: '🎉 Merci pour votre demande !',
    successMessage:
      'Un conseiller MFINANCES vous contactera très prochainement pour vous aider à sécuriser votre investissement.',
    successNote: "L'échange est gratuit, confidentiel et sans engagement.",
    resetButton: 'Faire une nouvelle demande',
  };

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Investir Trésorerie
    this.metaService.setInvestirTresoreriePageMeta();

    // Démarrer le timer pour le popup
    this.startPopupTimer();
  }

  ngOnDestroy() {
    if (this.popupTimer) {
      clearTimeout(this.popupTimer);
    }
  }

  // Popup methods
  startPopupTimer() {
    this.popupTimer = setTimeout(() => {
      this.showPopup = true;
    }, 10000); // 20 secondes
  }

  closePopup() {
    this.showPopup = false;
  }

  openFormFromPopup() {
    this.closePopup();
    this.scrollToSection('contactSection');
  }

  // Navigation methods
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Form methods
  onSouhaiteInvestirChange(value: string) {
    this.formData.souhaite_investir = value;
  }

  onFreinChange(value: string) {
    this.formData.frein_principal = value;
    this.showAutreFrein = value === 'autre';
    if (value !== 'autre') {
      this.formData.frein_autre = '';
    }
  }

  onActiviteChange(value: string) {
    this.formData.type_activite = value;
    this.showAutreActivite = value === 'autre';
    this.showMarchandises =
      value === 'commerce-detail' || value === 'commerce-gros';

    if (value !== 'autre') {
      this.formData.activite_autre = '';
    }
    if (!this.showMarchandises) {
      this.formData.type_marchandises = '';
    }
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.souhaite_investir;
      case 2:
        return (
          !!this.formData.frein_principal &&
          (this.formData.frein_principal !== 'autre' ||
            !!this.formData.frein_autre)
        );
      case 3:
        return (
          !!this.formData.nom &&
          !!this.formData.email &&
          !!this.formData.telephone
        );
      case 4:
        return !!this.formData.chiffre_affaires;
      case 5:
        return (
          !!this.formData.type_activite &&
          (this.formData.type_activite !== 'autre' ||
            !!this.formData.activite_autre)
        );
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    return (
      this.formData.souhaite_investir !== '' &&
      this.formData.frein_principal !== '' &&
      (this.formData.frein_principal !== 'autre' ||
        this.formData.frein_autre !== '') &&
      this.formData.nom !== '' &&
      this.formData.email !== '' &&
      this.formData.telephone !== '' &&
      this.formData.chiffre_affaires !== '' &&
      this.formData.type_activite !== '' &&
      (this.formData.type_activite !== 'autre' ||
        this.formData.activite_autre !== '')
    );
  }

  onNextStep() {
    if (this.isStepValid() && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  onPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Form submitted:', this.formData);
      this.formSubmitted = true;
      // Ici vous pouvez ajouter la logique d'envoi des données
    }
  }

  onReset() {
    this.formData = {
      souhaite_investir: '',
      frein_principal: '',
      frein_autre: '',
      nom: '',
      email: '',
      telephone: '',
      chiffre_affaires: '',
      type_activite: '',
      activite_autre: '',
      type_marchandises: '',
    };
    this.currentStep = 1;
    this.formSubmitted = false;
    this.showAutreFrein = false;
    this.showAutreActivite = false;
    this.showMarchandises = false;
  }
}
