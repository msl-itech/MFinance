import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceService } from '../../core/device.service';
import { AlerteTresorerieMobileComponent } from '../../features-mobile/alerte-tresorerie-mobile/alerte-tresorerie-mobile.component';
import { AnticipeTresorerieMobileComponent } from '../../features-mobile/anticipe-tresorerie-mobile/anticipe-tresorerie-mobile.component';
import { InvestirTresorerieMobileComponent } from '../../features-mobile/investir-tresorerie-mobile/investir-tresorerie-mobile.component';
import { StockTresorerieMobileComponent } from '../../features-mobile/stock-tresorerie-mobile/stock-tresorerie-mobile.component';
import { TresorerieBeneficeMobileComponent } from '../../features-mobile/tresorerie-benefice-mobile/tresorerie-benefice-mobile.component';
import { TresorerieMobileComponent } from '../../features-mobile/tresorerie-mobile/tresorerie-mobile.component';
import { StockTresorerieComponent } from '../../venteModule/stock-tresorerie/stock-tresorerie.component';
import { AccompagnementComponent } from '../accompagnement/accompagnement.component';
import { AlerteTresorerieComponent } from '../alerte-tresorerie/alerte-tresorerie.component';
import { AnticiperTresorerieComponent } from '../anticiper-tresorerie/anticiper-tresorerie.component';
import { InvestirTresorerieComponent } from '../investir-tresorerie/investir-tresorerie.component';
import { ProtegerTresorerieComponent } from '../proteger-tresorerie/proteger-tresorerie.component';
import { TresorerieBeneficeComponent } from '../tresorerie-benefice/tresorerie-benefice.component';
import { TresoreriePageComponent } from '../tresorerie-page/tresorerie-page.component';

const routes: Routes = [
  {
    path: '',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return !deviceService.shouldUseMobileVersion();
      },
    ],
    component: TresoreriePageComponent,
  },
  {
    path: '',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return deviceService.shouldUseMobileVersion();
      },
    ],
    component: TresorerieMobileComponent,
  },

  {
    path: 'tresorerie-benefice',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return !deviceService.shouldUseMobileVersion();
      },
    ],
    component: TresorerieBeneficeComponent,
  },
  {
    path: 'tresorerie-benefice',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return deviceService.shouldUseMobileVersion();
      },
    ],
    component: TresorerieBeneficeMobileComponent,
  },
  {
    path: 'investir-tresorerie',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return !deviceService.shouldUseMobileVersion();
      },
    ],
    component: InvestirTresorerieComponent,
  },
  {
    path: 'investir-tresorerie',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return deviceService.shouldUseMobileVersion();
      },
    ],
    component: InvestirTresorerieMobileComponent,
  },

  {
    path: 'optimiser-stock',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return !deviceService.shouldUseMobileVersion();
      },
    ],
    component: StockTresorerieComponent,
  },
  {
    path: 'optimiser-stock',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return deviceService.shouldUseMobileVersion();
      },
    ],
    component: StockTresorerieMobileComponent,
  },
  {
    path: 'alerte-tresorerie',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return !deviceService.shouldUseMobileVersion();
      },
    ],
    component: AlerteTresorerieComponent,
  },
  {
    path: 'alerte-tresorerie',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return deviceService.shouldUseMobileVersion();
      },
    ],
    component: AlerteTresorerieMobileComponent,
  },
  { path: 'proteger-sa-tresorerie', component: ProtegerTresorerieComponent },

  {
    path: 'anticiper-sa-tresorerie',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return !deviceService.shouldUseMobileVersion();
      },
    ],
    component: AnticiperTresorerieComponent,
  },
  {
    path: 'anticiper-sa-tresorerie',
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return deviceService.shouldUseMobileVersion();
      },
    ],
    component: AnticipeTresorerieMobileComponent,
  },
  { path: 'accompagnement', component: AccompagnementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TresorireRoutingModule {}
