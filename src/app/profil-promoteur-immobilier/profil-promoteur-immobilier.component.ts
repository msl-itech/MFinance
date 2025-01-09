import { Component } from '@angular/core';

@Component({
  selector: 'app-profil-promoteur-immobilier',
  templateUrl: './profil-promoteur-immobilier.component.html',
  styleUrl: './profil-promoteur-immobilier.component.css'
})
export class ProfilPromoteurImmobilierComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
