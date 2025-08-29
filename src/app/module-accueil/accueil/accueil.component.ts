import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setHomePageMeta();
  }
}
