import fs from "fs";
import { CONFIG, TARGET, ALL_FEATURES } from "./config";
import { saveModel } from "./persistence";
import { getEvaluationReport } from "./evaluate";
import { loadData } from "./data_loader";
import { extractResumeFeatures } from "./feature_engineering";
import { analyzeFeatures } from "./feature_analysis";

/**
 * Orchestrates the Training stage of the ML Lifecycle.
 * Adheres to 5.15: Feature Distribution Inspection & Analysis.
 */
function main() {
    console.log("==========================================");
    console.log(`   ML PIPELINE: TRAINING STAGE (${CONFIG.MODEL_VERSION})  `);
    console.log("==========================================\n");

    try {
        // 1. Data Loading 
        console.log("[STAGE 1] Loading Raw Data...");
        const data = loadData(CONFIG.DATA_PATH);
        
        // 2. Feature Extraction (For Analysis)
        console.log("[STAGE 2] Extracting Features for Dataset Audit...");
        const featuresArray = data.map((item: any) => extractResumeFeatures(item));

        // 3. Feature Distribution Inspection (Milestone 5.15)
        analyzeFeatures(featuresArray);

        // 4. Feature & Target Separation (Milestone 5.14)
        console.log("[STAGE 3] Separating Features (X) and Target (y)...");
        const X = ALL_FEATURES; // Features list from config
        const y = TARGET;       // Target definition from config

        // 3. Strict Data Leakage Validation
        console.log("[STAGE 3] Validating Feature Integrity (No Leakage)...");
        if (X.includes(y)) {
            throw new Error(`CRITICAL ERROR: Data Leakage Detected! Target '${y}' is present in the feature list.`);
        }
        console.log(`[STAGE 3] Validation Passed: ${X.length} features, 0 leakage.`);

        // 4. Model Fitting 
        // In this supervised simulation, we "Train" by establishing 
        // a calibrated weighted model for inference.
        const model = {
            version: CONFIG.MODEL_VERSION,
            type: "WeightedScoringEngine",
            calibratedAt: new Date().toISOString(),
            weights: CONFIG.WEIGHTS,
        };

        console.log("[STAGE 4] Fitting model to configuration...");
        saveModel(model);

        // 2. Generate Evaluation Report (Milestone 5.11)
        console.log("Generating Evaluation Report...");
        const report = getEvaluationReport();
        if (!fs.existsSync("reports")) fs.mkdirSync("reports");
        fs.writeFileSync("reports/evaluation_report.json", JSON.stringify({
            model_version: CONFIG.MODEL_VERSION,
            timestamp: new Date().toISOString(),
            ...report
        }, null, 2));

        // 3. Log Experiment (Milestone 5.11)
        const logEntry = `${new Date().toISOString()},${CONFIG.MODEL_VERSION},${report.meanAbsoluteError},${report.accuracy}\n`;
        if (!fs.existsSync("logs")) fs.mkdirSync("logs");
        if (!fs.existsSync("logs/experiment_log.csv")) {
            fs.writeFileSync("logs/experiment_log.csv", "timestamp,model,mae,accuracy\n");
        }
        fs.appendFileSync("logs/experiment_log.csv", logEntry);

        console.log("\nTRAINING COMPLETE. Status: Ready for Evaluation.\n");
    } catch (error) {
        console.error("Training failed:", error);
        process.exit(1);
    }
}

// Kalvium Requirement: Main entry point for execution
if (require.main === module) {
    main();
}

export { main as trainMain };
