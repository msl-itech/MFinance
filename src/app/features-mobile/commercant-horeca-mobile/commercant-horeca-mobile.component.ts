import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { SidebarMobileComponent } from '../sidebar-mobile/sidebar-mobile.component';
import { ToastrService } from 'ngx-toastr';
import { OdooService } from '../../services/odoo.service';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
  priority?: boolean;
}

interface CaseSlide {
  icon: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
}

interface FormStep {
  label: string;
}

interface EtablissementType {
  value: string;
  label: string;
  icon: string;
}

interface ChiffreAffaire {
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
  selector: 'app-commercant-horeca-mobile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SidebarMobileComponent],
  templateUrl: './commercant-horeca-mobile.component.html',
  styleUrls: ['./commercant-horeca-mobile.component.scss'],
})
export class CommercantHorecaMobileComponent implements OnInit, OnDestroy {

  // État du composant
  showFullIntro = false;
  formSubmitted = false;
  currentFormStep = 1;
  totalFormSteps = 4;

  // État du carrousel études de cas
  currentCaseSlide = 0;

  // Calculateur d'économies
  chargesMensuelles = 0;
  economiesEstimees = 0;

  // Formulaire
  horecaForm: FormGroup;

  // Data pour les carrousels
  caseSlides: CaseSlide[] = [
    {
      icon: '🍽️',
      title: 'Restaurant HORECA',
      problem: 'Stockage excessif entraînant des coûts élevés et des invendus fréquents',
      solution: 'Adoption d\'une gestion en flux tendu pour ajuster les commandes aux besoins réels',
      result: 'Réduction de 30% des coûts de stockage et amélioration significative de la trésorerie'
    },
    {
      icon: '👕',
      title: 'Magasin de vêtements',
      problem: 'Accumulation de stocks sur des produits à faible rotation',
      solution: 'Analyse des ventes pour prioriser les articles populaires et lancement de promotions sur les stocks dormants',
      result: 'Augmentation de 15% du taux de rotation des stocks et 20% de liquidités disponibles supplémentaires'
    }
  ];

  // Étapes du formulaire
  formSteps: FormStep[] = [
    { label: 'Type établissement' },
    { label: 'Chiffre affaires' },
    { label: 'Besoins' },
    { label: 'Contact' }
  ];

  // Options pour le formulaire
  etablissementTypes: EtablissementType[] = [
    { value: 'restaurant', label: 'Restaurant', icon: '🍽️' },
    { value: 'cafe-bar', label: 'Café / Bar', icon: '☕' },
    { value: 'hotel', label: 'Hôtel', icon: '🏨' },
    { value: 'commerce-detail', label: 'Commerce de détail', icon: '🏪' },
    { value: 'commerce-gros', label: 'Commerce de gros', icon: '📦' },
    { value: 'autre', label: 'Autre', icon: '📋' }
  ];

  chiffreAffaires: ChiffreAffaire[] = [
    { value: 'moins-100k', label: 'Moins de 100K €/an', icon: '🌱' },
    { value: '100k-500k', label: '100K - 500K €/an', icon: '📈' },
    { value: '500k-1m', label: '500K - 1M €/an', icon: '🏢' },
    { value: 'plus-1m', label: 'Plus de 1M €/an', icon: '👑' }
  ];

  besoinsOptions: BesoinOption[] = [
    { value: 'comptabilite', label: 'Tenue de comptabilité', icon: '📊' },
    { value: 'declarations-fiscales', label: 'Déclarations fiscales', icon: '📋' },
    { value: 'gestion-tva', label: 'Gestion TVA complexe', icon: '💳' },
    { value: 'analyse-couts', label: 'Analyse des coûts', icon: '📈' },
    { value: 'optimisation-stocks', label: 'Optimisation stocks', icon: '📦' },
    { value: 'integration-caisse', label: 'Intégration caisse', icon: '💻' }
  ];

  // FAQ Data
  faqs: FaqItem[] = [
    {
      question: "Comment optimiser la gestion TVA dans l'HORECA ?",
      answer: `<p>L'HORECA a des taux de TVA différents selon les services :</p>
               <ul>
                <li><strong>6% :</strong> Vente à emporter, boissons non alcoolisées</li>
                <li><strong>12% :</strong> Restauration sur place</li>
                <li><strong>21% :</strong> Boissons alcoolisées, hébergement</li>
               </ul>
               <p>Nous vous aidons à optimiser ces déclarations et éviter les erreurs coûteuses.</p>`,
      isOpen: true,
      priority: true
    },
    {
      question: "Quels sont les principaux coûts à surveiller dans le commerce ?",
      answer: `<ul>
                <li><strong>Coût des marchandises vendues (CMV) :</strong> 30-40% du CA</li>
                <li><strong>Charges de personnel :</strong> 25-35% du CA</li>
                <li><strong>Loyer et charges :</strong> 8-15% du CA</li>
                <li><strong>Marketing et communication :</strong> 3-8% du CA</li>
               </ul>
               <p>Nous vous aidons à analyser ces ratios et identifier les optimisations.</p>`,
      isOpen: false
    },
    {
      question: "Comment améliorer la rotation des stocks ?",
      answer: `<p>Plusieurs stratégies efficaces :</p>
               <ul>
                <li><strong>Analyse ABC :</strong> Concentrez-vous sur les 20% de produits qui génèrent 80% du CA</li>
                <li><strong>Promotions ciblées :</strong> Écoulez les stocks à faible rotation</li>
                <li><strong>Commandes fréquentes :</strong> Réduisez les volumes stockés</li>
                <li><strong>Saisonnalité :</strong> Adaptez vos achats aux périodes</li>
               </ul>`,
      isOpen: false
    },
    {
      question: "Quels outils digitaux recommandez-vous ?",
      answer: `<ul>
                <li><strong>Systèmes de caisse connectés :</strong> Synchronisation automatique avec la comptabilité</li>
                <li><strong>Logiciels de gestion des stocks :</strong> Suivi temps réel et alertes</li>
                <li><strong>Applications de livraison :</strong> Diversification des canaux de vente</li>
                <li><strong>Outils de fidélisation :</strong> Programmes de points et promotions personnalisées</li>
               </ul>`,
      isOpen: false
    },
    {
      question: "Comment MFINANCES peut-il m'aider concrètement ?",
      answer: `<ul>
                <li><strong>Comptabilité spécialisée :</strong> Gestion des spécificités HORECA/Commerce</li>
                <li><strong>Analyse des performances :</strong> Tableaux de bord personnalisés</li>
                <li><strong>Optimisation fiscale :</strong> TVA, charges sociales, déductions</li>
                <li><strong>Accompagnement digital :</strong> Intégration d'outils modernes</li>
                <li><strong>Conseil stratégique :</strong> Amélioration des marges et de la rentabilité</li>
               </ul>`,
      isOpen: false
    }
  ];

  constructor(
    private fb: FormBuilder,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {
    this.horecaForm = this.createForm();
  }

  ngOnInit(): void {
    // Initialisation du composant
  }

  ngOnDestroy(): void {
    // Nettoyage des ressources
  }

  private createForm(): FormGroup {
    const formConfig: any = {
      typeEtablissement: ['', Validators.required],
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

  // Calculateur d'économies
  calculateEconomies(): void {
    if (this.chargesMensuelles > 0) {
      // Estimation d'optimisation de 15-25% en moyenne pour HORECA/Commerce
      this.economiesEstimees = Math.round(this.chargesMensuelles * 0.20);
    } else {
      this.economiesEstimees = 0;
    }
  }

  // Gestion du carrousel études de cas
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
        return !!this.horecaForm.get('typeEtablissement')?.value;
      case 2:
        return !!this.horecaForm.get('chiffreAffaires')?.value;
      case 3:
        // Au moins un besoin sélectionné
        return this.besoinsOptions.some(besoin => 
          this.horecaForm.get(`besoin_${besoin.value}`)?.value
        );
      case 4:
        return !!(
          this.horecaForm.get('nom')?.value &&
          this.horecaForm.get('email')?.value &&
          this.horecaForm.get('telephone')?.value &&
          this.horecaForm.get('email')?.valid
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
    const typeEtablissementLabel = this.etablissementTypes.find(e => e.value === this.horecaForm.value.typeEtablissement)?.label || this.horecaForm.value.typeEtablissement;
    const chiffreAffairesLabel = this.chiffreAffaires.find(c => c.value === this.horecaForm.value.chiffreAffaires)?.label || this.horecaForm.value.chiffreAffaires;

    // Get selected besoins
    const selectedBesoins = this.besoinsOptions
      .filter(besoin => this.horecaForm.get(`besoin_${besoin.value}`)?.value)
      .map(besoin => besoin.label);

    const descriptionParts = [
      `<h3>Évaluation Commerçant / HORECA</h3>`,
      `<p><strong>Type d'établissement:</strong> ${typeEtablissementLabel}</p>`,
      `<p><strong>Chiffre d'affaires:</strong> ${chiffreAffairesLabel}</p>`,
      `<p><strong>Besoins:</strong></p>`,
      `<ul>${selectedBesoins.map(b => `<li>${b}</li>`).join('')}</ul>`,
      `<p><strong>Source:</strong> Formulaire mobile commercant-horeca</p>`,
    ];

    const leadData = {
      name: this.horecaForm.value.nom,
      phone: this.horecaForm.value.telephone,
      email_from: this.horecaForm.value.email,
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
    this.horecaForm.reset();
  }

  // Méthodes de contact et services
  openServiceContact(serviceType: string): void {
    console.log('Contact pour service:', serviceType);
    this.scrollToContact();
  }

  callNow(): void {
    window.location.href = 'tel:+3225420432';
  }

  emailNow(): void {
    window.location.href = 'mailto:info@mfinances.be?subject=Demande d\'information - Commerce & HORECA';
  }

  scheduleAppointment(): void {
     const calendlyUrl = 'https://calendly.com/mfinances/rdv-client-en-teleconference';
    window.open(calendlyUrl, '_blank');
  }

  openHorecaContact(): void {
    const calendlyUrl = 'https://calendly.com/mfinances/rdv-client-en-teleconference';
    window.open(calendlyUrl, '_blank');
  }

  openMaps(): void {
    window.open('https://maps.google.com/?q=MFINANCES+Brussels', '_blank');
  }
}
