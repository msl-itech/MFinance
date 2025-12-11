import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

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
