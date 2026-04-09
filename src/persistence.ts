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
