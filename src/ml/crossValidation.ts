/**
 * Milestone 5.41: Cross-Validation Engine
 * Responsibility: Measuring model stability and robustness via 5-fold folds.
 */
export function crossValidate(model: (f: any) => number, data: any[]) {
  const foldSize = Math.floor(data.length / 5);
  if (foldSize === 0) return { mean: 0, std: 0 };

  const scores: number[] = [];

  for (let i = 0; i < 5; i++) {
    const testIndices = new Set(Array.from({ length: foldSize }, (_, k) => i * foldSize + k));
    const test = data.slice(i * foldSize, (i + 1) * foldSize);
    
    let foldScore = 0;
    test.forEach(sample => {
      const features = Array.isArray(sample) 
        ? { keywordScore: sample[0], actionVerbs: sample[1], metrics: sample[2], structure: sample[3] }
        : (sample.features || sample);
      foldScore += model(features);
    });

    scores.push(foldScore / test.length);
  }

  const mean = scores.reduce((a, b) => a + b, 0) / scores.length;

  const variance = scores.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / scores.length;
  const std = Math.sqrt(variance);

  console.log(`- Cross-Val: Mean = ${mean.toFixed(3)}, Std = ${std.toFixed(3)}`);

  return { mean, std };
}
