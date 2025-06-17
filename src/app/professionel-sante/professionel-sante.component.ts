import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';
import { PROFESSIONNEL_SANTE_FORM_CONFIG } from '../shared/contact-form-layout/contact-form-configs';

@Component({
  selector: 'app-professionel-sante',
  templateUrl: './professionel-sante.component.html',
  styleUrl: './professionel-sante.component.css',
})
export class ProfessionelSanteComponent implements OnInit {
  formConfig = PROFESSIONNEL_SANTE_FORM_CONFIG;

  // Propriétés pour la gestion des étapes
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;

  // Données du formulaire
  formData = {
    profession: '',
    profession_autre: '',
    revenus: '',
    nom: '',
    email: '',
    telephone: '',
    comptabilite: '',
    besoins: [] as string[],
    besoins_autre: '',
  };

  // Propriétés pour l'affichage conditionnel
  showAutreProfession = false;
  showAutreBesoin = false;

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Professionnel Santé
    this.metaService.setProfessionnelSantePageMeta();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Validation des étapes
  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        const isProfessionValid = this.formData.profession !== '';
        const isAutreValid =
          this.formData.profession !== 'autre' ||
          (this.formData.profession === 'autre' &&
            this.formData.profession_autre.trim() !== '');
        return isProfessionValid && isAutreValid;
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
        return true; // Les besoins sont optionnels
      default:
        return false;
    }
  }

  get isFormValid(): boolean {
    return (
      this.formData.profession !== '' &&
      this.formData.revenus !== '' &&
      this.formData.nom.trim() !== '' &&
      this.formData.email.trim() !== '' &&
      this.formData.telephone.trim() !== '' &&
      this.formData.comptabilite !== ''
    );
  }

  // Gestion des étapes
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

  // Gestionnaires d'événements
  onProfessionChange(value: string): void {
    this.formData.profession = value;
    this.showAutreProfession = value === 'autre';

    if (value !== 'autre') {
      this.formData.profession_autre = '';
    }
  }

  onBesoinChange(besoin: string, event: any): void {
    const isChecked = event.target.checked;

    if (isChecked) {
      if (!this.formData.besoins.includes(besoin)) {
        this.formData.besoins.push(besoin);
      }
    } else {
      const index = this.formData.besoins.indexOf(besoin);
      if (index > -1) {
        this.formData.besoins.splice(index, 1);
      }
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
      console.log('Données du formulaire Professionnel Santé:', this.formData);
      // Ici, vous pouvez ajouter la logique d'envoi des données
    }
  }

  onReset(): void {
    this.currentStep = 1;
    this.formSubmitted = false;
    this.formData = {
      profession: '',
      profession_autre: '',
      revenus: '',
      nom: '',
      email: '',
      telephone: '',
      comptabilite: '',
      besoins: [],
      besoins_autre: '',
    };
    this.showAutreProfession = false;
    this.showAutreBesoin = false;
  }
}
