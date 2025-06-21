#!/usr/bin/env node

/**
 * Script de diagnostic LCP - Identifie les problèmes de performance
 */

const fs = require("fs");
const path = require("path");

function checkImageSizes() {
  console.log("🔍 DIAGNOSTIC DES TAILLES D'IMAGES LCP\n");

  const images = [
    "src/assets/img/bg/Group_header.webp",
    "src/assets/img/bg/Group_header_s.webp",
    "src/assets/img/bg/Group_header_m.webp",
    "src/assets/img/bg/Group_header_l.webp",
    "src/assets/img/bg/Group_header_s.avif",
    "src/assets/img/bg/Group_header_m.avif",
    "src/assets/img/bg/Group_header_l.avif",
  ];

  images.forEach((imagePath) => {
    if (fs.existsSync(imagePath)) {
      const stats = fs.statSync(imagePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

      console.log(
        `📄 ${path.basename(imagePath)}: ${sizeKB} KB (${sizeMB} MB)`
      );

      if (stats.size > 500000) {
        // > 500KB
        console.log(`   ⚠️  TROP LOURD ! Devrait être < 500KB`);
      } else if (stats.size > 200000) {
        // > 200KB
        console.log(`   ⚠️  Assez lourd, pourrait être optimisé`);
      } else {
        console.log(`   ✅ Taille acceptable`);
      }
    } else {
      console.log(`❌ ${path.basename(imagePath)}: MANQUANT`);
    }
  });
}

function analyzeCurrentConfig() {
  console.log("\n🔍 ANALYSE DE LA CONFIGURATION ACTUELLE\n");

  // Vérifier le composant header
  const headerPath = "src/app/header-accueil/header-accueil.component.html";
  if (fs.existsSync(headerPath)) {
    const content = fs.readFileSync(headerPath, "utf8");

    console.log("📄 Configuration de l'image LCP:");

    // Extraire les attributs de l'image
    const imgMatch = content.match(/<img[^>]*>/);
    if (imgMatch) {
      const imgTag = imgMatch[0];

      const src = imgTag.match(/src="([^"]*)"/)
        ? imgTag.match(/src="([^"]*)"/)[1]
        : "Non trouvé";
      const loading = imgTag.match(/loading="([^"]*)"/)
        ? imgTag.match(/loading="([^"]*)"/)[1]
        : "Non défini";
      const fetchpriority = imgTag.match(/fetchpriority="([^"]*)"/)
        ? imgTag.match(/fetchpriority="([^"]*)"/)[1]
        : "Non défini";
      const width = imgTag.match(/width="([^"]*)"/)
        ? imgTag.match(/width="([^"]*)"/)[1]
        : "Non défini";
      const height = imgTag.match(/height="([^"]*)"/)
        ? imgTag.match(/height="([^"]*)"/)[1]
        : "Non défini";
      const hasSrcset = imgTag.includes("srcset");

      console.log(`   • src: ${src}`);
      console.log(
        `   • loading: ${loading} ${loading === "eager" ? "✅" : "❌"}`
      );
      console.log(
        `   • fetchpriority: ${fetchpriority} ${
          fetchpriority === "high" ? "✅" : "❌"
        }`
      );
      console.log(
        `   • width: ${width} ${width !== "Non défini" ? "✅" : "❌"}`
      );
      console.log(
        `   • height: ${height} ${height !== "Non défini" ? "✅" : "❌"}`
      );
      console.log(`   • srcset: ${hasSrcset ? "✅ Présent" : "❌ Absent"}`);
    }
  }
}

function generateRecommendations() {
  console.log("\n🚀 RECOMMANDATIONS POUR AMÉLIORER LE LCP\n");

  console.log("1. 📊 VÉRIFICATIONS IMMÉDIATES:");
  console.log("   • Tester sur différentes connexions (3G, 4G, WiFi)");
  console.log("   • Vérifier la compression serveur (Gzip/Brotli)");
  console.log("   • Analyser les Core Web Vitals en production");
  console.log("");

  console.log("2. 🔧 OPTIMISATIONS TECHNIQUES:");
  console.log("   • Utiliser un CDN pour les images");
  console.log("   • Implémenter le cache browser optimal");
  console.log("   • Réduire le TTFB serveur");
  console.log("");

  console.log("3. 📱 TESTS RECOMMANDÉS:");
  console.log("   • Lighthouse en mode incognito");
  console.log("   • PageSpeed Insights");
  console.log("   • WebPageTest avec différentes localisations");
  console.log("");

  console.log("4. 🎯 OBJECTIFS:");
  console.log("   • LCP < 2.5s (Bon)");
  console.log("   • LCP < 4.0s (Acceptable)");
  console.log("   • CLS < 0.1 (Bon)");
  console.log("");

  console.log("5. ⚡ OPTIMISATIONS AVANCÉES:");
  console.log("   • Service Worker pour cache intelligent");
  console.log("   • HTTP/2 Push pour ressources critiques");
  console.log("   • Préconnexion aux domaines externes");
}

function checkNetworkOptimizations() {
  console.log("\n🌐 VÉRIFICATIONS RÉSEAU\n");

  // Vérifier les préchargements
  const indexPath = "src/index.html";
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, "utf8");

    const preloads = content.match(/rel="preload"/g) || [];
    console.log(`📡 Préchargements détectés: ${preloads.length}`);

    if (preloads.length > 5) {
      console.log(
        "   ⚠️  TROP de préchargements peuvent saturer la bande passante"
      );
      console.log("   💡 Conseil: Limiter aux ressources vraiment critiques");
    }

    const hasImagePreload = content.includes("Group_header");
    console.log(
      `🖼️  Préchargement image LCP: ${hasImagePreload ? "✅" : "❌"}`
    );
  }
}

function main() {
  console.log("🎯 DIAGNOSTIC LCP - MFinances\n");
  console.log("=".repeat(60));

  checkImageSizes();
  analyzeCurrentConfig();
  checkNetworkOptimizations();
  generateRecommendations();

  console.log("\n" + "=".repeat(60));
  console.log("📋 DIAGNOSTIC TERMINÉ");
  console.log("\n💡 CONSEIL: Si le LCP reste lent après optimisations,");
  console.log(
    "   le problème peut venir du serveur ou de la connexion réseau."
  );
}

if (require.main === module) {
  main();
}

module.exports = { main, checkImageSizes, analyzeCurrentConfig };
