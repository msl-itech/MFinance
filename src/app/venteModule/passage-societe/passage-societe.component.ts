import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../../services/meta.service';
import { OdooService } from '../../services/odoo.service';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';
import { DiagnosticResult } from '../diagnostic-passage-societe/diagnostic-passage-societe.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-passage-societe',
  templateUrl: './passage-societe.component.html',
  styleUrl: './passage-societe.component.css',
})
export class PassageSocieteComponent implements OnInit, AfterViewInit {
  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: '🧭 Introduction engageante',
    title: 'Êtes-vous prêt à structurer votre activité en société ?',
    description:
      'Vous envisagez de passer en société ? En 2 minutes, faites le point sur vos priorités. Un expert Mfinances vous appellera sous 72h pour un échange gratuit, confidentiel et sans engagement. 🎁 En bonus : un mini-diagnostic personnalisé pour éclairer votre décision.',
    phoneButton: 'Appelez maintenant',
    contactButton: 'Nous contacter',

    // En-tête du formulaire
    formTitle: 'Diagnostic Passage en Société',
    formDescription: 'Évaluez votre situation en quelques étapes',
    badge: 'Gratuit & Confidentiel',

    // Boutons et messages
    submitButton: 'Recevoir mon diagnostic',
    successTitle: 'Merci pour vos réponses !',
    successMessage:
      'Vous allez recevoir un appel personnalisé pour répondre à vos questions et faire le point sur votre situation.',
    successNote:
      "À la clé : un plan d'action clair pour structurer votre activité sereinement.",
    resetButton: 'Nouveau diagnostic',
  };

  // État du formulaire
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  isLoading = false;

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
    besoins_autre: '',
  };

  // Flags pour les champs "autre"
  showAutreSituation = false;
  showAutreMotivation = false;
  showAutreBesoin = false;

  // Diagnostic result
  diagnosticResult: DiagnosticResult | null = null;

  constructor(
    private metaService: MetaService,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Passage en Société
    this.metaService.setPassageEnSocietePageMeta();
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Charger données diagnostic si disponibles
    this.loadDiagnosticFromLocalStorage();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Gestion de la navigation du formulaire
  onNextStep(): void {
    if (this.isStepValid() && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  onPreviousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit(): void {
    if (!this.isFormValid()) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    this.isLoading = true;

    // Assemblage de la description complète
    const descriptionParts = [
      `<h3>Diagnostic Passage en Société</h3>`,

      // Ajouter résultat diagnostic si existe
      this.diagnosticResult ? this.generateDiagnosticSummaryHTML() : '',

      `<p><strong>Situation actuelle:</strong> ${this.getSituationLabel()}</p>`,
      this.formData.situation_autre
        ? `<p><strong>Précision situation:</strong> ${this.formData.situation_autre}</p>`
        : '',
      `<p><strong>Motivation principale:</strong> ${this.getMotivationLabel()}</p>`,
      this.formData.motivation_autre
        ? `<p><strong>Précision motivation:</strong> ${this.formData.motivation_autre}</p>`
        : '',
      `<p><strong>Niveau de connaissance:</strong> ${this.getConnaissanceLabel()}</p>`,
      `<p><strong>Besoins prioritaires:</strong></p>`,
      `<ul>${this.getSelectedBesoins()
        .map((b) => `<li>${b}</li>`)
        .join('')}</ul>`,
    ];

    const fullDescription = descriptionParts.filter((p) => p).join('\n');

    const leadData = {
      name: this.formData.nom,
      phone: this.formData.telephone,
      email_from: this.formData.email,
      description: fullDescription,
      lead_type: 'passage_societe',
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
    this.currentStep = 1;
    this.formSubmitted = false;
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
      besoins_autre: '',
    };
    this.showAutreSituation = false;
    this.showAutreMotivation = false;
    this.showAutreBesoin = false;
  }

  // Validation des étapes
  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return (
          !!this.formData.situation &&
          (this.formData.situation !== 'autre' ||
            !!this.formData.situation_autre)
        );
      case 2:
        return (
          !!this.formData.motivation &&
          (this.formData.motivation !== 'autre' ||
            !!this.formData.motivation_autre)
        );
      case 3:
        return !!(
          this.formData.nom &&
          this.formData.email &&
          this.formData.telephone
        );
      case 4:
        return !!this.formData.connaissance;
      case 5:
        return this.formData.besoins.length > 0;
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    return this.isStepValid() && this.currentStep === this.totalSteps;
  }

  // Gestionnaires de changement pour les champs
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

  // Méthodes utilitaires pour les labels
  private getSituationLabel(): string {
    const situations = {
      independant: 'Indépendant en personne physique',
      salarie: 'Salarié avec un projet',
      entreprise: 'Entreprise existante',
      autre: 'Autre',
    };
    return (
      situations[this.formData.situation as keyof typeof situations] ||
      this.formData.situation
    );
  }

  private getMotivationLabel(): string {
    const motivations = {
      fiscalite: 'Optimisation fiscale',
      credibilite: 'Crédibilité professionnelle',
      protection: 'Protection du patrimoine',
      croissance: "Croissance de l'activité",
      autre: 'Autre',
    };
    return (
      motivations[this.formData.motivation as keyof typeof motivations] ||
      this.formData.motivation
    );
  }

  private getConnaissanceLabel(): string {
    const niveaux = {
      aucune: 'Aucune connaissance',
      notions: 'Quelques notions',
      bonne: 'Bonne connaissance',
      experte: 'Connaissance experte',
    };
    return (
      niveaux[this.formData.connaissance as keyof typeof niveaux] ||
      this.formData.connaissance
    );
  }

  private getSelectedBesoins(): string[] {
    const besoinsLabels = {
      'choisir-forme': 'Choisir la forme juridique',
      'comprendre-fiscalite': 'Comprendre la fiscalité',
      'organiser-comptabilite': 'Organiser la comptabilité',
      'planifier-transition': 'Planifier la transition',
      autre: this.formData.besoins_autre || 'Autre',
    };

    return this.formData.besoins.map(
      (besoin) => besoinsLabels[besoin as keyof typeof besoinsLabels] || besoin
    );
  }

  // Méthodes pour le diagnostic
  onDiagnosticComplete(result: DiagnosticResult): void {
    this.diagnosticResult = result;

    // Stocker dans localStorage pour pré-remplissage du formulaire
    this.storeDiagnosticInLocalStorage(result);

    // Analytics tracking (optionnel)
    // gtag('event', 'diagnostic_completed', { score: result.score, level: result.level });
  }

  private loadDiagnosticFromLocalStorage(): void {
    const stored = localStorage.getItem('mfinances_diagnostic_passage_societe');
    if (!stored) return;

    try {
      const data = JSON.parse(stored);
      const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);

      // Vérifier l'expiration
      if (data.timestamp < thirtyDaysAgo) {
        localStorage.removeItem('mfinances_diagnostic_passage_societe');
        return;
      }

      // Charger les données si elles existent
      if (data.email) this.formData.email = data.email;
      if (data.nom) this.formData.nom = data.nom;

      // Reconstruire le résultat du diagnostic
      if (data.score && data.level && data.answers) {
        this.diagnosticResult = {
          score: data.score,
          maxScore: 20,
          level: data.level,
          title: this.getDiagnosticTitle(data.level),
          description: '',
          recommendation: '',
          ctaText: '',
          ctaAction: data.level === 'high' ? 'contact' : (data.level === 'medium' ? 'analyze' : 'wait'),
          answers: data.answers
        };
      }
    } catch (error) {
      console.error('Erreur lors du chargement du localStorage:', error);
    }
  }

  private storeDiagnosticInLocalStorage(result: DiagnosticResult): void {
    const data = {
      timestamp: Date.now(),
      score: result.score,
      level: result.level,
      answers: result.answers,
      email: this.formData.email,
      nom: this.formData.nom
    };

    localStorage.setItem('mfinances_diagnostic_passage_societe', JSON.stringify(data));
  }

  private generateDiagnosticSummaryHTML(): string {
    if (!this.diagnosticResult) return '';

    const levelLabels = {
      low: '🟢 Pas prioritaire',
      medium: '🟡 Zone charnière',
      high: '🔴 Très probable rentable'
    };

    return `
      <div style="background: #f0f9ff; padding: 15px; border-left: 4px solid #3b82f6; margin-bottom: 20px;">
        <h4 style="color: #1e40af; margin: 0 0 10px 0;">📊 Résultat Diagnostic Préalable</h4>
        <p><strong>Score:</strong> ${this.diagnosticResult.score}/20 - ${levelLabels[this.diagnosticResult.level]}</p>
        <ul style="margin: 10px 0 0 0; padding-left: 20px;">
          <li><strong>Revenus:</strong> ${this.getRevenusLabelFromValue(this.diagnosticResult.answers.revenus)}</li>
          <li><strong>Stabilité:</strong> ${this.getStabiliteLabelFromValue(this.diagnosticResult.answers.stabilite)}</li>
          <li><strong>Objectif:</strong> ${this.getObjectifLabelFromValue(this.diagnosticResult.answers.objectif)}</li>
          <li><strong>Ressenti fiscal:</strong> ${this.getResentiLabelFromValue(this.diagnosticResult.answers.ressenti)}</li>
        </ul>
      </div>
    `;
  }

  private getRevenusLabelFromValue(value: string): string {
    const labels: { [key: string]: string } = {
      'moins-40k': 'Moins de 40 000€',
      '40-70k': '40 000€ - 70 000€',
      '70-110k': '70 000€ - 110 000€',
      'plus-110k': 'Plus de 110 000€'
    };
    return labels[value] || value;
  }

  private getStabiliteLabelFromValue(value: string): string {
    const labels: { [key: string]: string } = {
      'demarrage': 'Moins de 6 mois',
      '6-12mois': '6 à 12 mois',
      '1-2ans': '1 à 2 ans',
      'plus-2ans': 'Plus de 2 ans'
    };
    return labels[value] || value;
  }

  private getObjectifLabelFromValue(value: string): string {
    const labels: { [key: string]: string } = {
      'optimiser-fiscal': 'Optimiser ma fiscalité',
      'investir': 'Investir et développer',
      'patrimoine': 'Protéger mon patrimoine',
      'proteger': 'Séparer pro et perso'
    };
    return labels[value] || value;
  }

  private getResentiLabelFromValue(value: string): string {
    const labels: { [key: string]: string } = {
      'pas-clair': 'Je ne sais pas trop',
      'ca-va': 'Ça va pour l\'instant',
      'paie-trop': 'Je paie beaucoup d\'impôts',
      'besoin-strategie': 'Je veux une vraie stratégie'
    };
    return labels[value] || value;
  }

  private getDiagnosticTitle(level: 'low' | 'medium' | 'high'): string {
    const titles = {
      low: 'Pas prioritaire (pour l\'instant)',
      medium: 'À analyser (zone charnière)',
      high: 'Très probable que ce soit rentable'
    };
    return titles[level];
  }
}
