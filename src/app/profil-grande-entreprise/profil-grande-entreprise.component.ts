import { Component, OnInit, Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../services/meta.service';
import { OdooService } from '../services/odoo.service';
import { GRANDE_ENTREPRISE_FORM_CONFIG } from '../shared/contact-form-layout/contact-form-configs';

@Component({
  selector: 'app-profil-grande-entreprise',
  templateUrl: './profil-grande-entreprise.component.html',
  styleUrl: './profil-grande-entreprise.component.css',
})
export class ProfilGrandeEntrepriseComponent implements OnInit {
  formConfig = GRANDE_ENTREPRISE_FORM_CONFIG;

  // Navigation par étapes
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  isLoading = false;

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

  // Affichage conditionnel
  showAutreSecteur = false;
  showAutreBesoin = false;

  constructor(
    private renderer: Renderer2,
    private metaService: MetaService,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Grande Entreprise
    this.metaService.setGrandeEntreprisePageMeta();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onScroll(event: Event): void {
    const image = document.querySelector('.works-img img');
    const scrollTop = (event.target as HTMLElement).scrollTop;
    if (image) {
      const translateY = Math.min(scrollTop * 0.2, 200); // Ajustez la vitesse
      this.renderer.setStyle(image, 'transform', `translateY(${translateY}px)`);
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
    return (
      this.formData.secteur !== '' &&
      this.formData.revenus !== '' &&
      this.formData.nom.trim() !== '' &&
      this.formData.email.trim() !== '' &&
      this.formData.telephone.trim() !== '' &&
      this.formData.comptabilite !== '' &&
      this.formData.besoins.length > 0
    );
  }

  // Gestion des événements
  onSecteurChange(secteur: string): void {
    this.formData.secteur = secteur;
    this.showAutreSecteur = secteur === 'autre';
    if (!this.showAutreSecteur) {
      this.formData.secteur_autre = '';
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
      `<h3>Demande d'accompagnement - Grande Entreprise</h3>`,
      `<p><strong>Secteur d'activité:</strong> ${this.getSecteurLabel()}</p>`,
      this.formData.secteur_autre
        ? `<p><strong>Précision:</strong> ${this.formData.secteur_autre}</p>`
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
      lead_type: 'profil_grande_entreprise',
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
  private getSecteurLabel(): string {
    const secteurs = {
      industrie: 'Industrie',
      services: 'Services',
      commerce: 'Commerce',
      technologie: 'Technologie',
      finance: 'Finance',
      autre: 'Autre',
    };
    return (
      secteurs[this.formData.secteur as keyof typeof secteurs] ||
      this.formData.secteur
    );
  }

  private getSelectedBesoins(): string[] {
    const besoinsLabels = {
      comptabilite: 'Tenue de la comptabilité',
      fiscal: 'Déclarations fiscales',
      gestion: 'Conseil en gestion financière',
      optimisation: 'Optimisation fiscale',
      restructuration: 'Restructuration',
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
}
