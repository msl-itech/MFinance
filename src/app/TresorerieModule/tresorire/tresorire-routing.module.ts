import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TresorerieBeneficeComponent } from '../tresorerie-benefice/tresorerie-benefice.component';
import { InvestirTresorerieComponent } from '../investir-tresorerie/investir-tresorerie.component';
import { StockTresorerieComponent } from '../stock-tresorerie/stock-tresorerie.component';
import { AlerteTresorerieComponent } from '../alerte-tresorerie/alerte-tresorerie.component';
import { ProtegerTresorerieComponent } from '../proteger-tresorerie/proteger-tresorerie.component';
import { AnticiperTresorerieComponent } from '../anticiper-tresorerie/anticiper-tresorerie.component';

const routes: Routes = [
  { path: 'tresorerie-benefice', component: TresorerieBeneficeComponent },
  { path: 'investir-tresorerie', component: InvestirTresorerieComponent },
  { path: 'optimiser-stock', component: StockTresorerieComponent },
  { path: 'alerte-tresorerie', component: AlerteTresorerieComponent },
  { path: 'proteger-sa-tresorerie', component: ProtegerTresorerieComponent },
  { path: 'anticiper-sa-tresorerie', component: AnticiperTresorerieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TresorireRoutingModule { }
