import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OdooService } from '../../services/odoo.service';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';
import { DiagnosticConfig, DiagnosticResult } from '../../shared/diagnostic';
import { DIAGNOSTIC_STOCK_CONFIG } from './diagnostic-stock.config';

@Component({
  selector: 'app-stock-tresorerie',
  templateUrl: './stock-tresorerie.component.html',
  styleUrl: './stock-tresorerie.component.css',
})
export class StockTresorerieComponent implements OnInit, OnDestroy {
  // Popup properties
  showPopup = false;
  popupTimer: any;

  // Form properties
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  isLoading = false;
  showAutreDefi = false;
  showAutreSecteur = false;
  showTypesProduits = false;

  // Form data
  formData = {
    gere_stock: '',
    defi_principal: '',
    defi_autre: '',
    nom: '',
    email: '',
    telephone: '',
    chiffre_affaires: '',
    secteur_activite: '',
    secteur_autre: '',
    types_produits: '',
  };

  // Form configuration
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: '📦 Gestion de Stock & Trésorerie',
    title:
      "Trop de stock ? Pas assez de cash ? Vérifiez l'équilibre en 3 minutes.",
    description:
      "Découvrez comment transformer votre stock en véritable levier de trésorerie. Un stock mal géré peut bloquer des milliers d'euros de liquidités.",
    phoneButton: 'Appeler maintenant',
    contactButton: 'Faire mon diagnostic',

    // En-tête du formulaire
    formTitle: 'Diagnostic Stock Express',
    formDescription: 'Formulaire rapide : 5 étapes – Moins de 3 minutes',
    badge: 'Gratuit & Confidentiel',

    // Boutons et messages
    submitButton: 'Recevoir mon analyse',
    successTitle: '🎉 Merci pour votre demande !',
    successMessage:
      'Un conseiller MFINANCES vous contactera très bientôt pour vous aider à transformer votre stock en véritable levier de trésorerie.',
    successNote: "L'échange est gratuit, confidentiel et sans engagement.",
    resetButton: 'Faire une nouvelle demande',
  };

  // Configuration du diagnostic stock
  diagnosticConfig: DiagnosticConfig = DIAGNOSTIC_STOCK_CONFIG;

  // Contrôle de l'affichage du diagnostic
  showDiagnostic = false;

  constructor(
    private odooService: OdooService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    // Démarrer le timer pour le popup
    this.startPopupTimer();

    // Vérifier si on doit afficher le diagnostic au chargement
    const hash = window.location.hash;
    if (hash === '#diagnostic') {
      this.showDiagnostic = true;
      setTimeout(() => {
        this.scrollToSection('diagnosticSection');
      }, 100);
    }
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
    }, 10000); // 30 secondes
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

  // Diagnostic methods
  /**
   * Affiche le diagnostic et scroll jusqu'à la section
   */
  startDiagnostic(): void {
    this.showDiagnostic = true;
    setTimeout(() => {
      this.scrollToSection('diagnosticSection');
    }, 100);
  }

  /**
   * Callback appelé quand le diagnostic est terminé
   */
  onDiagnosticComplete(result: DiagnosticResult): void {
    console.log('Diagnostic stock terminé:', result);
    // Pas de redirection automatique pour les pages enfants
  }

  // Form methods
  onGereStockChange(value: string) {
    this.formData.gere_stock = value;
  }

  onDefiChange(value: string) {
    this.formData.defi_principal = value;
    this.showAutreDefi = value === 'autre';
    if (value !== 'autre') {
      this.formData.defi_autre = '';
    }
  }

  onSecteurChange(value: string) {
    this.formData.secteur_activite = value;
    this.showAutreSecteur = value === 'autre';
    this.showTypesProduits = [
      'commerce-detail',
      'commerce-gros',
      'ecommerce',
      'production',
    ].includes(value);

    if (value !== 'autre') {
      this.formData.secteur_autre = '';
    }
    if (!this.showTypesProduits) {
      this.formData.types_produits = '';
    }
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.gere_stock;
      case 2:
        // Si pas de stock, on passe directement à la fin
        if (this.formData.gere_stock === 'non') {
          return true;
        }
        return (
          !!this.formData.defi_principal &&
          (this.formData.defi_principal !== 'autre' ||
            !!this.formData.defi_autre)
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
          !!this.formData.secteur_activite &&
          (this.formData.secteur_activite !== 'autre' ||
            !!this.formData.secteur_autre)
        );
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    // Si pas de stock, le formulaire est valide après les coordonnées et CA
    if (this.formData.gere_stock === 'non') {
      return (
        this.formData.nom !== '' &&
        this.formData.email !== '' &&
        this.formData.telephone !== '' &&
        this.formData.chiffre_affaires !== ''
      );
    }

    // Si stock présent, validation complète
    return (
      this.formData.gere_stock !== '' &&
      this.formData.defi_principal !== '' &&
      (this.formData.defi_principal !== 'autre' ||
        this.formData.defi_autre !== '') &&
      this.formData.nom !== '' &&
      this.formData.email !== '' &&
      this.formData.telephone !== '' &&
      this.formData.chiffre_affaires !== '' &&
      this.formData.secteur_activite !== '' &&
      (this.formData.secteur_activite !== 'autre' ||
        this.formData.secteur_autre !== '')
    );
  }

  onNextStep() {
    if (this.isStepValid()) {
      // Si pas de stock à l'étape 1, on passe directement à l'étape 3 (coordonnées)
      if (this.currentStep === 1 && this.formData.gere_stock === 'non') {
        this.currentStep = 3;
      } else if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    }
  }

  onPreviousStep() {
    if (this.currentStep > 1) {
      // Si on revient de l'étape 3 et qu'on n'a pas de stock, on retourne à l'étape 1
      if (this.currentStep === 3 && this.formData.gere_stock === 'non') {
        this.currentStep = 1;
      } else {
        this.currentStep--;
      }
    }
  }

  onSubmit() {
    if (!this.isFormValid()) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    this.isLoading = true;

    // Assemblage de la description complète
    const descriptionParts = [
      `<h3>Diagnostic Stock & Trésorerie</h3>`,
      `<p><strong>Gère du stock:</strong> ${this.getGereStockLabel()}</p>`,
      this.formData.gere_stock === 'oui'
        ? `<p><strong>Défi principal:</strong> ${this.getDefiLabel()}</p>`
        : '',
      this.formData.defi_autre
        ? `<p><strong>Précision défi:</strong> ${this.formData.defi_autre}</p>`
        : '',
      `<p><strong>Chiffre d'affaires:</strong> ${this.formData.chiffre_affaires}</p>`,
      this.formData.gere_stock === 'oui'
        ? `<p><strong>Secteur d'activité:</strong> ${this.getSecteurLabel()}</p>`
        : '',
      this.formData.secteur_autre
        ? `<p><strong>Précision secteur:</strong> ${this.formData.secteur_autre}</p>`
        : '',
      this.formData.types_produits
        ? `<p><strong>Types de produits:</strong> ${this.formData.types_produits}</p>`
        : '',
    ];

    const fullDescription = descriptionParts.filter((p) => p).join('\n');

    const leadData = {
      name: this.formData.nom,
      phone: this.formData.telephone,
      email_from: this.formData.email,
      description: fullDescription,
      lead_type: 'stock_tresorerie',
    };

    this.odooService.createLead(leadData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.formSubmitted = true;
        this.toastr.success(
          'Votre demande a été envoyée avec succès!',
          'Succès'
        );
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

  // Méthodes utilitaires pour les labels
  private getGereStockLabel(): string {
    return this.formData.gere_stock === 'oui' ? 'Oui' : 'Non';
  }

  private getDefiLabel(): string {
    const defis = {
      'trop-stock': 'Trop de stock',
      'stock-inadapte': 'Stock inadapté',
      'rotation-lente': 'Rotation trop lente',
      'liquidites-bloquees': 'Liquidités bloquées',
      'previsions-difficiles': 'Prévisions difficiles',
      autre: 'Autre',
    };
    return (
      defis[this.formData.defi_principal as keyof typeof defis] ||
      this.formData.defi_principal
    );
  }

  private getSecteurLabel(): string {
    const secteurs = {
      'commerce-detail': 'Commerce de détail',
      'commerce-gros': 'Commerce de gros',
      ecommerce: 'E-commerce',
      production: 'Production',
      distribution: 'Distribution',
      autre: 'Autre',
    };
    return (
      secteurs[this.formData.secteur_activite as keyof typeof secteurs] ||
      this.formData.secteur_activite
    );
  }

  onReset() {
    this.formData = {
      gere_stock: '',
      defi_principal: '',
      defi_autre: '',
      nom: '',
      email: '',
      telephone: '',
      chiffre_affaires: '',
      secteur_activite: '',
      secteur_autre: '',
      types_produits: '',
    };
    this.currentStep = 1;
    this.formSubmitted = false;
    this.showAutreDefi = false;
    this.showAutreSecteur = false;
    this.showTypesProduits = false;
  }
}
