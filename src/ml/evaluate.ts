/**
 * Milestone 5.39: Weighted Evaluation Routine
 * Responsibility: Measuring success using Recall, Precision, and F1.
 */
import { calculateBinaryConfusionMatrix } from "./metrics/confusionMatrix";
import { classificationAnalysis } from "./metrics/classificationAnalysis";

export function evaluateModel(actual: number[], predicted: number[]) {
  console.log("\n📊 PERFORMING WEIGHTED EVALUATION");

  // We convert to binary (0=Poor/Avg, 2=Strong) or similar for the demo
  // For the demo we focus on positiveClass = 2
  const { TP, FP, FN } = calculateBinaryConfusionMatrix(actual, predicted, 2);

  const metrics = classificationAnalysis(TP, FP, FN);

  console.log("\n✅ EVALUATION COMPLETE. Final Metric: F1 = " + metrics.f1.toFixed(3));

  return metrics;
}
