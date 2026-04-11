/**
 * Milestone 5.42: Final Decision Engine
 * Responsibility: Selecting the model that balances metrics, stability, and latency.
 */
export function selectFinalModel(results: any[]) {
  console.log("\n⚖️ INITIATING FINAL DECISION PROTOCOL (Multi-Criteria)");
  
  let bestModel: any = null;

  results.forEach((model) => {
    const { name, mean, std, recall, latency } = model;

    console.log(`Analyzing ${name}: Stability=${std.toFixed(3)}, Recall=${recall.toFixed(2)}, Latency=${latency}ms`);

    // 🎯 RULE 1: Stability First (Filter out flukes/high-variance models)
    if (std > 0.05) {
      console.log(`   ❌ REJECTED: High Variance (${std.toFixed(3)} > 0.05)`);
      return;
    }

    // 🎯 RULE 2: Latency Constraint (Filter out computationally expensive models)
    if (latency > 50) {
      console.log(`   ❌ REJECTED: Latency Breach (${latency}ms > 50ms)`);
      return;
    }

    // 🎯 RULE 3: Recall Priority (ATS system must catch as many weak resumes as possible)
    if (!bestModel || recall > bestModel.recall) {
      console.log(`   ✅ SELECTED: New Leader based on Recall Optimization.`);
      bestModel = model;
    } else {
      console.log(`   ⚪ SKIPPED: Lower Recall than current leader.`);
    }
  });

  if (bestModel) {
    console.log(`\n🏆 FINAL PRODUCTION SELECTION: ${bestModel.name}`);
  }

  return bestModel;
}
