import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';
import { ZoneContactMobileComponent } from "../../zone-contact-mobile/zone-contact-mobile.component";

@Component({
  selector: 'app-declaration-impot-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule, FormsModule, ZoneContactMobileComponent],
  templateUrl: './declaration-impot-mobile.component.html',
  styleUrls: ['./declaration-impot-mobile.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class DeclarationImpotMobileComponent implements OnInit {

  // Variables pour le formulaire
  currentStep = 1;
  totalSteps = 3;
  formSubmitted = false;
  isLoading = false;

  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: 'DÉCLARATION D\'IMPÔT',
    title: 'Assistance fiscale personnalisée',
    description: 'Optimisez votre déclaration d\'impôt avec notre accompagnement expert et personnalisé.',
    phoneButton: 'Appelez-nous',
    contactButton: 'Contactez-nous',
    
    // En-tête du formulaire
    formTitle: 'Demande d\'assistance fiscale',
    formDescription: 'En 2 minutes, décrivez votre situation. Nous vous rappelons sous 72h pour un échange gratuit.',
    badge: 'CONSULTATION GRATUITE',
    
    // Boutons et messages
    submitButton: 'Recevoir mon assistance fiscale',
    successTitle: '🎉 Merci pour votre demande !',
    successMessage: 'Votre demande d\'assistance fiscale a bien été reçue.',
    successNote: 'Nous vous contactons sous 72h pour votre consultation gratuite et confidentielle.',
    resetButton: 'Faire une nouvelle demande'
  };

  // Données du formulaire
  formData = {
    situationFiscale: '',
    urgence: '',
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

  // Méthodes pour le formulaire
  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.situationFiscale;
      case 2:
        return !!this.formData.urgence;
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
      situationFiscale: '',
      urgence: '',
      nom: '',
      email: '',
      telephone: ''
    };
  }
}