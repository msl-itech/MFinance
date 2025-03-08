import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-proteger-tresorerie',
  templateUrl: './proteger-tresorerie.component.html',
  styleUrl: './proteger-tresorerie.component.css',
})
export class ProtegerTresorerieComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Protéger Trésorerie
    this.metaService.setProtegerTresoreriePageMeta();
  }
}
