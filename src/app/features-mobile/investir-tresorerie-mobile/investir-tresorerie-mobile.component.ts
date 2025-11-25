import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { OdooService } from '../../services/odoo.service';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { MobileProfileNavigationComponent } from '../../shared/mobile-profile-navigation/mobile-profile-navigation.component';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-investir-tresorerie-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule, FormsModule, MobileProfileNavigationComponent],
  templateUrl: './investir-tresorerie-mobile.component.html',
  styleUrls: ['./investir-tresorerie-mobile.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class InvestirTresorerieMobileComponent implements OnInit {
  // Profil actuel pour la navigation
  currentProfile = '/tresorerie/investir-tresorerie';

  // Video modal
  showVideo = false;

  // FAQ functionality
  activeFaq: number | null = null;
  showAllFaqs = false;

  // FAQ data pour investir sans risquer sa trésorerie
  faqs: Faq[] = [
    {
      question: 'Comment évaluer la rentabilité d\'un investissement ?',
      answer: 'Posez-vous les questions suivantes : Quand commencera-t-il à générer des revenus ? Quels sont les coûts directs et indirects liés à cet investissement ? Quel est son impact sur votre trésorerie à court et moyen terme ? Utilisez un tableau de trésorerie prévisionnel pour anticiper l\'impact financier.'
    },
    {
      question: 'Quels sont les risques d\'un leasing ?',
      answer: 'Le leasing offre des avantages comme la flexibilité et des paiements réguliers, mais comporte aussi des inconvénients : Coût total plus élevé sur le long terme, pas de propriété immédiate, engagement contractuel. Le leasing est particulièrement adapté si vous souhaitez conserver des liquidités tout en accédant à des équipements modernes.'
    },
    {
      question: 'Comment éviter de fragiliser ma trésorerie ?',
      answer: 'Privilégiez les projets à rentabilité rapide pour minimiser les risques financiers. Simulez l\'impact financier dans un tableau de trésorerie prévisionnel avant de vous engager. Diversifiez vos financements pour ne pas dépendre d\'une seule source. Anticipez les imprévus en conservant un coussin de sécurité.'
    },
    {
      question: 'Quelles aides disponibles en Belgique ?',
      answer: 'En Belgique, plusieurs dispositifs peuvent vous aider à financer vos investissements : les aides de la Région wallonne pour les projets d\'innovation ou d\'expansion, les subsides européens pour PME accessibles pour des projets spécifiques. Contactez des experts en recherche de subventions pour maximiser vos chances d\'obtenir ces financements.'
    },
    {
      question: 'Quelle leçon retenir de l\'histoire de Marianne ?',
      answer: 'L\'erreur de Marianne est d\'avoir financé une machine coûteuse uniquement sur ses fonds propres. Cette décision a vidé sa trésorerie, la laissant vulnérable face à ses dépenses courantes. Marianne aurait pu éviter cette situation en optant pour un financement adapté comme un emprunt bancaire ou un leasing.'
    }
  ];

  // Variables pour le formulaire
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  isLoading = false;
  showAutreFrein = false;
  showAutreActivite = false;

  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: 'INVESTIR SANS RISQUE',
    title: 'Diagnostic Investissement Express',
    description: 'En 3 minutes, découvrez si votre projet va booster ou plomber votre trésorerie.',
    phoneButton: 'Appelez-nous',
    contactButton: 'Contactez-nous',
    
    // En-tête du formulaire
    formTitle: 'Diagnostic personnalisé',
    formDescription: 'Formulaire rapide – 5 étapes – Gratuit & Confidentiel',
    badge: 'GRATUIT ET CONFIDENTIEL',
    
    // Boutons et messages
    submitButton: 'Recevoir mon diagnostic',
    successTitle: '🎉 Merci pour votre demande !',
    successMessage: 'Votre diagnostic d\'investissement sera préparé par nos experts.',
    successNote: 'Nous vous contactons sous 72h pour analyser votre projet.',
    resetButton: 'Faire une nouvelle analyse'
  };

  // Données du formulaire
  formData = {
    souhaite_investir: '',
    frein_principal: '',
    frein_autre: '',
    nom: '',
    email: '',
    telephone: '',
    chiffre_affaires: '',
    type_activite: '',
    activite_autre: ''
  };

  constructor(
    private router: Router,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // Initialisation du composant
  }

  // Getters pour FAQ
  get visibleFaqs(): Faq[] {
    return this.faqs.slice(0, 3);
  }

  get hiddenFaqs(): Faq[] {
    return this.showAllFaqs ? this.faqs.slice(3) : [];
  }

  // Méthodes pour la vidéo
  toggleVideo(): void {
    this.showVideo = !this.showVideo;
    if (this.showVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  // Méthodes pour la FAQ
  toggleFaq(index: number): void {
    this.activeFaq = this.activeFaq === index ? null : index;
  }

  toggleAllFaqs(): void {
    this.showAllFaqs = !this.showAllFaqs;
    if (!this.showAllFaqs) {
      this.activeFaq = null;
    }
  }

  // Méthodes de navigation
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  contactExpert(): void {
    window.open('https://calendly.com/mfinances/rdv-client-en-teleconference', '_blank');
  }

  // Méthodes pour le formulaire
  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.souhaite_investir;
      case 2:
        return !!this.formData.frein_principal && 
               (this.formData.frein_principal !== 'autre' || !!this.formData.frein_autre);
      case 3:
        return !!this.formData.nom && !!this.formData.email && !!this.formData.telephone;
      case 4:
        return !!this.formData.chiffre_affaires;
      case 5:
        return !!this.formData.type_activite && 
               (this.formData.type_activite !== 'autre' || !!this.formData.activite_autre);
      default:
        return false;
    }
  }

  get isFormValid(): boolean {
    return this.currentStep === this.totalSteps && this.isStepValid;
  }

  onSouhaiteInvestirChange(value: string): void {
    this.formData.souhaite_investir = value;
  }

  onFreinChange(value: string): void {
    this.formData.frein_principal = value;
    this.showAutreFrein = value === 'autre';
    if (value !== 'autre') {
      this.formData.frein_autre = '';
    }
  }

  onActiviteChange(value: string): void {
    this.formData.type_activite = value;
    this.showAutreActivite = value === 'autre';
    if (value !== 'autre') {
      this.formData.activite_autre = '';
    }
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

  onSubmit(): void {
    if (this.isFormValid) {
      this.isLoading = true;

      // Labels pour les valeurs sélectionnées
      const souhaiteInvestirLabels: { [key: string]: string } = {
        'oui': 'Oui, j\'ai un projet d\'investissement en cours',
        'non': 'Non, pas de projet pour le moment'
      };

      const freinLabels: { [key: string]: string } = {
        'manque-tresorerie': 'Manque de trésorerie',
        'doutes-rentabilite': 'Doutes sur la rentabilité',
        'pas-plan-financement': 'Pas de plan de financement',
        'autre': this.formData.frein_autre || 'Autre'
      };

      const chiffreAffairesLabels: { [key: string]: string } = {
        'moins-100k': 'Moins de 100K €/an',
        '100k-200k': '100K à 200K €/an',
        '200k-500k': '200K à 500K €/an',
        'plus-500k': 'Plus de 500K €/an'
      };

      const activiteLabels: { [key: string]: string } = {
        'horeca': 'Horeca (restaurant, café, bar, hôtel)',
        'commerce-detail': 'Commerce de détail',
        'commerce-gros': 'Commerce de gros',
        'services': 'Services',
        'sante': 'Santé (médecin, dentiste, pharmacie)',
        'autre': this.formData.activite_autre || 'Autre'
      };

      const souhaiteInvestirLabel = souhaiteInvestirLabels[this.formData.souhaite_investir] || this.formData.souhaite_investir;
      const freinLabel = freinLabels[this.formData.frein_principal] || this.formData.frein_principal;
      const chiffreAffairesLabel = chiffreAffairesLabels[this.formData.chiffre_affaires] || this.formData.chiffre_affaires;
      const activiteLabel = activiteLabels[this.formData.type_activite] || this.formData.type_activite;

      const descriptionParts = [
        `<h3>Diagnostic Investissement</h3>`,
        `<p><strong>Souhaite investir prochainement:</strong> ${souhaiteInvestirLabel}</p>`,
        `<p><strong>Frein principal:</strong> ${freinLabel}</p>`,
        `<p><strong>Chiffre d'affaires annuel:</strong> ${chiffreAffairesLabel}</p>`,
        `<p><strong>Type d'activité:</strong> ${activiteLabel}</p>`,
        `<p><strong>Source:</strong> Formulaire mobile Investir-Trésorerie</p>`,
      ];

      const leadData = {
        name: this.formData.nom,
        phone: this.formData.telephone,
        email_from: this.formData.email,
        description: descriptionParts.join('\n'),
      };

      this.odooService.createLead(leadData).subscribe({
        next: () => {
          this.formSubmitted = true;
          this.isLoading = false;
          this.toastr.success('Votre demande a été envoyée avec succès!', 'Succès');
        },
        error: (error) => {
          this.isLoading = false;
          this.toastr.error("Une erreur est survenue lors de l'envoi.", 'Erreur');
          console.error('Erreur:', error);
        },
      });
    }
  }

  onReset(): void {
    this.currentStep = 1;
    this.formSubmitted = false;
    this.showAutreFrein = false;
    this.showAutreActivite = false;
    this.formData = {
      souhaite_investir: '',
      frein_principal: '',
      frein_autre: '',
      nom: '',
      email: '',
      telephone: '',
      chiffre_affaires: '',
      type_activite: '',
      activite_autre: ''
    };
  }
}