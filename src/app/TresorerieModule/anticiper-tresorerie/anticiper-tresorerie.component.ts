import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../../services/meta.service';
import { OdooService } from '../../services/odoo.service';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';
import { DiagnosticConfig, DiagnosticResult } from '../../shared/diagnostic';
import { DIAGNOSTIC_ANTICIPATION_CONFIG } from './diagnostic-anticipation.config';

@Component({
  selector: 'app-anticiper-tresorerie',
  templateUrl: './anticiper-tresorerie.component.html',
  styleUrl: './anticiper-tresorerie.component.css',
})
export class AnticiperTresorerieComponent implements OnInit, OnDestroy {
  // Popup properties
  showPopup = false;
  popupTimer: any;

  // Form properties
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  isLoading = false;
  showAutreDefi = false;
  showAutreActivite = false;
  showOutilGestion = false;

  // Form data
  formData = {
    tableau_tresorerie: '',
    defi_principal: '',
    defi_autre: '',
    nom: '',
    email: '',
    telephone: '',
    chiffre_affaires: '',
    type_activite: '',
    activite_autre: '',
    outil_gestion: '',
  };

  // Form configuration
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: '📊 Diagnostic Trésorerie',
    title:
      'Peut-on Prédire Vos Prochaines Tensions de Trésorerie ? Faites le Test',
    description:
      'Évaluez votre capacité à anticiper vos besoins financiers et évitez les crises de trésorerie. Un tableau prévisionnel bien conçu peut transformer votre gestion financière.',
    phoneButton: 'Appeler maintenant',
    contactButton: 'Faire mon diagnostic',

    // En-tête du formulaire
    formTitle: 'Diagnostic Anticipation',
    formDescription: 'Formulaire rapide : 5 étapes – Moins de 3 minutes',
    badge: 'Gratuit & Confidentiel',

    // Boutons et messages
    submitButton: 'Recevoir mon analyse',
    successTitle: '🎉 Merci pour votre demande !',
    successMessage:
      'Un conseiller MFINANCES vous contactera très bientôt pour vous aider à transformer votre tableau de trésorerie en outil stratégique.',
    successNote: "L'échange est gratuit, confidentiel et sans engagement.",
    resetButton: 'Faire une nouvelle demande',
  };

  // Configuration du diagnostic d'anticipation
  diagnosticConfig: DiagnosticConfig = DIAGNOSTIC_ANTICIPATION_CONFIG;

  // Contrôle de l'affichage du diagnostic
  showDiagnostic = false;

  constructor(
    private metaService: MetaService,
    private odooService: OdooService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Anticiper Trésorerie
    this.metaService.setAnticiperTresoreriePageMeta();

    // Démarrer le timer pour le popup
    this.startPopupTimer();

    // Vérifier si on doit afficher le diagnostic au chargement
    const hash = window.location.hash;
    if (hash === '#diagnostic') {
      this.showDiagnostic = true;
      setTimeout(() => {
        this.scrollToSection('diagnosticSection');
      }, 100);
    }
  }

  ngOnDestroy() {
    if (this.popupTimer) {
      clearTimeout(this.popupTimer);
    }
  }

  // Popup methods
  startPopupTimer() {
    this.popupTimer = setTimeout(() => {
      this.showPopup = true;
    }, 10000); // 30 secondes
  }

  closePopup() {
    this.showPopup = false;
  }

  openFormFromPopup() {
    this.closePopup();
    this.scrollToSection('contactSection');
  }

  // Navigation methods
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Diagnostic methods
  /**
   * Affiche le diagnostic et scroll jusqu'à la section
   */
  startDiagnostic(): void {
    this.showDiagnostic = true;
    setTimeout(() => {
      this.scrollToSection('diagnosticSection');
    }, 100);
  }

  /**
   * Callback appelé quand le diagnostic est terminé
   */
  onDiagnosticComplete(result: DiagnosticResult): void {
    console.log('Diagnostic anticipation terminé:', result);
    // Pas de redirection automatique pour les pages enfants
  }

  // Form methods
  onTableauTresorerieChange(value: string) {
    this.formData.tableau_tresorerie = value;
  }

  onDefiChange(value: string) {
    this.formData.defi_principal = value;
    this.showAutreDefi = value === 'autre';
    if (value !== 'autre') {
      this.formData.defi_autre = '';
    }
  }

  onActiviteChange(value: string) {
    this.formData.type_activite = value;
    this.showAutreActivite = value === 'autre';
    this.showOutilGestion = ['pme-salaries', 'commerciale'].includes(value);

    if (value !== 'autre') {
      this.formData.activite_autre = '';
    }
    if (!this.showOutilGestion) {
      this.formData.outil_gestion = '';
    }
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.tableau_tresorerie;
      case 2:
        return (
          !!this.formData.defi_principal &&
          (this.formData.defi_principal !== 'autre' ||
            !!this.formData.defi_autre)
        );
      case 3:
        return (
          !!this.formData.nom &&
          !!this.formData.email &&
          !!this.formData.telephone
        );
      case 4:
        return !!this.formData.chiffre_affaires;
      case 5:
        return (
          !!this.formData.type_activite &&
          (this.formData.type_activite !== 'autre' ||
            !!this.formData.activite_autre)
        );
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    return (
      this.formData.tableau_tresorerie !== '' &&
      this.formData.defi_principal !== '' &&
      (this.formData.defi_principal !== 'autre' ||
        this.formData.defi_autre !== '') &&
      this.formData.nom !== '' &&
      this.formData.email !== '' &&
      this.formData.telephone !== '' &&
      this.formData.chiffre_affaires !== '' &&
      this.formData.type_activite !== '' &&
      (this.formData.type_activite !== 'autre' ||
        this.formData.activite_autre !== '')
    );
  }

  onNextStep() {
    if (this.isStepValid()) {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    }
  }

  onPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (!this.isFormValid()) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    this.isLoading = true;

    // Assemblage de la description complète
    const descriptionParts = [
      `<h3>Diagnostic Anticipation Trésorerie</h3>`,
      `<p><strong>Utilise un tableau de trésorerie:</strong> ${this.getTableauTresorerieLabel()}</p>`,
      `<p><strong>Défi principal:</strong> ${this.getDefiLabel()}</p>`,
      this.formData.defi_autre
        ? `<p><strong>Précision défi:</strong> ${this.formData.defi_autre}</p>`
        : '',
      `<p><strong>Chiffre d'affaires:</strong> ${this.formData.chiffre_affaires}</p>`,
      `<p><strong>Type d'activité:</strong> ${this.getActiviteLabel()}</p>`,
      this.formData.activite_autre
        ? `<p><strong>Précision activité:</strong> ${this.formData.activite_autre}</p>`
        : '',
      this.formData.outil_gestion
        ? `<p><strong>Outil de gestion:</strong> ${this.formData.outil_gestion}</p>`
        : '',
    ];

    const fullDescription = descriptionParts.filter((p) => p).join('\n');

    const leadData = {
      name: this.formData.nom,
      phone: this.formData.telephone,
      email_from: this.formData.email,
      description: fullDescription,
      lead_type: 'anticiper_tresorerie',
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
  private getTableauTresorerieLabel(): string {
    const options = {
      oui: "Oui, je l'utilise régulièrement",
      occasionnellement: 'Occasionnellement',
      non: 'Non, pas encore',
    };
    return (
      options[this.formData.tableau_tresorerie as keyof typeof options] ||
      this.formData.tableau_tresorerie
    );
  }

  private getDefiLabel(): string {
    const defis = {
      'previsions-difficiles': 'Prévisions difficiles',
      'manque-temps': 'Manque de temps',
      'outils-inadaptes': 'Outils inadaptés',
      'comprehension-complexe': 'Compréhension complexe',
      autre: 'Autre',
    };
    return (
      defis[this.formData.defi_principal as keyof typeof defis] ||
      this.formData.defi_principal
    );
  }

  private getActiviteLabel(): string {
    const activites = {
      independant: 'Indépendant',
      'pme-salaries': 'PME avec salariés',
      commerciale: 'Activité commerciale',
      services: 'Prestations de services',
      autre: 'Autre',
    };
    return (
      activites[this.formData.type_activite as keyof typeof activites] ||
      this.formData.type_activite
    );
  }

  onReset() {
    this.formData = {
      tableau_tresorerie: '',
      defi_principal: '',
      defi_autre: '',
      nom: '',
      email: '',
      telephone: '',
      chiffre_affaires: '',
      type_activite: '',
      activite_autre: '',
      outil_gestion: '',
    };
    this.currentStep = 1;
    this.formSubmitted = false;
    this.showAutreDefi = false;
    this.showAutreActivite = false;
    this.showOutilGestion = false;
  }
}
