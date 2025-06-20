import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OdooService } from '../services/odoo.service';
import { ContactFormConfig } from '../shared/contact-form-layout/contact-form-layout.component';

interface FormData {
  // Étape 1: Situation actuelle
  situation: string;
  situationAutre?: string;

  // Étape 2: Informations de contact
  nom: string;
  email: string;
  telephone: string;

  // Étape 3: Moment de contact
  creneauHoraire: string[];
  jourPrefere?: string;

  // Étape 4: Sujets prioritaires
  sujetsImportants: string[];
}

@Component({
  selector: 'app-zone-contact',
  templateUrl: './zone-contact.component.html',
  styleUrls: ['./zone-contact.component.css'],
})
export class ZoneContactComponent {
  currentStep: number = 1;
  totalSteps: number = 4;
  formSubmitted: boolean = false;
  isLoading: boolean = false;

  // Configuration du layout
  config: ContactFormConfig = {
    eyebrow: 'Nos contacts',
    title: 'Prêt à optimiser vos<br/>finances ?',
    description:
      'Vous avez une question, un projet, une urgence comptable ou fiscale ?<br/>Prenez 2 minutes pour nous décrire votre situation.<br/>🎁 Vous serez rappelé(e) sous 72h pour un premier échange gratuit, confidentiel et personnalisé.',
    phoneButton: '+32 2 886 05 50',
    contactButton: 'Contactez-nous',
    formTitle: '🧭 Introduction engageante',
    formDescription:
      'Remplissez le formulaire, et notre expert-comptable vous répondra rapidement.',
    badge: 'Consultation gratuite sous 72h',
    submitButton: 'Envoyer ma demande',
    successTitle: 'Merci pour vos réponses !',
    successMessage:
      "⏳ Un conseiller vous contactera rapidement.<br/>Ensemble, faisons le point sur vos besoins et posons les bases d'une stratégie claire, adaptée et durable.",
    successNote:
      "📞 Un conseiller MFINANCES vous appellera sous 72h. L'échange est gratuit, confidentiel et sans engagement.",
    resetButton: 'Nouveau formulaire',
  };

  // Données du formulaire
  formData: FormData = {
    situation: '',
    situationAutre: '',
    nom: '',
    email: '',
    telephone: '',
    creneauHoraire: [],
    jourPrefere: '',
    sujetsImportants: [],
  };

  // Options pour l'étape 1 - Situation actuelle
  situationOptions = [
    {
      value: 'particulier_impot',
      icon: '<i class="fas fa-user"></i>',
      title: "Particulier - Déclaration d'impôt",
      description:
        "Je suis un particulier et j'ai besoin d'aide pour ma déclaration d'impôt",
    },
    {
      value: 'devenir_independant',
      icon: '<i class="fas fa-rocket"></i>',
      title: 'Devenir indépendant',
      description: 'Je souhaite devenir indépendant',
    },
    {
      value: 'independant_actuel',
      icon: '<i class="fas fa-briefcase"></i>',
      title: 'Indépendant en personne physique',
      description: 'Je suis déjà indépendant en personne physique',
    },
    {
      value: 'creation_societe',
      icon: '<i class="fas fa-building"></i>',
      title: 'Création de société',
      description: 'Je suis en train de créer une société',
    },
    {
      value: 'societe_active',
      icon: '<i class="fas fa-check-circle text-success"></i>',
      title: 'Société active',
      description: "J'ai déjà une société active",
    },
    {
      value: 'autre',
      icon: '<i class="fas fa-comment"></i>',
      title: 'Autre',
      description: 'Ma situation ne correspond à aucune des options ci-dessus',
    },
  ];

  // Options pour l'étape 3 - Créneaux horaires
  creneauOptions = [
    { value: '9h-12h', label: '9h à 12h' },
    { value: '12h-15h', label: '12h à 15h' },
    { value: '15h-18h', label: '15h à 18h' },
  ];

  // Options pour l'étape 4 - Sujets importants
  sujetsOptions = [
    {
      category: '🧑‍💼 Votre statut ou votre projet',
      items: [
        {
          value: 'salarie_independant',
          label: 'Passer de salarié à indépendant',
        },
        { value: 'creer_societe', label: 'Créer une société prochainement' },
      ],
    },
    {
      category: '💸 Vos finances ou votre rémunération',
      items: [
        {
          value: 'optimiser_remuneration',
          label: 'Optimiser ma rémunération ou mon patrimoine',
        },
        {
          value: 'compte_courant',
          label: "Régler un problème avec mon compte courant d'associé",
        },
        { value: 'tresorerie', label: 'Stabiliser ou améliorer ma trésorerie' },
      ],
    },
    {
      category: '📊 Votre gestion stratégique',
      items: [
        {
          value: 'kpi_decisions',
          label:
            'Prendre des décisions fondées sur des indicateurs financiers (KPI)',
        },
        {
          value: 'anticiper_fiscalite',
          label:
            'Mieux anticiper ma fiscalité et éviter les mauvaises surprises',
        },
      ],
    },
    {
      category: '📁 Vos obligations administratives ou fiscales',
      items: [
        {
          value: 'controle_fiscal',
          label: 'Gérer un contrôle fiscal en cours ou imminent',
        },
        {
          value: 'comptabilite_declarations',
          label: 'Mettre à jour ma comptabilité et mes déclarations',
        },
        {
          value: 'gestion_administrative',
          label: 'Réorganiser ma gestion administrative',
        },
      ],
    },
  ];

  constructor(
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return (
          this.formData.situation !== '' &&
          (this.formData.situation !== 'autre' ||
            (this.formData.situationAutre?.trim() || '') !== '')
        );
      case 2:
        return (
          this.formData.nom.trim() !== '' &&
          this.formData.email.trim() !== '' &&
          this.formData.telephone.trim() !== ''
        );
      case 3:
        return this.formData.creneauHoraire.length > 0;
      case 4:
        return (
          this.formData.sujetsImportants.length > 0 &&
          this.formData.sujetsImportants.length <= 2
        );
      default:
        return false;
    }
  }

  get isFormValid(): boolean {
    return this.currentStep === this.totalSteps && this.isStepValid;
  }

  onNextStep(): void {
    if (this.isStepValid && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  onPreviousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSituationChange(value: string): void {
    this.formData.situation = value;
    if (value !== 'autre') {
      this.formData.situationAutre = '';
    }
  }

  onCreneauChange(creneau: string, checked: boolean): void {
    if (checked) {
      if (!this.formData.creneauHoraire.includes(creneau)) {
        this.formData.creneauHoraire.push(creneau);
      }
    } else {
      this.formData.creneauHoraire = this.formData.creneauHoraire.filter(
        (c) => c !== creneau
      );
    }
  }

  onSujetChange(sujet: string, checked: boolean): void {
    if (checked) {
      if (
        this.formData.sujetsImportants.length < 2 &&
        !this.formData.sujetsImportants.includes(sujet)
      ) {
        this.formData.sujetsImportants.push(sujet);
      }
    } else {
      this.formData.sujetsImportants = this.formData.sujetsImportants.filter(
        (s) => s !== sujet
      );
    }
  }

  onSubmit(): void {
    if (!this.isFormValid) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    this.isLoading = true;

    // Assemblage de la description complète
    const descriptionParts = [
      `<h3>Informations du contact</h3>`,
      `<p><strong>Situation actuelle:</strong> ${this.getSituationLabel()}</p>`,
      this.formData.situationAutre
        ? `<p><strong>Précision:</strong> ${this.formData.situationAutre}</p>`
        : '',
      `<p><strong>Créneaux préférés:</strong> ${this.formData.creneauHoraire.join(
        ', '
      )}</p>`,
      this.formData.jourPrefere
        ? `<p><strong>Jour préféré:</strong> ${this.formData.jourPrefere}</p>`
        : '',
      `<p><strong>Sujets prioritaires:</strong></p>`,
      `<ul>${this.formData.sujetsImportants
        .map((s) => `<li>${this.getSujetLabel(s)}</li>`)
        .join('')}</ul>`,
    ];

    const fullDescription = descriptionParts.filter((p) => p).join('\n');

    const leadData = {
      name: this.formData.nom,
      phone: this.formData.telephone,
      email_from: this.formData.email,
      description: fullDescription,
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

  onReset(): void {
    this.formSubmitted = false;
    this.currentStep = 1;
    this.formData = {
      situation: '',
      situationAutre: '',
      nom: '',
      email: '',
      telephone: '',
      creneauHoraire: [],
      jourPrefere: '',
      sujetsImportants: [],
    };
  }

  private getSituationLabel(): string {
    const situation = this.situationOptions.find(
      (s) => s.value === this.formData.situation
    );
    return situation ? situation.title : this.formData.situation;
  }

  getSujetLabelPublic(value: string): string {
    for (const category of this.sujetsOptions) {
      const sujet = category.items.find((s) => s.value === value);
      if (sujet) {
        return sujet.label;
      }
    }
    return value;
  }

  private getSujetLabel(value: string): string {
    return this.getSujetLabelPublic(value);
  }
}
