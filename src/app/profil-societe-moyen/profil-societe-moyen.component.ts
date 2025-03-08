import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-profil-societe-moyen',
  templateUrl: './profil-societe-moyen.component.html',
  styleUrl: './profil-societe-moyen.component.css',
})
export class ProfilSocieteMoyenComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Société Moyen
    this.metaService.setSocieteMoyenPageMeta();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
