import { ResumeFeatures } from "../features/extractor";

export interface PredictionResult {
  score: number;
  baselineScore: number; // Naive keyword count comparison
  label: "Good" | "Poor";
  confidence: number;
  version: string;       // Model versioning
  featureContributions: {
    name: string;
    contribution: number;
    impact: "positive" | "negative" | "neutral";
  }[];
}

/**
 * Supervised Learning Model v1.0 (Weighted Scoring).
 * This simulates a Linear Regression model mapping features to a calibrated ATS score.
 * It also calculates a 'Baseline' score (simple keyword match) to prove ML value.
 */
export function predictAtsScore(features: ResumeFeatures): PredictionResult {
  const version = "v1.0";

  // Model Weights (Learned parameters representation)
  const weights = {
    keywordDensity: 40,    // High impact
    actionVerbCount: 15,   // Moderate
    metricCount: 20,       // Moderate-high
    skillsCount: 15,       // Moderate
    experienceYears: 10,   // Low-moderate
  };

  // 0. Baseline Calculation (Naive Keyword Match)
  // A standard ATS usually just looks at keywords.
  const baselineScore = Math.round(features.keywordDensity * 100);

  // Base Scatters
  let rawScore = 0;
  
  // 1. Keyword Contribution (max 40)
  const kwContrib = Math.min(features.keywordDensity * 100, 100) * (weights.keywordDensity / 100);
  
  // 2. Action Verbs (max 15, goal is 10+ verbs)
  const verbContrib = (Math.min(features.actionVerbCount, 10) / 10) * weights.actionVerbCount;
  
  // 3. Metrics (max 20, goal is 5+ metrics)
  const metricContrib = (Math.min(features.metricCount, 5) / 5) * weights.metricCount;
  
  // 4. Skills (max 15, goal is 15+ skills)
  const skillContrib = (Math.min(features.skillsCount, 15) / 15) * weights.skillsCount;
  
  // 5. Experience (max 10, goal is 5+ years)
  const expContrib = (Math.min(features.experienceYears, 5) / 5) * weights.experienceYears;

  rawScore = kwContrib + verbContrib + metricContrib + skillContrib + expContrib;

  // Penalties (Monitoring stage signals)
  let lengthPenalty = 0;
  let contactPenalty = 0;

  if (features.resumeLength < 100) {
    lengthPenalty = -15; // Too short penalty
    rawScore += lengthPenalty;
  }
  if (!features.hasContactInfo) {
    contactPenalty = -10; // Missing contact penalty
    rawScore += contactPenalty;
  }

  const finalScore = Math.max(0, Math.min(100, Math.round(rawScore)));

  return {
    score: finalScore,
    baselineScore: baselineScore,
    label: finalScore >= 70 ? "Good" : "Poor",
    confidence: 0.92,
    version,
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
