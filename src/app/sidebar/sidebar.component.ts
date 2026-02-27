import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  // Profils (métier)
  profils = [
    { name: 'Indépendant & Startup', route: '/profils/independant-startup' },
    { name: 'Commerçant & Horeca', route: '/profils/commercant-horeca' },
    { name: 'Professionnel de santé', route: '/profils/professionnel-sante' },
    { name: 'Grande Entreprise', route: '/profils/grande-entreprise' },
    { name: 'Promoteur Immobilier', route: '/profils/promoteur-immobilier' },
  ];

  // Structures (juridique)
  structures = [
    { name: 'ASBL', route: '/structures/asbl' },
    {
      name: "Société d'exploitation",
      route: '/structures/societe-exploitation',
    },
    {
      name: 'Société de management patrimoniale',
      route: '/structures/societe-management-patrimoniale',
    },
    { name: 'Société de moyens', route: '/structures/societe-de-moyens' },
  ];

  // Combinaison pour compatibilité avec l'ancien code
  categories = [...this.profils, ...this.structures];

  maxVisibleCategories = 9;

  showAllCategories() {
    this.maxVisibleCategories = this.categories.length;
  }

  openGoogleReview(): void {
    window.open(
      'https://www.google.com/search?q=mfinances&oq=mfinances&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQLhivARjHARiABDIJCAIQABgKGIAEMg8IAxAAGAoYgwEYsQMYgAQyCQgEEAAYChiABDIHCAUQABiABDIGCAYQRRg9MgYIBxBFGD3SAQg0NDAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=',
      '_blank'
    );
  }
}
