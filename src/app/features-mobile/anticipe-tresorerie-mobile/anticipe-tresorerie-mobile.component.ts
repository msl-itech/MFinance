import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-anticipe-tresorerie-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule, FormsModule],
  templateUrl: './anticipe-tresorerie-mobile.component.html',
  styleUrls: ['./anticipe-tresorerie-mobile.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AnticipeTresorerieMobileComponent implements OnInit {

  // Variables pour le formulaire
  currentStep = 1;
  totalSteps = 3;
  formSubmitted = false;
  isLoading = false;

  // Variables pour la FAQ
  expandedFaq: number | null = null;
  showAllFaq = false;

  // Variables pour les vidéos
  showPodcastVideo = false;
  showMainVideo = false;
  podcastVideoUrl: SafeResourceUrl;
  mainVideoUrl: SafeResourceUrl;

  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: 'ANTICIPATION TRÉSORERIE',
    title: 'Diagnostic anticipation gratuit',
    description: 'Évaluez votre capacité à anticiper vos besoins financiers et évitez les crises de trésorerie.',
    phoneButton: 'Appelez-nous',
    contactButton: 'Contactez-nous',
    
    // En-tête du formulaire
    formTitle: 'Test d\'anticipation trésorerie',
    formDescription: 'En 3 minutes, découvrez si vous pouvez prédire vos prochaines tensions financières.',
    badge: 'DIAGNOSTIC GRATUIT & CONFIDENTIEL',
    
    // Boutons et messages
    submitButton: 'Recevoir mon diagnostic anticipation',
    successTitle: '📊 Merci pour votre test !',
    successMessage: 'Votre diagnostic d\'anticipation trésorerie sera préparé par nos experts.',
    successNote: 'Nous vous contactons sous 72h pour analyser vos résultats et vous proposer des solutions.',
    resetButton: 'Nouveau diagnostic'
  };

  // Données du formulaire
  formData = {
    tableauTresorerie: '',
    defiPrincipal: '',
    nom: '',
    email: '',
    telephone: ''
  };

  constructor(private sanitizer: DomSanitizer) {
    // URLs sécurisées pour les vidéos
    this.podcastVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/FTykk4hcRio'
    );
    this.mainVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/NRztTXg7Jzc'
    );
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

  // Méthodes pour les médias
  playPodcast(): void {
    this.showPodcastVideo = !this.showPodcastVideo;
  }

  playVideo(): void {
    this.showMainVideo = !this.showMainVideo;
  }

  // Méthodes pour la FAQ
  toggleFaq(faqNumber: number): void {
    this.expandedFaq = this.expandedFaq === faqNumber ? null : faqNumber;
  }

  // Méthodes pour le formulaire
  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.tableauTresorerie;
      case 2:
        return !!this.formData.defiPrincipal;
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
      tableauTresorerie: '',
      defiPrincipal: '',
      nom: '',
      email: '',
      telephone: ''
    };
  }
}