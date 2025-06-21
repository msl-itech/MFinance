import { Injectable } from '@angular/core';
import { Observable, fromEvent, map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveImageService {
  constructor() {}

  /**
   * Observe la taille de l'écran et retourne la taille d'image appropriée
   */
  getImageSize(): Observable<'small' | 'medium' | 'large'> {
    return fromEvent(window, 'resize').pipe(
      startWith(null),
      map(() => {
        const width = window.innerWidth;
        if (width < 768) {
          return 'small';
        } else if (width < 1200) {
          return 'medium';
        } else {
          return 'large';
        }
      })
    );
  }

  /**
   * Retourne la taille d'image basée sur la largeur actuelle
   */
  getCurrentImageSize(): 'small' | 'medium' | 'large' {
    const width = window.innerWidth;
    if (width < 768) {
      return 'small';
    } else if (width < 1200) {
      return 'medium';
    } else {
      return 'large';
    }
  }

  /**
   * Génère le chemin d'image optimisé selon la taille et le format
   */
  getOptimizedImagePath(
    basePath: string,
    size: 'small' | 'medium' | 'large',
    format: 'webp' | 'avif' | 'jpg' = 'webp'
  ): string {
    const extension = `.${format}`;
    const sizeSuffix =
      size === 'small' ? '_s' : size === 'medium' ? '_m' : '_l';

    // Remplace l'extension existante par la nouvelle avec suffixe de taille
    const pathWithoutExt = basePath.replace(/\.(webp|avif|jpg|jpeg|png)$/i, '');
    return `${pathWithoutExt}${sizeSuffix}${extension}`;
  }

  /**
   * Génère un srcset pour une image responsive
   */
  generateSrcSet(
    basePath: string,
    format: 'webp' | 'avif' | 'jpg' = 'webp'
  ): string {
    const pathWithoutExt = basePath.replace(/\.(webp|avif|jpg|jpeg|png)$/i, '');
    const extension = `.${format}`;

    return [
      `${pathWithoutExt}_s${extension} 480w`,
      `${pathWithoutExt}_m${extension} 768w`,
      `${pathWithoutExt}_l${extension} 1200w`,
    ].join(', ');
  }

  /**
   * Génère les sizes pour une image responsive
   */
  generateSizes(): string {
    return '(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw';
  }

  /**
   * Génère les sizes optimisés pour l'image LCP
   */
  generateLCPSizes(): string {
    return '(max-width: 767px) 100vw, (max-width: 1199px) 60vw, 50vw';
  }

  /**
   * Configuration des images critiques pour différentes tailles
   */
  getCriticalImageConfig() {
    return {
      'grande_entreprise.webp': {
        small: { width: 400, height: 300, quality: 75 },
        medium: { width: 600, height: 450, quality: 80 },
        large: { width: 800, height: 600, quality: 85 },
      },
      'patrimonial.webp': {
        small: { width: 350, height: 280, quality: 75 },
        medium: { width: 500, height: 400, quality: 80 },
        large: { width: 700, height: 560, quality: 85 },
      },
      'image-MIKA.webp': {
        small: { width: 200, height: 250, quality: 80 },
        medium: { width: 300, height: 375, quality: 85 },
        large: { width: 400, height: 500, quality: 90 },
      },
      'Container.webp': {
        small: { width: 300, height: 200, quality: 75 },
        medium: { width: 450, height: 300, quality: 80 },
        large: { width: 600, height: 400, quality: 85 },
      },
      '57.avif': {
        small: { width: 300, height: 200, quality: 75 },
        medium: { width: 450, height: 300, quality: 80 },
        large: { width: 600, height: 400, quality: 85 },
      },
    };
  }

  /**
   * Retourne l'URL d'image optimale selon le device
   */
  getOptimalImageSrc(basePath: string): string {
    const size = this.getCurrentImageSize();
    return this.getOptimizedImagePath(basePath, size);
  }
}
