import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RecommandationProfilComponent } from "../recommandation-profil/recommandation-profil.component";
import { Subscription } from 'rxjs';
import { fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-absl',
  templateUrl: './absl.component.html',
  styleUrl: './absl.component.css',
})
export class AbslComponent {

  @ViewChild('serviceSection') serviceSection!: ElementRef;
  @ViewChild('serviceImage') serviceImage!: ElementRef;

  private scrollSubscription!: Subscription;
  private sectionTop: number = 0;
  private sectionHeight: number = 0;
  private imageHeight: number = 0;
  private maxTranslateY: number = 0;

  ngAfterViewInit() {
    // Calculer les dimensions initiales
    this.calculateDimensions();

    // Réajuster les dimensions lors du redimensionnement de la fenêtre
    window.addEventListener('resize', this.calculateDimensions.bind(this));


    // Configurer l'observateur de défilement avec throttling pour des performances optimales
    this.scrollSubscription = fromEvent(window, 'scroll').pipe(
      throttleTime(10) // Ajustez la fréquence selon vos besoins
    ).subscribe(() => this.onScroll());
  }

  ngOnDestroy() {
    // Nettoyer les abonnements et les écouteurs d'événements
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
    window.removeEventListener('resize', this.calculateDimensions.bind(this));
  }

  // Méthode pour calculer les dimensions de la section et de l'image
  private calculateDimensions() {
    const sectionRect = this.serviceSection.nativeElement.getBoundingClientRect();
    this.sectionTop = window.pageYOffset + sectionRect.top;
    this.sectionHeight = this.serviceSection.nativeElement.offsetHeight;

    const imageRect = this.serviceImage.nativeElement.getBoundingClientRect();
    this.imageHeight = this.serviceImage.nativeElement.offsetHeight;

    // Définir la translation maximale pour que l'image ne dépasse pas la section
    this.maxTranslateY = this.sectionHeight - this.imageHeight;
    if (this.maxTranslateY < 0) {
      this.maxTranslateY = 0; // Empêcher une translation négative si l'image est plus grande que la section
    }
  }

  // Méthode appelée lors du défilement
  private onScroll() {
    const scrollY = window.pageYOffset;
    const start = this.sectionTop;
    const end = this.sectionTop + this.sectionHeight;

    if (scrollY >= start && scrollY <= end) {
      // Calculer le progrès du défilement dans la section (0 à 1)
      const progress = (scrollY - start) / this.sectionHeight;

      // Calculer la translation Y basée sur le progrès
      const translateY = progress * this.maxTranslateY;

      // Appliquer la transformation à l'image
      this.serviceImage.nativeElement.style.transform = `translateY(${translateY}px)`;
    } else if (scrollY < start) {
      // Avant la section, réinitialiser la transformation
      this.serviceImage.nativeElement.style.transform = `translateY(0px)`;
    } else if (scrollY > end) {
      // Après la section, fixer la transformation maximale
      this.serviceImage.nativeElement.style.transform = `translateY(${this.maxTranslateY}px)`;
    }
  }
}
