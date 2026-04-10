import { calculateAccuracy, confusionMatrix, balancedAccuracy } from "./ml/classificationMetrics";

/**
 * Baseline Classifier (Milestone 5.26)
 * Majority class: assumes most resumes are "Average" (1).
 */
export function baselineClassifier(data: any[]) {
  return data.map(() => 1); 
}

/**
 * Professional Classification Evaluator.
 */
export function evaluateClassification(actual: number[], predicted: number[], data: any[]) {
  const baselinePreds = baselineClassifier(data);

  const accModel = calculateAccuracy(actual, predicted);
  const accBaseline = calculateAccuracy(actual, baselinePreds);
  const matrix = confusionMatrix(actual, predicted);
  const balAcc = balancedAccuracy(actual, predicted);

  const improvement = accModel - accBaseline;

  console.log("\n📊 Classification Results (Milestone 5.26)");
  console.log("   Baseline Accuracy: ", accBaseline.toFixed(3));
  console.log("   Model Accuracy:    ", accModel.toFixed(3));
  console.log("   Improvement:      ", improvement.toFixed(3));
  console.log("   Balanced Acc:     ", balAcc.toFixed(3));

  return {
    accModel,
    accBaseline,
    improvement,
    matrix,
    balAcc
  };
}
