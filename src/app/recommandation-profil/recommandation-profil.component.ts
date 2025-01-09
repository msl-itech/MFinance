import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommandation-profil',
  templateUrl: './recommandation-profil.component.html',
  styleUrl: './recommandation-profil.component.css'
})
export class RecommandationProfilComponent {
  currentIndex = 0;
  filteredItems: any[] = [];
  currentRoute: string = '';

  items = [
    { image: '../../assets/img/webp/57.webp', title: 'ASBL', description: 'Les Associations Sans But Lucratif en Belgique sont des structures incontournables pour porter des projets sociaux, culturels, éducatifs ou environnementaux...',route: '/absl' },
    { image: '../../assets/img/webp/6.webp', title: 'Indépendant et Startup', description: 'Devenir indépendant, c’est plus qu’un simple changement de statut. C’est une aventure excitante, un saut vers la liberté professionnelle ...',route: '/profil-independant' },
    { image: '../../assets/img/webp/patrimonial.webp', title: 'Société de Management Patrimoniale', description: 'La Société de Management Patrimoniale permet au dirigeant d’entreprise de facturer ses prestations à sa société d’exploitation tout en optimisant ... ',route: '/societe-management-patrimoniale' },
    { image: '../../assets/img/webp/21.webp', title: 'Personnel de sante', description: 'Médecins, dentistes, vétérinaires ou kinésithérapeutes, votre quotidien oscille entre la prise en charge des patients et la gestion de vos obligations comptables...',route: '/professionel-sante' },
    { image: '../../assets/img/webp/54.webp', title: 'Societe de moyen', description: 'Devenir indépendant, c’est plus qu’un simple changement de statut. C’est une aventure excitante, un saut vers la liberté professionnelle et une opportunité unique ...',route: '/societe-moyen' },
    { image: '../../assets/img/webp/53.webp', title: `Societe d'exploitation`, description: 'Une société d’exploitation est le pilier de votre activité professionnelle ou commerciale. Elle se concentre sur la création de valeur à travers une...',route: '/societe-exploitation' },
    { image: '../../assets/img/webp/moyen.webp', title: `Promoteur immobilier`, description: 'La promotion immobilière est une activité complexe qui exige une gestion rigoureuse des finances, de la fiscalité, et des flux de trésorerie...',route: '/promoteur-immobilier' },
    { image: '../../assets/img/webp/grande_entreprise.webp', title: 'Grande Entreprise', description: 'Les grandes entreprises évoluent dans un environnement complexe où une gestion rigoureuse des finances est essentielle pour garantir leur compétitivité...',route: '/grande-entreprise' },
    { image: '../../assets/img/webp/19.webp', title: 'Commercant et Horeca', description: 'En tant que commerçant ou acteur du secteur HORECA (hôtellerie, restauration, cafés), vous jonglez quotidiennement avec de multiples responsabilités...',route: '/commercant-horeca' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Obtenir la route active
    this.currentRoute = this.router.url;

    // Filtrer les éléments pour ne pas inclure celui de la route actuelle
    this.filteredItems = this.items.filter((item) => item.route !== this.currentRoute);
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.filteredItems.length - 1) {
      this.currentIndex++;
    }
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 260}px)`;
  }
}
