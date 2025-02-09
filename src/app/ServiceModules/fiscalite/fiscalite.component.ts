import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fiscalite',
  templateUrl: './fiscalite.component.html',
  styleUrl: './fiscalite.component.css'
})
export class FiscaliteComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Fiscalité - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Optimisez votre fiscalité avec nos services spécialisés.' },
      { name: 'keywords', content: 'fiscalité, MFinances, expert comptable' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }
}
