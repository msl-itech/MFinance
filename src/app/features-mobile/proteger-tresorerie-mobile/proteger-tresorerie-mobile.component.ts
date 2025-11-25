import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OdooService } from '../../services/odoo.service';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-proteger-tresorerie-mobile',
  standalone: true,
  imports: [CommonModule, FormsModule, ShardeModuleModule],
  templateUrl: './proteger-tresorerie-mobile.component.html',
  styleUrls: ['./proteger-tresorerie-mobile.component.scss']
})
export class ProtegerTresorerieMobileComponent implements OnInit {
  // FAQ properties
  activeFaq: number | null = null;

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

  faqItems = [
    {
      question: "Pourquoi ma trésorerie est-elle affectée ?",
      answer: "Lorsque de nouveaux concurrents proposent des produits ou services similaires à des prix plus bas, vos ventes peuvent diminuer. Si vous baissez vos prix pour rester compétitif, vos marges diminuent également, ce qui impacte directement votre trésorerie."
    },
    {
      question: "Dois-je baisser mes prix ?",
      answer: "Pas forcément. Une baisse des prix peut fragiliser vos marges et rendre votre trésorerie encore plus vulnérable. Il est souvent plus stratégique de mettre en avant ce qui vous distingue : la qualité, l'originalité, ou l'expérience client."
    },
    {
      question: "Comment savoir ce que veulent mes clients ?",
      answer: "Pour comprendre les besoins et attentes de vos clients, vous pouvez créer un sondage en ligne, analyser les retours et avis clients, et interagir directement avec vos clients en magasin ou via vos réseaux sociaux."
    },
    {
      question: "Quels outils pour suivre ma trésorerie ?",
      answer: "Il existe plusieurs outils simples : Google Sheets ou Excel pour un tableau de bord de base, QuickBooks, Wave ou Odoo pour automatiser vos suivis financiers, et Google Analytics pour analyser vos performances en ligne."
    },
    {
      question: "C'est quoi un CRM ?",
      answer: "Un CRM (Customer Relationship Management) est un outil qui centralise toutes les informations sur vos clients. Cela vous permet de suivre leurs interactions, personnaliser vos offres et fidéliser vos clients grâce à un suivi adapté."
    },
    {
      question: "Et si la concurrence attire toujours mes clients ?",
      answer: "Si la concurrence reste forte, il est essentiel de revoir votre positionnement global. Posez-vous ces questions : mes produits répondent-ils toujours aux besoins actuels ? Mon offre est-elle suffisamment différenciée ? Puis-je innover ?"
    }
  ];

  constructor(
    private odooService: OdooService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  playVideo(): void {
    this.scrollToSection('fidelisationVideo');
  }

  watchCaseStudy(): void {
    // Logique pour lancer la vidéo de l'étude de cas
    console.log('Lecture de l\'étude de cas Marianne');
  }

  scrollToVideo(): void {
    this.scrollToSection('marianneVideo');
  }

  toggleFaq(index: number): void {
    this.activeFaq = this.activeFaq === index ? null : index;
  }

  startTest(): void {
    // Navigation vers le test de fidélisation ou ouverture du formulaire
    this.scrollToSection('contactSection');
  }

  scrollToSection(sectionId: string): void {
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
      `<p><strong>Source:</strong> Formulaire mobile Protéger-Trésorerie</p>`,
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
      'oui-reguliere': 'Oui, clientèle régulière',
      'oui-irregulier': 'Oui, mais irrégulier',
      'non-rarement': 'Non, achètent rarement plus d\'une fois',
      'ne-sais-pas': 'Je ne sais pas',
    };
    return (
      options[this.formData.clients_reviennent as keyof typeof options] ||
      this.formData.clients_reviennent
    );
  }

  private getReactionLabel(): string {
    const reactions = {
      'promotions-regulieres': 'Je fais des promotions régulières',
      'services-fidelisation': 'J\'offre des services en plus pour fidéliser',
      'baisse-prix': 'Je baisse les prix quand il le faut',
      'qualite-bouche-oreille': 'Je mise sur la qualité et le bouche-à-oreille',
      'autre': 'Autre',
    };
    return (
      reactions[this.formData.reaction_ventes as keyof typeof reactions] ||
      this.formData.reaction_ventes
    );
  }

  private getActiviteLabel(): string {
    const activites = {
      'horeca': 'Horeca',
      'commerce-detail': 'Commerce de détail',
      'commerce-gros': 'Commerce de gros',
      'sante': 'Santé',
      'service-prestation': 'Service / prestation intellectuelle',
      'autre': 'Autre',
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