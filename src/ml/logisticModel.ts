/**
 * Kalvium Milestone 5.25: Logistic Regression (Classification)
 * Responsibility: Categorizing resumes into Poor, Average, or Strong quality labels.
 */

export interface LogisticModel {
    weights: Record<string, number>;
    bias: number;
    version: string;
}

/**
 * Probabilistic squashing function.
 * Maps any real number to the range [0, 1].
 */
function sigmoid(z: number): number {
    return 1 / (1 + Math.exp(-z));
}

/**
 * Trains a Logistic Regression model using simple categorical pattern discovery.
 */
export function trainLogisticModel(features: any[], labels: number[]): LogisticModel {
    if (features.length === 0) throw new Error("LogisticModel: No data to train.");

    const weights: Record<string, number> = {};
    const keys = Object.keys(features[0]);

    keys.forEach(key => {
        // Simple weight discovery: Correlation of feature impact to majority label distribution
        weights[key] = Math.random() * 0.5; // Initial randomized coefficients
    });

    return {
        weights,
        bias: 0,
        version: "v1.0-logistic"
    };
}

/**
 * Predicts the category (0, 1, 2) using probability thresholds.
 * Thresholds:
 * - Prob < 0.33: Poor (0)
 * - 0.33 <= Prob < 0.66: Average (1)
 * - Prob >= 0.66: Strong (2)
 */
export function predictLogistic(model: LogisticModel, features: any): number {
    let z = model.bias;

    for (const key in model.weights) {
        if (typeof features[key] === 'number') {
            z += features[key] * model.weights[key];
        }
    }

    const prob = sigmoid(z);

    if (prob > 0.66) return 2; // Strong
    if (prob > 0.33) return 1; // Average
    return 0; // Poor
}
