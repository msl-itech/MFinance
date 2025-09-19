import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { SidebarMobileComponent } from '../sidebar-mobile/sidebar-mobile.component';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
  priority?: boolean;
}

interface MutualisationItem {
  icon: string;
  title: string;
  benefits: string[];
}

interface CaseSlide {
  icon: string;
  title: string;
  content: string[];
}

interface FormStep {
  label: string;
}

interface CollaborationType {
  value: string;
  label: string;
  icon: string;
}

interface NombreMembre {
  value: string;
  label: string;
  icon: string;
}

interface BesoinOption {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-societe-moyen-mobile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SidebarMobileComponent],
  templateUrl: './societe-moyen-mobile.component.html',
  styleUrls: ['./societe-moyen-mobile.component.scss'],
})
export class SocieteMoyenMobileComponent implements OnInit, OnDestroy {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  // État du composant
  showFullIntro = false;
  formSubmitted = false;
  currentFormStep = 1;
  totalFormSteps = 4;

  // État des carrousels
  currentMutualisationIndex = 0;
  currentCaseSlide = 0;

  // Calculateur d'économies
  chargesActuelles = 0;
  economiesEstimees = 0;

  // Formulaire
  societeForm: FormGroup;

  // Data pour les carrousels
  mutualisationItems: MutualisationItem[] = [
    {
      icon: '🏢',
      title: 'Locaux professionnels',
      benefits: [
        'Réduction du loyer grâce à la mutualisation',
        'Entretien premium sans coût individuel',
        'Partage des charges énergie / climatisation',
        'Optimisation de l\'espace disponible'
      ]
    },
    {
      icon: '💻',
      title: 'Matériel & Fournitures',
      benefits: [
        'Accès à des équipements high-tech sans achat initial',
        'Mobilier ergonomique mutualisé',
        'Gestion centralisée des stocks',
        'Réduction des frais de maintenance'
      ]
    },
    {
      icon: '🧑‍💼',
      title: 'Services partagés',
      benefits: [
        'Support administratif externalisé',
        'Outils digitaux toujours à jour (cloud, logiciels)',
        'Réduction du coût de personnel interne',
        'Secrétariat personnalisé à la demande'
      ]
    }
  ];

  caseSlides: CaseSlide[] = [
    {
      icon: '👩‍⚕️',
      title: 'Situation initiale',
      content: [
        'Un groupe de médecins partageait un cabinet',
        'Besoin d\'optimiser leur gestion commune',
        'Tensions liées aux contributions inégales'
      ]
    },
    {
      icon: '❗',
      title: 'Problèmes rencontrés',
      content: [
        '• Répartition des charges locatives complexe',
        '• Achats individuels coûteux',
        '• Manque de transparence financière'
      ]
    },
    {
      icon: '🛠️',
      title: 'Solution MFINANCES',
      content: [
        '✅ Comptabilité transparente basée sur l\'activité',
        '✅ Négociation centralisée (-15% consommables)',
        '✅ Système automatisé de cotisations'
      ]
    },
    {
      icon: '🏆',
      title: 'Résultats obtenus',
      content: [
        '🎯 Réduction significative des charges',
        '🤝 Collaboration harmonieuse',
        '📊 Transparence totale des finances'
      ]
    }
  ];

  // Étapes du formulaire
  formSteps: FormStep[] = [
    { label: 'Type collaboration' },
    { label: 'Nombre membres' },
    { label: 'Besoins' },
    { label: 'Contact' }
  ];

  // Options pour le formulaire
  collaborationTypes: CollaborationType[] = [
    { value: 'cabinet-medical', label: 'Cabinet médical', icon: '🏥' },
    { value: 'bureau-etudes', label: 'Bureau d\'études', icon: '📋' },
    { value: 'commerce', label: 'Commerce', icon: '🏪' },
    { value: 'services', label: 'Services', icon: '💼' },
    { value: 'autre', label: 'Autre secteur', icon: '📋' }
  ];

  nombreMembres: NombreMembre[] = [
    { value: '2-3', label: '2 à 3 membres', icon: '👥' },
    { value: '4-6', label: '4 à 6 membres', icon: '👥👥' },
    { value: '7-10', label: '7 à 10 membres', icon: '👥👥👥' },
    { value: '10+', label: 'Plus de 10 membres', icon: '👥👥👥👥' }
  ];

  besoinsOptions: BesoinOption[] = [
    { value: 'creation', label: 'Création de la SCM', icon: '🏗️' },
    { value: 'comptabilite', label: 'Gestion comptable', icon: '📊' },
    { value: 'cash-collecting', label: 'Cash collecting', icon: '💰' },
    { value: 'negociation', label: 'Négociation fournisseurs', icon: '🤝' },
    { value: 'statuts', label: 'Rédaction statuts', icon: '📋' },
    { value: 'tableaux-bord', label: 'Tableaux de bord', icon: '📈' }
  ];

  // FAQ Data
  faqs: FaqItem[] = [
    {
      question: "Qu'est-ce qu'une société de moyens ?",
      answer: `Une structure juridique qui permet à plusieurs professionnels de mutualiser certains moyens 
               matériels, financiers ou humains nécessaires à leur activité, sans exercer directement 
               leur activité au sein de cette structure.`,
      isOpen: true,
      priority: true
    },
    {
      question: "Quels sont les principaux avantages d'une société de moyens ?",
      answer: `<ul>
                <li><strong>Réduction des coûts :</strong> En mutualisant les charges d'exploitation</li>
                <li><strong>Conservation de l'autonomie :</strong> Chaque associé reste indépendant</li>
                <li><strong>Gestion transparente :</strong> Répartition équitable selon des règles claires</li>
               </ul>`,
      isOpen: false
    },
    {
      question: "Comment fonctionne la répartition des charges ?",
      answer: `Les charges sont réparties entre les membres selon des critères définis dans les statuts : 
               temps d'utilisation, part de consommation, ou toute autre règle convenue collectivement.`,
      isOpen: false
    },
    {
      question: "Quels sont les risques liés à une société de moyens ?",
      answer: `<ul>
                <li><strong>Responsabilité financière :</strong> Limitée au capital apporté</li>
                <li><strong>Conflits internes :</strong> Prévenus par des règles claires</li>
                <li><strong>Gestion rigoureuse :</strong> Essentielle pour éviter les déséquilibres</li>
               </ul>`,
      isOpen: false
    },
    {
      question: "Comment MFINANCES peut vous aider dans la gestion de votre société de moyens ?",
      answer: `<ul>
                <li><strong>Gestion comptable et fiscale :</strong> Suivi rigoureux des charges</li>
                <li><strong>Cash collecting :</strong> Gestion automatisée des paiements</li>
                <li><strong>Rédaction des statuts :</strong> Définition claire des règles</li>
                <li><strong>Optimisation des achats :</strong> Centralisation et négociation</li>
                <li><strong>Suivi des performances :</strong> Tableaux de bord personnalisés</li>
               </ul>`,
      isOpen: false
    }
  ];

  constructor(private fb: FormBuilder) {
    this.societeForm = this.createForm();
  }

  ngOnInit(): void {
    // Initialisation du composant
  }

  ngOnDestroy(): void {
    // Nettoyage des ressources
  }

  private createForm(): FormGroup {
    const formConfig: any = {
      typeCollaboration: ['', Validators.required],
      nombreMembres: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required]
    };

    // Ajouter les contrôles pour les besoins (checkboxes)
    this.besoinsOptions.forEach(besoin => {
      formConfig[`besoin_${besoin.value}`] = [false];
    });

    return this.fb.group(formConfig);
  }

  // Gestion de l'interface
  toggleIntro(): void {
    this.showFullIntro = !this.showFullIntro;
  }

  // Navigation
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToContact(): void {
    this.scrollToSection('contact');
  }

  // Gestion du carrousel mutualisation
  getCarouselTransform(): string {
    return `translateX(-${this.currentMutualisationIndex * 100}%)`;
  }

  prevMutualisation(): void {
    if (this.currentMutualisationIndex > 0) {
      this.currentMutualisationIndex--;
    }
  }

  nextMutualisation(): void {
    if (this.currentMutualisationIndex < this.mutualisationItems.length - 1) {
      this.currentMutualisationIndex++;
    }
  }

  goToMutualisation(index: number): void {
    this.currentMutualisationIndex = index;
  }

  // Calculateur d'économies
  calculateEconomies(): void {
    if (this.chargesActuelles > 0) {
      // Estimation d'économie de 20-30% en moyenne
      this.economiesEstimees = Math.round(this.chargesActuelles * 0.25);
    } else {
      this.economiesEstimees = 0;
    }
  }

  // Gestion du carrousel étude de cas
  prevCaseSlide(): void {
    if (this.currentCaseSlide > 0) {
      this.currentCaseSlide--;
    }
  }

  nextCaseSlide(): void {
    if (this.currentCaseSlide < this.caseSlides.length - 1) {
      this.currentCaseSlide++;
    }
  }

  goToCaseSlide(index: number): void {
    this.currentCaseSlide = index;
  }

  // Gestion FAQ
  toggleFaq(index: number): void {
    // Fermer tous les autres FAQ ouverts
    this.faqs.forEach((faq, i) => {
      if (i !== index) {
        faq.isOpen = false;
      }
    });
    // Ouvrir/fermer le FAQ cliqué
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  // Gestion du formulaire
  isFormStepValid(): boolean {
    switch (this.currentFormStep) {
      case 1:
        return !!this.societeForm.get('typeCollaboration')?.value;
      case 2:
        return !!this.societeForm.get('nombreMembres')?.value;
      case 3:
        // Au moins un besoin sélectionné
        return this.besoinsOptions.some(besoin => 
          this.societeForm.get(`besoin_${besoin.value}`)?.value
        );
      case 4:
        return !!(
          this.societeForm.get('nom')?.value &&
          this.societeForm.get('email')?.value &&
          this.societeForm.get('telephone')?.value &&
          this.societeForm.get('email')?.valid
        );
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    return this.isFormStepValid() && this.currentFormStep === this.totalFormSteps;
  }

  nextFormStep(): void {
    if (this.isFormStepValid() && this.currentFormStep < this.totalFormSteps) {
      this.currentFormStep++;
    }
  }

  previousFormStep(): void {
    if (this.currentFormStep > 1) {
      this.currentFormStep--;
    }
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      // Simulation d'envoi du formulaire
      console.log('Données formulaire société de moyens:', this.societeForm.value);
      
      // Simulation d'appel API
      setTimeout(() => {
        this.formSubmitted = true;
        this.sendFormData();
      }, 1000);
    }
  }

  resetForm(): void {
    this.currentFormStep = 1;
    this.formSubmitted = false;
    this.societeForm.reset();
  }

  private sendFormData(): void {
    // Préparation des données pour l'API
    const selectedBesoins = this.besoinsOptions
      .filter(besoin => this.societeForm.get(`besoin_${besoin.value}`)?.value)
      .map(besoin => besoin.value);

    const formDataToSend = {
      ...this.societeForm.value,
      besoins_list: selectedBesoins,
      source: 'societe-moyen-mobile',
      timestamp: new Date().toISOString(),
    };
    
    console.log('Envoi des données:', formDataToSend);
    // Ici, vous pouvez implémenter l'appel à votre service API
  }

  // Méthodes de contact
  callNow(): void {
    window.location.href = 'tel:+3225420432';
  }

  emailNow(): void {
    window.location.href = 'mailto:info@mfinances.be?subject=Demande d\'information - Société de Moyens';
  }

  scheduleAppointment(): void {
    // Redirection vers le système de prise de RDV
    console.log('Redirection vers prise de RDV');
  }

  openSocieteContact(): void {
    this.scrollToContact();
  }

  openMaps(): void {
    window.open('https://maps.google.com/?q=MFINANCES+Brussels', '_blank');
  }
}