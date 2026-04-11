/**
 * Milestone 5.38: Threshold Tuning
 * Responsibility: Adjusting decision boundaries to prioritize Recall or Precision.
 */
export function tuneThreshold(probs: number[], actual: number[], positiveClass: number = 2) {
  console.log("\n🎚️ THRESHOLD TUNING ANALYSIS (Class " + positiveClass + ")");
  console.log(`| Threshold | Precision | Recall | Status |`);
  console.log(`|-----------|-----------|--------|--------|`);

  for (let t = 0.1; t <= 0.7; t += 0.1) {
    const predictions = probs.map(p => (p >= t ? positiveClass : 0));

    let TP = 0, FP = 0, FN = 0;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] === positiveClass && predictions[i] === positiveClass) TP++;
      else if (actual[i] !== positiveClass && predictions[i] === positiveClass) FP++;
      else if (actual[i] === positiveClass && predictions[i] !== positiveClass) FN++;
    }

    const precision = TP / (TP + FP || 1);
    const recall = TP / (TP + FN || 1);
    
    let status = t === 0.5 ? "Standard" : (recall > 0.8 ? "High Recall" : "Balanced");
    
    console.log(`| ${t.toFixed(1)}       | ${precision.toFixed(2)}      | ${recall.toFixed(2)}   | ${status} |`);
  }
}
