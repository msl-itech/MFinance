import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-anticiper-tresorerie',
  templateUrl: './anticiper-tresorerie.component.html',
  styleUrl: './anticiper-tresorerie.component.css'
})
export class AnticiperTresorerieComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Anticiper votre Trésorerie - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Anticipez vos besoins de trésorerie pour une meilleure gestion.' },
      { name: 'keywords', content: 'anticiper, trésorerie, MFinances, expert comptable' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }
}
