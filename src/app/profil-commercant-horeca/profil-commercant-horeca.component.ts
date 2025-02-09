import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profil-commercant-horeca',
  templateUrl: './profil-commercant-horeca.component.html',
  styleUrl: './profil-commercant-horeca.component.css'
})
export class ProfilCommercantHorecaComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Commerçant Horeca - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Solutions comptables pour les commerçants Horeca avec MFinances.' },
      { name: 'keywords', content: 'commerçant, Horeca, MFinances, expert comptable' },
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
