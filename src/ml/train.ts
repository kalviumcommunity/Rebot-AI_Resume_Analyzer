/**
 * Kalvium Milestone 5.8: Training & Model Persistence
 * Responsibility: Fitting the "Model" and saving it as an artifact.
 * 
 * In this system, "Training" involves calibrating weights and persisting them to disk.
 */
import fs from "fs";
import { CONFIG } from "./config";

/**
 * Saves the model state to theroot-level 'models/' directory.
 * @param model - Object containing weights and metadata
 */
export function saveModel(model: any) {
    const dir = "models";
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    fs.writeFileSync(CONFIG.MODEL_PATH, JSON.stringify(model, null, 2));
    console.log(`[TRAIN] Model persisted successfully to ${CONFIG.MODEL_PATH}`);
}

/**
 * Orchestrates the Training stage of the ML Lifecycle.
 * Produces the 'ats_model.json' artifact.
 */
function main() {
    console.log("==========================================");
    console.log("   ML PIPELINE: TRAINING STAGE (v1.0)     ");
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
