import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

interface TresorerieBeneficeFormData {
  situationTresorerie: string;
  chiffreAffaires: string;
  nom: string;
  email: string;
  telephone: string;
}

@Component({
  selector: 'app-tresorerie-benefice-mobile',
  standalone: true,
  imports: [CommonModule, FormsModule, ShardeModuleModule],
  templateUrl: './tresorerie-benefice-mobile.component.html',
  styleUrls: ['./tresorerie-benefice-mobile.component.scss'],
})
export class TresorerieBeneficeMobileComponent implements OnInit {
  currentStep = 1;
  totalSteps = 3;
  formSubmitted = false;
  isLoading = false;

  formData: TresorerieBeneficeFormData = {
    situationTresorerie: '',
    chiffreAffaires: '',
    nom: '',
    email: '',
    telephone: '',
  };

  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: 'GESTION TRÉSORERIE',
    title: 'Diagnostic Trésorerie Gratuit',
    description: 'Découvrez comment optimiser votre trésorerie et éviter les crises de liquidité.',
    phoneButton: 'Appelez-nous',
    contactButton: 'Contactez-nous',
    
    // En-tête du formulaire
    formTitle: 'Diagnostic trésorerie personnalisé',
    formDescription: 'En 3 minutes, évaluez votre situation. Nous vous rappelons sous 72h.',
    badge: 'GRATUIT ET SANS ENGAGEMENT',
    
    // Boutons et messages
    submitButton: 'Recevoir mon diagnostic gratuit',
    successTitle: '🎉 Merci pour votre demande !',
    successMessage: 'Votre diagnostic trésorerie sera préparé par nos experts.',
    successNote: 'Nous vous contactons sous 72h pour planifier votre analyse personnalisée.',
    resetButton: 'Faire une nouvelle demande'
  };

  ngOnInit(): void {
    // Initialisation du composant
  }

  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.situationTresorerie;
      case 2:
        return !!this.formData.chiffreAffaires;
      case 3:
        return !!(
          this.formData.nom &&
          this.formData.email &&
          this.formData.telephone
        );
      default:
        return false;
    }
  }

  get isFormValid(): boolean {
    return !!(
      this.formData.situationTresorerie &&
      this.formData.chiffreAffaires &&
      this.formData.nom &&
      this.formData.email &&
      this.formData.telephone
    );
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
    if (this.isFormValid && !this.isLoading) {
      this.isLoading = true;
      
      // Simulation d'envoi du formulaire
      setTimeout(() => {
        console.log('Données du formulaire trésorerie-bénéfice:', this.formData);
        this.formSubmitted = true;
        this.isLoading = false;
        
        // Ici vous pouvez ajouter la logique d'envoi vers votre API
        this.sendFormData();
      }, 2000);
    }
  }

  onReset(): void {
    this.currentStep = 1;
    this.formSubmitted = false;
    this.isLoading = false;
    this.formData = {
      situationTresorerie: '',
      chiffreAffaires: '',
      nom: '',
      email: '',
      telephone: '',
    };
  }

  private sendFormData(): void {
    // Logique d'envoi des données vers l'API
    const formDataToSend = {
      ...this.formData,
      source: 'tresorerie-benefice-mobile',
      timestamp: new Date().toISOString(),
    };
    
    console.log('Envoi des données:', formDataToSend);
    // Ici, vous pouvez implémenter l'appel à votre service
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}