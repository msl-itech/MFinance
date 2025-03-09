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

// Fonction pour injecter les méta-tags
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

    // Vérifier si le script de métadonnées est déjà présent
    if (htmlContent.includes("function getMetaTagsForRoute")) {
      console.log(
        "Le script de métadonnées est déjà dans index.html, rien à faire."
      );
      return;
    }

    console.log("Injection du script de métadonnées...");

    // Préparer le script à injecter
    const metaScript = `
    <script>
      (function() {
        // Obtenir l'URL actuelle
        var path = window.location.pathname.replace(/^\\//g, '');
        console.log('Chemin détecté:', path);
        
        // Fonction pour obtenir les métadonnées pour une route
        function getMetaTagsForRoute(route) {
          var metaTags = {
            '': {
              title: "MFinances - Cabinet d'expertise comptable à Bruxelles",
              description: "MFinances est un cabinet d'expertise comptable à Bruxelles offrant des services de comptabilité, fiscalité et conseil aux entreprises et indépendants."
            },
            'accueil': {
              title: "MFinances - Cabinet d'expertise comptable à Bruxelles",
              description: "MFinances est un cabinet d'expertise comptable à Bruxelles offrant des services de comptabilité, fiscalité et conseil aux entreprises et indépendants."
            },
            'about': {
              title: 'À propos de MFinances - Notre expertise comptable',
              description: "Découvrez MFinances, cabinet d'expertise comptable à Bruxelles. Notre équipe de professionnels vous accompagne dans la gestion financière de votre entreprise."
            },
            'contact': {
              title: "Contactez MFinances - Cabinet d'expertise comptable",
              description: "Contactez notre cabinet d'expertise comptable à Bruxelles. Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner."
            },
            'tarif': {
              title: "Tarifs MFinances - Services d'expertise comptable",
              description: "Découvrez nos tarifs pour nos services d'expertise comptable, fiscalité et conseil aux entreprises et indépendants à Bruxelles."
            },
            'profil-independant': {
              title: 'Services comptables pour indépendants - MFinances',
              description: 'MFinances propose des services comptables adaptés aux besoins des indépendants à Bruxelles. Comptabilité, fiscalité et conseil personnalisé.'
            },
            'absl': {
              title: 'Services comptables pour ASBL - MFinances',
              description: 'MFinances propose des services comptables spécialisés pour les ASBL à Bruxelles. Comptabilité, fiscalité et conseil adapté aux associations.'
            },
            'societe-management-patrimoniale': {
              title: 'Expertise comptable pour sociétés patrimoniales - MFinances',
              description: 'MFinances accompagne les sociétés de management patrimonial à Bruxelles avec des services comptables et fiscaux adaptés à la gestion de patrimoine.'
            },
            'societe-moyen': {
              title: 'Services comptables pour PME - MFinances',
              description: 'MFinances propose des services comptables et fiscaux adaptés aux PME à Bruxelles. Optimisation fiscale, comptabilité et conseil pour votre entreprise.'
            },
            'societe-exploitation': {
              title: "Expertise comptable pour sociétés d'exploitation - MFinances",
              description: "MFinances accompagne les sociétés d'exploitation à Bruxelles avec des services comptables et fiscaux adaptés à leurs besoins spécifiques."
            },
            'commercant-horeca': {
              title: 'Services comptables pour commerçants et Horeca - MFinances',
              description: 'MFinances propose des services comptables spécialisés pour les commerçants et le secteur Horeca à Bruxelles. Comptabilité, fiscalité et conseil adapté.'
            },
            'professionel-sante': {
              title: 'Expertise comptable pour professionnels de santé - MFinances',
              description: "MFinances accompagne les professionnels de santé à Bruxelles avec des services comptables et fiscaux adaptés à leur secteur d'activité."
            },
            'grande-entreprise': {
              title: 'Services comptables pour grandes entreprises - MFinances',
              description: 'MFinances propose des services comptables et fiscaux pour les grandes entreprises à Bruxelles. Expertise, conseil et accompagnement personnalisé.'
            },
            'promoteur-immobilier': {
              title: 'Expertise comptable pour promoteurs immobiliers - MFinances',
              description: "MFinances accompagne les promoteurs immobiliers à Bruxelles avec des services comptables et fiscaux adaptés au secteur de l'immobilier."
            },
            'services': {
              title: "Nos services d'expertise comptable - MFinances",
              description: "Découvrez les services d'expertise comptable proposés par MFinances à Bruxelles. Comptabilité, fiscalité, audit et conseil pour votre entreprise."
            },
            'vente': {
              title: 'Services de vente et acquisition - MFinances',
              description: "MFinances vous accompagne dans vos projets de vente et d'acquisition d'entreprises à Bruxelles. Expertise comptable et conseil personnalisé."
            },
            'tresorerie': {
              title: 'Gestion de trésorerie - MFinances',
              description: 'MFinances vous accompagne dans la gestion de trésorerie de votre entreprise à Bruxelles. Optimisation, prévision et conseil personnalisé.'
            }
          };
          
          // Si nous avons des sous-routes
          if (route.includes('/')) {
            var parts = route.split('/');
            var parent = parts[0];
            var child = parts[1];
            
            // Cas spécifiques pour les sous-routes
            if (parent === 'services') {
              if (child === 'comptabilite') {
                return {
                  title: 'Services de comptabilité pour entreprises - MFinances',
                  description: 'MFinances propose des services de comptabilité professionnels pour entreprises et indépendants à Bruxelles. Tenue comptable, bilan, reporting et conseil.'
                };
              } else if (child === 'fiscalite') {
                return {
                  title: 'Conseil fiscal et optimisation fiscale - MFinances',
                  description: "MFinances vous accompagne dans l'optimisation fiscale de votre entreprise à Bruxelles. Conseil fiscal, planification et stratégie fiscale adaptée."
                };
              } else if (child === 'creation-entreprise') {
                return {
                  title: "Accompagnement à la création d'entreprise - MFinances",
                  description: 'MFinances vous accompagne dans la création de votre entreprise à Bruxelles. Conseil, démarches administratives et choix de la forme juridique.'
                };
              }
            }
            
            // Retourner les métadonnées du parent si aucune correspondance spécifique
            return metaTags[parent] || defaultMeta;
          }
          
          return metaTags[route] || defaultMeta;
        }
        
        // Page par défaut si aucune correspondance n'est trouvée
        var defaultMeta = {
          title: "MFinances - Cabinet d'expertise comptable à Bruxelles",
          description: "MFinances est un cabinet d'expertise comptable à Bruxelles offrant des services de comptabilité, fiscalité et conseil aux entreprises et indépendants."
        };
        
        // Obtenir les métadonnées pour la route actuelle
        var meta = getMetaTagsForRoute(path);
        console.log('Métadonnées à appliquer:', meta);
        
        // Mettre à jour les balises meta
        document.title = meta.title;
        console.log('Titre défini:', meta.title);
        
        var descTag = document.querySelector('meta[name="description"]');
        if (descTag) {
          descTag.setAttribute('content', meta.description);
          console.log('Description définie:', meta.description);
        } else {
          console.log('Balise meta description non trouvée');
        }
      })();
    </script>
    `;

    // Injecter le script juste avant la fermeture de la balise head
    const newHtml = htmlContent.replace("</head>", metaScript + "\n  </head>");

    console.log("Écriture du fichier modifié...");
    fs.writeFileSync(indexPath, newHtml);
    console.log(`Métadonnées injectées avec succès dans ${indexPath}`);
  } catch (error) {
    console.error("Erreur lors de l'injection des métadonnées:", error);
    // Afficher la stack trace pour faciliter le débogage
    console.error(error.stack);
  }
}

// Exécuter l'injection
injectMetaTags();
