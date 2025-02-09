import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profil-societe-moyen',
  templateUrl: './profil-societe-moyen.component.html',
  styleUrl: './profil-societe-moyen.component.css'
})
export class ProfilSocieteMoyenComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Société de Moyen - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Découvrez les avantages d’une société de moyen avec MFinances.' },
      { name: 'keywords', content: 'société de moyen, MFinances, expert comptable' },
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
