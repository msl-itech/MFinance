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
    benefices: string;
    situation: string;
    objectif: string;
    fiscal: string;
    horizon: string;
  };
}

interface DiagnosticAnswers {
  benefices: string;
  situation: string;
  objectif: string;
  fiscal: string;
  horizon: string;
}

@Component({
  selector: 'app-diagnostic-compte-courant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diagnostic-compte-courant.component.html',
  styleUrl: './diagnostic-compte-courant.component.css',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class DiagnosticCompteCourantComponent implements OnInit {
  @Output() diagnosticComplete = new EventEmitter<DiagnosticResult>();

  currentStep = 0;
  totalSteps = 5;
  showResult = false;
  showEmailModal = false;
  emailSubmitted = false;

  answers: DiagnosticAnswers = {
    benefices: '',
    situation: '',
    objectif: '',
    fiscal: '',
    horizon: ''
  };

  userEmail = '';
  userName = '';
  result: DiagnosticResult | null = null;

  questions: DiagnosticQuestion[] = [
    {
      id: 'benefices',
      question: 'Quel est votre niveau de bénéfices annuels ?',
      description: 'Cela nous aide à évaluer si le compte courant est adapté à votre situation',
      options: [
        {
          value: 'moins-60k',
          label: 'Moins de 60 000€',
          sublabel: 'Structure encore simple',
          icon: 'fa-chart-bar',
          points: 1
        },
        {
          value: '60-120k',
          label: '60 000 à 120 000€',
          sublabel: 'Zone de transition intéressante',
          icon: 'fa-chart-line',
          points: 3
        },
        {
          value: '120-250k',
          label: '120 000 à 250 000€',
          sublabel: 'Optimisation recommandée',
          icon: 'fa-briefcase',
          points: 5
        },
        {
          value: 'plus-250k',
          label: 'Plus de 250 000€',
          sublabel: 'Structuration indispensable',
          icon: 'fa-rocket',
          points: 7
        }
      ]
    },
    {
      id: 'situation',
      question: 'Quelle est votre situation actuelle avec le compte courant ?',
      description: 'Comment utilisez-vous actuellement cet outil ?',
      options: [
        {
          value: 'pas-de-compte',
          label: "Je n'en ai pas",
          sublabel: 'Pas encore mis en place',
          icon: 'fa-times-circle',
          points: 0
        },
        {
          value: 'faible-ponctuel',
          label: 'Faible ou ponctuel',
          sublabel: 'Usage occasionnel',
          icon: 'fa-bolt',
          points: 2
        },
        {
          value: 'regulier',
          label: 'Régulier',
          sublabel: 'Utilisation fréquente',
          icon: 'fa-calendar-alt',
          points: 4
        },
        {
          value: 'important-fluctuant',
          label: 'Important ou fluctuant fortement',
          sublabel: 'Montants significatifs',
          icon: 'fa-chart-area',
          points: 5
        }
      ]
    },
    {
      id: 'objectif',
      question: 'Quel est votre principal objectif ?',
      description: 'Pourquoi cherchez-vous à optimiser votre compte courant ?',
      options: [
        {
          value: 'souplesse-tresorerie',
          label: 'Plus de souplesse de trésorerie',
          sublabel: 'Gérer mes flux au quotidien',
          icon: 'fa-euro-sign',
          points: 3
        },
        {
          value: 'optimiser-remuneration',
          label: 'Optimiser ma rémunération',
          sublabel: 'Réduire ma pression fiscale',
          icon: 'fa-lightbulb',
          points: 4
        },
        {
          value: 'structurer-flux',
          label: 'Structurer mes flux financiers',
          sublabel: 'Vision patrimoniale long terme',
          icon: 'fa-bullseye',
          points: 5
        },
        {
          value: 'pas-sur',
          label: 'Je ne suis pas sûr',
          sublabel: 'Je découvre le sujet',
          icon: 'fa-question-circle',
          points: 1
        }
      ]
    },
    {
      id: 'fiscal',
      question: 'Comment percevez-vous votre situation fiscale ?',
      description: 'Votre ressenti par rapport aux impôts',
      options: [
        {
          value: 'ne-sais-pas',
          label: 'Je ne sais pas vraiment',
          sublabel: 'Pas de visibilité claire',
          icon: 'fa-question',
          points: 1
        },
        {
          value: 'pression-elevee',
          label: 'Je trouve ma pression fiscale élevée',
          sublabel: 'Impôts importants',
          icon: 'fa-arrow-up',
          points: 3
        },
        {
          value: 'veux-optimiser',
          label: 'Je veux une stratégie plus optimisée',
          sublabel: 'Recherche active de solutions',
          icon: 'fa-search',
          points: 5
        }
      ]
    },
    {
      id: 'horizon',
      question: 'Quel est votre horizon stratégique ?',
      description: 'Sur quelle période envisagez-vous votre développement ?',
      options: [
        {
          value: 'court-terme',
          label: 'Court terme (moins d\'un an)',
          sublabel: 'Besoins immédiats',
          icon: 'fa-clock',
          points: 1
        },
        {
          value: 'moyen-terme',
          label: 'Moyen terme (2-3 ans)',
          sublabel: 'Développement progressif',
          icon: 'fa-calendar-check',
          points: 3
        },
        {
          value: 'long-terme',
          label: 'Long terme (5 ans ou plus)',
          sublabel: 'Vision patrimoniale',
          icon: 'fa-chess',
          points: 5
        }
      ]
    }
  ];

  constructor(
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadSavedDiagnostic();
  }

  get currentQuestion(): DiagnosticQuestion {
    return this.questions[this.currentStep];
  }

  get progressPercentage(): number {
    return ((this.currentStep + 1) / this.totalSteps) * 100;
  }

  selectOption(questionId: string, optionValue: string): void {
    (this.answers as any)[questionId] = optionValue;
  }

  isSelected(questionId: string, optionValue: string): boolean {
    return (this.answers as any)[questionId] === optionValue;
  }

  canProceed(): boolean {
    const currentQuestionId = this.questions[this.currentStep].id;
    return !!(this.answers as any)[currentQuestionId];
  }

  nextStep(): void {
    if (!this.canProceed()) return;

    if (this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
    } else {
      this.calculateResult();
    }
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  calculateResult(): void {
    let totalScore = 0;

    // Calculate score based on answers
    this.questions.forEach(question => {
      const answer = (this.answers as any)[question.id];
      const selectedOption = question.options.find(opt => opt.value === answer);
      if (selectedOption) {
        totalScore += selectedOption.points;
      }
    });

    const maxScore = 25;
    let level: 'low' | 'medium' | 'high';
    let title: string;
    let description: string;
    let recommendation: string;
    let ctaText: string;
    let ctaAction: 'wait' | 'analyze' | 'contact';

    if (totalScore <= 7) {
      level = 'low';
      title = 'Utilisation simple - pas stratégique';
      description = `Avec un score de ${totalScore}/${maxScore}, votre profil indique que le compte courant administrateur n'est probablement pas encore un levier stratégique majeur pour vous.`;
      recommendation = 'Vos bénéfices restent modérés ou votre vision est court terme. Nous recommandons de sécuriser la base avant d\'optimiser.';
      ctaText = 'Recevoir nos conseils de base';
      ctaAction = 'wait';
    } else if (totalScore <= 16) {
      level = 'medium';
      title = 'Potentiel intéressant - analyse recommandée';
      description = `Avec un score de ${totalScore}/${maxScore}, votre situation montre plusieurs signaux intéressants.`;
      recommendation = 'Votre niveau de bénéfices est compatible avec une optimisation. Le compte courant pourrait devenir un levier utile dans un cadre structuré.';
      ctaText = 'Recevoir une simulation personnalisée';
      ctaAction = 'analyze';
    } else {
      level = 'high';
      title = 'Fort levier stratégique';
      description = `Avec un score de ${totalScore}/${maxScore}, votre profil indique un fort potentiel d'optimisation.`;
      recommendation = 'Bénéfices élevés, objectifs patrimoniaux clairs et volonté d\'optimisation : dans votre cas, le compte courant peut devenir un véritable outil stratégique.';
      ctaText = 'Planifier une consultation stratégique';
      ctaAction = 'contact';
    }

    this.result = {
      score: totalScore,
      maxScore,
      level,
      title,
      description,
      recommendation,
      ctaText,
      ctaAction,
      answers: { ...this.answers }
    };

    this.showResult = true;
    this.saveDiagnostic();

    // Show email modal after 2 seconds
    setTimeout(() => {
      if (!this.emailSubmitted) {
        this.showEmailModal = true;
      }
    }, 2000);
  }

  submitEmail(): void {
    if (!this.userEmail || !this.userName) {
      this.toastr.error('Veuillez remplir tous les champs', 'Erreur');
      return;
    }

    if (!this.result) return;

    const leadData = {
      name: this.userName,
      email_from: this.userEmail,
      description: this.generateLeadDescription(),
      lead_type: 'diagnostic_compte_courant'
    };

    this.odooService.createLead(leadData).subscribe({
      next: () => {
        this.emailSubmitted = true;
        this.showEmailModal = false;
        this.toastr.success('Merci ! Votre résultat détaillé vous a été envoyé par email.', 'Succès');
        this.diagnosticComplete.emit(this.result!);
      },
      error: (error) => {
        this.toastr.error('Une erreur est survenue', 'Erreur');
        console.error('Erreur:', error);
      }
    });
  }

  private generateLeadDescription(): string {
    if (!this.result) return '';

    return `
      <h3>Diagnostic Compte Courant Administrateur</h3>
      <p><strong>Score:</strong> ${this.result.score}/${this.result.maxScore}</p>
      <p><strong>Niveau:</strong> ${this.result.title}</p>

      <h4>Réponses:</h4>
      <ul>
        <li><strong>Bénéfices annuels:</strong> ${this.getAnswerLabel('benefices')}</li>
        <li><strong>Situation compte courant:</strong> ${this.getAnswerLabel('situation')}</li>
        <li><strong>Objectif principal:</strong> ${this.getAnswerLabel('objectif')}</li>
        <li><strong>Ressenti fiscal:</strong> ${this.getAnswerLabel('fiscal')}</li>
        <li><strong>Horizon stratégique:</strong> ${this.getAnswerLabel('horizon')}</li>
      </ul>

      <h4>Recommandation:</h4>
      <p>${this.result.recommendation}</p>
    `;
  }

  private getAnswerLabel(questionId: string): string {
    const question = this.questions.find(q => q.id === questionId);
    const answer = (this.answers as any)[questionId];
    const option = question?.options.find(opt => opt.value === answer);
    return option?.label || answer;
  }

  closeEmailModal(): void {
    this.showEmailModal = false;
  }

  restartDiagnostic(): void {
    this.currentStep = 0;
    this.showResult = false;
    this.showEmailModal = false;
    this.emailSubmitted = false;
    this.answers = {
      benefices: '',
      situation: '',
      objectif: '',
      fiscal: '',
      horizon: ''
    };
    this.result = null;
    this.userEmail = '';
    this.userName = '';
    localStorage.removeItem('diagnostic_compte_courant');
  }

  private saveDiagnostic(): void {
    const diagnosticData = {
      answers: this.answers,
      result: this.result,
      timestamp: new Date().getTime()
    };
    localStorage.setItem('diagnostic_compte_courant', JSON.stringify(diagnosticData));
  }

  private loadSavedDiagnostic(): void {
    const saved = localStorage.getItem('diagnostic_compte_courant');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        const thirtyDaysAgo = new Date().getTime() - (30 * 24 * 60 * 60 * 1000);

        if (data.timestamp && data.timestamp > thirtyDaysAgo) {
          // Data is less than 30 days old, we can restore it
          // But for now, we'll just let the user restart fresh
        } else {
          localStorage.removeItem('diagnostic_compte_courant');
        }
      } catch (e) {
        localStorage.removeItem('diagnostic_compte_courant');
      }
    }
  }

  scrollToContact(): void {
    const element = document.getElementById('contactSection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
