const fs = require("fs");
const path = require("path");

// Liste des routes à pré-rendre (plus complète)
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

// Fonction pour trouver le dossier de build Angular
function findBuildFolder() {
  console.log("=== VERCEL DEBUG ===");
  console.log("Recherche du dossier de build...");

  const distPath = path.join(__dirname, "dist");
  if (!fs.existsSync(distPath)) {
    console.log("Erreur: Le dossier dist n'existe pas!");
    return null;
  }

  console.log("Le dossier dist existe.");
  console.log("Contenu du dossier dist:");
  const distContents = fs.readdirSync(distPath);
  console.log(distContents);

  // Vérifier les possibilités de structure
  // Cas 1: dist/mfinances
  const mfinancesPath = path.join(distPath, "mfinances");
  if (fs.existsSync(mfinancesPath)) {
    console.log("Structure: dist/mfinances existe!");
    console.log("Contenu de dist/mfinances:");
    console.log(fs.readdirSync(mfinancesPath));

    const browserPath = path.join(mfinancesPath, "browser");
    if (fs.existsSync(browserPath)) {
      console.log("Structure: dist/mfinances/browser existe!");
      console.log("Contenu de dist/mfinances/browser:");
      console.log(fs.readdirSync(browserPath));
      return browserPath;
    }

    return mfinancesPath;
  }

  // Cas 2: dist/browser
  const browserPath = path.join(distPath, "browser");
  if (fs.existsSync(browserPath)) {
    console.log("Structure: dist/browser existe!");
    console.log("Contenu de dist/browser:");
    console.log(fs.readdirSync(browserPath));
    return browserPath;
  }

  // Cas 3: dist contient directement le build
  if (distContents.includes("index.html")) {
    console.log("Structure: index.html directement dans dist!");
    return distPath;
  }

  // Cas 4: dist/[nom-projet]
  for (const dir of distContents) {
    const fullPath = path.join(distPath, dir);
    if (fs.statSync(fullPath).isDirectory()) {
      const indexPath = path.join(fullPath, "index.html");
      if (fs.existsSync(indexPath)) {
        console.log(`Structure: dist/${dir} contient index.html!`);
        return fullPath;
      }
    }
  }

  console.log("Aucune structure valide trouvée!");
  return null;
}

// Après avoir trouvé le dossier de build, nous allons nous assurer que les métadonnées sont correctement injectées
function injectMetaTagsIntoStaticHtml(buildFolder, routes, htmlContent) {
  console.log(
    `Préparation de l'injection des métadonnées dans les fichiers HTML statiques...`
  );

  // Si le buildFolder n'existe pas, on ne peut rien faire
  if (!fs.existsSync(buildFolder)) {
    console.log(`Le dossier de build ${buildFolder} n'existe pas!`);
    return;
  }

  // Créer des fichiers HTML statiques pour chaque route avec les bonnes métadonnées
  for (const route of routes) {
    try {
      // Créer les dossiers nécessaires s'ils n'existent pas
      const routePath = path.join(buildFolder, route);
      if (route !== "") {
        if (!fs.existsSync(routePath)) {
          fs.mkdirSync(routePath, { recursive: true });
        }
      }

      // Chemin vers le fichier HTML à créer
      const htmlPath = path.join(routePath, "index.html");

      // Récupérer les métadonnées pour cette route
      let metaData;
      if (route.includes("/")) {
        const [parent, child] = route.split("/");
        metaData = getMetaTagsForRoute(parent, child);
      } else {
        metaData = getMetaTagsForRoute(route);
      }

      // Remplacer les métadonnées dans le HTML
      let routeHtml = htmlContent;

      // Remplacer le titre
      routeHtml = routeHtml.replace(
        /<title>[^<]*<\/title>/,
        `<title>${metaData.title}</title>`
      );

      // Remplacer la description
      routeHtml = routeHtml.replace(
        /<meta\s+name="description"\s+content="[^"]*"/,
        `<meta name="description" content="${metaData.description}"`
      );

      // Écrire le fichier HTML avec les métadonnées correctes
      fs.writeFileSync(htmlPath, routeHtml);
      console.log(
        `✅ Fichier HTML créé pour la route '${route}' avec les métadonnées personnalisées.`
      );
    } catch (error) {
      console.error(
        `❌ Erreur lors de la création du fichier HTML pour la route '${route}':`,
        error
      );
    }
  }

  console.log("Génération des fichiers HTML statiques terminée.");
}

// Fonction pour obtenir les métadonnées pour une route
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

// Modifions la fonction injectMetaTags pour utiliser notre nouvelle fonction d'injection
function injectMetaTags() {
  try {
    console.log("Démarrage du script d'injection des métadonnées...");

    // Trouver le dossier de build
    const buildFolder = findBuildFolder();
    if (!buildFolder) {
      console.log(
        "Impossible de trouver le dossier de build. Arrêt du script."
      );
      return;
    }

    console.log(`Dossier de build trouvé: ${buildFolder}`);

    // Vérifier l'existence de index.html
    const indexPath = path.join(buildFolder, "index.html");
    if (!fs.existsSync(indexPath)) {
      console.log(`Erreur: ${indexPath} n'existe pas!`);
      return;
    }

    console.log(`Lecture de ${indexPath}...`);
    let htmlContent = fs.readFileSync(indexPath, "utf8");

    console.log("Contenu HTML chargé, longueur:", htmlContent.length);

    // Injecter les métadonnées dans les fichiers HTML statiques pour chaque route
    injectMetaTagsIntoStaticHtml(buildFolder, routes, htmlContent);
  } catch (error) {
    console.error("Erreur lors de l'injection des métadonnées:", error);
  }
}

// Exécuter l'injection
injectMetaTags();
