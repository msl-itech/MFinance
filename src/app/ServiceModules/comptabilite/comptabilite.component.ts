import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../../app/services/meta.service';

@Component({
  selector: 'app-comptabilite',
  templateUrl: './comptabilite.component.html',
  styleUrl: './comptabilite.component.css',
})
export class ComptabiliteComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Comptabilité
    this.metaService.setComptabilitePageMeta();
  }
}
