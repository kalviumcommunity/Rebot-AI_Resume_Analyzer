/**
 * Milestone 5.38: Class Distribution Analysis
 * Responsibility: Identifying if a dataset is imbalanced before training.
 */
export function checkClassDistribution(labels: (string | number)[]) {
  const counts: Record<string, number> = {};

  labels.forEach(label => {
    const key = label.toString();
    counts[key] = (counts[key] || 0) + 1;
  });

  console.log("\n📊 CLASS DISTRIBUTION ANALYSIS");
  const total = labels.length;

  Object.keys(counts).forEach(label => {
    const percentage = ((counts[label] / total) * 100).toFixed(2);
    console.log(`- Class ${label}: ${counts[label]} samples (${percentage}%)`);
    
    if (parseFloat(percentage) < 20) {
      console.warn(`  ⚠️ ALERT: Class ${label} is significantly underrepresented (Imbalance detected)`);
    }
  });

  return counts;
}
