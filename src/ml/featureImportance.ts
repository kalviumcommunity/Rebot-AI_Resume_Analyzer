/**
 * Kalvium Milestone 5.33: Feature Importance Analysis
 * Responsibility: Identifying and interpreting key drivers of ATS scores.
 */

/**
 * Returns simulated feature importance values for the Rebot system.
 */
export function getFeatureImportance() {
    return {
        keywordScore: 0.40,
        metrics: 0.25,
        actionVerbs: 0.20,
        length: 0.10,
        sections: 0.05
    };
}

/**
 * Logs a sorted ranking of feature importance to the console.
 */
export function printImportance(importance: Record<string, number>) {
    const sorted = Object.entries(importance)
        .sort((a, b) => b[1] - a[1]);

    console.log("\n📊 [ML AUDIT] Feature Importance Ranking:");

    sorted.forEach(([feature, value]) => {
        const barLength = Math.round(value * 20);
        const bar = "█".repeat(barLength) + "░".repeat(20 - barLength);
        console.log(`   ${feature.padEnd(15)} | ${bar} ${(value * 100).toFixed(1)}%`);
    });
}

/**
 * Generates textual insights based on importance values.
 */
export function interpretImportance(importance: Record<string, number>) {
    console.log("\n🧠 [ML INSIGHTS] Model Behavior Interpretation:");

    if (importance.keywordScore > 0.3) {
        console.log("   ✔ Keywords are the dominant factor; focus on industry-specific terminology.");
    }

    if (importance.metrics > 0.2) {
        console.log("   ✔ Quantified achievements (metrics) significantly improve ATS visibility.");
    }

    if (importance.actionVerbs > 0.15) {
        console.log("   ✔ Strong action verbs contribute to high-impact statement detection.");
    }
}

/**
 * Simulates permutation importance analysis for validation.
 */
export function permutationImportance(model: any, data: any[], labels: number[]) {
    console.log("\n🔁 [ML DIAGNOSTIC] Simulating Permutation Importance Analysis...");
    
    // In a real environment, we would shuffle each feature and measure accuracy drop.
    return {
        keywordScore: 0.35,
        metrics: 0.28,
        actionVerbs: 0.22,
        length: 0.08,
        sections: 0.02
    };
}
