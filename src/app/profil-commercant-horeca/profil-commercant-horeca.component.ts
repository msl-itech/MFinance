import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';
import { COMMERCANT_HORECA_FORM_CONFIG } from '../shared/contact-form-layout/contact-form-configs';

@Component({
  selector: 'app-profil-commercant-horeca',
  templateUrl: './profil-commercant-horeca.component.html',
  styleUrl: './profil-commercant-horeca.component.css',
})
export class ProfilCommercantHorecaComponent implements OnInit {
  formConfig = COMMERCANT_HORECA_FORM_CONFIG;

  // Propriétés pour la gestion des étapes
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;

  // Données du formulaire
  formData = {
    type_etablissement: '',
    type_etablissement_autre: '',
    type_marchandises: '',
    type_marchandises_autre: '',
    revenus: '',
    nom: '',
    email: '',
    telephone: '',
    comptabilite: '',
    besoins: [] as string[],
    besoins_autre: '',
  };

  // Propriétés pour l'affichage conditionnel
  showAutreEtablissement = false;
  showQuestionMarchandises = false;
  showAutreMarchandises = false;
  showAutreBesoin = false;

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Commerçant Horeca
    this.metaService.setCommercantHorecaPageMeta();
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
        const isTypeValid = this.formData.type_etablissement !== '';
        const isAutreValid =
          this.formData.type_etablissement !== 'autre' ||
          (this.formData.type_etablissement === 'autre' &&
            this.formData.type_etablissement_autre.trim() !== '');
        return isTypeValid && isAutreValid;
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
      this.formData.type_etablissement !== '' &&
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
  onTypeEtablissementChange(value: string): void {
    this.formData.type_etablissement = value;
    this.showAutreEtablissement = value === 'autre';
    this.showQuestionMarchandises =
      value === 'commerce-detail' || value === 'commerce-gros';

    if (value !== 'autre') {
      this.formData.type_etablissement_autre = '';
    }
    if (!this.showQuestionMarchandises) {
      this.formData.type_marchandises = '';
      this.formData.type_marchandises_autre = '';
      this.showAutreMarchandises = false;
    }
  }

  onTypeMarchandisesChange(value: string): void {
    this.formData.type_marchandises = value;
    this.showAutreMarchandises = value === 'autre-marchandises';

    if (value !== 'autre-marchandises') {
      this.formData.type_marchandises_autre = '';
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
      console.log('Données du formulaire Commerçant HORECA:', this.formData);
      // Ici, vous pouvez ajouter la logique d'envoi des données
    }
  }

  onReset(): void {
    this.currentStep = 1;
    this.formSubmitted = false;
    this.formData = {
      type_etablissement: '',
      type_etablissement_autre: '',
      type_marchandises: '',
      type_marchandises_autre: '',
      revenus: '',
      nom: '',
      email: '',
      telephone: '',
      comptabilite: '',
      besoins: [],
      besoins_autre: '',
    };
    this.showAutreEtablissement = false;
    this.showQuestionMarchandises = false;
    this.showAutreMarchandises = false;
    this.showAutreBesoin = false;
  }
}
