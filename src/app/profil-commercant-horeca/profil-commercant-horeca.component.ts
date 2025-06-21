import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../services/meta.service';
import { OdooService } from '../services/odoo.service';
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
  isLoading = false;

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

  constructor(
    private metaService: MetaService,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

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
    if (!this.isFormValid) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    this.isLoading = true;

    // Assemblage de la description complète
    const descriptionParts = [
      `<h3>Demande d'accompagnement - Commerçant HORECA</h3>`,
      `<p><strong>Type d'établissement:</strong> ${this.getTypeEtablissementLabel()}</p>`,
      this.formData.type_etablissement_autre
        ? `<p><strong>Précision établissement:</strong> ${this.formData.type_etablissement_autre}</p>`
        : '',
      this.formData.type_marchandises
        ? `<p><strong>Type de marchandises:</strong> ${this.getTypeMarchandisesLabel()}</p>`
        : '',
      this.formData.type_marchandises_autre
        ? `<p><strong>Précision marchandises:</strong> ${this.formData.type_marchandises_autre}</p>`
        : '',
      `<p><strong>Revenus annuels:</strong> ${this.formData.revenus}</p>`,
      `<p><strong>Gestion comptabilité:</strong> ${this.formData.comptabilite}</p>`,
      this.formData.besoins.length > 0
        ? `<p><strong>Besoins prioritaires:</strong></p>`
        : '',
      this.formData.besoins.length > 0
        ? `<ul>${this.getSelectedBesoins()
            .map((b) => `<li>${b}</li>`)
            .join('')}</ul>`
        : '',
    ];

    const fullDescription = descriptionParts.filter((p) => p).join('\n');

    const leadData = {
      name: this.formData.nom,
      phone: this.formData.telephone,
      email_from: this.formData.email,
      description: fullDescription,
      lead_type: 'profil_commercant_horeca',
    };

    this.odooService.createLead(leadData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.formSubmitted = true;
        this.toastr.success(
          'Votre demande a été envoyée avec succès!',
          'Succès'
        );
      },
      error: (error) => {
        this.isLoading = false;
        this.toastr.error(
          "Une erreur est survenue lors de l'envoi de la demande.",
          'Erreur'
        );
        console.error('Erreur lors de la création du lead:', error);
      },
    });
  }

  // Méthodes utilitaires pour les labels
  private getTypeEtablissementLabel(): string {
    const types = {
      restaurant: 'Restaurant',
      'bar-cafe': 'Bar/Café',
      hotel: 'Hôtel',
      'commerce-detail': 'Commerce de détail',
      'commerce-gros': 'Commerce de gros',
      autre: 'Autre',
    };
    return (
      types[this.formData.type_etablissement as keyof typeof types] ||
      this.formData.type_etablissement
    );
  }

  private getTypeMarchandisesLabel(): string {
    const types = {
      alimentaire: 'Alimentaire',
      textile: 'Textile',
      electronique: 'Électronique',
      'autre-marchandises': 'Autre',
    };
    return (
      types[this.formData.type_marchandises as keyof typeof types] ||
      this.formData.type_marchandises
    );
  }

  private getSelectedBesoins(): string[] {
    const besoinsLabels = {
      comptabilite: 'Tenue de la comptabilité',
      fiscal: 'Déclarations fiscales',
      gestion: 'Conseil en gestion',
      optimisation: 'Optimisation fiscale',
      autre: this.formData.besoins_autre || 'Autre',
    };

    return this.formData.besoins.map(
      (besoin) => besoinsLabels[besoin as keyof typeof besoinsLabels] || besoin
    );
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
