import { fitScaler, transformScaler } from "./scaler";
import { trainLogisticModel, predictLogistic } from "./logisticModel";
import { calculateAccuracy } from "./classificationMetrics";

/**
 * Milestone 5.37: Correct Pipeline Workflow
 * Shows how splitting BEFORE preprocessing prevents Data Leakage.
 */
export function safePipeline(data: any[], labels: number[]) {
  console.log("✅ Running Safe Pipeline (Split BEFORE Preprocessing)");

  // ✅ Step 1: Split FIRST
  const trainSize = Math.floor(data.length * 0.8);
  const trainRaw = data.slice(0, trainSize);
  const testRaw = data.slice(trainSize);
  const trainLabels = labels.slice(0, trainSize);
  const testLabels = labels.slice(trainSize);

  // ✅ Step 2: Fit ONLY on Training Data
  const scaler = fitScaler(trainRaw);

  const trainProcessed = transformScaler(trainRaw, scaler);
  // Transform test using training-set statistics
  const testProcessed = transformScaler(testRaw, scaler);

  // Train model on safe training data
  const model = trainLogisticModel(trainProcessed, trainLabels);

  // Predict
  const predictions = testProcessed.map(sample => predictLogistic(model, sample));
  const score = calculateAccuracy(testLabels, predictions);

  console.log(`✅ Safe Accuracy: ${(score * 100).toFixed(2)}% (Honest/Real)`);
  return score;
}
