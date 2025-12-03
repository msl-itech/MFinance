import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-departement-comptable',
  templateUrl: './departement-comptable.component.html',
  styleUrls: ['./departement-comptable.component.css']
})
export class DepartementComptableComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Initialiser AOS (Animate On Scroll)
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

  scrollToContact(): void {
    const contactElement = document.getElementById('contactSection');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
