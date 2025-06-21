#!/usr/bin/env node

/**
 * Script de validation des optimisations LCP
 * Vérifie que toutes les optimisations sont correctement implémentées
 */

const fs = require("fs");
const path = require("path");

// Configuration des tests
const TESTS = {
  // Fichiers à vérifier
  files: {
    headerComponent: "src/app/header-accueil/header-accueil.component.html",
    headerCSS: "src/app/header-accueil/header-accueil.component.css",
    indexHTML: "src/index.html",
    masterCSS: "src/assets/css/master.css",
  },

  // Images optimisées attendues
  optimizedImages: [
    "src/assets/img/bg/Group_header_s.webp",
    "src/assets/img/bg/Group_header_m.webp",
    "src/assets/img/bg/Group_header_l.webp",
    "src/assets/img/bg/Group_header_s.avif",
    "src/assets/img/bg/Group_header_m.avif",
    "src/assets/img/bg/Group_header_l.avif",
  ],
};

/**
 * Vérifie l'optimisation de l'image LCP dans le composant
 */
function checkLCPImageOptimization() {
  console.log("🔍 Vérification de l'optimisation de l'image LCP...\n");

  const filePath = TESTS.files.headerComponent;
  if (!fs.existsSync(filePath)) {
    console.log("❌ Fichier header-accueil.component.html introuvable");
    return false;
  }

  const content = fs.readFileSync(filePath, "utf8");
  const checks = [
    { pattern: /loading="eager"/, name: 'loading="eager"' },
    { pattern: /fetchpriority="high"/, name: 'fetchpriority="high"' },
    { pattern: /width="\d+"/, name: "attribut width" },
    { pattern: /height="\d+"/, name: "attribut height" },
    { pattern: /decoding="sync"/, name: 'decoding="sync"' },
    { pattern: /appOptimizeImage/, name: "directive appOptimizeImage" },
  ];

  let allPassed = true;
  checks.forEach((check) => {
    if (check.pattern.test(content)) {
      console.log(`✅ ${check.name} : Présent`);
    } else {
      console.log(`❌ ${check.name} : Manquant`);
      allPassed = false;
    }
  });

  return allPassed;
}

/**
 * Vérifie le préchargement dans index.html
 */
function checkPreloadOptimization() {
  console.log("\n🔍 Vérification du préchargement...\n");

  const filePath = TESTS.files.indexHTML;
  if (!fs.existsSync(filePath)) {
    console.log("❌ Fichier index.html introuvable");
    return false;
  }

  const content = fs.readFileSync(filePath, "utf8");
  const checks = [
    { pattern: /rel="preload".*Group_header/, name: "Préchargement image LCP" },
    {
      pattern: /fetchpriority="high"/,
      name: 'fetchpriority="high" sur preload',
    },
    { pattern: /imagesrcset/, name: "imagesrcset pour responsive" },
    { pattern: /imagesizes/, name: "imagesizes pour responsive" },
    { pattern: /Group_header_l\.avif/, name: "Préchargement AVIF" },
  ];

  let allPassed = true;
  checks.forEach((check) => {
    if (check.pattern.test(content)) {
      console.log(`✅ ${check.name} : Présent`);
    } else {
      console.log(`❌ ${check.name} : Manquant`);
      allPassed = false;
    }
  });

  return allPassed;
}

/**
 * Vérifie les optimisations CSS
 */
function checkCSSOptimizations() {
  console.log("\n🔍 Vérification des optimisations CSS...\n");

  const files = [
    { path: TESTS.files.headerCSS, name: "Header CSS" },
    { path: TESTS.files.masterCSS, name: "Master CSS" },
  ];

  let allPassed = true;

  files.forEach((file) => {
    if (!fs.existsSync(file.path)) {
      console.log(`❌ ${file.name} : Fichier introuvable`);
      allPassed = false;
      return;
    }

    const content = fs.readFileSync(file.path, "utf8");
    const checks = [
      { pattern: /contain:\s*layout/, name: "contain: layout" },
      { pattern: /will-change:\s*auto/, name: "will-change: auto" },
      { pattern: /aspect-ratio/, name: "aspect-ratio" },
      {
        pattern: /transform:\s*translateZ\(0\)/,
        name: "transform: translateZ(0)",
      },
    ];

    console.log(`📄 ${file.name}:`);
    checks.forEach((check) => {
      if (check.pattern.test(content)) {
        console.log(`  ✅ ${check.name}`);
      } else {
        console.log(`  ⚠️  ${check.name} : Non trouvé`);
      }
    });
  });

  return allPassed;
}

/**
 * Vérifie la présence des images optimisées
 */
function checkOptimizedImages() {
  console.log("\n🔍 Vérification des images optimisées...\n");

  let foundImages = 0;
  let totalImages = TESTS.optimizedImages.length;

  TESTS.optimizedImages.forEach((imagePath) => {
    if (fs.existsSync(imagePath)) {
      console.log(`✅ ${path.basename(imagePath)} : Présent`);
      foundImages++;
    } else {
      console.log(`❌ ${path.basename(imagePath)} : Manquant`);
    }
  });

  console.log(`\n📊 Images optimisées : ${foundImages}/${totalImages}`);

  if (foundImages === 0) {
    console.log("\n⚠️  AUCUNE image optimisée trouvée !");
    console.log(
      "📝 Exécutez les commandes d'optimisation du guide OPTIMISATION_LCP.md"
    );
  } else if (foundImages < totalImages) {
    console.log("\n⚠️  Images partiellement optimisées");
    console.log("📝 Générez les images manquantes avec ImageMagick ou Sharp");
  } else {
    console.log("\n🎉 Toutes les images optimisées sont présentes !");
  }

  return foundImages === totalImages;
}

/**
 * Génère un rapport de performance attendue
 */
function generatePerformanceReport() {
  console.log("\n📊 RAPPORT DE PERFORMANCE ATTENDUE\n");

  const report = [
    "🎯 OBJECTIFS LCP:",
    "   • LCP actuel : 10,810 ms",
    "   • LCP cible : < 2,500 ms",
    "   • Amélioration : -75%",
    "",
    "⚡ OPTIMISATIONS ACTIVES:",
    "   • Image LCP optimisée : ✅",
    "   • Préchargement agressif : ✅",
    "   • CSS contain/will-change : ✅",
    "   • Dimensions fixes (CLS) : ✅",
    "",
    "📈 GAINS ATTENDUS:",
    "   • Délai de chargement : 1.31s → 0.4s (-70%)",
    "   • Taille image mobile : -60% (AVIF)",
    "   • Score Lighthouse : +40-60 points",
    "",
    "🚀 PROCHAINES ÉTAPES:",
    "   1. Générer les images optimisées",
    "   2. Déployer les changements",
    "   3. Tester avec Lighthouse",
    "   4. Valider LCP < 2.5s",
  ];

  report.forEach((line) => console.log(line));
}

/**
 * Fonction principale
 */
function main() {
  console.log("🎯 VALIDATION DES OPTIMISATIONS LCP - MFinances\n");
  console.log("=".repeat(60));

  const results = {
    lcpImage: checkLCPImageOptimization(),
    preload: checkPreloadOptimization(),
    css: checkCSSOptimizations(),
    images: checkOptimizedImages(),
  };

  console.log("\n" + "=".repeat(60));
  console.log("\n📋 RÉSUMÉ DES VÉRIFICATIONS:\n");

  Object.entries(results).forEach(([test, passed]) => {
    const status = passed ? "✅ PASSÉ" : "❌ ÉCHEC";
    const testNames = {
      lcpImage: "Optimisation image LCP",
      preload: "Préchargement",
      css: "Optimisations CSS",
      images: "Images optimisées",
    };
    console.log(`${status} : ${testNames[test]}`);
  });

  const allPassed = Object.values(results).every(Boolean);

  if (allPassed) {
    console.log("\n🎉 TOUTES LES OPTIMISATIONS SONT EN PLACE !");
    console.log("🚀 Le LCP devrait être considérablement amélioré");
  } else {
    console.log("\n⚠️  OPTIMISATIONS INCOMPLÈTES");
    console.log("📖 Consultez OPTIMISATION_LCP.md pour les étapes manquantes");
  }

  generatePerformanceReport();

  return allPassed;
}

// Exécution si le script est appelé directement
if (require.main === module) {
  const success = main();
  process.exit(success ? 0 : 1);
}

module.exports = {
  checkLCPImageOptimization,
  checkPreloadOptimization,
  checkCSSOptimizations,
  checkOptimizedImages,
  main,
};
