import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fromEvent, Subscription, throttleTime } from 'rxjs';
import { MetaService } from '../services/meta.service';
import { ASBL_FORM_CONFIG } from '../shared/contact-form-layout/contact-form-configs';

@Component({
  selector: 'app-absl',
  templateUrl: './absl.component.html',
  styleUrl: './absl.component.css',
})
export class AbslComponent implements OnInit {
  @ViewChild('serviceSection') serviceSection!: ElementRef;
  @ViewChild('serviceImage') serviceImage!: ElementRef;

  private scrollSubscription!: Subscription;
  private sectionTop: number = 0;
  private sectionHeight: number = 0;
  private imageHeight: number = 0;
  private maxTranslateY: number = 0;

  // Propriétés du formulaire
  asblForm: FormGroup = new FormGroup({});
  currentStep = 1;
  totalSteps = 5;
  formSubmitted = false;
  formConfig = ASBL_FORM_CONFIG;

  // Données pour les options du formulaire
  asblTypes = [
    { value: 'culture', label: 'Culture', icon: 'fas fa-palette' },
    { value: 'sport', label: 'Sport', icon: 'fas fa-running' },
    { value: 'education', label: 'Éducation', icon: 'fas fa-graduation-cap' },
    { value: 'sante', label: 'Santé', icon: 'fas fa-heartbeat' },
    { value: 'social', label: 'Social', icon: 'fas fa-hands-helping' },
    { value: 'autre', label: 'Autre', icon: 'fas fa-ellipsis-h' },
  ];

  budgetRanges = [
    { value: 'moins-50k', label: 'Moins de 50K € / an' },
    { value: '50k-100k', label: '50K - 100K € / an' },
    { value: '100k-200k', label: '100K - 200K € / an' },
    { value: 'plus-200k', label: 'Plus de 200K € / an' },
  ];

  comptabiliteOptions = [
    {
      value: 'interne',
      label: 'En interne',
      description: "Par un membre de l'ASBL",
      icon: 'fas fa-users',
    },
    {
      value: 'externe',
      label: 'Comptable externe',
      description: 'Nous avons un comptable',
      icon: 'fas fa-user-tie',
    },
    {
      value: 'aucun',
      label: 'Aucun système structuré',
      description: "Nous n'avons pas de système organisé",
      icon: 'fas fa-question-circle',
    },
  ];

  priorites = [
    {
      value: 'organisation',
      label: 'Organisation administrative',
      icon: 'fas fa-folder-open',
    },
    {
      value: 'comptabilite',
      label: 'Tenue de la comptabilité',
      icon: 'fas fa-calculator',
    },
    {
      value: 'conseil',
      label: 'Conseil en gestion financière',
      icon: 'fas fa-chart-line',
    },
    {
      value: 'formation',
      label: 'Formation pour les membres',
      icon: 'fas fa-chalkboard-teacher',
    },
    { value: 'autre', label: 'Autre', icon: 'fas fa-plus' },
  ];

  constructor(private metaService: MetaService, private fb: FormBuilder) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page ASBL
    this.metaService.setAbslPageMeta();

    // Initialiser le formulaire
    this.initializeForm();
  }

  // Initialiser le formulaire avec toutes les validations
  initializeForm() {
    this.asblForm = this.fb.group({
      // Étape 1: Type d'ASBL
      typeAsbl: ['', Validators.required],
      autreType: [''],

      // Étape 2: Budget
      budgetAnnuel: ['', Validators.required],

      // Étape 3: Coordonnées
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],

      // Étape 4: Comptabilité
      comptabilite: ['', Validators.required],

      // Étape 5: Priorités (checkboxes)
      priorite_organisation: [false],
      priorite_comptabilite: [false],
      priorite_conseil: [false],
      priorite_formation: [false],
      priorite_autre: [false],
      autrePriorite: [''],
    });
  }

  // Navigation entre les étapes
  nextStep() {
    if (this.isCurrentStepValid() && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Vérifier si l'étape actuelle est valide
  isCurrentStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.asblForm.get('typeAsbl')?.valid || false;
      case 2:
        return this.asblForm.get('budgetAnnuel')?.valid || false;
      case 3:
        return (
          (this.asblForm.get('nom')?.valid &&
            this.asblForm.get('prenom')?.valid &&
            this.asblForm.get('email')?.valid &&
            this.asblForm.get('telephone')?.valid) ||
          false
        );
      case 4:
        return this.asblForm.get('comptabilite')?.valid || false;
      case 5:
        // Au moins une priorité doit être sélectionnée
        return (
          this.asblForm.get('priorite_organisation')?.value ||
          this.asblForm.get('priorite_comptabilite')?.value ||
          this.asblForm.get('priorite_conseil')?.value ||
          this.asblForm.get('priorite_formation')?.value ||
          this.asblForm.get('priorite_autre')?.value
        );
      default:
        return false;
    }
  }

  // Calculer le pourcentage de progression
  getProgressPercentage(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  // Soumission du formulaire
  onSubmit() {
    if (this.asblForm.valid) {
      const formData = this.asblForm.value;

      // Ici vous pouvez traiter les données du formulaire
      console.log('Données du formulaire:', formData);

      // Simuler l'envoi des données
      this.submitFormData(formData);

      // Afficher le message de confirmation
      this.formSubmitted = true;
    }
  }

  // Méthode pour traiter l'envoi des données
  private submitFormData(data: any) {
    // Ici vous pouvez ajouter la logique pour envoyer les données à votre backend
    // Par exemple : this.httpService.submitAsblForm(data).subscribe(...)

    // Pour l'instant, on simule juste l'envoi
    setTimeout(() => {
      console.log('Formulaire envoyé avec succès!');
    }, 1000);
  }

  // Réinitialiser le formulaire
  resetForm() {
    this.formSubmitted = false;
    this.currentStep = 1;
    this.asblForm.reset();
    this.initializeForm();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  ngAfterViewInit() {
    // Calculer les dimensions initiales
    this.calculateDimensions();

    // Réajuster les dimensions lors du redimensionnement de la fenêtre
    window.addEventListener('resize', this.calculateDimensions.bind(this));

    // Configurer l'observateur de défilement avec throttling pour des performances optimales
    this.scrollSubscription = fromEvent(window, 'scroll')
      .pipe(
        throttleTime(10) // Ajustez la fréquence selon vos besoins
      )
      .subscribe(() => this.onScroll());
  }

  ngOnDestroy() {
    // Nettoyer les abonnements et les écouteurs d'événements
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
    window.removeEventListener('resize', this.calculateDimensions.bind(this));
  }

  // Méthode pour calculer les dimensions de la section et de l'image
  private calculateDimensions() {
    const sectionRect =
      this.serviceSection.nativeElement.getBoundingClientRect();
    this.sectionTop = window.pageYOffset + sectionRect.top;
    this.sectionHeight = this.serviceSection.nativeElement.offsetHeight;

    const imageRect = this.serviceImage.nativeElement.getBoundingClientRect();
    this.imageHeight = this.serviceImage.nativeElement.offsetHeight;

    // Définir la translation maximale pour que l'image ne dépasse pas la section
    this.maxTranslateY = this.sectionHeight - this.imageHeight;
    if (this.maxTranslateY < 0) {
      this.maxTranslateY = 0; // Empêcher une translation négative si l'image est plus grande que la section
    }
  }

  // Méthode appelée lors du défilement
  private onScroll() {
    const scrollY = window.pageYOffset;
    const start = this.sectionTop;
    const end = this.sectionTop + this.sectionHeight;

    if (scrollY >= start && scrollY <= end) {
      // Calculer le progrès du défilement dans la section (0 à 1)
      const progress = (scrollY - start) / this.sectionHeight;

      // Calculer la translation Y basée sur le progrès
      const translateY = progress * this.maxTranslateY;

      // Appliquer la transformation à l'image
      this.serviceImage.nativeElement.style.transform = `translateY(${translateY}px)`;
    } else if (scrollY < start) {
      // Avant la section, réinitialiser la transformation
      this.serviceImage.nativeElement.style.transform = `translateY(0px)`;
    } else if (scrollY > end) {
      // Après la section, fixer la transformation maximale
      this.serviceImage.nativeElement.style.transform = `translateY(${this.maxTranslateY}px)`;
    }
  }
}
