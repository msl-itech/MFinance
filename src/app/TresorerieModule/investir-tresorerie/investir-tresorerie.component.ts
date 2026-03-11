import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../../services/meta.service';
import { OdooService } from '../../services/odoo.service';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';
import { DiagnosticConfig } from '../../shared/diagnostic/diagnostic.models';
@Component({
  selector: 'app-investir-tresorerie',
  templateUrl: './investir-tresorerie.component.html',
  styleUrl: './investir-tresorerie.component.css',
})
export class InvestirTresorerieComponent implements OnInit, OnDestroy {
  // Popup properties
  showPopup = false;
  popupTimer: any;

  // Form properties
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  isLoading = false;
  showAutreFrein = false;
  showAutreActivite = false;
  showMarchandises = false;

  // Form data
  formData = {
    souhaite_investir: '',
    frein_principal: '',
    frein_autre: '',
    nom: '',
    email: '',
    telephone: '',
    chiffre_affaires: '',
    type_activite: '',
    activite_autre: '',
    type_marchandises: '',
  };

  // Form configuration
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: '💸 Investissement & Trésorerie',
    title:
      'Découvrez en 3 minutes si votre investissement va booster… ou ruiner votre trésorerie !',
    description:
      'Prêt à investir ? Vérifiez si votre trésorerie est prête, elle aussi. Un mauvais timing peut transformer un bon investissement en cauchemar financier.',
    phoneButton: 'Appeler maintenant',
    contactButton: 'Faire mon diagnostic',

    // En-tête du formulaire
    formTitle: 'Diagnostic Investissement Express',
    formDescription: 'Formulaire rapide : 5 étapes – Moins de 3 minutes',
    badge: 'Gratuit & Confidentiel',

    // Boutons et messages
    submitButton: 'Recevoir mon diagnostic',
    successTitle: '🎉 Merci pour votre demande !',
    successMessage:
      'Un conseiller MFINANCES vous contactera très prochainement pour vous aider à sécuriser votre investissement.',
    successNote: "L'échange est gratuit, confidentiel et sans engagement.",
    resetButton: 'Faire une nouvelle demande',
  };

  diagnosticConfig: DiagnosticConfig = {
    id: 'investir-tresorerie',
    title: 'Votre entreprise peut-elle investir sans risque ?',
    subtitle: 'Répondez à quelques questions et découvrez si votre trésorerie vous permet d’investir sereinement.',
    questions: [
      {
        id: 'q1',
        question: 'Votre trésorerie actuelle couvre combien de mois de charges fixes ?',
        options: [
          { value: 'A', label: 'moins de 1 mois', sublabel: '', icon: '🔴', points: 0 },
          { value: 'B', label: 'entre 1 et 3 mois', sublabel: '', icon: '🟡', points: 3 },
          { value: 'C', label: 'plus de 3 mois', sublabel: '', icon: '🟢', points: 5 }
        ]
      },
      {
        id: 'q2',
        question: 'Avez-vous simulé l’impact de cet investissement sur votre trésorerie ?',
        options: [
          { value: 'A', label: 'non', sublabel: '', icon: '❌', points: 0 },
          { value: 'B', label: 'approximativement', sublabel: '', icon: '🤔', points: 3 },
          { value: 'C', label: 'précisément avec un tableau prévisionnel', sublabel: '', icon: '📊', points: 5 }
        ]
      },
      {
        id: 'q3',
        question: 'Votre investissement commence à générer du revenu dans combien de temps ?',
        options: [
          { value: 'A', label: 'plus de 12 mois', sublabel: '', icon: '⏳', points: 0 },
          { value: 'B', label: 'entre 6 et 12 mois', sublabel: '', icon: '📅', points: 3 },
          { value: 'C', label: 'moins de 6 mois', sublabel: '', icon: '⚡', points: 5 }
        ]
      },
      {
        id: 'q4',
        question: 'Comment pensez-vous financer cet investissement ?',
        options: [
          { value: 'A', label: 'uniquement avec votre trésorerie', sublabel: '', icon: '🏦', points: 0 },
          { value: 'B', label: 'financement mixte', sublabel: '', icon: '⚖️', points: 3 },
          { value: 'C', label: 'financement externe adapté', sublabel: '', icon: '🤝', points: 5 }
        ]
      },
      {
        id: 'q5',
        question: 'Votre entreprise a-t-elle déjà connu une tension de trésorerie ?',
        options: [
          { value: 'A', label: 'récemment', sublabel: '', icon: '⚠️', points: 0 },
          { value: 'B', label: 'il y a longtemps', sublabel: '', icon: '🕰️', points: 3 },
          { value: 'C', label: 'jamais', sublabel: '', icon: '🛡️', points: 5 }
        ]
      },
      {
        id: 'q6',
        question: 'Disposez-vous d’un tableau de trésorerie prévisionnel ?',
        options: [
          { value: 'A', label: 'non', sublabel: '', icon: '❌', points: 0 },
          { value: 'B', label: 'basique', sublabel: '', icon: '📝', points: 3 },
          { value: 'C', label: 'dynamique et mis à jour', sublabel: '', icon: '📈', points: 5 }
        ]
      }
    ],
    scoringRules: {
      maxScore: 30,
      levels: {
        low: { min: 0, max: 10, title: 'Investissement à risque', badge: '🔴' },
        medium: { min: 11, max: 20, title: 'Investissement possible mais à sécuriser', badge: '🟡' },
        high: { min: 21, max: 30, title: 'Investissement maîtrisé', badge: '🟢' }
      }
    },
    justifications: {
      questionAnalysis: {
        q1: { 'A': 'Votre trésorerie couvre moins d\'1 mois de charges : votre marge de sécurité est limitée.' },
        q2: { 'A': 'Sans simulation, vous exposez votre entreprise à des mauvaises surprises.', 'B': 'Une simulation approximative n\'est pas suffisante pour un investissement majeur.' },
        q4: { 'A': 'Financer avec vos fonds propres peut réduire dangereusement votre réserve de sécurité.' }
      }
    },
    profiles: [
      {
        id: 'risque',
        name: 'Investissement à risque',
        condition: (answers, score) => score <= 10,
        description: 'Votre projet d’investissement pourrait fragiliser votre trésorerie.\n\nVos réponses indiquent :\n• peu de visibilité financière\n• financement mal structuré\n• risque de tension de trésorerie',
        recommendation: 'Avant d’investir, il est essentiel de :\n• construire un tableau de trésorerie prévisionnel\n• analyser l’impact des remboursements\n• adapter le financement',
        ctaText: 'Sécuriser mon investissement',
        redirectUrl: 'https://odoo.mfinances.be/book/4781b4d3'
      },
      {
        id: 'moyen',
        name: 'Investissement possible mais à sécuriser',
        condition: (answers, score) => score > 10 && score <= 20,
        description: 'Votre entreprise peut probablement investir, mais certaines précautions sont nécessaires.\n\nVos réponses montrent :\n• une base financière correcte\n• mais une anticipation encore partielle',
        recommendation: 'Pour sécuriser votre projet :\n• simuler plusieurs scénarios financiers\n• adapter le mode de financement\n• préserver un coussin de trésorerie',
        ctaText: 'Optimiser mon investissement',
        redirectUrl: 'https://odoo.mfinances.be/book/4781b4d3'
      },
      {
        id: 'maitrise',
        name: 'Investissement maîtrisé',
        condition: (answers, score) => score > 20,
        description: 'Votre entreprise semble capable d’investir sans mettre sa trésorerie en danger.\n\nVos réponses montrent :\n• une bonne visibilité financière\n• une capacité d’anticipation\n• une structure financière solide',
        recommendation: 'La prochaine étape consiste à :\n• optimiser la structure de financement\n• sécuriser votre croissance\n• identifier les opportunités d’investissement',
        ctaText: 'Optimiser ma stratégie d’investissement',
        redirectUrl: 'https://odoo.mfinances.be/book/4781b4d3'
      }
    ]
  };

  constructor(
    private metaService: MetaService,
    private odooService: OdooService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Investir Trésorerie
    this.metaService.setInvestirTresoreriePageMeta();

    // Démarrer le timer pour le popup
    this.startPopupTimer();
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
    }, 10000); // 20 secondes
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

  // Form methods
  onSouhaiteInvestirChange(value: string) {
    this.formData.souhaite_investir = value;
  }

  onFreinChange(value: string) {
    this.formData.frein_principal = value;
    this.showAutreFrein = value === 'autre';
    if (value !== 'autre') {
      this.formData.frein_autre = '';
    }
  }

  onActiviteChange(value: string) {
    this.formData.type_activite = value;
    this.showAutreActivite = value === 'autre';
    this.showMarchandises =
      value === 'commerce-detail' || value === 'commerce-gros';

    if (value !== 'autre') {
      this.formData.activite_autre = '';
    }
    if (!this.showMarchandises) {
      this.formData.type_marchandises = '';
    }
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.souhaite_investir;
      case 2:
        return (
          !!this.formData.frein_principal &&
          (this.formData.frein_principal !== 'autre' ||
            !!this.formData.frein_autre)
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
          !!this.formData.type_activite &&
          (this.formData.type_activite !== 'autre' ||
            !!this.formData.activite_autre)
        );
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    return (
      this.formData.souhaite_investir !== '' &&
      this.formData.frein_principal !== '' &&
      (this.formData.frein_principal !== 'autre' ||
        this.formData.frein_autre !== '') &&
      this.formData.nom !== '' &&
      this.formData.email !== '' &&
      this.formData.telephone !== '' &&
      this.formData.chiffre_affaires !== '' &&
      this.formData.type_activite !== '' &&
      (this.formData.type_activite !== 'autre' ||
        this.formData.activite_autre !== '')
    );
  }

  onNextStep() {
    if (this.isStepValid() && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  onPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
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
      `<h3>Diagnostic Investissement & Trésorerie</h3>`,
      `<p><strong>Souhaite investir:</strong> ${this.getSouhaiteInvestirLabel()}</p>`,
      `<p><strong>Frein principal:</strong> ${this.getFreinLabel()}</p>`,
      this.formData.frein_autre
        ? `<p><strong>Précision frein:</strong> ${this.formData.frein_autre}</p>`
        : '',
      `<p><strong>Chiffre d'affaires:</strong> ${this.formData.chiffre_affaires}</p>`,
      `<p><strong>Type d'activité:</strong> ${this.getActiviteLabel()}</p>`,
      this.formData.activite_autre
        ? `<p><strong>Précision activité:</strong> ${this.formData.activite_autre}</p>`
        : '',
      this.formData.type_marchandises
        ? `<p><strong>Type de marchandises:</strong> ${this.formData.type_marchandises}</p>`
        : '',
    ];

    const fullDescription = descriptionParts.filter((p) => p).join('\n');

    const leadData = {
      name: this.formData.nom,
      phone: this.formData.telephone,
      email_from: this.formData.email,
      description: fullDescription,
      lead_type: 'investir_tresorerie',
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
  private getSouhaiteInvestirLabel(): string {
    const options = {
      'oui-pret': 'Oui, je suis prêt',
      'oui-hesitations': "Oui, mais j'ai des hésitations",
      'non-info': "Non, je m'informe juste",
    };
    return (
      options[this.formData.souhaite_investir as keyof typeof options] ||
      this.formData.souhaite_investir
    );
  }

  private getFreinLabel(): string {
    const freins = {
      'manque-liquidites': 'Manque de liquidités',
      'peur-endettement': "Peur de l'endettement",
      'incertitude-rentabilite': 'Incertitude sur la rentabilité',
      'complexite-financement': 'Complexité du financement',
      autre: 'Autre',
    };
    return (
      freins[this.formData.frein_principal as keyof typeof freins] ||
      this.formData.frein_principal
    );
  }

  private getActiviteLabel(): string {
    const activites = {
      independant: 'Indépendant',
      'commerce-detail': 'Commerce de détail',
      'commerce-gros': 'Commerce de gros',
      services: 'Prestations de services',
      production: 'Production',
      autre: 'Autre',
    };
    return (
      activites[this.formData.type_activite as keyof typeof activites] ||
      this.formData.type_activite
    );
  }

  onReset() {
    this.formData = {
      souhaite_investir: '',
      frein_principal: '',
      frein_autre: '',
      nom: '',
      email: '',
      telephone: '',
      chiffre_affaires: '',
      type_activite: '',
      activite_autre: '',
      type_marchandises: '',
    };
    this.currentStep = 1;
    this.formSubmitted = false;
    this.showAutreFrein = false;
    this.showAutreActivite = false;
    this.showMarchandises = false;
  }
}
