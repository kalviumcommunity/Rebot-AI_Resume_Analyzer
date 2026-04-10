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

/**
 * Calculates Precision per class (Milestone 5.27).
 * Precision = TP / (TP + FP)
 */
export function precisionScore(actual: number[], predicted: number[], targetClass: number): number {
  let tp = 0;
  let fp = 0;

  for (let i = 0; i < actual.length; i++) {
    if (predicted[i] === targetClass) {
      if (actual[i] === targetClass) tp++;
      else fp++;
    }
  }

  return tp / (tp + fp || 1);
}

/**
 * Calculates Recall per class (Milestone 5.27).
 * Recall = TP / (TP + FN)
 */
export function recallScore(actual: number[], predicted: number[], targetClass: number): number {
  let tp = 0;
  let fn = 0;

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === targetClass) {
      if (predicted[i] === targetClass) tp++;
      else fn++;
    }
  }

  return tp / (tp + fn || 1);
}

/**
 * Calculates F1 Score (Milestone 5.27).
 * F1 = 2 * (P * R) / (P + R)
 */
export function f1Score(precision: number, recall: number): number {
  return (2 * precision * recall) / (precision + recall || 1);
}

/**
 * Calculates Macro F1 Score (Milestone 5.28).
 * Macro F1 = Average of F1 scores for each class.
 */
export function macroF1(actual: number[], predicted: number[]): number {
  const classes = [0, 1, 2];
  let totalF1 = 0;

  classes.forEach(cls => {
    const precision = precisionScore(actual, predicted, cls);
    const recall = recallScore(actual, predicted, cls);
    totalF1 += f1Score(precision, recall);
  });

  return totalF1 / classes.length;
}
