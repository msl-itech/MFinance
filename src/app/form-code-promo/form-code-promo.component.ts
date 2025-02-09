import { Component } from '@angular/core';

@Component({
  selector: 'app-form-code-promo',
  templateUrl: './form-code-promo.component.html',
  styleUrl: './form-code-promo.component.css'
})
export class FormCodePromoComponent {
  formData = {
    studyType: '',
    name: '',
    email: '',
    phone: '',
    promoCode: '',
    description: ''
  };

  submitForm() {
    if (!this.formData.studyType || !this.formData.name || !this.formData.email) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Construire l'URL avec les paramètres dynamiques pour Calendly
    const calendlyBaseUrl = 'https://calendly.com/mfinances/rdv-client-en-teleconference';
    const queryParams = new URLSearchParams({
      name: this.formData.name,
      email: this.formData.email,
      phone: this.formData.phone || '',
      promoCode: this.formData.promoCode || '',
      studyType: this.formData.studyType,
      description: this.formData.description || ''
    }).toString();

    // Redirection vers Calendly avec les informations de l'utilisateur
    window.location.href = `${calendlyBaseUrl}?${queryParams}`;
  }
}
