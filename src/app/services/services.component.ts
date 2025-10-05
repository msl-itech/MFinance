import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(private router: Router) {}

  navigateAndScroll(route: string): void {
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      // Rafraîchir AOS après navigation
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    });
  }
}
