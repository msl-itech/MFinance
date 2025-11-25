import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OdooService } from '../../services/odoo.service';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-stock-tresorerie-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule, FormsModule],
  templateUrl: './stock-tresorerie-mobile.component.html',
  styleUrls: ['./stock-tresorerie-mobile.component.scss']
})
export class StockTresorerieMobileComponent implements OnInit {

  // Video modal
  showVideo = false;

  // Variables pour le formulaire
  currentStep = 1;
  totalSteps = 3;
  formSubmitted = false;
  isLoading = false;

  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: 'DIAGNOSTIC STOCK',
    title: 'Optimisez votre gestion des stocks',
    description: 'Libérez des liquidités et améliorez votre trésorerie avec un diagnostic personnalisé gratuit.',
    phoneButton: 'Appelez-nous',
    contactButton: 'Contactez-nous',
    
    // En-tête du formulaire
    formTitle: 'Diagnostic Stock Express',
    formDescription: 'Évaluez votre gestion en 3 minutes',
    badge: 'GRATUIT ET CONFIDENTIEL',
    
    // Boutons et messages
    submitButton: 'Recevoir mon diagnostic',
    successTitle: '🎉 Merci pour votre demande !',
    successMessage: 'Votre diagnostic stock sera préparé par nos experts en gestion de trésorerie.',
    successNote: 'Nous vous contactons sous 72h pour analyser votre situation.',
    resetButton: 'Faire une nouvelle demande'
  };

  // Données du formulaire
  formData = {
    gere_stock: '',
    defi_principal: '',
    nom: '',
    email: '',
    telephone: ''
  };

  constructor(
    private router: Router,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // Initialisation du composant
  }

  // Méthodes pour la vidéo
  toggleVideo(): void {
    this.showVideo = !this.showVideo;
    if (this.showVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  // Méthodes de navigation
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  contactExpert(): void {
    window.open('https://calendly.com/mfinances/rdv-client-en-teleconference', '_blank');
  }

  // Méthodes pour le formulaire
  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.gere_stock;
      case 2:
        return !!this.formData.defi_principal;
      case 3:
        return !!this.formData.nom && !!this.formData.email && !!this.formData.telephone;
      default:
        return false;
    }
  }

  get isFormValid(): boolean {
    return this.currentStep === this.totalSteps && this.isStepValid;
  }

  onNextStep(): void {
    if (this.isStepValid && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  onPreviousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit(): void {
    if (this.isFormValid) {
      this.isLoading = true;

      // Labels pour les valeurs sélectionnées
      const gereStockLabels: { [key: string]: string } = {
        'oui-important': 'Oui, nous avons un stock important',
        'oui-limite': 'Oui, mais il est limité',
        'non': 'Non, pas de stock concerné'
      };

      const defiLabels: { [key: string]: string } = {
        'liquidites-bloquees': 'Liquidités bloquées dans le stock',
        'produits-dormants': 'Produits dormants ou invendables',
        'couts-stockage': 'Coûts de stockage trop élevés',
        'gestion-manuelle': 'Gestion manuelle chronophage'
      };

      const gereStockLabel = gereStockLabels[this.formData.gere_stock] || this.formData.gere_stock;
      const defiLabel = defiLabels[this.formData.defi_principal] || this.formData.defi_principal;

      const descriptionParts = [
        `<h3>Diagnostic Stock</h3>`,
        `<p><strong>Gestion de stock:</strong> ${gereStockLabel}</p>`,
        `<p><strong>Principal défi:</strong> ${defiLabel}</p>`,
        `<p><strong>Source:</strong> Formulaire mobile Stock-Trésorerie</p>`,
      ];

      const leadData = {
        name: this.formData.nom,
        phone: this.formData.telephone,
        email_from: this.formData.email,
        description: descriptionParts.join('\n'),
      };

      this.odooService.createLead(leadData).subscribe({
        next: () => {
          this.formSubmitted = true;
          this.isLoading = false;
          this.toastr.success('Votre demande a été envoyée avec succès!', 'Succès');
        },
        error: (error) => {
          this.isLoading = false;
          this.toastr.error("Une erreur est survenue lors de l'envoi.", 'Erreur');
          console.error('Erreur:', error);
        },
      });
    }
  }

  onReset(): void {
    this.currentStep = 1;
    this.formSubmitted = false;
    this.formData = {
      gere_stock: '',
      defi_principal: '',
      nom: '',
      email: '',
      telephone: ''
    };
  }
}