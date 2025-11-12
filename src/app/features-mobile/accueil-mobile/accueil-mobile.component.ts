import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfilTypeMobileComponent } from '../profil-type-mobile/profil-type-mobile.component';
import { ZoneContactMobileComponent } from "../../zone-contact-mobile/zone-contact-mobile.component";

interface FormData {
  profil: string;
  besoins: {
    comptabilite: boolean;
    fiscalite: boolean;
    creation: boolean;
    conseil: boolean;
  };
  nom: string;
  email: string;
  telephone: string;
}

@Component({
  selector: 'app-accueil-mobile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ProfilTypeMobileComponent, ZoneContactMobileComponent],
  templateUrl: './accueil-mobile.component.html',
  styleUrls: ['./accueil-mobile.component.scss'],
})
export class AccueilMobileComponent implements OnInit {
  // État du composant
  isScrolled = false;
  showAllServices = false;
  totalServices = 4;
  currentStep = 1;
  formSubmitted = false;

  // Données du formulaire
  formData: FormData = {
    profil: '',
    besoins: {
      comptabilite: false,
      fiscalite: false,
      creation: false,
      conseil: false,
    },
    nom: '',
    email: '',
    telephone: '',
  };

  ngOnInit(): void {
    // Initialisation du composant
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 10;
  }

  // Navigation
  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  toggleMobileMenu(): void {
    // Logique pour ouvrir/fermer le menu mobile
    // Cette méthode peut être connectée au service de navigation global
    console.log('Toggle mobile menu');
  }

  // Gestion des services
  toggleServices(): void {
    this.showAllServices = !this.showAllServices;
  }

  // Gestion du formulaire
  nextStep(): void {
    if (this.isStepValid() && this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.profil;
      case 2:
        return Object.values(this.formData.besoins).some(besoin => besoin);
      case 3:
        return !!(this.formData.nom && this.formData.email && this.formData.telephone);
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    return this.isStepValid() && this.currentStep === 3;
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      // Simulation d'envoi du formulaire
      console.log('Données formulaire:', this.formData);
      
      // Simulation d'appel API
      setTimeout(() => {
        this.formSubmitted = true;
        this.sendFormData();
      }, 1000);
    }
  }

  resetForm(): void {
    this.currentStep = 1;
    this.formSubmitted = false;
    this.formData = {
      profil: '',
      besoins: {
        comptabilite: false,
        fiscalite: false,
        creation: false,
        conseil: false,
      },
      nom: '',
      email: '',
      telephone: '',
    };
  }

  private sendFormData(): void {
    // Préparation des données pour l'API
    const formDataToSend = {
      ...this.formData,
      besoins_list: Object.entries(this.formData.besoins)
        .filter(([key, value]) => value)
        .map(([key]) => key),
      source: 'accueil-mobile',
      timestamp: new Date().toISOString(),
    };
    
    console.log('Envoi des données:', formDataToSend);
    // Ici, vous pouvez implémenter l'appel à votre service API
  }
}