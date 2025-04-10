module.exports = {
  // Configuration pour résoudre les problèmes de dépendances
  resolveAlias: {
    "@popperjs/core": require.resolve("@popperjs/core/dist/umd/popper.js"),
  },
  // Ajout d'options spéciales pour vite
  vite: {
    resolve: {
      alias: {
        "@popperjs/core": require.resolve("@popperjs/core/dist/umd/popper.js"),
      },
    },
    optimizeDeps: {
      include: ["@popperjs/core"],
    },
  },
  // Configuration pour esbuild
  esbuild: {
    resolveExtensions: [".js", ".jsx", ".ts", ".tsx", ".mjs"],
    mainFields: ["module", "main", "browser"],
  },
};
