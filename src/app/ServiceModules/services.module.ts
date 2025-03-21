import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShardeModuleModule } from '../sharde-module/sharde-module.module';

import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { CreationEntrepriseComponent } from './creation-entreprise/creation-entreprise.component';
import { DeclarationImpotComponent } from './declaration-impot/declaration-impot.component';
import { FiscaliteComponent } from './fiscalite/fiscalite.component';
import { PageServiceComponent } from './page-service/page-service.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [
    ComptabiliteComponent,
    PageServiceComponent,
    FiscaliteComponent,
    CreationEntrepriseComponent,
    DeclarationImpotComponent,
    PricingComponent,
  ],
  imports: [CommonModule, ServicesRoutingModule, ShardeModuleModule],
})
export class ServicesModule {}
