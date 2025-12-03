import { Component } from '@angular/core';

@Component({
  selector: 'app-why-externalised',
  templateUrl: './why-externalised.component.html',
  styleUrl: './why-externalised.component.css'
})
export class WhyExternalisedComponent {
  isModalVisible: boolean = false;

  openModal(): void {
    this.isModalVisible = true;
    // Empêcher le scroll du body quand le modal est ouvert
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalVisible = false;
    // Réactiver le scroll du body
    document.body.style.overflow = '';
  }
}
