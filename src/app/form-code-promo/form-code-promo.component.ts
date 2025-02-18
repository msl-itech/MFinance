import { Component } from '@angular/core';
import { OdooService } from '../services/odoo.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

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

  isLoading: boolean = false;

  constructor(
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

  submitForm(form: NgForm): void {
    if (form.invalid) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }
    const calendlyBaseUrl = 'https://calendly.com/mfinances/rdv-client-en-teleconference';
  
    const leadData = {
      name: this.formData.name,
      email_from: this.formData.email,
      phone: this.formData.phone,
      description: `Type d'étude: ${this.formData.studyType}\n | Code Promo: ${this.formData.promoCode}\n | Description: ${this.formData.description}`
    };

    this.isLoading = true;
    this.odooService.createLead(leadData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.toastr.success('Votre demande a été envoyée avec succès!', 'Succès');
        form.reset();
        window.location.href = `${calendlyBaseUrl}`;
      },
      error: (error) => {
        this.isLoading = false;
        this.toastr.error('Une erreur est survenue lors de l\'envoi de la demande.', 'Erreur');
        console.error('Erreur lors de la création du lead:', error);
      }
    });
  }
}
