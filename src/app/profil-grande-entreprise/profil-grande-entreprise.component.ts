import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-profil-grande-entreprise',
  templateUrl: './profil-grande-entreprise.component.html',
  styleUrl: './profil-grande-entreprise.component.css'
})
export class ProfilGrandeEntrepriseComponent {

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  constructor(private renderer: Renderer2) {}

  onScroll(event: Event): void {
    const image = document.querySelector('.works-img img');
    const scrollTop = (event.target as HTMLElement).scrollTop;
    if (image) {
      const translateY = Math.min(scrollTop * 0.2, 200); // Ajustez la vitesse
      this.renderer.setStyle(image, 'transform', `translateY(${translateY}px)`);
    }
  }

}
