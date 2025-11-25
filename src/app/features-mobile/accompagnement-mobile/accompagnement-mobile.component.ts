import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';

@Component({
  selector: 'app-accompagnement-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule],
  templateUrl: './accompagnement-mobile.component.html',
  styleUrls: ['./accompagnement-mobile.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AccompagnementMobileComponent implements OnInit {

  // Variables pour les vidéos
  showMainVideo = false;
  mainVideoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // URL sécurisée pour la vidéo principale
    this.mainVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/ddEWZUHRObM'
    );
  }

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

  // Méthode pour la vidéo
  playMainVideo(): void {
    this.showMainVideo = !this.showMainVideo;
  }
}
