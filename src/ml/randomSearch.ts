/**
 * Kalvium Milestone 5.35: RandomizedSearchCV
 * Responsibility: Efficient stochastic search across large parameter spaces.
 */

import { calculateAccuracy } from "./classificationMetrics";

export const paramDistributions = {
  knn: {
    k: { min: 1, max: 20 },
    weight: ["uniform", "distance"]
  },
  decisionTree: {
    maxDepth: { min: 2, max: 30 },
    minSamples: { min: 1, max: 20 }
  }
};

/**
 * Randomized Search engine to explore parameter space efficiently.
 */
export function randomizedSearch(
  paramDist: any,
  nIter: number,
  trainFeatures: any[],
  trainLabels: number[],
  valFeatures: any[],
  valLabels: number[],
  predictFunc: (trainF: any[], trainL: number[], testF: any, p: any) => number
): { bestParams: any, bestScore: number } {
  
  let bestScore = -1;
  let bestParams = null;

  console.log(`\n🎲 [ML STOCHASTIC] Exploring ${nIter} random configurations...`);

  for (let i = 0; i < nIter; i++) {
    // Sample random parameters
    const randomParams: any = {};
    Object.keys(paramDist).forEach(key => {
      const dist = paramDist[key];
      if (Array.isArray(dist)) {
        // Categorical sample
        randomParams[key] = dist[Math.floor(Math.random() * dist.length)];
      } else if (typeof dist === 'object' && dist.min !== undefined) {
        // Integer range sample
        randomParams[key] = Math.floor(Math.random() * (dist.max - dist.min + 1)) + dist.min;
      }
    });

    // Evaluate
    const preds = valFeatures.map(f => predictFunc(trainFeatures, trainLabels, f, randomParams));
    const score = calculateAccuracy(valLabels, preds);

    if (score > bestScore) {
      bestScore = score;
      bestParams = randomParams;
    }
  }

  return { bestParams, bestScore };
}
