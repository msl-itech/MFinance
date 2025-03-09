// vercel-debug.js - Script de débogage pour Vercel
const fs = require("fs");
const path = require("path");

function logDirectory(dir, depth = 0) {
  const indent = "  ".repeat(depth);
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);
    const isDir = stats.isDirectory();

    console.log(
      `${indent}${isDir ? "📁" : "📄"} ${file} ${
        isDir ? "" : "(" + stats.size + " bytes)"
      }`
    );

    if (isDir && depth < 3) {
      // Limiter la profondeur pour éviter les arbres trop grands
      logDirectory(fullPath, depth + 1);
    }
  });
}

console.log("=== VERCEL DEBUG INFO ===");
console.log("Current directory:", __dirname);
console.log("Process env:", {
  NODE_ENV: process.env.NODE_ENV,
  VERCEL: process.env.VERCEL,
  VERCEL_ENV: process.env.VERCEL_ENV,
  VERCEL_URL: process.env.VERCEL_URL,
});

console.log("\nContenu du répertoire de travail:");
logDirectory(__dirname);

console.log("\nVérification des chemins Angular courants:");
const possiblePaths = [
  path.join(__dirname, "dist"),
  path.join(__dirname, "dist", "mfinances"),
  path.join(__dirname, "dist", "mfinances", "browser"),
  path.join(__dirname, "dist", "browser"),
];

possiblePaths.forEach((p) => {
  console.log(`${p}: ${fs.existsSync(p) ? "Existe ✅" : "N'existe pas ❌"}`);
  if (fs.existsSync(p)) {
    try {
      console.log("Contenu:");
      logDirectory(p, 1);
    } catch (err) {
      console.error(
        `Erreur lors de la lecture du répertoire ${p}:`,
        err.message
      );
    }
  }
});

// Vérification du contenu de index.html
const buildFolder = path.join(__dirname, "dist", "mfinances", "browser");
if (fs.existsSync(buildFolder)) {
  const indexPath = path.join(buildFolder, "index.html");
  if (fs.existsSync(indexPath)) {
    console.log("\nVérification du contenu de index.html:");
    const indexContent = fs.readFileSync(indexPath, "utf8");
    const titleMatch = indexContent.match(/<title>(.*?)<\/title>/);
    const descMatch = indexContent.match(
      /<meta\s+name="description"\s+content="(.*?)"/
    );

    console.log(
      "Titre dans index.html:",
      titleMatch ? titleMatch[1] : "Non trouvé"
    );
    console.log(
      "Description dans index.html:",
      descMatch ? descMatch[1] : "Non trouvé"
    );

    // Vérification de la présence du script d'injection de métadonnées
    console.log(
      "Script de métadonnées présent:",
      indexContent.includes("function getMetaTagsForRoute")
        ? "Oui ✅"
        : "Non ❌"
    );
  }
}
