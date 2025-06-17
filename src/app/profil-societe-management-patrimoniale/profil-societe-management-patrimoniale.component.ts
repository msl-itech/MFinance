import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetaService } from '../services/meta.service';
import { MANAGEMENT_PATRIMONIAL_FORM_CONFIG } from '../shared/contact-form-layout/contact-form-configs';

@Component({
  selector: 'app-profil-societe-management-patrimoniale',
  templateUrl: './profil-societe-management-patrimoniale.component.html',
  styleUrl: './profil-societe-management-patrimoniale.component.css',
})
export class ProfilSocieteManagementPatrimonialeComponent implements OnInit {
  managementForm: FormGroup = new FormGroup({});
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
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

  constructor(private metaService: MetaService, private fb: FormBuilder) {
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
    if (this.managementForm.valid) {
      console.log('Formulaire soumis:', this.managementForm.value);
      this.formSubmitted = true;
      // Ici, vous pouvez ajouter la logique pour envoyer les données au serveur
    }
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
}
