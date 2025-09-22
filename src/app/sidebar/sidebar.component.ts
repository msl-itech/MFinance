import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  categories = [
    { name: 'Independant et Startup', route: '/profil-independant' },
    { name: 'ASBL', route: '/absl' },
    {
      name: 'Sociétés d’exploitation commerciale ou civile',
      route: '/societe-exploitation',
    },
    {
      name: 'Sociétés de management patrimoniale',
      route: '/societe-management-patrimoniale',
    },
    { name: 'Sociétés de moyens', route: '/societe-moyen' },
    { name: 'Commercant & Horeca', route: '/commercant-horeca' },
    { name: 'Professionel de santé', route: '/professionel-sante' },
    { name: 'Grande Entreprise', route: '/grande-entreprise' },
    { name: 'Promoteur Immobilier', route: '/promoteur-immobilier' },
  ];

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
