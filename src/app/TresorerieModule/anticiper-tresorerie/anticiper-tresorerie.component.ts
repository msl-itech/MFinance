import { Component, OnDestroy, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

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

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Anticiper Trésorerie
    this.metaService.setAnticiperTresoreriePageMeta();

    // Démarrer le timer pour le popup
    this.startPopupTimer();
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
    if (this.isFormValid()) {
      console.log('Form submitted:', this.formData);
      this.formSubmitted = true;
      // Ici vous pouvez ajouter la logique d'envoi des données
    }
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
