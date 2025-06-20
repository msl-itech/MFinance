import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-tresorerie-benefice',
  templateUrl: './tresorerie-benefice.component.html',
  styleUrl: './tresorerie-benefice.component.css',
})
export class TresorerieBeneficeComponent implements OnInit {
  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: ' Bilan Express',
    title: 'Bilan Trésorerie Express – en 4 questions',
    description:
      "Pour bien démarrer, identifions ensemble le principal frein à votre trésorerie aujourd'hui. Ces informations nous permettent de vous fournir un retour réellement personnalisé.",
    phoneButton: 'Appelez maintenant',
    contactButton: 'Nous contacter',

    // En-tête du formulaire
    formTitle: 'Bilan Trésorerie Express',
    formDescription: 'Diagnostic en 4 étapes',
    badge: 'Mini-diagnostic Gratuit',

    // Boutons et messages
    submitButton: 'Recevoir mon diagnostic',
    successTitle: 'Merci pour vos réponses !',
    successMessage:
      'Notre équipe vous contactera par téléphone sous 72h. 🧠 Préparez vos questions : cet appel est 100 % gratuit et personnalisé.',
    successNote:
      '📄 À la suite de notre échange, vous recevrez un mini-diagnostic clair et sans engagement sur la santé de votre trésorerie.',
    resetButton: 'Nouveau diagnostic',
  };

  // État du formulaire
  currentStep = 1;
  totalSteps = 4;
  formSubmitted = false;

  // État du pop-up
  showPopup = false;
  popupClosed = false;

  // Données du formulaire
  formData = {
    situation_actuelle: '',
    situation_autre: '',
    chiffre_affaires: '',
    nom: '',
    email: '',
    telephone: '',
    pratiques_gestion: '',
  };

  // Flags pour les champs "autre"
  showAutreSituation = false;

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Trésorerie Bénéfice
    this.metaService.setTresorerieBeneficePageMeta();

    // Afficher le pop-up après 15 secondes
    setTimeout(() => {
      if (!this.popupClosed) {
        this.showPopup = true;
      }
    }, 10000);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Gestion du pop-up
  closePopup(): void {
    this.showPopup = false;
    this.popupClosed = true;
  }

  openFormFromPopup(): void {
    this.closePopup();
    this.scrollToSection('contactSection');
  }

  // Gestion de la navigation du formulaire
  onNextStep(): void {
    if (this.isStepValid() && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  onPreviousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      this.formSubmitted = true;
      console.log('Données du formulaire:', this.formData);
      // Ici vous pouvez ajouter l'envoi des données à votre service
    }
  }

  onReset(): void {
    this.currentStep = 1;
    this.formSubmitted = false;
    this.formData = {
      situation_actuelle: '',
      situation_autre: '',
      chiffre_affaires: '',
      nom: '',
      email: '',
      telephone: '',
      pratiques_gestion: '',
    };
    this.showAutreSituation = false;
  }

  // Validation des étapes
  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return (
          !!this.formData.situation_actuelle &&
          (this.formData.situation_actuelle !== 'autre' ||
            !!this.formData.situation_autre)
        );
      case 2:
        return !!this.formData.chiffre_affaires;
      case 3:
        return !!(
          this.formData.nom &&
          this.formData.email &&
          this.formData.telephone
        );
      case 4:
        return !!this.formData.pratiques_gestion;
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    return this.isStepValid() && this.currentStep === this.totalSteps;
  }

  // Gestionnaires de changement pour les champs
  onSituationChange(value: string): void {
    this.formData.situation_actuelle = value;
    this.showAutreSituation = value === 'autre';
    if (value !== 'autre') {
      this.formData.situation_autre = '';
    }
  }
}
