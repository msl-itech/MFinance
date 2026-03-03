import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { OdooService } from '../../services/odoo.service';

export interface DiagnosticQuestion {
  id: string;
  question: string;
  description?: string;
  options: DiagnosticOption[];
}

export interface DiagnosticOption {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
  points: number;
}

export interface DiagnosticResult {
  score: number;
  maxScore: number;
  level: 'low' | 'medium' | 'high';
  title: string;
  description: string;
  recommendation: string;
  ctaText: string;
  ctaAction: 'wait' | 'analyze' | 'contact';
  answers: {
    revenus: string;
    sources: string;
    objectif: string;
    structure: string;
    vision: string;
  };
}

interface DiagnosticAnswers {
  revenus: string;
  sources: string;
  objectif: string;
  structure: string;
  vision: string;
}

@Component({
  selector: 'app-diagnostic-management-patrimonial',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diagnostic-management-patrimonial.component.html',
  styleUrl: './diagnostic-management-patrimonial.component.css',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class DiagnosticManagementPatrimonialComponent implements OnInit {
  @Output() diagnosticComplete = new EventEmitter<DiagnosticResult>();

  currentQuestionIndex = 0;
  answers: DiagnosticAnswers = {
    revenus: '',
    sources: '',
    objectif: '',
    structure: '',
    vision: ''
  };

  showResult = false;
  result: DiagnosticResult | null = null;
  showEmailModal = false;
  isLoadingEmail = false;

  emailData = {
    nom: '',
    email: ''
  };

  questions: DiagnosticQuestion[] = [
    {
      id: 'revenus',
      question: 'Niveau de revenus professionnels annuels',
      description: 'Quel est le total de vos revenus professionnels ?',
      options: [
        {
          value: 'moins-80k',
          label: 'Moins de 80 000 €',
          sublabel: 'Activité en développement',
          icon: '🌱',
          points: 0
        },
        {
          value: '80-150k',
          label: '80 000 à 150 000 €',
          sublabel: 'Seuil de transition',
          icon: '📊',
          points: 3
        },
        {
          value: '150-250k',
          label: '150 000 à 250 000 €',
          sublabel: 'Zone optimale',
          icon: '📈',
          points: 5
        },
        {
          value: 'plus-250k',
          label: 'Plus de 250 000 €',
          sublabel: 'Revenus importants',
          icon: '🚀',
          points: 7
        }
      ]
    },
    {
      id: 'sources',
      question: 'Nombre de sources de revenus',
      description: 'Combien de sources génèrent vos revenus ?',
      options: [
        {
          value: 'une-seule',
          label: 'Une seule activité',
          sublabel: 'Source unique',
          icon: '1️⃣',
          points: 1
        },
        {
          value: 'deux-activites',
          label: 'Deux activités',
          sublabel: 'Diversification simple',
          icon: '2️⃣',
          points: 3
        },
        {
          value: 'plusieurs-sources',
          label: 'Plusieurs sources',
          sublabel: 'Consulting, dividendes, etc.',
          icon: '💼',
          points: 5
        }
      ]
    },
    {
      id: 'objectif',
      question: 'Objectif principal',
      description: 'Quelle est votre priorité stratégique ?',
      options: [
        {
          value: 'simple-facturation',
          label: 'Simple facturation',
          sublabel: 'Besoin opérationnel',
          icon: '📋',
          points: 0
        },
        {
          value: 'optimiser-fiscalite',
          label: 'Optimiser la fiscalité',
          sublabel: 'Réduction d\'impôts',
          icon: '💰',
          points: 3
        },
        {
          value: 'structurer-patrimoine',
          label: 'Structurer patrimoine long terme',
          sublabel: 'Vision patrimoniale',
          icon: '🏛️',
          points: 5
        },
        {
          value: 'transmission',
          label: 'Préparer transmission/investissements',
          sublabel: 'Planification successorale',
          icon: '🎯',
          points: 5
        }
      ]
    },
    {
      id: 'structure',
      question: 'Votre structure actuelle',
      description: 'Comment êtes-vous organisé aujourd\'hui ?',
      options: [
        {
          value: 'personne-physique',
          label: 'Indépendant personne physique',
          sublabel: 'Sans société',
          icon: '👤',
          points: 1
        },
        {
          value: 'societe-simple',
          label: 'Société simple sans stratégie',
          sublabel: 'Structure basique',
          icon: '🏢',
          points: 3
        },
        {
          value: 'societe-benefices',
          label: 'Société avec bénéfices récurrents',
          sublabel: 'Activité consolidée',
          icon: '💼',
          points: 5
        }
      ]
    },
    {
      id: 'vision',
      question: 'Vision long terme',
      description: 'Quelle est votre horizon de planification ?',
      options: [
        {
          value: 'court-terme',
          label: 'Je fonctionne au court terme',
          sublabel: 'Pas de planification',
          icon: '⏱️',
          points: 0
        },
        {
          value: '3-ans',
          label: 'Je réfléchis à 3 ans',
          sublabel: 'Vision moyen terme',
          icon: '📅',
          points: 3
        },
        {
          value: '5-10-ans',
          label: 'Je planifie à 5–10 ans',
          sublabel: 'Stratégie long terme',
          icon: '🎯',
          points: 5
        }
      ]
    }
  ];

  constructor(
    private toastr: ToastrService,
    private odooService: OdooService
  ) {}

  ngOnInit(): void {
    this.loadFromLocalStorage();
  }

  get currentQuestion(): DiagnosticQuestion {
    return this.questions[this.currentQuestionIndex];
  }

  get progressPercentage(): number {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  get isFirstQuestion(): boolean {
    return this.currentQuestionIndex === 0;
  }

  get isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  get currentAnswer(): string {
    const questionId = this.currentQuestion.id as keyof DiagnosticAnswers;
    return this.answers[questionId];
  }

  selectOption(option: DiagnosticOption): void {
    const questionId = this.currentQuestion.id as keyof DiagnosticAnswers;
    this.answers[questionId] = option.value;
  }

  nextQuestion(): void {
    if (!this.currentAnswer) {
      this.toastr.warning('Veuillez sélectionner une option', 'Attention');
      return;
    }

    if (this.isLastQuestion) {
      this.calculateResult();
    } else {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion(): void {
    if (!this.isFirstQuestion) {
      this.currentQuestionIndex--;
    }
  }

  calculateResult(): void {
    let totalScore = 0;

    // Calcul du score basé sur les réponses
    this.questions.forEach(question => {
      const questionId = question.id as keyof DiagnosticAnswers;
      const answerValue = this.answers[questionId];
      const selectedOption = question.options.find(opt => opt.value === answerValue);

      if (selectedOption) {
        totalScore += selectedOption.points;
      }
    });

    // Détermination du niveau et des recommandations
    let level: 'low' | 'medium' | 'high';
    let title: string;
    let description: string;
    let recommendation: string;
    let ctaText: string;
    let ctaAction: 'wait' | 'analyze' | 'contact';

    if (totalScore <= 7) {
      level = 'low';
      title = 'Non prioritaire actuellement';
      description = 'D\'après vos réponses, une société de management patrimoniale n\'est probablement pas encore adaptée à votre situation. Vos revenus sont peut-être encore insuffisants ou votre activité manque de stabilité pour justifier cette structure.';
      recommendation = 'Concentrez-vous d\'abord sur l\'optimisation de votre structure actuelle. Refaites ce diagnostic lorsque vos revenus dépasseront 80 000€/an de manière récurrente ou que vous aurez plusieurs sources de revenus.';
      ctaText = 'Recevoir nos conseils d\'optimisation';
      ctaAction = 'wait';
    } else if (totalScore <= 15) {
      level = 'medium';
      title = 'À analyser stratégiquement';
      description = 'Votre situation présente certains signaux positifs. Une société de management pourrait potentiellement vous être bénéfique, mais cela nécessite une analyse approfondie de votre situation spécifique pour valider la pertinence.';
      recommendation = 'Nous recommandons une simulation personnalisée pour calculer précisément les avantages vs les coûts dans votre cas. Le timing et la structuration sont essentiels pour maximiser les bénéfices.';
      ctaText = 'Demander une simulation personnalisée';
      ctaAction = 'analyze';
    } else {
      level = 'high';
      title = 'Structure très probablement pertinente';
      description = 'Excellent ! Votre profil correspond parfaitement à celui pour lequel une société de management patrimoniale peut devenir un levier puissant. Vos revenus élevés, vos multiples sources et votre vision long terme suggèrent un potentiel d\'optimisation significatif.';
      recommendation = 'Vous pourriez économiser entre 15 000€ et 40 000€ par an en structurant intelligemment vos revenus et votre patrimoine. Une consultation stratégique vous permettra de construire un plan d\'action personnalisé.';
      ctaText = 'Planifier une consultation stratégique';
      ctaAction = 'contact';
    }

    this.result = {
      score: totalScore,
      maxScore: 25,
      level,
      title,
      description,
      recommendation,
      ctaText,
      ctaAction,
      answers: { ...this.answers }
    };

    this.showResult = true;
    this.saveToLocalStorage();

    // Afficher le modal email après 2 secondes
    setTimeout(() => {
      this.showEmailModal = true;
    }, 2000);

    // Émettre l'événement vers le composant parent
    this.diagnosticComplete.emit(this.result);
  }

  closeEmailModal(): void {
    this.showEmailModal = false;
  }

  submitEmail(): void {
    if (!this.emailData.nom || !this.emailData.email) {
      this.toastr.warning('Veuillez renseigner votre nom et email', 'Attention');
      return;
    }

    // Validation basique de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.emailData.email)) {
      this.toastr.error('Veuillez entrer un email valide', 'Erreur');
      return;
    }

    this.isLoadingEmail = true;

    // Créer un lead dans Odoo
    const leadData = {
      name: this.emailData.nom,
      email_from: this.emailData.email,
      description: this.generateEmailLeadDescription(),
      lead_type: 'diagnostic_management_patrimonial'
    };

    this.odooService.createLead(leadData).subscribe({
      next: (response) => {
        this.isLoadingEmail = false;
        this.showEmailModal = false;
        this.toastr.success(
          'Merci ! Vous recevrez votre analyse détaillée par email dans quelques minutes.',
          'Email enregistré'
        );

        // Mettre à jour le localStorage avec les infos email
        this.saveToLocalStorage();
      },
      error: (error) => {
        this.isLoadingEmail = false;
        this.toastr.error(
          'Une erreur est survenue. Veuillez réessayer.',
          'Erreur'
        );
        console.error('Erreur lors de la création du lead:', error);
      }
    });
  }

  private generateEmailLeadDescription(): string {
    if (!this.result) return '';

    const levelLabels = {
      low: '🟢 Non prioritaire',
      medium: '🟡 À analyser',
      high: '🔴 Très pertinent'
    };

    return `
      <h3>📊 Diagnostic Société de Management Patrimoniale</h3>

      <div style="background: #f0f9ff; padding: 15px; border-left: 4px solid #3b82f6; margin: 20px 0;">
        <h4 style="color: #1e40af; margin: 0 0 10px 0;">Résultat du Diagnostic</h4>
        <p><strong>Score:</strong> ${this.result.score}/25</p>
        <p><strong>Niveau:</strong> ${levelLabels[this.result.level]}</p>
        <p><strong>Conclusion:</strong> ${this.result.title}</p>
      </div>

      <h4>Réponses détaillées:</h4>
      <ul>
        <li><strong>Revenus professionnels:</strong> ${this.getRevenusLabel(this.result.answers.revenus)}</li>
        <li><strong>Sources de revenus:</strong> ${this.getSourcesLabel(this.result.answers.sources)}</li>
        <li><strong>Objectif principal:</strong> ${this.getObjectifLabel(this.result.answers.objectif)}</li>
        <li><strong>Structure actuelle:</strong> ${this.getStructureLabel(this.result.answers.structure)}</li>
        <li><strong>Vision long terme:</strong> ${this.getVisionLabel(this.result.answers.vision)}</li>
      </ul>

      <p><strong>Recommandation:</strong> ${this.result.recommendation}</p>
    `;
  }

  getRevenusLabel(value: string): string {
    const labels: { [key: string]: string } = {
      'moins-80k': 'Moins de 80 000 €',
      '80-150k': '80 000 à 150 000 €',
      '150-250k': '150 000 à 250 000 €',
      'plus-250k': 'Plus de 250 000 €'
    };
    return labels[value] || value;
  }

  getSourcesLabel(value: string): string {
    const labels: { [key: string]: string } = {
      'une-seule': 'Une seule activité',
      'deux-activites': 'Deux activités',
      'plusieurs-sources': 'Plusieurs sources (consulting, dividendes, etc.)'
    };
    return labels[value] || value;
  }

  getObjectifLabel(value: string): string {
    const labels: { [key: string]: string } = {
      'simple-facturation': 'Simple facturation',
      'optimiser-fiscalite': 'Optimiser la fiscalité',
      'structurer-patrimoine': 'Structurer patrimoine long terme',
      'transmission': 'Préparer transmission/investissements'
    };
    return labels[value] || value;
  }

  getStructureLabel(value: string): string {
    const labels: { [key: string]: string } = {
      'personne-physique': 'Indépendant personne physique',
      'societe-simple': 'Société simple sans stratégie',
      'societe-benefices': 'Société avec bénéfices récurrents'
    };
    return labels[value] || value;
  }

  getVisionLabel(value: string): string {
    const labels: { [key: string]: string } = {
      'court-terme': 'Court terme',
      '3-ans': '3 ans',
      '5-10-ans': '5-10 ans'
    };
    return labels[value] || value;
  }

  private saveToLocalStorage(): void {
    const data = {
      timestamp: Date.now(),
      score: this.result?.score || 0,
      level: this.result?.level || 'low',
      answers: this.answers,
      email: this.emailData.email,
      nom: this.emailData.nom
    };

    localStorage.setItem('mfinances_diagnostic_management_patrimonial', JSON.stringify(data));
  }

  private loadFromLocalStorage(): void {
    const stored = localStorage.getItem('mfinances_diagnostic_management_patrimonial');
    if (!stored) return;

    try {
      const data = JSON.parse(stored);
      const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);

      // Vérifier l'expiration
      if (data.timestamp < thirtyDaysAgo) {
        localStorage.removeItem('mfinances_diagnostic_management_patrimonial');
        return;
      }

      // Charger les données si elles existent
      if (data.email) this.emailData.email = data.email;
      if (data.nom) this.emailData.nom = data.nom;
    } catch (error) {
      console.error('Erreur lors du chargement du localStorage:', error);
    }
  }

  restartDiagnostic(): void {
    this.currentQuestionIndex = 0;
    this.answers = {
      revenus: '',
      sources: '',
      objectif: '',
      structure: '',
      vision: ''
    };
    this.showResult = false;
    this.result = null;
    this.showEmailModal = false;
  }

  scrollToContact(): void {
    const element = document.getElementById('contact');
    if (element) {
      this.closeEmailModal();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
