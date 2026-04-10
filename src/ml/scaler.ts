/**
 * Kalvium Milestone 5.19: Numerical Scaling (StandardScaler)
 * Responsibility: Scaling numerical features to Mean 0 and Std 1.
 */

export interface ScalerModel {
    means: Record<string, number>;
    stds: Record<string, number>;
}

/**
 * Calculates mean and standard deviation from a training dataset.
 * (Fit ONLY on training data to prevent leakage).
 */
export function fitScaler(featuresArray: any[]): ScalerModel {
    if (featuresArray.length === 0) throw new Error("Scaler: No data to fit.");
    
    const means: Record<string, number> = {};
    const stds: Record<string, number> = {};
    const keys = Object.keys(featuresArray[0]);

    keys.forEach(key => {
        const values = featuresArray.map(f => f[key]).filter(v => typeof v === 'number');
        if (values.length === 0) return;

        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const variance = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / values.length;
        const std = Math.sqrt(variance);

        means[key] = mean;
        stds[key] = std || 1; // Prevent division by zero
    });

    return { means, stds };
}

/**
 * Applies the Z-score transformation: (x - mean) / std.
 * Used for both Train, Test, and Prediction data.
 */
export function transformScaler(data: any[], scaler: ScalerModel): any[] {
    return data.map(record => {
        const scaled: Record<string, any> = { ...record };
        
        for (const key in scaler.means) {
            if (typeof record[key] === 'number') {
                scaled[key] = (record[key] - scaler.means[key]) / scaler.stds[key];
            }
        }
        
        return scaled;
    });
}
