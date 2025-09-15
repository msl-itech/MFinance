import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TresorerieBeneficeComponent } from '../tresorerie-benefice/tresorerie-benefice.component';
import { InvestirTresorerieComponent } from '../investir-tresorerie/investir-tresorerie.component';
import { StockTresorerieComponent } from '../../venteModule/stock-tresorerie/stock-tresorerie.component';
import { StockTresorerieMobileComponent } from '../../features-mobile/stock-tresorerie-mobile/stock-tresorerie-mobile.component';
import { AlerteTresorerieComponent } from '../alerte-tresorerie/alerte-tresorerie.component';
import { ProtegerTresorerieComponent } from '../proteger-tresorerie/proteger-tresorerie.component';
import { AnticiperTresorerieComponent } from '../anticiper-tresorerie/anticiper-tresorerie.component';
import { AccompagnementComponent } from '../accompagnement/accompagnement.component';
import { TresoreriePageComponent } from '../tresorerie-page/tresorerie-page.component';
import { TresorerieMobileComponent } from '../../features-mobile/tresorerie-mobile/tresorerie-mobile.component';
import { DeviceService } from '../../core/device.service';

const routes: Routes = [
  { 
    path: '', 
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return !deviceService.shouldUseMobileVersion();
      },
    ],
    component: TresoreriePageComponent 
  },
  { 
    path: '', 
    canMatch: [
      () => {
        const deviceService = inject(DeviceService);
        return deviceService.shouldUseMobileVersion();
      },
    ],
    component: TresorerieMobileComponent 
  },
  { path: 'tresorerie-benefice', component: TresorerieBeneficeComponent },
  { path: 'investir-tresorerie', component: InvestirTresorerieComponent },
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
  { path: 'alerte-tresorerie', component: AlerteTresorerieComponent },
  { path: 'proteger-sa-tresorerie', component: ProtegerTresorerieComponent },
  { path: 'anticiper-sa-tresorerie', component: AnticiperTresorerieComponent },
  { path: 'accompagnement', component: AccompagnementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TresorireRoutingModule { }
