/**
 * Milestone 5.42: Decision Reporting Layer
 * Responsibility: Formatting model metrics into a professional comparative table.
 */
export function createDecisionTable(modelsResults: any[]) {
  console.log("\n📊 GENERATING MULTI-METRIC DECISION TABLE");
  
  return modelsResults.map((m) => ({
    Model: m.name,
    "CV Mean": (m.mean * 100).toFixed(1) + "%",
    "CV Std": m.std.toFixed(3),
    Recall: m.recall.toFixed(2),
    Precision: m.precision.toFixed(2),
    Latency: m.latency + "ms",
    Interpretable: m.name === "Logistic" ? "Yes" : "No"
  }));
}
