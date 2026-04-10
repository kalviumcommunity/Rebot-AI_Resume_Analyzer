/**
 * Kalvium Milestone 5.30: K-Nearest Neighbors (KNN) Model
 * Responsibility: Similarity-based classification logic.
 */

/**
 * Calculates Euclidean Distance between two feature objects.
 */
export function euclideanDistance(a: Record<string, number>, b: Record<string, number>): number {
  let sum = 0;
  for (const key in a) {
    if (typeof a[key] === 'number' && typeof b[key] === 'number') {
      sum += Math.pow(a[key] - b[key], 2);
    }
  }
  return Math.sqrt(sum);
}

/**
 * Normalizes features before distance calculation (Essential for KNN).
 */
export function normalizeFeatures(data: any[]): any[] {
  if (data.length === 0) return [];
  const keys = Object.keys(data[0]).filter(k => typeof data[0][k] === 'number');

  const min: Record<string, number> = {};
  const max: Record<string, number> = {};

  keys.forEach(key => {
    const values = data.map(d => d[key]);
    min[key] = Math.min(...values);
    max[key] = Math.max(...values);
  });

  return data.map(d => {
    const normalized: Record<string, number> = {};
    keys.forEach(key => {
      const range = max[key] - min[key] || 1;
      normalized[key] = (d[key] - min[key]) / range;
    });
    return normalized;
  });
}

/**
 * Core KNN Prediction Logic.
 * Selects K nearest matches and performs majority voting.
 */
export function knnPredict(
  trainData: Record<string, number>[], 
  trainLabels: number[], 
  testPoint: Record<string, number>, 
  k: number = 3,
  weight: "uniform" | "distance" = "uniform"
): number {
  const distances = trainData.map((point, index) => ({
    distance: euclideanDistance(point, testPoint),
    label: trainLabels[index]
  }));

  // Sort by closest distance
  distances.sort((a, b) => a.distance - b.distance);

  // Take the K nearest
  const nearest = distances.slice(0, k);

  // Voting Logic
  const votes: Record<number, number> = {};
  nearest.forEach(n => {
    const voteWeight = weight === "distance" ? (1 / (n.distance || 0.001)) : 1;
    votes[n.label] = (votes[n.label] || 0) + voteWeight;
  });

  // Find class with most weights/votes
  let winner = -1;
  let maxWeight = -1;

  for (const label in votes) {
    const l = Number(label);
    if (votes[l] > maxWeight) {
      maxWeight = votes[l];
      winner = l;
    }
  }

  return winner;
}
