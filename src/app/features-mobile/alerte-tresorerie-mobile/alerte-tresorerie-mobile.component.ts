import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { OdooService } from '../../services/odoo.service';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { ContactFormConfig } from '../../shared/contact-form-layout/contact-form-layout.component';

@Component({
  selector: 'app-alerte-tresorerie-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule, FormsModule],
  templateUrl: './alerte-tresorerie-mobile.component.html',
  styleUrls: ['./alerte-tresorerie-mobile.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AlerteTresorerieMobileComponent implements OnInit {

  // Variables pour le formulaire
  currentStep = 1;
  totalSteps = 3;
  formSubmitted = false;
  isLoading = false;

  // Configuration du formulaire
  formConfig: ContactFormConfig = {
    // Texte à gauche
    eyebrow: 'ALERTE TRÉSORERIE',
    title: 'Test de résistance gratuit',
    description: 'Évaluez la capacité de votre trésorerie à résister face à une concurrence agressive.',
    phoneButton: 'Appelez-nous',
    contactButton: 'Contactez-nous',
    
    // En-tête du formulaire
    formTitle: 'Test de résistance trésorerie',
    formDescription: 'En quelques clics, évaluez gratuitement votre capacité à faire face à une concurrence agressive.',
    badge: 'GRATUIT ET SANS ENGAGEMENT',
    
    // Boutons et messages
    submitButton: 'Lancer le test maintenant',
    successTitle: 'Merci pour votre test !',
    successMessage: 'Votre analyse de résistance sera préparée par nos experts.',
    successNote: 'Nous vous contactons sous 72h avec des stratégies personnalisées pour résister à la concurrence.',
    resetButton: 'Refaire le test'
  };

  // Données du formulaire
  formData = {
    perdu_clients: '',
    reaction_concurrence: '',
    nom: '',
    email: '',
    telephone: ''
  };

  constructor(
    private router: Router,
    private odooService: OdooService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // Initialisation du composant
  }

  // Méthodes de navigation
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Méthodes pour le formulaire
  get isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.formData.perdu_clients;
      case 2:
        return !!this.formData.reaction_concurrence;
      case 3:
        return !!this.formData.nom && !!this.formData.email && !!this.formData.telephone;
      default:
        return false;
    }
  }

  get isFormValid(): boolean {
    return this.currentStep === this.totalSteps && this.isStepValid;
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
      const perduClientsLabels: { [key: string]: string } = {
        'oui-clairement': 'Oui, clairement (impact visible sur le CA)',
        'un-peu-resiste': 'Un peu, mais je résiste',
        'non-connaissance': 'Non, pas à ma connaissance',
        'ne-sais-pas': 'Je ne sais pas'
      };

      const reactionLabels: { [key: string]: string } = {
        'baisse-prix': 'J\'ai baissé mes prix',
        'reduit-depenses': 'J\'ai réduit mes dépenses',
        'attendu-voir': 'J\'ai attendu de voir',
        'ameliore-communication': 'J\'ai amélioré ma communication'
      };

      const perduClientsLabel = perduClientsLabels[this.formData.perdu_clients] || this.formData.perdu_clients;
      const reactionLabel = reactionLabels[this.formData.reaction_concurrence] || this.formData.reaction_concurrence;

      const descriptionParts = [
        `<h3>Test de Résistance Trésorerie</h3>`,
        `<p><strong>Perdu des clients récemment:</strong> ${perduClientsLabel}</p>`,
        `<p><strong>Réaction face à la concurrence:</strong> ${reactionLabel}</p>`,
        `<p><strong>Source:</strong> Formulaire mobile Alerte-Trésorerie</p>`,
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
    this.formData = {
      perdu_clients: '',
      reaction_concurrence: '',
      nom: '',
      email: '',
      telephone: ''
    };
  }
}