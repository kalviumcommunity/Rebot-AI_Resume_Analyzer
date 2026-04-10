/**
 * Kalvium Milestone 5.22: Linear Regression Model
 * Responsibility: Implementing a learning-based regression engine.
 */

export interface LinearModel {
    weights: Record<string, number>;
    intercept: number;
    version: string;
}

/**
 * Trains a simple Linear Regression model using an average-based dependency heuristic.
 * (Fit ONLY on training data to prevent leakage).
 */
export function trainLinearModel(features: any[], targets: number[]): LinearModel {
    if (features.length === 0) throw new Error("LinearModel: No data to train.");
    
    const weights: Record<string, number> = {};
    const n = features.length;
    const keys = Object.keys(features[0]);

    keys.forEach(key => {
        const featureValues = features.map(f => f[key]);
        const avgFeature = featureValues.reduce((a, b) => a + b, 0) / n;
        const avgTarget = targets.reduce((a, b) => a + b, 0) / n;

        // Mock Linear Relationship: Weight = TargetMean / (FeatureMean || 1)
        // This simulates a basic coefficient discovery based on distribution overlap.
        weights[key] = avgTarget / (avgFeature || 1);
    });

    return {
        weights,
        intercept: 0, // Simplified for Rebot's bounded range
        version: "v1.0-learned"
    };
}

/**
 * Performs inference using the learned Linear Model.
 * Formula: Predicted = Intercept + Sum(Feature[i] * Weight[i])
 */
export function predictLinear(model: LinearModel, features: any): number {
    let result = model.intercept;

    for (const key in model.weights) {
        if (typeof features[key] === 'number') {
            result += features[key] * model.weights[key];
        }
    }

    return result;
}
