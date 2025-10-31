import { Component, inject } from '@angular/core';
import { DeviceService } from '../core/device.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public deviceService = inject(DeviceService);
}
