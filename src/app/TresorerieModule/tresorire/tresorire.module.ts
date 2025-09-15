import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
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
import { TresorerieBeneficeComponent } from '../tresorerie-benefice/tresorerie-benefice.component';
import { TresoreriePageComponent } from '../tresorerie-page/tresorerie-page.component';
import { TresorerieMobileComponent } from '../../features-mobile/tresorerie-mobile/tresorerie-mobile.component';
import { ProtegerTresorerieMobileComponent } from '../../features-mobile/proteger-tresorerie-mobile/proteger-tresorerie-mobile.component';
import { StockTresorerieMobileComponent } from '../../features-mobile/stock-tresorerie-mobile/stock-tresorerie-mobile.component';
import { TresorireRoutingModule } from './tresorire-routing.module';

@NgModule({
  declarations: [
    TresoreriePageComponent,
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
  imports: [
    CommonModule,
    TresorireRoutingModule,
    ShardeModuleModule,
    FormsModule,
    TresorerieMobileComponent,
    ProtegerTresorerieMobileComponent,
    StockTresorerieMobileComponent,
  ],
})
export class TresorireModule {}
