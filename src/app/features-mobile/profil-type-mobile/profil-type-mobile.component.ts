import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

interface ProfileItem {
  image: string;
  title: string;
  description: string;
  route: string;
}

@Component({
  selector: 'app-profil-type-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil-type-mobile.component.html',
  styleUrls: ['./profil-type-mobile.component.scss'],
})
export class ProfilTypeMobileComponent implements OnInit, OnDestroy {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

  currentIndex = 0;
  private resizeListener?: () => void;

  items: ProfileItem[] = [
    {
      image: 'assets/img/webp/6.webp',
      title: 'Indépendant & Startup',
      description: 'Devenir indépendant, c\'est plus qu\'un simple changement de statut. C\'est une aventure excitante, un saut vers la liberté professionnelle et une occasion unique de concrétiser vos idées.',
      route: '/profil-independant'
    },
    {
      image: 'assets/img/webp/57.avif',
      title: 'ASBL',
      description: 'Les Associations Sans But Lucratif en Belgique sont des structures incontournables pour porter des projets sociaux, culturels, éducatifs ou environnementaux essentiels à notre société.',
      route: '/asbl'
    },
    {
      image: 'assets/img/webp/19.webp',
      title: 'Commerçant & HORECA',
      description: 'En tant que commerçant ou acteur du secteur HORECA (hôtellerie, restauration, cafés), vous jonglez quotidiennement avec de multiples responsabilités administratives et financières.',
      route: '/commercant-horeca'
    },
    {
      image: 'assets/img/webp/21.webp',
      title: 'Personnel de santé',
      description: 'Médecins, dentistes, vétérinaires ou kinésithérapeutes, votre quotidien oscille entre la prise en charge des patients et la gestion de vos obligations comptables et fiscales.',
      route: '/professionel-sante'
    },
    {
      image: 'assets/img/webp/patrimonial.webp',
      title: 'Société Management Patrimoniale',
      description: 'La Société de Management Patrimoniale permet au dirigeant d\'entreprise de facturer ses prestations à sa société d\'exploitation tout en optimisant sa situation fiscale personnelle.',
      route: '/societe-management-patrimoniale'
    },
    {
      image: 'assets/img/webp/54.avif',
      title: 'Société de moyens',
      description: 'Une société de moyens est une structure juridique conçue pour permettre à des professionnels, souvent issus des professions libérales, de mutualiser leurs ressources et leurs coûts.',
      route: '/societe-moyen'
    },
    {
      image: 'assets/img/webp/53.avif',
      title: 'Société d\'exploitation',
      description: 'Une société d\'exploitation est le pilier de votre activité professionnelle ou commerciale. Elle se concentre sur la création de valeur à travers une activité opérationnelle rentable.',
      route: '/societe-exploitation'
    },
    {
      image: 'assets/img/webp/immobilier.webp',
      title: 'Promoteur immobilier',
      description: 'La promotion immobilière est une activité complexe qui exige une gestion rigoureuse des finances, de la fiscalité, et des flux de trésorerie pour garantir la rentabilité de vos projets.',
      route: '/promoteur-immobilier'
    },
    {
      image: 'assets/img/webp/grande_entreprise.webp',
      title: 'Grande Entreprise',
      description: 'Les grandes entreprises évoluent dans un environnement complexe où une gestion rigoureuse des finances est essentielle pour garantir leur compétitivité et leur développement durable.',
      route: '/grande-entreprise'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setupResizeListener();
  }

  ngOnDestroy(): void {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  private setupResizeListener(): void {
    this.resizeListener = () => {
      // Recalcul si nécessaire pour les changements d'orientation
      this.adjustForScreenSize();
    };
    window.addEventListener('resize', this.resizeListener);
  }

  private adjustForScreenSize(): void {
    // Ajustements pour différentes tailles d'écran si nécessaire
    if (this.currentIndex >= this.items.length) {
      this.currentIndex = this.items.length - 1;
    }
  }

  // Navigation methods
  nextSlide(): void {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goToSlide(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.currentIndex = index;
    }
  }

  // Touch/Swipe handling
  private touchStartX = 0;
  private touchEndX = 0;
  private isSwiping = false;

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
    this.isSwiping = true;
  }

  onTouchMove(event: TouchEvent): void {
    if (!this.isSwiping) return;
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd(): void {
    if (!this.isSwiping) return;

    const swipeThreshold = 50; // Minimum distance for swipe
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left -> next slide
        this.nextSlide();
      } else {
        // Swipe right -> previous slide
        this.prevSlide();
      }
    }

    this.isSwiping = false;
    this.touchStartX = 0;
    this.touchEndX = 0;
  }

  // Transform calculation for slider
  getTransform(): string {
    const cardWidth = this.getCardWidth();
    return `translateX(-${this.currentIndex * cardWidth}px)`;
  }

  private getCardWidth(): number {
    // Largeur totale de chaque élément du slider (carte + marges)
    return window.innerWidth; // Chaque carte prend toute la largeur disponible
  }

  // Progress calculation
  getProgressPercentage(): number {
    return ((this.currentIndex + 1) / this.items.length) * 100;
  }

  // Utility methods
  getShortDescription(description: string): string {
    const maxLength = 120;
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength).trim() + '...';
  }

  // Navigation methods
  navigateToProfile(route: string): void {
    this.router.navigate([route]);
  }

  openContact(): void {
    this.router.navigate(['/contact']);
  }
}