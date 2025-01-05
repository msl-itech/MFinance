import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { PageServiceComponent } from './page-service/page-service.component';

const routes: Routes = [
  {
    path: '',component: PageServiceComponent},
   {path: 'comptabilite', component: ComptabiliteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
