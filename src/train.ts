import fs from "fs";
import { CONFIG, TARGET, ALL_FEATURES } from "./config";
import { saveModel } from "./persistence";
import { getEvaluationReport } from "./evaluate";
import { loadData } from "./data_loader";
import { extractResumeFeatures } from "./feature_engineering";
import { analyzeFeatures } from "./feature_analysis";
import { trainTestSplit } from "./split";

/**
 * Orchestrates the Training stage of the ML Lifecycle.
 * Adheres to 5.16: Train-Test Split & Evaluation Purity.
 */
function main() {
    console.log("==========================================");
    console.log(`   ML PIPELINE: TRAINING STAGE (${CONFIG.MODEL_VERSION})  `);
    console.log("==========================================\n");

    try {
        // 1. Data Loading 
        console.log("[STAGE 1] Loading Raw Data...");
        const rawData = loadData(CONFIG.DATA_PATH);
        
        // 2. Train-Test Split (Milestone 5.16)
        console.log("[STAGE 2] Performing Train-Test Split (80/20)...");
        const { train, test } = trainTestSplit(rawData, 0.2, CONFIG.RANDOM_SEED);

        // 3. Feature Extraction & Analysis (Training Set ONLY)
        console.log("[STAGE 3] Extracting Features for Training Set Audit...");
        const trainFeatures = train.map((item: any) => extractResumeFeatures(item));

        // 4. Feature Distribution Inspection (Milestone 5.15)
        analyzeFeatures(trainFeatures);

        // 5. Feature & Target Separation (Milestone 5.14)
        console.log("[STAGE 4] Separating Features (X) and Target (y)...");
        const X = ALL_FEATURES; 
        const y = TARGET;       

        // 6. Strict Data Leakage Validation
        console.log("[STAGE 5] Validating Feature Integrity (No Leakage)...");
        if (X.includes(y)) {
            throw new Error(`CRITICAL ERROR: Data Leakage Detected! Target '${y}' is present in the feature list.`);
        }
        console.log(`[STAGE 5] Validation Passed: ${X.length} features, 0 leakage.`);

        // 7. Model Fitting 
        const model = {
            version: CONFIG.MODEL_VERSION,
            type: "WeightedScoringEngine",
            calibratedAt: new Date().toISOString(),
            weights: CONFIG.WEIGHTS,
        };

        console.log("[STAGE 6] Fitting model to configuration...");
        saveModel(model);

        // 8. Generate Evaluation Report (Milestone 5.16 - On Test Set Only)
        console.log("Generating Evaluation Report (Reserved Test Set)...");
        const report = getEvaluationReport(test);
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
