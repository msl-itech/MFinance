/**
 * Modèles TypeScript pour le système de diagnostic réutilisable
 * Basé sur diagnostic-passage-societe.component.ts
 */

export interface DiagnosticOption {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
  points: number;
}

export interface DiagnosticQuestion {
  id: string;
  question: string;
  description?: string;
  options: DiagnosticOption[];
}

export type DiagnosticLevel = 'low' | 'medium' | 'high';

export interface DiagnosticResult {
  score: number;
  maxScore: number;
  level: DiagnosticLevel;
  title: string;
  description: string;
  recommendation: string;
  ctaText: string;
  ctaAction: 'wait' | 'analyze' | 'contact' | 'redirect';
  redirectUrl?: string; // Pour redirection vers page spécifique
  answers: { [key: string]: string };
  detailedAnalysis?: DiagnosticDetailedAnalysis;
}

export interface DiagnosticDetailedAnalysis {
  answerAnalysis: { [questionId: string]: string };
  crossAnalysis?: string; // Justification croisée
  profile?: string; // Profil détecté (ex: CROISSANCE, DIFFICULTÉ, INVESTISSEUR)
}

export interface DiagnosticConfig {
  id: string; // Identifiant unique du diagnostic
  title: string; // Titre principal
  subtitle?: string; // Sous-titre
  questions: DiagnosticQuestion[];
  scoringRules: DiagnosticScoringRules;
  justifications: DiagnosticJustifications;
  profiles?: DiagnosticProfile[]; // Profils détectés (optionnel)
}

export interface DiagnosticScoringRules {
  maxScore: number;
  levels: {
    low: { min: number; max: number; title: string; badge: string };
    medium: { min: number; max: number; title: string; badge: string };
    high: { min: number; max: number; title: string; badge: string };
  };
}

export interface DiagnosticJustifications {
  // Justifications par question et par réponse
  questionAnalysis: {
    [questionId: string]: {
      [optionValue: string]: string;
    };
  };
  // Justifications croisées conditionnelles
  crossAnalysis?: DiagnosticCrossCondition[];
}

export interface DiagnosticCrossCondition {
  condition: (answers: { [key: string]: string }) => boolean;
  text: string;
}

export interface DiagnosticProfile {
  id: string;
  name: string;
  condition: (answers: { [key: string]: string }, score: number) => boolean;
  description: string;
  recommendation: string;
  redirectUrl?: string;
  ctaText?: string;
}

export interface DiagnosticEmailData {
  nom: string;
  email: string;
}

export interface DiagnosticState {
  currentQuestionIndex: number;
  answers: { [key: string]: string };
  showResult: boolean;
  result: DiagnosticResult | null;
  showEmailModal: boolean;
  isLoadingEmail: boolean;
  emailData: DiagnosticEmailData;
}
