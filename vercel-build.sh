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

# S'assurer que le dossier api existe
mkdir -p api

# Copier les dépendances nécessaires pour les fonctions serverless
echo "Installation des dépendances pour la fonction serverless..."
cp api/server.js dist/mfinances/browser/

# S'assurer que le fichier server.js est présent dans le dossier api de production
if [ ! -f "api/server.js" ]; then
  echo "Erreur: api/server.js n'existe pas!"
  exit 1
fi

# Nous n'avons plus besoin de créer un package.json minimal dans le répertoire de sortie
# car le fichier api/package.json sera utilisé par Vercel

echo "Build terminé avec succès!" 