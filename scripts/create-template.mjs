// Script to generate a proper Word template with placeholders for docxtemplater
// Run with: node scripts/create-template.mjs

import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle, AlignmentType, HeadingLevel, SectionType } from "docx";
import fs from "fs";
import path from "path";

const FONT = "Roboto Serif";
const BODY_SIZE = 20; // 10pt = 20 half-points
const NAME_SIZE = 28; // 14pt = 28 half-points
const HEADING_SIZE = 20;
const LINE_SPACING = 276; // 1.15 * 240 = 276
const SECTION_SPACING = { before: 120, after: 60 };

function bodyText(text, options = {}) {
  return new TextRun({
    text,
    font: FONT,
    size: BODY_SIZE,
    ...options,
  });
}

function sectionHeading(text) {
  return new Paragraph({
    spacing: SECTION_SPACING,
    alignment: AlignmentType.LEFT,
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 1, space: 1, color: "000000" },
    },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        font: FONT,
        size: HEADING_SIZE,
        bold: true,
        allCaps: true,
      }),
    ],
  });
}

function bulletPoint(text) {
  return new Paragraph({
    spacing: { before: 20, after: 20, line: LINE_SPACING },
    alignment: AlignmentType.JUSTIFIED,
    bullet: { level: 0 },
    children: [bodyText(text)],
  });
}

async function createTemplate() {
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 567,   // 1 cm = 567 twips
              bottom: 567,
              left: 851,  // 1.5 cm
              right: 851,
            },
          },
        },
        children: [
          // NAME
          new Paragraph({
            spacing: { after: 40, line: LINE_SPACING },
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun({
                text: "{full_name}",
                font: FONT,
                size: NAME_SIZE,
                bold: true,
              }),
            ],
          }),

          // Links
          new Paragraph({
            spacing: { after: 100, line: LINE_SPACING },
            alignment: AlignmentType.LEFT,
            children: [bodyText("{links}")],
          }),

          // TECHNICAL SKILLS
          sectionHeading("Technical Skills"),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            alignment: AlignmentType.JUSTIFIED,
            children: [
              bodyText("Languages: ", { bold: true }),
              bodyText("{skills_languages}"),
            ],
          }),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            alignment: AlignmentType.JUSTIFIED,
            children: [
              bodyText("Frontend: ", { bold: true }),
              bodyText("{skills_frontend}"),
            ],
          }),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            alignment: AlignmentType.JUSTIFIED,
            children: [
              bodyText("Backend: ", { bold: true }),
              bodyText("{skills_backend}"),
            ],
          }),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            alignment: AlignmentType.JUSTIFIED,
            children: [
              bodyText("Databases: ", { bold: true }),
              bodyText("{skills_databases}"),
            ],
          }),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            alignment: AlignmentType.JUSTIFIED,
            children: [
              bodyText("Tools / Frameworks / Libraries: ", { bold: true }),
              bodyText("{skills_tools}"),
            ],
          }),

          // PERSONAL STATEMENT
          sectionHeading("Personal Statement"),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            alignment: AlignmentType.JUSTIFIED,
            children: [bodyText("{personal_statement}")],
          }),

          // EXPERIENCE (loop)
          sectionHeading("Experience"),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            children: [bodyText("{#experience}")],
          }),
          new Paragraph({
            spacing: { before: 80, line: LINE_SPACING },
            children: [
              bodyText("{company} | {role}", { bold: true }),
              bodyText("\t"),
              bodyText("{startDate} – {endDate}", { bold: true }),
            ],
          }),
          bulletPoint("{desc1}"),
          bulletPoint("{desc2}"),
          bulletPoint("{desc3}"),
          bulletPoint("{desc4}"),
          bulletPoint("{desc5}"),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            children: [bodyText("{/experience}")],
          }),

          // PROJECTS (loop)
          sectionHeading("Projects"),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            children: [bodyText("{#projects}")],
          }),
          new Paragraph({
            spacing: { before: 80, line: LINE_SPACING },
            children: [
              bodyText("{title} | {repo}", { bold: true }),
              bodyText("\t"),
              bodyText("{startDate} – {endDate}", { bold: true }),
            ],
          }),
          bulletPoint("{desc1}"),
          bulletPoint("{desc2}"),
          bulletPoint("{desc3}"),
          bulletPoint("{desc4}"),
          bulletPoint("{desc5}"),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            children: [bodyText("{/projects}")],
          }),

          // EDUCATION
          sectionHeading("Education Enrollment"),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            children: [bodyText("{#education}")],
          }),
          new Paragraph({
            spacing: { before: 80, line: LINE_SPACING },
            children: [
              bodyText("{degree} in {field}", { bold: true }),
              bodyText("\t"),
              bodyText("{startDate} – {endDate}", { bold: true }),
            ],
          }),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            alignment: AlignmentType.LEFT,
            children: [bodyText("Campus: {institution}")],
          }),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            children: [bodyText("{/education}")],
          }),

          // ACHIEVEMENTS
          sectionHeading("Achievements & Extracurriculars"),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            children: [bodyText("{#achievements}")],
          }),
          bulletPoint("{type}: {description}"),
          new Paragraph({
            spacing: { line: LINE_SPACING },
            children: [bodyText("{/achievements}")],
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const outPath = path.join(process.cwd(), "templates", "resume_template.docx");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buffer);
  console.log("✅ Template created at:", outPath);
}

createTemplate();
