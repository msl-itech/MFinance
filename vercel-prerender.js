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

// Fonction pour créer les fichiers HTML avec les bonnes métadonnées
function injectMetaTags() {
  console.log("Injection des méta-tags dans index.html...");

  try {
    // Vérifier si le dossier de build existe
    const distPath = path.join(__dirname, "dist", "mfinances");
    if (!fs.existsSync(distPath)) {
      console.log(`Le dossier ${distPath} n'existe pas encore, rien à faire.`);
      return;
    }

    // Lire le contenu du index.html généré par Angular
    const indexPath = path.join(distPath, "index.html");
    if (!fs.existsSync(indexPath)) {
      console.log(`Le fichier ${indexPath} n'existe pas, rien à faire.`);
      return;
    }

    let htmlContent = fs.readFileSync(indexPath, "utf8");

    // Vérifier si le script de métadonnées est déjà présent
    if (htmlContent.includes("function getMetaTagsForRoute")) {
      console.log(
        "Le script de métadonnées est déjà dans index.html, rien à faire."
      );
      return;
    }

    // Préparer le script à injecter
    const metaScript = `
    <script>
      (function() {
        // Obtenir l'URL actuelle
        var path = window.location.pathname.replace(/^\\//g, '');
        
        // Fonction pour obtenir les métadonnées pour une route
        function getMetaTagsForRoute(route) {
          var metaTags = {
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
            } else if (parent === 'tresorerie' || parent === 'vente') {
              // Retourner les métadonnées génériques pour ces sections si nécessaire
              return metaTags[parent] || defaultMeta;
            }
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
        
        // Mettre à jour les balises meta
        document.title = meta.title;
        
        var descTag = document.querySelector('meta[name="description"]');
        if (descTag) {
          descTag.setAttribute('content', meta.description);
        }
      })();
    </script>
    `;

    // Injecter le script juste avant la fermeture de la balise head
    htmlContent = htmlContent.replace("</head>", metaScript + "\n  </head>");

    // Écrire le fichier modifié
    fs.writeFileSync(indexPath, htmlContent);
    console.log(`Métadonnées injectées avec succès dans ${indexPath}`);
  } catch (error) {
    console.error("Erreur lors de l'injection des métadonnées:", error);
  }
}

// Exécuter l'injection
injectMetaTags();
