/**
 * Kalvium Milestone 5.15: Feature Distribution Inspection
 * Responsibility: Statistical analysis of feature behavior before modeling.
 */

/**
 * Calculates skewness of a numerical distribution.
 * Positive = Right skewed, Negative = Left skewed, Near 0 = Symmetric.
 */
export function checkSkew(values: number[]): number {
    if (values.length === 0) return 0;
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    
    const m3 = values.reduce((sum, v) => sum + Math.pow(v - mean, 3), 0) / values.length;
    const m2 = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / values.length;
    
    if (m2 === 0) return 0;
    const skew = m3 / Math.pow(m2, 1.5);
    return parseFloat(skew.toFixed(4));
}

/**
 * Performs a comprehensive statistical audit of all features.
 * Detects range, central tendency, and anomalies.
 */
export function analyzeFeatures(featuresArray: any[]) {
    if (featuresArray.length === 0) return {};
    
    const stats: Record<string, any> = {};
    const keys = Object.keys(featuresArray[0]);

    keys.forEach(key => {
        // We only analyze numerical features
        const values = featuresArray.map(f => f[key]).filter(v => typeof v === 'number');
        
        if (values.length === 0) return;

        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const min = Math.min(...values);
        const max = Math.max(...values);
        const skew = checkSkew(values);

        stats[key] = {
            mean: parseFloat(mean.toFixed(2)),
            min: parseFloat(min.toFixed(2)),
            max: parseFloat(max.toFixed(2)),
            skewness: skew,
            interpretation: Math.abs(skew) > 1 ? "Highly Skewed" : "Appx. Symmetric"
        };
    });

    console.log("------------------------------------------");
    console.log("📊 FEATURE DISTRIBUTION ANALYSIS (Pre-Modeling)");
    console.table(stats);
    console.log("------------------------------------------");

    return stats;
}
