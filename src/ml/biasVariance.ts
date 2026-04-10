/**
 * Kalvium Milestone 5.31: Bias vs Variance Analysis
 * Responsibility: Diagnosing model behavior and generalization capacity.
 */

/**
 * Diagnoses the model based on Training and Testing accuracy.
 */
export function diagnoseBiasVariance(trainAcc: number, testAcc: number): string {
    const gap = trainAcc - testAcc;

    if (trainAcc < 0.7 && testAcc < 0.7) {
        return "⚠️ High Bias (Underfitting)";
    }

    if (gap > 0.15) {
        return "⚠️ High Variance (Overfitting)";
    }

    return "✅ Balanced Model";
}

/**
 * Simulates and logs Learning Curve data.
 */
export function learningCurve(trainSizes: number[], trainScores: number[], valScores: number[]) {
    console.log("\n📈 [ML AUDIT] Learning Curve Data Simulation:");
    
    trainSizes.forEach((size, i) => {
        console.log(
            `Size: ${size.toString().padStart(3)}, Train: ${trainScores[i].toFixed(3)}, Val: ${valScores[i].toFixed(3)}`
        );
    });
}
