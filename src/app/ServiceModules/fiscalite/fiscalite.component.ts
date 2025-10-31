import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MetaService } from '../../../app/services/meta.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-fiscalite',
  templateUrl: './fiscalite.component.html',
  styleUrl: './fiscalite.component.css',
})
export class FiscaliteComponent implements OnInit, AfterViewInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Fiscalité
    this.metaService.setFiscalitePageMeta();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  }
}
