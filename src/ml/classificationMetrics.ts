/**
 * Kalvium Milestone 5.26: Classification Metrics
 * Responsibility: Specialized categorical diagnostics.
 */

export function calculateAccuracy(actual: number[], predicted: number[]): number {
  let correct = 0;

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === predicted[i]) correct++;
  }

  return correct / actual.length;
}

export function balancedAccuracy(actual: number[], predicted: number[]) {
  let classCorrect: Record<number, number> = { 0: 0, 1: 0, 2: 0 };
  let classTotal: Record<number, number> = { 0: 0, 1: 0, 2: 0 };

  for (let i = 0; i < actual.length; i++) {
    const a = actual[i];
    classTotal[a] = (classTotal[a] || 0) + 1;

    if (a === predicted[i]) {
      classCorrect[a] = (classCorrect[a] || 0) + 1;
    }
  }

  const recall0 = classCorrect[0] / (classTotal[0] || 1);
  const recall1 = classCorrect[1] / (classTotal[1] || 1);
  const recall2 = classCorrect[2] / (classTotal[2] || 1);

  return (recall0 + recall1 + recall2) / 3;
}

export function confusionMatrix(actual: number[], predicted: number[]) {
  let matrix: any = {
    "0": { "0": 0, "1": 0, "2": 0 },
    "1": { "0": 0, "1": 0, "2": 0 },
    "2": { "0": 0, "1": 0, "2": 0 }
  };

  for (let i = 0; i < actual.length; i++) {
    const a = actual[i].toString();
    const p = predicted[i].toString();
    if (matrix[a] && matrix[a][p] !== undefined) {
      matrix[a][p]++;
    }
  }

  return matrix;
}
