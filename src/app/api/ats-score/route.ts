import { NextRequest, NextResponse } from "next/server";
import { extractFeatures } from "@/ml/features/extractor";
import { predictAtsScore } from "@/ml/model/atsModel";
import { getEvaluationReport } from "@/ml/evaluation/metrics";
import { ResumeData } from "@/types/resumeTypes";

export async function POST(req: NextRequest) {
  try {
    const { resumeData }: { resumeData: Partial<ResumeData> } = await req.json();

    if (!resumeData) {
      return NextResponse.json({ error: "Resume data is required" }, { status: 400 });
    }

    // ML Pipeline Execution
    
    // 1. Data Cleaning (happens inside extractFeatures for simplicity in this demo)
    // 2. Feature Engineering
    const features = extractFeatures(resumeData);

    // 3. Model Prediction (Inference)
    const prediction = predictAtsScore(features);

    // 4. Evaluation (Simulated metrics for this model version)
    const evaluation = getEvaluationReport();

    // 5. Monitoring (Log result - simulation)
    console.log(`[ML MONITOR] Prediction generated. Score: ${prediction.score}, Label: ${prediction.label}`);

    return NextResponse.json({
      success: true,
      pipeline: "Data -> Features -> Model -> Prediction",
      prediction,
      features,
      evaluation,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error("ML Prediction Error:", error);
    return NextResponse.json({ error: "Failed to process ML pipeline" }, { status: 500 });
  }
}
