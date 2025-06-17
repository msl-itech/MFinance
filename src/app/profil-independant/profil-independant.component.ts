import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetaService } from '../services/meta.service';

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

  constructor(private metaService: MetaService, private fb: FormBuilder) {
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
    if (this.independantForm.valid) {
      console.log('Formulaire soumis:', this.independantForm.value);
      this.formSubmitted = true;
      // Ici, vous pouvez ajouter la logique pour envoyer les données au backend
    }
  }

  // Réinitialisation du formulaire
  resetForm(): void {
    this.independantForm.reset();
    this.currentStep = 1;
    this.formSubmitted = false;
  }
}
