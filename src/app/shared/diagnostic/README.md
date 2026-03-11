# 📊 Système de Diagnostic Réutilisable

Composants Angular réutilisables pour créer des diagnostics interactifs avec scoring, profils et recommandations personnalisées.

## 🎯 Fonctionnalités

- ✅ Questions interactives avec progression
- ✅ Système de scoring automatique
- ✅ Détection de profils conditionnels
- ✅ Analyses détaillées par réponse
- ✅ Justifications croisées
- ✅ Capture email optionnelle
- ✅ Sauvegarde locale (localStorage)
- ✅ Animations fluides
- ✅ 100% responsive

## 📦 Structure

```
shared/diagnostic/
├── diagnostic.models.ts              # Interfaces TypeScript
├── diagnostic.service.ts             # Logique de calcul
├── diagnostic-container.component.*  # Composant principal (questions)
├── diagnostic-result.component.*     # Composant résultat
├── index.ts                         # Public API
└── README.md                        # Documentation
```

## 🚀 Utilisation rapide

### 1. Importer dans votre module

```typescript
import { DiagnosticContainerComponent, DiagnosticResultComponent } from '@app/shared/diagnostic';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [VotrePage Component],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    DiagnosticContainerComponent,
    DiagnosticResultComponent
  ]
})
export class VotreModule {}
```

### 2. Configurer votre diagnostic

```typescript
import { DiagnosticConfig } from '@app/shared/diagnostic';

export class VotrePageComponent {
  diagnosticConfig: DiagnosticConfig = {
    id: 'test-tresorerie',
    title: 'Diagnostic Trésorerie',
    subtitle: 'Évaluez la santé de votre trésorerie en 6 questions',

    questions: [
      {
        id: 'q1',
        question: 'Quel est votre chiffre d\'affaires ?',
        description: 'Estimation approximative',
        options: [
          {
            value: 'moins-100k',
            label: 'Moins de 100K €',
            sublabel: 'Jeune entreprise',
            icon: '🌱',
            points: 0
          },
          {
            value: '100-200k',
            label: '100K - 200K €',
            sublabel: 'PME établie',
            icon: '📈',
            points: 3
          }
          // ... autres options
        ]
      }
      // ... autres questions
    ],

    scoringRules: {
      maxScore: 30,
      levels: {
        low: { min: 0, max: 10, title: 'Situation fragile', badge: '🔴' },
        medium: { min: 11, max: 20, title: 'Amélioration possible', badge: '🟡' },
        high: { min: 21, max: 30, title: 'Bonne santé', badge: '🟢' }
      }
    },

    justifications: {
      questionAnalysis: {
        'q1': {
          'moins-100k': 'Votre CA modeste nécessite une attention particulière...',
          '100-200k': 'Votre CA est sain, continuez sur cette voie...'
        }
      },
      crossAnalysis: [
        {
          condition: (answers) => answers.q1 === 'moins-100k' && answers.q2 === 'tendue',
          text: 'CA faible + trésorerie tendue = risque élevé de difficulté'
        }
      ]
    },

    profiles: [
      {
        id: 'CROISSANCE',
        name: 'Profil Croissance',
        condition: (answers, score) => answers.q1 === '100-200k' && score > 15,
        description: 'Vous êtes en phase de croissance...',
        recommendation: 'Structurez votre trésorerie...',
        redirectUrl: '/tresorerie/anticiper-sa-tresorerie',
        ctaText: 'Découvrir comment anticiper'
      }
    ]
  };

  onDiagnosticComplete(result: DiagnosticResult): void {
    console.log('Diagnostic terminé:', result);
    // Votre logique métier
  }
}
```

### 3. Utiliser dans votre template

```html
<app-diagnostic-container
  [config]="diagnosticConfig"
  [showEmailCapture]="true"
  (diagnosticComplete)="onDiagnosticComplete($event)"
></app-diagnostic-container>
```

## 📋 Configuration détaillée

### DiagnosticConfig

| Propriété | Type | Description |
|-----------|------|-------------|
| `id` | string | Identifiant unique (pour localStorage) |
| `title` | string | Titre du diagnostic |
| `subtitle` | string | Sous-titre optionnel |
| `questions` | DiagnosticQuestion[] | Liste des questions |
| `scoringRules` | DiagnosticScoringRules | Règles de scoring |
| `justifications` | DiagnosticJustifications | Textes d'analyse |
| `profiles` | DiagnosticProfile[] | Profils détectables (optionnel) |

### DiagnosticQuestion

```typescript
{
  id: 'q1',                    // Identifiant unique
  question: 'Titre question',  // Question affichée
  description: 'Description',  // Sous-titre optionnel
  options: [                   // 2-4 options recommandées
    {
      value: 'option-a',       // Valeur stockée
      label: 'Titre option',   // Texte principal
      sublabel: 'Détail',      // Texte secondaire
      icon: '🎯',              // Emoji/icon
      points: 5                // Points attribués
    }
  ]
}
```

### DiagnosticProfile (optionnel)

Permet de détecter des profils spécifiques et rediriger vers des pages ciblées :

```typescript
{
  id: 'INVESTISSEUR',
  name: 'Profil Investisseur',
  condition: (answers, score) => {
    return answers.tresorerie === 'confortable' && score > 20;
  },
  description: 'Votre trésorerie est un atout stratégique...',
  recommendation: 'Étudiez les opportunités d\'investissement...',
  redirectUrl: '/tresorerie/investir-sa-tresorerie',
  ctaText: 'Explorer les opportunités'
}
```

## 🎨 Personnalisation CSS

Les composants utilisent des CSS scoped. Pour personnaliser :

```css
/* Dans votre component.css */
::ng-deep .diagnostic-container {
  max-width: 900px;
}

::ng-deep .option-card {
  border-radius: 16px;
}

::ng-deep .btn-primary {
  background: linear-gradient(135deg, #your-color 0%, #your-color-2 100%);
}
```

## 🔌 Intégration Odoo

Le système envoie automatiquement les résultats à Odoo (via OdooService) lors de la capture d'email :

```typescript
{
  name: 'Jean Dupont',
  email_from: 'jean@exemple.be',
  description: '<html avec résultat>',
  lead_type: 'diagnostic_test-tresorerie'  // Utilise config.id
}
```

## 💾 LocalStorage

Sauvegarde automatique sous la clé :
```
mfinances_diagnostic_{config.id}
```

Données sauvegardées :
- Score et niveau
- Réponses
- Email/nom (si capturé)
- Timestamp (expiration 30 jours)

## 📱 Responsive

- Desktop : Options en grille 2 colonnes
- Tablet : Options en grille 1 colonne
- Mobile : Navigation verticale, boutons pleine largeur

## ⚡ Animations

Animations Angular intégrées :
- `slideInOut` : Transitions entre questions
- `fadeIn` : Apparition du résultat

## 🧪 Exemple complet

Voir les implémentations existantes :
- `/src/app/venteModule/diagnostic-passage-societe/` (référence)
- `/src/app/TresorerieModule/*/diagnostic-*.component.ts` (à créer)

## 📊 Structure de résultat

Le résultat affiché suit toujours cette structure :

1. **Score + Badge** (🔴/🟡/🟢)
2. **Profil détecté** (si configuré)
3. **Vos réponses** (liste avec icônes)
4. **Analyse par réponse** (si justifications configurées)
5. **Analyse croisée** (si conditions remplies, 1 max)
6. **Recommandation**
7. **CTA principal** (contact ou redirection)
8. **Bouton "Refaire le diagnostic"**

## ⚠️ Bonnes pratiques

1. ✅ **Toujours** fournir `activeForm` lors de TaskCreate
2. ✅ 2-4 options par question (idéal)
3. ✅ Points cohérents (ex: 0/3/5 ou 0/2/4)
4. ✅ Justifications claires et actionnables
5. ✅ 1 seule analyse croisée affichée max
6. ✅ CTA spécifiques selon profil
7. ❌ Ne jamais bloquer le résultat avec l'email
8. ❌ Ne pas utiliser de boutons "Plus tard"

## 🆘 Support

Pour questions ou bugs, créer une issue dans le dépôt du projet.

---

**Version:** 1.0.0
**Dernière mise à jour:** 2026-03-04
