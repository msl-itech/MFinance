import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-salarie-independant',
  templateUrl: './salarie-independant.component.html',
  styleUrl: './salarie-independant.component.css',
})
export class SalarieIndependantComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Salarié Indépendant
    this.metaService.setSalarieIndependantPageMeta();
  }
}
