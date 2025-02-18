import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isSidebarActive: boolean = false;
  activeSubmenus: { [key: string]: boolean } = {};

  ngOnInit() {
    this.initializeMobileMenu();
  }

  private initializeMobileMenu() {
    // Sélecteurs pour le menu mobile
    const menuToggle = document.querySelector('.mobile-nav-icon') as HTMLElement;
    const menuClose = document.querySelector('.menu-close') as HTMLElement;
    const sidebar = document.querySelector('.mobile-sidebar') as HTMLElement;
    const overlay = document.querySelector('.overlay') as HTMLElement;

    // Fonction pour basculer le menu
    const toggleSidebar = () => {
      sidebar.classList.toggle('mobile-menu-active');
      overlay.classList.toggle('active');
    };

    // Ajout des écouteurs d'événements
    menuToggle?.addEventListener('click', toggleSidebar);
    menuClose?.addEventListener('click', toggleSidebar);
    overlay?.addEventListener('click', toggleSidebar);

    // Gestion des sous-menus
    const submenuLinks = document.querySelectorAll('.mobile-nav-list .has-submenu');
    submenuLinks.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const submenu = (item as HTMLElement).nextElementSibling as HTMLElement;
        if (submenu && submenu.classList.contains('sub-menu')) {
          submenu.classList.toggle('open');
        }
      });
    });
  }

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  toggleSubmenu(menu: string): void {
    for (let key in this.activeSubmenus) {
      if (key !== menu) {
        this.activeSubmenus[key] = false;
      }
    }
    this.activeSubmenus[menu] = !this.activeSubmenus[menu];
  }
}
