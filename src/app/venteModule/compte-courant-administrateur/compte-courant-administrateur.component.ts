import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-compte-courant-administrateur',
  templateUrl: './compte-courant-administrateur.component.html',
  styleUrl: './compte-courant-administrateur.component.css',
})
export class CompteCourantAdministrateurComponent implements OnInit {
  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: '🧭 Introduction engageante',
    title: 'Êtes-vous maître de votre compte courant administrateur ?',
    description:
      'Votre compte courant administrateur cache-t-il une bombe à retardement ? En 2 minutes, faites le point sur vos pratiques financières. Un expert Mfinances vous contactera sous 72h pour une analyse gratuite et confidentielle. 🕵️‍♂️ Ensemble, faisons la lumière sur ce que vos chiffres ne disent pas encore…',
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

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Compte Courant Administrateur
    this.metaService.setCompteCourantPageMeta();
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
    if (this.isFormValid()) {
      this.formSubmitted = true;
      console.log('Données du formulaire:', this.formData);
      // Ici vous pouvez ajouter l'envoi des données à votre service
    }
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
}
