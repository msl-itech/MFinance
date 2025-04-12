import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AbslComponent } from './absl/absl.component';
import { BoosteEntrepriseComponent } from './booste-entreprise/booste-entreprise.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfessionelSanteComponent } from './professionel-sante/professionel-sante.component';
import { ProfilCommercantHorecaComponent } from './profil-commercant-horeca/profil-commercant-horeca.component';
import { ProfilGrandeEntrepriseComponent } from './profil-grande-entreprise/profil-grande-entreprise.component';
import { ProfilIndependantComponent } from './profil-independant/profil-independant.component';
import { ProfilPromoteurImmobilierComponent } from './profil-promoteur-immobilier/profil-promoteur-immobilier.component';
import { ProfilSocieteExploitationComponent } from './profil-societe-exploitation/profil-societe-exploitation.component';
import { ProfilSocieteManagementPatrimonialeComponent } from './profil-societe-management-patrimoniale/profil-societe-management-patrimoniale.component';
import { ProfilSocieteMoyenComponent } from './profil-societe-moyen/profil-societe-moyen.component';
import { SupportComponent } from './support/support.component';
import { TarifComponent } from './tarif/tarif.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {
    path: 'accueil',
    loadChildren: () =>
      import('./module-accueil/module-accueil.module').then(
        (m) => m.ModuleAccueilModule
      ),
  },
  { path: 'about', component: AboutComponent },
  { path: 'tarif', component: TarifComponent },
  { path: 'absl', component: AbslComponent },
  { path: 'profil-independant', component: ProfilIndependantComponent },
  { path: 'booste-entreprise', component: BoosteEntrepriseComponent },
  {
    path: 'societe-management-patrimoniale',
    component: ProfilSocieteManagementPatrimonialeComponent,
  },
  { path: 'societe-moyen', component: ProfilSocieteMoyenComponent },
  {
    path: 'societe-exploitation',
    component: ProfilSocieteExploitationComponent,
  },
  { path: 'commercant-horeca', component: ProfilCommercantHorecaComponent },
  { path: 'professionel-sante', component: ProfessionelSanteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'support', component: SupportComponent },
  { path: 'grande-entreprise', component: ProfilGrandeEntrepriseComponent },
  {
    path: 'promoteur-immobilier',
    component: ProfilPromoteurImmobilierComponent,
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./ServiceModules/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'vente',
    loadChildren: () =>
      import('./venteModule/vente/vente.module').then((m) => m.VenteModule),
  },
  {
    path: 'tresorerie',
    loadChildren: () =>
      import('./TresorerieModule/tresorire/tresorire.module').then(
        (m) => m.TresorireModule
      ),
  },
  // Route wildcard pour la page 404
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
