import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../core/device.service';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor(
    private metaService: MetaService,
    public deviceService: DeviceService
  ) {}

  ngOnInit() {
    // Utilisation du service de meta-données pour définir les meta-tags de la page À propos
    this.metaService.setAboutPageMeta();
  }
}
