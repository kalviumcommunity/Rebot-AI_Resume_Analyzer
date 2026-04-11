import { fitScaler, transformScaler } from "./scaler";
import { trainLogisticModel, predictLogistic } from "./logisticModel";

/**
 * Milestone 5.37: Final Production-Level Pipeline
 * Encapsulates the complete fit/transform/predict lifecycle.
 */
export function finalPipeline(data: any[], labels: number[]) {
  console.log("🔥 Running Final Production Pipeline");

  // 1. Balanced Split
  const trainSize = Math.floor(data.length * 0.8);
  const trainRaw = data.slice(0, trainSize);
  const testRaw = data.slice(trainSize);
  const trainLabels = labels.slice(0, trainSize);
  const testLabels = labels.slice(trainSize);

  // 2. Build Pipeline Object
  const pipeline = {
    scaler: null as any,
    model: null as any
  };

  // 3. Fit Pipeline (Learns only from Train)
  pipeline.scaler = fitScaler(trainRaw);
  const trainProcessed = transformScaler(trainRaw, pipeline.scaler);
  pipeline.model = trainLogisticModel(trainProcessed, trainLabels);

  // 4. Production Inference (Uses saved artifacts)
  const testProcessed = transformScaler(testRaw, pipeline.scaler);
  const predictions = testProcessed.map(sample => predictLogistic(pipeline.model, sample));

  return {
    predictions,
    actuals: testLabels,
    pipelineArtifact: pipeline
  };
}
