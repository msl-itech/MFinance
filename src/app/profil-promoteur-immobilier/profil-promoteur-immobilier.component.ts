import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../services/meta.service';
import { OdooService } from '../services/odoo.service';
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
  isLoading = false;

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

  constructor(
    private metaService: MetaService,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

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
    if (!this.isFormValid) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    this.isLoading = true;

    // Assemblage de la description complète
    const descriptionParts = [
      `<h3>Demande d'accompagnement - Promoteur Immobilier</h3>`,
      `<p><strong>Type de projet:</strong> ${this.getTypeProjetLabel()}</p>`,
      this.formData.type_projet_autre
        ? `<p><strong>Précision:</strong> ${this.formData.type_projet_autre}</p>`
        : '',
      `<p><strong>Revenus annuels:</strong> ${this.formData.revenus}</p>`,
      `<p><strong>Gestion comptabilité:</strong> ${this.formData.comptabilite}</p>`,
      `<p><strong>Besoins prioritaires:</strong></p>`,
      `<ul>${this.getSelectedBesoins()
        .map((b) => `<li>${b}</li>`)
        .join('')}</ul>`,
    ];

    const fullDescription = descriptionParts.filter((p) => p).join('\n');

    const leadData = {
      name: this.formData.nom,
      phone: this.formData.telephone,
      email_from: this.formData.email,
      description: fullDescription,
      lead_type: 'profil_promoteur_immobilier',
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
  private getTypeProjetLabel(): string {
    const types = {
      residentiel: 'Résidentiel',
      commercial: 'Commercial',
      industriel: 'Industriel',
      mixte: 'Mixte',
      autre: 'Autre',
    };
    return (
      types[this.formData.type_projet as keyof typeof types] ||
      this.formData.type_projet
    );
  }

  private getSelectedBesoins(): string[] {
    const besoinsLabels = {
      comptabilite: 'Tenue de la comptabilité',
      fiscal: 'Déclarations fiscales',
      gestion_projet: 'Gestion de projets',
      financement: 'Conseil en financement',
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
