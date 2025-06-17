import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';
import { SOCIETE_MOYEN_FORM_CONFIG } from '../shared/contact-form-layout/contact-form-configs';

@Component({
  selector: 'app-profil-societe-moyen',
  templateUrl: './profil-societe-moyen.component.html',
  styleUrl: './profil-societe-moyen.component.css',
})
export class ProfilSocieteMoyenComponent implements OnInit {
  formConfig = SOCIETE_MOYEN_FORM_CONFIG;
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;

  // Variables pour les inputs conditionnels
  showAutreSecteur = false;
  showAutreBesoin = false;

  // Données du formulaire
  formData = {
    secteur: '',
    secteur_autre: '',
    revenus: '',
    nom: '',
    email: '',
    telephone: '',
    comptabilite: '',
    besoins: [] as string[],
    besoins_autre: '',
  };

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Société Moyen
    this.metaService.setSocieteMoyenPageMeta();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSecteurChange(value: string): void {
    this.formData.secteur = value;
    this.showAutreSecteur = value === 'autre';
    if (!this.showAutreSecteur) {
      this.formData.secteur_autre = '';
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
      secteur: '',
      secteur_autre: '',
      revenus: '',
      nom: '',
      email: '',
      telephone: '',
      comptabilite: '',
      besoins: [],
      besoins_autre: '',
    };
    this.showAutreSecteur = false;
    this.showAutreBesoin = false;
  }

  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return (
          this.formData.secteur !== '' &&
          (this.formData.secteur !== 'autre' ||
            this.formData.secteur_autre.trim() !== '')
        );
      case 2:
        return this.formData.revenus !== '';
      case 3:
        return (
          this.formData.nom.trim() !== '' &&
          this.formData.email.trim() !== '' &&
          this.formData.telephone.trim() !== ''
        );
      case 4:
        return this.formData.comptabilite !== '';
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
