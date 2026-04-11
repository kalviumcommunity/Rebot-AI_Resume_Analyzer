/**
 * Milestone 5.46: Final Evaluation Layer
 * Responsibility: Reporting cross-validation metrics with stability indicators (Mean ± Std).
 */

export interface ModelResult {
  name: string;
  cvScores: number[];
}

/**
 * Calculates and prints final evaluation metrics.
 * Reports Mean ± Std for robust assessment.
 */
export function reportCVScores(results: ModelResult[]) {
  console.log("\n🧪 [EVALUATION] Final Cross-Validation Rankings");
  console.log("----------------------------------------------");
  console.log("Model      | Accuracy (Mean ± Std) | Status");
  console.log("----------------------------------------------");

  results.forEach(res => {
    const mean = res.cvScores.reduce((a, b) => a + b, 0) / res.cvScores.length;
    const std = Math.sqrt(res.cvScores.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / res.cvScores.length);
    
    // Stability Check: Std < 0.05 is considered "Stable"
    const status = std < 0.05 ? "Stable ✅" : "Volatile ⚠️";
    
    console.log(`${res.name.padEnd(10)} | ${mean.toFixed(2)} (±${std.toFixed(2)})`.padEnd(35) + `| ${status}`);
  });
  console.log("----------------------------------------------");
}
