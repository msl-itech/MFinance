import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OdooService } from '../services/odoo.service';

interface FormData {
  situation: string;
  situationAutre?: string;
  nom: string;
  email: string;
  telephone: string;
  creneauHoraire: string[];
  jourPrefere?: string;
  sujetsImportants: string[];
}

@Component({
  selector: 'app-zone-contact-mobile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './zone-contact-mobile.component.html',
  styleUrls: ['./zone-contact-mobile.component.css'],
})
export class ZoneContactMobileComponent {
  currentStep: number = 1;
  formSubmitted: boolean = false;

  formData: FormData = {
    situation: '',
    situationAutre: '',
    nom: '',
    email: '',
    telephone: '',
    creneauHoraire: [],
    jourPrefere: '',
    sujetsImportants: [],
  };

  situationOptions = [
    {
      value: 'particulier_impot',
      icon: '<i class="fas fa-user"></i>',
      title: "Particulier - Déclaration d'impôt",
    },
    {
      value: 'devenir_independant',
      icon: '<i class="fas fa-rocket"></i>',
      title: 'Devenir indépendant',
    },
    {
      value: 'independant_actuel',
      icon: '<i class="fas fa-briefcase"></i>',
      title: 'Indépendant en personne physique',
    },
    {
      value: 'creation_societe',
      icon: '<i class="fas fa-building"></i>',
      title: 'Création de société',
    },
    {
      value: 'societe_active',
      icon: '<i class="fas fa-check-circle"></i>',
      title: 'Société active',
    },
    {
      value: 'autre',
      icon: '<i class="fas fa-comment"></i>',
      title: 'Autre',
    },
  ];

  creneauOptions = [
    { value: '9h-12h', label: 'Matin (9h-12h)' },
    { value: '12h-15h', label: 'Midi (12h-15h)' },
    { value: '15h-18h', label: 'Après-midi (15h-18h)' },
  ];

  sujetsOptions = [
    {
      category: '🧑‍💼 Statut & Projet',
      items: [
        { value: 'salarie_independant', label: 'Passer salarié → indépendant' },
        { value: 'creer_societe', label: 'Créer une société' },
      ],
    },
    {
      category: '💸 Finances',
      items: [
        { value: 'optimiser_remuneration', label: 'Optimiser rémunération' },
        { value: 'compte_courant', label: 'Compte courant associé' },
        { value: 'tresorerie', label: 'Améliorer trésorerie' },
      ],
    },
    {
      category: '📊 Gestion',
      items: [
        { value: 'kpi_decisions', label: 'Décisions & KPI financiers' },
        { value: 'anticiper_fiscalite', label: 'Anticiper fiscalité' },
      ],
    },
    {
      category: '📁 Administratif',
      items: [
        { value: 'controle_fiscal', label: 'Contrôle fiscal' },
        { value: 'comptabilite_declarations', label: 'Comptabilité à jour' },
        { value: 'gestion_administrative', label: 'Réorganiser admin' },
      ],
    },
  ];

  constructor(
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.formData.situation !== '' &&
          (this.formData.situation !== 'autre' || (this.formData.situationAutre?.trim() || '') !== '');
      case 2:
        return this.formData.nom.trim() !== '' &&
          this.formData.email.trim() !== '' &&
          this.formData.telephone.trim() !== '';
      case 3:
        return this.formData.creneauHoraire.length > 0;
      case 4:
        return this.formData.sujetsImportants.length > 0 &&
          this.formData.sujetsImportants.length <= 2;
      default:
        return false;
    }
  }

  get isFormValid(): boolean {
    return this.currentStep === 4 && this.isStepValid;
  }

  nextStep(): void {
    if (this.isStepValid && this.currentStep < 4) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSituationChange(value: string): void {
    this.formData.situation = value;
    if (value !== 'autre') {
      this.formData.situationAutre = '';
    }
  }

  onCreneauChange(creneau: string, checked: boolean): void {
    if (checked) {
      if (!this.formData.creneauHoraire.includes(creneau)) {
        this.formData.creneauHoraire.push(creneau);
      }
    } else {
      this.formData.creneauHoraire = this.formData.creneauHoraire.filter(c => c !== creneau);
    }
  }

  onSujetChange(sujet: string, checked: boolean): void {
    if (checked) {
      if (this.formData.sujetsImportants.length < 2 && !this.formData.sujetsImportants.includes(sujet)) {
        this.formData.sujetsImportants.push(sujet);
      }
    } else {
      this.formData.sujetsImportants = this.formData.sujetsImportants.filter(s => s !== sujet);
    }
  }

  onSubmit(): void {
    if (!this.isFormValid) {
      this.toastr.error('Veuillez remplir tous les champs requis', 'Erreur');
      return;
    }

    const descriptionParts = [
      `<h3>Informations du contact</h3>`,
      `<p><strong>Situation:</strong> ${this.getSituationLabel()}</p>`,
      this.formData.situationAutre ? `<p><strong>Précision:</strong> ${this.formData.situationAutre}</p>` : '',
      `<p><strong>Créneaux:</strong> ${this.formData.creneauHoraire.join(', ')}</p>`,
      this.formData.jourPrefere ? `<p><strong>Jour préféré:</strong> ${this.formData.jourPrefere}</p>` : '',
      `<p><strong>Sujets prioritaires:</strong></p>`,
      `<ul>${this.formData.sujetsImportants.map(s => `<li>${this.getSujetLabel(s)}</li>`).join('')}</ul>`,
    ];

    const leadData = {
      name: this.formData.nom,
      phone: this.formData.telephone,
      email_from: this.formData.email,
      description: descriptionParts.filter(p => p).join('\n'),
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
    this.formSubmitted = false;
    this.currentStep = 1;
    this.formData = {
      situation: '',
      situationAutre: '',
      nom: '',
      email: '',
      telephone: '',
      creneauHoraire: [],
      jourPrefere: '',
      sujetsImportants: [],
    };
  }

  private getSituationLabel(): string {
    const situation = this.situationOptions.find(s => s.value === this.formData.situation);
    return situation ? situation.title : this.formData.situation;
  }

  private getSujetLabel(value: string): string {
    for (const category of this.sujetsOptions) {
      const sujet = category.items.find(s => s.value === value);
      if (sujet) return sujet.label;
    }
    return value;
  }
}
