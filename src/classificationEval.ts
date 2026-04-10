import { 
  calculateAccuracy, confusionMatrix, balancedAccuracy,
  precisionScore, recallScore, f1Score, macroF1 
} from "./ml/classificationMetrics";

/**
 * Baseline Classifier (Milestone 5.26)
 * Majority class: assumes most resumes are "Average" (1).
 */
export function baselineClassifier(data: any[]) {
  return data.map(() => 1); 
}

/**
 * Detailed Categorical Evaluator (Milestone 5.28).
 * Provides Per-Class breakdown of Precision, Recall, and F1.
 */
export function evaluateDetailed(actual: number[], predicted: number[]) {
  const classes = [0, 1, 2];
  const classNames = ["Poor", "Average", "Strong"];

  classes.forEach(cls => {
    const precision = precisionScore(actual, predicted, cls);
    const recall = recallScore(actual, predicted, cls);
    const f1 = f1Score(precision, recall);

    console.log(`\n📊 Class ${cls} (${classNames[cls]}):`);
    console.log(`   Precision: ${precision.toFixed(3)}`);
    console.log(`   Recall:    ${recall.toFixed(3)}`);
    console.log(`   F1 Score:  ${f1.toFixed(3)}`);
  });
}

/**
 * Professional Classification Evaluator (Milestone 5.28).
 */
export function evaluateClassification(actual: number[], predicted: number[], data: any[]) {
  const baselinePreds = baselineClassifier(data);

  const accModel = calculateAccuracy(actual, predicted);
  const accBaseline = calculateAccuracy(actual, baselinePreds);
  const matrix = confusionMatrix(actual, predicted);
  const balAcc = balancedAccuracy(actual, predicted);

  const baselineF1 = macroF1(actual, baselinePreds);
  const modelF1 = macroF1(actual, predicted);

  const improvement = accModel - accBaseline;

  console.log("\n📊 Classification Overview (Milestone 5.28)");
  console.log("   Baseline Accuracy: ", accBaseline.toFixed(3));
  console.log("   Model Accuracy:    ", accModel.toFixed(3));
  console.log("   Improvement:      ", improvement.toFixed(3));
  
  console.log("\n------------------------------------------");
  console.log("   DETAILED CLASS METRICS (Milestone 5.28)");
  
  console.log("\n   [BASELINE REPORT]");
  evaluateDetailed(actual, baselinePreds);
  console.log("   Baseline Macro F1:", baselineF1.toFixed(3));

  console.log("\n   [MODEL REPORT]");
  evaluateDetailed(actual, predicted);
  console.log("   Model Macro F1:   ", modelF1.toFixed(3));

  console.log("\n🔥 FINAL METRICS");
  console.log("   Accuracy:         ", accModel.toFixed(3));
  console.log("   Balanced Accuracy:", balAcc.toFixed(3));
  console.log("   Macro F1 Score:   ", modelF1.toFixed(3));

  if (modelF1 > baselineF1) {
    console.log("\n✅ SUCCESS: Model F1 > Baseline F1. The model is scientifically validated.");
  } else {
    console.log("\n❌ CAUTION: Model F1 <= Baseline F1. The model requires further tuning.");
  }

  console.log("\n🧠 IMPORTANT CONCEPT: F1 Score is the harmonic mean of Precision and Recall, penalizing models that perform poorly on either metric.");

  return {
    accModel,
    accBaseline,
    improvement,
    matrix,
    balAcc,
    baselineF1,
    modelF1
  };
}
