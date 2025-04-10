// Configuration pour Vercel
module.exports = {
  // Options de build
  build: {
    env: {
      NODE_OPTIONS: "--legacy-peer-deps",
    },
  },
  // Configuration des routes
  routes: [
    { src: "/api/server", dest: "/api/server.js" },
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/api/server.js" },
  ],
  // Options pour les fonctions serverless
  functions: {
    "api/server.js": {
      memory: 1024,
      maxDuration: 10,
    },
  },
};
