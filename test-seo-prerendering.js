// Script de test pour vérifier le prérendu SEO localement
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

console.log("=== Test de prérendu SEO ===");
console.log("1. Construction du projet (build)...");

// Exécuter le build en mode production
exec("npm run build -- --configuration production", (error, stdout, stderr) => {
  if (error) {
    console.error(`Erreur pendant le build: ${error.message}`);
    return;
  }

  console.log("Build terminé avec succès.");
  console.log(stdout);

  // Exécuter le script de prérendu SEO
  console.log("2. Exécution du script de prérendu SEO...");

  exec("node vercel-seo-prerender.js", (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur pendant le prérendu SEO: ${error.message}`);
      return;
    }

    console.log("Prérendu SEO terminé avec succès.");
    console.log(stdout);

    // Vérifier le résultat pour quelques routes
    console.log("3. Vérification des fichiers HTML générés...");

    const routesToCheck = ["", "about", "contact", "services/comptabilite"];
    const distPath = path.join(__dirname, "dist", "mfinances", "browser");

    routesToCheck.forEach((route) => {
      let htmlPath;
      if (route === "") {
        htmlPath = path.join(distPath, "index.html");
      } else {
        htmlPath = path.join(distPath, route, "index.html");
      }

      if (fs.existsSync(htmlPath)) {
        const content = fs.readFileSync(htmlPath, "utf8");

        // Extraire le titre et la description
        const titleMatch = content.match(/<title>(.*?)<\/title>/);
        const descMatch = content.match(
          /<meta\s+name="description"\s+content="(.*?)"/
        );

        console.log(`\nRoute: ${route || "racine"}`);
        console.log(`- Titre: ${titleMatch ? titleMatch[1] : "Non trouvé"}`);
        console.log(
          `- Description: ${descMatch ? descMatch[1] : "Non trouvé"}`
        );
      } else {
        console.log(`\nRoute: ${route || "racine"} - Fichier HTML non trouvé`);
      }
    });

    console.log("\n=== Test terminé ===");
  });
});
