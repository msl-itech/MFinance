import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';
import { COMMERCANT_HORECA_FORM_CONFIG } from '../shared/contact-form-layout/contact-form-configs';

@Component({
  selector: 'app-profil-commercant-horeca',
  templateUrl: './profil-commercant-horeca.component.html',
  styleUrl: './profil-commercant-horeca.component.css',
})
export class ProfilCommercantHorecaComponent implements OnInit {
  formConfig = COMMERCANT_HORECA_FORM_CONFIG;

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Commerçant Horeca
    this.metaService.setCommercantHorecaPageMeta();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
