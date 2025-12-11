import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceService } from '../core/device.service';
import { CreationEntrepriseMobileComponent } from '../features-mobile/creation-entreprise-mobile/creation-entreprise-mobile.component';
import { DeclarationImpotMobileComponent } from '../features-mobile/declaration-impot-mobile/declaration-impot-mobile.component';
import { FiscaliteMobileComponent } from '../features-mobile/fiscalite-mobile/fiscalite-mobile.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { CreationEntrepriseComponent } from './creation-entreprise/creation-entreprise.component';
import { DeclarationImpotComponent } from './declaration-impot/declaration-impot.component';
import { FiscaliteComponent } from './fiscalite/fiscalite.component';
import { PageServiceComponent } from './page-service/page-service.component';
import { ComptabiliteMobileComponent } from '../features-mobile/comptabilite-mobile/comptabilite-mobile.component';
import { ServiceMobileComponent } from '../features-mobile/service-mobile/service-mobile.component';
import { DepartementComptableComponent } from './departement-comptable/departement-comptable.component';
const routes: Routes = [
     {
    path: '',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return !deviceService.shouldUseMobileVersion();
      },
    ],
    component: PageServiceComponent,
  },
  {
    path: '',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return deviceService.shouldUseMobileVersion();
      },
    ],
    component: ServiceMobileComponent,
  },
  //   {
  //   path: 'comptabilite',
  //   canMatch: [
  //     () => {
  //       const deviceService = inject(DeviceService);
  //       return !deviceService.shouldUseMobileVersion();
  //     },
  //   ],
  //   component: ComptabiliteComponent,
  // },
  // {
  //   path: 'comptabilite',
  //   canMatch: [
  //     () => {
  //       const deviceService = inject(DeviceService);
  //       return deviceService.shouldUseMobileVersion();
  //     },
  //   ],
  //   component: ComptabiliteMobileComponent,
  // },
      { path: 'comptabilite', component: ComptabiliteComponent },
  {
    path: 'creation-entreprise',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return !deviceService.shouldUseMobileVersion();
      },
    ],
    component: CreationEntrepriseComponent,
  },
  {
    path: 'creation-entreprise',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return deviceService.shouldUseMobileVersion();
      },
    ],
    component: CreationEntrepriseMobileComponent,
  },

  {
    path: 'declaration-impot',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return !deviceService.shouldUseMobileVersion();
      },
    ],
    component: DeclarationImpotComponent,
  },
  {
    path: 'declaration-impot',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return deviceService.shouldUseMobileVersion();
      },
    ],
    component: DeclarationImpotMobileComponent,
  },
  {
    path: 'fiscalite',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return !deviceService.shouldUseMobileVersion();
      },
    ],
    component: FiscaliteComponent,
  },
  {
    path: 'fiscalite',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return deviceService.shouldUseMobileVersion();
      },
    ],
    component: FiscaliteMobileComponent,
  },
  // {
  //   path: 'departement-comptable',
  //   canMatch: [
  //     () => {
  //       const deviceService = inject(DeviceService);
  //       return !deviceService.shouldUseMobileVersion();
  //     },
  //   ],
  //   component: DepartementComptableComponent,
  // },
    { path: 'departement-comptable', component: DepartementComptableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
