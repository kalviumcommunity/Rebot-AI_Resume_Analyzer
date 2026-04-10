/**
 * Kalvium Milestone 5.32: Decision Tree Model
 * Responsibility: Interpretable rule-based classification.
 */

/**
 * Base logic for a single-level decision tree.
 */
export function decisionTreePredict(features: any): number {
  const { keywordScore, metrics } = features;

  if (keywordScore > 70) {
    if (metrics > 5) {
      return 2; // Strong Resume
    } else {
      return 1; // Average
    }
  } else {
    // keywordScore <= 70
    return 0; // Poor
  }
}

/**
 * Enhanced Decision Tree with multiple thresholds and feature interactions.
 */
export function enhancedDecisionTree(features: any): number {
  const { keywordScore, actionVerbs, metrics, length } = features;

  // Path 1: Strong indicators
  if (keywordScore > 75 && metrics > 5) return 2;
  if (keywordScore > 60 && actionVerbs > 4) return 2;

  // Path 2: Average indicators
  if (keywordScore > 50) return 1;
  if (actionVerbs > 3 && length > 300) return 1;

  // Path 3: Default Poor
  return 0;
}

/**
 * Pruned Tree logic to control High Variance (Overfitting).
 */
export function prunedTree(features: any): number {
  const { keywordScore, metrics } = features;

  // Reduced depth -> prevents overfitting
  if (keywordScore > 65) {
    return metrics > 4 ? 2 : 1;
  }

  return 0;
}

/**
 * Global Feature Importance for Rebot's Decision Forest interpretation.
 */
export const featureImportance = {
  keywordScore: 0.5,
  metrics: 0.3,
  actionVerbs: 0.2
};
