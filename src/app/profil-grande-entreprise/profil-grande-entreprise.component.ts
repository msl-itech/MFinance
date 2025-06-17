import { Component, OnInit, Renderer2 } from '@angular/core';
import { MetaService } from '../services/meta.service';
import { GRANDE_ENTREPRISE_FORM_CONFIG } from '../shared/contact-form-layout/contact-form-configs';

@Component({
  selector: 'app-profil-grande-entreprise',
  templateUrl: './profil-grande-entreprise.component.html',
  styleUrl: './profil-grande-entreprise.component.css',
})
export class ProfilGrandeEntrepriseComponent implements OnInit {
  formConfig = GRANDE_ENTREPRISE_FORM_CONFIG;

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  constructor(private renderer: Renderer2, private metaService: MetaService) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page Grande Entreprise
    this.metaService.setGrandeEntreprisePageMeta();
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
