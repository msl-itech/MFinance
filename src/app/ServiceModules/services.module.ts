import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComptabiliteMobileComponent } from '../features-mobile/comptabilite-mobile/comptabilite-mobile.component';
import { CreationEntrepriseMobileComponent } from '../features-mobile/creation-entreprise-mobile/creation-entreprise-mobile.component';
import { DeclarationImpotMobileComponent } from '../features-mobile/declaration-impot-mobile/declaration-impot-mobile.component';
import { FiscaliteMobileComponent } from '../features-mobile/fiscalite-mobile/fiscalite-mobile.component';
import { ShardeModuleModule } from '../sharde-module/sharde-module.module';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { CreationEntrepriseComponent } from './creation-entreprise/creation-entreprise.component';
import { DeclarationImpotComponent } from './declaration-impot/declaration-impot.component';
import { FiscaliteComponent } from './fiscalite/fiscalite.component';
import { PageServiceComponent } from './page-service/page-service.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesRoutingModule } from './services-routing.module';
import { TabsComponent } from './tabs/tabs.component';
import { CommentCaMarcheComponent } from './comment-ca-marche/comment-ca-marche.component';
import { IntroductionComptabiliteComponent } from './introduction-comptabilite/introduction-comptabilite.component';

@NgModule({
  declarations: [
    ComptabiliteComponent,
    PageServiceComponent,
    FiscaliteComponent,
    CreationEntrepriseComponent,
    DeclarationImpotComponent,
    PricingComponent,
    TabsComponent,
    CommentCaMarcheComponent,
    IntroductionComptabiliteComponent,
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ShardeModuleModule,
    CreationEntrepriseMobileComponent,
    FiscaliteMobileComponent,
    DeclarationImpotMobileComponent,
    ComptabiliteMobileComponent,
  ],
})
export class ServicesModule {}
