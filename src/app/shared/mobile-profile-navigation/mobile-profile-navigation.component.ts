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
    { name: 'Indépendant & Startup', route: '/profils/independant-startup' },
    { name: 'Commerçant & Horeca', route: '/profils/commercant-horeca' },
    { name: 'Professionnel de santé', route: '/profils/professionnel-sante' },
    { name: 'Grande entreprise', route: '/profils/grande-entreprise' },
    { name: 'Promoteur immobilier', route: '/profils/promoteur-immobilier' },
    { name: 'ASBL', route: '/structures/asbl' },
    { name: 'Société d\'exploitation', route: '/structures/societe-exploitation' },
    { name: 'Société de management patrimoniale', route: '/structures/societe-management-patrimoniale' },
    { name: 'Société de moyens', route: '/structures/societe-de-moyens' },
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