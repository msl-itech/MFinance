import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DiagnosticContainerComponent } from './diagnostic-container.component';
import { DiagnosticResultComponent } from './diagnostic-result.component';
import { DiagnosticService } from './diagnostic.service';

/**
 * Module réutilisable pour les diagnostics interactifs
 *
 * Fonctionnalités:
 * - Questions interactives avec progression
 * - Système de scoring automatique
 * - Détection de profils
 * - Analyses détaillées
 * - Capture email optionnelle
 * - Sauvegarde localStorage
 *
 * Utilisation:
 * 1. Importer DiagnosticModule dans votre module
 * 2. Créer une config DiagnosticConfig
 * 3. Utiliser <app-diagnostic-container [config]="config"></app-diagnostic-container>
 */
@NgModule({
  declarations: [
    DiagnosticContainerComponent,
    DiagnosticResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DiagnosticContainerComponent,
    DiagnosticResultComponent
  ],
  providers: [
    DiagnosticService
  ]
})
export class DiagnosticModule { }
