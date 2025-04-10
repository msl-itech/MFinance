// api/server-local.js - Version locale pour tester le serveur
const handler = require("./server");
const http = require("http");

// Créer un serveur HTTP simple
const server = http.createServer((req, res) => {
  // Appeler le handler avec la requête et la réponse
  handler(req, res);
});

// Démarrer le serveur
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
