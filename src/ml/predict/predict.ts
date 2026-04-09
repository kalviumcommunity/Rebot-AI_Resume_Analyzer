import { cleanText } from "../preprocessing/cleanText";
import { extractFeatures, ResumeFeatures } from "../feature_engineering/extractor";
import { predictAtsScore, PredictionResult } from "../model/atsModel";
import { ResumeData } from "@/types/resumeTypes";

/**
 * Orchestration Result.
 */
export interface PipelineResult {
  score: number;
  baselineScore: number;
  label: string;
  confidence: number;
  version: string;
  features: ResumeFeatures;
  prediction: PredictionResult;
}

/**
 * Executes the full End-to-End ML Pipeline.
 * Traceable Flow: Raw Data -> Preprocessing -> Feature Engineering -> Inference.
 * 
 * @param resumeData - The structured resume data from the frontend.
 * @returns The final prediction result and the generated features.
 */
export function runPrediction(resumeData: Partial<ResumeData>): PipelineResult {
  // 1. Preprocessing (Data Cleaning)
  const rawText = JSON.stringify(resumeData);
  const cleanedText = cleanText(rawText);

  // 2. Feature Engineering
  const features = extractFeatures(resumeData, cleanedText);

  // 3. Model Inference (Prediction)
  const prediction = predictAtsScore(features);

  return {
    score: prediction.score,
    baselineScore: prediction.baselineScore,
    label: prediction.label,
    confidence: prediction.confidence,
    version: prediction.version,
    features,
    prediction
  };
}
