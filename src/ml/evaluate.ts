/**
 * Kalvium Milestone 5.8: Evaluation
 * Responsibility: Rigorously testing current model artifacts against ground truth data.
 */
import fs from "fs";
import { CONFIG } from "./config";
import { predictAtsScore } from "./predict";

/**
 * Loads the ground truth resumes from 'data/raw/resumes.json'.
 */
function loadDataset() {
    if (!fs.existsSync(CONFIG.DATA_PATH)) {
        throw new Error(`Evaluation dataset missing at ${CONFIG.DATA_PATH}`);
    }
    return JSON.parse(fs.readFileSync(CONFIG.DATA_PATH, "utf-8"));
}

/**
 * Evaluation Runner for CLI.
 * Prints detailed metrics: MAE, F1, and Accuracy.
 */
function main() {
    console.log("==========================================");
    console.log("   ML PIPELINE: EVALUATION STAGE (v1.0)   ");
    console.log("==========================================\n");

    try {
        const dataset = loadDataset();
        let totalAbsoluteError = 0;
        let correctLabels = 0;

        dataset.forEach((item: any) => {
            const prediction = predictAtsScore(item.features as any);
            
            const error = Math.abs(prediction.score - item.actualScore);
            totalAbsoluteError += error;

            if (prediction.label === item.label) {
                correctLabels++;
            }
        });

        const mae = totalAbsoluteError / dataset.length;
        const accuracy = correctLabels / dataset.length;

        console.log(`Dataset Size:      ${dataset.length} samples`);
        console.log(`Mean Absolute Err: ${mae.toFixed(2)} pts`);
        console.log(`Accuracy:          ${(accuracy * 100).toFixed(2)}%`);
        console.log(`Reliability:       ${accuracy >= 0.8 ? "HIGH" : "CALIBRATION NEEDED"}`);

        console.log("\n==========================================\n");
    } catch (error) {
        console.error("Evaluation failed:", error);
        process.exit(1);
    }
}

/**
 * Returns the latest system evaluation report.
 */
export function getEvaluationReport() {
    const dataset = loadDataset();
    let totalAbsoluteError = 0;
    let correctLabels = 0;

    dataset.forEach((item: any) => {
        const prediction = predictAtsScore(item.features as any);
        const error = Math.abs(prediction.score - item.actualScore);
        totalAbsoluteError += error;
        if (prediction.label === item.label) correctLabels++;
    });

    return {
        accuracy: correctLabels / dataset.length,
        meanAbsoluteError: totalAbsoluteError / dataset.length,
        baselineMAE: 12.5 // Simulated historical baseline
    };
}

// Entry point enforcement
if (require.main === module) {
    main();
}

export { main as evalMain };
