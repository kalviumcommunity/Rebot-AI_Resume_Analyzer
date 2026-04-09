/**
 * ML Pipeline Configuration
 * Centralizes all hyperparameters, dictionaries, and versioning info.
 * This ensures the system is deterministic and easy to tune.
 */
export const CONFIG = {
  MODEL_VERSION: "v1.0",
  MAX_SCORE: 100,
  RANDOM_SEED: 42,
  
  // Feature Engineering Dictionaries
  ACTION_VERBS: [
    "led", "managed", "developed", "built", "created", "designed", "implemented",
    "optimized", "increased", "reduced", "saved", "negotiated", "presented",
    "collaborated", "coordinated", "resolved", "launched", "automated", "mentored"
  ],
  
  TECH_KEYWORDS: [
    "react", "typescript", "javascript", "node", "python", "java", "sql", "aws",
    "docker", "kubernetes", "cloud", "agile", "scrum", "git", "api", "backend",
    "frontend", "fullstack", "machine learning", "ai", "devops", "ci/cd"
  ],

  // Model Parameters (Calibrated Weights)
  WEIGHTS: {
    keywordDensity: 40,
    actionVerbCount: 15,
    metricCount: 20,
    skillsCount: 15,
    experienceYears: 10,
  },

  // Scoring Thresholds
  GOOD_SCORE_THRESHOLD: 70,

  // Monitoring Penalties
  PENALTIES: {
    MIN_LENGTH: 100,
    LENGTH_PENALTY: -15,
    MISSING_CONTACT_PENALTY: -10,
  }
};
