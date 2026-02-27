import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceService } from '../../core/device.service';
import { CompteCourantAdministrateurMobileComponent } from '../../features-mobile/compte-courant-administrateur-mobile/compte-courant-administrateur-mobile.component';
import { PassageSocieteMobileComponent } from '../../features-mobile/passage-societe-mobile/passage-societe-mobile.component';
import { BoosteEntrepriseComponent } from '../booste-entreprise/booste-entreprise.component';
import { CompteCourantAdministrateurComponent } from '../compte-courant-administrateur/compte-courant-administrateur.component';
import { PassageSocieteComponent } from '../passage-societe/passage-societe.component';
import { SalarieIndependantComponent } from '../salarie-independant/salarie-independant.component';
import { BoosteEntrepriseMobileComponent } from '../../features-mobile/booste-entreprise-mobile/booste-entreprise-mobile.component';

const routes: Routes = [
  // ============================================
  // REDIRECTIONS (ordre important - avant les routes réelles)
  // ============================================
  { path: 'compte-courant', redirectTo: 'compte-courant-administrateur', pathMatch: 'full' },
  { path: 'salarie-independant', redirectTo: 'salarie-vers-independant', pathMatch: 'full' },

  // ============================================
  // ROUTES RÉELLES
  // ============================================
    {
      path: '',
      canMatch: [
        () => {
          const deviceService = inject(DeviceService);
          return !deviceService.shouldUseMobileVersion();
        },
      ],
      component: BoosteEntrepriseComponent,
    },
    {
      path: '',
      canMatch: [
        () => {
          const deviceService = inject(DeviceService);
          return deviceService.shouldUseMobileVersion();
        },
      ],
      component: BoosteEntrepriseMobileComponent,
    },
  {
    path: 'passage-en-societe',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return !deviceService.shouldUseMobileVersion();
      },
    ],
    component: PassageSocieteComponent,
  },
  {
    path: 'passage-en-societe',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return deviceService.shouldUseMobileVersion();
      },
    ],
    component: PassageSocieteMobileComponent,
  },
  {
    path: 'compte-courant-administrateur',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return !deviceService.shouldUseMobileVersion();
      },
    ],
    component: CompteCourantAdministrateurComponent,
  },
  {
    path: 'compte-courant-administrateur',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return deviceService.shouldUseMobileVersion();
      },
    ],
    component: CompteCourantAdministrateurMobileComponent,
  },

  { path: 'salarie-vers-independant', component: SalarieIndependantComponent },
];

// Note: Le dossier et fichier gardent leur nom original (vente-routing.module.ts)
// pour préserver l'historique Git. Seule la classe est renommée.
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrategieRoutingModule {}
