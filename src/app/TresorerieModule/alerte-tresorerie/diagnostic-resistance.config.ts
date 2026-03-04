import { DiagnosticConfig } from '../../shared/diagnostic';

/**
 * Configuration du diagnostic "Test Résistance Concurrentielle"
 * Page: /tresorerie/alerte-tresorerie
 *
 * 6 questions | 30 points maximum
 * Évalue la capacité de résistance face à un concurrent agressif
 */
export const DIAGNOSTIC_RESISTANCE_CONFIG: DiagnosticConfig = {
  id: 'resistance-concurrentielle',
  title: 'Test Résistance Concurrentielle',
  subtitle: 'Découvrez si votre trésorerie résisterait à un concurrent agressif',

  questions: [
    {
      id: 'marge_brute',
      question: 'Quelle est votre marge brute moyenne ?',
      description: 'La marge brute est votre capacité d\'absorption d\'une baisse de prix',
      options: [
        {
          value: 'faible',
          label: 'Moins de 20%',
          sublabel: 'Marge serrée',
          icon: '🔴',
          points: 0
        },
        {
          value: 'moyenne',
          label: 'Entre 20% et 40%',
          sublabel: 'Marge correcte',
          icon: '🟡',
          points: 3
        },
        {
          value: 'elevee',
          label: 'Plus de 40%',
          sublabel: 'Marge confortable',
          icon: '🟢',
          points: 5
        }
      ]
    },
    {
      id: 'couverture_charges',
      question: 'Votre trésorerie actuelle couvre combien de mois de charges fixes ?',
      description: 'Votre réserve de sécurité en cas de baisse d\'activité',
      options: [
        {
          value: 'court',
          label: 'Moins d\'1 mois',
          sublabel: 'Zone de danger',
          icon: '⚠️',
          points: 0
        },
        {
          value: 'moyen',
          label: 'Entre 1 et 3 mois',
          sublabel: 'Marge de manœuvre limitée',
          icon: '⏱️',
          points: 3
        },
        {
          value: 'long',
          label: 'Plus de 3 mois',
          sublabel: 'Coussin de sécurité',
          icon: '✅',
          points: 5
        }
      ]
    },
    {
      id: 'simulation_prix',
      question: 'Avez-vous simulé l\'impact d\'une baisse de prix de 10% ?',
      description: 'Connaissez-vous précisément les conséquences sur votre trésorerie ?',
      options: [
        {
          value: 'non',
          label: 'Non, je ne l\'ai jamais fait',
          sublabel: 'Risque d\'être pris au dépourvu',
          icon: '❌',
          points: 0
        },
        {
          value: 'approximatif',
          label: 'Oui, de manière approximative',
          sublabel: 'Conscience du risque',
          icon: '📊',
          points: 3
        },
        {
          value: 'precise',
          label: 'Oui, avec précision chiffrée',
          sublabel: 'Anticipation maîtrisée',
          icon: '🎯',
          points: 5
        }
      ]
    },
    {
      id: 'critere_client',
      question: 'Sur quel critère principal votre client vous choisit-il ?',
      description: 'Votre principale protection contre la concurrence par les prix',
      options: [
        {
          value: 'prix',
          label: 'Le prix avant tout',
          sublabel: 'Forte vulnérabilité',
          icon: '💰',
          points: 0
        },
        {
          value: 'rapport',
          label: 'Le rapport qualité/prix',
          sublabel: 'Défense partielle',
          icon: '⚖️',
          points: 3
        },
        {
          value: 'valeur',
          label: 'La valeur unique apportée',
          sublabel: 'Position protégée',
          icon: '⭐',
          points: 5
        }
      ]
    },
    {
      id: 'plan_action',
      question: 'Avez-vous un plan d\'action si un concurrent casse les prix ?',
      description: 'Votre capacité de réaction rapide face à une attaque',
      options: [
        {
          value: 'non',
          label: 'Non, aucun plan prévu',
          sublabel: 'Réaction à l\'improvisation',
          icon: '🤷',
          points: 0
        },
        {
          value: 'idee',
          label: 'J\'ai quelques idées',
          sublabel: 'Préparation mentale',
          icon: '💭',
          points: 3
        },
        {
          value: 'structure',
          label: 'Oui, un plan structuré et chiffré',
          sublabel: 'Riposte préparée',
          icon: '🛡️',
          points: 5
        }
      ]
    },
    {
      id: 'serenite',
      question: 'Comment vous sentez-vous face à cette menace concurrentielle ?',
      description: 'Votre niveau de confiance dans votre capacité de résistance',
      options: [
        {
          value: 'inquiet',
          label: 'Inquiet, je ne sais pas comment réagir',
          sublabel: 'Besoin d\'accompagnement urgent',
          icon: '😰',
          points: 0
        },
        {
          value: 'vigilant',
          label: 'Vigilant, je surveille la situation',
          sublabel: 'Conscience du risque',
          icon: '👀',
          points: 3
        },
        {
          value: 'confiant',
          label: 'Confiant, j\'ai les moyens de résister',
          sublabel: 'Position solide',
          icon: '💪',
          points: 5
        }
      ]
    }
  ],

  scoringRules: {
    maxScore: 30,
    levels: {
      low: {
        min: 0,
        max: 10,
        badge: '🔴 Vulnérabilité',
        title: 'Votre entreprise est vulnérable'
      },
      medium: {
        min: 11,
        max: 20,
        badge: '🟡 Résistance partielle',
        title: 'Votre résistance est limitée'
      },
      high: {
        min: 21,
        max: 30,
        badge: '🟢 Résilience forte',
        title: 'Vous avez les armes pour résister'
      }
    }
  },

  justifications: {
    questionAnalysis: {
      marge_brute: {
        faible: '⚠️ Marge brute critique : Avec moins de 20% de marge brute, une baisse de prix de 10% pourrait détruire plus de la moitié de votre rentabilité. Vous n\'avez aucun coussin pour absorber une attaque concurrentielle.',
        moyenne: '📊 Marge brute moyenne : Votre marge de 20-40% vous donne une capacité de résistance limitée. Une guerre des prix prolongée éroderait rapidement vos résultats et impacterait votre trésorerie.',
        elevee: '💪 Marge brute solide : Avec plus de 40% de marge brute, vous disposez d\'un véritable matelas pour absorber une baisse de prix. C\'est votre première ligne de défense face à un concurrent agressif.'
      },
      couverture_charges: {
        court: '🚨 Réserve insuffisante : Moins d\'un mois de charges fixes en trésorerie, vous êtes en zone rouge. Si vos marges diminuent, vous n\'aurez que quelques semaines avant une situation critique.',
        moyen: '⏱️ Réserve limitée : 1 à 3 mois de couverture vous donnent un peu de temps pour réagir, mais c\'est insuffisant pour une guerre des prix prolongée. Il faut renforcer ce coussin.',
        long: '🛡️ Réserve confortable : Plus de 3 mois de charges fixes en réserve, vous avez le temps de manœuvrer, d\'ajuster votre stratégie et de riposter. C\'est un avantage compétitif majeur.'
      },
      simulation_prix: {
        non: '❌ Absence d\'anticipation : Sans simulation d\'impact, vous pilotez à vue. Si un concurrent baisse ses prix demain, vous découvrirez les conséquences en temps réel, sans préparation.',
        approximatif: '📈 Anticipation approximative : Vous avez conscience du risque, mais sans chiffrage précis, vous ne pouvez pas prendre les bonnes décisions. Il faut affiner cette simulation.',
        precise: '🎯 Anticipation maîtrisée : Vous connaissez précisément l\'impact d\'une baisse de prix sur votre trésorerie. Cette anticipation vous permet de prendre les bonnes décisions au bon moment.'
      },
      critere_client: {
        prix: '💸 Vulnérabilité maximale : Si vos clients vous choisissent principalement pour le prix, vous êtes en concurrence frontale. Un concurrent qui casse les prix vous mettra immédiatement en difficulté.',
        rapport: '⚖️ Protection partielle : Le rapport qualité/prix vous protège partiellement, mais ne vous immunise pas totalement contre un concurrent à prix cassé.',
        valeur: '⭐ Différenciation protectrice : Vos clients vous choisissent pour votre valeur unique. Même si un concurrent baisse ses prix, votre positionnement vous préserve.'
      },
      plan_action: {
        non: '🤷 Pas de plan de défense : Sans plan d\'action préparé, vous réagirez dans l\'urgence avec un fort risque d\'erreur stratégique et d\'impact sur la trésorerie.',
        idee: '💡 Plan embryonnaire : Vous avez quelques idées mais rien de structuré. Il faut passer à la formalisation : scénarios chiffrés, seuils de déclenchement, actions concrètes.',
        structure: '📋 Plan opérationnel : Votre plan structuré et chiffré vous permet de riposter rapidement. Vous savez exactement quoi faire, quand le faire, et quel sera l\'impact.'
      },
      serenite: {
        inquiet: '😰 Stress élevé : Votre inquiétude reflète probablement une vraie fragilité. C\'est le signal qu\'un accompagnement est nécessaire pour sécuriser votre modèle économique.',
        vigilant: '👁️ Vigilance active : Votre vigilance est saine, vous êtes conscient du risque sans être paralysé. C\'est le bon état d\'esprit, mais il faut maintenant outiller cette vigilance.',
        confiant: '💪 Confiance légitime : Votre confiance semble s\'appuyer sur des fondamentaux solides. C\'est un atout précieux pour prendre les bonnes décisions stratégiques.'
      }
    },
    crossAnalysis: [
      {
        condition: (answers) => answers['marge_brute'] === 'faible' && answers['couverture_charges'] === 'court',
        text: '🚨 ALERTE ROUGE Double fragilité : Marge faible ET trésorerie courte, vous êtes dans une situation de vulnérabilité extrême. Un concurrent agressif pourrait vous mettre en difficulté en quelques semaines. Action urgente requise.'
      },
      {
        condition: (answers) => answers['simulation_prix'] === 'non' && answers['plan_action'] === 'non',
        text: '⚠️ DANGER Pilotage à vue : Sans simulation d\'impact ni plan d\'action, vous naviguez sans instruments. Si la menace se concrétise, vous improviserez dans l\'urgence avec un fort risque d\'erreur stratégique.'
      },
      {
        condition: (answers) => answers['critere_client'] === 'prix' && answers['marge_brute'] === 'faible',
        text: '💥 PIÈGE MORTEL Concurrence par les prix : Vos clients vous choisissent pour le prix alors que votre marge est déjà faible. Il faut URGEMMENT changer de positionnement.'
      },
      {
        condition: (answers) => answers['marge_brute'] === 'elevee' && answers['couverture_charges'] === 'long' && answers['plan_action'] === 'structure',
        text: '🛡️ FORTERESSE Défense multicouche : Marge confortable + réserve longue + plan structuré, vous avez construit une véritable forteresse. Vous pouvez non seulement résister, mais aussi contre-attaquer avec efficacité.'
      },
      {
        condition: (answers) => answers['serenite'] === 'inquiet' && (answers['marge_brute'] === 'moyenne' || answers['marge_brute'] === 'elevee'),
        text: '🤔 PARADOXE Inquiétude malgré les marges : Vos marges sont correctes mais vous êtes inquiet. Un accompagnement vous aiderait à transformer ces fondamentaux en vraie sérénité.'
      }
    ]
  }
};
