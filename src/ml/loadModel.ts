/**
 * Milestone 5.43: Model Loading System
 * Responsibility: Reconstructing trained models from disk for instant inference.
 */
import fs from "fs";
import path from "path";

export function loadModel(filename: string = "ats_model.json") {
  const filePath = path.join(process.cwd(), "models", filename);

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Model file not found: ${filePath}`);
    return null;
  }

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const model = JSON.parse(data);
    console.log(`✅ Model loaded successfully from: ${filename}`);
    return model;
  } catch (error) {
    console.error(`❌ Failed to load model: ${error}`);
    return null;
  }
}
