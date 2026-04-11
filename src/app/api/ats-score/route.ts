/**
 * Milestone 5.44: ATS Scoring API Endpoint
 * Responsibility: Processing real-time resume validation requests.
 */
import { runInference } from "@/ml/inference";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { resumeText } = body;

    if (!resumeText) {
      return NextResponse.json(
        { error: "Resume text is required for analysis." },
        { status: 400 }
      );
    }

    // 🔥 RULE: The API path performs ONLY inference (No Training allowed)
    const result = runInference(resumeText);

    return NextResponse.json({
      success: true,
      ...result,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error("[API ERROR]", error);
    return NextResponse.json(
      { error: "Analysis failed: " + error.message },
      { status: 500 }
    );
  }
}
