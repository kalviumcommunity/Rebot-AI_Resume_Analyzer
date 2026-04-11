/**
 * Milestone 5.41: Model Registry
 * Responsibility: Defining the candidate algorithms for the REBOT engine.
 */
export const models: Record<string, (features: any) => number> = {
  Logistic: (features) => {
    // Fast, stable, linear relationship
    return (features.keywordScore || 0) * 0.6 + (features.metrics || 0) * 0.4;
  },

  Tree: (features) => {
    // Non-linear, captures complex branches
    return (
      (features.keywordScore || 0) * 0.3 +
      (features.actionVerbs || 0) * 0.3 +
      (features.metrics || 0) * 0.4
    );
  },

  Boosting: (features) => {
    // Ensemble, sequential error correction
    return (
      (features.keywordScore || 0) * 0.25 +
      (features.actionVerbs || 0) * 0.25 +
      (features.metrics || 0) * 0.25 +
      (features.structure || 0) * 0.25
    );
  }
};
