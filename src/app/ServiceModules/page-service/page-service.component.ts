import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../../app/services/meta.service';

@Component({
  selector: 'app-page-service',
  templateUrl: './page-service.component.html',
  styleUrl: './page-service.component.css',
})
export class PageServiceComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Services
    this.metaService.setServicesPageMeta();
  }
}
