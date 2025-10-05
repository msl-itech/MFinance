import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-booste-entreprise',
  templateUrl: './booste-entreprise.component.html',
  styleUrls: ['./booste-entreprise.component.css'],
})
export class BoosteEntrepriseComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {
    // Scroll to top immédiatement
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  ngAfterViewInit() {
    // Réinitialiser AOS après le chargement de la vue
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  }

  scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
