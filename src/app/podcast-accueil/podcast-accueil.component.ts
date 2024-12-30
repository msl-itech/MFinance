import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-podcast-accueil',
  templateUrl: './podcast-accueil.component.html',
  styleUrl: './podcast-accueil.component.css'
})
export class PodcastAccueilComponent {
   /**
   * Au clic sur la façade, on injecte l'iframe YouTube
   * en remplacement du contenu initial (l’image + le bouton).
   *
   * @param videoId  L'ID de la vidéo YouTube à charger
   * @param containerRef  Référence au div façade (ElementRef | HTMLElement)
   */
   onPlayVideo(videoId: string, containerRef: ElementRef | HTMLElement): void {

    let facadeElement: HTMLElement;

    if (containerRef instanceof ElementRef) {
      facadeElement = containerRef.nativeElement;
    } else {
      facadeElement = containerRef; 
    }

    const iframe = document.createElement('iframe');
    iframe.setAttribute('width',  '100%');
    iframe.setAttribute('height', '200'); 
    iframe.setAttribute('src',    `https://www.youtube.com/embed/${videoId}`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    );

    facadeElement.innerHTML = '';

    facadeElement.appendChild(iframe);
  }
}
