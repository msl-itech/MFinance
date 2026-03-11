import { DiagnosticConfig } from '../../shared/diagnostic';

/**
 * Configuration du diagnostic "Test Fidélisation & Trésorerie"
 * Page: /tresorerie/proteger-sa-tresorerie
 *
 * 6 questions | 30 points maximum
 * Évalue la capacité de fidélisation des clients et son impact sur la trésorerie
 */
export const DIAGNOSTIC_FIDELISATION_CONFIG: DiagnosticConfig = {
  id: 'fidelisation-clients',
  title: 'Test Fidélisation & Trésorerie',
  subtitle: 'Évaluez votre capacité à fidéliser vos clients et sécuriser votre trésorerie',

  questions: [
    {
      id: 'taux_reachat',
      question: 'Quel est votre taux de réachat clients sur 12 mois ?',
      description: 'Le pourcentage de clients qui reviennent acheter chez vous',
      options: [
        {
          value: 'faible',
          label: 'Moins de 30%',
          sublabel: 'Rotation clients élevée',
          icon: '🔴',
          points: 0
        },
        {
          value: 'moyen',
          label: 'Entre 30% et 60%',
          sublabel: 'Fidélisation partielle',
          icon: '🟡',
          points: 3
        },
        {
          value: 'eleve',
          label: 'Plus de 60%',
          sublabel: 'Base clients fidèle',
          icon: '🟢',
          points: 5
        }
      ]
    },
    {
      id: 'connaissance_clients',
      question: 'Quel est votre niveau de connaissance de vos clients ?',
      description: 'Votre capacité à personnaliser la relation client',
      options: [
        {
          value: 'basique',
          label: 'Je connais leur nom seulement',
          sublabel: 'Relation transactionnelle',
          icon: '📋',
          points: 0
        },
        {
          value: 'intermediaire',
          label: 'Je connais leur nom et leurs besoins',
          sublabel: 'Relation personnalisée',
          icon: '👤',
          points: 3
        },
        {
          value: 'approfondie',
          label: 'Relation forte et historique détaillé',
          sublabel: 'Relation partenariale',
          icon: '🤝',
          points: 5
        }
      ]
    },
    {
      id: 'systeme_fidelisation',
      question: 'Avez-vous un système de fidélisation en place ?',
      description: 'Dispositif pour encourager les achats répétés',
      options: [
        {
          value: 'aucun',
          label: 'Non, aucun système',
          sublabel: 'Clients livrés à eux-mêmes',
          icon: '❌',
          points: 0
        },
        {
          value: 'basique',
          label: 'Oui, un système basique',
          sublabel: 'Carte fidélité ou remises',
          icon: '💳',
          points: 3
        },
        {
          value: 'structure',
          label: 'Oui, un programme structuré',
          sublabel: 'Multi-niveaux avec bénéfices',
          icon: '⭐',
          points: 5
        }
      ]
    },
    {
      id: 'communication_reguliere',
      question: 'Communiquez-vous régulièrement avec vos clients ?',
      description: 'Fréquence et qualité de vos interactions proactives',
      options: [
        {
          value: 'jamais',
          label: 'Jamais, sauf pour vendre',
          sublabel: 'Communication réactive uniquement',
          icon: '🔇',
          points: 0
        },
        {
          value: 'occasionnelle',
          label: 'Occasionnellement',
          sublabel: 'Newsletter ou promos ponctuelles',
          icon: '📧',
          points: 3
        },
        {
          value: 'systematique',
          label: 'Oui, de manière systématique',
          sublabel: 'Plan de communication structuré',
          icon: '📱',
          points: 5
        }
      ]
    },
    {
      id: 'differenciation',
      question: 'Sur quoi repose votre différenciation face aux concurrents ?',
      description: 'Votre principal levier de rétention client',
      options: [
        {
          value: 'prix',
          label: 'Principalement sur le prix',
          sublabel: 'Fidélisation fragile',
          icon: '💰',
          points: 0
        },
        {
          value: 'qualite',
          label: 'Sur la qualité du produit/service',
          sublabel: 'Fidélisation modérée',
          icon: '⚖️',
          points: 3
        },
        {
          value: 'valeur',
          label: 'Sur une valeur unique perçue',
          sublabel: 'Fidélisation forte',
          icon: '💎',
          points: 5
        }
      ]
    },
    {
      id: 'reaction_depart',
      question: 'Comment réagissez-vous quand un client part ?',
      description: 'Votre processus de gestion du churn',
      options: [
        {
          value: 'aucune',
          label: 'Je ne fais rien de particulier',
          sublabel: 'Perte sèche acceptée',
          icon: '🤷',
          points: 0
        },
        {
          value: 'analyse',
          label: 'J\'analyse les raisons du départ',
          sublabel: 'Démarche réflexive',
          icon: '🔍',
          points: 3
        },
        {
          value: 'reconquete',
          label: 'Plan de reconquête actif',
          sublabel: 'Stratégie de rétention',
          icon: '🎯',
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
        badge: '🔴 Fidélisation faible',
        title: 'Votre trésorerie est en danger'
      },
      medium: {
        min: 11,
        max: 20,
        badge: '🟡 Fidélisation moyenne',
        title: 'Vous avez des bases mais des failles'
      },
      high: {
        min: 21,
        max: 30,
        badge: '🟢 Fidélisation forte',
        title: 'Vos clients sont votre trésor'
      }
    }
  },

  justifications: {
    questionAnalysis: {
      taux_reachat: {
        faible: '🚨 Hémorragie clients critique : Moins de 30% de réachat signifie que 70% de vos clients ne reviennent jamais. Vous perdez constamment votre base et devez réinvestir massivement dans l\'acquisition. Cela détruit votre trésorerie.',
        moyen: '📊 Taux de réachat modéré : 30-60% de réachat, c\'est correct mais insuffisant. Il y a un vrai potentiel d\'amélioration qui impacterait directement votre trésorerie en réduisant vos coûts d\'acquisition.',
        eleve: '💪 Base clients fidèle solide : Plus de 60% de réachat, excellent ! Vous avez créé une base de clients fidèles qui reviennent naturellement. C\'est votre meilleur actif pour la trésorerie.'
      },
      connaissance_clients: {
        basique: '❌ Relation superficielle : Connaître uniquement le nom de vos clients, c\'est ne pas les connaître du tout. Impossible de personnaliser, d\'anticiper leurs besoins ou de créer de la valeur ajoutée.',
        intermediaire: '👤 Relation personnalisée : Vous connaissez vos clients et leurs besoins, c\'est un bon début. Cette connaissance vous permet de personnaliser votre offre et de créer une préférence.',
        approfondie: '🤝 Relation partenariale forte : Vous avez construit une relation forte avec un historique détaillé. Cette profondeur crée une barrière à l\'entrée pour vos concurrents et augmente la lifetime value de chaque client.'
      },
      systeme_fidelisation: {
        aucun: '🚫 Aucun dispositif de rétention : Sans système de fidélisation, vous n\'avez aucun levier pour inciter vos clients à revenir. C\'est laisser au hasard votre trésorerie future.',
        basique: '💳 Système basique en place : Une carte fidélité ou des remises occasionnelles, c\'est mieux que rien. Mais c\'est souvent insuffisant pour créer une vraie préférence durable.',
        structure: '⭐ Programme structuré performant : Un programme multi-niveaux crée un vrai lien. Vos clients investissent dans la relation et hésitent à partir. Chaque euro dépensé en rapporte plusieurs via la récurrence.'
      },
      communication_reguliere: {
        jamais: '🔇 Communication absente : Ne communiquer que pour vendre, c\'est le meilleur moyen d\'être perçu comme opportuniste. Vos clients vous oublient entre deux achats.',
        occasionnelle: '📧 Communication sporadique : Envoyer une newsletter de temps en temps maintient un minimum de lien. Mais sans régularité, vous n\'êtes pas top of mind.',
        systematique: '📱 Communication structurée : Un plan de communication systématique vous permet de rester présent sans être intrusif. Vous créez un rendez-vous attendu et restez la référence dans votre domaine.'
      },
      differenciation: {
        prix: '💸 Différenciation fragile par le prix : Si vos clients vous choisissent pour le prix, ils partiront pour le prix. Vous êtes dans une guerre d\'usure qui détruit vos marges et fragilise votre trésorerie.',
        qualite: '⚖️ Différenciation par la qualité : La qualité est un bon levier de fidélisation. Mais attention, la qualité seule ne suffit pas si la différence de prix est trop importante.',
        valeur: '💎 Valeur unique perçue : Vous avez créé une valeur que vos clients ne retrouvent pas ailleurs. Cette différenciation crée une véritable barrière à la sortie et sécurise votre trésorerie.'
      },
      reaction_depart: {
        aucune: '🤷 Passivité face au churn : Ne rien faire quand un client part, c\'est accepter une perte sèche. Vous ne comprenez pas les raisons et ne tentez pas de reconquête. Chaque client perdu pèse sur votre trésorerie.',
        analyse: '🔍 Démarche analytique : Analyser les raisons du départ est intelligent, vous identifiez vos failles. Mais l\'analyse seule ne ramène pas le client. Il faut aussi une action de reconquête.',
        reconquete: '🎯 Stratégie de rétention active : Un plan de reconquête structuré vous permet de limiter le churn. Reconquérir coûte moins cher qu\'acquérir de nouveaux clients.'
      }
    },
    crossAnalysis: [
      {
        condition: (answers) => answers['taux_reachat'] === 'faible' && answers['systeme_fidelisation'] === 'aucun',
        text: '🚨 HÉMORRAGIE CLIENTS Urgence absolue : Taux de réachat faible ET aucun système de fidélisation. Vous perdez 70% de vos clients sans rien faire pour les retenir. Il faut agir MAINTENANT.'
      },
      {
        condition: (answers) => answers['taux_reachat'] === 'faible' && answers['differenciation'] === 'prix',
        text: '💥 PIÈGE MORTEL Concurrence par le prix : Vos clients vous choisissent pour le prix et ne reviennent pas. Vous êtes dans une guerre des prix où personne ne gagne. Il faut URGEMMENT changer de positionnement.'
      },
      {
        condition: (answers) => answers['connaissance_clients'] === 'approfondie' && answers['communication_reguliere'] === 'systematique',
        text: '🏆 EXCELLENCE RELATIONNELLE Clients premium : Relation forte + communication structurée. Cette combinaison génère de la récurrence prévisible, des marges préservées, et une trésorerie sécurisée. C\'est le Graal de la fidélisation.'
      },
      {
        condition: (answers) => answers['systeme_fidelisation'] === 'structure' && answers['taux_reachat'] === 'eleve',
        text: '✨ CERCLE VERTUEUX Fidélisation optimale : Programme structuré + taux de réachat élevé. Votre système porte ses fruits et crée une base clients stable avec des revenus récurrents prévisibles.'
      },
      {
        condition: (answers) => answers['reaction_depart'] === 'aucune' && answers['communication_reguliere'] === 'jamais',
        text: '⚠️ NÉGLIGENCE CLIENTS Opportunités perdues : Pas de communication proactive ET aucune réaction au départ. Vos clients se sentent abandonnés. Chaque client qui part est une perte définitive qui aurait pu être évitée.'
      }
    ]
  }
};
