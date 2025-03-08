import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-compte-courant-administrateur',
  templateUrl: './compte-courant-administrateur.component.html',
  styleUrl: './compte-courant-administrateur.component.css',
})
export class CompteCourantAdministrateurComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Compte Courant Administrateur
    this.metaService.setCompteCourantPageMeta();
  }
}
