#!/usr/bin/env node

/**
 * Script d'optimisation spécialisé pour l'image LCP Group_header.webp
 * Génère des versions optimisées pour améliorer drastiquement le LCP
 */

const fs = require("fs");
const path = require("path");

// Configuration spécifique pour l'image LCP
const LCP_IMAGE_CONFIG = {
  input: "src/assets/img/bg/Group_header.webp",
  outputDir: "src/assets/img/bg/",
  baseName: "Group_header",

  // Tailles optimisées pour différents breakpoints
  sizes: {
    small: { width: 480, height: 360, suffix: "_s" }, // Mobile
    medium: { width: 768, height: 576, suffix: "_m" }, // Tablette
    large: { width: 1200, height: 900, suffix: "_l" }, // Desktop
  },

  // Formats de sortie avec optimisations agressives
  formats: {
    avif: {
      quality: 85,
      effort: 9,
      chromaSubsampling: "4:2:0",
    },
    webp: {
      quality: 90,
      effort: 6,
      method: 6,
    },
  },
};

/**
 * Génère les commandes d'optimisation pour ImageMagick
 */
function generateImageMagickCommands() {
  const commands = [];
  const { input, outputDir, baseName, sizes, formats } = LCP_IMAGE_CONFIG;

  console.log("=== COMMANDES IMAGEMAGICK POUR L'IMAGE LCP ===\n");

  Object.entries(sizes).forEach(([sizeName, config]) => {
    const { width, height, suffix } = config;

    // Format WebP optimisé
    const webpOutput = path.join(outputDir, `${baseName}${suffix}.webp`);
    const webpCmd = `magick "${input}" -resize ${width}x${height}^ -gravity center -extent ${width}x${height} -quality 90 -define webp:method=6 -define webp:preprocessing=2 -define webp:target-size=0 -strip "${webpOutput}"`;
    commands.push(webpCmd);

    // Format AVIF ultra-optimisé pour LCP
    const avifOutput = path.join(outputDir, `${baseName}${suffix}.avif`);
    const avifCmd = `magick "${input}" -resize ${width}x${height}^ -gravity center -extent ${width}x${height} -quality 85 -define avif:speed=0 -define avif:chroma-subsampling=4:2:0 -strip "${avifOutput}"`;
    commands.push(avifCmd);
  });

  // Affichage des commandes
  commands.forEach((cmd, index) => {
    console.log(`# Commande ${index + 1}:`);
    console.log(cmd);
    console.log("");
  });

  return commands;
}

/**
 * Génère les commandes d'optimisation pour Sharp (Node.js)
 */
function generateSharpCommands() {
  const { input, outputDir, baseName, sizes } = LCP_IMAGE_CONFIG;

  console.log("\n=== SCRIPT SHARP (NODE.JS) POUR L'IMAGE LCP ===\n");

  const sharpScript = `
const sharp = require('sharp');
const path = require('path');

async function optimizeLCPImage() {
  const inputPath = '${input}';
  const outputDir = '${outputDir}';
  
  console.log('Optimisation de l\\'image LCP en cours...');
  
  try {
    ${Object.entries(sizes)
      .map(([sizeName, config]) => {
        const { width, height, suffix } = config;
        return `
    // ${sizeName.toUpperCase()} (${width}x${height})
    await sharp(inputPath)
      .resize(${width}, ${height}, {
        fit: 'cover',
        position: 'center'
      })
      .webp({
        quality: 90,
        effort: 6,
        smartSubsample: true
      })
      .toFile(path.join(outputDir, '${baseName}${suffix}.webp'));
    
    await sharp(inputPath)
      .resize(${width}, ${height}, {
        fit: 'cover',
        position: 'center'
      })
      .avif({
        quality: 85,
        effort: 9,
        chromaSubsampling: '4:2:0'
      })
      .toFile(path.join(outputDir, '${baseName}${suffix}.avif'));
    
    console.log('✅ ${sizeName} (${width}x${height}) optimisé');`;
      })
      .join("\n")}
    
    console.log('\\n🎉 Optimisation de l\\'image LCP terminée !');
    console.log('📊 Amélioration LCP attendue : 40-60%');
    console.log('💾 Réduction de taille attendue : 60-80%');
    
  } catch (error) {
    console.error('❌ Erreur lors de l\\'optimisation:', error);
  }
}

optimizeLCPImage();
`;

  console.log(sharpScript);

  // Sauvegarde du script Sharp
  const sharpScriptPath = "scripts/optimize-lcp-sharp.js";
  fs.writeFileSync(sharpScriptPath, sharpScript);
  console.log(`\n📁 Script Sharp sauvegardé dans: ${sharpScriptPath}`);

  return sharpScript;
}

/**
 * Génère les recommandations d'optimisation
 */
function generateOptimizationRecommendations() {
  console.log("\n=== RECOMMANDATIONS D'OPTIMISATION LCP ===\n");

  const recommendations = [
    "🚀 PRIORITÉ ABSOLUE - Image LCP critique:",
    '   • Utilisez fetchpriority="high" (✅ déjà fait)',
    '   • Préchargez avec <link rel="preload"> (✅ déjà fait)',
    "   • Ajoutez width/height pour éviter CLS (✅ déjà fait)",
    "",
    "📊 OPTIMISATIONS TECHNIQUES:",
    "   • Format AVIF : -60% de taille vs WebP",
    "   • Format WebP : -30% de taille vs JPEG",
    "   • Responsive images : -70% sur mobile",
    "",
    "⚡ AMÉLIORATIONS ATTENDUES:",
    "   • LCP actuel : 10.8s → Cible : 2.5s (-75%)",
    "   • Délai de chargement : 1.31s → 0.4s (-70%)",
    "   • Score LCP : Mauvais → Bon",
    "",
    "🔧 PROCHAINES ÉTAPES:",
    "   1. Exécuter les commandes d'optimisation ci-dessus",
    "   2. Déployer les nouvelles images",
    "   3. Tester les performances avec Lighthouse",
    "   4. Valider l'amélioration du LCP",
  ];

  recommendations.forEach((line) => console.log(line));
}

/**
 * Fonction principale
 */
function main() {
  console.log("🎯 OPTIMISATION DE L'IMAGE LCP - Group_header.webp\n");
  console.log("📈 Objectif : Réduire le LCP de 10.8s à moins de 2.5s\n");

  // Vérification de l'existence du fichier source
  if (!fs.existsSync(LCP_IMAGE_CONFIG.input)) {
    console.error(`❌ Fichier source introuvable: ${LCP_IMAGE_CONFIG.input}`);
    process.exit(1);
  }

  // Création du dossier de sortie si nécessaire
  if (!fs.existsSync(LCP_IMAGE_CONFIG.outputDir)) {
    fs.mkdirSync(LCP_IMAGE_CONFIG.outputDir, { recursive: true });
  }

  // Génération des commandes
  generateImageMagickCommands();
  generateSharpCommands();
  generateOptimizationRecommendations();

  console.log("\n✨ Script d'optimisation LCP généré avec succès !");
}

// Exécution si le script est appelé directement
if (require.main === module) {
  main();
}

module.exports = {
  LCP_IMAGE_CONFIG,
  generateImageMagickCommands,
  generateSharpCommands,
  generateOptimizationRecommendations,
};
