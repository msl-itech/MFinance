import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-passage-societe',
  templateUrl: './passage-societe.component.html',
  styleUrl: './passage-societe.component.css',
})
export class PassageSocieteComponent implements OnInit {
  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: '🧭 Introduction engageante',
    title: 'Êtes-vous prêt à structurer votre activité en société ?',
    description:
      'Vous envisagez de passer en société ? En 2 minutes, faites le point sur vos priorités. Un expert Mfinances vous appellera sous 72h pour un échange gratuit, confidentiel et sans engagement. 🎁 En bonus : un mini-diagnostic personnalisé pour éclairer votre décision.',
    phoneButton: 'Appelez maintenant',
    contactButton: 'Nous contacter',

    // En-tête du formulaire
    formTitle: 'Diagnostic Passage en Société',
    formDescription: 'Évaluez votre situation en quelques étapes',
    badge: 'Gratuit & Confidentiel',

    // Boutons et messages
    submitButton: 'Recevoir mon diagnostic',
    successTitle: 'Merci pour vos réponses !',
    successMessage:
      'Vous allez recevoir un appel personnalisé pour répondre à vos questions et faire le point sur votre situation.',
    successNote:
      "À la clé : un plan d'action clair pour structurer votre activité sereinement.",
    resetButton: 'Nouveau diagnostic',
  };

  // État du formulaire
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;

  // Données du formulaire
  formData = {
    situation: '',
    situation_autre: '',
    motivation: '',
    motivation_autre: '',
    nom: '',
    email: '',
    telephone: '',
    connaissance: '',
    besoins: [] as string[],
    besoins_autre: '',
  };

  // Flags pour les champs "autre"
  showAutreSituation = false;
  showAutreMotivation = false;
  showAutreBesoin = false;

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Passage en Société
    this.metaService.setPassageEnSocietePageMeta();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
      situation: '',
      situation_autre: '',
      motivation: '',
      motivation_autre: '',
      nom: '',
      email: '',
      telephone: '',
      connaissance: '',
      besoins: [],
      besoins_autre: '',
    };
    this.showAutreSituation = false;
    this.showAutreMotivation = false;
    this.showAutreBesoin = false;
  }

  // Validation des étapes
  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return (
          !!this.formData.situation &&
          (this.formData.situation !== 'autre' ||
            !!this.formData.situation_autre)
        );
      case 2:
        return (
          !!this.formData.motivation &&
          (this.formData.motivation !== 'autre' ||
            !!this.formData.motivation_autre)
        );
      case 3:
        return !!(
          this.formData.nom &&
          this.formData.email &&
          this.formData.telephone
        );
      case 4:
        return !!this.formData.connaissance;
      case 5:
        return this.formData.besoins.length > 0;
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    return this.isStepValid() && this.currentStep === this.totalSteps;
  }

  // Gestionnaires de changement pour les champs
  onSituationChange(value: string): void {
    this.formData.situation = value;
    this.showAutreSituation = value === 'autre';
    if (value !== 'autre') {
      this.formData.situation_autre = '';
    }
  }

  onMotivationChange(value: string): void {
    this.formData.motivation = value;
    this.showAutreMotivation = value === 'autre';
    if (value !== 'autre') {
      this.formData.motivation_autre = '';
    }
  }

  onBesoinChange(value: string, event: any): void {
    if (event.target.checked) {
      if (!this.formData.besoins.includes(value)) {
        this.formData.besoins.push(value);
      }
    } else {
      const index = this.formData.besoins.indexOf(value);
      if (index > -1) {
        this.formData.besoins.splice(index, 1);
      }
    }

    this.showAutreBesoin = this.formData.besoins.includes('autre');
    if (!this.showAutreBesoin) {
      this.formData.besoins_autre = '';
    }
  }
}
