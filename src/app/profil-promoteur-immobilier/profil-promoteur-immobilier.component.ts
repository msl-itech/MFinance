import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-profil-promoteur-immobilier',
  templateUrl: './profil-promoteur-immobilier.component.html',
  styleUrl: './profil-promoteur-immobilier.component.css',
})
export class ProfilPromoteurImmobilierComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Promoteur Immobilier
    this.metaService.setPromoteurImmobilierPageMeta();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
