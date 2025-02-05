import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { PageServiceComponent } from './page-service/page-service.component';
import { FiscaliteComponent } from './fiscalite/fiscalite.component';
import { CreationEntrepriseComponent } from './creation-entreprise/creation-entreprise.component';
import { DeclarationImpotComponent } from './declaration-impot/declaration-impot.component';

const routes: Routes = [
  {
    path: '',component: PageServiceComponent},
   {path: 'comptabilite', component: ComptabiliteComponent },
   {path: 'fiscalite', component: FiscaliteComponent },
   {path: 'creation-entreprise', component: CreationEntrepriseComponent },
   {path: 'declaration-impot', component: DeclarationImpotComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
