import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  DiagnosticResult,
  DiagnosticConfig
} from './diagnostic.models';
import { DiagnosticService } from './diagnostic.service';

@Component({
  selector: 'app-diagnostic-result',
  templateUrl: './diagnostic-result.component.html',
  styleUrls: ['./diagnostic-result.component.css']
})
export class DiagnosticResultComponent {
  @Input() result!: DiagnosticResult;
  @Input() config!: DiagnosticConfig;
  @Input() answers!: { [key: string]: string };
  @Output() restart = new EventEmitter<void>();
  @Output() contactClick = new EventEmitter<void>();

  constructor(private diagnosticService: DiagnosticService) {}

  get badgeIcon(): string {
    return this.diagnosticService.getBadgeIcon(this.result.level);
  }

  getQuestionText(questionId: string): string {
    const question = this.config.questions.find(q => q.id === questionId);
    return question?.question || '';
  }

  getAnswerLabel(questionId: string): string {
    const question = this.config.questions.find(q => q.id === questionId);
    if (!question) return '';

    const answerValue = this.answers[questionId];
    const option = question.options.find(opt => opt.value === answerValue);
    return option?.label || '';
  }

  getAnswerIcon(questionId: string): string {
    const question = this.config.questions.find(q => q.id === questionId);
    if (!question) return '📌';

    const answerValue = this.answers[questionId];
    const option = question.options.find(opt => opt.value === answerValue);
    return option?.icon || '📌';
  }

  getAnswerAnalysis(questionId: string): string {
    return this.result.detailedAnalysis?.answerAnalysis[questionId] || '';
  }

  restartDiagnostic(): void {
    this.restart.emit();
  }

  onContactClick(): void {
    if (this.result.ctaAction === 'redirect' && this.result.redirectUrl) {
      window.location.href = this.result.redirectUrl;
    } else {
      this.contactClick.emit();
    }
  }

  getQuestionKeys(): string[] {
    return Object.keys(this.answers);
  }
}
