import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceService } from '../../core/device.service';
import { PassageSocieteMobileComponent } from '../../features-mobile/passage-societe-mobile/passage-societe-mobile.component';
import { BoosteEntrepriseComponent } from '../booste-entreprise/booste-entreprise.component';
import { CompteCourantAdministrateurComponent } from '../compte-courant-administrateur/compte-courant-administrateur.component';
import { PassageSocieteComponent } from '../passage-societe/passage-societe.component';
import { SalarieIndependantComponent } from '../salarie-independant/salarie-independant.component';

const routes: Routes = [
  { path: '', component: BoosteEntrepriseComponent },
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
  { path: 'compte-courant', component: CompteCourantAdministrateurComponent },
  { path: 'salarie-independant', component: SalarieIndependantComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenteRoutingModule {}
