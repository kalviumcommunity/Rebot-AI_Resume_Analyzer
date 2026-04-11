/**
 * Milestone 5.38: Baseline Majority Model
 * Responsibility: Proving that accuracy can be misleading on imbalanced data.
 */
export function baselineModel(labels: (string | number)[]) {
  console.log("\n⚠️ EVALUATING BASELINE (MAJORITY CLASS) MODEL");

  // Find majority class
  const counts: Record<string, number> = {};
  labels.forEach(l => { counts[l] = (counts[l] || 0) + 1 });
  
  const majority = Object.keys(counts).reduce((a, b) => counts[a] >= counts[b] ? a : b);
  const majorityLabel = isNaN(Number(majority)) ? majority : Number(majority);

  // Predict majority for everyone
  const predictions = labels.map(() => majorityLabel);

  let correct = 0;
  for (let i = 0; i < labels.length; i++) {
    if (labels[i] === predictions[i]) correct++;
  }

  const accuracy = correct / labels.length;

  console.log(`- Majority Class:   ${majorityLabel}`);
  console.log(`- Baseline Accuracy: ${(accuracy * 100).toFixed(2)}% (The "Accuracy Floor")`);
  console.log(`- Note: This model is 100% useless despite the high accuracy.`);

  return accuracy;
}
