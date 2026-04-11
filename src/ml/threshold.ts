/**
 * Milestone 5.42: Advanced Threshold Tuning
 * Responsibility: Optimizing decision boundaries for Recall (ATS Priority).
 */
export function tuneThreshold(probabilities: number[], labels: number[]) {
  console.log("\n🎯 INITIATING RECALL-CENTRIC THRESHOLD TUNING");
  
  let bestThreshold = 0.5;
  let bestRecall = 0;

  for (let t = 0.1; t <= 0.7; t += 0.1) {
    let tp = 0, fn = 0;

    probabilities.forEach((p, i) => {
      // 1 = Positive (e.g., Good/Selected), 0 = Negative
      const pred = p >= t ? 1 : 0;
      const actual = labels[i];

      if (actual === 1 && pred === 1) tp++;
      if (actual === 1 && pred === 0) fn++;
    });

    const recall = tp / (tp + fn || 1);
    
    console.log(`- Testing Threshold ${t.toFixed(1)}: Recall = ${recall.toFixed(3)}`);

    if (recall > bestRecall) {
      bestRecall = recall;
      bestThreshold = t;
    }
  }

  console.log(`\n🏆 OPTIMAL THRESHOLD: ${bestThreshold.toFixed(1)} (Maximizes Detection Recall)`);

  return bestThreshold;
}
