import { Component, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-departement-comptable',
  templateUrl: './departement-comptable.component.html',
  styleUrls: ['./departement-comptable.component.css'],
  animations: [
    trigger('slideDown', [
      state('closed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: '1',
        overflow: 'visible'
      })),
      transition('closed <=> open', [
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class DepartementComptableComponent implements AfterViewInit {
  // Gestion de l'accordéon - par défaut le premier item est ouvert
  activeAccordionItem: number = 1;

  ngAfterViewInit() {
    // Initialiser AOS (Animate On Scroll)
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  }

  toggleAccordion(itemNumber: number): void {
    // Si on clique sur l'item déjà ouvert, on le ferme, sinon on ouvre le nouveau
    this.activeAccordionItem = this.activeAccordionItem === itemNumber ? 0 : itemNumber;
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
