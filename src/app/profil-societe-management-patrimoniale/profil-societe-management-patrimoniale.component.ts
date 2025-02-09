import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profil-societe-management-patrimoniale',
  templateUrl: './profil-societe-management-patrimoniale.component.html',
  styleUrl: './profil-societe-management-patrimoniale.component.css'
})
export class ProfilSocieteManagementPatrimonialeComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Société de Management Patrimoniale - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Optimisez votre patrimoine avec une société de management patrimoniale.' },
      { name: 'keywords', content: 'société de management patrimoniale, MFinances, expert comptable' },
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
