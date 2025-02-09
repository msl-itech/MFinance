import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-creation-entreprise',
  templateUrl: './creation-entreprise.component.html',
  styleUrl: './creation-entreprise.component.css'
})
export class CreationEntrepriseComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Création d\'Entreprise - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Accompagnement dans la création de votre entreprise avec MFinances.' },
      { name: 'keywords', content: 'création d\'entreprise, MFinances, expert comptable' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }
}
