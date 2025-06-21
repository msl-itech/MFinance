import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
})
export class SupportComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Mise à jour du titre de la page
    this.titleService.setTitle(
      'Support Technique - Assistance à distance | MFinances'
    );

    // Mise à jour des balises meta
    this.metaService.updateTag({
      name: 'description',
      content:
        "Obtenez une assistance technique à distance avec notre équipe de support MFinances. Installation simple d'AnyDesk et résolution rapide de vos problèmes informatiques.",
    });
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'support technique, assistance à distance, AnyDesk, dépannage informatique, MFinances support, aide comptabilité',
    });

    // Balises Open Graph pour les réseaux sociaux
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Support Technique - Assistance à distance | MFinances',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content:
        "Assistance technique à distance pour tous vos besoins informatiques liés à votre comptabilité et gestion d'entreprise.",
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://www.mfinances.be/support',
    });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
  }
}
