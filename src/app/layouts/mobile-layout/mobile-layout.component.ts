import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-mobile-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="mobile-layout" [class.menu-open]="isMobileMenuOpen">
      <!-- Header mobile -->
      <header class="mobile-header" [class.scrolled]="isScrolled">
        <div class="mobile-header-content">
          <div class="mobile-logo">
            <a routerLink="/accueil" (click)="closeMobileMenu()">
              <img
                src="assets/img/logo/logoMfinances.png"
                alt="MFinances"
                class="logo-img"
              />
            </a>
          </div>

          <!-- Breadcrumb mobile -->
          <div class="mobile-breadcrumb" *ngIf="currentPageTitle">
            <span class="page-title">{{ currentPageTitle }}</span>
          </div>

          <div class="mobile-header-actions">
            <!-- Bouton retour pour les pages features -->
            <button
              *ngIf="showBackButton"
              class="mobile-back-btn"
              (click)="goBack()"
              aria-label="Retour"
            >
              <i class="fas fa-arrow-left"></i>
            </button>

            <button
              class="mobile-menu-toggle"
              (click)="toggleMobileMenu()"
              [class.active]="isMobileMenuOpen"
              aria-label="Menu"
            >
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
            </button>
          </div>
        </div>

        <!-- Progress bar pour le scroll -->
        <div class="scroll-progress" [style.width.%]="scrollProgress"></div>
      </header>

      <!-- Menu mobile overlay -->
      <div
        class="mobile-menu-overlay"
        [class.active]="isMobileMenuOpen"
        (click)="closeMobileMenu()"
      >
        <nav class="mobile-nav" (click)="$event.stopPropagation()">
          <!-- Header du menu -->
          <div class="mobile-nav-header">
            <div class="nav-logo">
              <img src="assets/img/logo/logoMfinances.png" alt="MFinances" />
            </div>
            <button class="nav-close" (click)="closeMobileMenu()">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <!-- Navigation principale -->
          <ul class="mobile-nav-list">
            <li class="nav-section">
              <span class="nav-section-title">Navigation</span>
            </li>
            <li>
              <a routerLink="/accueil" (click)="closeMobileMenu()">
                <i class="fas fa-home"></i>
                <span>Accueil</span>
              </a>
            </li>
            <li>
              <a routerLink="/about" (click)="closeMobileMenu()">
                <i class="fas fa-info-circle"></i>
                <span>À propos</span>
              </a>
            </li>

            <!-- Services avec sous-menu -->
            <li class="nav-expandable" [class.expanded]="servicesExpanded">
              <button class="nav-toggle" (click)="toggleServices()">
                <i class="fas fa-briefcase"></i>
                <span>Services</span>
                <i class="fas fa-chevron-down nav-arrow"></i>
              </button>
              <ul class="nav-submenu" *ngIf="servicesExpanded">
                <li>
                  <a routerLink="/services" (click)="closeMobileMenu()"
                    >Tous les services</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/services/creation-entreprise"
                    (click)="closeMobileMenu()"
                    >Création d'entreprise</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/services/comptabilite"
                    (click)="closeMobileMenu()"
                    >Comptabilité</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/services/fiscalite"
                    (click)="closeMobileMenu()"
                    >Fiscalité</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/services/declaration-impot"
                    (click)="closeMobileMenu()"
                    >Déclaration d'impôt</a
                  >
                </li>
              </ul>
            </li>

            <!-- Secteur d'activité avec sous-menu -->
            <li
              class="nav-expandable"
              [class.expanded]="secteurActiviteExpanded"
            >
              <button class="nav-toggle" (click)="toggleSecteurActivite()">
                <i class="fas fa-industry"></i>
                <span>Secteur d'activité</span>
                <i class="fas fa-chevron-down nav-arrow"></i>
              </button>
              <ul class="nav-submenu" *ngIf="secteurActiviteExpanded">
                <li>
                  <a routerLink="/asbl" (click)="closeMobileMenu()">Asbl</a>
                </li>
                <li>
                  <a
                    routerLink="/profil-independant"
                    (click)="closeMobileMenu()"
                    >Indépendant</a
                  >
                </li>
                <li>
                  <a routerLink="/societe-moyen" (click)="closeMobileMenu()"
                    >Société de moyen</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/societe-exploitation"
                    (click)="closeMobileMenu()"
                    >Société d'exploitation</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/societe-management-patrimoniale"
                    (click)="closeMobileMenu()"
                    >Société de management patrimonial</a
                  >
                </li>
                <li>
                  <a routerLink="/commercant-horeca" (click)="closeMobileMenu()"
                    >Commerçant HORECA</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/professionel-sante"
                    (click)="closeMobileMenu()"
                    >Professionnel de santé</a
                  >
                </li>
                <li>
                  <a routerLink="/grande-entreprise" (click)="closeMobileMenu()"
                    >Grande entreprise</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/promoteur-immobilier"
                    (click)="closeMobileMenu()"
                    >Promoteur immobilier</a
                  >
                </li>
              </ul>
            </li>

            <!-- Boostez votre entreprise avec sous-menu -->
            <li
              class="nav-expandable"
              [class.expanded]="boostezEntrepriseExpanded"
            >
              <button class="nav-toggle" (click)="toggleBoostezEntreprise()">
                <i class="fas fa-rocket"></i>
                <span>Boostez votre entreprise</span>
                <i class="fas fa-chevron-down nav-arrow"></i>
              </button>
              <ul class="nav-submenu" *ngIf="boostezEntrepriseExpanded">
                <li>
                  <a routerLink="/vente" (click)="closeMobileMenu()"
                    >Vue d'ensemble</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/vente/salarie-independant"
                    (click)="closeMobileMenu()"
                    >Salarié et indépendants</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/vente/passage-en-societe"
                    (click)="closeMobileMenu()"
                    >Passage en société</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/vente/compte-courant"
                    (click)="closeMobileMenu()"
                    >Compte Courant administrateur</a
                  >
                </li>
              </ul>
            </li>

            <!-- Trésorerie avec sous-menu -->
            <li class="nav-expandable" [class.expanded]="tresorerieExpanded">
              <button class="nav-toggle" (click)="toggleTresorerie()">
                <i class="fas fa-chart-line"></i>
                <span>Trésorerie</span>
                <i class="fas fa-chevron-down nav-arrow"></i>
              </button>
              <ul class="nav-submenu" *ngIf="tresorerieExpanded">
                <li>
                  <a routerLink="/tresorerie" (click)="closeMobileMenu()"
                    >Vue d'ensemble</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/tresorerie/tresorerie-benefice"
                    (click)="closeMobileMenu()"
                    >Trésorerie vs Bénéfices</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/tresorerie/investir-tresorerie"
                    (click)="closeMobileMenu()"
                    >Investir sans risquer</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/tresorerie/optimiser-stock"
                    (click)="closeMobileMenu()"
                    >Optimisez vos Stocks</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/tresorerie/alerte-tresorerie"
                    (click)="closeMobileMenu()"
                    >Alerte concurrence</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/tresorerie/proteger-sa-tresorerie"
                    (click)="closeMobileMenu()"
                    >Protégez Votre Trésorerie</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/tresorerie/anticiper-sa-tresorerie"
                    (click)="closeMobileMenu()"
                    >Anticipez vos Finances</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/tresorerie/accompagnement"
                    (click)="closeMobileMenu()"
                    >Service d'accompagnement</a
                  >
                </li>
              </ul>
            </li>

            <li class="nav-section">
              <span class="nav-section-title">Support</span>
            </li>
            <li>
              <a routerLink="/tarif" (click)="closeMobileMenu()">
                <i class="fas fa-euro-sign"></i>
                <span>Tarifs</span>
              </a>
            </li>
            <li>
              <a routerLink="/contact" (click)="closeMobileMenu()">
                <i class="fas fa-envelope"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>

          <!-- CTA dans le menu -->
          <div class="mobile-nav-cta">
            <a
              routerLink="/contact"
              class="nav-cta-button"
              (click)="closeMobileMenu()"
            >
              <i class="fas fa-phone"></i>
              <span>Consultation gratuite</span>
            </a>
          </div>
        </nav>
      </div>

      <!-- Contenu principal -->
      <main class="mobile-main" [style.margin-top.px]="headerHeight">
        <router-outlet></router-outlet>
      </main>

      <!-- Navigation bottom adaptive -->
      <nav class="mobile-bottom-nav" *ngIf="showBottomNav">
        <a
          routerLink="/accueil"
          class="bottom-nav-item"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <i class="fas fa-home"></i>
          <span>Accueil</span>
        </a>
        <!-- <button class="bottom-nav-item" (click)="openQuickServices()">
          <i class="fas fa-th-large"></i>
          <span>Menu</span>
        </button> -->
        <a
          routerLink="/about"
          class="bottom-nav-item"
          routerLinkActive="active"
        >
          <i class="fas fa-info-circle"></i>
          <span>À propos</span>
        </a>
        <!-- Bouton central avec action rapide -->
        <button class="bottom-nav-item bottom-nav-cta" (click)="quickAction()">
          <i class="fas fa-phone"></i>
          <span>Appel</span>
        </button>
        <a
          routerLink="/tarif"
          class="bottom-nav-item"
          routerLinkActive="active"
        >
          <i class="fas fa-euro-sign"></i>
          <span>Tarifs</span>
        </a>
        <a
          routerLink="/contact"
          class="bottom-nav-item"
          routerLinkActive="active"
        >
          <i class="fas fa-envelope"></i>
          <span>Contact</span>
        </a>
      </nav>

      <!-- FAB Menu principal -->
      <button
        class="fab-menu"
        (click)="toggleMobileMenu()"
        [class.active]="isMobileMenuOpen"
        aria-label="Menu principal"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Fab pour scroll to top -->
      <button
        class="scroll-to-top"
        *ngIf="showScrollTop"
        (click)="scrollToTop()"
        aria-label="Retour en haut"
      >
        <i class="fas fa-arrow-up"></i>
      </button>
    </div>
  `,
  styleUrls: ['./mobile-layout.component.scss'],
})
export class MobileLayoutComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private router = inject(Router);

  // État du composant
  isMobileMenuOpen = false;
  servicesExpanded = false;
  secteurActiviteExpanded = false;
  boostezEntrepriseExpanded = false;
  tresorerieExpanded = false;
  isScrolled = false;
  showScrollTop = false;
  scrollProgress = 0;

  // Navigation
  currentPageTitle = '';
  showBackButton = false;
  showBottomNav = true;
  headerHeight = 60;

  // Titres des pages
  private pageTitles: { [key: string]: string } = {
    '/accueil': '',
    '/about': 'À propos',
    '/services': 'Services',
    '/tarif': 'Tarifs',
    '/contact': 'Contact',
  };

  ngOnInit(): void {
    // Écouter les changements de route
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event: NavigationEnd) => {
        this.updatePageInfo(event.url);
        this.closeMobileMenu();
      });

    // Initialiser l'état de la page actuelle
    this.updatePageInfo(this.router.url);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    // État de scroll
    this.isScrolled = scrollTop > 10;
    this.showScrollTop = scrollTop > 300;

    // Progress bar
    if (documentHeight > 0) {
      this.scrollProgress = (scrollTop / documentHeight) * 100;
    }
  }

  private updatePageInfo(url: string): void {
    // Nettoyer l'URL
    const cleanUrl = url.split('?')[0].split('#')[0];

    // Définir le titre
    this.currentPageTitle = this.pageTitles[cleanUrl] || '';

    // Déterminer si on doit montrer le bouton retour
    this.showBackButton =
      cleanUrl.includes('/services/') ||
      cleanUrl.includes('/vente/') ||
      cleanUrl.includes('/tresorerie/');

    // Cacher la bottom nav sur certaines pages
    this.showBottomNav = !cleanUrl.includes('/avis-google');

    // Ajuster la hauteur du header selon la page
    this.headerHeight = this.showBackButton ? 70 : 60;
  }

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
    this.servicesExpanded = false;
    this.secteurActiviteExpanded = false;
    this.boostezEntrepriseExpanded = false;
    this.tresorerieExpanded = false;
    document.body.classList.remove('mobile-menu-open');
  }

  toggleServices(): void {
    this.servicesExpanded = !this.servicesExpanded;
  }

  toggleSecteurActivite(): void {
    this.secteurActiviteExpanded = !this.secteurActiviteExpanded;
  }

  toggleBoostezEntreprise(): void {
    this.boostezEntrepriseExpanded = !this.boostezEntrepriseExpanded;
  }

  toggleTresorerie(): void {
    this.tresorerieExpanded = !this.tresorerieExpanded;
  }

  goBack(): void {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      this.router.navigate(['/accueil']);
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  quickAction(): void {
    // Action rapide - appel téléphonique
    window.open('tel:+32123456789', '_self');
  }

  openQuickServices(): void {
    // Ouvre le menu ou navigue vers services selon le contexte
    if (this.router.url === '/accueil') {
      this.toggleMobileMenu();
    } else {
      this.router.navigate(['/services']);
    }
  }
}
