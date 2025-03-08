import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-profil-societe-management-patrimoniale',
  templateUrl: './profil-societe-management-patrimoniale.component.html',
  styleUrl: './profil-societe-management-patrimoniale.component.css',
})
export class ProfilSocieteManagementPatrimonialeComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Société Management Patrimoniale
    this.metaService.setSocieteManagementPatrimonialePageMeta();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
