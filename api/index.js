// Point d'entrée alternatif pour Vercel
// Importe et réexporte le serveur Express de server.js

// Importer le serveur
const app = require("./server");

// Exporter pour Vercel
module.exports = app;
