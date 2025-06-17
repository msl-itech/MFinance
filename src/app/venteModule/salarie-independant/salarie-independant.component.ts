import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { SALARIE_INDEPENDANT_FORM_CONFIG } from '../../shared/contact-form-layout/contact-form-configs';

@Component({
  selector: 'app-salarie-independant',
  templateUrl: './salarie-independant.component.html',
  styleUrl: './salarie-independant.component.css',
})
export class SalarieIndependantComponent implements OnInit {
  formConfig = SALARIE_INDEPENDANT_FORM_CONFIG;
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;

  // Variables pour les inputs conditionnels
  showAutreProfil = false;
  showAutreMotivation = false;
  showAutreBesoin = false;

  // Données du formulaire
  formData = {
    profil: '',
    profil_autre: '',
    motivation: '',
    motivation_autre: '',
    nom: '',
    email: '',
    telephone: '',
    connaissance: '',
    besoins: [] as string[],
    besoins_autre: '',
  };

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Salarié Indépendant
    this.metaService.setSalarieIndependantPageMeta();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onProfilChange(value: string): void {
    this.formData.profil = value;
    this.showAutreProfil = value === 'autre';
    if (!this.showAutreProfil) {
      this.formData.profil_autre = '';
    }
  }

  onMotivationChange(value: string): void {
    this.formData.motivation = value;
    this.showAutreMotivation = value === 'autre';
    if (!this.showAutreMotivation) {
      this.formData.motivation_autre = '';
    }
  }

  onBesoinChange(value: string, event: Event): void {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;

    if (checked) {
      if (!this.formData.besoins.includes(value)) {
        this.formData.besoins.push(value);
      }
    } else {
      this.formData.besoins = this.formData.besoins.filter((b) => b !== value);
    }

    this.showAutreBesoin = this.formData.besoins.includes('autre');
    if (!this.showAutreBesoin) {
      this.formData.besoins_autre = '';
    }
  }

  onNextStep(): void {
    if (this.currentStep < this.totalSteps && this.isStepValid) {
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
      this.formSubmitted = true;
      console.log('Données du formulaire:', this.formData);
    }
  }

  onReset(): void {
    this.formSubmitted = false;
    this.currentStep = 1;
    this.formData = {
      profil: '',
      profil_autre: '',
      motivation: '',
      motivation_autre: '',
      nom: '',
      email: '',
      telephone: '',
      connaissance: '',
      besoins: [],
      besoins_autre: '',
    };
    this.showAutreProfil = false;
    this.showAutreMotivation = false;
    this.showAutreBesoin = false;
  }

  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return (
          this.formData.profil !== '' &&
          (this.formData.profil !== 'autre' ||
            this.formData.profil_autre.trim() !== '')
        );
      case 2:
        return (
          this.formData.motivation !== '' &&
          (this.formData.motivation !== 'autre' ||
            this.formData.motivation_autre.trim() !== '')
        );
      case 3:
        return (
          this.formData.nom.trim() !== '' &&
          this.formData.email.trim() !== '' &&
          this.formData.telephone.trim() !== ''
        );
      case 4:
        return this.formData.connaissance !== '';
      case 5:
        return (
          this.formData.besoins.length > 0 &&
          (!this.formData.besoins.includes('autre') ||
            this.formData.besoins_autre.trim() !== '')
        );
      default:
        return false;
    }
  }

  get isFormValid(): boolean {
    return this.currentStep === this.totalSteps && this.isStepValid;
  }
}
