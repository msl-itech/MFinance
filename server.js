
const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');

// Constants
const PORT = process.env.PORT || 4000;
let DIST_FOLDER = '';

// Determine build folder structure
function findBuildFolder() {
  const distPath = path.join(__dirname, 'dist');
  if (!fs.existsSync(distPath)) {
    console.log('Erreur: Le dossier dist n\'existe pas!');
    return null;
  }

  // Nouvelle structure: dist/mfinances
  const mfinancesPath = path.join(distPath, 'mfinances');
  if (fs.existsSync(mfinancesPath) && fs.existsSync(path.join(mfinancesPath, 'index.html'))) {
    console.log('Structure trouvée: dist/mfinances');
    return mfinancesPath;
  }

  // Ancienne structure: dist/mfinances/browser
  const mfinancesBrowserPath = path.join(distPath, 'mfinances', 'browser');
  if (fs.existsSync(mfinancesBrowserPath) && fs.existsSync(path.join(mfinancesBrowserPath, 'index.html'))) {
    console.log('Structure trouvée: dist/mfinances/browser');
    return mfinancesBrowserPath;
  }

  // Cas 2: dist/browser
  const browserPath = path.join(distPath, 'browser');
  if (fs.existsSync(browserPath) && fs.existsSync(path.join(browserPath, 'index.html'))) {
    console.log('Structure trouvée: dist/browser');
    return browserPath;
  }

  // Cas 3: dist contient directement le build
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    console.log('Structure trouvée: dist');
    return distPath;
  }

  console.log('Aucune structure valide trouvée!');
  return null;
}

// Find build folder
DIST_FOLDER = findBuildFolder();
if (!DIST_FOLDER) {
  console.error('Impossible de trouver le dossier de build. Arrêt du serveur.');
  process.exit(1);
}

// Create express app
const app = express();

// Compression
app.use(compression());

// Serve static files
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// Handle all other routes
app.get('*', (req, res) => {
  // Extract route from URL
  const url = req.url.split('?')[0];
  let route = url.replace(/^\//, ''); // Remove leading slash
  
  // Determine the path to the prerendered HTML file
  let htmlPath;
  if (route === '') {
    htmlPath = path.join(DIST_FOLDER, 'index.html');
  } else {
    htmlPath = path.join(DIST_FOLDER, route, 'index.html');
  }
  
  // Check if a prerendered file exists for this route
  if (fs.existsSync(htmlPath)) {
    // Serve the prerendered file
    res.sendFile(htmlPath);
  } else {
    // Fallback to the default index.html
    res.sendFile(path.join(DIST_FOLDER, 'index.html'));
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
