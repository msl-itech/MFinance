import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceService } from './core/device.service';
import { DESKTOP_ROUTES } from './routing/routes.desktop';
import { MOBILE_ROUTES } from './routing/routes.mobile';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';

// Fonction pour obtenir les routes appropriées selon l'appareil
function getRoutes(): Routes {
  const deviceService = inject(DeviceService);
  return deviceService.shouldUseMobileVersion()
    ? MOBILE_ROUTES
    : DESKTOP_ROUTES;
}

const routes: Routes = [
  {
    path: '',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return !deviceService.shouldUseMobileVersion();
      },
    ],
    children: DESKTOP_ROUTES,
  },
  {
    path: '',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return deviceService.shouldUseMobileVersion();
      },
    ],
    children: MOBILE_ROUTES,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
