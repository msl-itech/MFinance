import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';
import { ZoneContactMobileComponent } from "../../zone-contact-mobile/zone-contact-mobile.component";

@Component({
  selector: 'app-creation-entreprise-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule, FormsModule, ZoneContactMobileComponent],
  templateUrl: './creation-entreprise-mobile.component.html',
  styleUrls: ['./creation-entreprise-mobile.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class CreationEntrepriseMobileComponent implements OnInit {

  // Variables pour le formulaire
  currentStep = 1;
  totalSteps = 3;
  formSubmitted = false;
  isLoading = false;

  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: 'CRÉATION D\'ENTREPRISE',
    title: 'Accompagnement personnalisé',
    description: 'Lancez votre entreprise sur des bases solides avec notre expertise comptable et juridique.',
    phoneButton: 'Appelez-nous',
    contactButton: 'Contactez-nous',
    
    // En-tête du formulaire
    formTitle: 'Demande d\'accompagnement création',
    formDescription: 'Décrivez votre projet en 2 minutes. Nous vous rappelons sous 72h pour démarrer ensemble.',
    badge: 'ACCOMPAGNEMENT GRATUIT',
    
    // Boutons et messages
    submitButton: 'Démarrer ma création d\'entreprise',
    successTitle: '🚀 Merci pour votre demande !',
    successMessage: 'Votre projet de création d\'entreprise a bien été reçu.',
    successNote: 'Nous vous contactons sous 72h pour un accompagnement personnalisé et gratuit.',
    resetButton: 'Nouveau projet'
  };

  // Données du formulaire
  formData = {
    typeEntreprise: '',
    secteur: '',
    nom: '',
    email: '',
    telephone: '',
    projet: ''
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
        return !!this.formData.typeEntreprise;
      case 2:
        return !!this.formData.secteur;
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
      typeEntreprise: '',
      secteur: '',
      nom: '',
      email: '',
      telephone: '',
      projet: ''
    };
  }
}