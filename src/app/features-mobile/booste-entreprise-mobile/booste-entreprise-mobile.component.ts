import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-booste-entreprise-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule, FormsModule],
  templateUrl: './booste-entreprise-mobile.component.html',
  styleUrls: ['./booste-entreprise-mobile.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class BoosteEntrepriseMobileComponent implements OnInit {

  // Variables pour le formulaire
  currentStep = 1;
  totalSteps = 3;
  formSubmitted = false;
  isLoading = false;

  // Articles pratiques
  articles = [
    {
      title: 'Pourquoi votre trésorerie est plus importante que vos bénéfices',
      duration: '5 min',
      icon: '💼',
      category: 'Gestion'
    },
    {
      title: 'Investir sans mettre en danger sa trésorerie',
      duration: '7 min',
      icon: '📈',
      category: 'Investissement'
    },
    {
      title: 'Optimiser la gestion des stocks',
      duration: '6 min',
      icon: '⚙️',
      category: 'Optimisation'
    },
    {
      title: 'SOS Trésorerie : Réagir à la concurrence déloyale',
      duration: '8 min',
      icon: '🛡️',
      category: 'Stratégie'
    }
  ];

  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: 'BOOSTEZ VOTRE ENTREPRISE',
    title: 'Plan d\'action personnalisé gratuit',
    description: 'Transformez vos défis en opportunités de croissance. Nos experts vous accompagnent vers le succès.',
    phoneButton: 'Appelez-nous',
    contactButton: 'Contactez-nous',
    
    // En-tête du formulaire
    formTitle: 'Votre plan d\'action sur mesure',
    formDescription: 'En 3 minutes, identifiez vos priorités. Un expert vous rappelle sous 72h avec un plan concret.',
    badge: 'PLAN D\'ACTION GRATUIT & CONFIDENTIEL',
    
    // Boutons et messages
    submitButton: 'Recevoir mon plan d\'action gratuit',
    successTitle: '🚀 Merci pour votre demande !',
    successMessage: 'Votre plan d\'action personnalisé sera préparé par nos experts.',
    successNote: 'Nous vous contactons sous 72h pour votre accompagnement stratégique et confidentiel.',
    resetButton: 'Nouveau plan d\'action'
  };

  // Données du formulaire
  formData = {
    objectif: '',
    delai: '',
    nom: '',
    email: '',
    telephone: ''
  };

  constructor() {}

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

  // Méthodes pour le formulaire
  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.objectif;
      case 2:
        return !!this.formData.delai;
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
      objectif: '',
      delai: '',
      nom: '',
      email: '',
      telephone: ''
    };
  }
}