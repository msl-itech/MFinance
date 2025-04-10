// vercel-ssr-seo.js - Script pour optimiser le SEO sur Vercel via SSR
const express = require("express");
const path = require("path");
const fs = require("fs");
const compression = require("compression");

// Liste des routes à pré-rendre pour le SEO (reprise du vercel-seo-prerender.js)
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
  "services/comptabilite",
  "services/fiscalite",
  "services/creation-entreprise",
  "services/declaration-impot",
  "vente",
  "vente/passage-en-societe",
  "vente/compte-courant",
  "vente/salarie-independant",
  "tresorerie",
  "tresorerie/tresorerie-benefice",
  "tresorerie/investir-tresorerie",
  "tresorerie/optimiser-stock",
  "tresorerie/alerte-tresorerie",
  "tresorerie/proteger-sa-tresorerie",
  "tresorerie/anticiper-sa-tresorerie",
  "tresorerie/accompagnement",
];

// Fonction pour obtenir les métadonnées pour une route (reprise du vercel-seo-prerender.js)
function getMetaTagsForRoute(route, subRoute = null) {
  // Structure des métadonnées par route
  const metaTags = {
    "": {
      title: "MFinances - Cabinet d'expertise comptable à Bruxelles",
      description:
        "MFinances est un cabinet d'expertise comptable à Bruxelles offrant des services de comptabilité, fiscalité et conseil aux entreprises et indépendants.",
    },
    accueil: {
      title: "MFinances - Cabinet d'expertise comptable à Bruxelles",
      description:
        "MFinances est un cabinet d'expertise comptable à Bruxelles offrant des services de comptabilité, fiscalité et conseil aux entreprises et indépendants.",
    },
    about: {
      title: "À propos de MFinances - Notre expertise comptable",
      description:
        "Découvrez MFinances, cabinet d'expertise comptable à Bruxelles. Notre équipe de professionnels vous accompagne dans la gestion financière de votre entreprise.",
    },
    contact: {
      title: "Contactez MFinances - Cabinet d'expertise comptable",
      description:
        "Contactez notre cabinet d'expertise comptable à Bruxelles. Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner.",
    },
    tarif: {
      title: "Tarifs MFinances - Services d'expertise comptable",
      description:
        "Découvrez nos tarifs pour nos services d'expertise comptable, fiscalité et conseil aux entreprises et indépendants à Bruxelles.",
    },
    "profil-independant": {
      title: "Services comptables pour indépendants - MFinances",
      description:
        "MFinances propose des services comptables adaptés aux besoins des indépendants à Bruxelles. Comptabilité, fiscalité et conseil personnalisé.",
    },
    absl: {
      title: "Services comptables pour ASBL - MFinances",
      description:
        "MFinances propose des services comptables spécialisés pour les ASBL à Bruxelles. Comptabilité, fiscalité et conseil adapté aux associations.",
    },
    "societe-management-patrimoniale": {
      title: "Expertise comptable pour sociétés patrimoniales - MFinances",
      description:
        "MFinances accompagne les sociétés de management patrimonial à Bruxelles avec des services comptables et fiscaux adaptés à la gestion de patrimoine.",
    },
    "societe-moyen": {
      title: "Services comptables pour PME - MFinances",
      description:
        "MFinances propose des services comptables et fiscaux adaptés aux PME à Bruxelles. Optimisation fiscale, comptabilité et conseil pour votre entreprise.",
    },
    "societe-exploitation": {
      title: "Expertise comptable pour sociétés d'exploitation - MFinances",
      description:
        "MFinances accompagne les sociétés d'exploitation à Bruxelles avec des services comptables et fiscaux adaptés à leurs besoins spécifiques.",
    },
    "commercant-horeca": {
      title: "Services comptables pour commerçants et Horeca - MFinances",
      description:
        "MFinances propose des services comptables spécialisés pour les commerçants et le secteur Horeca à Bruxelles. Comptabilité, fiscalité et conseil adapté.",
    },
    "professionel-sante": {
      title: "Expertise comptable pour professionnels de santé - MFinances",
      description:
        "MFinances accompagne les professionnels de santé à Bruxelles avec des services comptables et fiscaux adaptés à leur secteur d'activité.",
    },
    "grande-entreprise": {
      title: "Services comptables pour grandes entreprises - MFinances",
      description:
        "MFinances propose des services comptables et fiscaux pour les grandes entreprises à Bruxelles. Expertise, conseil et accompagnement personnalisé.",
    },
    "promoteur-immobilier": {
      title: "Expertise comptable pour promoteurs immobiliers - MFinances",
      description:
        "MFinances accompagne les promoteurs immobiliers à Bruxelles avec des services comptables et fiscaux adaptés au secteur de l'immobilier.",
    },
    services: {
      title: "Nos services d'expertise comptable - MFinances",
      description:
        "Découvrez les services d'expertise comptable proposés par MFinances à Bruxelles. Comptabilité, fiscalité, audit et conseil pour votre entreprise.",
    },
    vente: {
      title: "Services de vente et acquisition - MFinances",
      description:
        "MFinances vous accompagne dans vos projets de vente et d'acquisition d'entreprises à Bruxelles. Expertise comptable et conseil personnalisé.",
    },
    tresorerie: {
      title: "Gestion de trésorerie - MFinances",
      description:
        "MFinances vous accompagne dans la gestion de trésorerie de votre entreprise à Bruxelles. Optimisation, prévision et conseil personnalisé.",
    },
  };

  // Cas spécifiques pour les sous-routes
  if (subRoute) {
    if (route === "services") {
      if (subRoute === "comptabilite") {
        return {
          title: "Services de comptabilité pour entreprises - MFinances",
          description:
            "MFinances propose des services de comptabilité professionnels pour entreprises et indépendants à Bruxelles. Tenue comptable, bilan, reporting et conseil.",
        };
      } else if (subRoute === "fiscalite") {
        return {
          title: "Conseil fiscal et optimisation fiscale - MFinances",
          description:
            "MFinances vous accompagne dans l'optimisation fiscale de votre entreprise à Bruxelles. Conseil fiscal, planification et stratégie fiscale adaptée.",
        };
      } else if (subRoute === "creation-entreprise") {
        return {
          title: "Accompagnement à la création d'entreprise - MFinances",
          description:
            "MFinances vous accompagne dans la création de votre entreprise à Bruxelles. Conseil, démarches administratives et choix de la forme juridique.",
        };
      } else if (subRoute === "declaration-impot") {
        return {
          title:
            "Déclaration d'impôts pour entreprises et particuliers - MFinances",
          description:
            "MFinances vous accompagne dans la préparation et le dépôt de vos déclarations fiscales à Bruxelles. Service professionnel et personnalisé.",
        };
      }
    } else if (route === "vente") {
      if (subRoute === "passage-en-societe") {
        return {
          title: "Accompagnement pour le passage en société - MFinances",
          description:
            "MFinances vous accompagne dans votre projet de passage en société à Bruxelles. Conseil fiscal, comptable et juridique personnalisé.",
        };
      } else if (subRoute === "compte-courant") {
        return {
          title: "Gestion du compte courant d'associé - MFinances",
          description:
            "MFinances vous propose son expertise pour la gestion optimale de votre compte courant d'associé à Bruxelles. Conseil fiscal et comptable adapté.",
        };
      } else if (subRoute === "salarie-independant") {
        return {
          title: "Passage de salarié à indépendant - MFinances",
          description:
            "MFinances vous accompagne dans votre transition de salarié à indépendant à Bruxelles. Conseil fiscal, comptable et administratif personnalisé.",
        };
      }
    } else if (route === "tresorerie") {
      if (subRoute === "tresorerie-benefice") {
        return {
          title: "Gestion de la trésorerie et des bénéfices - MFinances",
          description:
            "MFinances vous accompagne dans l'optimisation de votre trésorerie et la gestion de vos bénéfices à Bruxelles.",
        };
      } else if (subRoute === "investir-tresorerie") {
        return {
          title: "Conseils pour investir votre trésorerie - MFinances",
          description:
            "MFinances vous propose des solutions pour investir judicieusement votre trésorerie d'entreprise à Bruxelles.",
        };
      } else if (subRoute === "optimiser-stock") {
        return {
          title:
            "Optimisation des stocks pour améliorer la trésorerie - MFinances",
          description:
            "MFinances vous accompagne dans l'optimisation de vos stocks pour améliorer votre trésorerie à Bruxelles.",
        };
      } else if (subRoute === "alerte-tresorerie") {
        return {
          title: "Système d'alerte de trésorerie pour entreprises - MFinances",
          description:
            "MFinances met en place un système d'alerte de trésorerie adapté à votre entreprise à Bruxelles.",
        };
      } else if (subRoute === "proteger-sa-tresorerie") {
        return {
          title:
            "Comment protéger la trésorerie de votre entreprise - MFinances",
          description:
            "MFinances vous propose des solutions pour protéger la trésorerie de votre entreprise à Bruxelles.",
        };
      } else if (subRoute === "anticiper-sa-tresorerie") {
        return {
          title:
            "Anticiper les besoins en trésorerie de votre entreprise - MFinances",
          description:
            "MFinances vous aide à anticiper les besoins en trésorerie de votre entreprise à Bruxelles.",
        };
      } else if (subRoute === "accompagnement") {
        return {
          title: "Accompagnement dans la gestion de trésorerie - MFinances",
          description:
            "MFinances vous propose un accompagnement personnalisé dans la gestion de la trésorerie de votre entreprise à Bruxelles.",
        };
      }
    }
  }

  // Retourner les métadonnées spécifiques à la route ou les métadonnées par défaut
  return metaTags[route] || metaTags[""];
}

// Fonction pour obtenir les mots-clés à mettre en gras pour chaque route
function getKeywordsForRoute(route, subRoute = null) {
  // Structure des mots-clés par route
  const keywordsMap = {
    "": [
      "cabinet comptable bruxelles",
      "expertise comptable",
      "comptabilité",
      "fiscalité",
    ],
    accueil: [
      "cabinet comptable bruxelles",
      "expertise comptable",
      "comptabilité",
      "fiscalité",
    ],
    about: [
      "cabinet d'expertise comptable",
      "comptable bruxelles",
      "services comptables",
    ],
    contact: [
      "contacter expert comptable",
      "cabinet comptable bruxelles",
      "expertise comptable",
    ],
    tarif: [
      "tarifs comptable",
      "prix expertise comptable",
      "services comptables bruxelles",
    ],
    "profil-independant": [
      "comptabilité indépendant",
      "freelance belgique",
      "services comptables indépendants",
    ],
    absl: [
      "comptabilité ASBL",
      "gestion comptable association",
      "fiscalité ASBL",
    ],
    "societe-management-patrimoniale": [
      "société management patrimonial",
      "gestion patrimoine",
      "optimisation fiscale",
    ],
    "societe-moyen": [
      "PME comptabilité",
      "gestion PME",
      "services comptables PME",
    ],
    "societe-exploitation": [
      "société d'exploitation",
      "comptabilité entreprise",
      "gestion comptable",
    ],
    "commercant-horeca": [
      "comptabilité horeca",
      "gestion restaurant",
      "fiscalité commerce",
    ],
    "professionel-sante": [
      "comptabilité professions libérales",
      "médecin comptabilité",
      "fiscalité santé",
    ],
    "grande-entreprise": [
      "comptabilité grande entreprise",
      "audit financier",
      "expertise comptable",
    ],
    "promoteur-immobilier": [
      "comptabilité immobilière",
      "fiscalité immobilier",
      "promoteur immobilier",
    ],
    services: ["services comptables", "expertise fiscale", "conseil financier"],
    vente: [
      "passage en société",
      "société ou indépendant",
      "vente entreprise",
      "optimisation fiscale",
    ],
    tresorerie: [
      "plan de trésorerie",
      "gestion de trésorerie",
      "prévisionnel financier",
      "situation provisoire",
    ],
  };

  // Mots-clés spécifiques pour les sous-routes
  if (subRoute) {
    if (route === "services") {
      if (subRoute === "comptabilite") {
        return [
          "services comptables",
          "tenue comptable",
          "bilan comptable",
          "comptabilité d'entreprise",
        ];
      } else if (subRoute === "fiscalite") {
        return [
          "conseil fiscal",
          "optimisation fiscale",
          "déclaration fiscale",
          "planification fiscale",
        ];
      } else if (subRoute === "creation-entreprise") {
        return [
          "création d'entreprise",
          "lancement société",
          "statut juridique",
          "accompagnement création",
        ];
      } else if (subRoute === "declaration-impot") {
        return [
          "déclaration impôts",
          "déclaration fiscale",
          "optimisation fiscale",
          "conseil fiscal",
        ];
      }
    } else if (route === "vente") {
      if (subRoute === "passage-en-societe") {
        return [
          "passage en société",
          "indépendant vers société",
          "avantages société",
          "création société",
        ];
      } else if (subRoute === "compte-courant") {
        return [
          "compte courant d'associé",
          "gestion compte courant",
          "fiscalité compte courant",
        ];
      } else if (subRoute === "salarie-independant") {
        return [
          "salaire freelance belgique",
          "société ou indépendant",
          "statut freelance",
          "indépendant complémentaire",
        ];
      }
    } else if (route === "tresorerie") {
      if (subRoute === "tresorerie-benefice") {
        return [
          "gestion bénéfices",
          "optimisation trésorerie",
          "affectation résultat",
          "dividendes",
        ];
      } else if (subRoute === "investir-tresorerie") {
        return [
          "investir trésorerie entreprise",
          "placement trésorerie",
          "optimisation financière",
        ];
      } else if (subRoute === "optimiser-stock") {
        return [
          "gestion de stock comptabilité",
          "optimiser stock",
          "gestion de stock d'une entreprise",
        ];
      } else if (subRoute === "alerte-tresorerie") {
        return [
          "alerte trésorerie",
          "suivi trésorerie",
          "prévention défaillance",
        ];
      } else if (subRoute === "proteger-sa-tresorerie") {
        return [
          "protéger trésorerie entreprise",
          "sécurisation financière",
          "gestion prudente",
        ];
      } else if (subRoute === "anticiper-sa-tresorerie") {
        return [
          "plan de trésorerie gratuit",
          "plan de trésorerie glissant",
          "prévisionnel",
          "plan de trésorerie mensuel excel",
        ];
      } else if (subRoute === "accompagnement") {
        return [
          "accompagnement financier",
          "conseil trésorerie",
          "gestion financière",
          "fidélisation clientèle",
        ];
      }
    }
  }

  // Retourner les mots-clés spécifiques à la route ou un tableau vide
  return keywordsMap[route] || [];
}

// Fonction pour trouver le dossier de build Angular
function findBuildFolder() {
  console.log("Recherche du dossier de build...");

  const distPath = path.join(__dirname, "dist");
  if (!fs.existsSync(distPath)) {
    console.log("Erreur: Le dossier dist n'existe pas!");
    return null;
  }

  // Nouvelle structure: dist/mfinances
  const mfinancesPath = path.join(distPath, "mfinances");
  if (
    fs.existsSync(mfinancesPath) &&
    fs.existsSync(path.join(mfinancesPath, "index.html"))
  ) {
    console.log("Structure trouvée: dist/mfinances");
    return mfinancesPath;
  }

  // Ancienne structure: dist/mfinances/browser
  const mfinancesBrowserPath = path.join(distPath, "mfinances", "browser");
  if (
    fs.existsSync(mfinancesBrowserPath) &&
    fs.existsSync(path.join(mfinancesBrowserPath, "index.html"))
  ) {
    console.log("Structure trouvée: dist/mfinances/browser");
    return mfinancesBrowserPath;
  }

  // Cas 2: dist/browser
  const browserPath = path.join(distPath, "browser");
  if (
    fs.existsSync(browserPath) &&
    fs.existsSync(path.join(browserPath, "index.html"))
  ) {
    console.log("Structure trouvée: dist/browser");
    return browserPath;
  }

  // Cas 3: dist contient directement le build
  const indexPath = path.join(distPath, "index.html");
  if (fs.existsSync(indexPath)) {
    console.log("Structure trouvée: dist");
    return distPath;
  }

  console.log("Aucune structure valide trouvée!");
  return null;
}

// Fonction pour générer les fichiers HTML statiques
function generateStaticHtmlFiles() {
  console.log("Génération des fichiers HTML statiques...");

  // Trouver le dossier de build
  const buildFolder = findBuildFolder();
  if (!buildFolder) {
    console.log(
      "Impossible de trouver le dossier de build. Opération annulée."
    );
    return;
  }

  console.log(`Dossier de build trouvé: ${buildFolder}`);

  // Fichier index.html source
  const indexPath = path.join(buildFolder, "index.html");
  if (!fs.existsSync(indexPath)) {
    console.log(`Le fichier index.html n'existe pas dans ${buildFolder}`);
    return;
  }

  let indexHtml = fs.readFileSync(indexPath, "utf8");
  console.log(`Fichier index.html chargé (${indexHtml.length} caractères)`);

  // Vérifier le contenu du fichier source
  const hasAppRoot = indexHtml.includes("<app-root");
  console.log(
    `Le fichier index.html contient-il app-root? ${hasAppRoot ? "Oui" : "Non"}`
  );

  // Pour chaque route
  routes.forEach((route) => {
    console.log(`Traitement de la route: /${route}`);

    let parts = route.split("/");
    let mainRoute = parts[0];
    let subRoute = parts.length > 1 ? parts[1] : null;

    //     // Créer une redirection pour '/accueil' vers '/'
    //     if (route === "accueil") {
    //       console.log("Création d'une redirection de /accueil vers /");

    //       const redirectHtml = `<!DOCTYPE html>
    // <html>
    //   <head>
    //     <meta charset="utf-8">
    //     <title>Redirection</title>
    //     <meta name="robots" content="noindex">
    //     <link rel="canonical" href="https://www.mfinances.be/" />
    //     <meta http-equiv="refresh" content="0;url=https://www.mfinances.be/" />
    //   </head>
    //   <body>
    //     <p>Redirection vers <a href="https://www.mfinances.be/">la page d'accueil</a>...</p>
    //   </body>
    // </html>`;

    //       const redirectPath = path.join(buildFolder, route);
    //       if (!fs.existsSync(redirectPath)) {
    //         fs.mkdirSync(redirectPath, { recursive: true });
    //       }

    //       fs.writeFileSync(path.join(redirectPath, "index.html"), redirectHtml);
    //       console.log(`Redirection créée pour la route /${route}`);
    //       return; // Passer à la route suivante
    //     }

    // Obtenir les métadonnées pour cette route
    const metaData = getMetaTagsForRoute(mainRoute, subRoute);

    // Obtenir les mots-clés pour cette route
    const keywords = getKeywordsForRoute(mainRoute, subRoute);

    // Générer la chaîne de mots-clés pour meta keywords
    const keywordsString = keywords.join(", ");

    // Ajuster le HTML pour l'optimisation SEO
    let html = indexHtml;

    // Remplacer le titre
    if (metaData.title) {
      html = html.replace(
        /<title>[^<]*<\/title>/,
        `<title>${metaData.title}</title>`
      );
    }

    // Remplacer la description
    if (metaData.description) {
      const descPattern = /<meta\s+name="description"\s+content="[^"]*"/;
      if (html.match(descPattern)) {
        html = html.replace(
          descPattern,
          `<meta name="description" content="${metaData.description}"`
        );
      } else {
        // Si la balise meta description n'existe pas, l'ajouter
        html = html.replace(
          /<\/head>/,
          `  <meta name="description" content="${metaData.description}">\n</head>`
        );
      }
    }

    // Ajouter ou mettre à jour la balise meta keywords
    const keywordsPattern = /<meta\s+name="keywords"\s+content="[^"]*"/;
    if (html.match(keywordsPattern)) {
      html = html.replace(
        keywordsPattern,
        `<meta name="keywords" content="expertise comptable, comptabilité, fiscalité, ${keywordsString}"`
      );
    } else {
      // Si la balise meta keywords n'existe pas, l'ajouter
      html = html.replace(
        /<\/head>/,
        `  <meta name="keywords" content="expertise comptable, comptabilité, fiscalité, ${keywordsString}">\n</head>`
      );
    }

    // Ajouter les balises canoniques
    const canonicalUrl = route
      ? `https://www.mfinances.be/${route}`
      : `https://www.mfinances.be/`;

    html = html.replace(
      /<\/head>/,
      `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`
    );

    // Ajouter une div avec un attribut data-route pour faciliter le débogage
    html = html.replace(/<app-root/, `<app-root data-route="${route}"`);

    // Ajouter une balise H1 directement dans le HTML prérendu pour le SEO
    html = html.replace(
      /<app-root data-route="[^"]*">/,
      `<app-root data-route="${route}">`
    );

    // Ajouter une div avec les mots-clés en gras juste avant la fermeture du body
    html = html.replace(
      /<\/body>/,
      `  <div style="position:absolute; left:-9999px; width:1px; height:1px; overflow:hidden;">
        <h1 style="font-size: 0;">${
          metaData.title ||
          "MFinances - Cabinet d'expertise comptable à Bruxelles"
        }</h1>
        ${keywords.map((kw) => `<b>${kw}</b>`).join(" ")}
      </div>
    </body>`
    );

    // Déterminer le chemin de sortie
    let outputPath;
    if (route === "") {
      // Page d'accueil
      outputPath = path.join(buildFolder, "index.html");
      console.log(`Sauvegarde de la page d'accueil vers: ${outputPath}`);
    } else {
      // Autres pages
      outputPath = path.join(buildFolder, route);

      // Créer les dossiers intermédiaires si nécessaire
      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
      }

      outputPath = path.join(outputPath, "index.html");
      console.log(`Sauvegarde vers: ${outputPath}`);
    }

    // Écrire le fichier
    fs.writeFileSync(outputPath, html);
    console.log(`Route /${route} traitée avec succès`);
  });

  console.log("Génération des fichiers HTML statiques terminée!");
}

// Exécuter la génération des fichiers HTML statiques
generateStaticHtmlFiles();

// Création du fichier server.js pour Vercel
function createServerJs() {
  try {
    console.log("=== CRÉATION DU FICHIER SERVER.JS POUR VERCEL ===");

    const serverJsContent = `
const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');

// Constants
const PORT = process.env.PORT || 4000;
let DIST_FOLDER = '';

// Determine build folder structure
function findBuildFolder() {
  const distPath = path.join(__dirname, 'dist');
  if (!fs.existsSync(distPath)) {
    console.log('Erreur: Le dossier dist n\\'existe pas!');
    return null;
  }

  // Nouvelle structure: dist/mfinances
  const mfinancesPath = path.join(distPath, 'mfinances');
  if (fs.existsSync(mfinancesPath) && fs.existsSync(path.join(mfinancesPath, 'index.html'))) {
    console.log('Structure trouvée: dist/mfinances');
    return mfinancesPath;
  }

  // Ancienne structure: dist/mfinances/browser
  const mfinancesBrowserPath = path.join(distPath, 'mfinances', 'browser');
  if (fs.existsSync(mfinancesBrowserPath) && fs.existsSync(path.join(mfinancesBrowserPath, 'index.html'))) {
    console.log('Structure trouvée: dist/mfinances/browser');
    return mfinancesBrowserPath;
  }

  // Cas 2: dist/browser
  const browserPath = path.join(distPath, 'browser');
  if (fs.existsSync(browserPath) && fs.existsSync(path.join(browserPath, 'index.html'))) {
    console.log('Structure trouvée: dist/browser');
    return browserPath;
  }

  // Cas 3: dist contient directement le build
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    console.log('Structure trouvée: dist');
    return distPath;
  }

  console.log('Aucune structure valide trouvée!');
  return null;
}

// Find build folder
DIST_FOLDER = findBuildFolder();
if (!DIST_FOLDER) {
  console.error('Impossible de trouver le dossier de build. Arrêt du serveur.');
  process.exit(1);
}

// Create express app
const app = express();

// Compression
app.use(compression());

// Serve static files
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// Handle all other routes
app.get('*', (req, res) => {
  // Extract route from URL
  const url = req.url.split('?')[0];
  let route = url.replace(/^\\//, ''); // Remove leading slash
  
  // Determine the path to the prerendered HTML file
  let htmlPath;
  if (route === '') {
    htmlPath = path.join(DIST_FOLDER, 'index.html');
  } else {
    htmlPath = path.join(DIST_FOLDER, route, 'index.html');
  }
  
  // Check if a prerendered file exists for this route
  if (fs.existsSync(htmlPath)) {
    // Serve the prerendered file
    res.sendFile(htmlPath);
  } else {
    // Fallback to the default index.html
    res.sendFile(path.join(DIST_FOLDER, 'index.html'));
  }
});

// Start server
app.listen(PORT, () => {
  console.log(\`Node Express server listening on http://localhost:\${PORT}\`);
});
`;

    fs.writeFileSync("server.js", serverJsContent);
    console.log("✅ Fichier server.js créé avec succès!");
  } catch (error) {
    console.error("Erreur lors de la création du fichier server.js:", error);
  }
}

// Exécuter la création du fichier server.js
createServerJs();
