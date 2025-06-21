import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CeoSectionComponent } from '../ceo-section/ceo-section.component';
import { HeaderAccueilComponent } from '../header-accueil/header-accueil.component';
import { PodcastAccueilComponent } from '../podcast-accueil/podcast-accueil.component';
import { ProfilTypeComponent } from '../profil-type/profil-type.component';
import { ShardeModuleModule } from '../sharde-module/sharde-module.module';
import { ImageOptimizerDirective } from '../shared/image-optimizer.directive';
import { WhyChoiseComponent } from '../why-choise/why-choise.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ModuleAccueilRoutingModule } from './module-accueil-routing.module';

@NgModule({
  declarations: [
    AccueilComponent,
    ProfilTypeComponent,
    HeaderAccueilComponent,
    PodcastAccueilComponent,
  ],
  imports: [
    CommonModule,
    ModuleAccueilRoutingModule,
    ShardeModuleModule,
    ImageOptimizerDirective,
    // Composants standalone
    WhyChoiseComponent,
    CeoSectionComponent,
  ],
})
export class ModuleAccueilModule {}
