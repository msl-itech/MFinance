import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-tresorerie-benefice',
  templateUrl: './tresorerie-benefice.component.html',
  styleUrl: './tresorerie-benefice.component.css',
})
export class TresorerieBeneficeComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Trésorerie Bénéfice
    this.metaService.setTresorerieBeneficePageMeta();
  }
}
