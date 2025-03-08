import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-anticiper-tresorerie',
  templateUrl: './anticiper-tresorerie.component.html',
  styleUrl: './anticiper-tresorerie.component.css',
})
export class AnticiperTresorerieComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Anticiper Trésorerie
    this.metaService.setAnticiperTresoreriePageMeta();
  }
}
