import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '../services/services.component';
import { ZoneContactComponent } from '../zone-contact/zone-contact.component';
import { FormCodePromoComponent } from '../form-code-promo/form-code-promo.component';

@NgModule({
  declarations: [
    ServicesComponent,
    ZoneContactComponent,
    FormCodePromoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServicesComponent,
    ZoneContactComponent,
    FormCodePromoComponent
  ]
})
export class ShardeModuleModule { }
