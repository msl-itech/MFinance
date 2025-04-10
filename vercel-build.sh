#!/bin/bash

# Script de build pour Vercel

echo "🚀 Démarrage du build sur Vercel..."

# Installation des dépendances si nécessaire
if [ ! -d "node_modules" ]; then
  echo "📦 Installation des dépendances..."
  npm install --legacy-peer-deps
fi

# Build de l'application Angular
echo "🔨 Construction de l'application Angular..."
npm run build

# Vérifier la structure du build
echo "🔍 Vérification de la structure du build..."
ls -la dist/

# Si le dossier browser existe dans dist/mfinances
if [ -d "dist/mfinances/browser" ]; then
  echo "✅ Structure de build correcte détectée: dist/mfinances/browser"
else
  echo "⚠️ Le dossier dist/mfinances/browser n'existe pas!"
  ls -la dist/mfinances/
fi

# Créer le dossier public si nécessaire (pour compatibilité)
mkdir -p public

echo "✅ Build terminé!"
exit 0 