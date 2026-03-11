import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../../services/meta.service';
import { OdooService } from '../../services/odoo.service';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';
import { DiagnosticConfig } from '../../shared/diagnostic/diagnostic.models';
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

  diagnosticConfig: DiagnosticConfig = {
    id: 'tresorerie-benefice',
    title: 'Votre bénéfice reflète-t-il vraiment votre trésorerie ?',
    subtitle: 'Répondez à 8 questions stratégiques pour savoir si votre rentabilité correspond réellement à votre situation de trésorerie.',
    questions: [
      {
        id: 'q1',
        question: 'Vos clients paient en moyenne sous combien de jours ?',
        options: [
          { value: 'A', label: 'Plus de 60 jours', sublabel: '', icon: '⏳', points: 0 },
          { value: 'B', label: 'Entre 30 et 60 jours', sublabel: '', icon: '📅', points: 2 },
          { value: 'C', label: 'Moins de 30 jours', sublabel: '', icon: '⚡', points: 4 }
        ]
      },
      {
        id: 'q2',
        question: 'Votre trésorerie vous permet-elle de payer sereinement vos charges ?',
        options: [
          { value: 'A', label: 'Non, c’est souvent tendu', sublabel: '', icon: '😰', points: 0 },
          { value: 'B', label: 'Cela dépend des périodes', sublabel: '', icon: '⚖️', points: 2 },
          { value: 'C', label: 'Oui, c’est globalement confortable', sublabel: '', icon: '🧘', points: 4 }
        ]
      },
      {
        id: 'q3',
        question: 'Disposez-vous d’un tableau de trésorerie prévisionnel ?',
        options: [
          { value: 'A', label: 'Non', sublabel: '', icon: '❌', points: 0 },
          { value: 'B', label: 'Oui, mais très simple', sublabel: '', icon: '📝', points: 2 },
          { value: 'C', label: 'Oui, mis à jour régulièrement', sublabel: '', icon: '📊', points: 4 }
        ]
      },
      {
        id: 'q4',
        question: 'Avant d’être payé par vos clients, devez-vous avancer certaines dépenses ?',
        description: 'Par exemple : salaires, achats fournisseurs, matériel, sous-traitance, charges fixes',
        options: [
          { value: 'A', label: 'Oui, je dois souvent avancer des dépenses importantes', sublabel: '', icon: '💸', points: 0 },
          { value: 'B', label: 'Oui, mais cela reste globalement maîtrisé', sublabel: '', icon: '⚖️', points: 2 },
          { value: 'C', label: 'Non, je suis payé avant ou en même temps', sublabel: '', icon: '🛡️', points: 4 }
        ]
      },
      {
        id: 'q5',
        question: 'La TVA ou les impôts créent-ils parfois une surprise financière ?',
        options: [
          { value: 'A', label: 'Oui, régulièrement', sublabel: '', icon: '⚠️', points: 0 },
          { value: 'B', label: 'Parfois', sublabel: '', icon: '🤔', points: 2 },
          { value: 'C', label: 'Non, ils sont anticipés', sublabel: '', icon: '✅', points: 4 }
        ]
      },
      {
        id: 'q6',
        question: 'Avez-vous déjà eu un bénéfice positif… mais une trésorerie tendue ?',
        options: [
          { value: 'A', label: 'Oui, plusieurs fois', sublabel: '', icon: '🔄', points: 0 },
          { value: 'B', label: 'Oui, ponctuellement', sublabel: '', icon: '📉', points: 2 },
          { value: 'C', label: 'Non', sublabel: '', icon: '📈', points: 4 }
        ]
      },
      {
        id: 'q7',
        question: 'Votre priorité actuelle est plutôt :',
        options: [
          { value: 'A', label: 'Stabiliser votre situation financière', sublabel: '', icon: '⚓', points: 0 },
          { value: 'B', label: 'Structurer et sécuriser vos flux', sublabel: '', icon: '🏗️', points: 2 },
          { value: 'C', label: 'Investir et développer votre entreprise', sublabel: '', icon: '🚀', points: 4 }
        ]
      },
      {
        id: 'q8',
        question: 'Comment qualifieriez-vous votre niveau de stress financier ?',
        options: [
          { value: 'A', label: 'Élevé', sublabel: '', icon: '😫', points: 0 },
          { value: 'B', label: 'Modéré', sublabel: '', icon: '😐', points: 2 },
          { value: 'C', label: 'Faible', sublabel: '', icon: '😎', points: 3 }
        ]
      }
    ],
    scoringRules: {
      maxScore: 31,
      levels: {
        low: { min: 0, max: 10, title: 'Bénéfice trompeur', badge: '🔴' },
        medium: { min: 11, max: 20, title: 'Situation fragile', badge: '🟡' },
        high: { min: 21, max: 31, title: 'Cohérence entre bénéfice et trésorerie', badge: '🟢' }
      }
    },
    justifications: {
      questionAnalysis: {
        q1: { 'A': 'Vos délais clients supérieurs à 60 jours ralentissent votre cycle d’encaissement.' },
        q3: { 'A': 'L’absence de tableau de trésorerie limite votre capacité d’anticipation.' },
        q4: { 'A': 'Votre activité nécessite d’avancer certaines dépenses avant d’être payé, ce qui crée un besoin de trésorerie structurel.' },
        q5: { 'A': 'Les échéances fiscales imprévues créent souvent des tensions brutales de trésorerie.' },
        q6: { 'A': 'Le fait d’avoir déjà connu une trésorerie tendue malgré un bénéfice positif est un signal d’alerte fréquent.' },
        q8: { 'A': 'Un stress financier élevé est souvent le signe d’une visibilité insuffisante sur les flux financiers.' }
      }
    },
    profiles: [
      {
        id: 'benefice_trompeur',
        name: 'Bénéfice trompeur',
        condition: (answers, score) => score <= 10,
        description: 'Votre diagnostic indique que votre bénéfice comptable ne reflète probablement pas votre situation réelle de trésorerie.\n\nVos réponses suggèrent que : \n- vos délais clients ralentissent vos encaissements\n- certaines dépenses doivent être avancées avant d’être payées\n- vos obligations fiscales ne sont pas totalement anticipées\n- vous ne disposez pas d’une visibilité claire sur vos flux financiers\n\nDans ce contexte, votre rentabilité peut masquer une fragilité de liquidité.\nUn imprévu (retard client, TVA, investissement) peut rapidement créer une tension.',
        recommendation: 'Mettre en place rapidement : un tableau de trésorerie prévisionnel, une stratégie d’anticipation fiscale, une gestion active des encaissements.',
        ctaText: 'Demander un audit de trésorerie',
        redirectUrl: 'https://odoo.mfinances.be/book/4781b4d3'
      },
      {
        id: 'fragile',
        name: 'Situation fragile',
        condition: (answers, score) => score > 10 && score <= 20,
        description: 'Votre diagnostic montre que votre bénéfice et votre trésorerie sont partiellement alignés, mais certains points de vigilance subsistent.\n\nVotre situation indique que : \n- votre trésorerie dépend encore de certains décalages financiers\n- votre visibilité sur les flux pourrait être améliorée\n- certaines périodes pourraient générer des tensions\n\nVous disposez d’une base saine, mais une meilleure anticipation vous permettrait de sécuriser votre développement.',
        recommendation: 'Structurer votre pilotage financier : suivi de trésorerie, optimisation des délais clients, anticipation TVA et impôts.',
        ctaText: 'Recevoir une analyse personnalisée',
        redirectUrl: 'https://odoo.mfinances.be/book/4781b4d3'
      },
      {
        id: 'coherent',
        name: 'Cohérence entre bénéfice et trésorerie',
        condition: (answers, score) => score > 20,
        description: 'Votre diagnostic montre une bonne cohérence entre votre rentabilité et votre trésorerie.\n\nVos réponses indiquent généralement que : \n- vos délais clients sont maîtrisés\n- vos obligations fiscales sont anticipées\n- vous disposez d’une visibilité financière satisfaisante\n- votre modèle économique limite les décalages de trésorerie\n\nVous avez déjà mis en place une discipline financière solide.\nLa prochaine étape consiste à utiliser cette stabilité pour optimiser votre stratégie : investissements, structuration patrimoniale, optimisation de rémunération.',
        recommendation: 'Optimiser votre stratégie : investissements, structuration patrimoniale, optimisation de rémunération.',
        ctaText: 'Planifier une consultation stratégique',
        redirectUrl: 'https://odoo.mfinances.be/book/4781b4d3'
      }
    ]
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
  ) { }

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
