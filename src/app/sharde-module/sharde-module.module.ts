import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '../services/services.component';
import { ZoneContactComponent } from '../zone-contact/zone-contact.component';

@NgModule({
  declarations: [
    ServicesComponent,
    ZoneContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServicesComponent,
    ZoneContactComponent
  ]
})
export class ShardeModuleModule { }
