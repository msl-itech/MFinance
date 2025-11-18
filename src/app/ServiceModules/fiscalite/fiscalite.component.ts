import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MetaService } from '../../../app/services/meta.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-fiscalite',
  templateUrl: './fiscalite.component.html',
  styleUrl: './fiscalite.component.css',
})
export class FiscaliteComponent implements OnInit, AfterViewInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Fiscalité
    this.metaService.setFiscalitePageMeta();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  }

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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
