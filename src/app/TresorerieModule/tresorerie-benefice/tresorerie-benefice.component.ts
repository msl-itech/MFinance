import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tresorerie-benefice',
  templateUrl: './tresorerie-benefice.component.html',
  styleUrl: './tresorerie-benefice.component.css'
})
export class TresorerieBeneficeComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Bénéfice de Trésorerie - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Optimisez la gestion de votre trésorerie pour maximiser vos bénéfices.' },
      { name: 'keywords', content: 'trésorerie, bénéfice, MFinances, expert comptable' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }
}
