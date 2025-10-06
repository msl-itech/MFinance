import { Routes } from '@angular/router';
import { AvisGoogleComponent } from '../avis-google/avis-google.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutMobileComponent } from '../features-mobile/about-mobile/about-mobile.component';
import { AccueilMobileComponent } from '../features-mobile/accueil-mobile/accueil-mobile.component';
import { AsblMobileComponent } from '../features-mobile/asbl-mobile/asbl-mobile.component';
import { GrandeEntrepriseMobileComponent } from '../features-mobile/grande-entreprise-mobile/grande-entreprise-mobile.component';
import { IndependantMobileComponent } from '../features-mobile/independant-mobile/independant-mobile.component';
import { ProfessionnelSanteMobileComponent } from '../features-mobile/professionnel-sante-mobile/professionnel-sante-mobile.component';
import { ProfilPromoteurImmobilierMobileComponent } from '../features-mobile/profil-promoteur-immobilier-mobile/profil-promoteur-immobilier-mobile.component';
import { SocieteExploitationMobileComponent } from '../features-mobile/societe-exploitation-mobile/societe-exploitation-mobile.component';
import { SocieteManagementPatrimonialeMobileComponent } from '../features-mobile/societe-management-patrimoniale-mobile/societe-management-patrimoniale-mobile.component';
import { SocieteMoyenMobileComponent } from '../features-mobile/societe-moyen-mobile/societe-moyen-mobile.component';
import { TarifMobileComponent } from '../features-mobile/tarif-mobile/tarif-mobile.component';
import { TresorerieBeneficeMobileComponent } from '../features-mobile/tresorerie-benefice-mobile/tresorerie-benefice-mobile.component';
import { MobileLayoutComponent } from '../layouts/mobile-layout/mobile-layout.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ProfilCommercantHorecaComponent } from '../profil-commercant-horeca/profil-commercant-horeca.component';
import { SupportComponent } from '../support/support.component';
import { CommercantHorecaMobileComponent } from '../features-mobile/commercant-horeca-mobile/commercant-horeca-mobile.component';
export const MOBILE_ROUTES: Routes = [
  {
    path: '',
    component: MobileLayoutComponent,
    children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      {
        path: 'accueil',
        component: AccueilMobileComponent,
      },
      { path: 'support', component: SupportComponent },
      { path: 'about', component: AboutMobileComponent },
      { path: 'tarif', component: TarifMobileComponent },
      { path: 'avis-google', component: AvisGoogleComponent },

      { path: 'asbl', component: AsblMobileComponent },

      { path: 'profil-independant', component: IndependantMobileComponent },
      {
        path: 'societe-management-patrimoniale',
        component: SocieteManagementPatrimonialeMobileComponent,
      },
      { path: 'societe-moyen', component: SocieteMoyenMobileComponent },
      {
        path: 'societe-exploitation',
        component: SocieteExploitationMobileComponent,
      },
      { path: 'commercant-horeca', component: CommercantHorecaMobileComponent },
      {
        path: 'professionel-sante',
        component: ProfessionnelSanteMobileComponent,
      },

      { path: 'grande-entreprise', component: GrandeEntrepriseMobileComponent },
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
      {
        path: 'tresorerie-benefice-mobile',
        component: TresorerieBeneficeMobileComponent,
      },
      // Route wildcard pour la page 404
      { path: '**', component: NotFoundComponent },
    ],
  },
];
