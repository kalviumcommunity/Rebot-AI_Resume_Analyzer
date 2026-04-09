/**
 * Kalvium Milestone 5.8: Prediction & Inference
 * Responsibility: Generating real-time ATS scores using persisted models.
 * 
 * CRITICAL: This module NEVER trains or fits weights. It only CONSUMES.
 */
import fs from "fs";
import { CONFIG } from "./config";
import { extractResumeFeatures, ResumeFeatures } from "./feature_engineering";
import { ResumeData } from "@/types/resumeTypes";

/**
 * Loads the model artifacts from the root-level 'models/' folder.
 * Ensures model reproducibility by relying on saved JSON files.
 * @returns The fitted weights and model metadata
 */
export function loadModel() {
    if (!fs.existsSync(CONFIG.MODEL_PATH)) {
        throw new Error(`Model not found at ${CONFIG.MODEL_PATH}. Run 'npm run ml:train' first.`);
    }
    return JSON.parse(fs.readFileSync(CONFIG.MODEL_PATH, "utf-8"));
}

export interface PredictionResult {
    score: number;
    baselineScore: number;
    label: string;
    confidence: number;
    version: string;
    features: ResumeFeatures;
    featureContributions: { name: string; contribution: number; impact: "positive" | "negative" | "neutral" }[];
}

/**
 * Executes a single inference on provided resume data.
 * Adheres to Traceable Pipeline: Source -> Features -> Loaded Model -> Score.
 */
export function predictAtsScore(data: Partial<ResumeData>): PredictionResult {
    const model = loadModel();
    const features = extractResumeFeatures(data);

    // Scoring logic (using loaded model artifact)
    const weights = model.weights;
    const baselineScore = Math.round(features.keywordDensity * 100);
    
    // Weighted Sum
    const kwScore = (features.keywordDensity * 100) * (weights.keywordDensity / 100);
    const verbScore = (Math.min(features.actionVerbCount, 10) / 10) * weights.actionVerbCount;
    const metricScore = (Math.min(features.metricCount, 5) / 5) * weights.metricCount;
    const skillScore = (Math.min(features.skillsCount, 15) / 15) * weights.skillsCount;
    const expScore = (Math.min(features.experienceYears, 5) / 5) * weights.experienceYears;

    let totalScore = kwScore + verbScore + metricScore + skillScore + expScore;

    // Apply strict penalties for production monitoring
    let lengthPenalty = 0;
    let contactPenalty = 0;
    if (features.resumeLength < 100) lengthPenalty = -15;
    if (!features.hasContactInfo) contactPenalty = -10;
    
    totalScore += (lengthPenalty + contactPenalty);

    const finalScore = Math.max(0, Math.min(100, Math.round(totalScore)));

    return {
        score: finalScore,
        baselineScore: baselineScore,
        label: finalScore >= 70 ? "Good" : "Poor",
        confidence: 0.92,
        version: model.version,
        features,
        featureContributions: [
            { name: "Keywords", contribution: Math.round(kwScore), impact: "positive" },
            { name: "Action Verbs", contribution: Math.round(verbScore), impact: "positive" },
            { name: "Quantifiable Metrics", contribution: Math.round(metricScore), impact: "positive" },
            { name: "Skills Breadth", contribution: Math.round(skillScore), impact: "positive" },
            { name: "Experience Seniority", contribution: Math.round(expScore), impact: "positive" },
            ...(lengthPenalty !== 0 ? [{ name: "Length Penalty", contribution: lengthPenalty, impact: "negative" as const }] : []),
            ...(contactPenalty !== 0 ? [{ name: "Missing Info Penalty", contribution: contactPenalty, impact: "negative" as const }] : [])
        ]
    };
}
