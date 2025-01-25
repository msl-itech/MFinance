import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassageSocieteComponent } from '../passage-societe/passage-societe.component';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { VenteRoutingModule } from './vente-routing.module';
import { TimelineSocieteComponent } from '../timeline-societe/timeline-societe.component';
import { PromoSocieteComponent } from '../promo-societe/promo-societe.component';
import { TimelineGuerrePrixComponent } from '../timeline-guerre-prix/timeline-guerre-prix.component';
import { GuerrePrixComponent } from '../guerre-prix/guerre-prix.component';
import { SalarieIndependantComponent } from '../salarie-independant/salarie-independant.component';
import { CompteCourantAdministrateurComponent } from '../compte-courant-administrateur/compte-courant-administrateur.component';



@NgModule({
  declarations: [PassageSocieteComponent,TimelineSocieteComponent,PromoSocieteComponent,TimelineGuerrePrixComponent,GuerrePrixComponent,SalarieIndependantComponent,CompteCourantAdministrateurComponent],
  imports: [
    CommonModule,
    ShardeModuleModule,
    VenteRoutingModule
  ]
})
export class VenteModule { }
