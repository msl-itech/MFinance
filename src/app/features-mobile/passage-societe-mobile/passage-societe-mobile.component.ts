import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { MobileProfileNavigationComponent } from '../../shared/mobile-profile-navigation/mobile-profile-navigation.component';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

interface Step {
  title: string;
  description: string;
  image: string;
}

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-passage-societe-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule, FormsModule, MobileProfileNavigationComponent],
  templateUrl: './passage-societe-mobile.component.html',
  styleUrls: ['./passage-societe-mobile.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class PassageSocieteMobileComponent implements OnInit {
  // Profil actuel pour la navigation
  currentProfile = '/vente/passage-en-societe';

  // Video modal
  showVideo = false;

  // FAQ functionality
  activeFaq: number | null = null;
  showAllFaqs = false;

  // Les 4 étapes de l'accompagnement
  steps: Step[] = [
    {
      title: 'Votre situation actuelle',
      description: 'Nous vous présentons la situation de votre activité en personne physique en mettant en évidence l\'impôt qu\'elle génère.',
      image: '../../../assets/img/vente/etape1_passage_en_societe_mfinan.webp'
    },
    {
      title: 'Plan en société',
      description: 'Nous élaborons le plan financier de votre activité sous forme de société. Cela permet de projeter vos résultats financiers et de calculer les impôts associés.',
      image: '../../../assets/img/vente/etape2_passage_en_societe_mfinan.webp'
    },
    {
      title: 'Optimisation du pouvoir d\'achat',
      description: 'Nous réalisons une optimisation de votre pouvoir d\'achat. Nous examinons ensemble les différentes niches fiscales disponibles.',
      image: '../../../assets/img/vente/etape3_passage_en_societe_mfinan.webp'
    },
    {
      title: 'Synthèse comparative',
      description: 'Nous rédigeons une note de synthèse comparative qui met en évidence l\'économie d\'impôts que vous pourriez réaliser.',
      image: '../../../assets/img/vente/bcom-h-2-service-grid-img4-5 (1).webp'
    }
  ];

  // FAQ data
  faqs: Faq[] = [
    {
      question: 'Quels avantages fiscaux d\'une société ?',
      answer: 'En tant que société, vous bénéficiez de taux d\'imposition plus cléments, avec des impôts sur les bénéfices à 20 % jusqu\'à 100 000 € et 25 % au-delà, comparativement aux taux plus élevés pour les personnes physiques.'
    },
    {
      question: 'Comment mon patrimoine est-il protégé ?',
      answer: 'La constitution en société crée une séparation claire entre vos biens personnels et professionnels, protégeant ainsi vos actifs personnels contre les dettes et les risques liés aux activités de l\'entreprise.'
    },
    {
      question: 'Quels sont les coûts initiaux ?',
      answer: 'Les frais initiaux incluent les coûts des publications légales, des cotisations et des frais de gestion comptable. Bien que ces dépenses soient non négligeables, elles sont souvent compensées par les économies d\'impôts.'
    },
    {
      question: 'À partir de quand est-ce rentable ?',
      answer: 'Le seuil de rentabilité est atteint lorsque les économies d\'impôt réalisées surpassent les coûts opérationnels additionnels de la société. Par exemple, si vous économisez 8 000 € en impôts pour un coût additionnel de 3 500 €, le passage en société est économiquement justifié.'
    },
    {
      question: 'Quelles stratégies fiscales après la transition ?',
      answer: 'En tant que société, vous pouvez exploiter des niches fiscales, organiser des rémunérations alternatives et optimiser votre charge fiscale de manière plus efficace qu\'en tant qu\'entrepreneur individuel.'
    },
    {
      question: 'Importance de la gestion proactive ?',
      answer: 'Une gestion proactive est essentielle pour maintenir la continuité des revenus et assurer la sécurité financière de la société, surtout face à l\'absence des protections standard offertes aux salariés.'
    },
    {
      question: 'Impact sur la prise de décision économique ?',
      answer: 'Devenir une société vous permet de prendre des décisions plus stratégiques concernant la croissance, la répartition des bénéfices et les investissements, en vous basant sur un cadre juridique et fiscal plus avantageux.'
    },
    {
      question: 'Précautions lors de la transformation ?',
      answer: 'Il est crucial de bien comprendre les implications légales et fiscales, de prévoir les coûts initiaux et de s\'assurer de la conformité continue pour maximiser les bénéfices de ce statut.'
    },
    {
      question: 'Perspectives après la transformation ?',
      answer: 'La transformation en société ouvre de vastes perspectives pour l\'expansion commerciale, l\'amélioration de la crédibilité sur le marché et l\'accès à de nouvelles sources de financement.'
    }
  ];

  // Variables pour le formulaire
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  isLoading = false;
  showAutreSituation = false;
  showAutreMotivation = false;
  showAutreBesoin = false;

  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: 'PASSAGE EN SOCIÉTÉ',
    title: 'Analyse personnalisée - Passage en société',
    description: 'Obtenez votre diagnostic gratuit et découvrez si le passage en société vous est profitable.',
    phoneButton: 'Appelez-nous',
    contactButton: 'Contactez-nous',
    
    // En-tête du formulaire
    formTitle: 'Diagnostic personnalisé',
    formDescription: 'Répondez à quelques questions pour recevoir votre analyse complète',
    badge: 'GRATUIT ET SANS ENGAGEMENT',
    
    // Boutons et messages
    submitButton: 'Recevoir mon diagnostic',
    successTitle: '🎉 Merci pour votre demande !',
    successMessage: 'Votre diagnostic personnalisé sera préparé par nos experts.',
    successNote: 'Nous vous contactons sous 72h pour planifier votre rendez-vous.',
    resetButton: 'Faire une nouvelle demande'
  };

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
    besoins_autre: ''
  };

  constructor(private router: Router) {}

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
        return !!this.formData.situation && 
               (this.formData.situation !== 'autre' || !!this.formData.situation_autre);
      case 2:
        return !!this.formData.motivation && 
               (this.formData.motivation !== 'autre' || !!this.formData.motivation_autre);
      case 3:
        return !!this.formData.nom && !!this.formData.email && !!this.formData.telephone;
      case 4:
        return !!this.formData.connaissance;
      case 5:
        return this.formData.besoins.length > 0 && 
               (!this.formData.besoins.includes('autre') || !!this.formData.besoins_autre);
      default:
        return false;
    }
  }

  get isFormValid(): boolean {
    return this.currentStep === this.totalSteps && this.isStepValid;
  }

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
    const isChecked = event.target.checked;
    if (isChecked) {
      this.formData.besoins.push(value);
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
      // Simulation d'envoi du formulaire
      setTimeout(() => {
        this.formSubmitted = true;
        this.isLoading = false;
        console.log('Formulaire soumis:', this.formData);
      }, 2000);
    }
  }

  onReset(): void {
    this.currentStep = 1;
    this.formSubmitted = false;
    this.showAutreSituation = false;
    this.showAutreMotivation = false;
    this.showAutreBesoin = false;
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
      besoins_autre: ''
    };
  }
}