import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { ResumeData } from "@/types/resumeTypes";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "dummy_key" });

export async function POST(req: NextRequest) {
  try {
    const { resumeData }: { resumeData: Partial<ResumeData> } = await req.json();

    if (!resumeData) {
      return NextResponse.json({ error: "Resume data is required" }, { status: 400 });
    }

    const resumeContent = JSON.stringify({
      experience: resumeData.experience,
      projects: resumeData.projects,
      skills: resumeData.skills,
      summary: resumeData.user?.personalStatement,
    }, null, 2);

    const prompt = `You are an expert ATS resume reviewer and technical recruiter.
Evaluate the following resume data for a software engineering role.

Evaluate for:
• Keyword optimization
• Clarity and impact
• Action verbs
• Quantifiable metrics

Provide a response in JSON format exactly matching this structure:
{
  "score": <number between 0 and 100>,
  "feedback": [
    "<suggestion 1>",
    "<suggestion 2>",
    "<suggestion 3>"
  ]
}

Resume Data:
${resumeContent}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const result = JSON.parse(response.text || "{}");

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("ATS Review Error:", error);
    return NextResponse.json({ error: error.message || "Failed to process review" }, { status: 500 });
  }
}
