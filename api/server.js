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
    // Essayer différents chemins possibles sur Vercel
    const possiblePaths = [
      path.resolve("/var/task/dist/mfinances"),
      path.resolve("./dist/mfinances"),
      path.resolve("./"),
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
  // Trouver le dossier de build
  const DIST_FOLDER = findBuildFolder();
  console.log(`Dossier de build: ${DIST_FOLDER}`);

  // Configurer Express pour utiliser ce dossier comme statique
  app.use(express.static(DIST_FOLDER));

  // Extraire la route de l'URL en toute sécurité
  const url = req.url || "/";
  const urlPath = url.split("?")[0].split("#")[0];
  let route = urlPath.replace(/^\//, ""); // Supprimer le slash initial

  // Déterminer les parties de la route
  let subRoute = null;
  if (route.includes("/")) {
    const parts = route.split("/");
    route = parts[0];
    subRoute = parts[1];
  }

  // Déterminer le chemin vers le fichier HTML prérendu
  let htmlPath;
  if (route === "") {
    htmlPath = path.join(DIST_FOLDER, "index.html");
  } else {
    htmlPath = path.join(DIST_FOLDER, route, "index.html");
  }

  // Vérifier si un fichier prérendu existe pour cette route
  if (fs.existsSync(htmlPath)) {
    // Si le fichier existe, le lire et l'envoyer avec les méta-tags mis à jour
    fs.readFile(htmlPath, "utf8", (err, data) => {
      if (err) {
        console.error("Erreur lors de la lecture du fichier HTML:", err);
        // En cas d'erreur, essayer avec un chemin alternatif
        tryFallbackHtml(res);
        return;
      }

      // Obtenir les métadonnées
      const metaData = getMetaTagsForRoute(route, subRoute);

      // Mettre à jour le HTML avec les bonnes métadonnées
      let html = data;

      // Remplacer le titre si nécessaire
      if (metaData.title) {
        html = html.replace(
          /<title>[^<]*<\/title>/,
          `<title>${metaData.title}</title>`
        );
      }

      // Remplacer la description si nécessaire
      if (metaData.description) {
        html = html.replace(
          /<meta\s+name="description"\s+content="[^"]*"/,
          `<meta name="description" content="${metaData.description}"`
        );
      }

      // Envoyer le HTML modifié
      res.setHeader("Content-Type", "text/html");
      res.send(html);
    });
  } else {
    // Si aucun fichier prérendu n'existe, essayer le fallback
    tryFallbackHtml(res);
  }

  // Fonction pour essayer de servir un HTML de fallback
  function tryFallbackHtml(res) {
    // Liste des chemins possibles pour index.html
    const possiblePaths = [
      path.join(DIST_FOLDER, "index.html"),
      path.join(process.cwd(), "dist/mfinances/index.html"),
      path.join(process.cwd(), "dist/mfinances/browser/index.html"),
      path.join(process.cwd(), "public/index.html"),
      path.join(process.cwd(), "index.html"),
    ];

    // Essayer chaque chemin
    for (const indexPath of possiblePaths) {
      console.log(`Essai de fallback: ${indexPath}`);
      if (fs.existsSync(indexPath)) {
        fs.readFile(indexPath, "utf8", (err, data) => {
          if (err) {
            console.error(
              `Erreur lors de la lecture du fallback ${indexPath}:`,
              err
            );
            // Ne pas utiliser continue ici car nous sommes dans une callback
            return;
          }
          console.log(`Fallback trouvé: ${indexPath}`);
          res.setHeader("Content-Type", "text/html");
          res.send(data);
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
        </head>
        <body>
          <h1>MFinances</h1>
          <p>Chargement de l'application...</p>
          <script>
            // Rediriger vers la racine pour recharger l'application correctement
            window.location.href = '/';
          </script>
        </body>
      </html>
    `);
  }
};

// Exporter le handler pour Vercel
module.exports = handler;
