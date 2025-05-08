import { Component } from '@angular/core';

@Component({
  selector: 'app-booste-entreprise',
  templateUrl: './booste-entreprise.component.html',
  styleUrls: ['./booste-entreprise.component.css'],
})
export class BoosteEntrepriseComponent {
  constructor() {}

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
