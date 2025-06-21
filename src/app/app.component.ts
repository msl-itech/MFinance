import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MetaService } from './services/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'MFinances';
  isLoaded$!: Observable<boolean>;

  constructor(private router: Router, private metaService: MetaService) {}

  ngOnInit() {
    AOS.init({
      duration: 1200, // Durée de l'animation en millisecondes
      once: true, // L'animation se déclenche une seule fois
    });
    this.isLoaded$ = of(true);

    // Écouter les changements de route pour mettre à jour les meta-données
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateMetaTagsForRoute(event.url);
      });
  }

  /**
   * Met à jour les meta-tags en fonction de la route actuelle
   * @param url URL de la route actuelle
   */
  private updateMetaTagsForRoute(url: string): void {
    // Supprimer le slash initial et les paramètres de requête
    const cleanUrl = url.split('?')[0].replace(/^\//, '');

    // Mettre à jour les meta-tags en fonction de la route
    switch (cleanUrl) {
      case '':
      case 'accueil':
        this.metaService.setHomePageMeta();
        break;
      case 'about':
        this.metaService.setAboutPageMeta();
        break;
      case 'contact':
        this.metaService.setContactPageMeta();
        break;
      case 'tarif':
        this.metaService.setTarifPageMeta();
        break;
      case 'profil-independant':
        this.metaService.setIndependantPageMeta();
        break;
      case 'absl':
        this.metaService.setAbslPageMeta();
        break;
      case 'societe-management-patrimoniale':
        this.metaService.setSocieteManagementPatrimonialePageMeta();
        break;
      case 'societe-moyen':
        this.metaService.setSocieteMoyenPageMeta();
        break;
      case 'societe-exploitation':
        this.metaService.setSocieteExploitationPageMeta();
        break;
      case 'commercant-horeca':
        this.metaService.setCommercantHorecaPageMeta();
        break;
      case 'professionel-sante':
        this.metaService.setProfessionnelSantePageMeta();
        break;
      case 'grande-entreprise':
        this.metaService.setGrandeEntreprisePageMeta();
        break;
      case 'promoteur-immobilier':
        this.metaService.setPromoteurImmobilierPageMeta();
        break;
      case 'services':
        this.metaService.setServicesPageMeta();
        break;
      case 'services/comptabilite':
        this.metaService.setComptabilitePageMeta();
        break;
      case 'services/fiscalite':
        this.metaService.setFiscalitePageMeta();
        break;
      case 'services/creation-entreprise':
        this.metaService.setCreationEntreprisePageMeta();
        break;
      case 'services/declaration-impot':
        this.metaService.setDeclarationImpotPageMeta();
        break;
      case 'vente':
        this.metaService.setVentePageMeta();
        break;
      case 'vente/passage-en-societe':
        this.metaService.setPassageEnSocietePageMeta();
        break;
      case 'vente/compte-courant':
        this.metaService.setCompteCourantPageMeta();
        break;
      case 'vente/salarie-independant':
        this.metaService.setSalarieIndependantPageMeta();
        break;
      case 'tresorerie':
        this.metaService.setTresoreriePageMeta();
        break;
      case 'tresorerie/tresorerie-benefice':
        this.metaService.setTresorerieBeneficePageMeta();
        break;
      case 'tresorerie/investir-tresorerie':
        this.metaService.setInvestirTresoreriePageMeta();
        break;
      case 'tresorerie/optimiser-stock':
        this.metaService.setOptimiserStockPageMeta();
        break;
      case 'tresorerie/alerte-tresorerie':
        this.metaService.setAlerteTresoreriePageMeta();
        break;
      case 'tresorerie/proteger-sa-tresorerie':
        this.metaService.setProtegerTresoreriePageMeta();
        break;
      case 'tresorerie/anticiper-sa-tresorerie':
        this.metaService.setAnticiperTresoreriePageMeta();
        break;
      case 'tresorerie/accompagnement':
        this.metaService.setAccompagnementTresoreriePageMeta();
        break;
      default:
        // Meta-description par défaut si aucune route spécifique n'est trouvée
        this.metaService.updateMetaTags(
          "MFinances - Cabinet d'expertise comptable à Bruxelles",
          "MFinances est un cabinet d'expertise comptable à Bruxelles offrant des services de comptabilité, fiscalité et conseil aux entreprises et indépendants.",
          "expertise comptable, comptabilité, fiscalité, audit, gestion d'entreprise, Bruxelles"
        );
        break;
    }
  }
}
