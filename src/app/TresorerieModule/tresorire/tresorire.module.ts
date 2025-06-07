import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TresorireRoutingModule } from './tresorire-routing.module';
import { TresorerieBeneficeComponent } from '../tresorerie-benefice/tresorerie-benefice.component';
import { TimelineTresorieComponent } from '../timeline-tresorie/timeline-tresorie.component';
import { ShardeModuleModule } from "../../sharde-module/sharde-module.module";
import { InvestirTresorerieComponent } from '../investir-tresorerie/investir-tresorerie.component';
import { StockTresorerieComponent } from '../../venteModule/stock-tresorerie/stock-tresorerie.component';
import { ProtegerTresorerieComponent } from '../proteger-tresorerie/proteger-tresorerie.component';
import { BlockFidelisationComponent } from '../block-fidelisation/block-fidelisation.component';
import { BlockSurveillanceComponent } from '../block-surveillance/block-surveillance.component';
import { BlockNegligerTresorerieComponent } from '../block-negliger-tresorerie/block-negliger-tresorerie.component';
import { AnticiperTresorerieComponent } from '../anticiper-tresorerie/anticiper-tresorerie.component';
import { TimelineStockComponent } from '../../venteModule/timeline-stock/timeline-stock.component';
import { TresoreriePageComponent } from '../tresorerie-page/tresorerie-page.component';

@NgModule({
  declarations: [TresoreriePageComponent,TresorerieBeneficeComponent,TimelineTresorieComponent,InvestirTresorerieComponent,StockTresorerieComponent,ProtegerTresorerieComponent,BlockFidelisationComponent,BlockSurveillanceComponent,BlockNegligerTresorerieComponent,AnticiperTresorerieComponent,TimelineStockComponent],
  imports: [
    CommonModule,
    TresorireRoutingModule,
    ShardeModuleModule
]
})
export class TresorireModule { }
