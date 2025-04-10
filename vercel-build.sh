#!/bin/bash

# Script de build pour Vercel
echo "Démarrage du build personnalisé pour Vercel..."

# Exécuter le script d'installation personnalisé
node vercel-install.js

# Exécuter la commande de build principale avec des options sûres
export NODE_OPTIONS="--max_old_space_size=4096 --legacy-peer-deps"
npx ng build --configuration production

# Exécuter le script de prérendu
node vercel-ssr-seo.js

# Copier les fichiers nécessaires dans le répertoire de sortie
cp server.js dist/mfinances/browser/
cp package.json dist/mfinances/browser/
cp vercel-alias.js dist/mfinances/browser/

# Créer un package.json minimal dans le répertoire de sortie
cat > dist/mfinances/browser/package.json << 'EOL'
{
  "name": "mfinances-server",
  "version": "1.0.0",
  "main": "server.js",
  "dependencies": {
    "express": "^4.18.2",
    "compression": "^1.8.0"
  },
  "engines": {
    "node": "18.x"
  }
}
EOL

echo "Build terminé avec succès!" 