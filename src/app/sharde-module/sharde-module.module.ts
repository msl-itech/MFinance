import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormCodePromoComponent } from '../form-code-promo/form-code-promo.component';
import { ServicesComponent } from '../services/services.component';
import { ZoneContactComponent } from '../zone-contact/zone-contact.component';
import { H1TitleComponent } from './h1-title/h1-title.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

@NgModule({
  declarations: [
    ServicesComponent,
    ZoneContactComponent,
    FormCodePromoComponent,
    H1TitleComponent,
    PageLayoutComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ServicesComponent,
    ZoneContactComponent,
    FormCodePromoComponent,
    H1TitleComponent,
    PageLayoutComponent,
  ],
})
export class ShardeModuleModule {}
