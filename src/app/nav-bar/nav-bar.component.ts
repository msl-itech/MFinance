import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isSidebarActive: boolean = false;
  // Track open submenus by their ID/Key
  openSubmenus: Set<string> = new Set<string>();

  constructor() { }

  ngOnInit() {
    // No manual query selectors needed
  }

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
    if (!this.isSidebarActive) {
      this.closeAllSubmenus();
    }
  }

  closeSidebar(): void {
    this.isSidebarActive = false;
    this.closeAllSubmenus();
  }

  toggleSubmenu(menuKey: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (this.openSubmenus.has(menuKey)) {
      this.openSubmenus.delete(menuKey);
    } else {
      // Optional: Close others if we want accordion behavior (only one open at a time)
      // this.openSubmenus.clear(); 
      this.openSubmenus.add(menuKey);
    }
  }

  isSubmenuOpen(menuKey: string): boolean {
    return this.openSubmenus.has(menuKey);
  }

  private closeAllSubmenus(): void {
    this.openSubmenus.clear();
  }
}
