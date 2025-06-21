import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ResponsiveImageService } from '../services/responsive-image.service';

@Directive({
  selector: 'img[appOptimizeImage]',
  standalone: true,
})
export class ImageOptimizerDirective implements OnInit {
  @Input() appOptimizeImage: boolean = true;
  @Input() priority: boolean = false;

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private renderer: Renderer2,
    private imageService: ResponsiveImageService
  ) {}

  ngOnInit() {
    if (!this.appOptimizeImage) return;

    const img = this.el.nativeElement;
    const originalSrc = img.src;

    // Si c'est une image prioritaire, configure le chargement eager
    if (this.priority) {
      this.renderer.setAttribute(img, 'loading', 'eager');
    } else {
      this.renderer.setAttribute(img, 'loading', 'lazy');
    }

    // Génère les srcset optimisés
    const webpSrcSet = this.imageService.generateSrcSet(originalSrc, 'webp');
    const sizes = this.imageService.generateSizes();

    // Crée un élément picture pour le fallback des formats
    const picture = this.renderer.createElement('picture');

    // Source AVIF
    const avifSource = this.renderer.createElement('source');
    this.renderer.setAttribute(
      avifSource,
      'srcset',
      this.imageService.generateSrcSet(originalSrc, 'avif')
    );
    this.renderer.setAttribute(avifSource, 'sizes', sizes);
    this.renderer.setAttribute(avifSource, 'type', 'image/avif');

    // Source WebP
    const webpSource = this.renderer.createElement('source');
    this.renderer.setAttribute(webpSource, 'srcset', webpSrcSet);
    this.renderer.setAttribute(webpSource, 'sizes', sizes);
    this.renderer.setAttribute(webpSource, 'type', 'image/webp');

    // Remplace l'image par la structure picture
    const parent = img.parentNode;
    if (parent) {
      this.renderer.insertBefore(parent, picture, img);
      this.renderer.appendChild(picture, avifSource);
      this.renderer.appendChild(picture, webpSource);
      this.renderer.appendChild(picture, img);
    }

    // Met à jour la src avec la version optimisée
    const optimizedSrc = this.imageService.getOptimalImageSrc(originalSrc);
    this.renderer.setAttribute(img, 'src', optimizedSrc);
    this.renderer.setAttribute(img, 'srcset', webpSrcSet);
    this.renderer.setAttribute(img, 'sizes', sizes);

    // Ajoute un gestionnaire d'erreur pour fallback
    this.renderer.listen(img, 'error', () => {
      console.warn(`Fallback vers image originale: ${originalSrc}`);
      this.renderer.setAttribute(img, 'src', originalSrc);
    });

    // Log pour debug
    console.log(`Image optimisée: ${originalSrc} -> ${optimizedSrc}`);
  }
}
