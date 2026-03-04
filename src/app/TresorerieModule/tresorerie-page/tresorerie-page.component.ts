import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticConfig, DiagnosticResult } from '../../shared/diagnostic';
import { DIAGNOSTIC_HUB_CONFIG } from './diagnostic-hub.config';

@Component({
  selector: 'app-tresorerie-page',
  templateUrl: './tresorerie-page.component.html',
  styleUrls: ['./tresorerie-page.component.scss']
})
export class TresoreriePageComponent implements OnInit {
  // Configuration du diagnostic hub
  diagnosticConfig: DiagnosticConfig = DIAGNOSTIC_HUB_CONFIG;

  // Contrôle de l'affichage du diagnostic
  showDiagnostic = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Vérifier si on doit afficher le diagnostic au chargement
    const hash = window.location.hash;
    if (hash === '#diagnostic') {
      this.showDiagnostic = true;
      setTimeout(() => {
        this.scrollToSection('diagnosticSection');
      }, 100);
    }
  }

  /**
   * Affiche le diagnostic et scroll jusqu'à la section
   */
  startDiagnostic(): void {
    this.showDiagnostic = true;
    setTimeout(() => {
      this.scrollToSection('diagnosticSection');
    }, 100);
  }

  /**
   * Callback appelé quand le diagnostic est terminé
   */
  onDiagnosticComplete(result: DiagnosticResult): void {
    console.log('Diagnostic hub terminé:', result);

    // Redirection automatique vers page spécifique si profil détecté
    if (result.redirectUrl) {
      console.log('Redirection vers:', result.redirectUrl);

      // Afficher un message avant redirection
      setTimeout(() => {
        this.router.navigate([result.redirectUrl]);
      }, 5000); // 5 secondes pour lire le résultat
    }
  }

  /**
   * Scroll vers une section spécifique
   */
  scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
} 