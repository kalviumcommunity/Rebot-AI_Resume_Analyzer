/**
 * Kalvium Milestone 5.23: Evaluation Metrics
 * Responsibility: Centralizing statistical error calculations.
 */

/**
 * Calculates Mean Absolute Error (MAE).
 * Formula: Sum(|Actual - Predicted|) / n
 * Result is in the same units as the target variable (ATS Score points).
 */
export function calculateMAE(actual: number[], predicted: number[]): number {
    if (actual.length !== predicted.length) {
        throw new Error("calculateMAE: Inputs must have the same length.");
    }
    if (actual.length === 0) return 0;

    const totalError = actual.reduce((sum, val, i) => {
        return sum + Math.abs(val - (predicted[i] || 0));
    }, 0);

    return totalError / actual.length;
}
