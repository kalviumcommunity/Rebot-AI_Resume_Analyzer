/**
 * Kalvium Milestone 5.20: Numerical Normalization (MinMaxScaler)
 * Responsibility: Rescaling numerical features into a fixed range [0, 1].
 */

export interface MinMaxModel {
    min: Record<string, number>;
    max: Record<string, number>;
}

/**
 * Calculates Min and Max for each numerical feature from a training dataset.
 * (Fit ONLY on training data to prevent leakage).
 */
export function fitMinMaxScaler(featuresArray: any[]): MinMaxModel {
    if (featuresArray.length === 0) throw new Error("MinMaxScaler: No data to fit.");
    
    const min: Record<string, number> = {};
    const max: Record<string, number> = {};
    const keys = Object.keys(featuresArray[0]);

    keys.forEach(key => {
        const values = featuresArray.map(f => f[key]).filter(v => typeof v === 'number');
        if (values.length === 0) return;

        min[key] = Math.min(...values);
        max[key] = Math.max(...values);
    });

    return { min, max };
}

/**
 * Applies the MinMax transformation: (x - min) / (max - min).
 * Preserves distribution shape and bounds outputs to approx [0, 1].
 */
export function transformMinMax(data: any[], scaler: MinMaxModel): any[] {
    return data.map(record => {
        const scaled: Record<string, any> = { ...record };
        
        for (const key in scaler.min) {
            if (typeof record[key] === 'number') {
                const range = scaler.max[key] - scaler.min[key] || 1; // Prevent division by zero
                scaled[key] = (record[key] - scaler.min[key]) / range;
            }
        }
        
        return scaled;
    });
}
