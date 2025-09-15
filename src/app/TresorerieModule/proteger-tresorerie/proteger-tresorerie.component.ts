import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../../services/meta.service';
import { OdooService } from '../../services/odoo.service';
import { DeviceService } from '../../core/device.service';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-proteger-tresorerie',
  templateUrl: './proteger-tresorerie.component.html',
  styleUrl: './proteger-tresorerie.component.css',
})
export class ProtegerTresorerieComponent implements OnInit, OnDestroy {
  // Device detection
  shouldUseMobileVersion: boolean;

  // Popup properties
  showPopup = false;
  popupTimer: any;

  // Form properties
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  isLoading = false;
  showAutreReaction = false;
  showAutreActivite = false;
  showProgrammeFidelite = false;

  // Form data
  formData = {
    clients_reviennent: '',
    reaction_ventes: '',
    reaction_autre: '',
    nom: '',
    email: '',
    telephone: '',
    chiffre_affaires: '',
    type_activite: '',
    activite_autre: '',
    programme_fidelite: '',
  };

  // Form configuration
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: '🛡️ Test Fidélisation & Trésorerie',
    title: 'Vos clients reviennent-ils assez pour garantir votre trésorerie ?',
    description:
      'Évaluez la maturité de votre stratégie de fidélisation et découvrez comment transformer vos clients en alliés financiers durables.',
    phoneButton: 'Appeler maintenant',
    contactButton: 'Tester ma fidélisation',

    // En-tête du formulaire
    formTitle: 'Test Impact Fidélisation',
    formDescription: 'Formulaire rapide : 5 étapes – Moins de 3 minutes',
    badge: 'Gratuit & Confidentiel',

    // Boutons et messages
    submitButton: 'Recevoir mon diagnostic',
    successTitle: '🎉 Merci pour votre demande !',
    successMessage:
      'Un expert MFINANCES vous contactera très prochainement pour vous aider à créer ou renforcer votre programme de fidélité, valoriser vos atouts pour justifier vos prix et protéger durablement votre trésorerie sans sacrifier vos marges.',
    successNote: "L'échange est gratuit, confidentiel et sans engagement.",
    resetButton: 'Faire une nouvelle demande',
  };

  constructor(
    private metaService: MetaService,
    private odooService: OdooService,
    private toastr: ToastrService,
    private deviceService: DeviceService
  ) {
    this.shouldUseMobileVersion = this.deviceService.shouldUseMobileVersion();
  }

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Protéger Trésorerie
    this.metaService.setProtegerTresoreriePageMeta();

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
  onClientsReviennentChange(value: string) {
    this.formData.clients_reviennent = value;
  }

  onReactionChange(value: string) {
    this.formData.reaction_ventes = value;
    this.showAutreReaction = value === 'autre';
    if (value !== 'autre') {
      this.formData.reaction_autre = '';
    }
  }

  onActiviteChange(value: string) {
    this.formData.type_activite = value;
    this.showAutreActivite = value === 'autre';
    this.showProgrammeFidelite = ['commerce-detail', 'commerce-gros'].includes(
      value
    );

    if (value !== 'autre') {
      this.formData.activite_autre = '';
    }
    if (!this.showProgrammeFidelite) {
      this.formData.programme_fidelite = '';
    }
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.clients_reviennent;
      case 2:
        return (
          !!this.formData.reaction_ventes &&
          (this.formData.reaction_ventes !== 'autre' ||
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
      this.formData.clients_reviennent !== '' &&
      this.formData.reaction_ventes !== '' &&
      (this.formData.reaction_ventes !== 'autre' ||
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
    if (!this.isFormValid()) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    this.isLoading = true;

    // Assemblage de la description complète
    const descriptionParts = [
      `<h3>Test Fidélisation & Trésorerie</h3>`,
      `<p><strong>Les clients reviennent:</strong> ${this.getClientsReviennentLabel()}</p>`,
      `<p><strong>Réaction face aux baisses de ventes:</strong> ${this.getReactionLabel()}</p>`,
      this.formData.reaction_autre
        ? `<p><strong>Précision réaction:</strong> ${this.formData.reaction_autre}</p>`
        : '',
      `<p><strong>Chiffre d'affaires:</strong> ${this.formData.chiffre_affaires}</p>`,
      `<p><strong>Type d'activité:</strong> ${this.getActiviteLabel()}</p>`,
      this.formData.activite_autre
        ? `<p><strong>Précision activité:</strong> ${this.formData.activite_autre}</p>`
        : '',
      this.formData.programme_fidelite
        ? `<p><strong>Programme de fidélité:</strong> ${this.formData.programme_fidelite}</p>`
        : '',
    ];

    const fullDescription = descriptionParts.filter((p) => p).join('\n');

    const leadData = {
      name: this.formData.nom,
      phone: this.formData.telephone,
      email_from: this.formData.email,
      description: fullDescription,
      lead_type: 'proteger_tresorerie',
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
  private getClientsReviennentLabel(): string {
    const options = {
      'oui-regulierement': 'Oui, régulièrement',
      parfois: 'Parfois',
      rarement: 'Rarement',
      'ne-sais-pas': 'Je ne sais pas',
    };
    return (
      options[this.formData.clients_reviennent as keyof typeof options] ||
      this.formData.clients_reviennent
    );
  }

  private getReactionLabel(): string {
    const reactions = {
      'augmenter-prospection': 'Augmenter la prospection',
      'ameliorer-service': 'Améliorer le service',
      'baisser-prix': 'Baisser les prix',
      'investir-marketing': 'Investir en marketing',
      autre: 'Autre',
    };
    return (
      reactions[this.formData.reaction_ventes as keyof typeof reactions] ||
      this.formData.reaction_ventes
    );
  }

  private getActiviteLabel(): string {
    const activites = {
      independant: 'Indépendant',
      'commerce-detail': 'Commerce de détail',
      'commerce-gros': 'Commerce de gros',
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
      clients_reviennent: '',
      reaction_ventes: '',
      reaction_autre: '',
      nom: '',
      email: '',
      telephone: '',
      chiffre_affaires: '',
      type_activite: '',
      activite_autre: '',
      programme_fidelite: '',
    };
    this.currentStep = 1;
    this.formSubmitted = false;
    this.showAutreReaction = false;
    this.showAutreActivite = false;
    this.showProgrammeFidelite = false;
  }
}
