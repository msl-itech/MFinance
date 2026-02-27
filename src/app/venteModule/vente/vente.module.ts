import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { PassageSocieteMobileComponent } from '../../features-mobile/passage-societe-mobile/passage-societe-mobile.component';
import { SalarieIndependantMobileComponent } from '../../features-mobile/salarie-independant-mobile/salarie-independant-mobile.component';
import { BoosteEntrepriseComponent } from '../booste-entreprise/booste-entreprise.component';
import { CompteCourantAdministrateurComponent } from '../compte-courant-administrateur/compte-courant-administrateur.component';
import { GuerrePrixComponent } from '../guerre-prix/guerre-prix.component';
import { PassageSocieteComponent } from '../passage-societe/passage-societe.component';
import { PromoSocieteComponent } from '../promo-societe/promo-societe.component';
import { SalarieIndependantComponent } from '../salarie-independant/salarie-independant.component';
import { TimelineGuerrePrixComponent } from '../timeline-guerre-prix/timeline-guerre-prix.component';
import { TimelineSocieteComponent } from '../timeline-societe/timeline-societe.component';
import { StrategieRoutingModule } from './vente-routing.module';

// Note: Le dossier est toujours nommé "venteModule" pour préserver l'historique Git.
// Seul le nom de la classe a été renommé de VenteModule → StrategieModule.
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
  imports: [CommonModule, FormsModule, ShardeModuleModule, StrategieRoutingModule, PassageSocieteMobileComponent, SalarieIndependantMobileComponent],
})
export class StrategieModule {}
