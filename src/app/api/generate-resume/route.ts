import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { user, skills, experience, projects, education, achievements } = body;

    const templatePath = path.resolve(process.cwd(), "templates", "resume_template.docx");

    if (!fs.existsSync(templatePath)) {
      return NextResponse.json(
        { error: "Template file not found. Run 'node scripts/create-template.mjs' first." },
        { status: 404 }
      );
    }

    const content = fs.readFileSync(templatePath);
    const zip = new PizZip(content);

    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    // Build the links string
    const links = [
      user?.linkedin || "",
      user?.github || "",
      user?.portfolio || "",
    ].filter(Boolean).join(" | ");

    // Map experience entries – flatten description[] into desc1...desc5
    const mappedExperience = (experience || []).map((exp: any) => ({
      company: exp.company || "",
      role: exp.role || "",
      startDate: exp.startDate || "",
      endDate: exp.endDate || "",
      desc1: exp.description?.[0] || "",
      desc2: exp.description?.[1] || "",
      desc3: exp.description?.[2] || "",
      desc4: exp.description?.[3] || "",
      desc5: exp.description?.[4] || "",
    }));

    // Map project entries
    const mappedProjects = (projects || []).map((proj: any) => ({
      title: proj.title || "",
      repo: proj.repo || "",
      startDate: proj.startDate || "",
      endDate: proj.endDate || "",
      desc1: proj.description?.[0] || "",
      desc2: proj.description?.[1] || "",
      desc3: proj.description?.[2] || "",
      desc4: proj.description?.[3] || "",
      desc5: proj.description?.[4] || "",
    }));

    // Map education
    const mappedEducation = (education || []).map((edu: any) => ({
      degree: edu.degree || "",
      field: edu.field || "",
      institution: edu.institution || "",
      startDate: edu.startDate || "",
      endDate: edu.endDate || "",
    }));

    // Map achievements
    const mappedAchievements = (achievements || []).map((ach: any) => ({
      type: ach.type || "",
      description: ach.description || "",
    }));

    // Populate template
    doc.render({
      full_name: user?.name || "Student Fullname",
      links,
      skills_languages: skills?.languages?.join(", ") || "",
      skills_frontend: skills?.frontend?.join(", ") || "",
      skills_backend: skills?.backend?.join(", ") || "",
      skills_databases: skills?.databases?.join(", ") || "",
      skills_tools: skills?.tools?.join(", ") || "",
      personal_statement: user?.personalStatement || "",
      experience: mappedExperience,
      projects: mappedProjects,
      education: mappedEducation,
      achievements: mappedAchievements,
    });

    const buf = doc.getZip().generate({
      type: "nodebuffer",
      compression: "DEFLATE",
    });

    const fileName = (user?.name || "resume").replace(/\s+/g, "_");

    return new NextResponse(buf as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${fileName}_Resume.docx"`,
      },
    });

  } catch (error: any) {
    console.error("Resume Generation Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate resume" },
      { status: 500 }
    );
  }
}
