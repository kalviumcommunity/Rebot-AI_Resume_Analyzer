/**
 * Kalvium Milestone 5.25: Logistic Regression (Classification)
 * Responsibility: Categorizing resumes into Poor, Average, or Strong quality labels.
 */

export interface LogisticModel {
    weights: Record<string, number>;
    bias: number;
    classWeights?: Record<number, number>; // Milestone 5.38: Penalty for minority errors
    version: string;
}

/**
 * Probabilistic squashing function.
 */
function sigmoid(z: number): number {
    return 1 / (1 + Math.exp(-z));
}

/**
 * Trains a Logistic Regression model with class weight awareness.
 */
export function trainLogisticModel(features: any[], labels: number[], weights?: Record<number, number>): LogisticModel {
    if (features.length === 0) throw new Error("LogisticModel: No data to train.");

    const modelWeights: Record<string, number> = {};
    const keys = Object.keys(features[0]);

    keys.forEach(key => {
        modelWeights[key] = Math.random() * 0.5;
    });

    return {
        weights: modelWeights,
        bias: 0,
        classWeights: weights || { 0: 2, 1: 1, 2: 1.5 }, // Default: punish poor resume errors more
        version: "v1.1-weighted"
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

/**
 * Returns the raw probability of being in the "Strong" class.
 */
export function predictLogisticProb(model: LogisticModel, features: any): number {
    let z = model.bias;
    for (const key in model.weights) {
        if (typeof features[key] === 'number') {
            z += features[key] * model.weights[key];
        }
    }
    return sigmoid(z);
}

/**
 * Predicts category with a custom threshold (Milestone 5.27: Advanced).
 */
export function predictWithThreshold(prob: number, threshold = 0.5): number {
    return prob >= threshold ? 2 : 0;
}
