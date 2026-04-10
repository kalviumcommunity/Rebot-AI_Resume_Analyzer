/**
 * Kalvium ML Sprint 5.8 Configuration
 * Centralizes all hyperparameters, file paths, and versioning.
 * Uses root-level paths for Data and Model persistence.
 */
import path from "path";

// In a real project, we'd use process.cwd() or relative pathing that works in both dev/prod
const ROOT = process.cwd();

export const CONFIG = {
  MODEL_VERSION: "v1.0",
  MAX_SCORE: 100,
  RANDOM_SEED: 42,
  
  // Data & Model Paths (Root Level)
  DATA_PATH: path.join(ROOT, "data/raw/resumes.json"),
  MODEL_PATH: path.join(ROOT, "models/ats_model.json"),

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

  // Calibrated Weights
  WEIGHTS: {
    keywordDensity: 40,
    actionVerbCount: 15,
    metricCount: 20,
    skillsCount: 15,
    experienceYears: 10,
  },

  GOOD_SCORE_THRESHOLD: 70,

  // Calibration Penalties
  PENALTIES: {
    MIN_LENGTH: 100,
    LENGTH_PENALTY: -15,
    MISSING_CONTACT_PENALTY: -10,
  }
};

/**
 * Kalvium Milestone 5.14 & 5.18: Feature & Target Definitions
 */
export const TARGET = "ats_score";

export const NUMERICAL_FEATURES = [
  "keywordDensity",
  "actionVerbCount",
  "metricCount",
  "skillsCount",
  "experienceYears"
];

export const CATEGORICAL_FEATURES = [
  "seniorityLevel"
];

export const ALL_FEATURES = [
  ...NUMERICAL_FEATURES,
  ...CATEGORICAL_FEATURES
];

// Structural Integrity Check (Milestone 5.18)
if (NUMERICAL_FEATURES.includes(TARGET) || CATEGORICAL_FEATURES.includes(TARGET)) {
  throw new Error("ARCHITECTURAL ERROR: Target variable cannot be listed as a predictive feature.");
}

/**
 * Columns formally excluded from the predictive model.
 */
export const EXCLUDED = [
  "rawText", // Source data, converted into features.
  "userId",  // Identifier, carries no predictive signal.
  "id"       // Row identifier, risk of overfitting.
];
