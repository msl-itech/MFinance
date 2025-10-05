import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../../services/meta.service';
import { OdooService } from '../../services/odoo.service';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-compte-courant-administrateur',
  templateUrl: './compte-courant-administrateur.component.html',
  styleUrl: './compte-courant-administrateur.component.css',
})
export class CompteCourantAdministrateurComponent implements OnInit, AfterViewInit {
  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: '🧭 Introduction engageante',
    title: 'Êtes-vous maître de votre compte courant administrateur ?',
    description:
      'Votre compte courant administrateur cache-t-il une bombe à retardement ? En 2 minutes, faites le point sur vos pratiques financières. Un expert Mfinances vous contactera sous 72h pour une analyse gratuite et confidentielle. Ensemble, faisons la lumière sur ce que vos chiffres ne disent pas encore…',
    phoneButton: 'Appelez maintenant',
    contactButton: 'Nous contacter',

    // En-tête du formulaire
    formTitle: 'Diagnostic Compte Courant',
    formDescription: 'Analysez votre situation en quelques étapes',
    badge: 'Analyse Gratuite',

    // Boutons et messages
    submitButton: 'Recevoir mon analyse',
    successTitle: 'Merci pour vos réponses.',
    successMessage: 'Vous serez recontacté sous 72h.',
    successNote:
      'Ensemble, transformons un risque silencieux en une stratégie claire et maîtrisée.',
    resetButton: 'Nouvelle analyse',
  };

  // État du formulaire
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  isLoading = false;

  // Données du formulaire
  formData = {
    paiement: '',
    compte_courant: '',
    nom: '',
    email: '',
    telephone: '',
    strategie_remboursement: '',
    besoin_principal: '',
    besoin_autre: '',
  };

  // Flags pour les champs "autre"
  showAutreBesoin = false;

  constructor(
    private metaService: MetaService,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Compte Courant Administrateur
    this.metaService.setCompteCourantPageMeta();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Gestion de la navigation du formulaire
  onNextStep(): void {
    if (this.isStepValid() && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  onPreviousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit(): void {
    if (!this.isFormValid()) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    this.isLoading = true;

    // Assemblage de la description complète
    const descriptionParts = [
      `<h3>Diagnostic Compte Courant Administrateur</h3>`,
      `<p><strong>Mode de paiement habituel:</strong> ${this.getPaiementLabel()}</p>`,
      `<p><strong>Solde compte courant:</strong> ${this.getCompteCourantLabel()}</p>`,
      `<p><strong>Stratégie de remboursement:</strong> ${this.getStrategieLabel()}</p>`,
      `<p><strong>Besoin principal:</strong> ${this.getBesoinLabel()}</p>`,
      this.formData.besoin_autre
        ? `<p><strong>Précision besoin:</strong> ${this.formData.besoin_autre}</p>`
        : '',
    ];

    const fullDescription = descriptionParts.filter((p) => p).join('\n');

    const leadData = {
      name: this.formData.nom,
      phone: this.formData.telephone,
      email_from: this.formData.email,
      description: fullDescription,
      lead_type: 'compte_courant_administrateur',
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

  onReset(): void {
    this.currentStep = 1;
    this.formSubmitted = false;
    this.formData = {
      paiement: '',
      compte_courant: '',
      nom: '',
      email: '',
      telephone: '',
      strategie_remboursement: '',
      besoin_principal: '',
      besoin_autre: '',
    };
    this.showAutreBesoin = false;
  }

  // Validation des étapes
  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.paiement;
      case 2:
        return !!this.formData.compte_courant;
      case 3:
        return !!(
          this.formData.nom &&
          this.formData.email &&
          this.formData.telephone
        );
      case 4:
        return !!this.formData.strategie_remboursement;
      case 5:
        return (
          !!this.formData.besoin_principal &&
          (this.formData.besoin_principal !== 'autre' ||
            !!this.formData.besoin_autre)
        );
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    return this.isStepValid() && this.currentStep === this.totalSteps;
  }

  // Gestionnaires de changement pour les champs
  onBesoinChange(value: string): void {
    this.formData.besoin_principal = value;
    this.showAutreBesoin = value === 'autre';
    if (value !== 'autre') {
      this.formData.besoin_autre = '';
    }
  }

  // Méthodes utilitaires pour les labels
  private getPaiementLabel(): string {
    const paiements = {
      personnel: 'Avec mes fonds personnels',
      societe: 'Avec les fonds de la société',
      mixte: 'Avec un mélange des deux',
    };
    return (
      paiements[this.formData.paiement as keyof typeof paiements] ||
      this.formData.paiement
    );
  }

  private getCompteCourantLabel(): string {
    const etats = {
      positif: "Positif (la société me doit de l'argent)",
      negatif: "Négatif (je dois de l'argent à la société)",
      equilibre: "À l'équilibre",
    };
    return (
      etats[this.formData.compte_courant as keyof typeof etats] ||
      this.formData.compte_courant
    );
  }

  private getStrategieLabel(): string {
    const strategies = {
      'remboursement-rapide': 'Remboursement rapide',
      'optimisation-fiscale': 'Optimisation fiscale',
      'pas-de-strategie': 'Pas de stratégie définie',
    };
    return (
      strategies[
        this.formData.strategie_remboursement as keyof typeof strategies
      ] || this.formData.strategie_remboursement
    );
  }

  private getBesoinLabel(): string {
    const besoins = {
      'comprendre-risques': 'Comprendre les risques',
      'optimiser-fiscalement': 'Optimiser fiscalement',
      'securiser-operations': 'Sécuriser les opérations',
      autre: 'Autre',
    };
    return (
      besoins[this.formData.besoin_principal as keyof typeof besoins] ||
      this.formData.besoin_principal
    );
  }
}
