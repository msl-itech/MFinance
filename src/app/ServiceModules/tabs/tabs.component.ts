import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  activeTab: string = 'services';

  switchTab(tabName: string): void {
    this.activeTab = tabName;
  }
}
