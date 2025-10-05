import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../../services/meta.service';
import { OdooService } from '../../services/odoo.service';
import { DeviceService } from '../../core/device.service';
import { SALARIE_INDEPENDANT_FORM_CONFIG } from '../../shared/contact-form-layout/contact-form-configs';
import * as AOS from 'aos';

@Component({
  selector: 'app-salarie-independant',
  templateUrl: './salarie-independant.component.html',
  styleUrl: './salarie-independant.component.css',
})
export class SalarieIndependantComponent implements OnInit, AfterViewInit {
  formConfig = SALARIE_INDEPENDANT_FORM_CONFIG;
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  isLoading = false;
  shouldUseMobileVersion: boolean;

  // Variables pour les inputs conditionnels
  showAutreProfil = false;
  showAutreMotivation = false;
  showAutreBesoin = false;

  // Données du formulaire
  formData = {
    profil: '',
    profil_autre: '',
    motivation: '',
    motivation_autre: '',
    nom: '',
    email: '',
    telephone: '',
    connaissance: '',
    besoins: [] as string[],
    besoins_autre: '',
  };

  constructor(
    private metaService: MetaService,
    private odooService: OdooService,
    private toastr: ToastrService,
    private deviceService: DeviceService
  ) {
    this.shouldUseMobileVersion = this.deviceService.shouldUseMobileVersion();
  }

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Salarié Indépendant
    this.metaService.setSalarieIndependantPageMeta();
    window.scrollTo({ top: 0, behavior: 'instant' });
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

  onProfilChange(value: string): void {
    this.formData.profil = value;
    this.showAutreProfil = value === 'autre';
    if (!this.showAutreProfil) {
      this.formData.profil_autre = '';
    }
  }

  onMotivationChange(value: string): void {
    this.formData.motivation = value;
    this.showAutreMotivation = value === 'autre';
    if (!this.showAutreMotivation) {
      this.formData.motivation_autre = '';
    }
  }

  onBesoinChange(value: string, event: Event): void {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;

    if (checked) {
      if (!this.formData.besoins.includes(value)) {
        this.formData.besoins.push(value);
      }
    } else {
      this.formData.besoins = this.formData.besoins.filter((b) => b !== value);
    }

    this.showAutreBesoin = this.formData.besoins.includes('autre');
    if (!this.showAutreBesoin) {
      this.formData.besoins_autre = '';
    }
  }

  onNextStep(): void {
    if (this.currentStep < this.totalSteps && this.isStepValid) {
      this.currentStep++;
    }
  }

  onPreviousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
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
      `<h3>Transition Salarié vers Indépendant</h3>`,
      `<p><strong>Profil actuel:</strong> ${this.getProfilLabel()}</p>`,
      this.formData.profil_autre
        ? `<p><strong>Précision profil:</strong> ${this.formData.profil_autre}</p>`
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
      lead_type: 'salarie_independant',
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
  private getProfilLabel(): string {
    const profils = {
      employe: 'Employé',
      cadre: 'Cadre',
      fonctionnaire: 'Fonctionnaire',
      liberal: 'Professionnel libéral',
      autre: 'Autre',
    };
    return (
      profils[this.formData.profil as keyof typeof profils] ||
      this.formData.profil
    );
  }

  private getMotivationLabel(): string {
    const motivations = {
      liberte: 'Plus de liberté',
      revenus: 'Augmenter mes revenus',
      passion: 'Suivre ma passion',
      opportunite: 'Saisir une opportunité',
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
      statut: 'Choisir le bon statut',
      demarches: 'Comprendre les démarches',
      fiscalite: 'Maîtriser la fiscalité',
      comptabilite: 'Organiser la comptabilité',
      'protection-sociale': 'Protection sociale',
      autre: this.formData.besoins_autre || 'Autre',
    };

    return this.formData.besoins.map(
      (besoin) => besoinsLabels[besoin as keyof typeof besoinsLabels] || besoin
    );
  }

  onReset(): void {
    this.formSubmitted = false;
    this.currentStep = 1;
    this.formData = {
      profil: '',
      profil_autre: '',
      motivation: '',
      motivation_autre: '',
      nom: '',
      email: '',
      telephone: '',
      connaissance: '',
      besoins: [],
      besoins_autre: '',
    };
    this.showAutreProfil = false;
    this.showAutreMotivation = false;
    this.showAutreBesoin = false;
  }

  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return (
          this.formData.profil !== '' &&
          (this.formData.profil !== 'autre' ||
            this.formData.profil_autre.trim() !== '')
        );
      case 2:
        return (
          this.formData.motivation !== '' &&
          (this.formData.motivation !== 'autre' ||
            this.formData.motivation_autre.trim() !== '')
        );
      case 3:
        return (
          this.formData.nom.trim() !== '' &&
          this.formData.email.trim() !== '' &&
          this.formData.telephone.trim() !== ''
        );
      case 4:
        return this.formData.connaissance !== '';
      case 5:
        return (
          this.formData.besoins.length > 0 &&
          (!this.formData.besoins.includes('autre') ||
            this.formData.besoins_autre.trim() !== '')
        );
      default:
        return false;
    }
  }

  get isFormValid(): boolean {
    return this.currentStep === this.totalSteps && this.isStepValid;
  }
}
