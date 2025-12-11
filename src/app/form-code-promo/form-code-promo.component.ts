import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OdooService } from '../services/odoo.service';

@Component({
  selector: 'app-form-code-promo',
  templateUrl: './form-code-promo.component.html',
  styleUrl: './form-code-promo.component.css',
})
export class FormCodePromoComponent {
  formData = {
    studyType: '',
    name: '',
    email: '',
    phone: '',
    promoCode: '',
    description: '',
  };

  isLoading: boolean = false;

  constructor(
    private odooService: OdooService,
    private toastr: ToastrService
  ) { }

  submitForm(form: NgForm): void {
    if (form.invalid) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }
    const calendlyBaseUrl =
      'https://odoo.mfinances.be/book/4781b4d3';

    const leadData = {
      name: this.formData.name,
      email_from: this.formData.email,
      phone: this.formData.phone,
      description: `<p>Type d'étude: ${this.formData.studyType}</p>\n<p>Code Promo: ${this.formData.promoCode}</p>\n<p>Description: ${this.formData.description}</p>`,
    };

    this.isLoading = true;
    this.odooService.createLead(leadData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.toastr.success(
          'Votre demande a été envoyée avec succès!',
          'Succès'
        );
        form.reset();
        window.location.href = `${calendlyBaseUrl}`;
      },
      error: (error) => {
        this.isLoading = false;
        this.toastr.error(
          "Une erreur est survenue lors de l'envoi de la demande.",
          'Erreur'
        );
        console.error('Erreur lors de la création du lead:', error);
      },
    });
  }
}
