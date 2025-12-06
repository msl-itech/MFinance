import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero-sectio-v2',
  templateUrl: './hero-sectio-v2.component.html',
  styleUrl: './hero-sectio-v2.component.css'
})
export class HeroSectioV2Component implements AfterViewInit {

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
