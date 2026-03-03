import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../services/meta.service';
import { OdooService } from '../services/odoo.service';
import { MANAGEMENT_PATRIMONIAL_FORM_CONFIG } from '../shared/contact-form-layout/contact-form-configs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-profil-societe-management-patrimoniale',
  templateUrl: './profil-societe-management-patrimoniale.component.html',
  styleUrl: './profil-societe-management-patrimoniale.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ProfilSocieteManagementPatrimonialeComponent implements OnInit {
  managementForm: FormGroup = new FormGroup({});
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  isLoading = false;
  formConfig = MANAGEMENT_PATRIMONIAL_FORM_CONFIG;

  // Options pour le type de société
  societeTypes = [
    {
      value: 'management',
      label: 'Société de management',
      icon: 'fas fa-briefcase',
    },
    {
      value: 'immobiliere',
      label: 'Société immobilière',
      icon: 'fas fa-building',
    },
    {
      value: 'portefeuille',
      label: 'Société de portefeuille',
      icon: 'fas fa-chart-line',
    },
    {
      value: 'autre',
      label: 'Autre',
      icon: 'fas fa-ellipsis-h',
    },
  ];

  // Options pour les revenus annuels
  revenuRanges = [
    {
      value: 'moins_100k',
      label: 'Moins de 100K € / an',
    },
    {
      value: '100k_500k',
      label: '100K - 500K € / an',
    },
    {
      value: '500k_1m',
      label: '500K - 1M € / an',
    },
    {
      value: 'plus_1m',
      label: 'Plus de 1M € / an',
    },
  ];

  // Options pour la comptabilité
  comptabiliteOptions = [
    {
      value: 'interne',
      label: "En interne (par un membre de l'entreprise)",
      icon: 'fas fa-user-tie',
      description:
        'La comptabilité est gérée par un employé ou un responsable interne',
    },
    {
      value: 'externe',
      label: 'Par un comptable externe',
      icon: 'fas fa-building',
      description: 'Vous faites appel à un cabinet comptable externe',
    },
    {
      value: 'non_structure',
      label: "Nous n'avons pas de système structuré et automatisé",
      icon: 'fas fa-exclamation-triangle',
      description: "La gestion comptable n'est pas encore bien organisée",
    },
  ];

  // Options pour les besoins spécifiques
  besoins = [
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
      value: 'gestion_patrimoniale',
      label: 'Conseil en gestion patrimoniale',
      icon: 'fas fa-piggy-bank',
    },
    {
      value: 'optimisation',
      label: 'Optimisation fiscale',
      icon: 'fas fa-balance-scale',
    },
    {
      value: 'autre',
      label: 'Autre',
      icon: 'fas fa-plus-circle',
    },
  ];

  constructor(
    private metaService: MetaService,
    private fb: FormBuilder,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {
    this.initForm();
  }

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Société Management Patrimoniale
    this.metaService.setSocieteManagementPatrimonialePageMeta();
  }

  private initForm(): void {
    this.managementForm = this.fb.group({
      // Étape 1 : Type de société
      typeSociete: ['', Validators.required],
      autreType: [''],

      // Étape 2 : Revenus annuels
      chiffreAffaires: ['', Validators.required],

      // Étape 3 : Coordonnées
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],

      // Étape 4 : Comptabilité
      comptabilite: ['', Validators.required],

      // Étape 5 : Besoins spécifiques
      besoin_comptabilite: [false],
      besoin_fiscal: [false],
      besoin_gestion_patrimoniale: [false],
      besoin_optimisation: [false],
      besoin_autre: [false],
      autreBesoin: [''],
    });
  }

  // Navigation entre les étapes
  nextStep(): void {
    if (this.isCurrentStepValid()) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    this.currentStep--;
  }

  // Validation de l'étape courante
  isCurrentStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.managementForm.get('typeSociete')?.valid ?? false;
      case 2:
        return this.managementForm.get('chiffreAffaires')?.valid ?? false;
      case 3:
        return (
          (this.managementForm.get('nom')?.valid &&
            this.managementForm.get('prenom')?.valid &&
            this.managementForm.get('email')?.valid &&
            this.managementForm.get('telephone')?.valid) ??
          false
        );
      case 4:
        return this.managementForm.get('comptabilite')?.valid ?? false;
      case 5:
        return true; // Au moins une option doit être sélectionnée
      default:
        return false;
    }
  }

  // Calcul du pourcentage de progression
  getProgressPercentage(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  // Soumission du formulaire
  onSubmit(): void {
    if (!this.managementForm.valid) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    this.isLoading = true;

    // Assemblage de la description complète
    const formData = this.managementForm.value;
    const descriptionParts = [
      `<h3>Demande d'accompagnement - Société de Management Patrimoniale</h3>`,
      `<p><strong>Type de société:</strong> ${this.getTypeLabel(
        formData.typeSociete
      )}</p>`,
      formData.autreType
        ? `<p><strong>Précision:</strong> ${formData.autreType}</p>`
        : '',
      `<p><strong>Chiffre d'affaires:</strong> ${this.getRevenuLabel(
        formData.chiffreAffaires
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
      name: `${formData.prenom} ${formData.nom}`,
      phone: formData.telephone,
      email_from: formData.email,
      description: fullDescription,
      lead_type: 'profil_societe_management_patrimoniale',
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
  private getTypeLabel(value: string): string {
    const type = this.societeTypes.find((t) => t.value === value);
    return type ? type.label : value;
  }

  private getRevenuLabel(value: string): string {
    const revenu = this.revenuRanges.find((r) => r.value === value);
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
    if (formData.besoin_gestion_patrimoniale)
      besoins.push('Conseil en gestion patrimoniale');
    if (formData.besoin_optimisation) besoins.push('Optimisation fiscale');
    if (formData.besoin_autre) {
      besoins.push(formData.autreBesoin || 'Autre');
    }
    return besoins;
  }

  // Réinitialisation du formulaire
  resetForm(): void {
    this.managementForm.reset();
    this.currentStep = 1;
    this.formSubmitted = false;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Gestion du diagnostic
  onDiagnosticComplete(result: any): void {
    console.log('Diagnostic complété:', result);
    // Vous pouvez ajouter une logique supplémentaire ici si nécessaire
  }
}
