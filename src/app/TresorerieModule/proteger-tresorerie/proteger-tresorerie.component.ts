import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-proteger-tresorerie',
  templateUrl: './proteger-tresorerie.component.html',
  styleUrl: './proteger-tresorerie.component.css'
})
export class ProtegerTresorerieComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Protéger votre Trésorerie - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Stratégies pour protéger votre trésorerie contre les imprévus.' },
      { name: 'keywords', content: 'protéger, trésorerie, MFinances, expert comptable' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }
}
