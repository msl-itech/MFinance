import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-alerte-tresorerie',
  templateUrl: './alerte-tresorerie.component.html',
  styleUrl: './alerte-tresorerie.component.css',
})
export class AlerteTresorerieComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Alerte Trésorerie
    this.metaService.setAlerteTresoreriePageMeta();
  }
}
