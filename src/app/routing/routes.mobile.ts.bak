import { Routes } from '@angular/router';
import { AvisGoogleComponent } from '../avis-google/avis-google.component';
import { CalculatriceComponent } from '../calculatrice/calculatrice.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutMobileComponent } from '../features-mobile/about-mobile/about-mobile.component';
import { AccueilMobileComponent } from '../features-mobile/accueil-mobile/accueil-mobile.component';
import { AsblMobileComponent } from '../features-mobile/asbl-mobile/asbl-mobile.component';
import { CommercantHorecaMobileComponent } from '../features-mobile/commercant-horeca-mobile/commercant-horeca-mobile.component';
import { GrandeEntrepriseMobileComponent } from '../features-mobile/grande-entreprise-mobile/grande-entreprise-mobile.component';
import { IndependantMobileComponent } from '../features-mobile/independant-mobile/independant-mobile.component';
import { ProfessionnelSanteMobileComponent } from '../features-mobile/professionnel-sante-mobile/professionnel-sante-mobile.component';
import { ProfilPromoteurImmobilierMobileComponent } from '../features-mobile/profil-promoteur-immobilier-mobile/profil-promoteur-immobilier-mobile.component';
import { SocieteExploitationMobileComponent } from '../features-mobile/societe-exploitation-mobile/societe-exploitation-mobile.component';
import { SocieteManagementPatrimonialeMobileComponent } from '../features-mobile/societe-management-patrimoniale-mobile/societe-management-patrimoniale-mobile.component';
import { SocieteMoyenMobileComponent } from '../features-mobile/societe-moyen-mobile/societe-moyen-mobile.component';
import { SupportMobileComponent } from '../features-mobile/support-mobile/support-mobile.component';
import { TarifMobileComponent } from '../features-mobile/tarif-mobile/tarif-mobile.component';
import { TresorerieBeneficeMobileComponent } from '../features-mobile/tresorerie-benefice-mobile/tresorerie-benefice-mobile.component';
import { MobileLayoutComponent } from '../layouts/mobile-layout/mobile-layout.component';
import { NotFoundComponent } from '../not-found/not-found.component';
export const MOBILE_ROUTES: Routes = [
  {
    path: '',
    component: MobileLayoutComponent,
    children: [
      // ============================================
      // REDIRECTIONS 301 (ordre important - avant les routes réelles)
      // ============================================
      { path: 'accueil', redirectTo: '/', pathMatch: 'full' },
      { path: 'about', redirectTo: '/a-propos', pathMatch: 'full' },
      { path: 'tarif', redirectTo: '/tarifs', pathMatch: 'full' },

      // Profils (métier) - Redirections
      { path: 'profil-independant', redirectTo: '/profils/independant-startup', pathMatch: 'full' },
      { path: 'commercant-horeca', redirectTo: '/profils/commercant-horeca', pathMatch: 'full' },
      { path: 'professionel-sante', redirectTo: '/profils/professionnel-sante', pathMatch: 'full' },
      { path: 'grande-entreprise', redirectTo: '/profils/grande-entreprise', pathMatch: 'full' },
      { path: 'promoteur-immobilier', redirectTo: '/profils/promoteur-immobilier', pathMatch: 'full' },

      // Structures (juridique) - Redirections
      { path: 'asbl', redirectTo: '/structures/asbl', pathMatch: 'full' },
      { path: 'absl', redirectTo: '/structures/asbl', pathMatch: 'full' },
      { path: 'societe-exploitation', redirectTo: '/structures/societe-exploitation', pathMatch: 'full' },
      { path: 'societe-management-patrimoniale', redirectTo: '/structures/societe-management-patrimoniale', pathMatch: 'full' },
      { path: 'societe-moyen', redirectTo: '/structures/societe-de-moyens', pathMatch: 'full' },

      // Vente → Stratégie - Redirections
      { path: 'vente', redirectTo: '/strategie', pathMatch: 'prefix' },

      // ============================================
      // ROUTES RÉELLES
      // ============================================

      // Page d'accueil
      { path: '', component: AccueilMobileComponent },

      // Pages de base
      { path: 'a-propos', component: AboutMobileComponent },
      { path: 'tarifs', component: TarifMobileComponent },
      { path: 'calculatrice', component: CalculatriceComponent },
      { path: 'support', component: SupportMobileComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'avis-google', component: AvisGoogleComponent },

      // Profils (métier)
      { path: 'profils/independant-startup', component: IndependantMobileComponent },
      { path: 'profils/commercant-horeca', component: CommercantHorecaMobileComponent },
      { path: 'profils/professionnel-sante', component: ProfessionnelSanteMobileComponent },
      { path: 'profils/grande-entreprise', component: GrandeEntrepriseMobileComponent },
      { path: 'profils/promoteur-immobilier', component: ProfilPromoteurImmobilierMobileComponent },

      // Structures (juridique)
      { path: 'structures/asbl', component: AsblMobileComponent },
      { path: 'structures/societe-exploitation', component: SocieteExploitationMobileComponent },
      { path: 'structures/societe-management-patrimoniale', component: SocieteManagementPatrimonialeMobileComponent },
      { path: 'structures/societe-de-moyens', component: SocieteMoyenMobileComponent },

      // Modules
      {
        path: 'services',
        loadChildren: () =>
          import('../ServiceModules/services.module').then(
            (m) => m.ServicesModule
          ),
      },
      {
        path: 'strategie',
        loadChildren: () =>
          import('../venteModule/vente/vente.module').then(
            (m) => m.StrategieModule
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
