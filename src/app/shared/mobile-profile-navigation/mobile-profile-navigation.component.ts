import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface ProfileOption {
  name: string;
  route: string;
}

@Component({
  selector: 'app-mobile-profile-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-profile-navigation.component.html',
  styleUrls: ['./mobile-profile-navigation.component.scss'],
})
export class MobileProfileNavigationComponent implements OnInit {
  @Input() currentProfile: string = '';
  
  profiles: ProfileOption[] = [
    { name: 'Indépendant et Startup', route: '/profil-independant' },
    { name: 'ASBL', route: '/absl' },
    { name: 'Sociétés d\'exploitation', route: '/societe-exploitation' },
    { name: 'Sociétés de management', route: '/societe-management-patrimoniale' },
    { name: 'Sociétés de moyens', route: '/societe-moyen' },
    { name: 'Commerçant & Horeca', route: '/commercant-horeca' },
    { name: 'Professionnel de santé', route: '/professionel-sante' },
    { name: 'Grande Entreprise', route: '/grande-entreprise' },
    { name: 'Promoteur Immobilier', route: '/promoteur-immobilier' },
    { name: 'Passage en société', route: '/vente/passage-en-societe' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Auto-détection du profil actuel si non fourni
    if (!this.currentProfile) {
      this.currentProfile = this.getCurrentRouteProfile();
    }
  }

  // Méthode pour naviguer vers un autre profil
  navigateToProfile(event: any): void {
    const selectedProfile = event.target.value;
    if (selectedProfile && selectedProfile !== this.currentProfile) {
      this.router.navigate([selectedProfile]);
    }
  }

  // Méthode pour auto-détecter le profil actuel basé sur la route
  private getCurrentRouteProfile(): string {
    const currentUrl = this.router.url;
    const matchingProfile = this.profiles.find(profile => 
      currentUrl.includes(profile.route)
    );
    return matchingProfile?.route || '';
  }
}