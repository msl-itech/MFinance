import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarMobileComponent } from '../sidebar-mobile/sidebar-mobile.component';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

interface AsblType {
  value: string;
  label: string;
  icon: string;
}

interface BudgetRange {
  value: string;
  label: string;
}

@Component({
  selector: 'app-asbl-mobile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SidebarMobileComponent],
  templateUrl: './asbl-mobile.component.html',
  styleUrls: ['./asbl-mobile.component.scss'],
})
export class AsblMobileComponent implements OnInit {
  // État du composant
  isScrolled = false;
  showFullIntro = false;
  activeService = '';
  
  // Formulaire d'évaluation
  evaluationForm!: FormGroup;
  currentStep = 1;
  totalSteps = 3;
  formSubmitted = false;

  // FAQ
  faqs: FaqItem[] = [
    {
      question: "L'ASBL peut-elle exercer une activité commerciale ?",
      answer: "Oui, mais uniquement si cette activité sert à financer le but social de l'association. Les bénéfices doivent être réinvestis dans la mission et non redistribués.",
      isOpen: false
    },
    {
      question: "Comment suivre efficacement les coûts par projet ?",
      answer: "Grâce à la comptabilité analytique, nous répartissons précisément les frais directs et généraux pour justifier vos demandes de subsides et optimiser vos ressources.",
      isOpen: false
    },
    {
      question: "Pourquoi surveiller les charges salariales ?",
      answer: "Les salaires représentent souvent un poste majeur des frais généraux. Une surveillance régulière aide à anticiper leur impact sur votre trésorerie.",
      isOpen: false
    }
  ];

  // Types d'ASBL
  asblTypes: AsblType[] = [
    { value: 'social', label: 'Social', icon: '🤝' },
    { value: 'culturel', label: 'Culturel', icon: '🎭' },
    { value: 'educatif', label: 'Éducatif', icon: '📚' },
    { value: 'environnemental', label: 'Environnemental', icon: '🌱' },
    { value: 'sportif', label: 'Sportif', icon: '⚽' },
    { value: 'autre', label: 'Autre', icon: '❓' }
  ];

  // Gammes de budget
  budgetRanges: BudgetRange[] = [
    { value: 'petit', label: 'Moins de 25 000 €' },
    { value: 'moyen', label: '25 000 € - 100 000 €' },
    { value: 'grand', label: '100 000 € - 500 000 €' },
    { value: 'tres-grand', label: 'Plus de 500 000 €' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
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
    this.evaluationForm = this.fb.group({
      typeAsbl: ['', Validators.required],
      budget: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required]
    });
  }

  // Navigation
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
      
      this.activeService = sectionId;
    }
  }

  toggleMobileMenu(): void {
    // Logique pour ouvrir/fermer le menu mobile
    console.log('Toggle mobile menu');
  }

  // Gestion de l'introduction
  toggleIntro(): void {
    this.showFullIntro = !this.showFullIntro;
  }

  // Gestion des FAQ
  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
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

  openAsblContact(): void {
    this.router.navigate(['/contact'], { queryParams: { service: 'asbl' } });
  }

  openMaps(): void {
    window.open('https://maps.google.com/?q=20+Rue+de+la+Magnanerie,+1180+Uccle', '_blank');
  }

  openServiceContact(service: string): void {
    this.router.navigate(['/contact'], { queryParams: { service: `asbl-${service}` } });
  }

  // Gestion du formulaire d'évaluation
  getCurrentStepTitle(): string {
    switch (this.currentStep) {
      case 1: return 'Type d\'ASBL';
      case 2: return 'Budget';
      case 3: return 'Contact';
      default: return '';
    }
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.evaluationForm.get('typeAsbl')?.value;
      case 2:
        return !!this.evaluationForm.get('budget')?.value;
      case 3:
        return !!(
          this.evaluationForm.get('nom')?.value &&
          this.evaluationForm.get('email')?.value &&
          this.evaluationForm.get('telephone')?.value &&
          this.evaluationForm.get('email')?.valid
        );
      default:
        return false;
    }
  }

  isFormValid(): boolean {
    return this.evaluationForm.valid;
  }

  nextStep(): void {
    if (this.isStepValid() && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      console.log('Données du formulaire ASBL:', this.evaluationForm.value);
      
      // Simulation d'envoi du formulaire
      setTimeout(() => {
        this.formSubmitted = true;
        this.sendFormData();
      }, 1000);
    }
  }

  resetForm(): void {
    this.currentStep = 1;
    this.formSubmitted = false;
    this.evaluationForm.reset();
  }

  private sendFormData(): void {
    // Préparation des données pour l'API
    const formDataToSend = {
      ...this.evaluationForm.value,
      source: 'asbl-mobile-evaluation',
      timestamp: new Date().toISOString(),
    };
    
    console.log('Envoi des données ASBL:', formDataToSend);
    // Ici, vous pouvez implémenter l'appel à votre service API
  }
}