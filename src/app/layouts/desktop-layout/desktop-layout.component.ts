import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-desktop-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="desktop-layout">
      <!-- Navigation desktop -->
      <app-nav-bar></app-nav-bar>

      <!-- Contenu principal -->
      <main class="desktop-main">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer desktop -->
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./desktop-layout.component.scss'],
})
export class DesktopLayoutComponent {}
