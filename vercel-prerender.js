const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Liste des routes à pré-rendre
const routes = [
  "",
  "accueil",
  "about",
  "contact",
  "tarif",
  "profil-independant",
  "absl",
  "societe-management-patrimoniale",
  "societe-moyen",
  "societe-exploitation",
  "commercant-horeca",
  "professionel-sante",
  "grande-entreprise",
  "promoteur-immobilier",
  "services",
  "vente",
  "tresorerie",
];

// Fonction pour créer le HTML statique pour chaque route
function prerenderRoutes() {
  // Créer le répertoire de sortie s'il n'existe pas
  const outputDir = path.join(__dirname, "dist", "prerendered");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Charger le template HTML de base
  const baseHtml = fs.readFileSync(
    path.join(__dirname, "src", "index.html"),
    "utf8"
  );

  // Pour chaque route, créer une version statique avec les métadonnées appropriées
  routes.forEach((route) => {
    console.log(`Pré-rendu de la route: /${route}`);

    // Créer le répertoire pour la route si nécessaire
    const routeDir = path.join(outputDir, route);
    if (route && !fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    // Générer le HTML avec les métadonnées appropriées
    let html = baseHtml;

    // Remplacer les métadonnées en fonction de la route
    const metaTags = getMetaTagsForRoute(route);

    // Remplacer le titre
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${metaTags.title}</title>`
    );

    // Remplacer la description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/>/,
      `<meta name="description" content="${metaTags.description}" />`
    );

    // Remplacer les mots-clés
    if (metaTags.keywords) {
      html = html.replace(
        /<meta\s+name="keywords"\s+content=".*?"\s*\/>/,
        `<meta name="keywords" content="${metaTags.keywords}" />`
      );
    }

    // Écrire le fichier HTML
    const outputFile = path.join(routeDir, "index.html");
    fs.writeFileSync(outputFile, html);
  });

  console.log("Pré-rendu terminé!");
}

// Fonction pour obtenir les métadonnées pour une route spécifique
function getMetaTagsForRoute(route) {
  const metaTags = {
    accueil: {
      title: "MFinances - Cabinet d'expertise comptable à Bruxelles",
      description:
        "MFinances est un cabinet d'expertise comptable à Bruxelles offrant des services de comptabilité, fiscalité et conseil aux entreprises et indépendants.",
      keywords:
        "expertise comptable, comptabilité, fiscalité, audit, gestion d'entreprise, Bruxelles",
    },
    about: {
      title: "À propos de MFinances - Notre expertise comptable",
      description:
        "Découvrez MFinances, cabinet d'expertise comptable à Bruxelles. Notre équipe de professionnels vous accompagne dans la gestion financière de votre entreprise.",
      keywords:
        "à propos, cabinet comptable, expertise comptable, équipe MFinances, Bruxelles",
    },
    contact: {
      title: "Contactez MFinances - Cabinet d'expertise comptable",
      description:
        "Contactez notre cabinet d'expertise comptable à Bruxelles. Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner.",
      keywords:
        "contact, cabinet comptable, expertise comptable, rendez-vous, Bruxelles",
    },
    tarif: {
      title: "Tarifs MFinances - Services d'expertise comptable",
      description:
        "Découvrez nos tarifs pour nos services d'expertise comptable, fiscalité et conseil aux entreprises et indépendants à Bruxelles.",
      keywords:
        "tarifs, prix, services comptables, expertise comptable, Bruxelles",
    },
    "profil-independant": {
      title: "Services comptables pour indépendants - MFinances",
      description:
        "MFinances propose des services comptables adaptés aux besoins des indépendants à Bruxelles. Comptabilité, fiscalité et conseil personnalisé.",
      keywords: "indépendants, comptabilité indépendant, fiscalité, Bruxelles",
    },
    absl: {
      title: "Services comptables pour ASBL - MFinances",
      description:
        "MFinances propose des services comptables spécialisés pour les ASBL à Bruxelles. Comptabilité, fiscalité et conseil adapté aux associations.",
      keywords:
        "ASBL, association, comptabilité association, fiscalité ASBL, Bruxelles",
    },
    "societe-management-patrimoniale": {
      title: "Expertise comptable pour sociétés patrimoniales - MFinances",
      description:
        "MFinances accompagne les sociétés de management patrimonial à Bruxelles avec des services comptables et fiscaux adaptés à la gestion de patrimoine.",
      keywords:
        "société patrimoniale, gestion de patrimoine, comptabilité, fiscalité, Bruxelles",
    },
    "societe-moyen": {
      title: "Services comptables pour PME - MFinances",
      description:
        "MFinances propose des services comptables et fiscaux adaptés aux PME à Bruxelles. Optimisation fiscale, comptabilité et conseil pour votre entreprise.",
      keywords: "PME, comptabilité PME, fiscalité entreprise, Bruxelles",
    },
    "societe-exploitation": {
      title: "Expertise comptable pour sociétés d'exploitation - MFinances",
      description:
        "MFinances accompagne les sociétés d'exploitation à Bruxelles avec des services comptables et fiscaux adaptés à leurs besoins spécifiques.",
      keywords: "société d'exploitation, comptabilité, fiscalité, Bruxelles",
    },
    "commercant-horeca": {
      title: "Services comptables pour commerçants et Horeca - MFinances",
      description:
        "MFinances propose des services comptables spécialisés pour les commerçants et le secteur Horeca à Bruxelles. Comptabilité, fiscalité et conseil adapté.",
      keywords:
        "commerçant, Horeca, restaurant, comptabilité, fiscalité, Bruxelles",
    },
    "professionel-sante": {
      title: "Expertise comptable pour professionnels de santé - MFinances",
      description:
        "MFinances accompagne les professionnels de santé à Bruxelles avec des services comptables et fiscaux adaptés à leur secteur d'activité.",
      keywords:
        "professionnel de santé, médecin, dentiste, comptabilité, fiscalité, Bruxelles",
    },
    "grande-entreprise": {
      title: "Services comptables pour grandes entreprises - MFinances",
      description:
        "MFinances propose des services comptables et fiscaux pour les grandes entreprises à Bruxelles. Expertise, conseil et accompagnement personnalisé.",
      keywords: "grande entreprise, comptabilité, fiscalité, audit, Bruxelles",
    },
    "promoteur-immobilier": {
      title: "Expertise comptable pour promoteurs immobiliers - MFinances",
      description:
        "MFinances accompagne les promoteurs immobiliers à Bruxelles avec des services comptables et fiscaux adaptés au secteur de l'immobilier.",
      keywords:
        "promoteur immobilier, immobilier, comptabilité, fiscalité, Bruxelles",
    },
    services: {
      title: "Nos services d'expertise comptable - MFinances",
      description:
        "Découvrez les services d'expertise comptable proposés par MFinances à Bruxelles. Comptabilité, fiscalité, audit et conseil pour votre entreprise.",
      keywords:
        "services comptables, expertise comptable, fiscalité, audit, conseil, Bruxelles",
    },
    vente: {
      title: "Services de vente et acquisition - MFinances",
      description:
        "MFinances vous accompagne dans vos projets de vente et d'acquisition d'entreprises à Bruxelles. Expertise comptable et conseil personnalisé.",
      keywords:
        "vente entreprise, acquisition, transmission, comptabilité, Bruxelles",
    },
    tresorerie: {
      title: "Gestion de trésorerie - MFinances",
      description:
        "MFinances vous accompagne dans la gestion de trésorerie de votre entreprise à Bruxelles. Optimisation, prévision et conseil personnalisé.",
      keywords: "trésorerie, gestion financière, comptabilité, Bruxelles",
    },
  };

  // Si la route est vide, utiliser 'accueil'
  const routeKey = route || "accueil";

  // Retourner les métadonnées pour la route ou les métadonnées par défaut
  return (
    metaTags[routeKey] || {
      title: "MFinances - Cabinet d'expertise comptable à Bruxelles",
      description:
        "MFinances est un cabinet d'expertise comptable à Bruxelles offrant des services de comptabilité, fiscalité et conseil aux entreprises et indépendants.",
      keywords:
        "expertise comptable, comptabilité, fiscalité, audit, gestion d'entreprise, Bruxelles",
    }
  );
}

// Exécuter le pré-rendu
prerenderRoutes();
