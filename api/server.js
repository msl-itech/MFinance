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

    // Pour les routes Angular, nous allons toujours servir l'index.html
    const indexPath = path.join(DIST_FOLDER, "index.html");
    console.log(`Recherche de index.html à: ${indexPath}`);

    if (fs.existsSync(indexPath)) {
      console.log(`index.html trouvé, lecture du fichier`);
      fs.readFile(indexPath, "utf8", (err, data) => {
        if (err) {
          console.error(`Erreur lors de la lecture de index.html:`, err);
          return tryFallbackHtml(res);
        }

        try {
          // Obtenir les métadonnées
          const metaData = getMetaTagsForRoute(route, subRoute);
          console.log(`Métadonnées pour la route ${route}:`, metaData);

          // Mettre à jour le HTML avec les bonnes métadonnées
          let html = data;

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

          console.log(`Envoi du HTML modifié (${html.length} caractères)`);
          res.setHeader("Content-Type", "text/html");
          res.send(html);
        } catch (innerErr) {
          console.error("Erreur lors du traitement du HTML:", innerErr);
          // En cas d'erreur dans le traitement, envoyer le HTML original
          res.setHeader("Content-Type", "text/html");
          res.send(data);
        }
      });
    } else {
      console.log(
        `index.html non trouvé dans ${DIST_FOLDER}, essai du fallback`
      );
      tryFallbackHtml(res);
    }
  } catch (err) {
    console.error("Erreur critique dans le handler:", err);
    res.status(500).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>MFinances - Erreur</title>
        </head>
        <body>
          <h1>Une erreur est survenue</h1>
          <p>Merci de réessayer plus tard.</p>
          <a href="/">Retourner à l'accueil</a>
          <script>
            // Log de l'erreur dans la console
            console.error("Erreur serveur:", ${JSON.stringify(
              err.message || "Erreur inconnue"
            )});
            // Redirection automatique après 5 secondes
            setTimeout(() => window.location.href = '/', 5000);
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

    // Essayer chaque chemin
    for (const indexPath of possiblePaths) {
      console.log(`Essai de fallback: ${indexPath}`);
      if (fs.existsSync(indexPath)) {
        console.log(`Fallback trouvé: ${indexPath}`);
        fs.readFile(indexPath, "utf8", (err, data) => {
          if (err) {
            console.error(
              `Erreur lors de la lecture du fallback ${indexPath}:`,
              err
            );
            // Ne pas utiliser continue ici car nous sommes dans une callback
            return;
          }

          // Assurer que le base href est correct
          let html = data;
          if (!html.includes('<base href="/"')) {
            console.log(
              `Base href manquant ou incorrect dans le fallback, ajout/correction`
            );
            const headStart = html.indexOf("<head>") + 6;
            if (headStart > 6) {
              html =
                html.slice(0, headStart) +
                '\n  <base href="/">' +
                html.slice(headStart);
            }
          }

          console.log(`Envoi du HTML de fallback (${html.length} caractères)`);
          res.setHeader("Content-Type", "text/html");
          res.send(html);
          return;
        });
        return;
      }
    }

    // Si aucun fallback ne fonctionne, retourner une réponse HTML simple
    console.log(
      "Aucun fallback trouvé, utilisation de la réponse HTML minimale"
    );
    res.setHeader("Content-Type", "text/html");
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>MFinances - Cabinet d'expertise comptable à Bruxelles</title>
          <meta name="description" content="MFinances est un cabinet d'expertise comptable à Bruxelles offrant des services de comptabilité, fiscalité et conseil aux entreprises et indépendants.">
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <base href="/">
        </head>
        <body>
          <h1>MFinances</h1>
          <p>Chargement de l'application...</p>
          <p><a href="/">Retourner à l'accueil</a></p>
          <script>
            // Rediriger vers la racine après 2 secondes
            setTimeout(() => window.location.href = '/', 2000);
          </script>
        </body>
      </html>
    `);
  }
};

// Exporter le handler pour Vercel
module.exports = handler;
