/**
 * Kalvium Milestone 5.34: Hyperparameter Tuning (Grid Search)
 * Responsibility: Systematic search for optimal model configurations.
 */

import { calculateAccuracy } from "./classificationMetrics";

export const paramGrid = {
  knn: {
    k: [1, 3, 5, 7, 9, 11],
    weight: ["uniform", "distance"]
  },
  decisionTree: {
    maxDepth: [2, 4, 6, 8],
    minSamples: [1, 3, 5]
  }
};

/**
 * Creates a Cartesian product of all hyperparameter combinations.
 */
export function generateCombinations(grid: any): any[] {
  const keys = Object.keys(grid);
  const result: any[] = [{}];

  keys.forEach(key => {
    const values = grid[key];
    const newResult: any[] = [];
    result.forEach(res => {
      values.forEach((val: any) => {
        newResult.push({ ...res, [key]: val });
      });
    });
    result.length = 0;
    result.push(...newResult);
  });

  return result;
}

/**
 * Systematic Search logic to find the best configuration.
 */
export function gridSearch(
  params: any[], 
  trainFeatures: any[], 
  trainLabels: number[], 
  valFeatures: any[], 
  valLabels: number[],
  predictFunc: (trainF: any[], trainL: number[], testF: any, p: any) => number
): { bestParams: any, bestScore: number } {
  
  let bestScore = -1;
  let bestParams = null;

  params.forEach(paramSet => {
    const preds = valFeatures.map(f => predictFunc(trainFeatures, trainLabels, f, paramSet));
    const score = calculateAccuracy(valLabels, preds);

    if (score > bestScore) {
      bestScore = score;
      bestParams = paramSet;
    }
  });

  return { bestParams, bestScore };
}

/**
 * Final Model Selection based on cross-validated scores.
 */
export function selectBestModel(results: { modelName: string, score: number }[]) {
  return results.reduce((best, current) => {
    return current.score > best.score ? current : best;
  }, results[0]);
}
