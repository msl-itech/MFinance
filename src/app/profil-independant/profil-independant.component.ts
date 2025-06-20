import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../services/meta.service';
import { OdooService } from '../services/odoo.service';

@Component({
  selector: 'app-profil-independant',
  templateUrl: './profil-independant.component.html',
  styleUrl: './profil-independant.component.css',
})
export class ProfilIndependantComponent implements OnInit {
  independantForm: FormGroup;
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  isLoading = false;

  // Options pour le statut professionnel
  statutOptions = [
    {
      value: 'principal',
      label: 'Indépendant à titre principal',
      icon: 'fas fa-briefcase',
    },
    {
      value: 'complementaire',
      label: 'Indépendant complémentaire',
      icon: 'fas fa-plus-circle',
    },
    {
      value: 'creation',
      label: "En cours de création d'activité",
      icon: 'fas fa-rocket',
    },
    {
      value: 'autre',
      label: 'Autre',
      icon: 'fas fa-ellipsis-h',
    },
  ];

  // Options pour les revenus annuels
  revenuOptions = [
    {
      value: 'moins_50k',
      label: 'Moins de 50K € / an',
    },
    {
      value: '50k_100k',
      label: '50K - 100K € / an',
    },
    {
      value: '100k_200k',
      label: '100K - 200K € / an',
    },
    {
      value: 'plus_200k',
      label: 'Plus de 200K € / an',
    },
  ];

  // Options pour la comptabilité
  comptabiliteOptions = [
    {
      value: 'self',
      label: 'Je la gère moi-même',
      icon: 'fas fa-user',
      description: 'Vous gérez vous-même votre comptabilité',
    },
    {
      value: 'externe',
      label: 'Je fais appel à un comptable externe',
      icon: 'fas fa-handshake',
      description: 'Vous travaillez déjà avec un comptable',
    },
    {
      value: 'aucun',
      label: "Je n'ai pas encore mis en place de système structuré",
      icon: 'fas fa-question-circle',
      description: 'Vous cherchez une solution adaptée',
    },
  ];

  // Options pour les besoins spécifiques
  besoinsOptions = [
    {
      value: 'comptabilite',
      label: 'Tenue de la comptabilité',
      icon: 'fas fa-calculator',
    },
    {
      value: 'fiscal',
      label: 'Déclarations fiscales',
      icon: 'fas fa-file-invoice',
    },
    {
      value: 'gestion',
      label: 'Conseil en gestion financière',
      icon: 'fas fa-chart-line',
    },
    {
      value: 'optimisation',
      label: 'Optimisation du statut social et fiscal',
      icon: 'fas fa-balance-scale',
    },
    {
      value: 'autre',
      label: 'Autre besoin',
      icon: 'fas fa-plus',
    },
  ];

  constructor(
    private metaService: MetaService,
    private fb: FormBuilder,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {
    this.independantForm = this.fb.group({
      // Étape 1
      statut: ['', Validators.required],
      autreStatut: [''],

      // Étape 2
      revenuAnnuel: ['', Validators.required],

      // Étape 3
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],

      // Étape 4
      comptabilite: ['', Validators.required],

      // Étape 5
      besoin_comptabilite: [false],
      besoin_fiscal: [false],
      besoin_gestion: [false],
      besoin_optimisation: [false],
      besoin_autre: [false],
      autresBesoin: [''],
    });
  }

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Indépendant
    this.metaService.setIndependantPageMeta();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Calcule le pourcentage de progression
  getProgressPercentage(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  // Vérifie si l'étape courante est valide
  isCurrentStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.independantForm.get('statut')?.valid ?? false;
      case 2:
        return this.independantForm.get('revenuAnnuel')?.valid ?? false;
      case 3:
        return (
          (this.independantForm.get('nom')?.valid &&
            this.independantForm.get('email')?.valid &&
            this.independantForm.get('telephone')?.valid) ??
          false
        );
      case 4:
        return this.independantForm.get('comptabilite')?.valid ?? false;
      case 5:
        // Au moins un besoin doit être sélectionné
        return (
          this.independantForm.get('besoin_comptabilite')?.value ||
          this.independantForm.get('besoin_fiscal')?.value ||
          this.independantForm.get('besoin_gestion')?.value ||
          this.independantForm.get('besoin_optimisation')?.value ||
          this.independantForm.get('besoin_autre')?.value
        );
      default:
        return false;
    }
  }

  // Navigation entre les étapes
  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  nextStep(): void {
    if (this.isCurrentStepValid() && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  // Soumission du formulaire
  onSubmit(): void {
    if (!this.independantForm.valid) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    this.isLoading = true;

    // Assemblage de la description complète
    const formData = this.independantForm.value;
    const descriptionParts = [
      `<h3>Demande d'accompagnement - Profil Indépendant</h3>`,
      `<p><strong>Statut:</strong> ${this.getStatutLabel(formData.statut)}</p>`,
      formData.autreStatut
        ? `<p><strong>Précision:</strong> ${formData.autreStatut}</p>`
        : '',
      `<p><strong>Revenu annuel:</strong> ${this.getRevenuLabel(
        formData.revenuAnnuel
      )}</p>`,
      `<p><strong>Gestion comptabilité:</strong> ${this.getComptabiliteLabel(
        formData.comptabilite
      )}</p>`,
      `<p><strong>Besoins prioritaires:</strong></p>`,
      `<ul>${this.getSelectedBesoins(formData)
        .map((b) => `<li>${b}</li>`)
        .join('')}</ul>`,
    ];

    const fullDescription = descriptionParts.filter((p) => p).join('\n');

    const leadData = {
      name: formData.nom,
      phone: formData.telephone,
      email_from: formData.email,
      description: fullDescription,
      lead_type: 'profil_independant',
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
  private getStatutLabel(value: string): string {
    const statut = this.statutOptions.find((s) => s.value === value);
    return statut ? statut.label : value;
  }

  private getRevenuLabel(value: string): string {
    const revenu = this.revenuOptions.find((r) => r.value === value);
    return revenu ? revenu.label : value;
  }

  private getComptabiliteLabel(value: string): string {
    const comptabilite = this.comptabiliteOptions.find(
      (c) => c.value === value
    );
    return comptabilite ? comptabilite.label : value;
  }

  private getSelectedBesoins(formData: any): string[] {
    const besoins = [];
    if (formData.besoin_comptabilite) besoins.push('Tenue de la comptabilité');
    if (formData.besoin_fiscal) besoins.push('Déclarations fiscales');
    if (formData.besoin_gestion) besoins.push('Conseil en gestion financière');
    if (formData.besoin_optimisation)
      besoins.push('Optimisation du statut social et fiscal');
    if (formData.besoin_autre) {
      besoins.push(formData.autresBesoin || 'Autre besoin');
    }
    return besoins;
  }

  // Réinitialisation du formulaire
  resetForm(): void {
    this.independantForm.reset();
    this.currentStep = 1;
    this.formSubmitted = false;
  }
}
