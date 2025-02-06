import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AboutComponent } from './about/about.component';
import { HeaderAboutComponent } from './header-about/header-about.component';
import { AbslComponent } from './absl/absl.component';
import { ProfilIndependantComponent } from './profil-independant/profil-independant.component';
import { ProfilSocieteManagementPatrimonialeComponent } from './profil-societe-management-patrimoniale/profil-societe-management-patrimoniale.component';
import { TimelinePatrimonialeComponent } from './timeline-patrimoniale/timeline-patrimoniale.component';
import { RecommandationProfilComponent } from './recommandation-profil/recommandation-profil.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TimelineIndependantComponent } from './timeline-independant/timeline-independant.component';
import { ProfilSocieteMoyenComponent } from './profil-societe-moyen/profil-societe-moyen.component';
import { ProfilSocieteExploitationComponent } from './profil-societe-exploitation/profil-societe-exploitation.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilCommercantHorecaComponent } from './profil-commercant-horeca/profil-commercant-horeca.component';
import { ProfessionelSanteComponent } from './professionel-sante/professionel-sante.component';
import { ProfilGrandeEntrepriseComponent } from './profil-grande-entreprise/profil-grande-entreprise.component';
import { ProfilPromoteurImmobilierComponent } from './profil-promoteur-immobilier/profil-promoteur-immobilier.component';
import { TestScrollComponent } from './test-scroll/test-scroll.component';
import { ShardeModuleModule } from './sharde-module/sharde-module.module';
import { TarifComponent } from './tarif/tarif.component';
import { EconomieAnalysieComponent } from './venteModule/economie-analysie/economie-analysie.component';
import { AlerteTresorerieComponent } from './TresorerieModule/alerte-tresorerie/alerte-tresorerie.component';
import { AccompagnementComponent } from './TresorerieModule/accompagnement/accompagnement.component';
import { FooterComponent } from './footer/footer.component';
import { FormCodePromoComponent } from './form-code-promo/form-code-promo.component';
import { PromoBannerComponent } from './promo-banner/promo-banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopBarComponent,
    AboutComponent,
    HeaderAboutComponent,
    AbslComponent,
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
    AccompagnementComponent,
    FooterComponent,
    PromoBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShardeModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
