import { Component } from '@angular/core';

@Component({
  selector: 'app-tresorerie-page',
  templateUrl: './tresorerie-page.component.html',
  styleUrls: ['./tresorerie-page.component.scss']
})
export class TresoreriePageComponent {
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