import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../../app/services/meta.service';

@Component({
  selector: 'app-creation-entreprise',
  templateUrl: './creation-entreprise.component.html',
  styleUrl: './creation-entreprise.component.css',
})
export class CreationEntrepriseComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Création d'entreprise
    this.metaService.setCreationEntreprisePageMeta();
  }
}
