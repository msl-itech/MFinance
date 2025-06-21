# 🚀 Guide d'Optimisation des Images - MFinances

Ce guide vous explique comment optimiser les images de votre site pour améliorer significativement les performances (LCP, FCP, CLS).

## 📊 Impact des Optimisations

### Images problématiques identifiées :

| Image                    | Taille Actuelle | Économies Potentielles | Priorité     |
| ------------------------ | --------------- | ---------------------- | ------------ |
| `grande_entreprise.webp` | 737.6 KiB       | **571.3 KiB**          | 🔴 Critique  |
| `patrimonial.webp`       | 221.3 KiB       | **201.8 KiB**          | 🔴 Critique  |
| `57.avif`                | 103.3 KiB       | **94.2 KiB**           | 🟡 Important |
| `image-MIKA.webp`        | 78.9 KiB        | **10.8 KiB**           | 🟡 Important |
| `Container.webp`         | 22.2 KiB        | **6.2 KiB**            | 🟢 Mineur    |

### Amélioration attendue :

- 📱 **Mobile**: Réduction de ~70% de la bande passante
- 💻 **Desktop**: Réduction de ~60% de la bande passante
- 🚀 **LCP**: Amélioration de 40-60%
- ⚡ **CLS**: Stabilisation des images

## 🛠️ Méthodes d'Optimisation

### 1. Composant OptimizedImage (Recommandé)

Le composant `app-optimized-image` remplace automatiquement les balises `<img>` :

```html
<!-- Avant -->
<img src="assets/img/image/Container.webp" alt="Image" class="img-fluid" />

<!-- Après -->
<app-optimized-image src="assets/img/image/Container.webp" alt="Service comptabilité Bruxelles" imgClass="img-fluid" width="600" height="400" loading="lazy"> </app-optimized-image>
```

**Avantages :**

- ✅ Support automatique AVIF/WebP/fallback
- ✅ Srcset responsive automatique
- ✅ Lazy loading intelligent
- ✅ Dimensions pour éviter CLS

### 2. Directive ImageOptimizer (Simple)

Pour les images existantes, ajoutez simplement la directive :

```html
<!-- Optimisation simple -->
<img src="assets/img/image/Container.webp" appOptimizeImage alt="Image" class="img-fluid" />

<!-- Image critique (LCP) -->
<img src="assets/img/bg/Group_header.webp" appOptimizeImage [priority]="true" alt="Image critique" />
```

## 📋 Configuration des Tailles

Le service `ResponsiveImageService` gère automatiquement 3 tailles :

```typescript
// Configuration automatique
'Container.webp': {
  small: { width: 300, height: 200, quality: 75 },   // Mobile
  medium: { width: 450, height: 300, quality: 80 },  // Tablette
  large: { width: 600, height: 400, quality: 85 }    // Desktop
}
```

## 🔧 Génération des Images Optimisées

### Option 1: Script automatique (Recommandé)

```bash
# Génère les commandes d'optimisation
node scripts/optimize-images.js

# Avec Sharp (plus simple)
npm install sharp
node scripts/sharp-optimize.js
```

### Option 2: ImageMagick manuel

```bash
# Installation
brew install imagemagick  # macOS
sudo apt-get install imagemagick  # Linux

# Exemples de commandes générées
magick "src/assets/img/webp/grande_entreprise.webp" \
  -resize 400x300^ -gravity center -extent 400x300 \
  -quality 75 -format webp \
  "src/assets/img/webp/grande_entreprise_s.webp"
```

### Option 3: Outils en ligne

- [Squoosh](https://squoosh.app/) - Google
- [TinyPNG](https://tinypng.com/) - Compression automatique
- [ImageOptim](https://imageoptim.com/) - macOS

## 📁 Structure des Fichiers

```
src/assets/img/webp/
├── grande_entreprise.webp          # Original
├── grande_entreprise_s.webp        # Small (400x300)
├── grande_entreprise_m.webp        # Medium (600x450)
├── grande_entreprise_l.webp        # Large (800x600)
├── grande_entreprise_s.avif        # Small AVIF
├── grande_entreprise_m.avif        # Medium AVIF
└── grande_entreprise_l.avif        # Large AVIF
```

## 🔄 Migration Étape par Étape

### Étape 1: Images Critiques (Impact immédiat)

```html
<!-- Image LCP dans header-accueil -->
<img src="assets/img/bg/Group_header.webp" appOptimizeImage [priority]="true" loading="eager" />
```

### Étape 2: Images Importantes

```html
<!-- Photos produits, CEO, etc. -->
<app-optimized-image src="../../assets/img/image/image-MIKA.webp" alt="Mika MUSUNGAYI - Expert-comptable" width="400" height="500"> </app-optimized-image>
```

### Étape 3: Images Secondaires

```html
<!-- Illustrations, icônes -->
<img src="assets/img/icons/icon.webp" appOptimizeImage loading="lazy" />
```

## ⚡ Optimisations Avancées

### Préchargement des Images Critiques

Dans `index.html` :

```html
<link rel="preload" href="assets/img/bg/Group_header_m.webp" as="image" fetchpriority="high" />
```

### Lazy Loading Intelligent

```typescript
// Configuration automatique
loading = "lazy"; // Images hors viewport
loading = "eager"; // Images critiques (LCP)
```

### Format AVIF en Priorité

```html
<picture>
  <source srcset="image_s.avif 480w, image_m.avif 768w" type="image/avif" />
  <source srcset="image_s.webp 480w, image_m.webp 768w" type="image/webp" />
  <img src="image_m.webp" alt="Fallback" />
</picture>
```

## 📈 Monitoring des Performances

### Métriques à Surveiller :

- **LCP (Largest Contentful Paint)** : < 2.5s
- **CLS (Cumulative Layout Shift)** : < 0.1
- **Taille des Images** : Réduction cible 60-70%

### Outils de Test :

```bash
# Lighthouse audit
npm install -g lighthouse
lighthouse https://www.mfinances.be --view

# WebPageTest
https://www.webpagetest.org/

# GTmetrix
https://gtmetrix.com/
```

## 🚨 Points d'Attention

### ✅ Bonnes Pratiques :

- Toujours spécifier `width` et `height` pour éviter CLS
- Utiliser `loading="eager"` seulement pour les images LCP
- Préférer AVIF > WebP > JPEG pour la qualité
- Optimiser les images > 50 KiB en priorité

### ❌ À Éviter :

- Images > 1MB sur mobile
- Chargement de toutes les tailles simultanément
- Oublier les attributs `alt` (SEO/accessibilité)
- Pas de fallback pour les formats modernes

## 🔍 Dépannage

### Problème : Images ne se chargent pas

```typescript
// Vérifier le service
console.log(this.imageService.getOptimalImageSrc("test.webp"));
```

### Problème : Erreurs de compilation

```typescript
// S'assurer que le composant est importé
imports: [CommonModule, OptimizedImageComponent];
```

### Problème : Images floues

```bash
# Vérifier la qualité dans la config
quality: 85  # Augmenter si nécessaire
```

## 📞 Support

Pour toute question sur l'optimisation des images :

1. Vérifiez la configuration dans `ResponsiveImageService`
2. Testez avec `node scripts/optimize-images.js`
3. Consultez les logs dans la console dev

---

💡 **Conseil** : Commencez par optimiser les 3 plus grosses images pour un impact immédiat sur les performances !
