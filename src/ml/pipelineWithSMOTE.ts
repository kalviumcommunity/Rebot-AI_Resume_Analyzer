/**
 * Milestone 5.40: Rebalanced Lifecycle Pipeline
 * Responsibility: Complete sequence from Raw Data to Predicted Labels with SMOTE balancing.
 */
import { smote } from "./oversampling/smote";
import { trainLogisticModel, predictLogistic } from "./logisticModel";

export function pipelineWithSMOTE(data: any[][], labels: string[]) {
  console.log("\n🛡️ EXECUTING SMOTE-INTEGRATED PIPELINE");

  // 1. Split (Strict Anti-Leakage)
  const split = Math.floor(data.length * 0.8);

  const trainData = data.slice(0, split);
  const testData = data.slice(split);

  const trainLabelsStr = labels.slice(0, split);
  const testLabelsStr = labels.slice(split);
  
  // Convert labels to numeric for training
  const trainLabels = trainLabelsStr.map(l => l === "Poor" ? 0 : 2);
  const testLabels = testLabelsStr.map(l => l === "Poor" ? 0 : 2);

  // 2. Oversample ONLY train
  const synthetic = smote(trainData, trainLabelsStr);

  const balancedTrain = [...trainData, ...synthetic];
  const balancedLabels = [...trainLabels, ...Array(synthetic.length).fill(0)];

  // 3. Train core model
  console.log(`[PIPELINE] Training core classifier on ${balancedTrain.length} balanced samples...`);
  const model = trainLogisticModel(balancedTrain, balancedLabels);

  // 4. Predict on UNTOUCHED test data
  console.log("[PIPELINE] Evaluating on isolated test data...");
  const predictions = testData.map(d => predictLogistic(model, d));

  return { actual: testLabels, predicted: predictions, model };
}
