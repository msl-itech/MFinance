import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassageSocieteComponent } from '../passage-societe/passage-societe.component';


const routes: Routes = [
 
   {path: 'passage-en-societe', component: PassageSocieteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenteRoutingModule { }
