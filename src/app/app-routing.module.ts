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
import { ContactComponent } from './contact/contact.component';
import { ProfilGrandeEntrepriseComponent } from './profil-grande-entreprise/profil-grande-entreprise.component';
import { ProfilPromoteurImmobilierComponent } from './profil-promoteur-immobilier/profil-promoteur-immobilier.component';

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
  { path: 'contact', component: ContactComponent },
  { path: 'grande-entreprise', component: ProfilGrandeEntrepriseComponent },
  { path: 'promoteur-immobilier', component: ProfilPromoteurImmobilierComponent }
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
