// Configuration simplifiée pour Vercel
module.exports = {
  // Utiliser la commande standard
  buildCommand: "npm run vercel-build",
  // Désactiver la détection automatique du framework
  framework: null,
  // Dossier de sortie
  outputDirectory: "dist/mfinances/browser",
  // Commandes à exécuter avant le build
  installCommand: "npm install --legacy-peer-deps",
};
