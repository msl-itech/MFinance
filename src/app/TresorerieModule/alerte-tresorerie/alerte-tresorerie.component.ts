import { Component, OnDestroy, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-alerte-tresorerie',
  templateUrl: './alerte-tresorerie.component.html',
  styleUrl: './alerte-tresorerie.component.css',
})
export class AlerteTresorerieComponent implements OnInit, OnDestroy {
  // Popup properties
  showPopup = false;
  popupTimer: any;

  // Form properties
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  showAutreReaction = false;
  showAutreActivite = false;
  showTypesMarchandises = false;

  // Form data
  formData = {
    perdu_clients: '',
    reaction_concurrence: '',
    reaction_autre: '',
    nom: '',
    email: '',
    telephone: '',
    chiffre_affaires: '',
    type_activite: '',
    activite_autre: '',
    types_marchandises: '',
  };

  // Form configuration
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: '🛡️ Test Résistance Concurrentielle',
    title:
      'Découvrez en 3 minutes si votre trésorerie résisterait à un concurrent agressif',
    description:
      'Évaluez votre capacité à faire face à la pression concurrentielle sans compromettre votre trésorerie. Un test stratégique pour renforcer votre position sur le marché.',
    phoneButton: 'Appeler maintenant',
    contactButton: 'Tester ma résistance',

    // En-tête du formulaire
    formTitle: 'Test Solidité Trésorerie',
    formDescription: 'Formulaire rapide : 5 étapes – Moins de 3 minutes',
    badge: 'Gratuit & Confidentiel',

    // Boutons et messages
    submitButton: 'Recevoir mon analyse',
    successTitle: '🎉 Merci pour votre demande !',
    successMessage:
      'Un expert MFINANCES vous rappellera très prochainement pour vous aider à renforcer votre stratégie face à la concurrence, protéger vos marges et améliorer votre trésorerie sans casser vos prix.',
    successNote: "L'échange est gratuit, confidentiel et sans engagement.",
    resetButton: 'Faire une nouvelle demande',
  };

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Alerte Trésorerie
    this.metaService.setAlerteTresoreriePageMeta();

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
    }, 20000); // 20 secondes
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
  onPerduClientsChange(value: string) {
    this.formData.perdu_clients = value;
  }

  onReactionChange(value: string) {
    this.formData.reaction_concurrence = value;
    this.showAutreReaction = value === 'autre';
    if (value !== 'autre') {
      this.formData.reaction_autre = '';
    }
  }

  onActiviteChange(value: string) {
    this.formData.type_activite = value;
    this.showAutreActivite = value === 'autre';
    this.showTypesMarchandises = ['commerce-detail', 'commerce-gros'].includes(
      value
    );

    if (value !== 'autre') {
      this.formData.activite_autre = '';
    }
    if (!this.showTypesMarchandises) {
      this.formData.types_marchandises = '';
    }
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.perdu_clients;
      case 2:
        return (
          !!this.formData.reaction_concurrence &&
          (this.formData.reaction_concurrence !== 'autre' ||
            !!this.formData.reaction_autre)
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
      this.formData.perdu_clients !== '' &&
      this.formData.reaction_concurrence !== '' &&
      (this.formData.reaction_concurrence !== 'autre' ||
        this.formData.reaction_autre !== '') &&
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
      perdu_clients: '',
      reaction_concurrence: '',
      reaction_autre: '',
      nom: '',
      email: '',
      telephone: '',
      chiffre_affaires: '',
      type_activite: '',
      activite_autre: '',
      types_marchandises: '',
    };
    this.currentStep = 1;
    this.formSubmitted = false;
    this.showAutreReaction = false;
    this.showAutreActivite = false;
    this.showTypesMarchandises = false;
  }
}
