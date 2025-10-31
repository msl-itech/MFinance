import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SidebarMobileComponent } from '../sidebar-mobile/sidebar-mobile.component';
import { ToastrService } from 'ngx-toastr';
import { OdooService } from '../../services/odoo.service';

interface FormStep {
  label: string;
}

interface TypeProjet {
  value: string;
  label: string;
  icon: string;
}

interface Budget {
  value: string;
  label: string;
  icon: string;
}

interface BesoinOption {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-profil-promoteur-immobilier-mobile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SidebarMobileComponent,
  ],
  templateUrl: './profil-promoteur-immobilier-mobile.component.html',
  styleUrls: ['./profil-promoteur-immobilier-mobile.component.scss'],
})
export class ProfilPromoteurImmobilierMobileComponent
  implements OnInit, OnDestroy
{
  // État du composant
  showFullIntro = false;
  formSubmitted = false;
  currentFormStep = 1;
  totalFormSteps = 4;

  // États des sliders
  activeBesoinsSlide = 0;
  activePratiqueSlide = 0;
  activeCaseSlide = 0;

  // Formulaire
  promoteurForm: FormGroup;

  // Étapes du formulaire
  formSteps: FormStep[] = [
    { label: 'Type' },
    { label: 'Budget' },
    { label: 'Besoins' },
    { label: 'Contact' },
  ];

  // Options pour le formulaire
  typesProjet: TypeProjet[] = [
    { value: 'residentiel', label: 'Résidentiel', icon: '🏠' },
    { value: 'commercial', label: 'Commercial', icon: '🏢' },
    { value: 'mixte', label: 'Mixte', icon: '🏘️' },
    { value: 'renovation', label: 'Rénovation', icon: '🔨' },
    { value: 'autre', label: 'Autre type', icon: '➕' },
  ];

  budgets: Budget[] = [
    { value: 'moins-500k', label: 'Moins de 500K €', icon: '🌱' },
    { value: '500k-1m', label: '500K - 1M €', icon: '📈' },
    { value: '1m-5m', label: '1M - 5M €', icon: '🏢' },
    { value: 'plus-5m', label: 'Plus de 5M €', icon: '👑' },
  ];

  besoinsOptions: BesoinOption[] = [
    {
      value: 'comptabilite-analytique',
      label: 'Comptabilité analytique',
      icon: '📊',
    },
    { value: 'optimisation-tva', label: 'Optimisation TVA', icon: '💰' },
    {
      value: 'planification-financiere',
      label: 'Planification financière',
      icon: '📈',
    },
    { value: 'reporting-avance', label: 'Reporting avancé', icon: '📋' },
    { value: 'conseil-fiscal', label: 'Conseil fiscal', icon: '⚖️' },
    { value: 'outils-digitaux', label: 'Outils digitaux', icon: '🔧' },
  ];

  constructor(
    private fb: FormBuilder,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {
    this.promoteurForm = this.createForm();
  }

  ngOnInit(): void {
    // Initialisation du composant
  }

  ngOnDestroy(): void {
    // Nettoyage des ressources
  }

  private createForm(): FormGroup {
    const formConfig: any = {
      typeProjet: ['', Validators.required],
      budget: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
    };

    // Ajouter les contrôles pour les besoins (checkboxes)
    this.besoinsOptions.forEach((besoin) => {
      formConfig[`besoin_${besoin.value}`] = [false];
    });

    return this.fb.group(formConfig);
  }

  // Gestion de l'interface
  toggleIntro(): void {
    this.showFullIntro = !this.showFullIntro;
  }

  // Gestion des sliders - Besoins spécifiques
  setActiveBesoinsSlide(index: number): void {
    this.activeBesoinsSlide = index;
  }

  // Gestion des sliders - Pratiques complémentaires
  setPratiqueSlide(index: number): void {
    this.activePratiqueSlide = index;
  }

  nextPratiqueSlide(): void {
    if (this.activePratiqueSlide < 2) {
      this.activePratiqueSlide++;
    }
  }

  previousPratiqueSlide(): void {
    if (this.activePratiqueSlide > 0) {
      this.activePratiqueSlide--;
    }
  }

  // Gestion des sliders - Case Studies
  setCaseSlide(index: number): void {
    this.activeCaseSlide = index;
  }

  nextCaseSlide(): void {
    if (this.activeCaseSlide < 1) {
      this.activeCaseSlide++;
    }
  }

  previousCaseSlide(): void {
    if (this.activeCaseSlide > 0) {
      this.activeCaseSlide--;
    }
  }

  // Navigation
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  scrollToContact(): void {
    this.scrollToSection('contact');
  }

  // Gestion du formulaire
  isFormStepValid(): boolean {
    switch (this.currentFormStep) {
      case 1:
        return !!this.promoteurForm.get('typeProjet')?.value;
      case 2:
        return !!this.promoteurForm.get('budget')?.value;
      case 3:
        // Au moins un besoin sélectionné
        return this.besoinsOptions.some(
          (besoin) => this.promoteurForm.get(`besoin_${besoin.value}`)?.value
        );
      case 4:
        return !!(
          this.promoteurForm.get('nom')?.value &&
          this.promoteurForm.get('email')?.value &&
          this.promoteurForm.get('telephone')?.value &&
          this.promoteurForm.get('email')?.valid
        );
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    return (
      this.isFormStepValid() && this.currentFormStep === this.totalFormSteps
    );
  }

  nextFormStep(): void {
    if (this.isFormStepValid() && this.currentFormStep < this.totalFormSteps) {
      this.currentFormStep++;
    }
  }

  previousFormStep(): void {
    if (this.currentFormStep > 1) {
      this.currentFormStep--;
    }
  }

  onSubmit(): void {
    if (!this.isFormValid()) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    // Get labels for selected options
    const typeProjetLabel = this.typesProjet.find(t => t.value === this.promoteurForm.value.typeProjet)?.label || this.promoteurForm.value.typeProjet;
    const budgetLabel = this.budgets.find(b => b.value === this.promoteurForm.value.budget)?.label || this.promoteurForm.value.budget;

    // Get selected besoins
    const selectedBesoins = this.besoinsOptions
      .filter(besoin => this.promoteurForm.get(`besoin_${besoin.value}`)?.value)
      .map(besoin => besoin.label);

    const descriptionParts = [
      `<h3>Évaluation Promoteur Immobilier</h3>`,
      `<p><strong>Type de projet:</strong> ${typeProjetLabel}</p>`,
      `<p><strong>Budget:</strong> ${budgetLabel}</p>`,
      `<p><strong>Besoins:</strong></p>`,
      `<ul>${selectedBesoins.map(b => `<li>${b}</li>`).join('')}</ul>`,
      `<p><strong>Source:</strong> Formulaire mobile promoteur-immobilier</p>`,
    ];

    const leadData = {
      name: this.promoteurForm.value.nom,
      phone: this.promoteurForm.value.telephone,
      email_from: this.promoteurForm.value.email,
      description: descriptionParts.join('\n'),
    };

    this.odooService.createLead(leadData).subscribe({
      next: () => {
        this.formSubmitted = true;
        this.toastr.success('Votre demande a été envoyée avec succès!', 'Succès');
      },
      error: (error) => {
        this.toastr.error("Une erreur est survenue lors de l'envoi.", 'Erreur');
        console.error('Erreur:', error);
      },
    });
  }

  resetForm(): void {
    this.currentFormStep = 1;
    this.formSubmitted = false;
    this.promoteurForm.reset();
  }

  // Méthodes de contact
  callNow(): void {
    window.location.href = 'tel:+3225420432';
  }

  emailNow(): void {
    window.location.href =
      "mailto:info@mfinances.be?subject=Demande d'information - Promoteurs immobiliers";
  }

  scheduleAppointment(): void {
    // Redirection vers le système de prise de RDV
    console.log('Redirection vers prise de RDV');
  }

  openPromoteurContact(): void {
    this.scrollToContact();
  }

  openMaps(): void {
    window.open('https://maps.google.com/?q=MFINANCES+Brussels', '_blank');
  }
}
