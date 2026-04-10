/**
 * Kalvium Milestone 5.8: Evaluation
 * Responsibility: Rigorously testing current model artifacts against ground truth data.
 */
import fs from "fs";
import { CONFIG } from "./config";
import { predictAtsScore } from "./predict";
import { predictBaselineScore } from "./baseline";
import { loadLinearModel, loadLogisticModel } from "./persistence";
import { predictLinear } from "./ml/linearModel";
import { predictLogistic } from "./ml/logisticModel";
import { evaluateClassification } from "./classificationEval";
import { 
    calculateMAE, calculateMSE, calculateRMSE, calculateR2 
} from "./ml/metrics";
import { extractResumeFeatures } from "./feature_engineering";

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
    
    // Load Linear Model (Milestone 5.22)
    const linearModel = loadLinearModel();
    
    // Load Logistic Model (Milestone 5.25)
    const logisticModel = loadLogisticModel();

    const actuals: number[] = [];
    const rulePreds: number[] = [];
    const linearPreds: number[] = [];
    let correctLabels = 0;

    // Calculate Mean Baseline once for the whole dataset (Milestone 5.21)
    const baselineConstant = predictBaselineScore(dataset);
    const baselinePreds = dataset.map(() => baselineConstant);

    const actualLabels: number[] = [];
    const logisticPreds: number[] = [];

    dataset.forEach((item: any) => {
        const actual = item.actualScore || 70;
        actuals.push(actual);
        
        // Categorical Mapping (Milestone 5.25)
        let label = 0;
        if (actual >= 75) label = 2; // Strong
        else if (actual >= 50) label = 1; // Average
        actualLabels.push(label);

        // 1. Rule-based Prediction
        const rPred = predictAtsScore(item);
        rulePreds.push(rPred.score);

        // 2. Linear Regression Prediction (Milestone 5.22)
        const features = extractResumeFeatures(item);
        const lScore = predictLinear(linearModel, features); 
        linearPreds.push(lScore || 0);

        // 3. Logistic Regression Prediction (Milestone 5.25)
        const logPred = predictLogistic(logisticModel, features);
        logisticPreds.push(logPred);
        
        // Multi-Class Accuracy Stage (Hybrid Evaluation)
        let groundTruthLabel = "Poor";
        if (actual >= 80) groundTruthLabel = "Good";
        else if (actual >= 50) groundTruthLabel = "Average";
        if (rPred.label === groundTruthLabel) correctLabels++;
    });

    const evaluate = (preds: number[]) => ({
        mae: calculateMAE(actuals, preds),
        mse: calculateMSE(actuals, preds),
        rmse: calculateRMSE(calculateMSE(actuals, preds)),
        r2: calculateR2(actuals, preds)
    });

    const classificationDiag = evaluateClassification(actualLabels, logisticPreds, dataset);

    return {
        accuracy: correctLabels / dataset.length,
        baseline: evaluate(baselinePreds),
        rule: evaluate(rulePreds),
        linear: evaluate(linearPreds),
        classification: {
            modelAccuracy: classificationDiag.accModel,
            baselineAccuracy: classificationDiag.accBaseline,
            improvement: classificationDiag.improvement,
            confusionMatrix: classificationDiag.matrix,
            balancedAccuracy: classificationDiag.balAcc
        }
    };
}

/**
 * Performs K-fold cross-validation simulation (Milestone 5.23).
 * Verifies prediction stability across different dataset slices.
 */
export function crossValidate(data: any[], k = 5) {
    if (data.length < k) return 0;
    
    const foldSize = Math.floor(data.length / k);
    let scores: number[] = [];

    for (let i = 0; i < k; i++) {
        const test = data.slice(i * foldSize, (i + 1) * foldSize);
        const train = data.filter((_, idx) => idx < i * foldSize || idx >= (i + 1) * foldSize);

        // Predict Mean of training subset (Baseline Simulation)
        const avg = train.reduce((a, b) => a + (b.actualScore || 70), 0) / train.length;
        const actuals = test.map(d => d.actualScore || 70);
        const preds = test.map(() => avg);

        const mae = calculateMAE(actuals, preds);
        scores.push(mae);
    }

    const meanCVMAE = scores.reduce((a, b) => a + b, 0) / scores.length;
    console.log(`[ML EVAL] Cross-Validation MAE (k=${k}): ${meanCVMAE.toFixed(2)} pts`);
    return meanCVMAE;
}

/**
 * Evaluation Runner for CLI.
 */
function main() {
    console.log("==========================================");
    console.log(`   ML PIPELINE: EVALUATION STAGE (${CONFIG.MODEL_VERSION})  `);
    console.log("==========================================\n");

    try {
        const dataset = loadDataset();
        const report = getEvaluationReport();

        console.log(`Dataset Size:      ${dataset.length} samples`);
        
        const logModel = (name: string, metrics: any) => {
            console.log(`\n📊 ${name}`);
            console.log(`   MAE:  ${metrics.mae.toFixed(2)}`);
            console.log(`   MSE:  ${metrics.mse.toFixed(2)}`);
            console.log(`   RMSE: ${metrics.rmse.toFixed(2)}`);
            console.log(`   R²:   ${metrics.r2.toFixed(3)}`);
        };

        logModel("Baseline (Mean)", report.baseline);
        logModel("Rule-Based Engine", report.rule);
        logModel("Linear Regression", report.linear);

        console.log("\n------------------------------------------");
        console.log("   CLASSIFICATION EVALUATION (Milestone 5.25 - 5.27)");
        console.log(`   Baseline Accuracy: ${(report.classification.baselineAccuracy * 100).toFixed(2)}%`);
        console.log(`   Model Accuracy:    ${(report.classification.modelAccuracy * 100).toFixed(2)}%`);
        console.log(`   Improvement:       ${(report.classification.improvement * 100).toFixed(2)}%`);
        console.log(`   Balanced Accuracy: ${(report.classification.balancedAccuracy * 100).toFixed(2)}%`);

        console.log("\n   Confusion Matrix (Actual \\ Predicted):");
        console.log("             [0]    [1]    [2]   (Predicted)");
        console.log(`   [0] Poor:  ${report.classification.confusionMatrix["0"]["0"]}      ${report.classification.confusionMatrix["0"]["1"]}      ${report.classification.confusionMatrix["0"]["2"]}`);
        console.log(`   [1] Avg:   ${report.classification.confusionMatrix["1"]["0"]}      ${report.classification.confusionMatrix["1"]["1"]}      ${report.classification.confusionMatrix["1"]["2"]}`);
        console.log(`   [2] Strong:${report.classification.confusionMatrix["2"]["0"]}      ${report.classification.confusionMatrix["2"]["1"]}      ${report.classification.confusionMatrix["2"]["2"]}`);
        console.log("   (Actual)\n");
        console.log("   [Detailed per-class diagnostics logged by classificationEval]");

        console.log("------------------------------------------");
        crossValidate(dataset);
        
        if (report.linear.r2 > 0 && report.classification.improvement >= 0) {
            console.log("\n✅ SUCCESS: ML system demonstrates predictive value over baselines.");
        } else {
            console.log("\n❌ CAUTION: System requires further tuning.");
        }

        if (report.accuracy >= 0.8 && report.linear.mae < report.baseline.mae) {
            console.log("STATUS: Production Ready.");
        } else {
            console.log("STATUS: Optimization Required.");
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
