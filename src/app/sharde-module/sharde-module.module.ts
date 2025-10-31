import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormCodePromoComponent } from '../form-code-promo/form-code-promo.component';
import { ServicesComponent } from '../services/services.component';
import { ContactFormLayoutComponent } from '../shared/contact-form-layout/contact-form-layout.component';
import { ZoneContactComponent } from '../zone-contact/zone-contact.component';

@NgModule({
  declarations: [
    ServicesComponent,
    ZoneContactComponent,
    FormCodePromoComponent,
    ContactFormLayoutComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    ServicesComponent,
    ZoneContactComponent,
    FormCodePromoComponent,
    ContactFormLayoutComponent,
  ],
})
export class ShardeModuleModule {}
