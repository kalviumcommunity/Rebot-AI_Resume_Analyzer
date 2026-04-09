import { ResumeFeatures } from "../feature_engineering/extractor";
import { loadModel } from "./loadModel";
import { CONFIG } from "../config";

/**
 * Result of a model prediction.
 */
export interface PredictionResult {
  score: number;
  baselineScore: number;
  label: "Good" | "Poor";
  confidence: number;
  version: string;
  featureContributions: {
    name: string;
    contribution: number;
    impact: "positive" | "negative" | "neutral";
  }[];
}

/**
 * Supervised Learning Inference Engine.
 * Calibrates features into a final ATS score using loaded weights.
 * 
 * @param features - The vector of engineered features.
 * @returns A detailed prediction result including impact factors.
 */
export function predictAtsScore(features: ResumeFeatures): PredictionResult {
  const { weights, metadata } = loadModel();

  // 0. Baseline Calculation (Naive Keyword Match)
  const baselineScore = Math.round(features.keywordDensity * 100);

  // Base Scatters
  let rawScore = 0;
  
  // 1. Keyword Contribution
  const kwContrib = Math.min(features.keywordDensity * 100, 100) * (weights.keywordDensity / 100);
  
  // 2. Action Verbs
  const verbContrib = (Math.min(features.actionVerbCount, 10) / 10) * weights.actionVerbCount;
  
  // 3. Metrics
  const metricContrib = (Math.min(features.metricCount, 5) / 5) * weights.metricCount;
  
  // 4. Skills
  const skillContrib = (Math.min(features.skillsCount, 15) / 15) * weights.skillsCount;
  
  // 5. Experience
  const expContrib = (Math.min(features.experienceYears, 5) / 5) * weights.experienceYears;

  rawScore = kwContrib + verbContrib + metricContrib + skillContrib + expContrib;

  // Penalties (Monitoring stage signals)
  let lengthPenalty = 0;
  let contactPenalty = 0;

  if (features.resumeLength < CONFIG.PENALTIES.MIN_LENGTH) {
    lengthPenalty = CONFIG.PENALTIES.LENGTH_PENALTY;
    rawScore += lengthPenalty;
  }
  if (!features.hasContactInfo) {
    contactPenalty = CONFIG.PENALTIES.MISSING_CONTACT_PENALTY;
    rawScore += contactPenalty;
  }

  const finalScore = Math.max(0, Math.min(CONFIG.MAX_SCORE, Math.round(rawScore)));

  return {
    score: finalScore,
    baselineScore: baselineScore,
    label: finalScore >= metadata.thresholds.good ? "Good" : "Poor",
    confidence: 0.92,
    version: metadata.version,
    featureContributions: [
      { name: "Keywords", contribution: Math.round(kwContrib), impact: "positive" },
      { name: "Action Verbs", contribution: Math.round(verbContrib), impact: "positive" },
      { name: "Quantifiable Metrics", contribution: Math.round(metricContrib), impact: "positive" },
      { name: "Skills Breadth", contribution: Math.round(skillContrib), impact: "positive" },
      { name: "Experience Seniority", contribution: Math.round(expContrib), impact: "positive" },
      ...(lengthPenalty !== 0 ? [{ name: "Length Penalty", contribution: lengthPenalty, impact: "negative" as const }] : []),
      ...(contactPenalty !== 0 ? [{ name: "Missing Info Penalty", contribution: contactPenalty, impact: "negative" as const }] : [])
    ]
  };
}
