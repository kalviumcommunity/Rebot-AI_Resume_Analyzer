/**
 * Milestone 5.39: Weighted ATS Scoring Model
 * Responsibility: Adjusting scores to favor detection of minority class patterns.
 */
import { CLASS_WEIGHTS } from "../config";

export type ResumeFeatures = {
  keywordScore: number;
  actionVerbs: number;
  metrics: number;
  structure: number;
};

export function calculateATSScore(features: ResumeFeatures) {
  // Base weights for features
  const weights = {
    keywordScore: 0.4,
    actionVerbs: 0.2,
    metrics: 0.2,
    structure: 0.2
  };

  const score =
    features.keywordScore * weights.keywordScore +
    features.actionVerbs * weights.actionVerbs +
    features.metrics * weights.metrics +
    features.structure * weights.structure;

  // Determine label based on base score
  const label = score > 60 ? "Good" : "Poor";

  // 🔥 CLASS WEIGHT ADJUSTMENT (Milestone 5.39)
  // We apply the cost penalty to the scoring logic to ensure "Poor" resumes are flagged effectively.
  const currentWeight = label === "Good" ? CLASS_WEIGHTS.Good : CLASS_WEIGHTS.Poor;
  
  // We simulate "Cost-Sensitive" scoring by scaling the impact of the final decision
  const adjustedScore = score * currentWeight;

  return {
    rawScore: score,
    adjustedScore: Math.min(adjustedScore, 100),
    label,
    impactWeight: currentWeight
  };
}
