import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-service-departement',
  templateUrl: './service-departement.component.html',
  styleUrl: './service-departement.component.css'
})
export class ServiceDepartementComponent implements OnInit, AfterViewInit {
  currentIndex: number = 0;

  ngOnInit(): void {
    // Initialisation
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
    this.setupServiceItemListeners();
  }

  setupServiceItemListeners(): void {
    const serviceItems = document.querySelectorAll('.service-item');
    const serviceImages = document.querySelectorAll('.service-img');

    serviceItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        this.activateService(index, serviceItems, serviceImages);
      });

      item.addEventListener('click', () => {
        this.activateService(index, serviceItems, serviceImages);
      });
    });
  }

  activateService(index: number, items: NodeListOf<Element>, images: NodeListOf<Element>): void {
    this.currentIndex = index;

    // Désactiver tous les items et images
    items.forEach(i => i.classList.remove('active'));
    images.forEach(img => img.classList.remove('active'));

    // Activer l'item et l'image correspondante
    items[index].classList.add('active');
    images[index].classList.add('active');
  }

  setupIntersectionObserver(): void {
    const options = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, options);

    // Observer tous les service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => observer.observe(item));
  }
}
