/**
 * Kalvium Milestone 5.8: Evaluation
 * Responsibility: Rigorously testing current model artifacts against ground truth data.
 */
import fs from "fs";
import { CONFIG } from "./config";
import { predictAtsScore } from "./predict";
import { predictBaselineScore } from "./baseline";
import { loadLinearModel } from "./persistence";
import { predictLinear } from "./ml/linearModel";

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
 * Returns the latest system evaluation report.
 * Benchmarks the ML model against a naive baseline on the provided dataset.
 * 
 * @param testDataset - The subset of data Reserved for testing (Milestone 5.16)
 */
export function getEvaluationReport(testDataset?: any[]) {
    // If no dataset provided (legacy support), load full set
    const dataset = testDataset || loadDataset();
    
    let totalAbsoluteError = 0;
    let totalLinearError = 0;
    let correctLabels = 0;

    // Calculate Mean Baseline once for the whole dataset (Milestone 5.21)
    const baselineConstant = predictBaselineScore(dataset);
    
    // Load Linear Model (Milestone 5.22)
    const linearModel = loadLinearModel();

    dataset.forEach((item: any) => {
        // 1. Rule-based Prediction
        const prediction = predictAtsScore(item);
        totalAbsoluteError += Math.abs(prediction.score - item.actualScore);

        // 2. Linear Regression Prediction (Milestone 5.22)
        // We reuse predictAtsScore's pre-extracted features if possible, 
        // but for pure evaluation we can extracted them fresh for the linear model
        const lScore = predictLinear(linearModel, item.features || {}); 
        totalLinearError += Math.abs((lScore || 0) - item.actualScore);
        
        // Multi-Class Accuracy Stage (Hybrid Evaluation)
        // We calculate what the correct label SHOULD be based on the ground truth score
        let groundTruthLabel = "Poor";
        if (item.actualScore >= 80) groundTruthLabel = "Good";
        else if (item.actualScore >= 50) groundTruthLabel = "Average";

        if (prediction.label === groundTruthLabel) correctLabels++;
    });

    const mae = totalAbsoluteError / dataset.length;
    const lMae = totalLinearError / dataset.length;
    
    // Calculate Baseline MAE (Milestone 5.21)
    const baselineMAE = dataset.reduce((sum: number, item: any) => 
        sum + Math.abs(item.actualScore - baselineConstant), 0) / dataset.length;

    return {
        accuracy: correctLabels / dataset.length,
        meanAbsoluteError: mae,
        baselineMAE: baselineMAE,
        linearMAE: lMae,
        maeReduction: baselineMAE - lMae
    };
}

/**
 * Evaluation Runner for CLI.
 * Prints detailed metrics: MAE, Baseline comparison, and MAE Reduction.
 */
function main() {
    console.log("==========================================");
    console.log(`   ML PIPELINE: EVALUATION STAGE (${CONFIG.MODEL_VERSION})  `);
    console.log("==========================================\n");

    try {
        const report = getEvaluationReport();

        console.log(`Dataset Size:      ${loadDataset().length} samples`);
        console.log(`Baseline MAE:      ${report.baselineMAE.toFixed(2)} pts`);
        console.log(`Rule-based MAE:    ${report.meanAbsoluteError.toFixed(2)} pts`);
        console.log(`Linear Regr MAE:   ${report.linearMAE.toFixed(2)} pts`);
        console.log(`MAE Reduction:     ${report.maeReduction.toFixed(2)} pts (Lower is better)`);
        console.log(`Accuracy:          ${(report.accuracy * 100).toFixed(2)}%`);

        console.log("\n------------------------------------------");
        if (report.accuracy >= 0.8 && report.maeReduction > 5) {
            console.log("STATUS: SUCCESS - ML Model significantly outperforms baseline.");
        } else {
            console.log("STATUS: CAUTION - Model performance gap is small.");
        }
        console.log("==========================================\n");
    } catch (error) {
        console.error("Evaluation failed:", error);
        process.exit(1);
    }
}

// Entry point enforcement
if (require.main === module) {
    main();
}

export { main as evalMain };
