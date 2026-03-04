import { DiagnosticConfig } from '../../shared/diagnostic';

/**
 * Configuration du Diagnostic Hub - Page Pilier Trésorerie
 *
 * Diagnostic principal (6 questions, score max: 22 points)
 * Profils détectés: CROISSANCE, DIFFICULTÉ, INVESTISSEUR
 */
export const DIAGNOSTIC_HUB_CONFIG: DiagnosticConfig = {
  id: 'hub-tresorerie',
  title: 'Diagnostic Trésorerie',
  subtitle: 'Évaluez la solidité de votre trésorerie en 6 questions',

  questions: [
    {
      id: 'croissance_ca',
      question: 'Comment évolue votre chiffre d\'affaires ?',
      description: 'Tendance générale sur les 12 derniers mois',
      options: [
        {
          value: 'baisse',
          label: 'En baisse',
          sublabel: 'Attention requise',
          icon: '📉',
          points: 0
        },
        {
          value: 'stable',
          label: 'Stable',
          sublabel: 'Situation correcte',
          icon: '➡️',
          points: 2
        },
        {
          value: 'croissance',
          label: 'En forte croissance',
          sublabel: 'Très dynamique',
          icon: '📈',
          points: 4
        }
      ]
    },
    {
      id: 'tresorerie_actuelle',
      question: 'Comment décririez-vous votre trésorerie actuelle ?',
      description: 'État de vos liquidités disponibles',
      options: [
        {
          value: 'tendue',
          label: 'Souvent tendue',
          sublabel: 'Difficultés régulières',
          icon: '🔴',
          points: 0
        },
        {
          value: 'correcte',
          label: 'Correcte mais instable',
          sublabel: 'Variable selon les périodes',
          icon: '🟡',
          points: 2
        },
        {
          value: 'confortable',
          label: 'Confortable',
          sublabel: 'Situation saine',
          icon: '🟢',
          points: 4
        }
      ]
    },
    {
      id: 'priorite',
      question: 'Quelle est votre priorité actuelle ?',
      description: 'Principal objectif financier à court terme',
      options: [
        {
          value: 'stabiliser',
          label: 'Survivre / Stabiliser',
          sublabel: 'Sécuriser la situation',
          icon: '⚠️',
          points: 0
        },
        {
          value: 'structurer',
          label: 'Structurer',
          sublabel: 'Organisation et processus',
          icon: '📊',
          points: 2
        },
        {
          value: 'investir',
          label: 'Investir / Développer',
          sublabel: 'Croissance et opportunités',
          icon: '🚀',
          points: 4
        }
      ]
    },
    {
      id: 'tableau_previsionnel',
      question: 'Avez-vous un tableau prévisionnel de trésorerie ?',
      description: 'Outil pour anticiper vos flux financiers',
      options: [
        {
          value: 'non',
          label: 'Non',
          sublabel: 'Pas de visibilité',
          icon: '❌',
          points: 0
        },
        {
          value: 'basique',
          label: 'Basique',
          sublabel: 'Outil simple ou Excel',
          icon: '📝',
          points: 2
        },
        {
          value: 'avance',
          label: 'Avancé / Mis à jour',
          sublabel: 'Pilotage précis',
          icon: '✅',
          points: 4
        }
      ]
    },
    {
      id: 'retards_clients',
      question: 'Subissez-vous des retards de paiement clients ?',
      description: 'Fréquence des délais de paiement',
      options: [
        {
          value: 'frequents',
          label: 'Fréquents',
          sublabel: 'Impact majeur sur trésorerie',
          icon: '🔴',
          points: 0
        },
        {
          value: 'occasionnels',
          label: 'Occasionnels',
          sublabel: 'Gérable avec suivi',
          icon: '🟡',
          points: 2
        },
        {
          value: 'rares',
          label: 'Rares',
          sublabel: 'Bien maîtrisé',
          icon: '🟢',
          points: 3
        }
      ]
    },
    {
      id: 'stress_financier',
      question: 'Quel est votre niveau de stress financier ?',
      description: 'Votre ressenti au quotidien',
      options: [
        {
          value: 'eleve',
          label: 'Élevé',
          sublabel: 'Préoccupation constante',
          icon: '😰',
          points: 0
        },
        {
          value: 'modere',
          label: 'Modéré',
          sublabel: 'Vigilance nécessaire',
          icon: '😐',
          points: 2
        },
        {
          value: 'faible',
          label: 'Faible',
          sublabel: 'Sérénité financière',
          icon: '😊',
          points: 3
        }
      ]
    }
  ],

  scoringRules: {
    maxScore: 22,
    levels: {
      low: {
        min: 0,
        max: 7,
        title: 'Risque élevé',
        badge: '🔴'
      },
      medium: {
        min: 8,
        max: 14,
        title: 'Situation fragile',
        badge: '🟡'
      },
      high: {
        min: 15,
        max: 22,
        title: 'Trésorerie solide',
        badge: '🟢'
      }
    }
  },

  justifications: {
    questionAnalysis: {
      'croissance_ca': {
        'baisse': 'Votre chiffre d\'affaires en baisse fragilise votre capacité à absorber les charges fixes et limite vos marges de manœuvre.',
        'stable': 'Une activité stable est une bonne base, mais elle ne protège pas automatiquement contre les imprévus et les tensions de trésorerie.',
        'croissance': 'La croissance rapide augmente mécaniquement vos besoins en trésorerie : stocks, créances clients, investissements... La question devient : comment financer cette croissance ?'
      },
      'tresorerie_actuelle': {
        'tendue': 'Une trésorerie régulièrement tendue réduit votre marge de manœuvre face aux imprévus et limite votre capacité à saisir les opportunités.',
        'correcte': 'Une trésorerie instable crée une incertitude permanente sur votre capacité à honorer vos engagements et à planifier sereinement.',
        'confortable': 'Une trésorerie confortable est un avantage stratégique majeur : elle vous permet de négocier, d\'investir et de résister aux crises.'
      },
      'priorite': {
        'stabiliser': 'Votre priorité montre que la sécurisation doit passer avant toute optimisation. La première étape est de retrouver une visibilité claire.',
        'structurer': 'Structurer vos flux de trésorerie est une étape clé vers une gestion plus stratégique et moins réactive.',
        'investir': 'Investir sans visibilité précise peut créer un déséquilibre dangereux entre opportunités de croissance et sécurité financière.'
      },
      'tableau_previsionnel': {
        'non': 'Sans projection de trésorerie, vous pilotez à vue. Les crises arrivent sans prévenir et vous êtes en mode réaction permanente.',
        'basique': 'Un outil basique réduit le risque sans l\'éliminer complètement. Une automatisation pourrait vous faire gagner en réactivité.',
        'avance': 'Un tableau prévisionnel mis à jour régulièrement est un signe fort de maturité financière et vous permet d\'anticiper les tensions.'
      },
      'retards_clients': {
        'frequents': 'Les retards de paiement clients créent un décalage structurel entre vos revenus comptables et vos liquidités réelles, fragilisant votre trésorerie.',
        'occasionnels': 'Les retards ponctuels sont maîtrisables avec un processus de relance efficace et une bonne connaissance de vos clients.',
        'rares': 'Des délais de paiement maîtrisés sécurisent fortement votre trésorerie et facilitent votre planification financière.'
      },
      'stress_financier': {
        'eleve': 'Le stress financier élevé est souvent le signe d\'un manque de visibilité sur votre situation réelle et vos perspectives à court terme.',
        'modere': 'Un stress modéré indique une situation gérable mais sensible aux imprévus. Une meilleure anticipation pourrait réduire cette tension.',
        'faible': 'Votre sérénité financière est souvent le résultat d\'une anticipation structurée et d\'outils de pilotage efficaces.'
      }
    },
    crossAnalysis: [
      {
        condition: (answers) =>
          answers['croissance_ca'] === 'croissance' && answers['tableau_previsionnel'] === 'non',
        text: '⚠️ ALERTE : Votre croissance combinée à l\'absence de prévision crée un risque majeur d\'effet ciseaux. Vos besoins augmentent plus vite que votre capacité à les anticiper.'
      },
      {
        condition: (answers) =>
          answers['croissance_ca'] === 'croissance' && answers['retards_clients'] === 'frequents',
        text: '⚠️ POINT D\'ATTENTION : Vous financez votre croissance tout en subissant des retards de paiement, ce qui augmente fortement votre besoin en fonds de roulement.'
      },
      {
        condition: (answers) =>
          answers['tresorerie_actuelle'] === 'tendue' && answers['stress_financier'] === 'eleve',
        text: '⚠️ SIGNAL FORT : La combinaison tension de trésorerie + stress élevé indique une fragilité structurelle, pas seulement ponctuelle. Un accompagnement est recommandé.'
      },
      {
        condition: (answers) =>
          answers['tresorerie_actuelle'] === 'confortable' && answers['priorite'] === 'investir',
        text: '✅ OPPORTUNITÉ : Votre base de trésorerie confortable vous permet d\'envisager des investissements stratégiques sans fragiliser votre stabilité.'
      },
      {
        condition: (answers) =>
          answers['tableau_previsionnel'] === 'avance' && answers['stress_financier'] === 'faible',
        text: '✅ BONNE PRATIQUE : Votre anticipation structurée se traduit par une sérénité financière. Continuez à maintenir cette discipline.'
      }
    ]
  },

  profiles: [
    {
      id: 'CROISSANCE',
      name: 'Profil Croissance',
      condition: (answers, score) =>
        answers['croissance_ca'] === 'croissance' &&
        answers['priorite'] === 'investir' &&
        answers['tresorerie_actuelle'] !== 'tendue',
      description: 'Vous êtes en phase de croissance. Votre entreprise progresse, c\'est excellent ! Mais attention : la croissance mal pilotée est la première cause de tension de trésorerie chez les PME en développement.',
      recommendation: 'Pour sécuriser votre croissance, nous vous recommandons de mettre en place : (1) Un tableau prévisionnel de trésorerie à 90 jours minimum, (2) Un contrôle budgétaire mensuel pour détecter les écarts rapidement, (3) Une structuration de vos flux de trésorerie pour accompagner sereinement votre développement.',
      redirectUrl: '/tresorerie/anticiper-sa-tresorerie',
      ctaText: 'Découvrir comment anticiper ma croissance'
    },
    {
      id: 'DIFFICULTE',
      name: 'Profil Difficulté',
      condition: (answers, score) =>
        answers['tresorerie_actuelle'] === 'tendue' &&
        answers['stress_financier'] === 'eleve' &&
        answers['retards_clients'] === 'frequents',
      description: 'Votre trésorerie est sous pression. Les signaux d\'alerte sont clairs : stress élevé, retards clients fréquents, tensions régulières. Cette situation nécessite une action rapide.',
      recommendation: 'Actions prioritaires : (1) Sécuriser d\'urgence vos encaissements clients avec un processus de relance structuré, (2) Établir un plan de trésorerie à 30 jours pour identifier les échéances critiques, (3) Stabiliser votre situation avant d\'optimiser. Un accompagnement rapproché est fortement recommandé.',
      redirectUrl: '/tresorerie/alerte-tresorerie',
      ctaText: 'Obtenir un plan d\'urgence trésorerie'
    },
    {
      id: 'INVESTISSEUR',
      name: 'Profil Investisseur',
      condition: (answers, score) =>
        answers['tresorerie_actuelle'] === 'confortable' &&
        answers['priorite'] === 'investir' &&
        score > 14,
      description: 'Votre trésorerie est une véritable opportunité. Vous êtes dans une position de force. La question n\'est plus de survivre, mais de savoir comment transformer intelligemment ce cash disponible en levier stratégique pour votre développement.',
      recommendation: 'Explorez les opportunités d\'investissement intelligentes : immobilier d\'entreprise pour réduire vos charges locatives, diversification pour sécuriser vos revenus, acquisitions stratégiques pour accélérer votre croissance. La clé est de préserver votre équilibre financier tout en saisissant les bonnes opportunités.',
      redirectUrl: '/tresorerie/investir-sa-tresorerie',
      ctaText: 'Étudier mes opportunités d\'investissement'
    }
  ]
};
