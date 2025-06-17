import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';
import { PROFESSIONNEL_SANTE_FORM_CONFIG } from '../shared/contact-form-layout/contact-form-configs';

@Component({
  selector: 'app-professionel-sante',
  templateUrl: './professionel-sante.component.html',
  styleUrl: './professionel-sante.component.css',
})
export class ProfessionelSanteComponent implements OnInit {
  formConfig = PROFESSIONNEL_SANTE_FORM_CONFIG;

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Professionnel Santé
    this.metaService.setProfessionnelSantePageMeta();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
