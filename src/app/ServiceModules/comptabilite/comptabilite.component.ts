import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MetaService } from '../../../app/services/meta.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-comptabilite',
  templateUrl: './comptabilite.component.html',
  styleUrl: './comptabilite.component.scss',
})
export class ComptabiliteComponent implements OnInit, AfterViewInit {
  constructor(private metaService: MetaService) { }

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Comptabilité
    this.metaService.setComptabilitePageMeta();

    // Scroll to top immédiatement
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  ngAfterViewInit() {
    // Réinitialiser AOS après le chargement de la vue
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
