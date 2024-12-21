import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { AbslComponent } from './absl/absl.component';
import { ProfilIndependantComponent } from './profil-independant/profil-independant.component';
import { ProfilSocieteManagementPatrimonialeComponent } from './profil-societe-management-patrimoniale/profil-societe-management-patrimoniale.component';
import { ProfilSocieteMoyenComponent } from './profil-societe-moyen/profil-societe-moyen.component';
import { ProfilSocieteExploitationComponent } from './profil-societe-exploitation/profil-societe-exploitation.component';
import { ProfilCommercantHorecaComponent } from './profil-commercant-horeca/profil-commercant-horeca.component';
import { ProfessionelSanteComponent } from './professionel-sante/professionel-sante.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'about', component: AboutComponent },
  { path: 'absl', component: AbslComponent },
  { path: 'profil-independant', component: ProfilIndependantComponent },
  { path: 'societe-management-patrimoniale', component: ProfilSocieteManagementPatrimonialeComponent },
  { path: 'societe-moyen', component: ProfilSocieteMoyenComponent },
  { path: 'societe-exploitation', component: ProfilSocieteExploitationComponent },
  { path: 'commercant-horeca', component: ProfilCommercantHorecaComponent },
  { path: 'professionel-sante', component: ProfessionelSanteComponent },
  { path: 'contact', component: ProfilSocieteExploitationComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
