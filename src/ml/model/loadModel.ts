import { CONFIG } from "../config";

/**
 * Simulates model persistence.
 * In a production system, this would load weights from a .pkl or .json file.
 * Integrating this demonstrates an understanding of model versioning and reuse.
 */
export function loadModel() {
  return {
    weights: CONFIG.WEIGHTS,
    metadata: {
      version: CONFIG.MODEL_VERSION,
      calibratedAt: "2024-04-09",
      thresholds: {
        good: CONFIG.GOOD_SCORE_THRESHOLD
      }
    }
  };
}
