import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    stabilite: string;
    objectif: string;
    ressenti: string;
  };
}

interface DiagnosticAnswers {
  revenus: string;
  stabilite: string;
  objectif: string;
  ressenti: string;
}

@Component({
  selector: 'app-diagnostic-passage-societe',
  templateUrl: './diagnostic-passage-societe.component.html',
  styleUrl: './diagnostic-passage-societe.component.css',
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
export class DiagnosticPassageSocieteComponent implements OnInit {
  @Output() diagnosticComplete = new EventEmitter<DiagnosticResult>();

  currentQuestionIndex = 0;
  answers: DiagnosticAnswers = {
    revenus: '',
    stabilite: '',
    objectif: '',
    ressenti: ''
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
      question: 'Quel est votre chiffre d\'affaires annuel actuel ?',
      description: 'Estimation approximative de vos revenus bruts',
      options: [
        {
          value: 'moins-40k',
          label: 'Moins de 40 000€',
          sublabel: 'Activité en démarrage',
          icon: '🌱',
          points: 0
        },
        {
          value: '40-70k',
          label: '40 000€ - 70 000€',
          sublabel: 'Seuil de transition',
          icon: '📊',
          points: 2
        },
        {
          value: '70-110k',
          label: '70 000€ - 110 000€',
          sublabel: 'Zone optimale',
          icon: '📈',
          points: 4
        },
        {
          value: 'plus-110k',
          label: 'Plus de 110 000€',
          sublabel: 'Forte activité',
          icon: '🚀',
          points: 6
        }
      ]
    },
    {
      id: 'stabilite',
      question: 'Depuis combien de temps votre activité génère-t-elle des revenus stables ?',
      description: 'Régularité et prévisibilité de vos revenus',
      options: [
        {
          value: 'demarrage',
          label: 'Moins de 6 mois',
          sublabel: 'Phase de lancement',
          icon: '🌟',
          points: 0
        },
        {
          value: '6-12mois',
          label: '6 à 12 mois',
          sublabel: 'Début de stabilité',
          icon: '⏳',
          points: 2
        },
        {
          value: '1-2ans',
          label: '1 à 2 ans',
          sublabel: 'Activité consolidée',
          icon: '✅',
          points: 4
        },
        {
          value: 'plus-2ans',
          label: 'Plus de 2 ans',
          sublabel: 'Solidité confirmée',
          icon: '🏆',
          points: 4
        }
      ]
    },
    {
      id: 'objectif',
      question: 'Quel est votre objectif principal pour les prochaines années ?',
      description: 'Votre priorité stratégique',
      options: [
        {
          value: 'optimiser-fiscal',
          label: 'Optimiser ma fiscalité',
          sublabel: 'Payer moins d\'impôts',
          icon: '💰',
          points: 2
        },
        {
          value: 'investir',
          label: 'Investir et développer',
          sublabel: 'Croissance et projets',
          icon: '🎯',
          points: 4
        },
        {
          value: 'patrimoine',
          label: 'Protéger mon patrimoine',
          sublabel: 'Sécurité financière',
          icon: '🛡️',
          points: 4
        },
        {
          value: 'proteger',
          label: 'Séparer pro et perso',
          sublabel: 'Clarté et protection',
          icon: '🏠',
          points: 3
        }
      ]
    },
    {
      id: 'ressenti',
      question: 'Comment percevez-vous votre situation fiscale actuelle ?',
      description: 'Votre ressenti par rapport aux charges',
      options: [
        {
          value: 'pas-clair',
          label: 'Je ne sais pas trop',
          sublabel: 'Besoin de clarté',
          icon: '❓',
          points: 1
        },
        {
          value: 'ca-va',
          label: 'Ça va pour l\'instant',
          sublabel: 'Pas urgent',
          icon: '👌',
          points: 2
        },
        {
          value: 'paie-trop',
          label: 'Je paie beaucoup d\'impôts',
          sublabel: 'Optimisation nécessaire',
          icon: '😰',
          points: 3
        },
        {
          value: 'besoin-strategie',
          label: 'Je veux une vraie stratégie',
          sublabel: 'Vision long terme',
          icon: '🧠',
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

    if (totalScore <= 6) {
      level = 'low';
      title = 'Pas prioritaire (pour l\'instant)';
      description = 'D\'après vos réponses, le passage en société n\'est probablement pas encore rentable pour vous. Votre activité est peut-être encore en phase de démarrage ou génère des revenus modestes.';
      recommendation = 'Concentrez-vous sur le développement de votre activité. Refaites ce diagnostic dans 6-12 mois ou lorsque votre CA dépassera 70 000€/an de manière stable.';
      ctaText = 'Recevoir des conseils pour faire croître mon activité';
      ctaAction = 'wait';
    } else if (totalScore <= 12) {
      level = 'medium';
      title = 'À analyser (zone charnière)';
      description = 'Votre situation est intéressante. Vous êtes dans une zone où le passage en société pourrait commencer à être rentable, mais cela dépend de plusieurs facteurs spécifiques à votre situation.';
      recommendation = 'Une analyse personnalisée est recommandée pour calculer précisément les économies potentielles vs les coûts supplémentaires. Le timing est crucial.';
      ctaText = 'Recevoir mon analyse personnalisée (1200€)';
      ctaAction = 'analyze';
    } else {
      level = 'high';
      title = 'Très probable que ce soit rentable';
      description = 'D\'après vos réponses, vous avez un profil idéal pour le passage en société. Votre niveau de revenus, la stabilité de votre activité et vos objectifs suggèrent des économies potentielles significatives.';
      recommendation = 'Nous vous recommandons vivement une simulation complète. Vous pourriez économiser plusieurs milliers d\'euros par an en optimisant votre structure juridique et fiscale.';
      ctaText = 'Demander ma simulation complète';
      ctaAction = 'contact';
    }

    this.result = {
      score: totalScore,
      maxScore: 20,
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
      lead_type: 'diagnostic_passage_societe'
    };

    this.odooService.createLead(leadData).subscribe({
      next: (response) => {
        this.isLoadingEmail = false;
        this.showEmailModal = false;
        this.toastr.success(
          'Merci ! Vous recevrez votre rapport PDF détaillé par email dans quelques minutes.',
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
      low: '🟢 Pas prioritaire',
      medium: '🟡 Zone charnière',
      high: '🔴 Très probable rentable'
    };

    return `
      <h3>📊 Diagnostic Passage en Société - Demande de Rapport PDF</h3>

      <div style="background: #f0f9ff; padding: 15px; border-left: 4px solid #3b82f6; margin: 20px 0;">
        <h4 style="color: #1e40af; margin: 0 0 10px 0;">Résultat du Diagnostic</h4>
        <p><strong>Score:</strong> ${this.result.score}/20</p>
        <p><strong>Niveau:</strong> ${levelLabels[this.result.level]}</p>
        <p><strong>Conclusion:</strong> ${this.result.title}</p>
      </div>

      <h4>Réponses détaillées:</h4>
      <ul>
        <li><strong>Chiffre d'affaires:</strong> ${this.getRevenusLabel(this.result.answers.revenus)}</li>
        <li><strong>Stabilité de l'activité:</strong> ${this.getStabiliteLabel(this.result.answers.stabilite)}</li>
        <li><strong>Objectif principal:</strong> ${this.getObjectifLabel(this.result.answers.objectif)}</li>
        <li><strong>Ressenti fiscal:</strong> ${this.getResentiLabel(this.result.answers.ressenti)}</li>
      </ul>

      <p><strong>Action recommandée:</strong> ${this.result.recommendation}</p>
    `;
  }

  getRevenusLabel(value: string): string {
    const labels: { [key: string]: string } = {
      'moins-40k': 'Moins de 40 000€',
      '40-70k': '40 000€ - 70 000€',
      '70-110k': '70 000€ - 110 000€',
      'plus-110k': 'Plus de 110 000€'
    };
    return labels[value] || value;
  }

  getStabiliteLabel(value: string): string {
    const labels: { [key: string]: string } = {
      'demarrage': 'Moins de 6 mois',
      '6-12mois': '6 à 12 mois',
      '1-2ans': '1 à 2 ans',
      'plus-2ans': 'Plus de 2 ans'
    };
    return labels[value] || value;
  }

  getObjectifLabel(value: string): string {
    const labels: { [key: string]: string } = {
      'optimiser-fiscal': 'Optimiser ma fiscalité',
      'investir': 'Investir et développer',
      'patrimoine': 'Protéger mon patrimoine',
      'proteger': 'Séparer pro et perso'
    };
    return labels[value] || value;
  }

  getResentiLabel(value: string): string {
    const labels: { [key: string]: string } = {
      'pas-clair': 'Je ne sais pas trop',
      'ca-va': 'Ça va pour l\'instant',
      'paie-trop': 'Je paie beaucoup d\'impôts',
      'besoin-strategie': 'Je veux une vraie stratégie'
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

    localStorage.setItem('mfinances_diagnostic_passage_societe', JSON.stringify(data));
  }

  private loadFromLocalStorage(): void {
    const stored = localStorage.getItem('mfinances_diagnostic_passage_societe');
    if (!stored) return;

    try {
      const data = JSON.parse(stored);
      const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);

      // Vérifier l'expiration
      if (data.timestamp < thirtyDaysAgo) {
        localStorage.removeItem('mfinances_diagnostic_passage_societe');
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
      stabilite: '',
      objectif: '',
      ressenti: ''
    };
    this.showResult = false;
    this.result = null;
    this.showEmailModal = false;
  }

  scrollToContact(): void {
    const element = document.getElementById('contactSection');
    if (element) {
      this.closeEmailModal();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
