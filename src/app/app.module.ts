import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderAccueilComponent } from './header-accueil/header-accueil.component';
import { ProfilTypeComponent } from './profil-type/profil-type.component';
import { ServicesComponent } from './services/services.component';
import { WhyChoiseComponent } from './why-choise/why-choise.component';
import { CeoSectionComponent } from './ceo-section/ceo-section.component';
import { PodcastAccueilComponent } from './podcast-accueil/podcast-accueil.component';
import { ZoneContactComponent } from './zone-contact/zone-contact.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderAccueilComponent,
    ProfilTypeComponent,
    ServicesComponent,
    WhyChoiseComponent,
    CeoSectionComponent,
    PodcastAccueilComponent,
    ZoneContactComponent,
    TopBarComponent,
    AccueilComponent,
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
    ProfilPromoteurImmobilierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
