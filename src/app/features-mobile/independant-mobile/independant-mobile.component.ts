import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OdooService } from '../../services/odoo.service';
import { SidebarMobileComponent } from '../sidebar-mobile/sidebar-mobile.component';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
  category: string;
  priority?: boolean;
}

interface StatutOption {
  value: string;
  label: string;
  icon: string;
}

interface RevenuOption {
  value: string;
  label: string;
}

interface BesoinOption {
  value: string;
  label: string;
  icon: string;
}

interface Step {
  title: string;
  description: string;
}

interface FormStep {
  label: string;
}

@Component({
  selector: 'app-independant-mobile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SidebarMobileComponent],
  templateUrl: './independant-mobile.component.html',
  styleUrls: ['./independant-mobile.component.scss'],
})
export class IndependantMobileComponent implements OnInit {
  // État du composant
  isScrolled = false;
  showFullIntro = false;
  activeFaqCategory = 'fiscalite';
  currentStepIndex = 0;
  
  // Formulaire d'évaluation
  independantForm!: FormGroup;
  currentFormStep = 1;
  totalFormSteps = 4;
  formSubmitted = false;

  // Étapes du formulaire
  formSteps: FormStep[] = [
    { label: 'Statut' },
    { label: 'Revenus' },
    { label: 'Besoins' },
    { label: 'Contact' }
  ];

  // Étapes pour devenir indépendant
  steps: Step[] = [
    {
      title: 'Préparer un plan financier',
      description: 'Établissez un business plan détaillé et évaluez vos besoins de financement pour lancer votre activité sereinement.'
    },
    {
      title: 'Compte bancaire professionnel',
      description: 'Ouvrez un compte bancaire dédié à votre activité professionnelle pour séparer vos finances personnelles et professionnelles.'
    },
    {
      title: 'Enregistrement BCE',
      description: 'Inscrivez-vous à la Banque-Carrefour des Entreprises pour officialiser votre statut d\'indépendant.'
    },
    {
      title: 'Activation TVA',
      description: 'Activez votre numéro de TVA si nécessaire et affiliez-vous à une caisse d\'assurances sociales.'
    }
  ];

  // FAQ
  faqs: FaqItem[] = [
    {
      question: "Quels sont les principaux avantages de devenir indépendant ?",
      answer: "Être votre propre patron, gérer vos horaires, transformer vos passions en métier et accéder à des aides financières comme Tremplin-Indépendants.",
      category: "demarches",
      isOpen: false,
      priority: true
    },
    {
      question: "Quelles sont les obligations fiscales d'un indépendant ?",
      answer: "Déclarer vos revenus au SPF Finances, tenir une comptabilité adaptée à votre chiffre d'affaires et effectuer les déclarations TVA si vous y êtes assujetti.",
      category: "fiscalite", 
      isOpen: false,
      priority: true
    },
    {
      question: "Existe-t-il des aides financières pour les indépendants ?",
      answer: "Oui : Tremplin-Indépendants pour réduire les cotisations sociales, subsides régionaux pour le lancement d'activité et microcrédits pour vos premiers investissements.",
      category: "aides",
      isOpen: false,
      priority: true
    },
    {
      question: "Comment gérer les périodes de creux dans mon activité ?",
      answer: "Constituez une épargne de sécurité, diversifiez vos revenus pour limiter la dépendance à un seul client et fidélisez vos clients existants.",
      category: "demarches",
      isOpen: false
    },
    {
      question: "Quel est le coût des démarches administratives ?",
      answer: "L'inscription à la BCE coûte environ 105,50 euros, avec des suppléments pour chaque unité d'établissement. Certaines démarches supplémentaires peuvent engendrer des frais.",
      category: "fiscalite",
      isOpen: false
    },
    {
      question: "Quelles assurances dois-je prévoir en tant qu'indépendant ?",
      answer: "Assurance responsabilité civile professionnelle (obligatoire), assurance maladie et invalidité, assurance revenu garanti (recommandées).",
      category: "demarches",
      isOpen: false
    }
  ];

  // Options du formulaire
  statutOptions: StatutOption[] = [
    { value: 'salarie', label: 'Salarié', icon: '👔' },
    { value: 'independant_complementaire', label: 'Indépendant complémentaire', icon: '⚡' },
    { value: 'etudiant', label: 'Étudiant', icon: '🎓' },
    { value: 'chomeur', label: 'Demandeur d\'emploi', icon: '🔍' },
    { value: 'autre', label: 'Autre situation', icon: '❓' }
  ];

  revenuOptions: RevenuOption[] = [
    { value: 'moins_25k', label: 'Moins de 25 000 €' },
    { value: '25k_50k', label: '25 000 € - 50 000 €' },
    { value: '50k_100k', label: '50 000 € - 100 000 €' },
    { value: 'plus_100k', label: 'Plus de 100 000 €' }
  ];

  besoinsOptions: BesoinOption[] = [
    { value: 'creation', label: 'Création d\'entreprise', icon: '🚀' },
    { value: 'comptabilite', label: 'Comptabilité', icon: '📊' },
    { value: 'fiscalite', label: 'Fiscalité & TVA', icon: '📋' },
    { value: 'optimisation', label: 'Optimisation fiscale', icon: '💡' },
    { value: 'conseil', label: 'Conseil stratégique', icon: '🎯' },
    { value: 'autre', label: 'Autre besoin', icon: '❓' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    // Initialisation du composant
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 10;
  }

  // Initialisation du formulaire
  initializeForm(): void {
    const formControls: any = {
      statut: ['', Validators.required],
      revenuAnnuel: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required]
    };

    // Ajouter les contrôles pour les besoins
    this.besoinsOptions.forEach(besoin => {
      formControls[`besoin_${besoin.value}`] = [false];
    });

    this.independantForm = this.fb.group(formControls);
  }

  // Navigation générale
  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Gestion de l'introduction
  toggleIntro(): void {
    this.showFullIntro = !this.showFullIntro;
  }

  // Gestion des étapes
  nextStep(): void {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
    }
  }

  previousStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  goToStep(index: number): void {
    if (index >= 0 && index < this.steps.length) {
      this.currentStepIndex = index;
    }
  }

  // Gestion des FAQ
  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  scrollToFaqCategory(category: string): void {
    this.activeFaqCategory = category;
    // Optionnel: faire défiler vers la première FAQ de cette catégorie
    const categoryFaq = this.faqs.find(faq => faq.category === category);
    if (categoryFaq) {
      const faqIndex = this.faqs.indexOf(categoryFaq);
      if (!categoryFaq.isOpen) {
        this.toggleFaq(faqIndex);
      }
    }
  }

  // Actions de contact
  callNow(): void {
    window.location.href = 'tel:+3225420432';
  }

  emailNow(): void {
    window.location.href = 'mailto:info@mfinances.be';
  }

  scheduleAppointment(): void {
    window.open('https://calendly.com/mfinances/rdv-client-en-teleconference', '_blank');
  }

  openIndependantContact(): void {
    this.router.navigate(['/contact'], { queryParams: { service: 'independant' } });
  }

  openMaps(): void {
    window.open('https://maps.google.com/?q=20+Rue+de+la+Magnanerie,+1180+Uccle', '_blank');
  }

  // Gestion du formulaire d'évaluation
  getCurrentFormStepTitle(): string {
    switch (this.currentFormStep) {
      case 1: return 'Statut professionnel';
      case 2: return 'Revenus estimés';
      case 3: return 'Besoins spécifiques';
      case 4: return 'Contact';
      default: return '';
    }
  }

  isFormStepValid(): boolean {
    switch (this.currentFormStep) {
      case 1:
        return !!this.independantForm.get('statut')?.value;
      case 2:
        return !!this.independantForm.get('revenuAnnuel')?.value;
      case 3:
        // Au moins un besoin doit être sélectionné
        return this.besoinsOptions.some(besoin => 
          this.independantForm.get(`besoin_${besoin.value}`)?.value
        );
      case 4:
        return !!(
          this.independantForm.get('nom')?.value &&
          this.independantForm.get('email')?.value &&
          this.independantForm.get('telephone')?.value &&
          this.independantForm.get('email')?.valid
        );
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    return this.independantForm.valid && this.isFormStepValid();
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

    const statutLabel = this.statutOptions.find(s => s.value === this.independantForm.value.statut)?.label || this.independantForm.value.statut;
    const revenuLabel = this.revenuOptions.find(r => r.value === this.independantForm.value.revenuAnnuel)?.label || this.independantForm.value.revenuAnnuel;

    const selectedBesoins = this.besoinsOptions
      .filter(besoin => this.independantForm.get(`besoin_${besoin.value}`)?.value)
      .map(besoin => besoin.label);

    const descriptionParts = [
      `<h3>Évaluation Indépendant</h3>`,
      `<p><strong>Statut:</strong> ${statutLabel}</p>`,
      `<p><strong>Revenu annuel estimé:</strong> ${revenuLabel}</p>`,
      `<p><strong>Besoins:</strong></p>`,
      `<ul>${selectedBesoins.map(b => `<li>${b}</li>`).join('')}</ul>`,
      `<p><strong>Source:</strong> Formulaire mobile Indépendant</p>`,
    ];

    const leadData = {
      name: this.independantForm.value.nom,
      phone: this.independantForm.value.telephone,
      email_from: this.independantForm.value.email,
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
    this.independantForm.reset();

    // Réinitialiser les checkboxes
    this.besoinsOptions.forEach(besoin => {
      this.independantForm.get(`besoin_${besoin.value}`)?.setValue(false);
    });
  }
}