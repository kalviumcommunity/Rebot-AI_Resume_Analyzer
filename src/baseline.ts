/**
 * Kalvium Milestone 5.21: Baseline Model
 * Responsibility: Providing a naive statistical reference point for regression.
 * 
 * Standard Regression Baseline: Predict the Mean ATS score of the training set.
 */
export function predictBaselineScore(data: any[]): number {
    if (!data || data.length === 0) return 70; // Default fallback

    const scores = data.map(d => d.actualScore || 70);
    const mean = scores.reduce((a, b) => a + b, 0) / scores.length;

    return mean;
}
