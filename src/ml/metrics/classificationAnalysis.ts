/**
 * Milestone 5.38: Detailed Classification Metrics
 * Responsibility: Calculating values that reveal minority class performance.
 */
export function classificationAnalysis(TP: number, FP: number, FN: number) {
  const precision = TP / (TP + FP || 1);
  const recall = TP / (TP + FN || 1);
  const f1 = 2 * (precision * recall) / (precision + recall || 1);

  console.log("\n📈 DETAILED CLASSIFICATION METRICS");
  console.log(`- Precision: ${precision.toFixed(3)} (Alarm Quality)`);
  console.log(`- Recall:    ${recall.toFixed(3)} (Detection Coverage)`);
  console.log(`- F1 Score:  ${f1.toFixed(3)} (Balanced Measure)`);

  if (f1 < 0.5) {
    console.warn("  ⚠️ ALERT: Low F1 Score suggests model is struggling with minority class.");
  }

  return { precision, recall, f1 };
}
