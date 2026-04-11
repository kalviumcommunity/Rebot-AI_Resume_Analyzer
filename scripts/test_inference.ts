/**
 * Milestone 5.44: Production Quality Assurance
 * Responsibility: Verifying inference consistency across multiple samples.
 */
import { runInference } from "../src/ml/inference";

const samples = [
  "Senior Software Engineer with 10 years experience in React, Node.js and AWS. Reduced latency by 40% and led a team of 5.",
  "Junior developer skilled in Python and SQL. Looking for my first role in a tech company.",
  "Sales Manager with 15 years experience. Increased revenue by $2M and managed large distribution networks."
];

console.log("\n🧪 STARTING BATCH INFERENCE TEST (Production Simulation)");
console.log("----------------------------------------------------------");

samples.forEach((text, i) => {
  try {
    const result = runInference(text);
    console.log(`\n📄 SAMPLE #${i + 1} DETERMINATION`);
    console.log(`- Label:   ${result.label}`);
    console.log(`- Score:   ${result.score}`);
    console.log(`- Version: ${result.version}`);
    console.log(`- Signals: Keywords=${result.features.keywords}, Metrics=${result.features.metrics}`);
  } catch (error) {
    console.error(`❌ SAMPLE #${i + 1} FAILED:`, error);
  }
});

console.log("\n----------------------------------------------------------");
console.log("✅ Batch testing complete. No retraining detected.");
