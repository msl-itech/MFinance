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

interface Secteur {
  value: string;
  label: string;
  icon: string;
}

interface Revenu {
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
  selector: 'app-grande-entreprise-mobile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SidebarMobileComponent,
  ],
  templateUrl: './grande-entreprise-mobile.component.html',
  styleUrls: ['./grande-entreprise-mobile.component.scss'],
})
export class GrandeEntrepriseMobileComponent implements OnInit, OnDestroy {
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
  entrepriseForm: FormGroup;

  // Étapes du formulaire
  formSteps: FormStep[] = [
    { label: 'Secteur' },
    { label: 'Revenus' },
    { label: 'Besoins' },
    { label: 'Contact' },
  ];

  // Options pour le formulaire
  secteurs: Secteur[] = [
    { value: 'industrie', label: 'Industrie', icon: '🏭' },
    { value: 'services', label: 'Services', icon: '🤝' },
    { value: 'commerce', label: 'Commerce', icon: '🏪' },
    { value: 'technologie', label: 'Technologie', icon: '💻' },
    { value: 'autre', label: 'Autre secteur', icon: '➕' },
  ];

  revenus: Revenu[] = [
    { value: 'moins-1m', label: 'Moins de 1M €/an', icon: '📈' },
    { value: '1m-5m', label: '1M - 5M €/an', icon: '🏢' },
    { value: '5m-10m', label: '5M - 10M €/an', icon: '🏛️' },
    { value: 'plus-10m', label: 'Plus de 10M €/an', icon: '👑' },
  ];

  besoinsOptions: BesoinOption[] = [
    {
      value: 'budget-previsionnel',
      label: 'Budgets prévisionnels',
      icon: '📊',
    },
    { value: 'tresorerie', label: 'Gestion de trésorerie', icon: '💰' },
    { value: 'controle-gestion', label: 'Contrôle de gestion', icon: '📈' },
    { value: 'daf-temps-partiel', label: 'DAF à temps partiel', icon: '👔' },
    { value: 'digitalisation', label: 'Digitalisation processus', icon: '🔧' },
    { value: 'audit-financier', label: 'Audit financier', icon: '🔍' },
  ];

  constructor(
    private fb: FormBuilder,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {
    this.entrepriseForm = this.createForm();
  }

  ngOnInit(): void {
    // Initialisation du composant
  }

  ngOnDestroy(): void {
    // Nettoyage des ressources
  }

  private createForm(): FormGroup {
    const formConfig: any = {
      secteur: ['', Validators.required],
      revenus: ['', Validators.required],
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
        return !!this.entrepriseForm.get('secteur')?.value;
      case 2:
        return !!this.entrepriseForm.get('revenus')?.value;
      case 3:
        // Au moins un besoin sélectionné
        return this.besoinsOptions.some(
          (besoin) => this.entrepriseForm.get(`besoin_${besoin.value}`)?.value
        );
      case 4:
        return !!(
          this.entrepriseForm.get('nom')?.value &&
          this.entrepriseForm.get('email')?.value &&
          this.entrepriseForm.get('telephone')?.value &&
          this.entrepriseForm.get('email')?.valid
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
    const secteurLabel = this.secteurs.find(s => s.value === this.entrepriseForm.value.secteur)?.label || this.entrepriseForm.value.secteur;
    const revenusLabel = this.revenus.find(r => r.value === this.entrepriseForm.value.revenus)?.label || this.entrepriseForm.value.revenus;

    // Get selected besoins
    const selectedBesoins = this.besoinsOptions
      .filter(besoin => this.entrepriseForm.get(`besoin_${besoin.value}`)?.value)
      .map(besoin => besoin.label);

    const descriptionParts = [
      `<h3>Évaluation Grande Entreprise</h3>`,
      `<p><strong>Secteur d'activité:</strong> ${secteurLabel}</p>`,
      `<p><strong>Revenus annuels:</strong> ${revenusLabel}</p>`,
      `<p><strong>Besoins:</strong></p>`,
      `<ul>${selectedBesoins.map(b => `<li>${b}</li>`).join('')}</ul>`,
      `<p><strong>Source:</strong> Formulaire mobile grande-entreprise</p>`,
    ];

    const leadData = {
      name: this.entrepriseForm.value.nom,
      phone: this.entrepriseForm.value.telephone,
      email_from: this.entrepriseForm.value.email,
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
    this.entrepriseForm.reset();
  }

  // Méthodes de contact
  callNow(): void {
    window.location.href = 'tel:+3225420432';
  }

  emailNow(): void {
    window.location.href =
      "mailto:info@mfinances.be?subject=Demande d'information - Grandes entreprises";
  }

  scheduleAppointment(): void {
    // Redirection vers le système de prise de RDV
    console.log('Redirection vers prise de RDV');
  }

  openEntrepriseContact(): void {
    this.scrollToContact();
  }

  openMaps(): void {
    window.open('https://maps.google.com/?q=MFINANCES+Brussels', '_blank');
  }
}
