import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';
import { PROMOTEUR_IMMOBILIER_FORM_CONFIG } from '../shared/contact-form-layout/contact-form-configs';

@Component({
  selector: 'app-profil-promoteur-immobilier',
  templateUrl: './profil-promoteur-immobilier.component.html',
  styleUrl: './profil-promoteur-immobilier.component.css',
})
export class ProfilPromoteurImmobilierComponent implements OnInit {
  formConfig = PROMOTEUR_IMMOBILIER_FORM_CONFIG;

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
