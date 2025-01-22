import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassageSocieteComponent } from '../passage-societe/passage-societe.component';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { VenteRoutingModule } from './vente-routing.module';
import { TimelineSocieteComponent } from '../timeline-societe/timeline-societe.component';
import { PromoSocieteComponent } from '../promo-societe/promo-societe.component';



@NgModule({
  declarations: [PassageSocieteComponent,TimelineSocieteComponent,PromoSocieteComponent],
  imports: [
    CommonModule,
    ShardeModuleModule,
    VenteRoutingModule
  ]
})
export class VenteModule { }
