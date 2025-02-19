import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profil-type',
  templateUrl: './profil-type.component.html',
  styleUrl: './profil-type.component.css'
})
export class ProfilTypeComponent {
  currentIndex = 0;
  visibleCards = 4; // Nombre de cartes visibles. Ajustez selon votre mise en page.

  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

  ngAfterViewInit() {
    // Optionnel : Calculer dynamiquement le nombre de cartes visibles
    const containerWidth = this.sliderContainer.nativeElement.offsetWidth;
    const cardWidth = 250 + 20; // Largeur de la carte + marge (250px + 10px de chaque côté)
    this.visibleCards = Math.floor(containerWidth / cardWidth);
  }


  items = [
    { image: '../../assets/img/webp/57.avif', title: 'ASBL', description: 'Les Associations Sans But Lucratif en Belgique sont des structures incontournables pour porter des projets sociaux, culturels, éducatifs ou environnementaux...',route: '/absl' },
    { image: '../../assets/img/webp/6.webp', title: 'Indépendant et Startup', description: 'Devenir indépendant, c’est plus qu’un simple changement de statut. C’est une aventure excitante, un saut vers la liberté professionnelle ...',route: '/profil-independant' },
    { image: '../../assets/img/webp/patrimonial.webp', title: 'Société de Management Patrimoniale', description: 'La Société de Management Patrimoniale permet au dirigeant d’entreprise de facturer ses prestations à sa société d’exploitation tout en optimisant ... ',route: '/societe-management-patrimoniale' },
    { image: '../../assets/img/webp/21.webp', title: 'Personnel de sante', description: 'Médecins, dentistes, vétérinaires ou kinésithérapeutes, votre quotidien oscille entre la prise en charge des patients et la gestion de vos obligations comptables...',route: '/professionel-sante' },
    { image: '../../assets/img/webp/54.avif', title: 'Societe de moyen', description: 'Une société de moyens  est une structure juridique conçue pour permettre à des professionnels, souvent issus des professions libérales, de mutualiser leurs ...',route: '/societe-moyen' },
    { image: '../../assets/img/webp/53.avif', title: `Societe d'exploitation`, description: 'Une société d’exploitation est le pilier de votre activité professionnelle ou commerciale. Elle se concentre sur la création de valeur à travers une...',route: '/societe-exploitation' },
    { image: '../../assets/img/webp/immobilier.webp', title: `Promoteur immobilier`, description: 'La promotion immobilière est une activité complexe qui exige une gestion rigoureuse des finances, de la fiscalité, et des flux de trésorerie...',route: '/promoteur-immobilier' },
    { image: '../../assets/img/webp/grande_entreprise.webp', title: 'Grande Entreprise', description: 'Les grandes entreprises évoluent dans un environnement complexe où une gestion rigoureuse des finances est essentielle pour garantir leur compétitivité...',route: '/grande-entreprise' },
    { image: '../../assets/img/webp/19.webp', title: 'Commercant et Horeca', description: 'En tant que commerçant ou acteur du secteur HORECA (hôtellerie, restauration, cafés), vous jonglez quotidiennement avec de multiples responsabilités...',route: '/commercant-horeca' },
  ];

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  private itemsPerView = 3; // Default for desktop

  ngOnInit() {
    this.setItemsPerView();
    window.addEventListener('resize', () => this.setItemsPerView());
  }
  
  ngOnDestroy() {
    window.removeEventListener('resize', () => this.setItemsPerView());
  }
  
  setItemsPerView() {
    if (window.innerWidth <= 576) {
      this.itemsPerView = 1;
    } else if (window.innerWidth <= 768) {
      this.itemsPerView = 2;
    } else {
      this.itemsPerView = 3;
    }
    // Ensure current index doesn't cause overflow
    if (this.currentIndex > this.items.length - this.itemsPerView) {
      this.currentIndex = this.items.length - this.itemsPerView;
    }
  }
  
  // Update getTransform to use itemsPerView
  getTransform() {
    const cardWidth = this.getCardWidth();
    return `translateX(-${this.currentIndex * cardWidth}px)`;
  }
  
  getCardWidth() {
    if (window.innerWidth <= 576) {
      return 270; // Card width + margins for mobile
    } else if (window.innerWidth <= 768) {
      return 200; // Card width + margins for tablet
    } else if (window.innerWidth <= 992) {
      return 220; // Card width + margins for small desktop
    } else {
      return 270; // Card width + margins for large desktop
    }
  }
  
  // Update nextSlide method
  nextSlide() {
    if (this.currentIndex < this.items.length - this.itemsPerView) {
      this.currentIndex++;
    }
  }
  
  // Update isNextDisabled computed property
  get isNextDisabled() {
    return this.currentIndex >= this.items.length - this.itemsPerView;
  }
}
