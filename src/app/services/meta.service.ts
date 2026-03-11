import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private meta: Meta, private title: Title) { }

  /**
   * Définit les meta-données pour une page spécifique
   * @param title Titre de la page
   * @param description Meta-description de la page
   * @param keywords Mots-clés pour la page (optionnel)
   */
  updateMetaTags(title: string, description: string, keywords?: string): void {
    // Mise à jour du titre
    this.title.setTitle(title);

    // Mise à jour de la meta-description
    if (this.meta.getTag('name="description"')) {
      this.meta.updateTag({ name: 'description', content: description });
    } else {
      this.meta.addTag({ name: 'description', content: description });
    }

    // Mise à jour des mots-clés si fournis
    if (keywords) {
      if (this.meta.getTag('name="keywords"')) {
        this.meta.updateTag({ name: 'keywords', content: keywords });
      } else {
        this.meta.addTag({ name: 'keywords', content: keywords });
      }
    }
  }

  /**
   * Définit les meta-données pour la page d'accueil
   */
  setHomePageMeta(): void {
    this.updateMetaTags(
      "MFinances - Cabinet d'expertise comptable à Bruxelles",
      "MFinances est un cabinet d'expertise comptable à Bruxelles offrant des services de comptabilité, fiscalité et conseil aux entreprises et indépendants.",
      "expertise comptable, comptabilité, fiscalité, audit, gestion d'entreprise, Bruxelles"
    );
  }

  /**
   * Définit les meta-données pour la page À propos
   */
  setAboutPageMeta(): void {
    this.updateMetaTags(
      'À propos de MFinances - Notre expertise comptable',
      "Découvrez MFinances, cabinet d'expertise comptable à Bruxelles. Notre équipe de professionnels vous accompagne dans la gestion financière de votre entreprise.",
      'à propos, cabinet comptable, expertise comptable, équipe MFinances, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Contact
   */
  setContactPageMeta(): void {
    this.updateMetaTags(
      "Contactez MFinances - Cabinet d'expertise comptable",
      "Contactez notre cabinet d'expertise comptable à Bruxelles. Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner.",
      'contact, cabinet comptable, expertise comptable, rendez-vous, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Tarifs
   */
  setTarifPageMeta(): void {
    this.updateMetaTags(
      "Tarifs MFinances - Services d'expertise comptable",
      "Découvrez nos tarifs pour nos services d'expertise comptable, fiscalité et conseil aux entreprises et indépendants à Bruxelles.",
      'tarifs, prix, services comptables, expertise comptable, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Indépendants
   */
  setIndependantPageMeta(): void {
    this.updateMetaTags(
      'Services comptables pour indépendants - MFinances',
      'MFinances propose des services comptables adaptés aux besoins des indépendants à Bruxelles. Comptabilité, fiscalité et conseil personnalisé.',
      'indépendants, comptabilité indépendant, fiscalité, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page ASBL
   */
  setAbslPageMeta(): void {
    this.updateMetaTags(
      'Services comptables pour ASBL - MFinances',
      'MFinances propose des services comptables spécialisés pour les ASBL à Bruxelles. Comptabilité, fiscalité et conseil adapté aux associations.',
      'ASBL, association, comptabilité association, fiscalité ASBL, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Société de Management Patrimoniale
   */
  setSocieteManagementPatrimonialePageMeta(): void {
    this.updateMetaTags(
      'Expertise comptable pour sociétés patrimoniales - MFinances',
      'MFinances accompagne les sociétés de management patrimonial à Bruxelles avec des services comptables et fiscaux adaptés à la gestion de patrimoine.',
      'société patrimoniale, gestion de patrimoine, comptabilité, fiscalité, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Société Moyenne
   */
  setSocieteMoyenPageMeta(): void {
    this.updateMetaTags(
      'Services comptables pour PME - MFinances',
      'MFinances propose des services comptables et fiscaux adaptés aux PME à Bruxelles. Optimisation fiscale, comptabilité et conseil pour votre entreprise.',
      'PME, comptabilité PME, fiscalité entreprise, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Société d'Exploitation
   */
  setSocieteExploitationPageMeta(): void {
    this.updateMetaTags(
      "Expertise comptable pour sociétés d'exploitation - MFinances",
      "MFinances accompagne les sociétés d'exploitation à Bruxelles avec des services comptables et fiscaux adaptés à leurs besoins spécifiques.",
      "société d'exploitation, comptabilité, fiscalité, Bruxelles"
    );
  }

  /**
   * Définit les meta-données pour la page Commerçant/Horeca
   */
  setCommercantHorecaPageMeta(): void {
    this.updateMetaTags(
      'Services comptables pour commerçants et Horeca - MFinances',
      'MFinances propose des services comptables spécialisés pour les commerçants et le secteur Horeca à Bruxelles. Comptabilité, fiscalité et conseil adapté.',
      'commerçant, Horeca, restaurant, comptabilité, fiscalité, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Professionnel de Santé
   */
  setProfessionnelSantePageMeta(): void {
    this.updateMetaTags(
      'Expertise comptable pour professionnels de santé - MFinances',
      "MFinances accompagne les professionnels de santé à Bruxelles avec des services comptables et fiscaux adaptés à leur secteur d'activité.",
      'professionnel de santé, médecin, dentiste, comptabilité, fiscalité, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Grande Entreprise
   */
  setGrandeEntreprisePageMeta(): void {
    this.updateMetaTags(
      'Services comptables pour grandes entreprises - MFinances',
      'MFinances propose des services comptables et fiscaux pour les grandes entreprises à Bruxelles. Expertise, conseil et accompagnement personnalisé.',
      'grande entreprise, comptabilité, fiscalité, audit, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Promoteur Immobilier
   */
  setPromoteurImmobilierPageMeta(): void {
    this.updateMetaTags(
      'Expertise comptable pour promoteurs immobiliers - MFinances',
      "MFinances accompagne les promoteurs immobiliers à Bruxelles avec des services comptables et fiscaux adaptés au secteur de l'immobilier.",
      'promoteur immobilier, immobilier, comptabilité, fiscalité, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Services
   */
  setServicesPageMeta(): void {
    this.updateMetaTags(
      "Nos services d'expertise comptable - MFinances",
      "Découvrez les services d'expertise comptable proposés par MFinances à Bruxelles. Comptabilité, fiscalité, audit et conseil pour votre entreprise.",
      'services comptables, expertise comptable, fiscalité, audit, conseil, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Vente
   */
  setVentePageMeta(): void {
    this.updateMetaTags(
      'Services de vente et acquisition - MFinances',
      "MFinances vous accompagne dans vos projets de vente et d'acquisition d'entreprises à Bruxelles. Expertise comptable et conseil personnalisé.",
      'vente entreprise, acquisition, transmission, comptabilité, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Trésorerie
   */
  setTresoreriePageMeta(): void {
    this.updateMetaTags(
      'Gestion de trésorerie - MFinances',
      'MFinances vous accompagne dans la gestion de trésorerie de votre entreprise à Bruxelles. Optimisation, prévision et conseil personnalisé.',
      'trésorerie, gestion financière, comptabilité, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Comptabilité
   */
  setComptabilitePageMeta(): void {
    this.updateMetaTags(
      'Expert-comptable Odoo Belgique – Comptabilité en temps réel pour PME, ASBL, promoteurs, Horeca | MFinances',
      'Expert-comptable spécialisé Odoo. Comptabilité en temps réel, tableaux de bord financiers, suivi fiscal intégré à votre ERP. MFinances accompagne indépendants, PME, ASBL et promoteurs. Demandez un appel gratuit.',
      'comptabilité, expert-comptable odoo, odoo belgique, comptabilité pme, comptabilité asbl, comptabilité promoteur immobilier'
    );
  }

  /**
   * Définit les meta-données pour la page Fiscalité
   */
  setFiscalitePageMeta(): void {
    this.updateMetaTags(
      'Conseil fiscal et optimisation fiscale - MFinances',
      "MFinances vous accompagne dans l'optimisation fiscale de votre entreprise à Bruxelles. Conseil fiscal, planification et stratégie fiscale adaptée.",
      'fiscalité, optimisation fiscale, conseil fiscal, impôts, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Création d\'entreprise
   */
  setCreationEntreprisePageMeta(): void {
    this.updateMetaTags(
      "Accompagnement à la création d'entreprise - MFinances",
      'MFinances vous accompagne dans la création de votre entreprise à Bruxelles. Conseil, démarches administratives et choix de la forme juridique.',
      'création entreprise, démarrage activité, forme juridique, statuts, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Déclaration d\'impôt
   */
  setDeclarationImpotPageMeta(): void {
    this.updateMetaTags(
      "Services de déclaration d'impôt - MFinances",
      'MFinances vous accompagne dans la préparation et le dépôt de vos déclarations fiscales à Bruxelles. Service professionnel pour particuliers et entreprises.',
      'déclaration impôt, déclaration fiscale, IPP, ISOC, TVA, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Trésorerie Bénéfice
   */
  setTresorerieBeneficePageMeta(): void {
    this.updateMetaTags(
      'Optimiser la trésorerie de votre entreprise - MFinances',
      "MFinances vous accompagne dans l'optimisation de la trésorerie et des bénéfices de votre entreprise à Bruxelles. Conseils et stratégies personnalisés.",
      'trésorerie, bénéfices, optimisation, gestion financière, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Investir Trésorerie
   */
  setInvestirTresoreriePageMeta(): void {
    this.updateMetaTags(
      'Investir la trésorerie de votre entreprise - MFinances',
      'MFinances vous conseille sur les meilleures stratégies pour investir la trésorerie de votre entreprise à Bruxelles. Maximisez vos rendements en toute sécurité.',
      'investir trésorerie, placement, rendement, gestion financière, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Optimiser Stock
   */
  setOptimiserStockPageMeta(): void {
    this.updateMetaTags(
      'Optimisation des stocks et de la trésorerie - MFinances',
      'MFinances vous aide à optimiser la gestion de vos stocks pour améliorer votre trésorerie. Conseils et stratégies adaptés à votre entreprise à Bruxelles.',
      'optimisation stock, gestion stock, trésorerie, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Alerte Trésorerie
   */
  setAlerteTresoreriePageMeta(): void {
    this.updateMetaTags(
      "Système d'alerte trésorerie pour entreprises - MFinances",
      "MFinances propose un système d'alerte trésorerie pour anticiper les difficultés financières de votre entreprise à Bruxelles. Prévention et gestion proactive.",
      'alerte trésorerie, prévention, difficultés financières, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Protéger sa Trésorerie
   */
  setProtegerTresoreriePageMeta(): void {
    this.updateMetaTags(
      'Protéger la trésorerie de votre entreprise - MFinances',
      'MFinances vous accompagne dans la protection de la trésorerie de votre entreprise à Bruxelles. Stratégies et conseils pour sécuriser vos liquidités.',
      'protection trésorerie, sécurité financière, liquidités, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Anticiper sa Trésorerie
   */
  setAnticiperTresoreriePageMeta(): void {
    this.updateMetaTags(
      'Anticiper les besoins en trésorerie - MFinances',
      'MFinances vous aide à anticiper les besoins en trésorerie de votre entreprise à Bruxelles. Prévisions financières et planification stratégique.',
      'anticipation trésorerie, prévisions financières, planification, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Accompagnement Trésorerie
   */
  setAccompagnementTresoreriePageMeta(): void {
    this.updateMetaTags(
      'Accompagnement en gestion de trésorerie - MFinances',
      "MFinances propose un accompagnement personnalisé en gestion de trésorerie pour votre entreprise à Bruxelles. Conseils d'experts et suivi régulier.",
      'accompagnement trésorerie, gestion financière, conseil, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Passage en Société
   */
  setPassageEnSocietePageMeta(): void {
    this.updateMetaTags(
      'Passer en Société: Est-ce Rentable pour Vous? | Diagnostic Gratuit | MFINANCES',
      'Découvrez en 2 minutes si le passage en société est rentable pour vous. Diagnostic gratuit + simulation personnalisée par experts-comptables. +20 ans d\'expérience à Bruxelles.',
      'passage en société, diagnostic gratuit, SRL Belgique, optimisation fiscale, expert-comptable Bruxelles, économie impôts, création société'
    );
  }

  /**
   * Définit les meta-données pour la page Compte Courant Administrateur
   */
  setCompteCourantPageMeta(): void {
    this.updateMetaTags(
      "Gestion du compte courant d'administrateur - MFinances",
      "MFinances vous conseille sur la gestion optimale de votre compte courant d'administrateur. Optimisation fiscale et comptable à Bruxelles.",
      'compte courant administrateur, gestion financière, optimisation fiscale, Bruxelles'
    );
  }

  /**
   * Définit les meta-données pour la page Salarié ou Indépendant
   */
  setSalarieIndependantPageMeta(): void {
    this.updateMetaTags(
      'Salarié ou indépendant : quel statut choisir ? - MFinances',
      "MFinances vous aide à choisir entre le statut de salarié ou d'indépendant à Bruxelles. Analyse comparative des avantages et inconvénients de chaque statut.",
      'salarié, indépendant, statut professionnel, comparaison, Bruxelles'
    );
  }
}
