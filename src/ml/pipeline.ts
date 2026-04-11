import * as fs from "fs";
import { cleanRawText } from "../data_preprocessing";
import { extractResumeFeatures } from "../feature_engineering";
import { fitScaler, transformScaler, ScalerModel } from "./scaler";
import { enhancedDecisionTree } from "./decisionTree";

export interface Pipeline {
  steps: string[];
  scaler?: ScalerModel;
  modelType: string;
}

/**
 * Milestone 5.36: Pipeline Builder
 * Bundles preprocessing and model into a single object.
 */
export function buildPipeline(modelType: string = "decision-tree"): Pipeline {
  return {
    steps: [
      "cleanText",
      "extractFeatures",
      "scale",
      "modelPrediction"
    ],
    modelType
  };
}

/**
 * Milestone 5.36: Pipeline Executor
 * Ensures consistent transformations from Raw Data to Prediction.
 */
export function runPipeline(pipeline: Pipeline, input: any): any {
  let data = input;

  // Execute steps sequentially
  for (const step of pipeline.steps) {
    if (step === "cleanText") {
      // Input is raw text or object with text
      const text = typeof data === "string" ? data : JSON.stringify(data);
      data = cleanRawText(text);
    }

    if (step === "extractFeatures") {
      // Input is string/object, output is feature object
      // If data is string, it's already cleaned. 
      // extractResumeFeatures expects a Partial<ResumeData>
      // For simplicity in the pipeline, we assume it's passed a suitable object or we wrap it
      const resumeData = typeof data === "string" ? { personalStatement: data } : data;
      data = extractResumeFeatures(resumeData);
    }

    if (step === "scale") {
      // Input is feature object, output is scaled feature object
      if (pipeline.scaler) {
        data = transformScaler([data], pipeline.scaler)[0];
      }
    }

    if (step === "modelPrediction") {
      // Input is feature object, output is score
      if (pipeline.modelType === "decision-tree") {
        // Map features to expected keys in decisionTree
        const modelInput = {
          keywordScore: (data.keywordDensity || 0) * 100,
          actionVerbs: data.actionVerbCount || 0,
          metrics: data.metricCount || 0,
          length: data.resumeLength || 0
        };
        data = enhancedDecisionTree(modelInput);
      }
      // Add other models here if needed
    }
  }

  return data;
}

/**
 * Fits the pipeline components (like scaler) on training data.
 * Crucial for preventing data leakage.
 */
export function fitPipeline(pipeline: Pipeline, trainingData: any[]): Pipeline {
  const featureList = trainingData.map(d => {
    const cleaned = cleanRawText(typeof d === "string" ? d : JSON.stringify(d));
    const resumeData = typeof d === "string" ? { personalStatement: d } : d;
    return extractResumeFeatures(resumeData);
  });

  pipeline.scaler = fitScaler(featureList);
  return pipeline;
}

/**
 * Milestone 5.36: Pipeline Serialization
 */
export function savePipeline(pipeline: Pipeline, filename: string = "pipeline.json") {
  fs.writeFileSync(filename, JSON.stringify(pipeline, null, 2));
  console.log(`✅ Pipeline saved to ${filename}`);
}

/**
 * Milestone 5.36: Pipeline Loading
 */
export function loadPipeline(filename: string = "pipeline.json"): Pipeline {
  if (!fs.existsSync(filename)) {
    throw new Error(`Pipeline file ${filename} not found.`);
  }
  return JSON.parse(fs.readFileSync(filename, "utf-8"));
}
