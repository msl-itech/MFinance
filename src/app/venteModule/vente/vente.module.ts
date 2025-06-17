import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { BoosteEntrepriseComponent } from '../booste-entreprise/booste-entreprise.component';
import { CompteCourantAdministrateurComponent } from '../compte-courant-administrateur/compte-courant-administrateur.component';
import { GuerrePrixComponent } from '../guerre-prix/guerre-prix.component';
import { PassageSocieteComponent } from '../passage-societe/passage-societe.component';
import { PromoSocieteComponent } from '../promo-societe/promo-societe.component';
import { SalarieIndependantComponent } from '../salarie-independant/salarie-independant.component';
import { TimelineGuerrePrixComponent } from '../timeline-guerre-prix/timeline-guerre-prix.component';
import { TimelineSocieteComponent } from '../timeline-societe/timeline-societe.component';
import { VenteRoutingModule } from './vente-routing.module';

@NgModule({
  declarations: [
    PassageSocieteComponent,
    TimelineSocieteComponent,
    PromoSocieteComponent,
    TimelineGuerrePrixComponent,
    GuerrePrixComponent,
    SalarieIndependantComponent,
    CompteCourantAdministrateurComponent,
    BoosteEntrepriseComponent,
  ],
  imports: [CommonModule, FormsModule, ShardeModuleModule, VenteRoutingModule],
})
export class VenteModule {}
