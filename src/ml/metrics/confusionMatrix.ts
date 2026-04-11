/**
 * Milestone 5.38: Binary Confusion Matrix
 * Responsibility: Breaking down success/failure into TP, TN, FP, FN.
 */
export function calculateBinaryConfusionMatrix(actual: number[], predicted: number[], positiveClass: number = 2) {
  let TP = 0, TN = 0, FP = 0, FN = 0;

  for (let i = 0; i < actual.length; i++) {
    const isActualPos = actual[i] === positiveClass;
    const isPredictedPos = predicted[i] === positiveClass;

    if (isActualPos && isPredictedPos) TP++;
    else if (!isActualPos && !isPredictedPos) TN++;
    else if (!isActualPos && isPredictedPos) FP++;
    else if (isActualPos && !isPredictedPos) FN++;
  }

  console.log("\n📊 BINARY CONFUSION MATRIX (Class " + positiveClass + ")");
  console.table({
    "Actual Positive": { "Pred Positive (TP)": TP, "Pred Negative (FN)": FN },
    "Actual Negative": { "Pred Positive (FP)": FP, "Pred Negative (TN)": TN }
  });

  return { TP, TN, FP, FN };
}
