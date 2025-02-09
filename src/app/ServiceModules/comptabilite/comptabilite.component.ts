import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-comptabilite',
  templateUrl: './comptabilite.component.html',
  styleUrl: './comptabilite.component.css'
})
export class ComptabiliteComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Comptabilité - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Nos services de comptabilité pour les entreprises et indépendants.' },
      { name: 'keywords', content: 'comptabilité, MFinances, expert comptable' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }
}
