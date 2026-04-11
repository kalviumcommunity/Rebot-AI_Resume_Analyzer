/**
 * Milestone 5.39: Class Weight Calculator
 * Responsibility: Computing optimal weights based on dataset frequency.
 * Formula: w_j = n / (k * n_j)
 */
export function computeClassWeights(labels: string[]) {
  const counts: Record<string, number> = {};

  labels.forEach(label => {
    counts[label] = (counts[label] || 0) + 1;
  });

  const total = labels.length;
  const classes = Object.keys(counts);
  const k = classes.length;

  const weights: Record<string, number> = {};

  classes.forEach(cls => {
    // Prevent division by zero if a class has 0 samples (though unlikely in trained sets)
    const count = counts[cls] || 1;
    weights[cls] = parseFloat((total / (k * count)).toFixed(4));
  });

  console.log("\n⚖️ DYNAMIC CLASS WEIGHTS CALCULATION");
  classes.forEach(cls => {
    console.log(`- ${cls}: Weight = ${weights[cls]} (Count: ${counts[cls]})`);
  });

  return weights;
}
