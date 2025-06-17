import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';
import { PROMOTEUR_IMMOBILIER_FORM_CONFIG } from '../shared/contact-form-layout/contact-form-configs';

@Component({
  selector: 'app-profil-promoteur-immobilier',
  templateUrl: './profil-promoteur-immobilier.component.html',
  styleUrl: './profil-promoteur-immobilier.component.css',
})
export class ProfilPromoteurImmobilierComponent implements OnInit {
  formConfig = PROMOTEUR_IMMOBILIER_FORM_CONFIG;

  // Navigation par étapes
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;

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
    besoins_autre: '',
  };

  // Affichage conditionnel
  showAutreProjet = false;
  showAutreBesoin = false;

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Promoteur Immobilier
    this.metaService.setPromoteurImmobilierPageMeta();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Navigation entre les étapes
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

  // Validation des étapes
  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return (
          this.formData.type_projet !== '' &&
          (this.formData.type_projet !== 'autre' ||
            this.formData.type_projet_autre.trim() !== '')
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
    return (
      this.formData.type_projet !== '' &&
      this.formData.revenus !== '' &&
      this.formData.nom.trim() !== '' &&
      this.formData.email.trim() !== '' &&
      this.formData.telephone.trim() !== '' &&
      this.formData.comptabilite !== '' &&
      this.formData.besoins.length > 0
    );
  }

  // Gestion des événements
  onTypeProjetChange(type: string): void {
    this.formData.type_projet = type;
    this.showAutreProjet = type === 'autre';
    if (!this.showAutreProjet) {
      this.formData.type_projet_autre = '';
    }
  }

  onBesoinChange(besoin: string, event: any): void {
    const isChecked = event.target.checked;

    if (isChecked) {
      if (!this.formData.besoins.includes(besoin)) {
        this.formData.besoins.push(besoin);
      }
    } else {
      this.formData.besoins = this.formData.besoins.filter((b) => b !== besoin);
    }

    this.showAutreBesoin = this.formData.besoins.includes('autre');
    if (!this.showAutreBesoin) {
      this.formData.besoins_autre = '';
    }
  }

  // Soumission du formulaire
  onSubmit(): void {
    if (this.isFormValid) {
      this.formSubmitted = true;
      console.log('Données du formulaire Promoteur Immobilier:', this.formData);
      // Ici vous pouvez ajouter la logique d'envoi des données
    }
  }

  onReset(): void {
    this.currentStep = 1;
    this.formSubmitted = false;
    this.formData = {
      type_projet: '',
      type_projet_autre: '',
      revenus: '',
      nom: '',
      email: '',
      telephone: '',
      comptabilite: '',
      besoins: [],
      besoins_autre: '',
    };
    this.showAutreProjet = false;
    this.showAutreBesoin = false;
  }
}
