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

interface FormStep {
  label: string;
}

interface Profession {
  value: string;
  label: string;
  icon: string;
}

interface Revenu {
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
  selector: 'app-professionnel-sante-mobile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SidebarMobileComponent],
  templateUrl: './professionnel-sante-mobile.component.html',
  styleUrls: ['./professionnel-sante-mobile.component.scss'],
})
export class ProfessionnelSanteMobileComponent implements OnInit, OnDestroy {

  // État du composant
  showFullIntro = false;
  formSubmitted = false;
  currentFormStep = 1;
  totalFormSteps = 4;

  // États des sections accordéons
  openProfils: { [key: string]: boolean } = {
    centres: false,
    associations: false,
    independants: false,
    mixte: false
  };

  openServices: { [key: string]: boolean } = {
    developper: false,
    structurer: false,
    avenir: false,
    gestion: false
  };

  // Formulaire
  santeForm: FormGroup;

  // Étapes du formulaire
  formSteps: FormStep[] = [
    { label: 'Profession' },
    { label: 'Revenus' },
    { label: 'Besoins' },
    { label: 'Contact' }
  ];

  // Options pour le formulaire
  professions: Profession[] = [
    { value: 'medecin-generaliste', label: 'Médecin généraliste', icon: '👨‍⚕️' },
    { value: 'medecin-specialiste', label: 'Médecin spécialiste', icon: '🩺' },
    { value: 'dentiste', label: 'Dentiste', icon: '🦷' },
    { value: 'kinesitherapeute', label: 'Kinésithérapeute', icon: '🤲' },
    { value: 'infirmier', label: 'Infirmier(ère)', icon: '👩‍⚕️' },
    { value: 'veterinaire', label: 'Vétérinaire', icon: '🐕' },
    { value: 'autre', label: 'Autre profession', icon: '➕' }
  ];

  revenus: Revenu[] = [
    { value: 'moins-50k', label: 'Moins de 50K €/an', icon: '🌱' },
    { value: '50k-100k', label: '50K - 100K €/an', icon: '📈' },
    { value: '100k-200k', label: '100K - 200K €/an', icon: '🏢' },
    { value: 'plus-200k', label: 'Plus de 200K €/an', icon: '👑' }
  ];

  besoinsOptions: BesoinOption[] = [
    { value: 'comptabilite', label: 'Tenue de comptabilité', icon: '📊' },
    { value: 'declarations-fiscales', label: 'Déclarations fiscales', icon: '📋' },
    { value: 'optimisation-statut', label: 'Optimisation du statut', icon: '⚖️' },
    { value: 'gestion-tva', label: 'Gestion TVA mixte', icon: '💳' },
    { value: 'conseil-gestion', label: 'Conseil en gestion', icon: '💡' },
    { value: 'creation-societe', label: 'Création de société', icon: '🏛️' }
  ];

  // FAQ Data
  faqs: FaqItem[] = [
    {
      question: "Comment optimiser ma fiscalité en tant que professionnel de santé ?",
      answer: `<p>Plusieurs stratégies sont disponibles selon votre situation :</p>
               <ul>
                <li><strong>Passage en société :</strong> Optimisation des revenus et charges fiscales</li>
                <li><strong>Management fees :</strong> Déductions sur prestations facturées</li>
                <li><strong>Investissements stratégiques :</strong> Matériel médical, immobilier</li>
                <li><strong>Statut mixte :</strong> Combinaison exploitation + management patrimonial</li>
               </ul>`,
      isOpen: true,
      priority: true
    },
    {
      question: "Comment fonctionne la TVA mixte pour les professions médicales ?",
      answer: `<p>La TVA mixte concerne les professionnels avec des activités soumises et exemptées :</p>
               <ul>
                <li><strong>Activités exemptées :</strong> Soins médicaux de base</li>
                <li><strong>Activités soumises :</strong> Prestations esthétiques, formations, etc.</li>
                <li><strong>Prorata de déduction :</strong> Calculé selon le ratio revenus soumis/total</li>
                <li><strong>Optimisation :</strong> Déduction maximale sur frais spécifiques</li>
               </ul>`,
      isOpen: false
    },
    {
      question: "Quels sont les avantages d'une société de moyens pour médecins ?",
      answer: `<p>La société de moyens permet de mutualiser les coûts :</p>
               <ul>
                <li><strong>Réduction des charges :</strong> Loyers, équipements, abonnements</li>
                <li><strong>Indépendance préservée :</strong> Chaque médecin reste autonome</li>
                <li><strong>Gestion transparente :</strong> Répartition équitable des coûts</li>
                <li><strong>Négociation groupée :</strong> Tarifs préférentiels fournisseurs</li>
               </ul>`,
      isOpen: false
    },
    {
      question: "Comment préparer ma retraite en tant que professionnel de santé ?",
      answer: `<p>Plusieurs dispositifs pour sécuriser votre avenir :</p>
               <ul>
                <li><strong>Constitution de patrimoine :</strong> Immobilier professionnel et privé</li>
                <li><strong>Cession de patientèle :</strong> Valorisation maximale de votre activité</li>
                <li><strong>Épargne fiscalement avantageuse :</strong> Assurance-vie, pension complémentaire</li>
                <li><strong>Optimisation fiscale :</strong> Stratégies de fin de carrière</li>
               </ul>`,
      isOpen: false
    },
    {
      question: "Quand dois-je envisager le passage en société ?",
      answer: `<p>Le passage en société devient intéressant quand :</p>
               <ul>
                <li><strong>Revenus élevés :</strong> Généralement au-dessus de 80-100K€/an</li>
                <li><strong>Projets d'investissement :</strong> Matériel, immobilier, développement</li>
                <li><strong>Optimisation fiscale :</strong> Taux d'imposition societé plus avantageux</li>
                <li><strong>Transmission :</strong> Préparation de la cession ou succession</li>
               </ul>`,
      isOpen: false
    }
  ];

  constructor(private fb: FormBuilder) {
    this.santeForm = this.createForm();
  }

  ngOnInit(): void {
    // Initialisation du composant
  }

  ngOnDestroy(): void {
    // Nettoyage des ressources
  }

  private createForm(): FormGroup {
    const formConfig: any = {
      profession: ['', Validators.required],
      revenus: ['', Validators.required],
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

  // Gestion des accordéons profils
  toggleProfil(profil: string): void {
    this.openProfils[profil] = !this.openProfils[profil];
  }

  // Gestion des accordéons services
  toggleService(service: string): void {
    this.openServices[service] = !this.openServices[service];
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
        return !!this.santeForm.get('profession')?.value;
      case 2:
        return !!this.santeForm.get('revenus')?.value;
      case 3:
        // Au moins un besoin sélectionné
        return this.besoinsOptions.some(besoin => 
          this.santeForm.get(`besoin_${besoin.value}`)?.value
        );
      case 4:
        return !!(
          this.santeForm.get('nom')?.value &&
          this.santeForm.get('email')?.value &&
          this.santeForm.get('telephone')?.value &&
          this.santeForm.get('email')?.valid
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
      console.log('Données formulaire professionnel santé:', this.santeForm.value);
      
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
    this.santeForm.reset();
  }

  private sendFormData(): void {
    // Préparation des données pour l'API
    const selectedBesoins = this.besoinsOptions
      .filter(besoin => this.santeForm.get(`besoin_${besoin.value}`)?.value)
      .map(besoin => besoin.value);

    const formDataToSend = {
      ...this.santeForm.value,
      besoins_list: selectedBesoins,
      source: 'professionnel-sante-mobile',
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
    window.location.href = 'mailto:info@mfinances.be?subject=Demande d\'information - Professionnels de santé';
  }

  scheduleAppointment(): void {
    // Redirection vers le système de prise de RDV
    console.log('Redirection vers prise de RDV');
  }

  openSanteContact(): void {
    this.scrollToContact();
  }

  openMaps(): void {
    window.open('https://maps.google.com/?q=MFINANCES+Brussels', '_blank');
  }
}