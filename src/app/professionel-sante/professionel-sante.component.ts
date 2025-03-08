import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-professionel-sante',
  templateUrl: './professionel-sante.component.html',
  styleUrl: './professionel-sante.component.css',
})
export class ProfessionelSanteComponent implements OnInit {
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
