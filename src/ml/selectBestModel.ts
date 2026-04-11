/**
 * Milestone 5.41: Best Model Selector
 * Responsibility: Coordinating candidate evaluation and identifying the champion.
 */
import { models } from "./models";
import { crossValidate } from "./crossValidation";

export function selectBestModel(data: any[]) {
  console.log("\n🏆 RUNNING MODEL SELECTION TOURNAMENT");
  
  let bestModelName = "";
  let bestScore = -1;

  Object.keys(models).forEach(name => {
    console.log(`Evaluating Candidate: ${name}...`);
    const { mean } = crossValidate(models[name], data);

    if (mean > bestScore) {
      bestScore = mean;
      bestModelName = name;
    }
  });

  console.log(`\n👑 TOURNAMENT WINNER: ${bestModelName} (Score: ${bestScore.toFixed(3)})`);

  return bestModelName;
}
