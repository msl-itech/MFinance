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
import { OdooLogoSliderComponent } from './comptabilite/odoo-logo-slider/odoo-logo-slider.component';
import { HeroSectionComponent } from './comptabilite/hero-section/hero-section.component';
import { DepartementComptableComponent } from './departement-comptable/departement-comptable.component';
import { ServiceDepartementComponent } from './departement-comptable/service-departement/service-departement.component';
import { WhyExternalisedComponent } from './departement-comptable/why-externalised/why-externalised.component';
import { AvantagesComponent } from './departement-comptable/avantages/avantages.component';
import { ProfilComponent } from './comptabilite/profil/profil.component';

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
    OdooLogoSliderComponent,
    HeroSectionComponent,
    DepartementComptableComponent,
    ServiceDepartementComponent,
    WhyExternalisedComponent,
    AvantagesComponent,
    ProfilComponent,
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
export class ServicesModule { }
