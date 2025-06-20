import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../../services/meta.service';
import { OdooService } from '../../services/odoo.service';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-tresorerie-benefice',
  templateUrl: './tresorerie-benefice.component.html',
  styleUrl: './tresorerie-benefice.component.css',
})
export class TresorerieBeneficeComponent implements OnInit {
  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: ' Bilan Express',
    title: 'Bilan Trésorerie Express – en 4 questions',
    description:
      "Pour bien démarrer, identifions ensemble le principal frein à votre trésorerie aujourd'hui. Ces informations nous permettent de vous fournir un retour réellement personnalisé.",
    phoneButton: 'Appelez maintenant',
    contactButton: 'Nous contacter',

    // En-tête du formulaire
    formTitle: 'Bilan Trésorerie Express',
    formDescription: 'Diagnostic en 4 étapes',
    badge: 'Mini-diagnostic Gratuit',

    // Boutons et messages
    submitButton: 'Recevoir mon diagnostic',
    successTitle: 'Merci pour vos réponses !',
    successMessage:
      'Notre équipe vous contactera par téléphone sous 72h. 🧠 Préparez vos questions : cet appel est 100 % gratuit et personnalisé.',
    successNote:
      '📄 À la suite de notre échange, vous recevrez un mini-diagnostic clair et sans engagement sur la santé de votre trésorerie.',
    resetButton: 'Nouveau diagnostic',
  };

  // État du formulaire
  currentStep = 1;
  totalSteps = 4;
  formSubmitted = false;
  isLoading = false;

  // État du pop-up
  showPopup = false;
  popupClosed = false;

  // Données du formulaire
  formData = {
    situation_actuelle: '',
    situation_autre: '',
    chiffre_affaires: '',
    nom: '',
    email: '',
    telephone: '',
    pratiques_gestion: '',
  };

  // Flags pour les champs "autre"
  showAutreSituation = false;

  constructor(
    private metaService: MetaService,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Trésorerie Bénéfice
    this.metaService.setTresorerieBeneficePageMeta();

    // Afficher le pop-up après 15 secondes
    setTimeout(() => {
      if (!this.popupClosed) {
        this.showPopup = true;
      }
    }, 10000);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Gestion du pop-up
  closePopup(): void {
    this.showPopup = false;
    this.popupClosed = true;
  }

  openFormFromPopup(): void {
    this.closePopup();
    this.scrollToSection('contactSection');
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
      `<h3>Bilan Trésorerie Express</h3>`,
      `<p><strong>Situation actuelle:</strong> ${this.getSituationLabel()}</p>`,
      this.formData.situation_autre
        ? `<p><strong>Précision situation:</strong> ${this.formData.situation_autre}</p>`
        : '',
      `<p><strong>Chiffre d'affaires:</strong> ${this.formData.chiffre_affaires}</p>`,
      `<p><strong>Pratiques de gestion:</strong> ${this.getPratiquesLabel()}</p>`,
    ];

    const fullDescription = descriptionParts.filter((p) => p).join('\n');

    const leadData = {
      name: this.formData.nom,
      phone: this.formData.telephone,
      email_from: this.formData.email,
      description: fullDescription,
      lead_type: 'tresorerie_benefice',
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
      situation_actuelle: '',
      situation_autre: '',
      chiffre_affaires: '',
      nom: '',
      email: '',
      telephone: '',
      pratiques_gestion: '',
    };
    this.showAutreSituation = false;
  }

  // Validation des étapes
  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return (
          !!this.formData.situation_actuelle &&
          (this.formData.situation_actuelle !== 'autre' ||
            !!this.formData.situation_autre)
        );
      case 2:
        return !!this.formData.chiffre_affaires;
      case 3:
        return !!(
          this.formData.nom &&
          this.formData.email &&
          this.formData.telephone
        );
      case 4:
        return !!this.formData.pratiques_gestion;
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    return this.isStepValid() && this.currentStep === this.totalSteps;
  }

  // Gestionnaires de changement pour les champs
  onSituationChange(value: string): void {
    this.formData.situation_actuelle = value;
    this.showAutreSituation = value === 'autre';
    if (value !== 'autre') {
      this.formData.situation_autre = '';
    }
  }

  // Méthodes utilitaires pour les labels
  private getSituationLabel(): string {
    const situations = {
      'bonne-tresorerie': 'Bonne trésorerie mais manque de visibilité',
      'tensions-regulieres': 'Tensions régulières',
      'difficultes-majeures': 'Difficultés majeures',
      autre: 'Autre',
    };
    return (
      situations[this.formData.situation_actuelle as keyof typeof situations] ||
      this.formData.situation_actuelle
    );
  }

  private getPratiquesLabel(): string {
    const pratiques = {
      'suivi-quotidien': 'Suivi quotidien',
      'suivi-hebdomadaire': 'Suivi hebdomadaire',
      'suivi-mensuel': 'Suivi mensuel',
      'pas-de-suivi': 'Pas de suivi régulier',
    };
    return (
      pratiques[this.formData.pratiques_gestion as keyof typeof pratiques] ||
      this.formData.pratiques_gestion
    );
  }
}
