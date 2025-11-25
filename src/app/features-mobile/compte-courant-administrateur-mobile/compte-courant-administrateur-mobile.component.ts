import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-compte-courant-administrateur-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule, FormsModule],
  templateUrl: './compte-courant-administrateur-mobile.component.html',
  styleUrls: ['./compte-courant-administrateur-mobile.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class CompteCourantAdministrateurMobileComponent implements OnInit {

  // Variables pour le formulaire
  currentStep = 1;
  totalSteps = 3;
  formSubmitted = false;
  isLoading = false;
  showVideo = false;

  // Variables pour la FAQ
  expandedFaq: number | null = null;
  showAllFaq = false;

  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: 'COMPTE COURANT ADMINISTRATEUR',
    title: 'Diagnostic personnalisé gratuit',
    description: 'Analysez votre situation financière et découvrez les erreurs cachées dans votre compte courant.',
    phoneButton: 'Appelez-nous',
    contactButton: 'Contactez-nous',
    
    // En-tête du formulaire
    formTitle: 'Diagnostic compte courant administrateur',
    formDescription: 'En 2 minutes, évaluez votre situation. Un expert vous appelle sous 72h.',
    badge: 'ANALYSE GRATUITE & CONFIDENTIELLE',
    
    // Boutons et messages
    submitButton: 'Recevoir mon diagnostic gratuit',
    successTitle: '🕵️‍♀️ Merci pour votre demande !',
    successMessage: 'Votre diagnostic de compte courant administrateur sera préparé par nos experts.',
    successNote: 'Nous vous contactons sous 72h pour votre analyse personnalisée et confidentielle.',
    resetButton: 'Nouveau diagnostic'
  };

  // Données du formulaire
  formData = {
    paiement: '',
    compteCourant: '',
    nom: '',
    email: '',
    telephone: ''
  };

  constructor(private router: Router) {}

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

  // Méthode pour jouer la vidéo
  playVideo(): void {
    // Cette méthode peut être implémentée pour ouvrir une modal vidéo
    // ou rediriger vers une page de lecture vidéo
    
    this.showVideo = !this.showVideo;
    if (this.showVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    console.log('Lecture de la vidéo');
  }

  // Méthodes pour la FAQ
  toggleFaq(faqNumber: number): void {
    this.expandedFaq = this.expandedFaq === faqNumber ? null : faqNumber;
  }

  // Méthodes pour le formulaire
  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.paiement;
      case 2:
        return !!this.formData.compteCourant;
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
      paiement: '',
      compteCourant: '',
      nom: '',
      email: '',
      telephone: ''
    };
  }
}