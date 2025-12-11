import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-mobile.component.html',
  styleUrls: ['./about-mobile.component.scss'],
})
export class AboutMobileComponent implements OnInit {
  // État du composant
  isScrolled = false;
  showContactForm = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialisation du composant
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 10;
  }

  // Navigation
  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  toggleMobileMenu(): void {
    // Logique pour ouvrir/fermer le menu mobile
    // Cette méthode peut être connectée au service de navigation global
    console.log('Toggle mobile menu');
  }

  navigateToServices(): void {
    this.router.navigate(['/services']);
  }

  contactNow(): void {
    // Action immédiate de contact
    this.showContactForm = true;
    // Peut déclencher l'ouverture d'un modal ou rediriger vers contact
    window.open('https://odoo.mfinances.be/book/4781b4d3', '_blank');
  }

  // Méthodes d'interaction
  callNow(): void {
    window.location.href = 'tel:+3225420432';
  }

  emailNow(): void {
    window.location.href = 'mailto:info@mfinances.be';
  }

  scheduleAppointment(): void {
    window.open('https://odoo.mfinances.be/book/4781b4d3', '_blank');
  }
}