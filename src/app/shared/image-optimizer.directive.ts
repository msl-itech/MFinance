import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ResponsiveImageService } from '../services/responsive-image.service';

@Directive({
  selector: 'img[appOptimizeImage]',
  standalone: true,
})
export class ImageOptimizerDirective implements OnInit {
  private _appOptimizeImage: boolean = true;

  @Input()
  set appOptimizeImage(value: boolean | string | '') {
    if (value === '' || value === 'true' || value === true) {
      this._appOptimizeImage = true;
    } else if (value === 'false' || value === false) {
      this._appOptimizeImage = false;
    } else {
      this._appOptimizeImage = true; // valeur par défaut
    }
  }

  get appOptimizeImage(): boolean {
    return this._appOptimizeImage;
  }

  @Input() priority: boolean = false;

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private renderer: Renderer2,
    private imageService: ResponsiveImageService
  ) {}

  private async checkImageExists(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }

  async ngOnInit() {
    if (!this.appOptimizeImage) return;

    const img = this.el.nativeElement;
    const originalSrc = img.src;

    // Respecte l'attribut loading existant ou configure selon la priorité
    const existingLoading = img.getAttribute('loading');
    if (!existingLoading) {
      if (this.priority) {
        this.renderer.setAttribute(img, 'loading', 'eager');
      } else {
        this.renderer.setAttribute(img, 'loading', 'lazy');
      }
    }
    // Si loading="eager" est déjà défini, on le respecte

    // Vérifier si des versions optimisées existent
    const optimizedSrc = this.imageService.getOptimalImageSrc(originalSrc);
    const hasOptimizedVersions = await this.checkImageExists(optimizedSrc);

    if (!hasOptimizedVersions) {
      // Si pas de versions optimisées, utiliser juste l'image originale
      this.renderer.setAttribute(img, 'src', originalSrc);
      return;
    }

    // Génère les srcset optimisés seulement si les images existent
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
    this.renderer.setAttribute(img, 'src', optimizedSrc);
    this.renderer.setAttribute(img, 'srcset', webpSrcSet);
    this.renderer.setAttribute(img, 'sizes', sizes);

    // Ajoute un gestionnaire d'erreur pour fallback silencieux
    this.renderer.listen(img, 'error', () => {
      this.renderer.setAttribute(img, 'src', originalSrc);
    });
  }
}
