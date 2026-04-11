/**
 * Kalvium Milestone 5.11: Root Orchestrator
 * Responsibility: Executing the full end-to-end ML Pipeline.
 */
import { trainMain } from "./src/train";
import { evalMain } from "./src/evaluate";
import { predictAtsScore } from "./src/predict";

/**
 * End-to-End Orchestrator.
 * Follows the precise data flow: Train -> Save -> Load -> Evaluate -> Predict.
 */
function main() {
    console.log("🚀 TRIGGERING FULL SYSTEM ORCHESTRATION (Milestone 5.11)");
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
    
    // Milestone 5.36: Pipeline Integration
    console.log("[STAGE 4] Testing Production Pipeline (Milestone 5.36)...");
    const { buildPipeline, runPipeline, fitPipeline, savePipeline, loadPipeline } = require("./src/ml/pipeline");
    
    // 1. Build & Fit (Fit ONLY on training data to prevent leakage)
    let pipeline = buildPipeline("decision-tree");
    pipeline = fitPipeline(pipeline, [sample, sample]); // In real case, use train data
    
    // 2. Save for later deployment
    savePipeline(pipeline, "pipeline.json");
    
    // 3. Inference using Pipeline
    const loadedPipeline = loadPipeline("pipeline.json");
    const pipelineResult = runPipeline(loadedPipeline, sample);
    
    const result = predictAtsScore(sample);
    console.log(`\nSample Results:`);
    console.log(`- ML ATS Score:      ${result.score} (${result.label})`);
    console.log(`- Pipeline Prediction: ${pipelineResult} (0:Poor, 1:Average, 2:Strong)`);
    console.log("------------------------------------------");
    console.log("🚀 ORCHESTRATION COMPLETE");
}

// Kalvium Requirement: Main function based design with controlled execution
if (require.main === module) {
    main();
}
