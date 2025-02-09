import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-investir-tresorerie',
  templateUrl: './investir-tresorerie.component.html',
  styleUrl: './investir-tresorerie.component.css'
})
export class InvestirTresorerieComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Investir en Trésorerie - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Découvrez comment investir efficacement votre trésorerie.' },
      { name: 'keywords', content: 'investir, trésorerie, MFinances, expert comptable' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }
}
