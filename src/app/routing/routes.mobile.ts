import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AbslComponent } from '../absl/absl.component';
import { AvisGoogleComponent } from '../avis-google/avis-google.component';
import { BoosteEntrepriseMobileComponent } from '../features-mobile/booste-entreprise-mobile/booste-entreprise-mobile.component';
import { ContactComponent } from '../contact/contact.component';
import { ComptabiliteMobileComponent } from '../features-mobile/comptabilite-mobile/comptabilite-mobile.component';
import { CompteCourantAdministrateurMobileComponent } from '../features-mobile/compte-courant-administrateur-mobile/compte-courant-administrateur-mobile.component';
import { CreationEntrepriseMobileComponent } from '../features-mobile/creation-entreprise-mobile/creation-entreprise-mobile.component';
import { DeclarationImpotMobileComponent } from '../features-mobile/declaration-impot-mobile/declaration-impot-mobile.component';
import { FiscaliteMobileComponent } from '../features-mobile/fiscalite-mobile/fiscalite-mobile.component';
import { AnticipeTresorerieMobileComponent } from '../features-mobile/anticipe-tresorerie-mobile/anticipe-tresorerie-mobile.component';
import { ProfilPromoteurImmobilierMobileComponent } from '../features-mobile/profil-promoteur-immobilier-mobile/profil-promoteur-immobilier-mobile.component';
import { ServiceMobileComponent } from '../features-mobile/service-mobile/service-mobile.component';
import { TarifMobileComponent } from '../features-mobile/tarif-mobile/tarif-mobile.component';
import { MobileLayoutComponent } from '../layouts/mobile-layout/mobile-layout.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ProfessionelSanteComponent } from '../professionel-sante/professionel-sante.component';
import { ProfilCommercantHorecaComponent } from '../profil-commercant-horeca/profil-commercant-horeca.component';
import { ProfilGrandeEntrepriseComponent } from '../profil-grande-entreprise/profil-grande-entreprise.component';
import { ProfilIndependantComponent } from '../profil-independant/profil-independant.component';
import { ProfilSocieteExploitationComponent } from '../profil-societe-exploitation/profil-societe-exploitation.component';
import { ProfilSocieteManagementPatrimonialeComponent } from '../profil-societe-management-patrimoniale/profil-societe-management-patrimoniale.component';
import { ProfilSocieteMoyenComponent } from '../profil-societe-moyen/profil-societe-moyen.component';
import { SupportComponent } from '../support/support.component';

export const MOBILE_ROUTES: Routes = [
  {
    path: '',
    component: MobileLayoutComponent,
    children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      {
        path: 'accueil',
        loadChildren: () =>
          import('../module-accueil/module-accueil.module').then(
            (m) => m.ModuleAccueilModule
          ),
      },
      { path: 'support', component: SupportComponent },
      { path: 'about', component: AboutComponent },
      { path: 'tarif', component: TarifMobileComponent },
      { path: 'avis-google', component: AvisGoogleComponent },
      { path: 'absl', component: AbslComponent },
      { path: 'profil-independant', component: ProfilIndependantComponent },
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

      { path: 'grande-entreprise', component: ProfilGrandeEntrepriseComponent },
      {
        path: 'promoteur-immobilier',
        component: ProfilPromoteurImmobilierMobileComponent,
      },
      { path: 'contact', component: ContactComponent },
      {
        path: 'services',
        loadChildren: () =>
          import('../ServiceModules/services.module').then(
            (m) => m.ServicesModule
          ),
      },
      {
        path: 'vente',
        loadChildren: () =>
          import('../venteModule/vente/vente.module').then(
            (m) => m.VenteModule
          ),
      },
      {
        path: 'tresorerie',
        loadChildren: () =>
          import('../TresorerieModule/tresorire/tresorire.module').then(
            (m) => m.TresorireModule
          ),
      },
      { path: 'services-mobile', component: ServiceMobileComponent },
      { path: 'booste-entreprise-mobile', component: BoosteEntrepriseMobileComponent },
      { path: 'comptabilite-mobile', component: ComptabiliteMobileComponent },
      { path: 'declaration-impot-mobile', component: DeclarationImpotMobileComponent },
      { path: 'creation-entreprise-mobile', component: CreationEntrepriseMobileComponent },
      { path: 'compte-courant-administrateur-mobile', component: CompteCourantAdministrateurMobileComponent },
      { path: 'anticipe-tresorerie-mobile', component: AnticipeTresorerieMobileComponent },
      // Route wildcard pour la page 404
      { path: '**', component: NotFoundComponent },
    ],
  },
];
