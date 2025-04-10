// Script d'installation spécifique pour Vercel
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function installDependencies() {
  try {
    console.log("Installation des dépendances avec --legacy-peer-deps...");
    execSync("npm install --legacy-peer-deps", { stdio: "inherit" });

    console.log("Installation des modules spécifiques...");
    // Installer des versions spécifiques qui fonctionnent ensemble
    execSync("npm install @popperjs/core@2.11.8 --legacy-peer-deps", {
      stdio: "inherit",
    });

    // Vérifier et modifier package.json si nécessaire
    const packagePath = path.join(process.cwd(), "package.json");
    const packageData = JSON.parse(fs.readFileSync(packagePath, "utf8"));

    // S'assurer que les overrides sont présents
    packageData.overrides = packageData.overrides || {};
    packageData.overrides["@popperjs/core"] = "^2.11.8";

    // Enregistrer les modifications
    fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2));

    console.log("Installation complétée avec succès");
    return true;
  } catch (error) {
    console.error("Erreur lors de l'installation:", error);
    return false;
  }
}

// Exécuter l'installation
installDependencies();
