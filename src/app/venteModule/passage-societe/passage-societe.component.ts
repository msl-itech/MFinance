import { Component } from '@angular/core';

@Component({
  selector: 'app-passage-societe',
  templateUrl: './passage-societe.component.html',
  styleUrl: './passage-societe.component.css'
})
export class PassageSocieteComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
