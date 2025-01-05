import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { PageServiceComponent } from './page-service/page-service.component';
import { ShardeModuleModule } from '../sharde-module/sharde-module.module';


@NgModule({
  declarations: [
    ComptabiliteComponent,
    PageServiceComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ShardeModuleModule
  ]
})
export class ServicesModule { }
