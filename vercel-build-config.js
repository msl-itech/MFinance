// Configuration du build pour Vercel
module.exports = {
  installCommand: "npm install --legacy-peer-deps",
  buildCommand: "NODE_OPTIONS=--legacy-peer-deps npm run build:ssr"
}; 