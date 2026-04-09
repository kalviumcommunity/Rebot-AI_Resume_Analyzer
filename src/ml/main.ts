/**
 * Kalvium Milestone 5.8: Main Orchestration
 * Responsibility: Executing the full end-to-end ML Pipeline.
 */
import { trainMain } from "./train";
import { evalMain } from "./evaluate";
import { predictAtsScore } from "./predict";
import { predictBaselineScore } from "./baseline";

/**
 * End-to-End Orchestrator.
 * Follows the precise data flow: Train -> Save -> Load -> Evaluate -> Predict.
 */
function main() {
    console.log("🚀 TRIGGERING FULL SYSTEM ORCHESTRATION");
    console.log("------------------------------------------");

    // 1. Training (Fitting)
    console.log("[STAGE 1] Running Training...");
    trainMain();

    // 2. Evaluation (Auditing)
    console.log("[STAGE 2] Running Evaluation...");
    evalMain();

    // 3. Sample Prediction (Serving)
    console.log("[STAGE 3] Running Sample Prediction...");
    const sample = {
        skills: { languages: ["TypeScript"], frontend: ["React"] },
        experience: [{ title: "Developer", description: "Improved performance by 25%." }]
    } as any;
    
    const result = predictAtsScore(sample);
    const baseline = predictBaselineScore(sample);

    console.log(`\nSample Results:`);
    console.log(`- ML ATS Score:   ${result.score} (${result.label})`);
    console.log(`- Baseline Score: ${baseline}`);
    console.log(`- ML Improvement: ${result.score - baseline} pts`);
    console.log("------------------------------------------");
    console.log("🚀 ORCHESTRATION COMPLETE");
}

// Kalvium Requirement: Main function based design with controlled execution
if (require.main === module) {
    main();
}
