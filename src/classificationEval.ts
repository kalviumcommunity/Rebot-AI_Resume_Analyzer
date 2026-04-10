import { 
  calculateAccuracy, confusionMatrix, balancedAccuracy,
  precisionScore, recallScore, f1Score 
} from "./ml/classificationMetrics";

/**
 * Baseline Classifier (Milestone 5.26)
 * Majority class: assumes most resumes are "Average" (1).
 */
export function baselineClassifier(data: any[]) {
  return data.map(() => 1); 
}

/**
 * Detailed Categorical Evaluator (Milestone 5.27).
 * Provides Per-Class breakdown of Precision, Recall, and F1.
 */
export function evaluateDetailed(actual: number[], predicted: number[]) {
  const classes = [0, 1, 2];
  const classNames = ["Poor", "Average", "Strong"];

  classes.forEach(cls => {
    const precision = precisionScore(actual, predicted, cls);
    const recall = recallScore(actual, predicted, cls);
    const f1 = f1Score(precision, recall);

    console.log(`\n   Tier ${cls} (${classNames[cls]}):`);
    console.log(`     Precision: ${precision.toFixed(3)}`);
    console.log(`     Recall:    ${recall.toFixed(3)}`);
    console.log(`     F1 Score:  ${f1.toFixed(3)}`);
  });
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

  console.log("\n📊 Classification Overview (Milestone 5.26)");
  console.log("   Baseline Accuracy: ", accBaseline.toFixed(3));
  console.log("   Model Accuracy:    ", accModel.toFixed(3));
  console.log("   Improvement:      ", improvement.toFixed(3));
  
  console.log("\n------------------------------------------");
  console.log("   DETAILED CLASS METRICS (Milestone 5.27)");
  
  console.log("\n   [BASELINE REPORT]");
  evaluateDetailed(actual, baselinePreds);

  console.log("\n   [MODEL REPORT]");
  evaluateDetailed(actual, predicted);

  return {
    accModel,
    accBaseline,
    improvement,
    matrix,
    balAcc
  };
}
