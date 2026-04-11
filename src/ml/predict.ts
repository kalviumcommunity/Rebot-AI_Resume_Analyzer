/**
 * Milestone 5.43: Prediction & Inference Layer
 * Responsibility: Executing instant ATS scoring using persisted model artifacts.
 */
import { loadModel } from "./loadModel";

export function predictATSScore(features: any) {
  // 1. Load the persisted intelligence
  const model = loadModel("ats_model.json");

  if (!model) {
    throw new Error("Prediction failed: No model found. Please train first.");
  }

  // 2. Perform Weighted Scoring
  const score =
    (features.keywordScore || 0) * (model.weights.keywordScore || 0.25) +
    (features.actionVerbs || 0) * (model.weights.actionVerbs || 0.25) +
    (features.metrics || 0) * (model.weights.metrics || 0.25) +
    (features.structure || 0) * (model.weights.structure || 0.25);

  // 3. Apply Persisted Threshold
  const result = score >= (model.threshold || 0.6) ? "Good" : "Improve";

  return {
    score: score.toFixed(2),
    label: result,
    modelVersion: model.version || "unknown"
  };
}
