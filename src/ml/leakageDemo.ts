import { fitScaler, transformScaler } from "./scaler";
import { trainLogisticModel, predictLogistic } from "./logisticModel";
import { calculateAccuracy } from "./classificationMetrics";

/**
 * Milestone 5.37: Incorrect Workflow Demonstration
 * Shows how preprocessing before splitting leads to Data Leakage.
 */
export function leakageWorkflow(data: any[], labels: number[]) {
  console.log("❌ Running Leakage Workflow (Preprocessing BEFORE Split)");

  // ❌ WRONG: fit and transform on ALL data
  const scaler = fitScaler(data);
  const scaledAll = transformScaler(data, scaler);

  // Split after leakage has already occurred
  const trainSize = Math.floor(data.length * 0.8);
  const train = scaledAll.slice(0, trainSize);
  const test = scaledAll.slice(trainSize);
  const trainLabels = labels.slice(0, trainSize);
  const testLabels = labels.slice(trainSize);

  // Train model
  const model = trainLogisticModel(train, trainLabels);

  // Evaluate
  const predictions = test.map(sample => predictLogistic(model, sample));
  const score = calculateAccuracy(testLabels, predictions);

  console.log(`❌ Leaked Accuracy: ${(score * 100).toFixed(2)}% (Inflated)`);
  return score;
}
