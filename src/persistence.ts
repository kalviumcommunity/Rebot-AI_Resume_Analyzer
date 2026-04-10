/**
 * Kalvium Milestone 5.11: Persistence Layer
 * Responsibility: Centralizing saving and loading of ML artifacts.
 */
import fs from "fs";
import { CONFIG } from "./config";

/**
 * Saves a model artifact to the persistent storage.
 * @param model - The model weight object and metadata.
 */
export function saveModel(model: any) {
    if (!fs.existsSync("models")) {
        fs.mkdirSync("models");
    }
    fs.writeFileSync(CONFIG.MODEL_PATH, JSON.stringify(model, null, 2));
    console.log(`[PERSISTENCE] Model artifact saved to: ${CONFIG.MODEL_PATH}`);
}

/**
 * Loads a model artifact from persistent storage.
 * @returns The deserialized model object.
 */
export function loadModel() {
    if (!fs.existsSync(CONFIG.MODEL_PATH)) {
        throw new Error(`Model artifact missing at ${CONFIG.MODEL_PATH}. Run training first.`);
    }
    return JSON.parse(fs.readFileSync(CONFIG.MODEL_PATH, "utf-8"));
}

/**
 * Saves the fitted scaler artifact (Means and Stds).
 */
export function saveScaler(scaler: any) {
    const scalerPath = CONFIG.MODEL_PATH.replace("ats_model.json", "scaler.json");
    fs.writeFileSync(scalerPath, JSON.stringify(scaler, null, 2));
    console.log(`[PERSISTENCE] Scaler artifact saved to: ${scalerPath}`);
}

/**
 * Loads the fitted scaler artifact for inference.
 */
export function loadScaler() {
    const scalerPath = CONFIG.MODEL_PATH.replace("ats_model.json", "scaler.json");
    if (!fs.existsSync(scalerPath)) {
        throw new Error(`Scaler artifact missing at ${scalerPath}. Run training first.`);
    }
    return JSON.parse(fs.readFileSync(scalerPath, "utf-8"));
}

/**
 * Saves the fitted MinMaxScaler artifact.
 */
export function saveMinMax(scaler: any) {
    const scalerPath = CONFIG.MODEL_PATH.replace("ats_model.json", "minmax_scaler.json");
    fs.writeFileSync(scalerPath, JSON.stringify(scaler, null, 2));
    console.log(`[PERSISTENCE] MinMax Scaler artifact saved to: ${scalerPath}`);
}

/**
 * Loads the fitted MinMaxScaler artifact for inference.
 */
export function loadMinMax() {
    const scalerPath = CONFIG.MODEL_PATH.replace("ats_model.json", "minmax_scaler.json");
    if (!fs.existsSync(scalerPath)) {
        throw new Error(`MinMax Scaler artifact missing at ${scalerPath}. Run training first.`);
    }
    return JSON.parse(fs.readFileSync(scalerPath, "utf-8"));
}

/**
 * Saves the learned Linear Regression model.
 */
export function saveLinearModel(model: any) {
    const modelPath = CONFIG.MODEL_PATH.replace("ats_model.json", "linear_model.json");
    fs.writeFileSync(modelPath, JSON.stringify(model, null, 2));
    console.log(`[PERSISTENCE] Linear Model artifact saved to: ${modelPath}`);
}

/**
 * Loads the learned Linear Regression model for inference.
 */
export function loadLinearModel() {
    const modelPath = CONFIG.MODEL_PATH.replace("ats_model.json", "linear_model.json");
    if (!fs.existsSync(modelPath)) {
        throw new Error(`Linear Model artifact missing at ${modelPath}. Run training first.`);
    }
    return JSON.parse(fs.readFileSync(modelPath, "utf-8"));
}
