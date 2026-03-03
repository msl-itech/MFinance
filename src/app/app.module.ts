import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AlerteTresorerieComponent } from './TresorerieModule/alerte-tresorerie/alerte-tresorerie.component';
import { AboutComponent } from './about/about.component';
import { AbslComponent } from './absl/absl.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvisGoogleComponent } from './avis-google/avis-google.component';
import { BoosteEntrepriseMobileComponent } from './features-mobile/booste-entreprise-mobile/booste-entreprise-mobile.component';
import { ContactComponent } from './contact/contact.component';
import { ComptabiliteMobileComponent } from './features-mobile/comptabilite-mobile/comptabilite-mobile.component';
import { CompteCourantAdministrateurMobileComponent } from './features-mobile/compte-courant-administrateur-mobile/compte-courant-administrateur-mobile.component';
import { CreationEntrepriseMobileComponent } from './features-mobile/creation-entreprise-mobile/creation-entreprise-mobile.component';
import { DeclarationImpotMobileComponent } from './features-mobile/declaration-impot-mobile/declaration-impot-mobile.component';
import { FiscaliteMobileComponent } from './features-mobile/fiscalite-mobile/fiscalite-mobile.component';
import { InvestirTresorerieMobileComponent } from './features-mobile/investir-tresorerie-mobile/investir-tresorerie-mobile.component';
import { PassageSocieteMobileComponent } from './features-mobile/passage-societe-mobile/passage-societe-mobile.component';
import { ProfilPromoteurImmobilierMobileComponent } from './features-mobile/profil-promoteur-immobilier-mobile/profil-promoteur-immobilier-mobile.component';
import { StockTresorerieMobileComponent } from './features-mobile/stock-tresorerie-mobile/stock-tresorerie-mobile.component';
import { AnticipeTresorerieMobileComponent } from './features-mobile/anticipe-tresorerie-mobile/anticipe-tresorerie-mobile.component';
import { AlerteTresorerieMobileComponent } from './features-mobile/alerte-tresorerie-mobile/alerte-tresorerie-mobile.component';
import { TresorerieBeneficeMobileComponent } from './features-mobile/tresorerie-benefice-mobile/tresorerie-benefice-mobile.component';
import { AccueilMobileComponent } from './features-mobile/accueil-mobile/accueil-mobile.component';
import { AboutMobileComponent } from './features-mobile/about-mobile/about-mobile.component';
import { AsblMobileComponent } from './features-mobile/asbl-mobile/asbl-mobile.component';
import { IndependantMobileComponent } from './features-mobile/independant-mobile/independant-mobile.component';
import { SocieteExploitationMobileComponent } from './features-mobile/societe-exploitation-mobile/societe-exploitation-mobile.component';
import { SocieteManagementPatrimonialeMobileComponent } from './features-mobile/societe-management-patrimoniale-mobile/societe-management-patrimoniale-mobile.component';
import { SocieteMoyenMobileComponent } from './features-mobile/societe-moyen-mobile/societe-moyen-mobile.component';
import { TarifMobileComponent } from './features-mobile/tarif-mobile/tarif-mobile.component';
import { SupportMobileComponent } from './features-mobile/support-mobile/support-mobile.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderAboutComponent } from './header-about/header-about.component';
import { DesktopLayoutComponent } from './layouts/desktop-layout/desktop-layout.component';
import { MobileLayoutComponent } from './layouts/mobile-layout/mobile-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfessionelSanteComponent } from './professionel-sante/professionel-sante.component';
import { ProfilCommercantHorecaComponent } from './profil-commercant-horeca/profil-commercant-horeca.component';
import { ProfilGrandeEntrepriseComponent } from './profil-grande-entreprise/profil-grande-entreprise.component';
import { ProfilIndependantComponent } from './profil-independant/profil-independant.component';
import { ProfilPromoteurImmobilierComponent } from './profil-promoteur-immobilier/profil-promoteur-immobilier.component';
import { ProfilSocieteExploitationComponent } from './profil-societe-exploitation/profil-societe-exploitation.component';
import { ProfilSocieteManagementPatrimonialeComponent } from './profil-societe-management-patrimoniale/profil-societe-management-patrimoniale.component';
import { ProfilSocieteMoyenComponent } from './profil-societe-moyen/profil-societe-moyen.component';
import { PromoBannerComponent } from './promo-banner/promo-banner.component';
import { RecommandationProfilComponent } from './recommandation-profil/recommandation-profil.component';
import { ShardeModuleModule } from './sharde-module/sharde-module.module';
import { ImageOptimizerDirective } from './shared/image-optimizer.directive';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SupportComponent } from './support/support.component';
import { TarifComponent } from './tarif/tarif.component';
import { TestScrollComponent } from './test-scroll/test-scroll.component';
import { TimelineIndependantComponent } from './timeline-independant/timeline-independant.component';
import { TimelinePatrimonialeComponent } from './timeline-patrimoniale/timeline-patrimoniale.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EconomieAnalysieComponent } from './venteModule/economie-analysie/economie-analysie.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { DiagnosticManagementPatrimonialComponent } from './features-mobile/societe-management-patrimoniale-mobile/diagnostic-management-patrimonial.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopBarComponent,
    AboutComponent,
    HeaderAboutComponent,
    AbslComponent,
    AvisGoogleComponent,
    ProfilIndependantComponent,
    ProfilSocieteManagementPatrimonialeComponent,
    TimelinePatrimonialeComponent,
    RecommandationProfilComponent,
    SidebarComponent,
    TimelineIndependantComponent,
    ProfilSocieteMoyenComponent,
    ProfilSocieteExploitationComponent,
    ContactComponent,
    ProfilCommercantHorecaComponent,
    ProfessionelSanteComponent,
    ProfilGrandeEntrepriseComponent,
    ProfilPromoteurImmobilierComponent,
    TestScrollComponent,
    TarifComponent,
    EconomieAnalysieComponent,
    AlerteTresorerieComponent,
    FooterComponent,
    PromoBannerComponent,
    NotFoundComponent,
    SupportComponent,
    CalculatriceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    ShardeModuleModule,
    ImageOptimizerDirective,
    DiagnosticManagementPatrimonialComponent,
    DesktopLayoutComponent,
    MobileLayoutComponent,
    TarifMobileComponent,
    SupportMobileComponent,
    BoosteEntrepriseMobileComponent,
    ComptabiliteMobileComponent,
    CompteCourantAdministrateurMobileComponent,
    CreationEntrepriseMobileComponent,
    DeclarationImpotMobileComponent,
    FiscaliteMobileComponent,
    InvestirTresorerieMobileComponent,
    PassageSocieteMobileComponent,
    ProfilPromoteurImmobilierMobileComponent,
    StockTresorerieMobileComponent,
    AnticipeTresorerieMobileComponent,
    AlerteTresorerieMobileComponent,
    TresorerieBeneficeMobileComponent,
    AccueilMobileComponent,
    AboutMobileComponent,
    AsblMobileComponent,
    IndependantMobileComponent,
    SocieteExploitationMobileComponent,
    SocieteManagementPatrimonialeMobileComponent,
    SocieteMoyenMobileComponent,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
