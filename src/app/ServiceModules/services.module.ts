import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { PageServiceComponent } from './page-service/page-service.component';
import { ShardeModuleModule } from '../sharde-module/sharde-module.module';
import { FiscaliteComponent } from './fiscalite/fiscalite.component';
import { CreationEntrepriseComponent } from './creation-entreprise/creation-entreprise.component';
import { DeclarationImpotComponent } from './declaration-impot/declaration-impot.component';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [
    ComptabiliteComponent,
    PageServiceComponent,
    FiscaliteComponent,
    CreationEntrepriseComponent,
    DeclarationImpotComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ShardeModuleModule
  ]
})
export class ServicesModule { }
