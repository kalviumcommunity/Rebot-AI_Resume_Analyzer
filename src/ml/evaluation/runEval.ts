import { evaluateDataset } from "./metrics";
import { CONFIG } from "../config";

/**
 * CLI Entry point for model evaluation.
 * Runs the benchmarker and prints a professional status report.
 */
async function run() {
  console.log("==========================================");
  console.log(`   ML PIPELINE EVALUATION REPORT (${CONFIG.MODEL_VERSION})   `);
  console.log("==========================================");

  const result = evaluateDataset();

  console.log(`\nAccuracy:          ${(result.accuracy * 100).toFixed(2)}%`);
  console.log(`ML Model MAE:      ${result.meanAbsoluteError.toFixed(2)} pts`);
  console.log(`Baseline MAE:      ${result.baselineMAE.toFixed(2)} pts`);
  console.log(`MAE Reduction:     ${(result.baselineMAE - result.meanAbsoluteError).toFixed(2)} pts`);
  console.log(`F1-Score:          ${result.f1Score.toFixed(2)}`);

  console.log("\n------------------------------------------");
  if (result.accuracy > 0.8 && result.meanAbsoluteError < 5.0) {
      console.log("STATUS: SUCCESS - Model performance within thresholds.");
  } else {
      console.log("STATUS: WARNING - Performance below expected baseline.");
  }
  console.log("==========================================\n");
}

run().catch(console.error);
