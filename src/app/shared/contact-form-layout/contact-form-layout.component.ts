import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ContactFormConfig {
  // Texte à gauche
  eyebrow: string;
  title: string;
  description: string;
  phoneButton: string;
  contactButton: string;

  // En-tête du formulaire
  formTitle: string;
  formDescription: string;
  badge: string;

  // Boutons et messages
  submitButton: string;
  successTitle: string;
  successMessage: string;
  successNote: string;
  resetButton: string;
}

@Component({
  selector: 'app-contact-form-layout',
  templateUrl: './contact-form-layout.component.html',
  styleUrls: ['./contact-form-layout.component.css'],
})
export class ContactFormLayoutComponent {
  @Input() config!: ContactFormConfig;
  @Input() currentStep: number = 1;
  @Input() totalSteps: number = 5;
  @Input() formSubmitted: boolean = false;
  @Input() isStepValid: boolean = false;
  @Input() isFormValid: boolean = false;
  @Input() isLoading: boolean = false;

  @Output() nextStep = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  get progressPercentage(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  onNextStep(): void {
    this.nextStep.emit();
  }

  onPreviousStep(): void {
    this.previousStep.emit();
  }

  onSubmit(): void {
    this.submit.emit();
  }

  onReset(): void {
    this.reset.emit();
  }
}
