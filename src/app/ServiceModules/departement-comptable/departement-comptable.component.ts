import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import * as AOS from 'aos';
import { OdooService } from '../../services/odoo.service';
import { DEPT_COMPTA_FORM_CONFIG } from '../../shared/contact-form-layout/contact-form-configs';

@Component({
  selector: 'app-departement-comptable',
  templateUrl: './departement-comptable.component.html',
  styleUrls: ['./departement-comptable.component.css'],
  animations: [
    trigger('slideDown', [
      state('closed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: '1',
        overflow: 'visible'
      })),
      transition('closed <=> open', [
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ]),
    trigger('popupAnimation', [
      state('closed', style({
        opacity: '0',
        transform: 'scale(0.9) translateY(20px)'
      })),
      state('open', style({
        opacity: '1',
        transform: 'scale(1) translateY(0)'
      })),
      transition('closed => open', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('open => closed', [
        animate('200ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class DepartementComptableComponent implements AfterViewInit, OnInit, OnDestroy {
  // Gestion de l'accordéon
  activeAccordionItem: number = 1;

  // Propriétés du formulaire
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  isLoading = false;
  formConfig = DEPT_COMPTA_FORM_CONFIG;
  showAutreSecteur = false;
  showAutreBesoin = false;

  // Popup Simulateur
  isSimulatorPopupOpen = false;
  isFloatingPopupDismissed = false;
  showFloatingPopup = false;
  private floatingPopupTimer: any;
  private simulatorObserver: IntersectionObserver | null = null;

  // Données du formulaire
  formData = {
    // Étape 1: Secteur d'activité
    secteur: '',
    secteur_autre: '',

    // Étape 2: Revenus
    revenus: '',

    // Étape 3: Environnement Odoo
    utilisationOdoo: '',
    conseilOdoo: '',

    // Étape 4: Coordonnées & Disponibilités
    nom: '',
    email: '',
    telephone: '',
    creneauContact: '',
    jourPrefere: '',
    consentementRGPD: false,

    // Étape 5: Besoins
    besoins: [] as string[],
    besoins_autre: ''
  };

  constructor(
    private odooService: OdooService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // Afficher le popup flottant après 3 secondes
    this.floatingPopupTimer = setTimeout(() => {
      if (!this.isSimulatorPopupOpen) {
        this.showFloatingPopup = true;
      }
    }, 3000);

    // Observer pour masquer le popup quand on arrive sur la section simulateur
    this.setupSimulatorObserver();
  }

  ngOnDestroy() {
    // Nettoyer le timer si le composant est détruit
    if (this.floatingPopupTimer) {
      clearTimeout(this.floatingPopupTimer);
    }
    // Nettoyer l'observer
    if (this.simulatorObserver) {
      this.simulatorObserver.disconnect();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  }

  private setupSimulatorObserver(): void {
    // Attendre que le DOM soit prêt
    setTimeout(() => {
      const simulatorSection = document.getElementById('costSimulatorSection');
      if (simulatorSection) {
        this.simulatorObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Masquer le popup quand la section simulateur est visible
                this.showFloatingPopup = false;
              }
            });
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Déclencher quand 10% de la section est visible
          }
        );
        this.simulatorObserver.observe(simulatorSection);
      }
    }, 500);
  }

  // Gestion du changement de secteur
  onSecteurChange(value: string) {
    this.showAutreSecteur = value === 'autre';
    if (value !== 'autre') {
      this.formData.secteur_autre = '';
    }
  }

  // Gestion du changement de besoins
  onBesoinChange(value: string, event: any) {
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

  // Navigation
  onNextStep() {
    if (this.isStepValid && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  onPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Validation de l'étape actuelle
  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.secteur;
      case 2:
        return !!this.formData.revenus;
      case 3:
        return !!this.formData.utilisationOdoo;
      case 4:
        return !!(this.formData.nom && this.formData.email && this.formData.telephone && this.formData.consentementRGPD);
      case 5:
        return this.formData.besoins.length > 0;
      default:
        return false;
    }
  }

  // Validation du formulaire complet
  get isFormValid(): boolean {
    return !!(
      this.formData.secteur &&
      this.formData.revenus &&
      this.formData.utilisationOdoo &&
      this.formData.nom &&
      this.formData.email &&
      this.formData.telephone &&
      this.formData.consentementRGPD &&
      this.formData.besoins.length > 0
    );
  }

  // Soumission
  onSubmit() {
    if (!this.isFormValid) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    this.isLoading = true;

    const descriptionParts = [
      `<h3>Demande d'externalisation de département comptable</h3>`,
      `<p><strong>Secteur d'activité:</strong> ${this.getSecteurLabel()}</p>`,
      this.formData.secteur_autre ? `<p><strong>Précision:</strong> ${this.formData.secteur_autre}</p>` : '',
      `<p><strong>Revenus annuels:</strong> ${this.getRevenusLabel()}</p>`,
      this.formData.utilisationOdoo ? `<p><strong>Utilisation Odoo:</strong> ${this.getOdooLabel()}</p>` : '',
      this.formData.conseilOdoo ? `<p><strong>Conseil Odoo souhaité:</strong> ${this.formData.conseilOdoo === 'oui' ? 'Oui' : 'Non'}</p>` : '',
      this.formData.creneauContact ? `<p><strong>Créneau préféré:</strong> ${this.formData.creneauContact}</p>` : '',
      this.formData.jourPrefere ? `<p><strong>Jour préféré:</strong> ${this.formData.jourPrefere}</p>` : '',
      `<p><strong>Besoins:</strong></p>`,
      `<ul>${this.formData.besoins.map(b => `<li>${this.getBesoinLabel(b)}</li>`).join('')}</ul>`,
      this.formData.besoins_autre ? `<p><strong>Autres besoins:</strong> ${this.formData.besoins_autre}</p>` : '',
    ];

    const fullDescription = descriptionParts.filter(p => p).join('\n');

    const leadData = {
      name: this.formData.nom,
      phone: this.formData.telephone,
      email_from: this.formData.email,
      description: fullDescription,
      lead_type: 'dept_comptable',
    };

    this.odooService.createLead(leadData).subscribe({
      next: () => {
        this.isLoading = false;
        this.formSubmitted = true;
        this.toastr.success('Votre demande a été envoyée avec succès!', 'Succès');
      },
      error: (error) => {
        this.isLoading = false;
        this.toastr.error("Une erreur est survenue lors de l'envoi.", 'Erreur');
        console.error('Erreur:', error);
      },
    });
  }

  // Reset
  onReset() {
    this.formSubmitted = false;
    this.currentStep = 1;
    this.formData = {
      secteur: '',
      secteur_autre: '',
      revenus: '',
      utilisationOdoo: '',
      conseilOdoo: '',
      nom: '',
      email: '',
      telephone: '',
      creneauContact: '',
      jourPrefere: '',
      consentementRGPD: false,
      besoins: [],
      besoins_autre: ''
    };
    this.showAutreSecteur = false;
    this.showAutreBesoin = false;
  }

  // Labels
  private getSecteurLabel(): string {
    const labels: any = {
      'industrie': 'Industrie',
      'services': 'Services (B2B / B2C)',
      'commerce': 'Commerce',
      'autre': 'Autre secteur'
    };
    return labels[this.formData.secteur] || this.formData.secteur;
  }

  private getRevenusLabel(): string {
    const labels: any = {
      'moins-1m': 'Moins de 1M € / an',
      '1m-5m': '1M – 5M € / an',
      '5m-10m': '5M – 10M € / an',
      'plus-10m': 'Plus de 10M € / an'
    };
    return labels[this.formData.revenus] || this.formData.revenus;
  }

  private getOdooLabel(): string {
    const labels: any = {
      'oui': 'Oui',
      'non': 'Non',
      'en-cours': 'Nous sommes en train de l\'implémenter'
    };
    return labels[this.formData.utilisationOdoo] || this.formData.utilisationOdoo;
  }

  private getBesoinLabel(value: string): string {
    const labels: any = {
      'comptabilite': 'Tenue de la comptabilité',
      'declarations-fiscales': 'Déclarations fiscales',
      'conseil-gestion': 'Conseil en gestion financière',
      'optimisation-statut': 'Optimisation du statut',
      'autre': 'Autre besoin'
    };
    return labels[value] || value;
  }

  // Méthodes de navigation existantes
  toggleAccordion(itemNumber: number): void {
    this.activeAccordionItem = this.activeAccordionItem === itemNumber ? 0 : itemNumber;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToContact(): void {
    const contactElement = document.getElementById('contactSection');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Méthodes pour le popup du simulateur
  openSimulatorPopup(): void {
    this.isSimulatorPopupOpen = true;
    this.showFloatingPopup = false; // Masquer le popup flottant pendant la simulation
    document.body.style.overflow = 'hidden';
  }

  closeSimulatorPopup(): void {
    this.isSimulatorPopupOpen = false;
    document.body.style.overflow = '';
  }

  dismissFloatingPopup(event: Event): void {
    event.stopPropagation();
    this.isFloatingPopupDismissed = true;
  }
}
