const fs = require("fs");
const path = require("path");

// Configuration des métadonnées pour chaque route
const routeMetadata = {
  index: {
    title: "MFinances - Cabinet d'expertise comptable à Bruxelles",
    description:
      "MFinances est un cabinet d'expertise comptable à Bruxelles offrant des services de comptabilité, fiscalité et conseil aux entreprises et indépendants.",
    keywords:
      "expertise comptable, comptabilité, fiscalité, audit, gestion d'entreprise, Bruxelles",
  },
  about: {
    title: "À propos de MFinances - Notre histoire et notre équipe",
    description:
      "Découvrez l'histoire de MFinances, notre équipe d'experts comptables et notre approche personnalisée pour accompagner votre entreprise à Bruxelles.",
    keywords:
      "cabinet comptable, équipe comptable, expert-comptable Bruxelles, histoire MFinances",
  },
  contact: {
    title: "Contactez MFinances - Cabinet d'expertise comptable à Bruxelles",
    description:
      "Prenez contact avec notre cabinet d'expertise comptable à Bruxelles. Nous répondons à toutes vos questions concernant nos services de comptabilité et fiscalité.",
    keywords:
      "contact comptable, rendez-vous expert-comptable, cabinet comptable Bruxelles",
  },
  tarif: {
    title: "Tarifs MFinances - Services comptables et fiscaux à Bruxelles",
    description:
      "Consultez nos tarifs pour nos services d'expertise comptable, fiscalité et conseil aux entreprises et indépendants à Bruxelles.",
    keywords:
      "tarif comptable, prix expertise comptable, honoraires comptable, forfait comptabilité",
  },
  "profil-independant": {
    title: "Services comptables pour indépendants - MFinances Bruxelles",
    description:
      "MFinances propose des services comptables et fiscaux adaptés aux besoins spécifiques des indépendants à Bruxelles.",
    keywords:
      "comptable indépendant, fiscalité freelance, comptabilité auto-entrepreneur",
  },
  absl: {
    title: "Comptabilité pour ASBL - MFinances Bruxelles",
    description:
      "Services comptables spécialisés pour les associations sans but lucratif (ASBL) à Bruxelles. Expertise en comptabilité associative.",
    keywords: "comptabilité ASBL, expert-comptable association, fiscalité ASBL",
  },
  "societe-management-patrimoniale": {
    title: "Comptabilité pour sociétés de management patrimonial - MFinances",
    description:
      "Services comptables et fiscaux spécialisés pour les sociétés de management patrimonial à Bruxelles. Optimisation fiscale et gestion patrimoniale.",
    keywords:
      "comptabilité société patrimoniale, gestion patrimoine, fiscalité patrimoniale",
  },
  "societe-moyen": {
    title: "Comptabilité pour PME et sociétés moyennes - MFinances Bruxelles",
    description:
      "Services comptables adaptés aux PME et sociétés de taille moyenne à Bruxelles. Expertise en comptabilité, fiscalité et gestion financière.",
    keywords:
      "comptabilité PME, expert-comptable société moyenne, fiscalité entreprise",
  },
  "societe-exploitation": {
    title: "Comptabilité pour sociétés d'exploitation - MFinances Bruxelles",
    description:
      "Services comptables spécialisés pour les sociétés d'exploitation à Bruxelles. Optimisation fiscale et gestion financière.",
    keywords:
      "comptabilité société exploitation, fiscalité entreprise, gestion financière",
  },
  "commercant-horeca": {
    title: "Comptabilité pour commerçants et HORECA - MFinances Bruxelles",
    description:
      "Services comptables adaptés aux commerçants et au secteur HORECA à Bruxelles. Expertise en comptabilité, fiscalité et gestion financière.",
    keywords:
      "comptabilité HORECA, comptable restaurant, fiscalité commerce, comptabilité café",
  },
  "professionel-sante": {
    title: "Comptabilité pour professionnels de la santé - MFinances Bruxelles",
    description:
      "Services comptables spécialisés pour les professionnels de la santé à Bruxelles. Expertise en comptabilité médicale et fiscalité.",
    keywords:
      "comptabilité médecin, fiscalité profession libérale, comptable dentiste, comptabilité kinésithérapeute",
  },
  "grande-entreprise": {
    title: "Services comptables pour grandes entreprises - MFinances Bruxelles",
    description:
      "Services comptables et fiscaux adaptés aux grandes entreprises à Bruxelles. Expertise en comptabilité, audit et conseil financier.",
    keywords:
      "comptabilité grande entreprise, audit financier, conseil fiscal entreprise",
  },
  "promoteur-immobilier": {
    title: "Comptabilité pour promoteurs immobiliers - MFinances Bruxelles",
    description:
      "Services comptables spécialisés pour les promoteurs immobiliers à Bruxelles. Expertise en comptabilité immobilière et fiscalité.",
    keywords:
      "comptabilité immobilière, fiscalité promoteur immobilier, comptable immobilier",
  },
  services: {
    title: "Services comptables et fiscaux - MFinances Bruxelles",
    description:
      "Découvrez nos services d'expertise comptable, fiscalité, audit et conseil aux entreprises et indépendants à Bruxelles.",
    keywords:
      "services comptables, expertise fiscale, conseil financier, audit comptable",
  },
  "services-comptabilite": {
    title: "Services de comptabilité - MFinances Bruxelles",
    description:
      "Services de comptabilité pour entreprises et indépendants à Bruxelles. Tenue comptable, bilan annuel et reporting financier.",
    keywords:
      "tenue comptable, bilan annuel, comptabilité entreprise, reporting financier",
  },
  "services-fiscalite": {
    title: "Services de fiscalité - MFinances Bruxelles",
    description:
      "Services de fiscalité pour entreprises et indépendants à Bruxelles. Déclarations fiscales, optimisation fiscale et conseil.",
    keywords:
      "déclaration fiscale, optimisation fiscale, conseil fiscal, impôt société",
  },
  "services-creation-entreprise": {
    title: "Création d'entreprise - MFinances Bruxelles",
    description:
      "Accompagnement à la création d'entreprise à Bruxelles. Conseil en structure juridique, business plan et démarches administratives.",
    keywords:
      "création entreprise, création société, business plan, statuts société",
  },
  "services-declaration-impot": {
    title: "Déclaration d'impôt - MFinances Bruxelles",
    description:
      "Services de déclaration d'impôt pour particuliers et entreprises à Bruxelles. Optimisation fiscale et conseil personnalisé.",
    keywords:
      "déclaration impôt, impôt des personnes physiques, impôt société, optimisation fiscale",
  },
  vente: {
    title: "Conseils pour la vente d'entreprise - MFinances Bruxelles",
    description:
      "Conseils et accompagnement pour la vente d'entreprise à Bruxelles. Évaluation, optimisation et structuration de la transaction.",
    keywords:
      "vente entreprise, cession société, évaluation entreprise, transmission entreprise",
  },
  "vente-passage-en-societe": {
    title: "Passage en société - MFinances Bruxelles",
    description:
      "Accompagnement pour le passage en société à Bruxelles. Conseil en structure juridique, fiscalité et démarches administratives.",
    keywords:
      "passage en société, création société, indépendant en société, avantages société",
  },
  "vente-compte-courant": {
    title: "Gestion du compte courant - MFinances Bruxelles",
    description:
      "Conseils pour la gestion optimale du compte courant d'associé à Bruxelles. Optimisation fiscale et financière.",
    keywords:
      "compte courant associé, gestion compte courant, fiscalité compte courant",
  },
  "vente-salarie-independant": {
    title: "Passage de salarié à indépendant - MFinances Bruxelles",
    description:
      "Accompagnement pour le passage de salarié à indépendant à Bruxelles. Conseil en statut, fiscalité et démarches administratives.",
    keywords:
      "salarié à indépendant, devenir indépendant, statut indépendant, fiscalité indépendant",
  },
  tresorerie: {
    title: "Gestion de trésorerie - MFinances Bruxelles",
    description:
      "Services de gestion et d'optimisation de trésorerie pour entreprises à Bruxelles. Prévisions, suivi et conseil financier.",
    keywords:
      "gestion trésorerie, optimisation cash flow, prévisions financières, suivi trésorerie",
  },
  "tresorerie-tresorerie-benefice": {
    title: "Gestion de la trésorerie et des bénéfices - MFinances Bruxelles",
    description:
      "Conseils pour la gestion optimale de la trésorerie et des bénéfices de votre entreprise à Bruxelles.",
    keywords:
      "gestion bénéfices, optimisation trésorerie, distribution dividendes, réserves entreprise",
  },
  "tresorerie-investir-tresorerie": {
    title: "Investir sa trésorerie - MFinances Bruxelles",
    description:
      "Conseils pour investir efficacement la trésorerie de votre entreprise à Bruxelles. Stratégies d'investissement et optimisation fiscale.",
    keywords:
      "investir trésorerie, placement trésorerie entreprise, optimisation cash",
  },
  "tresorerie-optimiser-stock": {
    title: "Optimisation des stocks - MFinances Bruxelles",
    description:
      "Conseils pour l'optimisation des stocks et de la trésorerie de votre entreprise à Bruxelles.",
    keywords:
      "optimisation stock, gestion inventaire, rotation stock, trésorerie stock",
  },
  "tresorerie-alerte-tresorerie": {
    title: "Alerte trésorerie - MFinances Bruxelles",
    description:
      "Service d'alerte trésorerie pour anticiper les difficultés financières de votre entreprise à Bruxelles.",
    keywords:
      "alerte trésorerie, prévention difficultés, suivi financier, tableau de bord",
  },
  "tresorerie-proteger-sa-tresorerie": {
    title: "Protéger sa trésorerie - MFinances Bruxelles",
    description:
      "Conseils pour protéger la trésorerie de votre entreprise à Bruxelles. Stratégies de sécurisation et optimisation.",
    keywords:
      "protection trésorerie, sécurisation cash, gestion risque financier",
  },
  "tresorerie-anticiper-sa-tresorerie": {
    title: "Anticiper sa trésorerie - MFinances Bruxelles",
    description:
      "Conseils pour anticiper les besoins en trésorerie de votre entreprise à Bruxelles. Prévisions et planification financière.",
    keywords:
      "prévision trésorerie, planification financière, budget trésorerie, cash flow prévisionnel",
  },
  "tresorerie-accompagnement": {
    title: "Accompagnement trésorerie - MFinances Bruxelles",
    description:
      "Service d'accompagnement personnalisé pour la gestion de trésorerie de votre entreprise à Bruxelles.",
    keywords:
      "accompagnement trésorerie, conseil financier, suivi trésorerie, gestion financière",
  },
};

// Fonction pour générer un fichier HTML avec les métadonnées spécifiques
function generateHtmlFile(route, metadata) {
  const templatePath = path.join(__dirname, "index.html");

  // Pour Vercel, le chemin de sortie est différent
  const outputDir = process.env.VERCEL
    ? path.join(__dirname, "..", ".vercel", "output", "static")
    : path.join(__dirname, "..", "dist", "mfinances", "browser");

  // Créer le répertoire de sortie s'il n'existe pas
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Lire le template HTML
  let htmlContent = fs.readFileSync(templatePath, "utf8");

  // Remplacer les métadonnées
  htmlContent = htmlContent.replace(
    /<title>.*?<\/title>/,
    `<title>${metadata.title}</title>`
  );
  htmlContent = htmlContent.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/>/,
    `<meta name="description" content="${metadata.description}" />`
  );
  htmlContent = htmlContent.replace(
    /<meta\s+name="keywords"\s+content=".*?"\s*\/>/,
    `<meta name="keywords" content="${metadata.keywords}" />`
  );

  // Déterminer le nom du fichier de sortie
  const outputFileName = route === "index" ? "index.html" : `${route}.html`;
  const outputPath = path.join(outputDir, outputFileName);

  // Écrire le fichier HTML
  fs.writeFileSync(outputPath, htmlContent);
  console.log(`Fichier généré: ${outputPath}`);
}

// Générer les fichiers HTML pour chaque route
Object.entries(routeMetadata).forEach(([route, metadata]) => {
  generateHtmlFile(route, metadata);
});

console.log("Génération des fichiers HTML terminée.");
