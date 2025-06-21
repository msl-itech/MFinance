import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponsiveImageService } from '../services/responsive-image.service';

@Component({
  selector: 'app-optimized-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <picture>
      <!-- Format AVIF pour les navigateurs compatibles -->
      <source
        *ngIf="useModernFormats"
        [srcset]="avifSrcSet"
        [sizes]="sizes"
        type="image/avif"
      />

      <!-- Format WebP pour les navigateurs compatibles -->
      <source [srcset]="webpSrcSet" [sizes]="sizes" type="image/webp" />

      <!-- Image par défaut -->
      <img
        [src]="currentSrc"
        [alt]="alt"
        [class]="imgClass"
        [width]="width"
        [height]="height"
        [loading]="loading"
        [style]="imgStyle"
        (load)="onImageLoad()"
        (error)="onImageError($event)"
      />
    </picture>
  `,
  styles: [
    `
      picture {
        display: contents;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      .loading {
        background: linear-gradient(
          90deg,
          #f0f0f0 25%,
          #e0e0e0 50%,
          #f0f0f0 75%
        );
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }

      @keyframes loading {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
    `,
  ],
})
export class OptimizedImageComponent implements OnInit, OnDestroy {
  @Input() src!: string;
  @Input() alt: string = '';
  @Input() imgClass: string = '';
  @Input() imgStyle: string = '';
  @Input() width?: number;
  @Input() height?: number;
  @Input() loading: 'lazy' | 'eager' = 'lazy';
  @Input() useModernFormats: boolean = true;
  @Input() priority: boolean = false; // Pour les images critiques

  currentSrc: string = '';
  webpSrcSet: string = '';
  avifSrcSet: string = '';
  sizes: string = '';

  private subscription = new Subscription();

  constructor(private imageService: ResponsiveImageService) {}

  ngOnInit() {
    if (this.priority) {
      this.loading = 'eager';
    }

    this.generateImageSources();

    // S'abonner aux changements de taille d'écran
    const sizeSubscription = this.imageService.getImageSize().subscribe(() => {
      this.updateCurrentSrc();
    });

    this.subscription.add(sizeSubscription);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private generateImageSources() {
    this.webpSrcSet = this.imageService.generateSrcSet(this.src, 'webp');
    this.avifSrcSet = this.imageService.generateSrcSet(this.src, 'avif');
    this.sizes = this.imageService.generateSizes();
    this.updateCurrentSrc();
  }

  private updateCurrentSrc() {
    this.currentSrc = this.imageService.getOptimalImageSrc(this.src);
  }

  onImageLoad() {
    // Image chargée avec succès
    console.log(`Image optimisée chargée: ${this.currentSrc}`);
  }

  onImageError(event: any) {
    // Fallback vers l'image originale en cas d'erreur
    console.warn(
      `Erreur de chargement image optimisée, fallback vers originale: ${this.src}`
    );
    event.target.src = this.src;
  }
}
