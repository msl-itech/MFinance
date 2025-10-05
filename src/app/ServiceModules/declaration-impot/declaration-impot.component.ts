import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MetaService } from '../../../app/services/meta.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-declaration-impot',
  templateUrl: './declaration-impot.component.html',
  styleUrl: './declaration-impot.component.css',
})
export class DeclarationImpotComponent implements OnInit, AfterViewInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Déclaration d'impôt
    this.metaService.setDeclarationImpotPageMeta();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  }
}
