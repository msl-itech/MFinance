// vercel-seo-prerender.js - Script pour optimiser le SEO sur Vercel
const fs = require("fs");
const path = require("path");

// Liste des routes à pré-rendre pour le SEO (MISE À JOUR RESTRUCTURATION 2025)
const routes = [
  "",
  "a-propos",
  "contact",
  "tarifs",
  // Profils (métier)
  "profils/independant-startup",
  "profils/commercant-horeca",
  "profils/professionnel-sante",
  "profils/grande-entreprise",
  "profils/promoteur-immobilier",
  // Structures (juridique)
  "structures/asbl",
  "structures/societe-exploitation",
  "structures/societe-management-patrimoniale",
  "structures/societe-de-moyens",
  // Services
  "services",
  "services/creation-entreprise",
  "services/comptabilite",
  "services/fiscalite",
  "services/declaration-impots",
  "services/departement-comptable-externalise",
  // Stratégie d'entreprise
  "strategie",
  "strategie/salarie-vers-independant",
  "strategie/passage-en-societe",
  "strategie/compte-courant-administrateur",
  // Trésorerie
  "tresorerie",
  "tresorerie/tresorerie-benefice",
  "tresorerie/investir-sa-tresorerie",
  "tresorerie/optimiser-son-stock",
  "tresorerie/alerte-tresorerie",
  "tresorerie/proteger-sa-tresorerie",
  "tresorerie/anticiper-sa-tresorerie",
  "tresorerie/accompagnement",
];

// Fonction pour obtenir les métadonnées pour une route
function getMetaTagsForRoute(route, subRoute = null) {
  // Structure des métadonnées par route
  const metaTags = {
    "": {
      title: "MFinances - Cabinet d'expertise comptable à Bruxelles",
      description:
        "MFinances est un cabinet d'expertise comptable à Bruxelles offrant des services de comptabilité, fiscalité et conseil aux entreprises et indépendants.",
    },
    "a-propos": {
      title: "À propos de MFinances - Notre expertise comptable",
      description:
        "Découvrez MFinances, cabinet d'expertise comptable à Bruxelles. Notre équipe de professionnels vous accompagne dans la gestion financière de votre entreprise.",
    },
    contact: {
      title: "Contactez MFinances - Cabinet d'expertise comptable",
      description:
        "Contactez notre cabinet d'expertise comptable à Bruxelles. Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner.",
    },
    tarifs: {
      title: "Tarifs MFinances - Services d'expertise comptable",
      description:
        "Découvrez nos tarifs pour nos services d'expertise comptable, fiscalité et conseil aux entreprises et indépendants à Bruxelles.",
    },
    services: {
      title: "Nos services d'expertise comptable - MFinances",
      description:
        "Découvrez les services d'expertise comptable proposés par MFinances à Bruxelles. Comptabilité, fiscalité, audit et conseil pour votre entreprise.",
    },
    strategie: {
      title: "Stratégie d'entreprise - MFinances",
      description:
        "MFinances vous accompagne dans votre stratégie d'entreprise à Bruxelles. Passage en société, optimisation fiscale et conseil personnalisé.",
    },
    tresorerie: {
      title: "Gestion de trésorerie - MFinances",
      description:
        "MFinances vous accompagne dans la gestion de trésorerie de votre entreprise à Bruxelles. Optimisation, prévision et conseil personnalisé.",
    },
  };

  // Cas spécifiques pour les sous-routes
  if (subRoute) {
    // Services
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
      } else if (subRoute === "declaration-impots") {
        return {
          title:
            "Déclaration d'impôts pour entreprises et particuliers - MFinances",
          description:
            "MFinances vous accompagne dans la préparation et le dépôt de vos déclarations fiscales à Bruxelles. Service professionnel et personnalisé.",
        };
      } else if (subRoute === "departement-comptable-externalise") {
        return {
          title: "Externalisation du département comptable - MFinances",
          description:
            "MFinances propose l'externalisation de votre département comptable à Bruxelles. Expertise, flexibilité et réduction des coûts.",
        };
      }
    }
    // Profils
    else if (route === "profils") {
      if (subRoute === "independant-startup") {
        return {
          title: "Services comptables pour indépendants & Startups - MFinances",
          description:
            "MFinances propose des services comptables adaptés aux indépendants et startups à Bruxelles. Comptabilité, fiscalité et conseil personnalisé.",
        };
      } else if (subRoute === "commercant-horeca") {
        return {
          title: "Services comptables pour commerçants et Horeca - MFinances",
          description:
            "MFinances propose des services comptables spécialisés pour les commerçants et le secteur Horeca à Bruxelles. Comptabilité, fiscalité et conseil adapté.",
        };
      } else if (subRoute === "professionnel-sante") {
        return {
          title: "Expertise comptable pour professionnels de santé - MFinances",
          description:
            "MFinances accompagne les professionnels de santé à Bruxelles avec des services comptables et fiscaux adaptés à leur secteur d'activité.",
        };
      } else if (subRoute === "grande-entreprise") {
        return {
          title: "Services comptables pour grandes entreprises - MFinances",
          description:
            "MFinances propose des services comptables et fiscaux pour les grandes entreprises à Bruxelles. Expertise, conseil et accompagnement personnalisé.",
        };
      } else if (subRoute === "promoteur-immobilier") {
        return {
          title: "Expertise comptable pour promoteurs immobiliers - MFinances",
          description:
            "MFinances accompagne les promoteurs immobiliers à Bruxelles avec des services comptables et fiscaux adaptés au secteur de l'immobilier.",
        };
      }
    }
    // Structures
    else if (route === "structures") {
      if (subRoute === "asbl") {
        return {
          title: "Services comptables pour ASBL - MFinances",
          description:
            "MFinances propose des services comptables spécialisés pour les ASBL à Bruxelles. Comptabilité, fiscalité et conseil adapté aux associations.",
        };
      } else if (subRoute === "societe-exploitation") {
        return {
          title: "Expertise comptable pour sociétés d'exploitation - MFinances",
          description:
            "MFinances accompagne les sociétés d'exploitation à Bruxelles avec des services comptables et fiscaux adaptés à leurs besoins spécifiques.",
        };
      } else if (subRoute === "societe-management-patrimoniale") {
        return {
          title: "Expertise comptable pour sociétés patrimoniales - MFinances",
          description:
            "MFinances accompagne les sociétés de management patrimonial à Bruxelles avec des services comptables et fiscaux adaptés à la gestion de patrimoine.",
        };
      } else if (subRoute === "societe-de-moyens") {
        return {
          title: "Services comptables pour sociétés de moyens - MFinances",
          description:
            "MFinances propose des services comptables et fiscaux adaptés aux sociétés de moyens à Bruxelles. Optimisation fiscale, comptabilité et conseil.",
        };
      }
    }
    // Stratégie
    else if (route === "strategie") {
      if (subRoute === "passage-en-societe") {
        return {
          title: "Accompagnement pour le passage en société - MFinances",
          description:
            "MFinances vous accompagne dans votre projet de passage en société à Bruxelles. Conseil fiscal, comptable et juridique personnalisé.",
        };
      } else if (subRoute === "compte-courant-administrateur") {
        return {
          title: "Gestion du compte courant administrateur - MFinances",
          description:
            "MFinances vous propose son expertise pour la gestion optimale de votre compte courant administrateur à Bruxelles. Conseil fiscal et comptable adapté.",
        };
      } else if (subRoute === "salarie-vers-independant") {
        return {
          title: "Passage de salarié à indépendant - MFinances",
          description:
            "MFinances vous accompagne dans votre transition de salarié à indépendant à Bruxelles. Conseil fiscal, comptable et administratif personnalisé.",
        };
      }
    }
    // Trésorerie
    else if (route === "tresorerie") {
      if (subRoute === "tresorerie-benefice") {
        return {
          title: "Gestion de la trésorerie et des bénéfices - MFinances",
          description:
            "MFinances vous accompagne dans l'optimisation de votre trésorerie et la gestion de vos bénéfices à Bruxelles.",
        };
      } else if (subRoute === "investir-sa-tresorerie") {
        return {
          title: "Conseils pour investir votre trésorerie - MFinances",
          description:
            "MFinances vous propose des solutions pour investir judicieusement votre trésorerie d'entreprise à Bruxelles.",
        };
      } else if (subRoute === "optimiser-son-stock") {
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

// ... Reste du code inchangé (fonctions findBuildFolder et generateStaticHtmlFiles)
// Fonction pour trouver le dossier de build Angular
function findBuildFolder() {
  console.log("Recherche du dossier de build...");

  const distPath = path.join(__dirname, "dist");
  if (!fs.existsSync(distPath)) {
    console.log("Erreur: Le dossier dist n'existe pas!");
    return null;
  }

  // Structure Angular 18+: dist/mfinances/browser
  const mfinancesBrowserPath = path.join(distPath, "mfinances", "browser");
  if (
    fs.existsSync(mfinancesBrowserPath) &&
    fs.existsSync(path.join(mfinancesBrowserPath, "index.html"))
  ) {
    console.log("Structure trouvée: dist/mfinances/browser");
    return mfinancesBrowserPath;
  }

  // Vérifier les possibilités de structure alternatives
  // Cas 1: dist/mfinances
  const mfinancesPath = path.join(distPath, "mfinances");
  if (
    fs.existsSync(mfinancesPath) &&
    fs.existsSync(path.join(mfinancesPath, "index.html"))
  ) {
    console.log("Structure trouvée: dist/mfinances");
    return mfinancesPath;
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

// Fonction pour générer les fichiers HTML statiques pour chaque route
function generateStaticHtmlFiles() {
  try {
    console.log("=== GÉNÉRATION DE FICHIERS HTML STATIQUES POUR SEO ===");

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
    const sourceIndexPath = path.join(buildFolder, "index.html");
    if (!fs.existsSync(sourceIndexPath)) {
      console.log(`Erreur: ${sourceIndexPath} n'existe pas!`);
      return;
    }

    console.log(`Lecture de ${sourceIndexPath}...`);
    let baseHtmlContent = fs.readFileSync(sourceIndexPath, "utf8");

    // Générer un fichier HTML statique pour chaque route
    for (const route of routes) {
      try {
        // Déterminer les métadonnées pour cette route
        let metaData;
        if (route.includes("/")) {
          const [parent, child] = route.split("/");
          metaData = getMetaTagsForRoute(parent, child);
        } else {
          metaData = getMetaTagsForRoute(route);
        }

        // Modifier le contenu HTML avec les bonnes métadonnées
        let routeHtml = baseHtmlContent;

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

        // Créer le dossier de destination si nécessaire
        let targetDir;
        if (route === "") {
          targetDir = buildFolder;
        } else {
          targetDir = path.join(buildFolder, route);
          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
          }
        }

        // Écrire le fichier HTML avec les métadonnées personnalisées
        const targetIndexPath = path.join(targetDir, "index.html");
        fs.writeFileSync(targetIndexPath, routeHtml);

        console.log(
          `✅ Fichier HTML créé pour la route '${
            route || "racine"
          }' avec les métadonnées personnalisées.`
        );
      } catch (error) {
        console.error(
          `❌ Erreur lors de la création du fichier HTML pour la route '${route}':`,
          error
        );
      }
    }

    console.log("Génération des fichiers HTML statiques terminée avec succès!");
  } catch (error) {
    console.error(
      "Erreur lors de la génération des fichiers HTML statiques:",
      error
    );
  }
}

// Exécuter la génération des fichiers HTML statiques
generateStaticHtmlFiles();
