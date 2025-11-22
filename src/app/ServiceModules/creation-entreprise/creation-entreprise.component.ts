import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MetaService } from '../../../app/services/meta.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-creation-entreprise',
  templateUrl: './creation-entreprise.component.html',
  styleUrl: './creation-entreprise.component.css',
})
export class CreationEntrepriseComponent implements OnInit, AfterViewInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Création d'entreprise
    this.metaService.setCreationEntreprisePageMeta();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  ngAfterViewInit() {
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
