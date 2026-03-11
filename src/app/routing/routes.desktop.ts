import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AbslComponent } from '../absl/absl.component';
import { AvisGoogleComponent } from '../avis-google/avis-google.component';
import { ContactComponent } from '../contact/contact.component';
import { DesktopLayoutComponent } from '../layouts/desktop-layout/desktop-layout.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ProfessionelSanteComponent } from '../professionel-sante/professionel-sante.component';
import { ProfilCommercantHorecaComponent } from '../profil-commercant-horeca/profil-commercant-horeca.component';
import { ProfilGrandeEntrepriseComponent } from '../profil-grande-entreprise/profil-grande-entreprise.component';
import { ProfilIndependantComponent } from '../profil-independant/profil-independant.component';
import { ProfilPromoteurImmobilierComponent } from '../profil-promoteur-immobilier/profil-promoteur-immobilier.component';
import { ProfilSocieteExploitationComponent } from '../profil-societe-exploitation/profil-societe-exploitation.component';
import { ProfilSocieteManagementPatrimonialeComponent } from '../profil-societe-management-patrimoniale/profil-societe-management-patrimoniale.component';
import { ProfilSocieteMoyenComponent } from '../profil-societe-moyen/profil-societe-moyen.component';
import { SupportComponent } from '../support/support.component';
import { TarifComponent } from '../tarif/tarif.component';
import { CalculatriceComponent } from '../calculatrice/calculatrice.component';
import { PolitiqueConfidentialiteComponent } from '../politique-confidentialite/politique-confidentialite.component';
import { ConditionsGeneralesComponent } from '../conditions-generales/conditions-generales.component';
import { MentionsLegalesComponent } from '../mentions-legales/mentions-legales.component';
import { PolitiqueCookiesComponent } from '../politique-cookies/politique-cookies.component';

export const DESKTOP_ROUTES: Routes = [
  {
    path: '',
    component: DesktopLayoutComponent,
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
      {
        path: '',
        loadChildren: () =>
          import('../module-accueil/module-accueil.module').then(
            (m) => m.ModuleAccueilModule
          ),
      },

      // Pages de base
      { path: 'a-propos', component: AboutComponent },
      { path: 'tarifs', component: TarifComponent },
      { path: 'calculatrice', component: CalculatriceComponent },
      { path: 'support', component: SupportComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'avis-google', component: AvisGoogleComponent },

      // Pages légales (RGPD)
      { path: 'politique-confidentialite', component: PolitiqueConfidentialiteComponent },
      { path: 'conditions-generales', component: ConditionsGeneralesComponent },
      { path: 'mentions-legales', component: MentionsLegalesComponent },
      { path: 'politique-cookies', component: PolitiqueCookiesComponent },

      // Profils (métier)
      { path: 'profils/independant-startup', component: ProfilIndependantComponent },
      { path: 'profils/commercant-horeca', component: ProfilCommercantHorecaComponent },
      { path: 'profils/professionnel-sante', component: ProfessionelSanteComponent },
      { path: 'profils/grande-entreprise', component: ProfilGrandeEntrepriseComponent },
      { path: 'profils/promoteur-immobilier', component: ProfilPromoteurImmobilierComponent },

      // Structures (juridique)
      { path: 'structures/asbl', component: AbslComponent },
      { path: 'structures/societe-exploitation', component: ProfilSocieteExploitationComponent },
      { path: 'structures/societe-management-patrimoniale', component: ProfilSocieteManagementPatrimonialeComponent },
      { path: 'structures/societe-de-moyens', component: ProfilSocieteMoyenComponent },

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

      // Route wildcard pour la page 404
      { path: '**', component: NotFoundComponent },
    ],
  },
];
