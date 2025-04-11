import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Mise à jour du titre de la page
    this.titleService.setTitle('Page non trouvée - MFinances');

    // Mise à jour des balises meta
    this.metaService.updateTag({
      name: 'description',
      content:
        "La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil ou contactez-nous.",
    });
    this.metaService.updateTag({ name: 'robots', content: 'noindex, follow' });
  }
}
