const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Exécuter le build Angular
console.log("Démarrage du build Angular...");
execSync("ng build --configuration production", { stdio: "inherit" });

// Copier le fichier vercel.json dans le répertoire de build
console.log("Copie du fichier vercel.json...");
fs.copyFileSync(
  path.join(__dirname, "vercel.json"),
  path.join(__dirname, "dist", "mfinances", "browser", "vercel.json")
);

// Exécuter le script de prérendu
console.log("Génération des fichiers HTML statiques pour le SEO...");
require("./src/prerender.js");

console.log("Build pour Vercel terminé avec succès!");
