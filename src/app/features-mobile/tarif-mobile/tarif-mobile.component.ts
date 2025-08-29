import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';

@Component({
  selector: 'app-tarif-mobile',
  standalone: true,
  imports: [CommonModule, RouterLink, ShardeModuleModule],
  templateUrl: './tarif-mobile.component.html',
  styleUrls: ['./tarif-mobile.component.scss'],
})
export class TarifMobileComponent implements OnInit {
  // Variables pour la gestion des vidéos
  showExcellenceVideo = false;
  showMainVideo = false;
  excellenceVideoUrl: SafeResourceUrl;
  mainVideoUrl: SafeResourceUrl;

  // Variables pour les modales et tooltips
  showContactModal = false;

  constructor(private sanitizer: DomSanitizer) {
    // URLs sécurisées pour les vidéos
    this.excellenceVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/XJrFJicX7S0'
    );
    this.mainVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/gAF_Jw6_T7Q'
    );
  }

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
    // Navigation vers la page de contact
    window.location.href = '/contact';
  }

  // Méthode pour le scroll vers une section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Méthode pour afficher/masquer la vidéo Excellence
  toggleExcellenceVideo(): void {
    this.showExcellenceVideo = !this.showExcellenceVideo;
  }

  // Méthode pour afficher/masquer la vidéo principale
  toggleMainVideo(): void {
    this.showMainVideo = !this.showMainVideo;
  }
}
