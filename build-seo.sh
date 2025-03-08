#!/bin/bash

# Script pour construire l'application avec optimisation SEO

echo "Démarrage du build avec optimisation SEO..."

# Build de l'application Angular
echo "Build de l'application Angular..."
ng build --configuration production

# Exécution du script de prérendu
echo "Génération des fichiers HTML statiques pour le SEO..."
node src/prerender.js

echo "Build terminé avec succès!"
echo "Les fichiers HTML statiques pour le SEO ont été générés dans le répertoire dist/mfinances/browser/" 