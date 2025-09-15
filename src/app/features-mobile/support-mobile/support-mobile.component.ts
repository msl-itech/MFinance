import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';

@Component({
  selector: 'app-support-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule],
  templateUrl: './support-mobile.component.html',
  styleUrls: ['./support-mobile.component.scss'],
})
export class SupportMobileComponent implements OnInit {
  // Variables pour les vidéos
  showWindowsVideo = false;
  showMacVideo = false;
  
  // Variable pour la FAQ active
  activeFaq: number | null = null;

  // Liste des FAQs
  faqs = [
    {
      question: 'Est-ce que je dois garder AnyDesk installé en permanence ?',
      answer: 'Non, vous pouvez le désinstaller après la session.'
    },
    {
      question: 'Est-ce sécurisé ?',
      answer: 'Oui, connexion chiffrée & autorisations contrôlées.'
    },
    {
      question: 'Le service est-il gratuit ?',
      answer: 'Oui, inclus dans notre accompagnement.'
    },
    {
      question: 'Combien de temps dure une session ?',
      answer: 'En moyenne 20 à 30 minutes.'
    },
    {
      question: 'Dois-je être présent ?',
      answer: 'Oui, pour suivre les explications en direct.'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialisation du composant
  }

  // Méthode pour afficher/masquer la vidéo Windows
  toggleWindowsVideo(): void {
    this.showWindowsVideo = !this.showWindowsVideo;
  }

  // Méthode pour afficher/masquer la vidéo Mac
  toggleMacVideo(): void {
    this.showMacVideo = !this.showMacVideo;
  }

  // Méthode pour toggler une FAQ
  toggleFaq(index: number): void {
    this.activeFaq = this.activeFaq === index ? null : index;
  }

  // Méthode pour contacter le support
  contactSupport(): void {
    this.router.navigate(['/contact']);
  }

  // Méthode pour le scroll vers une section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}