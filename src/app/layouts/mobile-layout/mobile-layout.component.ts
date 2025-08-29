import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mobile-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="mobile-layout">
      <!-- Header mobile -->
      <header class="mobile-header">
        <div class="mobile-header-content">
          <div class="mobile-logo">
            <a routerLink="/accueil">
              <img
                src="assets/img/logo/Logo-mfinances.png"
                alt="MFinances"
                class="logo-img"
              />
            </a>
          </div>
          <button
            class="mobile-menu-toggle"
            (click)="toggleMobileMenu()"
            [class.active]="isMobileMenuOpen"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </header>

      <!-- Menu mobile overlay -->
      <div
        class="mobile-menu-overlay"
        [class.active]="isMobileMenuOpen"
        (click)="closeMobileMenu()"
      >
        <nav class="mobile-nav" (click)="$event.stopPropagation()">
          <!-- Navigation mobile -->
          <ul class="mobile-nav-list">
            <li>
              <a routerLink="/accueil" (click)="closeMobileMenu()">Accueil</a>
            </li>
            <li>
              <a routerLink="/about" (click)="closeMobileMenu()">À propos</a>
            </li>
            <li>
              <a routerLink="/services" (click)="closeMobileMenu()">Services</a>
            </li>
            <li>
              <a routerLink="/tarif" (click)="closeMobileMenu()">Tarifs</a>
            </li>
            <li>
              <a routerLink="/contact" (click)="closeMobileMenu()">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Contenu principal -->
      <main class="mobile-main">
        <router-outlet></router-outlet>
      </main>

      <!-- Navigation bottom fixe (optionnel) -->
      <nav class="mobile-bottom-nav">
        <a
          routerLink="/accueil"
          class="bottom-nav-item"
          routerLinkActive="active"
        >
          <i class="fa-solid fa-home"></i>
          <span>Accueil</span>
        </a>
        <a
          routerLink="/services"
          class="bottom-nav-item"
          routerLinkActive="active"
        >
          <i class="fa-solid fa-briefcase"></i>
          <span>Services</span>
        </a>
        <a
          routerLink="/tarif"
          class="bottom-nav-item"
          routerLinkActive="active"
        >
          <i class="fa-solid fa-euro-sign"></i>
          <span>Tarifs</span>
        </a>
        <a
          routerLink="/contact"
          class="bottom-nav-item"
          routerLinkActive="active"
        >
          <i class="fa-solid fa-envelope"></i>
          <span>Contact</span>
        </a>
      </nav>
    </div>
  `,
  styleUrls: ['./mobile-layout.component.scss'],
})
export class MobileLayoutComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.classList.remove('mobile-menu-open');
  }
}
