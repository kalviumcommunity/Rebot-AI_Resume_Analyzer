/**
 * Milestone 5.44: Production Inference Layer
 * Responsibility: Executing fast, frozen-model predictions for real-time scoring.
 */
import { loadModel } from "./loadModel";
import { extractFeatures } from "../features/extractor";

let modelCache: any = null;

/**
 * Singleton Pattern: Load model ONCE during the server/app lifecycle.
 */
function getModel() {
  if (!modelCache) {
    modelCache = loadModel("ats_model.json");
    if (modelCache) {
      console.log("✅ [INFERENCE] Champion model loaded into RAM cache.");
    }
  }
  return modelCache;
}

/**
 * Executes the full inference loop:
 * Raw Input -> Feature Extraction -> Scored Prediction
 */
export function runInference(resumeText: string) {
  const model = getModel();

  if (!model) {
    throw new Error("❌ Inference Failed: Model artifact not found.");
  }

  // Step 1: Feature Extraction (Engineered representation)
  // Converting raw text to a partial object structure the extractor expects
  const features = extractFeatures({ objective: resumeText });

  // Step 2: Prediction logic (Weights matches finalized boosting architecture)
  const score =
    (features.keywordDensity || 0) * (model.weights.keywordScore || 0.25) +
    (features.actionVerbCount || 0) * (model.weights.actionVerbs || 0.25) +
    (features.metricCount || 0) * (model.weights.metrics || 0.25) +
    (features.skillsCount / 20) * (model.weights.structure || 0.25); // Normalized skills

  // Step 3: Result classification
  const label = score >= (model.threshold || 0.6) ? "ATS Friendly" : "Needs Improvement";

  return {
    score: (score * 100).toFixed(0) + "%",
    label,
    version: model.version || "unknown",
    features: {
      keywords: features.keywordDensity > 0.5 ? "Strong" : "Weak",
      verbs: features.actionVerbCount > 10 ? "Good" : "Medium",
      metrics: features.metricCount > 2 ? "Strong" : "Low"
    }
  };
}
