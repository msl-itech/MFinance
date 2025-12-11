import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-comptabilite-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule, FormsModule],
  templateUrl: './comptabilite-mobile.component.html',
  styleUrls: ['./comptabilite-mobile.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ComptabiliteMobileComponent implements OnInit {

  // Variables pour le formulaire
  currentStep = 1;
  totalSteps = 3;
  formSubmitted = false;
  isLoading = false;

  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: 'COMPTABILITÉ',
    title: 'Consultation comptable gratuite',
    description: 'Faites de votre comptabilité un véritable levier de croissance. Nos experts vous accompagnent.',
    phoneButton: 'Appelez-nous',
    contactButton: 'Contactez-nous',

    // En-tête du formulaire
    formTitle: 'Consultation comptable personnalisée',
    formDescription: 'En 3 minutes, décrivez vos besoins. Un expert comptable vous rappelle sous 72h.',
    badge: 'CONSULTATION GRATUITE & CONFIDENTIELLE',

    // Boutons et messages
    submitButton: 'Recevoir ma consultation gratuite',
    successTitle: '💼 Merci pour votre demande !',
    successMessage: 'Votre consultation comptable sera préparée par nos experts.',
    successNote: 'Nous vous contactons sous 72h pour votre accompagnement personnalisé et confidentiel.',
    resetButton: 'Nouvelle demande'
  };

  // Données du formulaire
  formData = {
    defiComptable: '',
    accompagnement: '',
    nom: '',
    email: '',
    telephone: ''
  };

  // Mini Formulaire
  miniForm = {
    name: '',
    email: ''
  };

  // Timeline Step
  activeStep = 1;

  constructor(private router: Router) { }

  onQuickContact(): void {
    if (this.miniForm.name && this.miniForm.email) {
      console.log('Quick Contact:', this.miniForm);
      // Pre-fill main form if needed or just submit
      this.formData.nom = this.miniForm.name;
      this.formData.email = this.miniForm.email;
      this.currentStep = 3; // Jump to contact details ? Or just scroll
      this.scrollTo('contactSection');
    }
  }

  ngOnInit(): void {
    // Initialisation du composant
  }

  // Méthodes de navigation
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollTo(sectionId: string): void {
    this.scrollToSection(sectionId);
  }

  // Méthodes pour le formulaire
  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.defiComptable;
      case 2:
        return !!this.formData.accompagnement;
      case 3:
        return !!this.formData.nom && !!this.formData.email && !!this.formData.telephone;
      default:
        return false;
    }
  }

  get isFormValid(): boolean {
    return this.currentStep === this.totalSteps && this.isStepValid;
  }

  onNextStep(): void {
    if (this.isStepValid && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  onPreviousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit(): void {
    if (this.isFormValid) {
      this.isLoading = true;
      // Simulation d'envoi du formulaire
      setTimeout(() => {
        this.formSubmitted = true;
        this.isLoading = false;
        console.log('Formulaire soumis:', this.formData);
      }, 2000);
    }
  }

  onReset(): void {
    this.currentStep = 1;
    this.formSubmitted = false;
    this.formData = {
      defiComptable: '',
      accompagnement: '',
      nom: '',
      email: '',
      telephone: ''
    };
  }
}