import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';
import { SOCIETE_MOYEN_FORM_CONFIG } from '../shared/contact-form-layout/contact-form-configs';

@Component({
  selector: 'app-profil-societe-moyen',
  templateUrl: './profil-societe-moyen.component.html',
  styleUrl: './profil-societe-moyen.component.css',
})
export class ProfilSocieteMoyenComponent implements OnInit {
  formConfig = SOCIETE_MOYEN_FORM_CONFIG;

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
