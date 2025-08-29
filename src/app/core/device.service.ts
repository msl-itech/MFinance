import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  private mobileUA = /Mobi|Android|iPhone|iPad|iPod/i;

  public isSmallScreen$: Observable<boolean>;
  public isMediumScreen$: Observable<boolean>;
  public isLargeScreen$: Observable<boolean>;

  // Subject pour le mode forcé
  private forcedModeSubject = new BehaviorSubject<'mobile' | 'desktop' | null>(
    null
  );
  public forcedMode$ = this.forcedModeSubject.asObservable();

  // Observable pour déterminer si on doit utiliser la version mobile
  public shouldUseMobileVersion$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isSmallScreen$ = this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .pipe(map((result: BreakpointState) => result.matches));

    this.isMediumScreen$ = this.breakpointObserver
      .observe(['(min-width: 769px) and (max-width: 1024px)'])
      .pipe(map((result: BreakpointState) => result.matches));

    this.isLargeScreen$ = this.breakpointObserver
      .observe(['(min-width: 1025px)'])
      .pipe(map((result: BreakpointState) => result.matches));

    // Initialiser le mode forcé depuis localStorage (si disponible)
    try {
      const stored = localStorage.getItem('app-forced-mode');
      if (stored && (stored === 'mobile' || stored === 'desktop')) {
        this.forcedModeSubject.next(stored);
      }
    } catch {}

    // Créer l'observable pour shouldUseMobileVersion
    this.shouldUseMobileVersion$ = combineLatest([
      this.isSmallScreen$,
      this.forcedMode$,
    ]).pipe(
      map(([isSmallScreen, forcedMode]) => {
        // Si un mode est forcé, l'utiliser
        if (forcedMode) return forcedMode === 'mobile';

        // Sinon, utiliser la détection User-Agent et taille d'écran
        return this.isMobileUA() || isSmallScreen;
      })
    );
  }

  /**
   * Détecte si l'appareil est mobile via User-Agent
   */
  isMobileUA(): boolean {
    return this.mobileUA.test(navigator.userAgent);
  }

  /**
   * Détecte si l'appareil est tactile
   */
  isTouchDevice(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  /**
   * Retourne le type d'appareil détecté (version synchrone pour compatibilité)
   */
  getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
    if (this.isMobileUA() || window.innerWidth <= 768) {
      return 'mobile';
    } else if (window.innerWidth <= 1024) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  /**
   * Force un type d'affichage (utile pour les tests)
   */
  setForcedMode(mode: 'mobile' | 'desktop' | null): void {
    this.forcedModeSubject.next(mode);
    try {
      localStorage.setItem('app-forced-mode', mode || '');
    } catch {}
  }

  getForcedMode(): 'mobile' | 'desktop' | null {
    return this.forcedModeSubject.value;
  }

  /**
   * Détermine si on doit utiliser la version mobile (version synchrone pour compatibilité)
   */
  shouldUseMobileVersion(): boolean {
    const forced = this.getForcedMode();
    if (forced) return forced === 'mobile';

    return this.isMobileUA() || window.innerWidth <= 768;
  }
}
