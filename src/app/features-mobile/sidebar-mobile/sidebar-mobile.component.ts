import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Category {
  name: string;
  route: string;
  icon: string;
}

interface PopularPage {
  name: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-mobile.component.html',
  styleUrls: ['./sidebar-mobile.component.scss'],
})
export class SidebarMobileComponent implements OnInit {
  selectedSector = '';

  // Catégories de secteurs d'activité
  categories: Category[] = [
    { name: 'Indépendant', route: '/profil-independant', icon: '👤' },
    { name: 'Société Management Patrimoniale', route: '/societe-management-patrimoniale', icon: '🏛️' },
    { name: 'Société Moyen', route: '/societe-moyen', icon: '🏢' },
    { name: 'Société d\'Exploitation', route: '/societe-exploitation', icon: '🏭' },
    { name: 'Commerçant HORECA', route: '/commercant-horeca', icon: '🍽️' },
    { name: 'Professionnel de Santé', route: '/professionel-sante', icon: '⚕️' },
    { name: 'Grande Entreprise', route: '/grande-entreprise', icon: '🏗️' },
    { name: 'Promoteur Immobilier', route: '/promoteur-immobilier', icon: '🏠' },
    { name: 'ASBL', route: '/asbl', icon: '🤝' }
  ];

  // Pages populaires
  popularPages: PopularPage[] = [
    { name: 'ASBL', route: '/asbl', icon: '🤝' },
    { name: 'Indépendant', route: '/profil-independant', icon: '👤' },
    { name: 'HORECA', route: '/commercant-horeca', icon: '🍽️' },
    { name: 'Tarifs', route: '/tarif', icon: '💰' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialisation du composant
  }

  onSectorChange(event: any): void {
    const selectedRoute = event.target.value;
    if (selectedRoute) {
      this.selectedSector = selectedRoute;
      this.navigateToPage(selectedRoute);
    }
  }

  navigateToPage(route: string): void {
    this.router.navigate([route]);
  }

  openContact(): void {
    this.router.navigate(['/contact']);
  }

  openMaps(): void {
    window.open('https://maps.google.com/?q=20+Rue+de+la+Magnanerie,+1180+Uccle', '_blank');
  }
}