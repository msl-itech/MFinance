// Ce fichier est utilisé pour résoudre les problèmes d'alias pendant le build sur Vercel
const path = require("path");
const fs = require("fs");

// Créer un package.json temporaire pour @popperjs/core si nécessaire
function createAlias() {
  const popperPath = path.resolve("./node_modules/@popperjs/core");
  const popperPackage = path.join(popperPath, "package.json");

  if (fs.existsSync(popperPackage)) {
    try {
      let packageJson = require(popperPackage);

      // Vérifier si un module ESM est disponible
      if (!packageJson.module) {
        // Ajouter un champ "module" s'il est manquant
        packageJson.module = "./dist/esm/popper.js";

        // Sauvegarder le fichier modifié
        fs.writeFileSync(popperPackage, JSON.stringify(packageJson, null, 2));

        console.log("Alias @popperjs/core configuré avec succès");
      }
    } catch (err) {
      console.error(
        "Erreur lors de la configuration de l'alias pour @popperjs/core:",
        err
      );
    }
  } else {
    console.error("Package @popperjs/core non trouvé");
  }
}

// Exécuter la création d'alias
createAlias();
