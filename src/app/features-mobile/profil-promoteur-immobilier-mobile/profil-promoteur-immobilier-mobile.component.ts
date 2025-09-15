import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { MobileProfileNavigationComponent } from '../../shared/mobile-profile-navigation/mobile-profile-navigation.component';

@Component({
  selector: 'app-profil-promoteur-immobilier-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule, FormsModule, MobileProfileNavigationComponent],
  templateUrl: './profil-promoteur-immobilier-mobile.component.html',
  styleUrls: ['./profil-promoteur-immobilier-mobile.component.scss'],
})
export class ProfilPromoteurImmobilierMobileComponent implements OnInit {
  // Variables pour l'accordéon dans la section exemple
  activeAccordion: string | null = null;
  
  // Profil actuellement sélectionné
  currentProfile = '/promoteur-immobilier';

  // Variables pour le formulaire
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  isLoading = false;
  showAutreProjet = false;
  showAutreBesoin = false;

  // Configuration du formulaire
  formConfig = {
    title: 'Évaluation personnalisée - Promoteur Immobilier',
    description: 'Obtenez votre diagnostic en 2 minutes'
  };

  // Données du formulaire
  formData = {
    type_projet: '',
    type_projet_autre: '',
    revenus: '',
    nom: '',
    email: '',
    telephone: '',
    comptabilite: '',
    besoins: [] as string[],
    besoins_autre: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialisation du composant
  }

  // Méthode pour toggler l'accordéon
  toggleAccordion(section: string): void {
    this.activeAccordion = this.activeAccordion === section ? null : section;
  }

  // Méthode pour contacter le support
  contactSupport(): void {
    this.router.navigate(['/contact']);
  }

  // Méthode pour le scroll vers une section
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
        return !!this.formData.type_projet && 
               (this.formData.type_projet !== 'autre' || !!this.formData.type_projet_autre);
      case 2:
        return !!this.formData.revenus;
      case 3:
        return !!this.formData.nom && !!this.formData.email && !!this.formData.telephone;
      case 4:
        return !!this.formData.comptabilite;
      case 5:
        return this.formData.besoins.length > 0 && 
               (!this.formData.besoins.includes('autre') || !!this.formData.besoins_autre);
      default:
        return false;
    }
  }

  get isFormValid(): boolean {
    return this.currentStep === this.totalSteps && this.isStepValid;
  }

  onTypeProjetChange(value: string): void {
    this.formData.type_projet = value;
    this.showAutreProjet = value === 'autre';
    if (value !== 'autre') {
      this.formData.type_projet_autre = '';
    }
  }

  onBesoinChange(value: string, event: any): void {
    if (event.target.checked) {
      if (!this.formData.besoins.includes(value)) {
        this.formData.besoins.push(value);
      }
    } else {
      this.formData.besoins = this.formData.besoins.filter(besoin => besoin !== value);
    }
    
    this.showAutreBesoin = this.formData.besoins.includes('autre');
    if (!this.showAutreBesoin) {
      this.formData.besoins_autre = '';
    }
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
    this.showAutreProjet = false;
    this.showAutreBesoin = false;
    this.formData = {
      type_projet: '',
      type_projet_autre: '',
      revenus: '',
      nom: '',
      email: '',
      telephone: '',
      comptabilite: '',
      besoins: [],
      besoins_autre: ''
    };
  }
}