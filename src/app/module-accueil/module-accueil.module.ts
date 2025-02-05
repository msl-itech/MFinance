import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAccueilRoutingModule } from './module-accueil-routing.module';
import { ShardeModuleModule } from '../sharde-module/sharde-module.module';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfilTypeComponent } from '../profil-type/profil-type.component';
import { WhyChoiseComponent } from '../why-choise/why-choise.component';
import { HeaderAccueilComponent } from '../header-accueil/header-accueil.component';
import { CeoSectionComponent } from '../ceo-section/ceo-section.component';
import { PodcastAccueilComponent } from '../podcast-accueil/podcast-accueil.component';


@NgModule({
  declarations: [
    AccueilComponent,
    ProfilTypeComponent,
    WhyChoiseComponent,
    HeaderAccueilComponent,
    CeoSectionComponent,
    PodcastAccueilComponent
  ],
  imports: [
    CommonModule,
    ModuleAccueilRoutingModule,
    ShardeModuleModule
  ]
})
export class ModuleAccueilModule { }
