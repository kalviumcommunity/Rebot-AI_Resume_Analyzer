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

/**
 * Calculates Mean Squared Error (MSE).
 * Formula: Sum((Actual - Predicted)^2) / n
 * Penalty is quadratic: Outliers have a higher impact.
 */
export function calculateMSE(actual: number[], predicted: number[]): number {
    if (actual.length !== predicted.length) return 0;
    const totalSquaredError = actual.reduce((sum, val, i) => {
        return sum + Math.pow(val - (predicted[i] || 0), 2);
    }, 0);
    return totalSquaredError / actual.length;
}

/**
 * Calculates Root Mean Squared Error (RMSE).
 * Formula: Sqrt(MSE)
 * Restores units to the original scale (ATS Score points).
 */
export function calculateRMSE(mse: number): number {
    return Math.sqrt(mse);
}

/**
 * Calculates R^2 Score (Coefficient of Determination).
 * Formula: 1 - (SS_res / SS_tot)
 * Measures how much variance is explained relative to a mean baseline.
 */
export function calculateR2(actual: number[], predicted: number[]): number {
    if (actual.length === 0) return 0;
    const mean = actual.reduce((a, b) => a + b, 0) / actual.length;
    
    // Total Sum of Squares (Variance of the baseline)
    const ssTotal = actual.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0);
    
    // Residual Sum of Squares (Variance of the model)
    const ssResidual = actual.reduce((sum, val, i) => {
        return sum + Math.pow(val - (predicted[i] || 0), 2);
    }, 0);

    if (ssTotal === 0) return 0; // Prevent divide by zero
    return 1 - (ssResidual / ssTotal);
}

/**
 * Calculates Accuracy for Classification.
 * Percentage of correct label predictions.
 */
export function calculateAccuracy(actual: number[], predicted: number[]): number {
    if (actual.length !== predicted.length) return 0;
    if (actual.length === 0) return 0;

    let correct = 0;
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] === predicted[i]) correct++;
    }

    return correct / actual.length;
}
