import { runPrediction } from "./predict/predict";
import { CONFIG } from "./config";

/**
 * Standalone Pipeline Runner.
 * Simulates a full system execution for testing and debugging.
 */
function main() {
  console.log("==========================================");
  console.log(`   REBOT ML SYSTEM MAIN RUNNER (${CONFIG.MODEL_VERSION})   `);
  console.log("==========================================\n");

  const sampleResume = {
    user: { name: "John Doe", email: "john@example.com" },
    skills: {
      languages: ["TypeScript", "Python"],
      frontend: ["React", "Next.js"]
    },
    experience: [
      { title: "Software Engineer", description: "Built a React app with 30% performance improvement." }
    ]
  };

  console.log("Input: Sample Resume (React Engineer)");
  console.log("Processing...\n");

  const result = runPrediction(sampleResume);

  console.log("--- Results ---");
  console.log(`ATS Score:      ${result.score}`);
  console.log(`Baseline Score: ${result.baselineScore}`);
  console.log(`Status:         ${result.label}`);
  console.log(`Confidence:     ${(result.confidence * 100).toFixed(0)}%`);
  console.log("\n--- Top Features ---");
  result.prediction.featureContributions.slice(0, 3).forEach(fc => {
    console.log(`${fc.name}: ${fc.contribution > 0 ? '+' : ''}${fc.contribution} pts`);
  });

  console.log("\n==========================================\n");
}

main();
