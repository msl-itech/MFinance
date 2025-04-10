// api/server.js - Point d'entrée pour Vercel Serverless Functions
const express = require("express");
const path = require("path");
const fs = require("fs");
const compression = require("compression");

// Création de l'application Express
const app = express();

// Compression pour améliorer les performances
app.use(compression());

// Fonction pour trouver le dossier de build
function findBuildFolder() {
  // Sur Vercel, le dossier de build est différent
  if (process.env.VERCEL) {
    console.log("Environnement Vercel détecté");

    // Essayer différents chemins possibles sur Vercel
    const possiblePaths = [
      path.resolve("/var/task/dist/mfinances/browser"),
      path.resolve("./dist/mfinances/browser"),
      path.resolve("./dist/mfinances"),
      path.resolve("./public"),
      path.resolve("./"),
    ];

    for (const p of possiblePaths) {
      console.log(`Vérification du chemin: ${p}`);
      if (fs.existsSync(p)) {
        // Vérifier si le dossier contient des fichiers HTML ou statiques
        try {
          const files = fs.readdirSync(p);
          console.log(`Contenu du dossier ${p}:`, files);

          if (files.includes("index.html")) {
            console.log(`index.html trouvé dans: ${p}`);
            return p;
          }
        } catch (err) {
          console.error(`Erreur lors de la lecture du dossier ${p}:`, err);
        }
      } else {
        console.log(`Chemin non trouvé: ${p}`);
      }
    }

    // Si aucun chemin ne fonctionne, revenir à la racine
    console.log("Aucun chemin valide trouvé, utilisation de la racine");
    return path.resolve("./");
  }

  // En local, on cherche le dossier de build comme avant
  const distPath = path.join(__dirname, "../dist");

  if (!fs.existsSync(distPath)) {
    console.log("Erreur: Le dossier dist n'existe pas!");
    return path.resolve("./");
  }

  const mfinancesPath = path.join(distPath, "mfinances");
  if (fs.existsSync(mfinancesPath)) {
    return mfinancesPath;
  }

  const mfinancesBrowserPath = path.join(distPath, "mfinances", "browser");
  if (fs.existsSync(mfinancesBrowserPath)) {
    return mfinancesBrowserPath;
  }

  return path.resolve("./");
}

// Fonction pour obtenir les métadonnées pour une route
function getMetaTagsForRoute(route, subRoute = null) {
  // Structure des métadonnées par route (simplifiée pour l'exemple)
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
    // Autres routes...
  };

  // Retourner les métadonnées spécifiques à la route ou les métadonnées par défaut
  if (subRoute && route === "services") {
    if (subRoute === "comptabilite") {
      return {
        title: "Services de comptabilité pour entreprises - MFinances",
        description:
          "MFinances propose des services de comptabilité professionnels pour entreprises et indépendants à Bruxelles. Tenue comptable, bilan, reporting et conseil.",
      };
    }
  }

  return metaTags[route] || metaTags[""];
}

// Handler pour les requêtes API de Vercel
const handler = (req, res) => {
  try {
    // Trouver le dossier de build
    const DIST_FOLDER = findBuildFolder();
    console.log(`Dossier de build trouvé: ${DIST_FOLDER}`);

    // Configurer Express pour utiliser ce dossier comme statique
    app.use(express.static(DIST_FOLDER, { maxAge: "1h" }));

    // Extraire la route de l'URL en toute sécurité
    const url = req.url || "/";
    const urlPath = url.split("?")[0].split("#")[0];
    let route = urlPath.replace(/^\//, ""); // Supprimer le slash initial

    console.log(`Requête reçue: ${url}`);
    console.log(`Chemin traité: ${urlPath}`);
    console.log(`Route extraite: ${route}`);

    // Déterminer les parties de la route
    let subRoute = null;
    if (route.includes("/")) {
      const parts = route.split("/");
      route = parts[0];
      subRoute = parts[1];
      console.log(
        `Route décomposée: principale=${route}, sous-route=${subRoute}`
      );
    }

    // Vérifier si la requête est pour un fichier statique
    if (
      urlPath.match(/\.(js|css|ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/i)
    ) {
      console.log(`Fichier statique demandé: ${urlPath}`);
      const filePath = path.join(DIST_FOLDER, urlPath);
      console.log(`Chemin complet du fichier: ${filePath}`);

      if (fs.existsSync(filePath)) {
        console.log(`Fichier statique trouvé, envoi direct`);
        return res.sendFile(filePath);
      } else {
        // Essayer dans le dossier parent si c'est un chemin browser
        if (DIST_FOLDER.includes("/browser")) {
          const parentPath = path.join(DIST_FOLDER, "..", urlPath);
          if (fs.existsSync(parentPath)) {
            console.log(
              `Fichier statique trouvé dans le dossier parent: ${parentPath}`
            );
            return res.sendFile(parentPath);
          }
        }

        console.log(`Fichier statique non trouvé: ${filePath}`);
        return res.status(404).send("Fichier non trouvé");
      }
    }

    console.log(`Traitement comme route SPA: ${route}`);

    // Analyser le problème de la page blanche
    function analyseIndexHtml(indexPath) {
      if (fs.existsSync(indexPath)) {
        try {
          const content = fs.readFileSync(indexPath, "utf8");
          console.log(
            `Taille du fichier index.html: ${content.length} caractères`
          );

          // Vérifier les éléments essentiels
          const hasHeadTag = content.includes("<head>");
          const hasBodyTag = content.includes("<body>");
          const hasScriptTag = content.includes("<script");
          const hasBaseHref = content.includes('<base href="/');

          console.log(`Analyse du fichier index.html:
            - head tag: ${hasHeadTag ? "Oui" : "Non"}
            - body tag: ${hasBodyTag ? "Oui" : "Non"}
            - script tag: ${hasScriptTag ? "Oui" : "Non"}
            - base href: ${hasBaseHref ? "Oui" : "Non"}`);

          return content;
        } catch (err) {
          console.error(`Erreur lors de l'analyse de ${indexPath}:`, err);
          return null;
        }
      }
      return null;
    }

    // Pour les routes Angular, nous allons toujours servir l'index.html
    const indexPath = path.join(DIST_FOLDER, "index.html");
    console.log(`Recherche de index.html à: ${indexPath}`);

    // Analyser le contenu du index.html trouvé pour déboguer
    const indexContent = analyseIndexHtml(indexPath);

    if (indexContent) {
      console.log(`index.html trouvé et analysé, traitement...`);
      try {
        // Obtenir les métadonnées
        const metaData = getMetaTagsForRoute(route, subRoute);
        console.log(`Métadonnées pour la route ${route}:`, metaData);

        // Mettre à jour le HTML avec les bonnes métadonnées
        let html = indexContent;

        // Remplacer le titre si nécessaire
        if (metaData.title) {
          const originalTitle = html.match(/<title>([^<]*)<\/title>/);
          if (originalTitle) {
            console.log(
              `Remplacement du titre: "${originalTitle[1]}" -> "${metaData.title}"`
            );
          }
          html = html.replace(
            /<title>[^<]*<\/title>/,
            `<title>${metaData.title}</title>`
          );
        }

        // Remplacer la description si nécessaire
        if (metaData.description) {
          const descPattern = /<meta\s+name="description"\s+content="[^"]*"/;
          const originalDesc = html.match(descPattern);
          if (originalDesc) {
            console.log(`Remplacement de la description`);
          } else {
            console.log(`Ajout de la balise description manquante`);
            // Si la balise meta description n'existe pas, l'ajouter
            const headEnd = html.indexOf("</head>");
            if (headEnd !== -1) {
              html =
                html.slice(0, headEnd) +
                `\n  <meta name="description" content="${metaData.description}">` +
                html.slice(headEnd);
            }
          }
          html = html.replace(
            descPattern,
            `<meta name="description" content="${metaData.description}"`
          );
        }

        // Assurer que le base href est correct
        if (!html.includes('<base href="/"')) {
          console.log(`Base href manquant ou incorrect, ajout/correction`);
          const headStart = html.indexOf("<head>") + 6;
          if (headStart > 6) {
            html =
              html.slice(0, headStart) +
              '\n  <base href="/">' +
              html.slice(headStart);
          }
        }

        // Ajouter un script pour déboguer le chargement
        const bodyEnd = html.indexOf("</body>");
        if (bodyEnd !== -1) {
          html =
            html.slice(0, bodyEnd) +
            `\n  <script>
              console.log("Document chargé: " + document.readyState);
              document.addEventListener('DOMContentLoaded', function() {
                console.log("DOM entièrement chargé");
              });
              window.addEventListener('load', function() {
                console.log("Toutes les ressources chargées");
                // En cas de problème, forcer le rafraîchissement après 5 secondes si la page semble blanche
                setTimeout(function() {
                  if (!document.body.children.length || 
                      window.getComputedStyle(document.body).backgroundColor === "rgb(255, 255, 255)") {
                    console.log("Détection de page potentiellement blanche, rafraîchissement...");
                    window.location.reload();
                  }
                }, 5000);
              });
            </script>` +
            html.slice(bodyEnd);
        }

        console.log(`Envoi du HTML modifié (${html.length} caractères)`);
        res.setHeader("Content-Type", "text/html");
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.setHeader("Pragma", "no-cache");
        res.setHeader("Expires", "0");
        res.send(html);
      } catch (innerErr) {
        console.error("Erreur lors du traitement du HTML:", innerErr);
        // En cas d'erreur dans le traitement, envoyer une version simplifiée du HTML
        sendSimpleHtml(res, route);
      }
    } else {
      console.log(
        `index.html non trouvé ou invalide dans ${DIST_FOLDER}, essai du fallback`
      );
      tryFallbackHtml(res);
    }
  } catch (err) {
    console.error("Erreur critique dans le handler:", err);
    sendSimpleHtml(res, "error", err.message || "Erreur inconnue");
  }

  // Fonction pour envoyer une page HTML simple
  function sendSimpleHtml(res, route, errorMsg = null) {
    const title =
      route === "error"
        ? "MFinances - Erreur"
        : "MFinances - Cabinet d'expertise comptable à Bruxelles";

    console.log(`Envoi d'une page HTML simple pour la route: ${route}`);

    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.send(`
      <!DOCTYPE html>
      <html lang="fr">
        <head>
          <title>${title}</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="description" content="MFinances est un cabinet d'expertise comptable à Bruxelles offrant des services de comptabilité, fiscalité et conseil aux entreprises et indépendants.">
          <base href="/">
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 800px;
              margin: 0 auto;
              text-align: center;
              padding: 40px 20px;
            }
            h1 {
              color: #2c3e50;
              margin-bottom: 20px;
            }
            p {
              margin-bottom: 20px;
            }
            a {
              color: #3498db;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            .btn {
              display: inline-block;
              background-color: #3498db;
              color: white;
              padding: 10px 20px;
              border-radius: 4px;
              text-decoration: none;
              margin-top: 20px;
              font-weight: bold;
            }
            .btn:hover {
              background-color: #2980b9;
              text-decoration: none;
            }
            .error {
              color: #e74c3c;
              font-size: 0.9em;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>MFinances</h1>
            ${
              route === "error"
                ? `<p>Une erreur est survenue lors du chargement de la page.</p>`
                : `<p>Bienvenue chez MFinances, votre cabinet d'expertise comptable à Bruxelles.</p>`
            }
            <p>Nous vous accompagnons dans la gestion comptable et fiscale de votre entreprise.</p>
            <a href="/" class="btn">Accéder au site</a>
            ${
              errorMsg
                ? `<p class="error">Détails techniques: ${errorMsg}</p>`
                : ""
            }
          </div>
          <script>
            console.log("Page de secours chargée");
            document.addEventListener('DOMContentLoaded', function() {
              console.log("DOM chargé dans la page de secours");
              // Essayer de charger la page principale après 2 secondes
              setTimeout(function() {
                window.location.href = '/';
              }, 2000);
            });
          </script>
        </body>
      </html>
    `);
  }

  // Fonction pour essayer de servir un HTML de fallback
  function tryFallbackHtml(res) {
    console.log(`Recherche d'un fichier HTML de fallback`);
    // Liste des chemins possibles pour index.html
    const possiblePaths = [
      path.join(DIST_FOLDER, "index.html"),
      path.join(DIST_FOLDER, "..", "browser", "index.html"),
      path.join(DIST_FOLDER, "..", "index.html"),
      path.join(process.cwd(), "dist/mfinances/browser/index.html"),
      path.join(process.cwd(), "dist/mfinances/index.html"),
      path.join(process.cwd(), "public/index.html"),
      path.join(process.cwd(), "index.html"),
    ];

    console.log(`Chemins de fallback à essayer:`, possiblePaths);

    // Pour chaque chemin, analyser le contenu
    for (const indexPath of possiblePaths) {
      console.log(`Essai de fallback: ${indexPath}`);
      if (fs.existsSync(indexPath)) {
        console.log(`Fallback trouvé: ${indexPath}`);
        const content = analyseIndexHtml(indexPath);

        if (!content) {
          console.log(`Contenu invalide pour le fallback: ${indexPath}`);
          continue;
        }

        // Appliquer les corrections nécessaires et l'envoyer
        try {
          let html = content;

          // Assurer que le base href est correct
          if (!html.includes('<base href="/"')) {
            console.log(`Base href manquant dans le fallback, ajout`);
            const headStart = html.indexOf("<head>") + 6;
            if (headStart > 6) {
              html =
                html.slice(0, headStart) +
                '\n  <base href="/">' +
                html.slice(headStart);
            }
          }

          // Vérifier si les scripts Angular essentiels sont présents
          if (
            !html.includes("runtime") ||
            !html.includes("polyfills") ||
            !html.includes("main")
          ) {
            console.log(
              `Scripts Angular manquants dans le fichier HTML de fallback`
            );
            // Si les scripts essentiels sont manquants, envoyez une page simple à la place
            sendSimpleHtml(res, "fallback-invalid");
            return;
          }

          // Ajouter un script de débogage
          const bodyEnd = html.indexOf("</body>");
          if (bodyEnd !== -1) {
            html =
              html.slice(0, bodyEnd) +
              `\n  <script>
                console.log("Fallback chargé depuis: ${indexPath}");
                document.addEventListener('DOMContentLoaded', function() {
                  console.log("DOM chargé dans le fallback");
                });
              </script>` +
              html.slice(bodyEnd);
          }

          console.log(`Envoi du HTML de fallback (${html.length} caractères)`);
          res.setHeader("Content-Type", "text/html");
          res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
          res.send(html);
          return;
        } catch (err) {
          console.error(
            `Erreur lors du traitement du fallback ${indexPath}:`,
            err
          );
          continue;
        }
      }
    }

    // Si aucun fallback ne fonctionne, retourner une réponse HTML simple
    console.log("Aucun fallback valide trouvé, envoi d'une page HTML simple");
    sendSimpleHtml(res, "no-fallback");
  }
};

// Exporter le handler pour Vercel
module.exports = handler;
