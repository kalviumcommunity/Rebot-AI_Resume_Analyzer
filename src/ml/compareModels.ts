/**
 * Milestone 5.41: Model Comparison Engine
 * Responsibility: Aggregating performance metrics for all candidates.
 */
import { models } from "./models";

export function compareModels(data: any[]) {
  console.log("\n📊 INITIATING SYSTEM-WIDE MODEL COMPARISON");
  
  const results: any[] = [];

  Object.keys(models).forEach((modelName) => {
    const model = models[modelName];
    let totalScore = 0;

    data.forEach((sample) => {
      // Handle training data format (numeric array) or object
      const features = Array.isArray(sample) 
        ? { keywordScore: sample[0], actionVerbs: sample[1], metrics: sample[2], structure: sample[3] }
        : (sample.features || sample);
        
      totalScore += model(features);
    });

    const avgScore = totalScore / data.length;

    results.push({
      model: modelName,
      score: avgScore.toFixed(2)
    });
  });

  console.log("📊 Comparison Matrix Generated.");
  return results;
}
