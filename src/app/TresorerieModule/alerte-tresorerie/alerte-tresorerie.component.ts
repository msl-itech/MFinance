import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-alerte-tresorerie',
  templateUrl: './alerte-tresorerie.component.html',
  styleUrl: './alerte-tresorerie.component.css'
})
export class AlerteTresorerieComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Alertes de Trésorerie - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Recevez des alertes pour mieux gérer votre trésorerie.' },
      { name: 'keywords', content: 'alerte, trésorerie, MFinances, expert comptable' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }
}
