import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockTresorerieComponent } from '../../venteModule/stock-tresorerie/stock-tresorerie.component';
import { AccompagnementComponent } from '../accompagnement/accompagnement.component';
import { AlerteTresorerieComponent } from '../alerte-tresorerie/alerte-tresorerie.component';
import { AnticiperTresorerieComponent } from '../anticiper-tresorerie/anticiper-tresorerie.component';
import { InvestirTresorerieComponent } from '../investir-tresorerie/investir-tresorerie.component';
import { ProtegerTresorerieComponent } from '../proteger-tresorerie/proteger-tresorerie.component';
import { TransformezTresorerieComponent } from '../transformez-tresorerie/transformez-tresorerie.component';
import { TresorerieBeneficeComponent } from '../tresorerie-benefice/tresorerie-benefice.component';

const routes: Routes = [
  { path: '', component: TransformezTresorerieComponent },
  { path: 'tresorerie-benefice', component: TresorerieBeneficeComponent },
  { path: 'investir-tresorerie', component: InvestirTresorerieComponent },
  { path: 'optimiser-stock', component: StockTresorerieComponent },
  { path: 'alerte-tresorerie', component: AlerteTresorerieComponent },
  { path: 'proteger-sa-tresorerie', component: ProtegerTresorerieComponent },
  { path: 'anticiper-sa-tresorerie', component: AnticiperTresorerieComponent },
  { path: 'accompagnement', component: AccompagnementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TresorireRoutingModule {}
