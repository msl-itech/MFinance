import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { StockTresorerieComponent } from '../../venteModule/stock-tresorerie/stock-tresorerie.component';
import { TimelineStockComponent } from '../../venteModule/timeline-stock/timeline-stock.component';
import { AnticiperTresorerieComponent } from '../anticiper-tresorerie/anticiper-tresorerie.component';
import { BlockFidelisationComponent } from '../block-fidelisation/block-fidelisation.component';
import { BlockNegligerTresorerieComponent } from '../block-negliger-tresorerie/block-negliger-tresorerie.component';
import { BlockSurveillanceComponent } from '../block-surveillance/block-surveillance.component';
import { InvestirTresorerieComponent } from '../investir-tresorerie/investir-tresorerie.component';
import { ProtegerTresorerieComponent } from '../proteger-tresorerie/proteger-tresorerie.component';
import { TimelineTresorieComponent } from '../timeline-tresorie/timeline-tresorie.component';
import { TransformezTresorerieComponent } from '../transformez-tresorerie/transformez-tresorerie.component';
import { TresorerieBeneficeComponent } from '../tresorerie-benefice/tresorerie-benefice.component';
import { TresorireRoutingModule } from './tresorire-routing.module';

@NgModule({
  declarations: [
    TransformezTresorerieComponent,
    TresorerieBeneficeComponent,
    TimelineTresorieComponent,
    InvestirTresorerieComponent,
    StockTresorerieComponent,
    ProtegerTresorerieComponent,
    BlockFidelisationComponent,
    BlockSurveillanceComponent,
    BlockNegligerTresorerieComponent,
    AnticiperTresorerieComponent,
    TimelineStockComponent,
  ],
  imports: [CommonModule, TresorireRoutingModule, ShardeModuleModule],
})
export class TresorireModule {}
