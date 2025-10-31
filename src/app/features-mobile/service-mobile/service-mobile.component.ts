import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ZoneContactMobileComponent } from "../../zone-contact-mobile/zone-contact-mobile.component";

@Component({
  selector: 'app-service-mobile',
  standalone: true,
  imports: [CommonModule, RouterLink, ZoneContactMobileComponent],
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
