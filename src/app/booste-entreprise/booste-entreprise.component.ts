import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-booste-entreprise',
  templateUrl: './booste-entreprise.component.html',
  styleUrls: ['./booste-entreprise.component.css'],
})
export class BoosteEntrepriseComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setVentePageMeta();
  }

  scrollToOptions(): void {
    const optionsSection = document.getElementById('options-section');
    if (optionsSection) {
      optionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
