import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { renderModule } from '@angular/platform-server';
import * as compression from 'compression';
import * as express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';
import { AppServerModule } from './src/main.server';

// Express server
const app = express();
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/mfinances/browser');

// Compression
app.use(compression());

// Serve static files
app.get(
  '*.*',
  express.static(DIST_FOLDER, {
    maxAge: '1y',
  })
);

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  const indexHtml = join(DIST_FOLDER, 'index.html');

  if (!existsSync(indexHtml)) {
    res.status(500).send('index.html not found');
    return;
  }

  // Route de base pour l'application
  const baseUrl = req.baseUrl || '/';

  renderModule(AppServerModule, {
    document: indexHtml,
    url: req.url,
    extraProviders: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
  })
    .then((html) => {
      res.status(200).send(html);
    })
    .catch((err) => {
      console.error('Error rendering route:', req.url, err);
      res.status(500).send('Server Error');
    });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
