import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TresorireRoutingModule } from './tresorire-routing.module';
import { TresorerieBeneficeComponent } from '../tresorerie-benefice/tresorerie-benefice.component';
import { TimelineTresorieComponent } from '../timeline-tresorie/timeline-tresorie.component';
import { ShardeModuleModule } from "../../sharde-module/sharde-module.module";
import { InvestirTresorerieComponent } from '../investir-tresorerie/investir-tresorerie.component';
import { StockTresorerieComponent } from '../stock-tresorerie/stock-tresorerie.component';


@NgModule({
  declarations: [TresorerieBeneficeComponent,TimelineTresorieComponent,InvestirTresorerieComponent,StockTresorerieComponent],
  imports: [
    CommonModule,
    TresorireRoutingModule,
    ShardeModuleModule
]
})
export class TresorireModule { }
