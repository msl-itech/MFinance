import { Injectable } from '@angular/core';
import {
  DiagnosticConfig,
  DiagnosticResult,
  DiagnosticLevel,
  DiagnosticDetailedAnalysis
} from './diagnostic.models';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {

  constructor() {}

  /**
   * Calcule le résultat du diagnostic basé sur les réponses
   */
  calculateResult(
    config: DiagnosticConfig,
    answers: { [key: string]: string }
  ): DiagnosticResult {
    // 1. Calculer le score total
    let totalScore = 0;
    config.questions.forEach(question => {
      const answerValue = answers[question.id];
      const selectedOption = question.options.find(opt => opt.value === answerValue);
      if (selectedOption) {
        totalScore += selectedOption.points;
      }
    });

    // 2. Déterminer le niveau
    const level = this.determineLevel(totalScore, config.scoringRules);
    const levelConfig = config.scoringRules.levels[level];

    // 3. Détecter le profil (si configuré)
    const detectedProfile = config.profiles?.find(
      profile => profile.condition(answers, totalScore)
    );

    // 4. Générer l'analyse détaillée
    const detailedAnalysis = this.generateDetailedAnalysis(config, answers);

    // 5. Construire le résultat
    const result: DiagnosticResult = {
      score: totalScore,
      maxScore: config.scoringRules.maxScore,
      level,
      title: detectedProfile?.name || levelConfig.title,
      description: detectedProfile?.description || this.getDefaultDescription(level, levelConfig.title),
      recommendation: detectedProfile?.recommendation || this.getDefaultRecommendation(level),
      ctaText: detectedProfile?.ctaText || this.getDefaultCtaText(level),
      ctaAction: detectedProfile?.redirectUrl ? 'redirect' : 'contact',
      redirectUrl: detectedProfile?.redirectUrl,
      answers: { ...answers },
      detailedAnalysis
    };

    return result;
  }

  /**
   * Détermine le niveau (low/medium/high) basé sur le score
   */
  private determineLevel(score: number, scoringRules: any): DiagnosticLevel {
    if (score >= scoringRules.levels.low.min && score <= scoringRules.levels.low.max) {
      return 'low';
    }
    if (score >= scoringRules.levels.medium.min && score <= scoringRules.levels.medium.max) {
      return 'medium';
    }
    return 'high';
  }

  /**
   * Génère l'analyse détaillée (par réponse + croisée)
   */
  private generateDetailedAnalysis(
    config: DiagnosticConfig,
    answers: { [key: string]: string }
  ): DiagnosticDetailedAnalysis {
    const answerAnalysis: { [questionId: string]: string } = {};

    // Analyse par réponse
    config.questions.forEach(question => {
      const answerValue = answers[question.id];
      if (answerValue && config.justifications.questionAnalysis[question.id]) {
        const analysis = config.justifications.questionAnalysis[question.id][answerValue];
        if (analysis) {
          answerAnalysis[question.id] = analysis;
        }
      }
    });

    // Analyse croisée (1 seule max)
    let crossAnalysis: string | undefined;
    if (config.justifications.crossAnalysis) {
      const matchedCondition = config.justifications.crossAnalysis.find(
        condition => condition.condition(answers)
      );
      if (matchedCondition) {
        crossAnalysis = matchedCondition.text;
      }
    }

    // Profil détecté
    const detectedProfile = config.profiles?.find(
      profile => profile.condition(answers, 0)
    );

    return {
      answerAnalysis,
      crossAnalysis,
      profile: detectedProfile?.id
    };
  }

  /**
   * Descriptions par défaut selon le niveau
   */
  private getDefaultDescription(level: DiagnosticLevel, title: string): string {
    const descriptions = {
      low: `D'après vos réponses, votre situation nécessite une attention particulière. ${title}`,
      medium: `Votre situation présente des opportunités d'amélioration. ${title}`,
      high: `D'après vos réponses, vous êtes sur la bonne voie. ${title}`
    };
    return descriptions[level];
  }

  /**
   * Recommandations par défaut selon le niveau
   */
  private getDefaultRecommendation(level: DiagnosticLevel): string {
    const recommendations = {
      low: 'Nous vous recommandons vivement un accompagnement personnalisé pour sécuriser votre situation.',
      medium: 'Une analyse approfondie vous permettrait d\'optimiser votre stratégie.',
      high: 'Continuez sur cette voie et envisagez des optimisations ciblées pour maximiser vos résultats.'
    };
    return recommendations[level];
  }

  /**
   * CTA par défaut selon le niveau
   */
  private getDefaultCtaText(level: DiagnosticLevel): string {
    const ctas = {
      low: 'Obtenir un accompagnement urgent',
      medium: 'Demander une analyse personnalisée',
      high: 'Optimiser ma stratégie'
    };
    return ctas[level];
  }

  /**
   * Sauvegarde locale du diagnostic
   */
  saveToLocalStorage(diagnosticId: string, data: any): void {
    const storageKey = `mfinances_diagnostic_${diagnosticId}`;
    localStorage.setItem(storageKey, JSON.stringify({
      timestamp: Date.now(),
      ...data
    }));
  }

  /**
   * Chargement local du diagnostic
   */
  loadFromLocalStorage(diagnosticId: string): any | null {
    const storageKey = `mfinances_diagnostic_${diagnosticId}`;
    const stored = localStorage.getItem(storageKey);
    if (!stored) return null;

    try {
      const data = JSON.parse(stored);
      const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);

      // Vérifier l'expiration
      if (data.timestamp < thirtyDaysAgo) {
        localStorage.removeItem(storageKey);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Erreur lors du chargement du localStorage:', error);
      return null;
    }
  }

  /**
   * Génère le badge HTML selon le niveau
   */
  getBadgeIcon(level: DiagnosticLevel): string {
    const badges = {
      low: '🔴',
      medium: '🟡',
      high: '🟢'
    };
    return badges[level];
  }
}
