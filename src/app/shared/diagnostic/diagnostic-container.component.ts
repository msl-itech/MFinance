import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { OdooService } from '../../services/odoo.service';
import { DiagnosticService } from './diagnostic.service';
import {
  DiagnosticConfig,
  DiagnosticQuestion,
  DiagnosticOption,
  DiagnosticResult,
  DiagnosticEmailData
} from './diagnostic.models';

@Component({
  selector: 'app-diagnostic-container',
  templateUrl: './diagnostic-container.component.html',
  styleUrls: ['./diagnostic-container.component.css'],
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
export class DiagnosticContainerComponent implements OnInit {
  @Input() config!: DiagnosticConfig;
  @Input() showEmailCapture: boolean = true; // Afficher la modale email (optionnel)
  @Output() diagnosticComplete = new EventEmitter<DiagnosticResult>();

  currentQuestionIndex = 0;
  answers: { [key: string]: string } = {};
  showResult = false;
  result: DiagnosticResult | null = null;
  showEmailModal = false;
  isLoadingEmail = false;

  emailData: DiagnosticEmailData = {
    nom: '',
    email: ''
  };

  constructor(
    private toastr: ToastrService,
    private odooService: OdooService,
    private diagnosticService: DiagnosticService
  ) { }

  ngOnInit(): void {
    this.loadFromLocalStorage();
  }

  get currentQuestion(): DiagnosticQuestion {
    return this.config.questions[this.currentQuestionIndex];
  }

  get progressPercentage(): number {
    return Math.round(((this.currentQuestionIndex + 1) / this.config.questions.length) * 100);
  }

  get isFirstQuestion(): boolean {
    return this.currentQuestionIndex === 0;
  }

  get isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.config.questions.length - 1;
  }

  get currentAnswer(): string {
    return this.answers[this.currentQuestion.id] || '';
  }

  selectOption(option: DiagnosticOption): void {
    this.answers[this.currentQuestion.id] = option.value;
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
    this.result = this.diagnosticService.calculateResult(this.config, this.answers);
    this.showResult = true;
    this.saveToLocalStorage();

    // Afficher le modal email après 2 secondes (si activé)
    if (this.showEmailCapture) {
      setTimeout(() => {
        this.showEmailModal = true;
      }, 2000);
    }

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
      lead_type: `diagnostic_${this.config.id}`
    };

    this.odooService.createLead(leadData).subscribe({
      next: (response) => {
        this.isLoadingEmail = false;
        this.showEmailModal = false;
        this.toastr.success(
          'Merci ! Vous recevrez votre rapport PDF détaillé par email dans quelques minutes.',
          'Email enregistré'
        );
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

    const badge = this.diagnosticService.getBadgeIcon(this.result.level);

    let description = `
      <h3>📊 ${this.config.title} - Demande de Rapport PDF</h3>

      <div style="background: #f0f9ff; padding: 15px; border-left: 4px solid #3b82f6; margin: 20px 0;">
        <h4 style="color: #1e40af; margin: 0 0 10px 0;">Résultat du Diagnostic</h4>
        <p><strong>Score:</strong> ${this.result.score}/${this.result.maxScore}</p>
        <p><strong>Niveau:</strong> ${badge} ${this.result.title}</p>
        <p><strong>Conclusion:</strong> ${this.result.description}</p>
      </div>

      <h4>Réponses détaillées:</h4>
      <ul>
    `;

    // Ajouter les réponses
    this.config.questions.forEach(question => {
      const answerValue = this.answers[question.id];
      const selectedOption = question.options.find(opt => opt.value === answerValue);
      if (selectedOption) {
        description += `<li><strong>${question.question}:</strong> ${selectedOption.label}</li>`;
      }
    });

    description += `
      </ul>
      <p><strong>Action recommandée:</strong> ${this.result.recommendation}</p>
    `;

    return description;
  }

  private saveToLocalStorage(): void {
    const data = {
      score: this.result?.score || 0,
      level: this.result?.level || 'low',
      answers: this.answers,
      email: this.emailData.email,
      nom: this.emailData.nom
    };

    this.diagnosticService.saveToLocalStorage(this.config.id, data);
  }

  private loadFromLocalStorage(): void {
    const data = this.diagnosticService.loadFromLocalStorage(this.config.id);
    if (!data) return;

    if (data.email) this.emailData.email = data.email;
    if (data.nom) this.emailData.nom = data.nom;
  }

  restartDiagnostic(): void {
    this.currentQuestionIndex = 0;
    this.answers = {};
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

  getAnswerLabel(questionId: string, answerValue: string): string {
    const question = this.config.questions.find(q => q.id === questionId);
    if (!question) return answerValue;

    const option = question.options.find(opt => opt.value === answerValue);
    return option?.label || answerValue;
  }
}
