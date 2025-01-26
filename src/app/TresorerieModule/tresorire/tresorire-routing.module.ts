import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TresorerieBeneficeComponent } from '../tresorerie-benefice/tresorerie-benefice.component';
import { InvestirTresorerieComponent } from '../investir-tresorerie/investir-tresorerie.component';
import { StockTresorerieComponent } from '../stock-tresorerie/stock-tresorerie.component';

const routes: Routes = [
  { path: 'tresorerie-benefice', component: TresorerieBeneficeComponent },
  { path: 'investir-tresorerie', component: InvestirTresorerieComponent },
  { path: 'optimiser-stock', component: StockTresorerieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TresorireRoutingModule { }
