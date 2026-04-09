/**
 * Kalvium Milestone 5.8 & 5.11: Training & Model Persistence
 * Responsibility: Fitting the "Model", saving artifacts, and logging experiments.
 */
import fs from "fs";
import { CONFIG } from "./config";
import { saveModel } from "./persistence";
import { getEvaluationReport } from "./evaluate";

/**
 * Orchestrates the Training stage of the ML Lifecycle.
 * Adheres to 5.11: Outputs artifacts to models/, reports to reports/, logs to logs/.
 */
function main() {
    console.log("==========================================");
    console.log(`   ML PIPELINE: TRAINING STAGE (${CONFIG.MODEL_VERSION})  `);
    console.log("==========================================\n");

    try {
        // In this supervised simulation, we "Train" by establishing 
        // a calibrated weighted model for inference.
        const model = {
            version: CONFIG.MODEL_VERSION,
            type: "WeightedScoringEngine",
            calibratedAt: new Date().toISOString(),
            weights: CONFIG.WEIGHTS,
        };

        console.log("Fitting model to configuration...");
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
