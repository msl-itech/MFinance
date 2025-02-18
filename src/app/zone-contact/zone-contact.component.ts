import { Component } from '@angular/core';
import { OdooService } from '../services/odoo.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

interface ContactForm {
  contact_name: string;
  phone: string;
  email_from: string;
  industry: string;
  vat_number: string;
  service_type: string;
  best_time: string;
  description: string;
}

@Component({
  selector: 'app-zone-contact',
  templateUrl: './zone-contact.component.html',
  styleUrl: './zone-contact.component.css'
})
export class ZoneContactComponent {
  isLoading: boolean = false;
  contact_name: string = '';
  phone: string = '';
  email_from: string = '';
  industry: string = '';
  vat_number: string = '';
  service_type: string = '';
  best_time: string = '';
  description: string = '';

  // Options pour les services
  serviceOptions = [
    { value: 'devenir_independant', label: 'Devenir indépendant' },
    { value: 'creation_societe', label: 'Création d\'une société' },
    { value: 'passage_societe', label: 'Passage en société' },
    { value: 'changer_expert', label: 'Changer d\'Expert-Comptable' },
    { value: 'declaration_impot', label: 'Déclaration impôt des personnes physiques' },
    { value: 'autres', label: 'Autres' }
  ];

  // Options pour les horaires
  timeOptions = [
    { value: '8h-11h', label: '8h-11h' },
    { value: '11h-15h', label: '11h-15h' },
    { value: '15h-19h', label: '15h-19h' },
    { value: 'no_preference', label: 'Pas de préférence' }
  ];

  constructor(
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    this.isLoading = true;
    const formValue = form.value;

    // Assemblage de la description complète
    const descriptionParts = [
      `Secteur d'activité: ${formValue.industry}|`,
      `N° TVA/BCE: ${formValue.vat_number || 'Non fourni'}|`,
      `Service demandé: ${this.getServiceLabel(formValue.service_type)}|`,
      `Horaire préféré: ${this.getTimeLabel(formValue.best_time)}|`,
      `Description détaillée: ${formValue.description || 'Aucune description fournie'}`
    ];

    const fullDescription = descriptionParts.join('\n');

    const leadData = {
      name: formValue.contact_name,
      phone: formValue.phone,
      email_from: formValue.email_from,
      description: fullDescription,
      // Ajoutez d'autres champs si nécessaire pour votre API
    };

    this.odooService.createLead(leadData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.toastr.success('Votre message a été envoyé avec succès!', 'Succès');
        form.reset();
      },
      error: (error) => {
        this.isLoading = false;
        this.toastr.error('Une erreur est survenue lors de l\'envoi du message.', 'Erreur');
        console.error('Erreur lors de la création du lead:', error);
      }
    });
  }

  // Méthode pour obtenir le libellé du service
  private getServiceLabel(value: string): string {
    const service = this.serviceOptions.find(option => option.value === value);
    return service ? service.label : value;
  }

  // Méthode pour obtenir le libellé de l'horaire
  private getTimeLabel(value: string): string {
    const time = this.timeOptions.find(option => option.value === value);
    return time ? time.label : value;
  }
}
