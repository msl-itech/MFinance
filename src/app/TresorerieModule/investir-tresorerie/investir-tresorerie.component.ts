import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-investir-tresorerie',
  templateUrl: './investir-tresorerie.component.html',
  styleUrl: './investir-tresorerie.component.css',
})
export class InvestirTresorerieComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Investir Trésorerie
    this.metaService.setInvestirTresoreriePageMeta();
  }
}
