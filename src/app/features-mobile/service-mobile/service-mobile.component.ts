import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-mobile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-mobile.component.html',
  styleUrls: ['./service-mobile.component.scss'],
})
export class ServiceMobileComponent {
  showContactModal = false;

  openContactModal(): void {
    this.showContactModal = true;
    document.body.classList.add('modal-open');
  }

  closeContactModal(): void {
    this.showContactModal = false;
    document.body.classList.remove('modal-open');
  }
}
