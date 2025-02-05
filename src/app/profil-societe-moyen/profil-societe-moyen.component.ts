import { Component } from '@angular/core';

@Component({
  selector: 'app-profil-societe-moyen',
  templateUrl: './profil-societe-moyen.component.html',
  styleUrl: './profil-societe-moyen.component.css'
})
export class ProfilSocieteMoyenComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
