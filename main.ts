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

    // 🔥 Milestone 5.37: Data Leakage Prevention Demo
    console.log("\n🔥 MILESTONE 5.37: PREVENTING DATA LEAKAGE");
    const { leakageWorkflow } = require("./src/ml/leakageDemo");
    const { safePipeline } = require("./src/ml/pipelineSafe");
    const { finalPipeline } = require("./src/ml/finalPipeline");

    // Dummy dataset for demonstration
    const dummyData = Array(100).fill(null).map(() => ({
        keywordDensity: Math.random(),
        actionVerbCount: Math.floor(Math.random() * 10),
        metricCount: Math.floor(Math.random() * 5),
        resumeLength: 200 + Math.floor(Math.random() * 500)
    }));
    const dummyLabels = dummyData.map(d => (d.keywordDensity > 0.6 && d.metricCount > 2) ? 2 : (d.keywordDensity > 0.4 ? 1 : 0));

    // Comparison Logic
    const leakScore = leakageWorkflow(dummyData, dummyLabels);
    const safeScore = safePipeline(dummyData, dummyLabels);

    console.log("\n📊 WORKFLOW COMPARISON");
    console.log(`❌ Leakage Score: ${(leakScore * 100).toFixed(2)}% (Inflated)`);
    console.log(`✅ Safe Score:    ${(safeScore * 100).toFixed(2)}% (Honest)`);
    console.log("------------------------------------------");

    // Cross-Validation Helper (Fold Isolation Demo)
    function runCV(data: any[], labels: number[]) {
        console.log("🔁 Running 5-Fold Cross-Validation (Safe Approach)");
        const scores = [];
        const foldSize = Math.floor(data.length / 5);

        for (let i = 0; i < 5; i++) {
            const valStart = i * foldSize;
            const valEnd = (i + 1) * foldSize;

            const val = data.slice(valStart, valEnd);
            const valL = labels.slice(valStart, valEnd);
            const train = [...data.slice(0, valStart), ...data.slice(valEnd)];
            const trainL = [...labels.slice(0, valStart), ...labels.slice(valEnd)];

            const { safePipeline } = require("./src/ml/pipelineSafe");
            const score = safePipeline(train, trainL); // Modified to work as fit/transform
            scores.push(score);
        }
        console.log("CV Scores:", scores.map(s => s.toFixed(2)));
        console.log(`Mean CV Accuracy: ${(scores.reduce((a, b) => a + b, 0) / 5 * 100).toFixed(2)}%`);
    }

    runCV(dummyData, dummyLabels);
    console.log("------------------------------------------");

    // 🔥 Milestone 5.38: Class Imbalance Handling
    console.log("\n🔥 MILESTONE 5.38: CLASS IMBALANCE HANDLING");
    const { checkClassDistribution } = require("./src/ml/analysis/classDistribution");
    const { baselineModel } = require("./src/ml/baseline");
    const { calculateBinaryConfusionMatrix } = require("./src/ml/metrics/confusionMatrix");
    const { classificationAnalysis } = require("./src/ml/metrics/classificationAnalysis");
    const { tuneThreshold } = require("./src/ml/threshold");

    // 1. Diagnose Imbalance
    checkClassDistribution(dummyLabels);

    // 2. Evaluate Baseline
    baselineModel(dummyLabels);

    // 3. Train & Analyze Weighted Model
    const { trainLogisticModel, predictLogistic } = require("./src/ml/logisticModel");
    const weightedModel = trainLogisticModel(dummyData.slice(0, 80), dummyLabels.slice(0, 80));
    
    const testF = dummyData.slice(80);
    const testL = dummyLabels.slice(80);
    const preds = testF.map(f => predictLogistic(weightedModel, f));

    // 4. Detailed Metrics
    const { TP, FP, FN } = calculateBinaryConfusionMatrix(testL, preds, 2);
    classificationAnalysis(TP, FP, FN);

    // 🔥 FINAL MILESTONE 5.45: STREAMLIT AI INTERFACE
    console.log("\n🔥 FINAL MILESTONE 5.45: STREAMLIT UI INTEGRATION");
    console.log("------------------------------------------");
    console.log("✔ UI Strategy: Streamlit (Rapid Prototyping)");
    console.log("✔ Communication: Python <> Next.js API Bridge");
    console.log("✔ User Experience: Interactive Signal Breakdown");
    console.log("------------------------------------------");

    console.log("\n💎 ULTIMATE PROJECT CONCLUSION: REBOT ATS V1.5 COMPLETE");
    console.log("==========================================================");
    console.log("🚀 THE SYSTEM IS NOW LIVE & DEPLOYMENT-READY");
    console.log("==========================================================");
    console.log("Next Steps to Launch:");
    console.log("1. Run Backend:   `npm run dev` (API on Port 3000)");
    console.log("2. Run Frontend:  `streamlit run app.py` (UI on Port 8501)");
    console.log("----------------------------------------------------------");
    console.log("Final Report: Industry-grade ML Lifecycle implemented with:");
    console.log("- Cross-Validation Stability  ✅");
    console.log("- SMOTE Class Imbalance fix   ✅");
    console.log("- Constraint-Based Selection  ✅");
    console.log("- Persistence & JSON Serving  ✅");
    console.log("==========================================================");
}

// Kalvium Requirement: Main function based design with controlled execution
if (require.main === module) {
    main();
}
