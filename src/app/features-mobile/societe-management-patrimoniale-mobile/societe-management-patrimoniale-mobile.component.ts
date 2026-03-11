import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { SidebarMobileComponent } from '../sidebar-mobile/sidebar-mobile.component';
import { ToastrService } from 'ngx-toastr';
import { OdooService } from '../../services/odoo.service';
import { DiagnosticManagementPatrimonialComponent } from './diagnostic-management-patrimonial.component';
import { trigger, transition, style, animate } from '@angular/animations';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
  priority?: boolean;
}

interface SecteurItem {
  icon: string;
  title: string;
  description: string;
}

interface OptimizationStep {
  number: string;
  title: string;
  content: string[];
}

interface FormStep {
  label: string;
}

interface SocieteType {
  value: string;
  label: string;
  icon: string;
}

interface ChiffreAffairesOption {
  value: string;
  label: string;
}

interface BesoinOption {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-societe-management-patrimoniale-mobile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SidebarMobileComponent, DiagnosticManagementPatrimonialComponent],
  templateUrl: './societe-management-patrimoniale-mobile.component.html',
  styleUrls: ['./societe-management-patrimoniale-mobile.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class SocieteManagementPatrimonialeMobileComponent implements OnInit, OnDestroy {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  // État du composant
  showFullIntro = false;
  formSubmitted = false;
  currentFormStep = 1;
  totalFormSteps = 4;

  // État du carrousel secteurs
  currentCarouselIndex = 0;
  activeSecteurIndex = 0;


  // Formulaire
  managementForm: FormGroup;

  // Secteurs d'activité
  secteurs: SecteurItem[] = [
    {
      icon: '💼',
      title: 'Services professionnels',
      description: 'Conseils, expertise, prestations intellectuelles'
    },
    {
      icon: '🏭',
      title: 'Industrie',
      description: 'Production, manufacturing, transformation'
    },
    {
      icon: '🏪',
      title: 'Commerce',
      description: 'Vente, distribution, négoce'
    },
    {
      icon: '🏠',
      title: 'Immobilier',
      description: 'Promotion, gestion, investissement'
    },
    {
      icon: '⚕️',
      title: 'Santé',
      description: 'Médecins, dentistes, professions médicales'
    },
    {
      icon: '🍽️',
      title: 'HORECA',
      description: 'Hôtellerie, restauration, cafés'
    }
  ];

  // Étapes d'optimisation
  optimizationSteps: OptimizationStep[] = [
    {
      number: '01',
      title: 'Création de la structure',
      content: [
        '✅ Mise en place de la société de management',
        '📋 Rédaction des contrats et statuts',
        '🔧 Configuration fiscale optimale'
      ]
    },
    {
      number: '02',
      title: 'Optimisation fiscale',
      content: [
        '💰 Structuration des management fees',
        '📊 Planification fiscale personnalisée',
        '⚖️ Conformité juridique assurée'
      ]
    },
    {
      number: '03',
      title: 'Acquisition immobilière',
      content: [
        '🏠 Investissement immobilier stratégique',
        '💎 Diversification du patrimoine',
        '📈 Optimisation des revenus locatifs'
      ]
    },
    {
      number: '04',
      title: 'Transmission',
      content: [
        '👨‍👩‍👧‍👦 Planification successorale',
        '🎯 Transmission optimisée du patrimoine',
        '⚡ Réduction des droits de succession'
      ]
    }
  ];

  // Étapes du formulaire
  formSteps: FormStep[] = [
    { label: 'Type société' },
    { label: 'Chiffre d\'affaires' },
    { label: 'Besoins' },
    { label: 'Contact' }
  ];

  // Options pour le formulaire
  societeTypes: SocieteType[] = [
    { value: 'sprl', label: 'SPRL', icon: '🏢' },
    { value: 'sa', label: 'SA', icon: '🏛️' },
    { value: 'srl', label: 'SRL', icon: '🏪' },
    { value: 'independant', label: 'Indépendant', icon: '👤' },
    { value: 'autre', label: 'Autre', icon: '📋' }
  ];

  chiffreAffairesOptions: ChiffreAffairesOption[] = [
    { value: 'moins-250k', label: 'Moins de 250k €' },
    { value: '250k-500k', label: '250k - 500k €' },
    { value: '500k-1m', label: '500k - 1M €' },
    { value: '1m-2m', label: '1M - 2M €' },
    { value: '2m-plus', label: 'Plus de 2M €' }
  ];

  besoinsOptions: BesoinOption[] = [
    { value: 'planification', label: 'Planification fiscale', icon: '📊' },
    { value: 'patrimoine', label: 'Gestion patrimoine', icon: '🏠' },
    { value: 'optimisation', label: 'Optimisation fiscale', icon: '💡' },
    { value: 'transmission', label: 'Transmission', icon: '👨‍👩‍👧‍👦' },
    { value: 'immobilier', label: 'Investissement immobilier', icon: '🏗️' },
    { value: 'conseil', label: 'Conseil stratégique', icon: '🎯' }
  ];

  // FAQ Data
  faqs: FaqItem[] = [
    {
      question: "Qu'est-ce qu'une Société de Management Patrimoniale ?",
      answer: `Une société qui permet au dirigeant d'entreprise de facturer ses prestations à sa société d'exploitation tout en optimisant 
               la gestion et la valorisation de son patrimoine personnel. Elle évite les modes de rémunération classiques (taxés jusqu'à 55%).`,
      isOpen: true,
      priority: true
    },
    {
      question: "Quels sont les avantages fiscaux d'une société de management patrimoniale ?",
      answer: `<ul>
                <li><strong>Optimisation fiscale :</strong> Management fees déductibles</li>
                <li><strong>Réduction d'impôts :</strong> Éviter la taxation jusqu'à 55%</li>
                <li><strong>Patrimoine durable :</strong> Réinvestissement dans des actifs long terme</li>
               </ul>`,
      isOpen: false
    },
    {
      question: "Comment fonctionne la facturation de management fees ?",
      answer: `Les management fees sont des prestations de conseil ou de gestion facturées par la société patrimoniale à la société d'exploitation. 
               Elles doivent être justifiées par des contrats clairs et des rapports démontrant l'utilité des services rendus.`,
      isOpen: false
    },
    {
      question: "Quels types d'investissements peut faire une société patrimoniale ?",
      answer: `<ul>
                <li>Investissements immobiliers (bureaux, logements, commerces)</li>
                <li>Placements financiers diversifiés</li>
                <li>Participations dans d'autres sociétés</li>
                <li>Actifs durables générateurs de revenus</li>
               </ul>`,
      isOpen: false
    },
    {
      question: "Comment MFINANCES accompagne-t-il la création d'une société patrimoniale ?",
      answer: `<ul>
                <li>Création et structuration complète de la société</li>
                <li>Mise en place des tableaux de bord personnalisés</li>
                <li>Accompagnement fiscal et patrimonial à chaque étape</li>
                <li>Planification successorale sur mesure</li>
               </ul>`,
      isOpen: false
    }
  ];

  constructor(
    private fb: FormBuilder,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {
    this.managementForm = this.createForm();
  }

  ngOnInit(): void {
    // Initialisation du composant
  }

  ngOnDestroy(): void {
    // Nettoyage des ressources
  }

  private createForm(): FormGroup {
    const formConfig: any = {
      typeSociete: ['', Validators.required],
      chiffreAffaires: ['', Validators.required],
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

  // Gestion du carrousel secteurs
  getCarouselTransform(): string {
    return `translateX(-${this.currentCarouselIndex * 33.33}%)`;
  }

  selectSecteur(index: number): void {
    this.activeSecteurIndex = index;
  }

  prevSecteur(): void {
    if (this.currentCarouselIndex > 0) {
      this.currentCarouselIndex--;
    }
  }

  nextSecteur(): void {
    if (this.currentCarouselIndex < this.secteurs.length - 3) {
      this.currentCarouselIndex++;
    }
  }

  goToSecteur(index: number): void {
    this.currentCarouselIndex = Math.max(0, Math.min(index, this.secteurs.length - 3));
    this.activeSecteurIndex = index;
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
        return !!this.managementForm.get('typeSociete')?.value;
      case 2:
        return !!this.managementForm.get('chiffreAffaires')?.value;
      case 3:
        // Au moins un besoin sélectionné
        return this.besoinsOptions.some(besoin => 
          this.managementForm.get(`besoin_${besoin.value}`)?.value
        );
      case 4:
        return !!(
          this.managementForm.get('nom')?.value &&
          this.managementForm.get('email')?.value &&
          this.managementForm.get('telephone')?.value &&
          this.managementForm.get('email')?.valid
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
    if (!this.isFormValid()) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    // Get labels for selected options
    const typeSocieteLabel = this.societeTypes.find(s => s.value === this.managementForm.value.typeSociete)?.label || this.managementForm.value.typeSociete;
    const chiffreAffairesLabel = this.chiffreAffairesOptions.find(c => c.value === this.managementForm.value.chiffreAffaires)?.label || this.managementForm.value.chiffreAffaires;

    // Get selected besoins
    const selectedBesoins = this.besoinsOptions
      .filter(besoin => this.managementForm.get(`besoin_${besoin.value}`)?.value)
      .map(besoin => besoin.label);

    const descriptionParts = [
      `<h3>Évaluation Société de Management Patrimoniale</h3>`,
      `<p><strong>Type de société:</strong> ${typeSocieteLabel}</p>`,
      `<p><strong>Chiffre d'affaires:</strong> ${chiffreAffairesLabel}</p>`,
      `<p><strong>Besoins:</strong></p>`,
      `<ul>${selectedBesoins.map(b => `<li>${b}</li>`).join('')}</ul>`,
      `<p><strong>Source:</strong> Formulaire mobile société-management-patrimoniale</p>`,
    ];

    const leadData = {
      name: this.managementForm.value.nom,
      phone: this.managementForm.value.telephone,
      email_from: this.managementForm.value.email,
      description: descriptionParts.join('\n'),
    };

    this.odooService.createLead(leadData).subscribe({
      next: () => {
        this.formSubmitted = true;
        this.toastr.success('Votre demande a été envoyée avec succès!', 'Succès');
      },
      error: (error) => {
        this.toastr.error("Une erreur est survenue lors de l'envoi.", 'Erreur');
        console.error('Erreur:', error);
      },
    });
  }

  resetForm(): void {
    this.currentFormStep = 1;
    this.formSubmitted = false;
    this.managementForm.reset();
  }

  // Méthodes de contact
  callNow(): void {
    window.location.href = 'tel:+3225420432';
  }

  emailNow(): void {
    window.location.href = 'mailto:info@mfinances.be?subject=Demande d\'information - Société de Management Patrimoniale';
  }

  scheduleAppointment(): void {
    // Redirection vers le système de prise de RDV
    console.log('Redirection vers prise de RDV');
  }

  openManagementContact(): void {
    this.scrollToContact();
  }

  openMaps(): void {
    window.open('https://maps.google.com/?q=MFINANCES+Brussels', '_blank');
  }

  // Gestion du diagnostic
  onDiagnosticComplete(result: any): void {
    console.log('Diagnostic complété:', result);
    // Vous pouvez ajouter une logique supplémentaire ici si nécessaire
  }
}