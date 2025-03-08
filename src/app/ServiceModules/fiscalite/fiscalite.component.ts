import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../../app/services/meta.service';

@Component({
  selector: 'app-fiscalite',
  templateUrl: './fiscalite.component.html',
  styleUrl: './fiscalite.component.css',
})
export class FiscaliteComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Fiscalité
    this.metaService.setFiscalitePageMeta();
  }
}
