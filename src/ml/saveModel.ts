/**
 * Milestone 5.43: Model Saving System
 * Responsibility: Persisting trained model weights and thresholds to disk.
 */
import fs from "fs";
import path from "path";

export function saveModel(model: any, filename: string = "ats_model.json") {
  const modelsDir = path.join(process.cwd(), "models");

  // Ensure directory exists
  if (!fs.existsSync(modelsDir)) {
    fs.mkdirSync(modelsDir);
  }

  const filePath = path.join(modelsDir, filename);

  try {
    fs.writeFileSync(filePath, JSON.stringify(model, null, 2));
    console.log(`✅ Model successfully saved at: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to save model: ${error}`);
    return false;
  }
}
