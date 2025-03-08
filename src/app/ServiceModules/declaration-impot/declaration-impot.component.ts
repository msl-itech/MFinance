import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../../app/services/meta.service';

@Component({
  selector: 'app-declaration-impot',
  templateUrl: './declaration-impot.component.html',
  styleUrl: './declaration-impot.component.css',
})
export class DeclarationImpotComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Déclaration d'impôt
    this.metaService.setDeclarationImpotPageMeta();
  }
}
