# Core Web Vitals Analysis: https://mfinances.be
**Date:** March 9, 2026
**Analysis Method:** Network timing + HTML source analysis (PageSpeed Insights API quota exceeded)

---

## Executive Summary

**Overall Status:** FAILING multiple Core Web Vitals thresholds

| Metric | Target (Good) | Estimated Status | Result |
|--------|---------------|------------------|--------|
| **INP** (Interaction to Next Paint) | ≤200ms | LIKELY POOR | Heavy JS (1.65MB) + jQuery |
| **LCP** (Largest Contentful Paint) | ≤2.5s | POOR | TTFB: 6.9s + slow TLS |
| **CLS** (Cumulative Layout Shift) | ≤0.1 | NEEDS IMPROVEMENT | Font loading + dynamic content |
| **TTFB** (Time to First Byte) | ≤200ms | CRITICAL FAIL | 6,900ms (6.9 seconds) |

**Performance Score Estimate:** 15-30/100

---

## Critical Issues Identified

### 1. TTFB - CRITICAL FAILURE (6.9 seconds)
**Current:** 6,900ms
**Target:** <200ms
**Impact:** Blocks ALL other metrics

#### Breakdown:
- DNS Lookup: 6ms (GOOD)
- TCP Connect: 325ms (acceptable)
- **TLS Handshake: 4,606ms (CRITICAL)** ← Main bottleneck
- Server processing: 2,294ms (poor)
- Total TTFB: 6,900ms

**Root Cause:** Extremely slow TLS/SSL negotiation suggesting:
- Server CPU constraints
- Inefficient SSL configuration
- Missing TLS session resumption
- Possible cold start (serverless)

---

### 2. LCP - POOR (Estimated 8-12 seconds)
**Target:** ≤2.5s
**Likely Result:** >8s

#### Issues:
1. **TTFB kills LCP** - 6.9s before ANY content arrives
2. **Redirect chain:** mfinances.be → www.mfinances.be (adds 300-500ms)
3. **LCP image:** Group_header_m.webp (55KB)
   - Preloaded correctly (GOOD)
   - But won't load until 7+ seconds due to TTFB
4. **Angular app rendering delay:**
   - 1.65MB JavaScript must execute
   - Client-side rendering blocks LCP

#### LCP Subpart Estimates:
- TTFB: 6,900ms (89% of total)
- Resource load delay: 200ms
- Resource load time: 300ms
- Element render delay: 500ms (Angular bootstrap)
- **Total LCP: ~7.9-8.9 seconds**

---

### 3. INP - LIKELY POOR (Estimated 300-800ms)
**Target:** ≤200ms
**Likely Result:** 300-800ms

#### Issues:
1. **Massive JavaScript bundle: 1.65MB total**
   - main-ELACSKAL.js: 1.39MB (CRITICAL)
   - scripts-TJ5S4B4Z.js: 181KB
   - jquery-3-6-0.min.js: 87KB
   - polyfills-FFHMD2TL.js: 34KB

2. **jQuery loaded with `defer`** - blocks main thread
   - Line 36: Unnecessary for modern Angular
   - Adds parse/compile time

3. **Synchronous inline scripts in head** (Lines 38-70)
   - Google Analytics blocking
   - Debug console.log statements (production!)

4. **Angular app bootstrap delay**
   - Client-side rendering
   - Large bundle parse time
   - Hydration overhead

**Expected Long Tasks:** 5-15 tasks >50ms each

---

### 4. CLS - NEEDS IMPROVEMENT (Estimated 0.15-0.25)
**Target:** ≤0.1
**Likely Result:** 0.15-0.25

#### Issues:
1. **Font Loading Delays**
   - 3 FontAwesome fonts preloaded (brands, solid, regular)
   - `font-display: block` used (line 71)
   - Causes FOIT (Flash of Invisible Text)
   - Should use `font-display: swap`

2. **Angular SPA rendering**
   - Empty `<app-root>` initially (line 74)
   - Content appears after JS execution
   - Causes layout shift

3. **CSS loaded asynchronously** (line 71)
   - `media="print" onload="this.media='all'"`
   - Causes FOUC (Flash of Unstyled Content)

4. **Missing explicit dimensions**
   - Critical CSS has aspect-ratio (GOOD)
   - But may not prevent all shifts

---

## Resource Analysis

### JavaScript Bundles (1.65MB uncompressed)
| File | Size | Issue |
|------|------|-------|
| main-ELACSKAL.js | 1.39MB | Massive Angular bundle |
| scripts-TJ5S4B4Z.js | 181KB | Additional scripts |
| jquery-3-6-0.min.js | 87KB | Unnecessary with Angular |
| polyfills-FFHMD2TL.js | 34KB | Acceptable |

### CSS (426KB)
- styles-7CLXWFBM.css: 426KB
- Loaded async (good) but causes CLS

### Images
- Group_header_m.webp: 55KB (well optimized)
- Using WebP format (GOOD)
- Properly preloaded with fetchpriority="high" (GOOD)

### Caching Issues
**ALL resources:** `cache-control: public, max-age=0, must-revalidate`
- No long-term caching for static assets
- Hashed filenames suggest immutable assets
- Should use: `cache-control: public, max-age=31536000, immutable`

---

## Third-Party Scripts Impact

1. **Google Analytics** (async - GOOD)
   - gtag.js loaded asynchronously
   - But inline config script blocks (lines 38-50)

2. **Google Ads conversion tracking** (lines 47-50)
   - Inline synchronous script
   - Blocks initial render

---

## Positive Findings

1. **Good image optimization**
   - WebP format used
   - Proper preload with fetchpriority
   - Reasonable file size (55KB)

2. **Critical CSS inlined**
   - Aspect ratio defined
   - Prevents some CLS

3. **Modern build setup**
   - ES modules used
   - Code splitting (8 chunks)
   - Critters for critical CSS

4. **Font preloading**
   - 3 fonts preloaded correctly
   - crossorigin attribute present

---

## Priority Recommendations

### CRITICAL - Fix TTFB (Expected Impact: +70 points)

**1. Optimize TLS/SSL Configuration**
```nginx
# Enable TLS session resumption
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;
ssl_session_tickets on;

# Use modern TLS 1.3
ssl_protocols TLSv1.3 TLSv1.2;

# Enable OCSP stapling
ssl_stapling on;
ssl_stapling_verify on;
```

**2. Implement Edge Caching (Vercel-specific)**
```javascript
// vercel.json
{
  "headers": [
    {
      "source": "/",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, s-maxage=3600, stale-while-revalidate=86400"
        }
      ]
    }
  ]
}
```

**3. Remove Redirect Chain**
- Canonical URL: www.mfinances.be
- mfinances.be → www.mfinances.be adds 300-500ms
- Configure DNS to point directly to www version

**4. Consider Server-Side Rendering (SSR)**
- Angular Universal for SSR
- Pre-render static pages
- Reduces client-side rendering delay

**Target:** Reduce TTFB from 6.9s to <500ms

---

### HIGH PRIORITY - Reduce JavaScript Bundle (Expected Impact: +20 points)

**1. Remove jQuery (Breaking Change)**
```bash
# jQuery is unnecessary in modern Angular
npm uninstall jquery
```
- Remove line 36 from index.html
- Refactor any jQuery dependencies to vanilla JS
- Savings: 87KB + parse time

**2. Code Splitting Optimization**
```typescript
// Angular lazy loading
{
  path: 'tresorerie',
  loadChildren: () => import('./TresorerieModule/tresorerie.module').then(m => m.TresorerieModule)
}
```

**3. Tree Shaking Analysis**
```bash
# Analyze bundle
npx webpack-bundle-analyzer dist/stats.json
```
- Identify unused dependencies
- Remove dead code
- Target: Reduce main bundle to <500KB

**4. Remove Debug Code from Production**
- Lines 52-69: Debug console.log statements
- Should be stripped in production build

**Target:** Reduce total JS from 1.65MB to <800KB

---

### HIGH PRIORITY - Fix Caching (Expected Impact: +15 points)

**Update Vercel Configuration:**
```json
{
  "headers": [
    {
      "source": "/(.*)-[A-Z0-9]{8}\\.(js|css|woff2|webp|jpg|png)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/assets/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/assets/img/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

**Target:** Enable 1-year caching for static assets

---

### MEDIUM PRIORITY - Fix Font Loading CLS (Expected Impact: +10 points)

**Update Font Display Strategy:**
```css
/* Change from font-display: block to swap */
@font-face {
  font-family: "Font Awesome 6 Brands";
  font-style: normal;
  font-weight: 400;
  font-display: swap; /* Changed from 'block' */
  src: url("./media/fa-brands-400.woff2") format("woff2");
}
```

**Apply to all 3 FontAwesome faces (brands, regular, solid)**

**Alternative - Subset Fonts:**
```bash
# Only include used icons
npx glyphhanger --subset=assets/fonts/*.woff2 --formats=woff2
```

**Target:** Reduce CLS from 0.15-0.25 to <0.1

---

### MEDIUM PRIORITY - Optimize CSS Loading (Expected Impact: +8 points)

**Current (line 71):**
```html
<link rel="stylesheet" href="styles-7CLXWFBM.css" media="print" onload="this.media='all'">
```

**Better Approach:**
```html
<!-- Option 1: Preload CSS -->
<link rel="preload" href="styles-7CLXWFBM.css" as="style" onload="this.rel='stylesheet'">

<!-- Option 2: Inline critical CSS only, defer rest -->
<style>
  /* Critical above-the-fold CSS here */
  /* Already done well with Critters */
</style>
<link rel="stylesheet" href="styles-7CLXWFBM.css" media="all">
```

**Target:** Eliminate FOUC, reduce CLS

---

### LOW PRIORITY - Optimize Third-Party Scripts (Expected Impact: +5 points)

**Move Google Analytics to Head (Async):**
```html
<!-- Already async, but move config to separate file -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VFW3KMRL3R"></script>
<script async src="/assets/js/analytics-config.js"></script>
```

**Defer Google Ads Conversion:**
```html
<script defer src="/assets/js/ads-conversion.js"></script>
```

---

## Implementation Roadmap

### Phase 1: Critical (Week 1) - Target: 50/100 score
1. Fix TTFB (TLS optimization + edge caching)
2. Remove redirect chain
3. Fix static asset caching
4. Remove debug code from production

**Expected Result:**
- TTFB: 6.9s → 600ms
- LCP: 8.9s → 2.0s
- Score: 15-30 → 50-60

---

### Phase 2: High Priority (Week 2) - Target: 70/100 score
1. Remove jQuery
2. Optimize JavaScript bundles
3. Fix font-display to swap
4. Implement proper code splitting

**Expected Result:**
- INP: 500ms → 150ms
- CLS: 0.20 → 0.08
- Score: 50-60 → 70-75

---

### Phase 3: Medium Priority (Week 3) - Target: 85/100 score
1. Implement Angular SSR/Prerendering
2. Optimize CSS delivery
3. Subset FontAwesome fonts
4. Optimize third-party scripts

**Expected Result:**
- LCP: 2.0s → 1.2s
- INP: 150ms → 100ms
- Score: 70-75 → 85-90

---

## Monitoring & Validation

### Tools to Use:
1. **Chrome DevTools**
   - Lighthouse (run 3x, take median)
   - Performance tab for INP debugging
   - Coverage tab for unused code

2. **WebPageTest** (https://webpagetest.org)
   - Test from Belgium (closest to target audience)
   - 9 runs (3x cable, 3x 4G, 3x 3G)

3. **CrUX API** (Real User Metrics)
```bash
curl "https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.mfinances.be/"}'
```

4. **CrUX Vis** (https://cruxvis.withgoogle.com)
   - Monitor 28-day trends
   - Track P75 values
   - Compare desktop vs mobile

---

## Expected Final Results (After All Optimizations)

| Metric | Current | Target | Expected After Fix |
|--------|---------|--------|-------------------|
| **Performance Score** | 15-30 | 90+ | 85-92 |
| **TTFB** | 6,900ms | <200ms | 400-600ms |
| **LCP** | 8,900ms | <2,500ms | 1,200-1,800ms |
| **INP** | 500-800ms | <200ms | 100-180ms |
| **CLS** | 0.15-0.25 | <0.1 | 0.05-0.08 |

---

## File References

- HTML Source: `/tmp/mfinances_source.html`
- Local Codebase: `/Users/elohim/Mfinances/MFinance`
- Current Branch: `feature/strategie`
- Recent Work: Tresorerie module modifications

---

## Notes

- **INP is the current metric** - FID was fully deprecated September 9, 2024
- All thresholds based on 2025-2026 standards
- 75th percentile requirement: 75% of visits must pass
- Mobile-first analysis (mobile typically worse than desktop)
- Server location appears to be Vercel Edge (GRU1 = São Paulo, Brazil)
  - Consider deploying to Europe (AMS1 = Amsterdam) for Belgian audience

---

## Immediate Action Items

1. Contact Vercel support about TLS handshake slowness
2. Review server region configuration (currently Brazil, should be EU)
3. Create vercel.json with proper caching headers
4. Remove jQuery from package.json and HTML
5. Strip debug console.log from production build
6. Change font-display from 'block' to 'swap'
7. Remove www redirect or make canonical
8. Run Lighthouse audit locally after each fix

---

**Analysis Date:** March 9, 2026
**Analyzer:** Claude Code (Sonnet 4.5)
**Next Review:** After Phase 1 implementation (1 week)
