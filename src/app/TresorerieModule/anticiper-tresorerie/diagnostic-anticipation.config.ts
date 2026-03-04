import { DiagnosticConfig } from '../../shared/diagnostic';

/**
 * Configuration du diagnostic "Test Anticipation & Pilotage"
 * Page: /tresorerie/anticiper-sa-tresorerie
 *
 * 6 questions | 30 points maximum
 * Évalue la capacité d'anticipation et de pilotage de la trésorerie
 */
export const DIAGNOSTIC_ANTICIPATION_CONFIG: DiagnosticConfig = {
    id: 'anticipation-tresorerie',
    title: 'Test Anticipation & Pilotage',
    subtitle: 'Évaluez votre capacité à anticiper vos flux et piloter votre trésorerie',

    questions: [
        {
            id: 'previsions_tresorerie',
            question: 'À combien de mois anticipez-vous vos flux de trésorerie ?',
            description: 'L\'horizon de prévision est le premier indicateur de maturité financière',
            options: [
                {
                    value: 'non',
                    label: 'Je ne fais pas de prévisions',
                    sublabel: 'Gestion au jour le jour',
                    icon: '🔴',
                    points: 0
                },
                {
                    value: 'court',
                    label: 'Sur 1 à 3 mois',
                    sublabel: 'Anticipation à court terme',
                    icon: '🟡',
                    points: 3
                },
                {
                    value: 'long',
                    label: 'Sur 6 mois ou plus',
                    sublabel: 'Vision stratégique',
                    icon: '🟢',
                    points: 5
                }
            ]
        },
        {
            id: 'indicateurs_suivis',
            question: 'Quels indicateurs financiers suivez-vous régulièrement ?',
            description: 'Les indicateurs que vous pilotez définissent votre capacité de réaction',
            options: [
                {
                    value: 'aucun',
                    label: 'Aucun indicateur précis',
                    sublabel: 'Navigation à l\'aveugle',
                    icon: '❌',
                    points: 0
                },
                {
                    value: 'quelques',
                    label: 'Quelques indicateurs basiques',
                    sublabel: 'Solde bancaire, CA mensuel',
                    icon: '📋',
                    points: 3
                },
                {
                    value: 'tableau_bord',
                    label: 'Un tableau de bord complet',
                    sublabel: 'Marges, BFR, ratios clés',
                    icon: '📊',
                    points: 5
                }
            ]
        },
        {
            id: 'frequence_maj',
            question: 'À quelle fréquence mettez-vous à jour vos prévisions de trésorerie ?',
            description: 'La régularité de mise à jour garantit la fiabilité de vos données',
            options: [
                {
                    value: 'rarement',
                    label: 'Rarement ou jamais',
                    sublabel: 'Données obsolètes',
                    icon: '😰',
                    points: 0
                },
                {
                    value: 'mensuelle',
                    label: 'Tous les mois',
                    sublabel: 'Rythme acceptable',
                    icon: '📅',
                    points: 3
                },
                {
                    value: 'hebdomadaire',
                    label: 'Chaque semaine',
                    sublabel: 'Pilotage en temps réel',
                    icon: '⚡',
                    points: 5
                }
            ]
        },
        {
            id: 'anticipation_difficultes',
            question: 'Comment anticipez-vous les difficultés de trésorerie ?',
            description: 'Votre niveau de réactivité face aux signaux précoces',
            options: [
                {
                    value: 'decouvre',
                    label: 'Je les découvre quand elles arrivent',
                    sublabel: 'Réaction d\'urgence',
                    icon: '🚨',
                    points: 0
                },
                {
                    value: 'soupçonne',
                    label: 'Je les soupçonne mais sans chiffrage',
                    sublabel: 'Intuition sans données',
                    icon: '💭',
                    points: 3
                },
                {
                    value: 'anticipe',
                    label: 'Je les anticipe avec des chiffres précis',
                    sublabel: 'Anticipation maîtrisée',
                    icon: '🎯',
                    points: 5
                }
            ]
        },
        {
            id: 'objectifs_chiffres',
            question: 'Avez-vous des objectifs financiers chiffrés pour cette année ?',
            description: 'La clarté des objectifs conditionne la qualité de votre pilotage',
            options: [
                {
                    value: 'non',
                    label: 'Non, pas d\'objectifs définis',
                    sublabel: 'Sans cap financier',
                    icon: '🔴',
                    points: 0
                },
                {
                    value: 'vagues',
                    label: 'Oui, des objectifs vagues',
                    sublabel: '"Faire mieux qu\'avant"',
                    icon: '🟡',
                    points: 3
                },
                {
                    value: 'precis',
                    label: 'Oui, des objectifs très précis',
                    sublabel: 'Chiffrés, datés, mesurables',
                    icon: '🟢',
                    points: 5
                }
            ]
        },
        {
            id: 'decisions_data',
            question: 'Sur quelle base prenez-vous vos décisions financières importantes ?',
            description: 'La qualité de vos décisions dépend de la qualité de vos données',
            options: [
                {
                    value: 'intuition',
                    label: 'Principalement sur l\'intuition',
                    sublabel: 'Décision subjective',
                    icon: '🤷',
                    points: 0
                },
                {
                    value: 'mix',
                    label: 'Un mix intuition et données',
                    sublabel: 'Approche hybride',
                    icon: '⚖️',
                    points: 3
                },
                {
                    value: 'data',
                    label: 'Principalement sur des données chiffrées',
                    sublabel: 'Décision data-driven',
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
                badge: '🔴 Pilotage à vue',
                title: 'Vous pilotez à vue'
            },
            medium: {
                min: 11,
                max: 20,
                badge: '🟡 Anticipation partielle',
                title: 'Votre anticipation est insuffisante'
            },
            high: {
                min: 21,
                max: 30,
                badge: '🟢 Pilotage maîtrisé',
                title: 'Vous êtes un pilote averti'
            }
        }
    },

    justifications: {
        questionAnalysis: {
            previsions_tresorerie: {
                non: '🚨 Navigation à l\'aveugle : Sans prévisions de trésorerie, vous découvrez les problèmes quand il est trop tard. Les entreprises sans prévisions sont 2x plus exposées aux difficultés de trésorerie.',
                court: '⏱️ Anticipation à court terme : Prévoir sur 1 à 3 mois est un bon début mais insuffisant pour préparer les gros investissements ou anticiper les périodes creuses saisonnières.',
                long: '🎯 Vision stratégique à 6 mois+ : Anticiper sur 6 mois ou plus vous donne le temps de préparer vos décisions importantes. Vous transformez votre trésorerie en levier stratégique.'
            },
            indicateurs_suivis: {
                aucun: '❌ Aucun indicateur de pilotage : Sans indicateurs, vous gérez votre entreprise sans tableau de bord. Un accident financier est une question de temps.',
                quelques: '📊 Indicateurs basiques : Suivre le solde bancaire et le CA mensuel est le minimum viable. Sans marges, BFR et point mort, vous manquez des signaux d\'alerte précoces.',
                tableau_bord: '🏆 Tableau de bord complet : Avec marges, BFR, ratios et indicateurs clés, vous prenez des décisions éclairées et anticipez les tensions au bon moment.'
            },
            frequence_maj: {
                rarement: '📅 Données périmées : Des prévisions rarement mises à jour peuvent induire en erreur. La mise à jour régulière est la condition sine qua non d\'un pilotage fiable.',
                mensuelle: '📆 Rythme mensuel acceptable : Une mise à jour mensuelle est un bon équilibre. Pour aller plus loin, une revue hebdomadaire améliorerait encore votre réactivité.',
                hebdomadaire: '⚡ Pilotage en temps réel : Une mise à jour hebdomadaire vous place parmi les 10% d\'entrepreneurs les plus rigoureux. Vous détectez immédiatement les écarts.'
            },
            anticipation_difficultes: {
                decouvre: '🚨 Réaction dans l\'urgence : Découvrir les difficultés quand elles arrivent, c\'est toujours réagir sous pression avec des options limitées. C\'est le scénario le plus risqué.',
                soupçonne: '💭 Intuition sans données : Soupçonner sans chiffrer, c\'est avoir le pressentiment sans le diagnostic. Transformer ce pressentiment en analyse chiffrée est essentiel.',
                anticipe: '🎯 Anticipation chiffrée : Voir venir les tensions, les quantifier et préparer des solutions à l\'avance - c\'est la différence entre piloter et subir.'
            },
            objectifs_chiffres: {
                non: '🔴 Sans cap financier : Sans objectifs définis, vous naviguez sans destination précise. Vos efforts sont dispersés et il est impossible de mesurer le progrès.',
                vagues: '💭 Objectifs flous : "Faire mieux qu\'avant" est une intention, pas un objectif. Sans chiffre précis et date définie, impossible de mesurer votre progression.',
                precis: '✅ Objectifs SMART en place : Des objectifs précis, chiffrés et datés permettent de mesurer votre progression en temps réel. C\'est le fondement d\'un pilotage professionnel.'
            },
            decisions_data: {
                intuition: '🤔 Décision par intuition : Pour les décisions financières importantes, s\'y fier exclusivement est risqué. Des données chiffrées réduisent l\'incertitude et améliorent les résultats.',
                mix: '⚖️ Approche équilibrée : Combiner intuition et données est souvent la bonne approche. L\'important est que les données valident (ou invalident) votre intuition avant la décision finale.',
                data: '💪 Décision data-driven : Prendre vos décisions financières sur des données chiffrées réduit le biais cognitif et améliore progressivement la qualité de vos décisions.'
            }
        },
        crossAnalysis: [
            {
                condition: (answers) => answers['previsions_tresorerie'] === 'non' && answers['frequence_maj'] === 'rarement',
                text: '🚨 ALERTE CRITIQUE : Navigation totalement à l\'aveugle - Pas de prévisions ET mise à jour rare : vous avez pratiquement aucune visibilité sur votre situation financière future. Le risque de crise de trésorerie inattendue est extrêmement élevé.'
            },
            {
                condition: (answers) => answers['previsions_tresorerie'] === 'long' && answers['frequence_maj'] === 'hebdomadaire',
                text: '🏆 EXCELLENCE : Pilote averti - Prévisions à 6 mois+ et mise à jour hebdomadaire : vous faites partie de l\'élite des entrepreneurs qui pilotent vraiment leur trésorerie. Cette combinaison gagnante vous donne une longueur d\'avance considérable.'
            },
            {
                condition: (answers) => answers['indicateurs_suivis'] === 'tableau_bord' && answers['decisions_data'] === 'data',
                text: '✨ DATA-DRIVEN : Entrepreneur pilote - Tableau de bord complet + décisions sur données : vous avez construit une vraie culture de la donnée dans votre entreprise. Vos décisions financières sont éclairées et améliorées en continu.'
            },
            {
                condition: (answers) => answers['objectifs_chiffres'] === 'vagues' && answers['decisions_data'] === 'intuition',
                text: '⚠️ RISQUE DE DÉRIVE : Objectifs vagues et décisions par intuition - vous êtes dans un mode de gestion très subjectif. Sans références chiffrées, il est impossible de mesurer votre progression ni de prendre des décisions optimales.'
            },
            {
                condition: (answers) => answers['anticipation_difficultes'] === 'decouvre' && answers['indicateurs_suivis'] === 'aucun',
                text: '💥 COMBINAISON CRITIQUE : Aucun indicateur ET découverte des problèmes dans l\'urgence - vous êtes dans un cycle de crises perpétuelles. Ce mode de fonctionnement est épuisant et extrêmement risqué pour la pérennité de votre entreprise.'
            }
        ]
    }
};
