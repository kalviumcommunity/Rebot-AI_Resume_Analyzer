/**
 * Milestone 5.39: Global ML Configuration
 * Responsibility: Centralized tuning parameters for the REBOT engine.
 */
export const CLASS_WEIGHTS = {
  Good: 1,
  Poor: 2 // Penalize errors on poor resumes 2x more heavily
};

export const THRESHOLDS = {
  STRICT: 0.8,
  BALANCED: 0.5,
  INCLUSIVE: 0.3
};
