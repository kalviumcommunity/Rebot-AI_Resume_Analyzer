import { ResumeFeatures } from "../features/extractor";

export interface PredictionResult {
  score: number;
  label: "Good" | "Poor";
  confidence: number;
  featureContributions: {
    name: string;
    contribution: number;
  }[];
}

/**
 * Supervised Learning Model (Weighted Scoring).
 * This simulates a Linear Regression model mapping features to a calibrated ATS score.
 */
export function predictAtsScore(features: ResumeFeatures): PredictionResult {
  // Model Weights (Learned parameters representation)
  const weights = {
    keywordDensity: 40,    // High impact
    actionVerbCount: 15,   // Moderate
    metricCount: 20,       // Moderate-high
    skillsCount: 15,       // Moderate
    experienceYears: 10,   // Low-moderate
  };

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
  if (features.resumeLength < 100) rawScore *= 0.7; // Too short
  if (!features.hasContactInfo) rawScore -= 10;    // Missing contact

  const finalScore = Math.max(0, Math.min(100, Math.round(rawScore)));

  return {
    score: finalScore,
    label: finalScore >= 70 ? "Good" : "Poor",
    confidence: 0.92, // Simulated model confidence
    featureContributions: [
      { name: "Keywords", contribution: Math.round(kwContrib) },
      { name: "Action Verbs", contribution: Math.round(verbContrib) },
      { name: "Quantifiable Metrics", contribution: Math.round(metricContrib) },
      { name: "Skills Breadth", contribution: Math.round(skillContrib) },
      { name: "Experience Seniority", contribution: Math.round(expContrib) }
    ]
  };
}
