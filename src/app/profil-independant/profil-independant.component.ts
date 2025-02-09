import { Component, OnInit } from '@angular/core';
import { TimelineIndependantComponent } from "../timeline-independant/timeline-independant.component";
import { RecommandationProfilComponent } from "../recommandation-profil/recommandation-profil.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profil-independant',
  templateUrl: './profil-independant.component.html',
  styleUrl: './profil-independant.component.css',
})
export class ProfilIndependantComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Indépendant - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Devenir indépendant en Belgique avec MFinances.' },
      { name: 'keywords', content: 'indépendant, MFinances, expert comptable' },
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
