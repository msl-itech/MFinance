import { Component, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profil-grande-entreprise',
  templateUrl: './profil-grande-entreprise.component.html',
  styleUrl: './profil-grande-entreprise.component.css'
})
export class ProfilGrandeEntrepriseComponent implements OnInit {

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  constructor(private renderer: Renderer2, private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Grande Entreprise - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Solutions comptables pour les grandes entreprises.' },
      { name: 'keywords', content: 'grande entreprise, MFinances, expert comptable' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }

  onScroll(event: Event): void {
    const image = document.querySelector('.works-img img');
    const scrollTop = (event.target as HTMLElement).scrollTop;
    if (image) {
      const translateY = Math.min(scrollTop * 0.2, 200); // Ajustez la vitesse
      this.renderer.setStyle(image, 'transform', `translateY(${translateY}px)`);
    }
  }

}
