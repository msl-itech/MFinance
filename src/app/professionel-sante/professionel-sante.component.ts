import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-professionel-sante',
  templateUrl: './professionel-sante.component.html',
  styleUrl: './professionel-sante.component.css'
})
export class ProfessionelSanteComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Professionnels de Santé - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Accompagnement comptable pour les professionnels de santé.' },
      { name: 'keywords', content: 'professionnels de santé, MFinances, expert comptable' },
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
