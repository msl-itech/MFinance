import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { ZoneContactMobileComponent } from '../../zone-contact-mobile/zone-contact-mobile.component';

@Component({
  selector: 'app-tresorerie-mobile',
  standalone: true,
  imports: [CommonModule, RouterModule, ShardeModuleModule, ZoneContactMobileComponent],
  templateUrl: './tresorerie-mobile.component.html',
  styleUrls: ['./tresorerie-mobile.component.scss'],
})
export class TresorerieMobileComponent implements OnInit {
  // Variables pour la modal de contact
  showContactModal = false;

  // Variable pour la sélection de situation
  selectedSituation: string | null = null;

  // Liste des articles de trésorerie
  articles = [
    {
      title: 'Pourquoi votre trésorerie est plus importante que vos bénéfices',
      readingTime: 5,
      route: '/tresorerie/tresorerie-benefice'
    },
    {
      title: 'Investir sans risque',
      readingTime: 7,
      route: '/tresorerie/investir-sa-tresorerie'
    },
    {
      title: 'Optimiser la gestion des stocks',
      readingTime: 6,
      route: '/tresorerie/optimiser-son-stock'
    },
    {
      title: 'SOS Trésorerie : Garder le cap',
      readingTime: 8,
      route: '/tresorerie/alerte-tresorerie'
    },
    {
      title: 'Fidélisation et différenciation',
      readingTime: 6,
      route: '/tresorerie/proteger-sa-tresorerie'
    },
    {
      title: "L'anticipation, votre meilleure arme",
      readingTime: 4,
      route: '/tresorerie/anticiper-sa-tresorerie'
    },
    {
      title: 'Gagnez en sécurité financière',
      readingTime: 5,
      route: '/tresorerie/accompagnement'
    },
  ];

  // Options de situation pour le formulaire
  situationOptions = [
    "Particulier – Déclaration d'impôt",
    'Devenir indépendant',
    'Indépendant en personne physique',
    'Création de société',
    'Société active',
    'Autre',
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialisation du composant
  }

  // Méthode pour ouvrir la modal de contact
  openContactModal(): void {
    this.showContactModal = true;
    document.body.classList.add('modal-open');
  }

  // Méthode pour fermer la modal de contact
  closeContactModal(): void {
    this.showContactModal = false;
    document.body.classList.remove('modal-open');
  }

  // Méthode pour naviguer vers la page de contact
  goToContact(): void {
    this.closeContactModal();
    this.router.navigate(['/contact']);
  }

  // Méthode pour naviguer vers la page tarif
  goToTarif(): void {
    this.router.navigate(['/tarifs']);
  }

  // Méthode pour sélectionner une situation
  selectSituation(situation: string): void {
    this.selectedSituation = situation;
  }

  // Méthode pour le scroll vers une section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
