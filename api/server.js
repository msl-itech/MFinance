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
    // En production sur Vercel, le répertoire est à la racine
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

// Trouver le dossier de build
const DIST_FOLDER = findBuildFolder();
console.log(`Dossier de build: ${DIST_FOLDER}`);

// Servir les fichiers statiques
app.use(express.static(DIST_FOLDER));

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

// Gérer toutes les autres routes
app.get("*", (req, res) => {
  // Extraire la route de l'URL en toute sécurité
  const url = req.originalUrl || req.url;
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
        return res.status(500).send("Erreur serveur");
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
      res.send(html);
    });
  } else {
    // Si aucun fichier prérendu n'existe, servir le index.html par défaut
    res.sendFile(path.join(DIST_FOLDER, "index.html"));
  }
});

// Configuration pour Vercel Serverless Function
if (process.env.VERCEL) {
  // Exporter l'application pour Vercel
  module.exports = app;
} else {
  // En local, démarrer le serveur
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
}
