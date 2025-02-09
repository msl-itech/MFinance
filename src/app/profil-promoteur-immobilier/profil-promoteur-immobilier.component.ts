import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profil-promoteur-immobilier',
  templateUrl: './profil-promoteur-immobilier.component.html',
  styleUrl: './profil-promoteur-immobilier.component.css'
})
export class ProfilPromoteurImmobilierComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Promoteur Immobilier - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Accompagnement comptable pour les promoteurs immobiliers.' },
      { name: 'keywords', content: 'promoteur immobilier, MFinances, expert comptable' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
