import { DiagnosticConfig } from '../../shared/diagnostic';

/**
 * Configuration du diagnostic "Test Stock & Trésorerie"
 * Page: /tresorerie/optimiser-son-stock
 *
 * 6 questions | 30 points maximum
 * Évalue l'optimisation du stock pour la trésorerie
 */
export const DIAGNOSTIC_STOCK_CONFIG: DiagnosticConfig = {
    id: 'stock-tresorerie',
    title: 'Test Stock & Trésorerie',
    subtitle: 'Évaluez l\'impact de votre gestion de stock sur votre trésorerie',

    questions: [
        {
            id: 'rotation_stock',
            question: 'Quelle est la rotation de votre stock par an ?',
            description: 'La rotation mesure combien de fois vous vendez et renouvelez votre stock par an',
            options: [
                {
                    value: 'lente',
                    label: 'Moins de 4 fois par an',
                    sublabel: 'Rotation lente',
                    icon: '🔴',
                    points: 0
                },
                {
                    value: 'moyenne',
                    label: 'Entre 4 et 8 fois par an',
                    sublabel: 'Rotation correcte',
                    icon: '🟡',
                    points: 3
                },
                {
                    value: 'rapide',
                    label: 'Plus de 8 fois par an',
                    sublabel: 'Rotation optimale',
                    icon: '🟢',
                    points: 5
                }
            ]
        },
        {
            id: 'stock_dormant',
            question: 'Quel est le pourcentage de stock dormant (invendu depuis plus de 3 mois) ?',
            description: 'Le stock dormant représente de la trésorerie immobilisée improductive',
            options: [
                {
                    value: 'eleve',
                    label: 'Plus de 20% du stock',
                    sublabel: 'Stock dormant critique',
                    icon: '⚠️',
                    points: 0
                },
                {
                    value: 'moyen',
                    label: 'Entre 10% et 20%',
                    sublabel: 'Stock dormant à réduire',
                    icon: '📦',
                    points: 3
                },
                {
                    value: 'faible',
                    label: 'Moins de 10%',
                    sublabel: 'Stock bien géré',
                    icon: '✅',
                    points: 5
                }
            ]
        },
        {
            id: 'suivi_stock',
            question: 'Comment suivez-vous votre stock ?',
            description: 'La qualité de votre outil de suivi conditionne la précision de votre gestion',
            options: [
                {
                    value: 'visuel',
                    label: 'Visuellement (à l\'œil)',
                    sublabel: 'Gestion intuitive',
                    icon: '👁️',
                    points: 0
                },
                {
                    value: 'excel',
                    label: 'Sur Excel ou tableur',
                    sublabel: 'Suivi basique',
                    icon: '📊',
                    points: 3
                },
                {
                    value: 'logiciel',
                    label: 'Avec un logiciel dédié',
                    sublabel: 'Suivi professionnel',
                    icon: '💻',
                    points: 5
                }
            ]
        },
        {
            id: 'ruptures_stock',
            question: 'À quelle fréquence rencontrez-vous des ruptures de stock ?',
            description: 'Les ruptures coûtent en ventes perdues, les surstocks coûtent en trésorerie',
            options: [
                {
                    value: 'frequentes',
                    label: 'Souvent (plusieurs fois/mois)',
                    sublabel: 'Gestion chaotique',
                    icon: '🚨',
                    points: 0
                },
                {
                    value: 'occasionnelles',
                    label: 'Parfois (quelques fois/an)',
                    sublabel: 'Gestion approximative',
                    icon: '⏱️',
                    points: 3
                },
                {
                    value: 'rares',
                    label: 'Rarement ou jamais',
                    sublabel: 'Gestion maîtrisée',
                    icon: '🎯',
                    points: 5
                }
            ]
        },
        {
            id: 'negociation_fournisseurs',
            question: 'Négociez-vous les conditions avec vos fournisseurs ?',
            description: 'Les délais de paiement fournisseurs impactent directement votre BFR et votre trésorerie',
            options: [
                {
                    value: 'jamais',
                    label: 'Jamais, j\'accepte les conditions imposées',
                    sublabel: 'BFR non optimisé',
                    icon: '❌',
                    points: 0
                },
                {
                    value: 'ponctuelle',
                    label: 'Parfois, lors de grosses commandes',
                    sublabel: 'Négociation ponctuelle',
                    icon: '🤝',
                    points: 3
                },
                {
                    value: 'structuree',
                    label: 'Systématiquement, avec stratégie',
                    sublabel: 'Optimisation BFR active',
                    icon: '💪',
                    points: 5
                }
            ]
        },
        {
            id: 'impact_tresorerie',
            question: 'Connaissez-vous l\'impact chiffré de votre stock sur votre trésorerie ?',
            description: 'Savoir chiffrer cet impact est la base de toute décision d\'optimisation',
            options: [
                {
                    value: 'inconnu',
                    label: 'Non, je ne sais pas le chiffrer',
                    sublabel: 'Vision nulle',
                    icon: '🔴',
                    points: 0
                },
                {
                    value: 'soupçonne',
                    label: 'Je le soupçonne sans chiffre précis',
                    sublabel: 'Vision partielle',
                    icon: '🟡',
                    points: 3
                },
                {
                    value: 'chiffre',
                    label: 'Oui, je le connais précisément',
                    sublabel: 'Vision maîtrisée',
                    icon: '🟢',
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
                badge: '🔴 Stock gourmand en trésorerie',
                title: 'Votre stock dévore votre trésorerie'
            },
            medium: {
                min: 11,
                max: 20,
                badge: '🟡 Optimisation partielle',
                title: 'Votre stock pèse sur votre trésorerie'
            },
            high: {
                min: 21,
                max: 30,
                badge: '🟢 Stock optimisé',
                title: 'Votre stock est un levier de trésorerie'
            }
        }
    },

    justifications: {
        questionAnalysis: {
            rotation_stock: {
                lente: '🔴 Rotation lente critique : Une rotation de moins de 4x/an signifie que votre trésorerie est immobilisée pendant des mois dans du stock. Chaque article invendu représente du cash bloqué. Avec une meilleure gestion des achats, vous pourriez libérer des milliers d\'euros.',
                moyenne: '🟡 Rotation correcte : 4 à 8 rotations par an, c\'est acceptable mais perfectible. En accélérant votre rotation, vous réduiriez votre besoin en fonds de roulement et amélioreriez votre trésorerie disponible.',
                rapide: '🟢 Rotation optimale : Plus de 8 rotations par an, vous transformez rapidement vos stocks en cash. Votre BFR est optimisé et votre trésorerie bénéficie d\'une liquidité élevée. Attention cependant aux risques de rupture.'
            },
            stock_dormant: {
                eleve: '⚠️ Stock dormant critique : Plus de 20% de stock invendu, c\'est de la trésorerie morte. Ces articles occupent de l\'espace, génèrent des coûts de stockage, et surtout bloquent du cash qui pourrait financer votre croissance.',
                moyen: '📦 Stock dormant à réduire : 10 à 20% de stock dormant, c\'est encore trop. Une démarque commerciale ou une négociation avec vos fournisseurs pour un retour partiel pourrait libérer de la trésorerie significative.',
                faible: '✅ Stock dormant maîtrisé : Moins de 10% de stock dormant, votre gestion des achats est efficace. Vous évitez les erreurs de prévision coûteuses et maintenez votre trésorerie fluide.'
            },
            suivi_stock: {
                visuel: '👁️ Suivi visuel insuffisant : Gérer son stock à l\'œil est la méthode la plus risquée. Sans données précises, impossible de détecter le stock dormant, d\'anticiper les ruptures, ou de calculer votre vrai BFR.',
                excel: '📊 Suivi Excel basique : Un tableur est mieux que rien mais limité. Pas de mise à jour automatique, risque d\'erreur humaine, pas de vision en temps réel. Vous prenez des décisions sur des données souvent périmées.',
                logiciel: '💻 Suivi logiciel professionnel : Avec un logiciel dédié (comme Odoo), vous avez une vision en temps réel, des alertes automatiques, et des données fiables pour optimiser vos achats et libérer de la trésorerie.'
            },
            ruptures_stock: {
                frequentes: '🚨 Ruptures fréquentes : Des ruptures récurrentes signalent une gestion des approvisionnements défaillante. Chaque rupture = des ventes perdues, un client déçu, et souvent un réapprovisionnement d\'urgence plus coûteux.',
                occasionnelles: '⏱️ Ruptures occasionnelles : Quelques ruptures par an sont inévitables, mais révèlent une marge de progression. Un seuil minimal de réapprovisionnement (stock de sécurité) réduirait significativement ces incidents.',
                rares: '🎯 Ruptures maîtrisées : Vos processus d\'approvisionnement sont bien rodés. Vous anticipez la demande et maintenez le bon niveau de stock sans sur-stocker. C\'est l\'équilibre idéal pour la trésorerie.'
            },
            negociation_fournisseurs: {
                jamais: '❌ Aucune négociation fournisseur : En acceptant toutes les conditions imposées, vous manquez une opportunité majeure d\'améliorer votre BFR. Des délais de paiement plus longs ou des remises de volume peuvent représenter des dizaines de milliers d\'euros.',
                ponctuelle: '🤝 Négociation ponctuelle : Négocier lors des grosses commandes est un bon début. Mais une approche systématique, avec des fournisseurs sélectionnés sur leurs conditions, permettrait d\'optimiser en permanence votre BFR.',
                structuree: '💪 Négociation structurée : Vous gérez votre relation fournisseurs comme un levier financier. Délais étendus, remises négociées, conditions optimisées - vous maîtrisez votre BFR et améliorez continuellement votre trésorerie.'
            },
            impact_tresorerie: {
                inconnu: '🔴 Impact stock inconnu : Ne pas connaître l\'impact de son stock sur la trésorerie, c\'est comme conduire les yeux fermés. Sans cette donnée, impossible de prioriser vos optimisations ni de mesurer vos progrès.',
                soupçonne: '🟡 Impact partiellement connu : Vous sentez que votre stock pèse sur votre trésorerie mais sans chiffre précis. Quantifier cet impact (en calculant votre BFR stock) vous permettrait de prendre des décisions d\'optimisation éclairées.',
                chiffre: '🟢 Impact parfaitement maîtrisé : Connaître précisément l\'impact de votre stock sur votre trésorerie vous permet de prendre des décisions d\'optimisation ciblées et de mesurer votre progrès dans le temps.'
            }
        },
        crossAnalysis: [
            {
                condition: (answers) => answers['rotation_stock'] === 'lente' && answers['stock_dormant'] === 'eleve',
                text: '🚨 TRÉSORERIE IMMOBILISÉE : Rotation lente + stock dormant élevé - Double impact négatif sur votre trésorerie. Une partie significative de vos liquidités est gelée dans du stock inerte. Une démarche de destockage + révision de votre politique d\'achat libérerait immédiatement du cash.'
            },
            {
                condition: (answers) => answers['ruptures_stock'] === 'frequentes' && answers['rotation_stock'] === 'rapide',
                text: '⚠️ SOUS-STOCKAGE DANGEREUX : Rotations rapides + ruptures fréquentes - Votre stock tourne vite mais vous n\'en avez pas assez. Le risque de ventes perdues et de clients déçus est élevé. Un stock de sécurité calibré préserverait votre CA sans impacter outre mesure la trésorerie.'
            },
            {
                condition: (answers) => answers['suivi_stock'] === 'logiciel' && answers['impact_tresorerie'] === 'chiffre',
                text: '✨ GESTION PROFESSIONNELLE : Logiciel de gestion + impact chiffré - Vous avez les outils et la vision pour optimiser votre stock en continu. Cette combinaison gagnante vous permet de prendre des décisions d\'achats toujours plus précises et de maximiser votre trésorerie disponible.'
            },
            {
                condition: (answers) => answers['negociation_fournisseurs'] === 'structuree' && answers['rotation_stock'] === 'rapide',
                text: '🏆 EXCELLENCE OPÉRATIONNELLE : Négociation fournisseurs + rotation rapide - Vous payez vos fournisseurs plus tard tout en vendant rapidement : le BFR idéal. Cette combinaison génère une trésorerie positive et crée un avantage compétitif durable.'
            },
            {
                condition: (answers) => answers['suivi_stock'] === 'visuel' && answers['impact_tresorerie'] === 'inconnu',
                text: '💥 GESTION À L\'AVEUGLE : Suivi visuel + impact inconnu - Vous gérez votre stock sans données ni vision financière. C\'est le scénario le plus risqué : impossibilité de détecter les problèmes, pas d\'anticipation possible, et des décisions d\'achat non éclairées qui peuvent créer des crises de trésorerie.'
            }
        ]
    }
};
