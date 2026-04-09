"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Sparkles } from "lucide-react";
import { ResumeData, Experience, Project, Education, Achievement } from "@/types/resumeTypes";

import { useTheme } from "@/context/ThemeContext";

interface ResumeEditorProps {
    activeSection: string;
    data: Partial<ResumeData>;
    onChange: (data: Partial<ResumeData>) => void;
}

export default function ResumeEditor({ activeSection, data, onChange }: ResumeEditorProps) {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    const glassInputStyle = isDark
        ? "bg-zinc-900/40 backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] border border-white/10 shadow-[0_4px_16px_0_rgba(0,0,0,0.2)] focus:bg-zinc-900/60 focus:border-white/20 focus:shadow-md hover:bg-zinc-900/50 transition-all duration-300 rounded-xl text-[13px] outline-none text-zinc-100 placeholder:text-zinc-500"
        : "bg-white/40 backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] border border-black/5 shadow-sm focus:bg-white/60 focus:border-black/10 focus:shadow-md hover:bg-white/50 transition-all duration-300 rounded-xl text-[13px] outline-none text-zinc-900 placeholder:text-zinc-400";

    // ---------- BRIEF ----------
    const renderBrief = () => (
        <div className="flex flex-col gap-8 animate-stagger-1 pb-12">
            <div className="flex flex-col gap-2">
                <h3 className={`text-[22px] font-light ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>Brief Information</h3>
                <p className="text-[13px] text-zinc-400">Your core contact details and personal statement.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Full Name</Label>
                    <Input 
                        placeholder="Student Fullname" 
                        value={data.user?.name || ""} 
                        className={glassInputStyle}
                        onChange={(e) => onChange({ user: { ...data.user!, name: e.target.value } })}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Email Address</Label>
                    <Input 
                        placeholder="student@example.com" 
                        value={data.user?.email || ""} 
                        className={glassInputStyle}
                        onChange={(e) => onChange({ user: { ...data.user!, email: e.target.value } })}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">LinkedIn Profile</Label>
                    <Input 
                        placeholder="LinkedIn URL" 
                        value={data.user?.linkedin || ""} 
                        className={glassInputStyle}
                        onChange={(e) => onChange({ user: { ...data.user!, linkedin: e.target.value } })}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">GitHub Profile</Label>
                    <Input 
                        placeholder="GitHub URL" 
                        value={data.user?.github || ""} 
                        className={glassInputStyle}
                        onChange={(e) => onChange({ user: { ...data.user!, github: e.target.value } })}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Portfolio (Optional)</Label>
                    <Input 
                        placeholder="Behance, Dribbble, Figma..." 
                        value={data.user?.portfolio || ""} 
                        className={glassInputStyle}
                        onChange={(e) => onChange({ user: { ...data.user!, portfolio: e.target.value } })}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Personal Statement</Label>
                <Textarea 
                    placeholder="Who are you technically? Where have you added value before? Why are you seeking an internship?" 
                    rows={6} 
                    value={data.user?.personalStatement || ""} 
                    className={`${glassInputStyle} resize-y min-h-[120px]`}
                    onChange={(e) => onChange({ user: { ...data.user!, personalStatement: e.target.value } })}
                />
            </div>
        </div>
    );

    // ---------- SKILLS ----------
    const renderSkills = () => (
        <div className="flex flex-col gap-8 animate-stagger-1 pb-12">
            <div className="flex flex-col gap-2">
                <h3 className={`text-[22px] font-light ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>Technical Skills</h3>
                <p className="text-[13px] text-zinc-400">Categorize your tech stack appropriately.</p>
            </div>
            
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Languages</Label>
                    <Input 
                        placeholder="Python [Advanced], JavaScript [Intermediate], C++ [Basic]" 
                        value={data.skills?.languages?.join(", ") || ""} 
                        className={glassInputStyle}
                        onChange={(e) => onChange({ skills: { ...data.skills!, languages: e.target.value.split(",").map(s => s.trim()).filter(Boolean) } })}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Frontend</Label>
                    <Input 
                        placeholder="React, HTML, CSS" 
                        value={data.skills?.frontend?.join(", ") || ""} 
                        className={glassInputStyle}
                        onChange={(e) => onChange({ skills: { ...data.skills!, frontend: e.target.value.split(",").map(s => s.trim()).filter(Boolean) } })}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Backend</Label>
                    <Input 
                        placeholder="Node.js, Express, Django" 
                        value={data.skills?.backend?.join(", ") || ""} 
                        className={glassInputStyle}
                        onChange={(e) => onChange({ skills: { ...data.skills!, backend: e.target.value.split(",").map(s => s.trim()).filter(Boolean) } })}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Databases</Label>
                    <Input 
                        placeholder="MongoDB, MySQL" 
                        value={data.skills?.databases?.join(", ") || ""} 
                        className={glassInputStyle}
                        onChange={(e) => onChange({ skills: { ...data.skills!, databases: e.target.value.split(",").map(s => s.trim()).filter(Boolean) } })}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Tools / Frameworks / Libraries</Label>
                    <Input 
                        placeholder="Git, Docker, REST APIs" 
                        value={data.skills?.tools?.join(", ") || ""} 
                        className={glassInputStyle}
                        onChange={(e) => onChange({ skills: { ...data.skills!, tools: e.target.value.split(",").map(s => s.trim()).filter(Boolean) } })}
                    />
                </div>
            </div>
        </div>
    );

    // ---------- EXPERIENCE ----------
    const handleAddExperience = () => {
        const newExp: Experience = {
            id: Date.now().toString(),
            userId: data.user?.id || "",
            company: "",
            role: "",
            startDate: "",
            endDate: "",
            techUsed: [],
            description: ["", "Technology used: ", "Impact delivered: ", "Recognitions or Highlights: ", "Key Learnings: "]
        };
        onChange({ experience: [...(data.experience || []), newExp] });
    };

    const handleUpdateExperience = (id: string, updates: Partial<Experience>) => {
        onChange({
            experience: data.experience?.map(exp => exp.id === id ? { ...exp, ...updates } : exp)
        });
    };

    const handleUpdateExpDesc = (exp: Experience, index: number, prefix: string, value: string) => {
        const newDesc = [...(exp.description || ["", "", "", "", ""])];
        // Ensure array holds 5 slots minimal
        while(newDesc.length < 5) newDesc.push("");
        newDesc[index] = prefix ? `${prefix}: ${value}` : value;
        handleUpdateExperience(exp.id, { description: newDesc });
    };

    const cleanPrefix = (text: string, prefix: string) => {
        if (!text) return "";
        return text.startsWith(`${prefix}: `) ? text.substring(prefix.length + 2) : text;
    };

    const renderExperience = () => (
        <div className="flex flex-col gap-6 animate-stagger-1 pb-12">
            <div className="flex justify-between items-center mb-2">
                <h3 className={`text-[22px] font-light ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>Experience</h3>
                <Button onClick={handleAddExperience} className={`rounded-full shadow-lg transition-all text-[12px] px-5 font-bold ${isDark ? 'bg-white text-zinc-950 hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}>
                    <Plus className="w-4 h-4 mr-2" /> Add Experience
                </Button>
            </div>
            
            {(data.experience || []).map((exp, index) => (
                <div key={exp.id || index} className={`p-6 rounded-[24px] border border-dashed shadow-xl flex flex-col gap-5 relative group transition-all duration-300 ${isDark ? 'bg-zinc-900/50 border-white/10' : 'bg-white/50 border-black/5'}`}>
                    <button 
                        onClick={() => onChange({ experience: data.experience?.filter(e => e.id !== exp.id) })}
                        className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500 text-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Company Name</Label>
                            <Input value={exp.company} onChange={e => handleUpdateExperience(exp.id, { company: e.target.value })} className={glassInputStyle} />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Role</Label>
                            <Input value={exp.role} onChange={e => handleUpdateExperience(exp.id, { role: e.target.value })} className={glassInputStyle} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Start Date</Label>
                            <Input placeholder="Month Year" value={exp.startDate} onChange={e => handleUpdateExperience(exp.id, { startDate: e.target.value })} className={glassInputStyle} />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">End Date</Label>
                            <Input placeholder="Month Year / Present" value={exp.endDate} onChange={e => handleUpdateExperience(exp.id, { endDate: e.target.value })} className={glassInputStyle} />
                        </div>
                    </div>

                    <div className="space-y-4 mt-2">
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">What you did (Start with an action verb)</Label>
                            <Input value={cleanPrefix(exp.description?.[0] || "", "")} onChange={e => handleUpdateExpDesc(exp, 0, "", e.target.value)} placeholder="Built / Developed / Integrated..." className={glassInputStyle} />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Technology used</Label>
                            <Input value={cleanPrefix(exp.description?.[1] || "", "Technology used")} onChange={e => handleUpdateExpDesc(exp, 1, "Technology used", e.target.value)} placeholder="What tools, languages, frameworks did you apply?" className={glassInputStyle} />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Impact delivered</Label>
                            <Input value={cleanPrefix(exp.description?.[2] || "", "Impact delivered")} onChange={e => handleUpdateExpDesc(exp, 2, "Impact delivered", e.target.value)} placeholder="Metrics, timelines, quality improvements" className={glassInputStyle} />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Recognitions or Highlights</Label>
                            <Input value={cleanPrefix(exp.description?.[3] || "", "Recognitions or Highlights")} onChange={e => handleUpdateExpDesc(exp, 3, "Recognitions or Highlights", e.target.value)} placeholder="Feature live? User adoption?" className={glassInputStyle} />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Key Learnings</Label>
                            <Input value={cleanPrefix(exp.description?.[4] || "", "Key Learnings")} onChange={e => handleUpdateExpDesc(exp, 4, "Key Learnings", e.target.value)} placeholder="Skills or insights gained" className={glassInputStyle} />
                        </div>
                    </div>
                </div>
            ))}
            {(!data.experience || data.experience.length === 0) && (
                <p className="text-zinc-400 text-sm text-center py-10">No experience added yet.</p>
            )}
        </div>
    );

    // ---------- PROJECTS ----------
    const handleAddProject = () => {
        const newProj: Project = {
            id: Date.now().toString(),
            userId: data.user?.id || "",
            title: "",
            repo: "",
            startDate: "",
            endDate: "",
            techStack: [],
            description: ["", "Tech Stack and Frameworks used: ", "Problem Solved / Use Case: ", "Impact / Usage: ", "Challenges Tackled / Learning Outcome: "]
        };
        onChange({ projects: [...(data.projects || []), newProj] });
    };

    const handleUpdateProject = (id: string, updates: Partial<Project>) => {
        onChange({
            projects: data.projects?.map(proj => proj.id === id ? { ...proj, ...updates } : proj)
        });
    };

    const handleUpdateProjDesc = (proj: Project, index: number, prefix: string, value: string) => {
        const newDesc = [...(proj.description || ["", "", "", "", ""])];
        while(newDesc.length < 5) newDesc.push("");
        newDesc[index] = prefix ? `${prefix}: ${value}` : value;
        handleUpdateProject(proj.id, { description: newDesc });
    };

    const renderProjects = () => (
        <div className="flex flex-col gap-6 animate-stagger-1 pb-12">
            <div className="flex justify-between items-center mb-2">
                <h3 className={`text-[22px] font-light ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>Projects</h3>
                <Button onClick={handleAddProject} className={`rounded-full shadow-lg transition-all text-[12px] px-5 font-bold ${isDark ? 'bg-white text-zinc-950 hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}>
                    <Plus className="w-4 h-4 mr-2" /> Add Project
                </Button>
            </div>
            
            {(data.projects || []).map((proj, index) => (
                <div key={proj.id || index} className={`p-6 rounded-[24px] border border-dashed shadow-xl flex flex-col gap-5 relative group transition-all duration-300 ${isDark ? 'bg-zinc-900/50 border-white/10' : 'bg-white/50 border-black/5'}`}>
                    <button 
                        onClick={() => onChange({ projects: data.projects?.filter(p => p.id !== proj.id) })}
                        className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500 text-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Project Title</Label>
                            <Input value={proj.title} onChange={e => handleUpdateProject(proj.id, { title: e.target.value })} className={glassInputStyle} />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">GitHub Repo Link</Label>
                            <Input value={proj.repo} onChange={e => handleUpdateProject(proj.id, { repo: e.target.value })} className={glassInputStyle} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Start Date</Label>
                            <Input placeholder="Month Year" value={proj.startDate || ""} onChange={e => handleUpdateProject(proj.id, { startDate: e.target.value })} className={glassInputStyle} />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">End Date</Label>
                            <Input placeholder="Month Year" value={proj.endDate || ""} onChange={e => handleUpdateProject(proj.id, { endDate: e.target.value })} className={glassInputStyle} />
                        </div>
                    </div>

                    <div className="space-y-4 mt-2">
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">What you did</Label>
                            <Input value={cleanPrefix(proj.description?.[0] || "", "")} onChange={e => handleUpdateProjDesc(proj, 0, "", e.target.value)} placeholder="Built / Developed / Integrated..." className={glassInputStyle} />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Tech Stack and Frameworks</Label>
                            <Input value={cleanPrefix(proj.description?.[1] || "", "Tech Stack and Frameworks used")} onChange={e => handleUpdateProjDesc(proj, 1, "Tech Stack and Frameworks used", e.target.value)} placeholder="Highlight full stack used" className={glassInputStyle} />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Problem Solved / Use Case</Label>
                            <Input value={cleanPrefix(proj.description?.[2] || "", "Problem Solved / Use Case")} onChange={e => handleUpdateProjDesc(proj, 2, "Problem Solved / Use Case", e.target.value)} placeholder="Real-world relevance" className={glassInputStyle} />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Impact / Usage (if any)</Label>
                            <Input value={cleanPrefix(proj.description?.[3] || "", "Impact / Usage (if any)")} onChange={e => handleUpdateProjDesc(proj, 3, "Impact / Usage (if any)", e.target.value)} placeholder="Users / feedback / adoption" className={glassInputStyle} />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Challenges Tackled / Learning Outcome</Label>
                            <Input value={cleanPrefix(proj.description?.[4] || "", "Challenges Tackled / Learning Outcome")} onChange={e => handleUpdateProjDesc(proj, 4, "Challenges Tackled / Learning Outcome", e.target.value)} placeholder="Technical or team-related learnings" className={glassInputStyle} />
                        </div>
                    </div>
                </div>
            ))}
            {(!data.projects || data.projects.length === 0) && (
                <p className="text-zinc-400 text-sm text-center py-10">No projects added yet.</p>
            )}
        </div>
    );

    // ---------- EDUCATION ----------
    const handleAddEducation = () => {
        const newEdu: Education = {
            id: Date.now().toString(),
            userId: data.user?.id || "",
            institution: "",
            degree: "",
            field: "",
            startDate: "",
            endDate: ""
        };
        onChange({ education: [...(data.education || []), newEdu] });
    };

    const handleUpdateEducation = (id: string, updates: Partial<Education>) => {
        onChange({
            education: data.education?.map(edu => edu.id === id ? { ...edu, ...updates } : edu)
        });
    };

    const renderEducation = () => (
        <div className="flex flex-col gap-6 animate-stagger-1 pb-12">
            <div className="flex justify-between items-center mb-2">
                <h3 className={`text-[22px] font-light ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>Education</h3>
                <Button onClick={handleAddEducation} className={`rounded-full shadow-lg transition-all text-[12px] px-5 font-bold ${isDark ? 'bg-white text-zinc-950 hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}>
                    <Plus className="w-4 h-4 mr-2" /> Add Education
                </Button>
            </div>
            
            {(data.education || []).map((edu, index) => (
                <div key={edu.id || index} className={`p-6 rounded-[24px] border border-dashed shadow-xl flex flex-col gap-5 relative group transition-all duration-300 ${isDark ? 'bg-zinc-900/50 border-white/10' : 'bg-white/50 border-black/5'}`}>
                    <button 
                        onClick={() => onChange({ education: data.education?.filter(e => e.id !== edu.id) })}
                        className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500 text-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Degree (e.g. Kalvium UG Program)</Label>
                            <Input value={edu.degree} onChange={e => handleUpdateEducation(edu.id, { degree: e.target.value })} className={glassInputStyle} />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Field (e.g. CS / Software Prod Eng)</Label>
                            <Input value={edu.field} onChange={e => handleUpdateEducation(edu.id, { field: e.target.value })} className={glassInputStyle} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label className="text-[10px] uppercase font-bold text-zinc-400">Institution / Campus / University</Label>
                            <Input value={edu.institution} onChange={e => handleUpdateEducation(edu.id, { institution: e.target.value })} placeholder="Campus Location | University Name" className={glassInputStyle} />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1.5">
                                <Label className="text-[10px] uppercase font-bold text-zinc-400">Start</Label>
                                <Input placeholder="20XX" value={edu.startDate} onChange={e => handleUpdateEducation(edu.id, { startDate: e.target.value })} className={glassInputStyle} />
                            </div>
                            <div className="space-y-1.5">
                                <Label className="text-[10px] uppercase font-bold text-zinc-400">End</Label>
                                <Input placeholder="20XX" value={edu.endDate} onChange={e => handleUpdateEducation(edu.id, { endDate: e.target.value })} className={glassInputStyle} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {(!data.education || data.education.length === 0) && (
                <p className="text-zinc-400 text-sm text-center py-10">No education added yet.</p>
            )}
        </div>
    );

    // ---------- ACHIEVEMENTS ----------
    const handleUpdateAchievement = (type: string, description: string) => {
        const existing = data.achievements?.find(a => a.type === type);
        let newAch = data.achievements ? [...data.achievements] : [];
        if (existing) {
            newAch = newAch.map(a => a.type === type ? { ...a, description } : a);
        } else {
            newAch.push({ id: Date.now().toString(), userId: data.user?.id || "", type, description });
        }
        // filter out empty descriptions to keep preview clean
        onChange({ achievements: newAch.filter(a => a.description.trim() !== "") });
    };

    const getAchVal = (type: string) => data.achievements?.find(a => a.type === type)?.description || "";

    const renderAchievements = () => (
        <div className="flex flex-col gap-6 animate-stagger-1 pb-12">
            <h3 className="text-[22px] font-light">Achievements & Extracurriculars</h3>
            
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Hackathons & Competitions</Label>
                    <Textarea 
                        placeholder="Mention any wins, finalist positions, or notable performances..." 
                        value={getAchVal("Hackathons & Competitions")}
                        onChange={e => handleUpdateAchievement("Hackathons & Competitions", e.target.value)}
                        className={`${glassInputStyle} resize-y min-h-[60px]`}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Technical Contributions / Open Source</Label>
                    <Textarea 
                        placeholder="Open-source involvement, community engagement, blogs..." 
                        value={getAchVal("Technical Contributions")}
                        onChange={e => handleUpdateAchievement("Technical Contributions", e.target.value)}
                        className={`${glassInputStyle} resize-y min-h-[60px]`}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Campus Engagement & Leadership Roles</Label>
                    <Textarea 
                        placeholder="Clubs, event organizing roles, or mentoring roles..." 
                        value={getAchVal("Campus Engagement / Leadership")}
                        onChange={e => handleUpdateAchievement("Campus Engagement / Leadership", e.target.value)}
                        className={`${glassInputStyle} resize-y min-h-[60px]`}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Personal Interests / Meaningful Hobbies</Label>
                    <Textarea 
                        placeholder="Hobbies that show initiative, discipline, creativity..." 
                        value={getAchVal("Personal Interests")}
                        onChange={e => handleUpdateAchievement("Personal Interests", e.target.value)}
                        className={`${glassInputStyle} resize-y min-h-[60px]`}
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full relative">
            <header className="px-10 py-6 border-b border-white/5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-zinc-500">Explanation / {activeSection}</span>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-[12px] font-semibold text-[#8C6D1F] bg-[#FCD34D]/20 px-4 py-1.5 rounded-full border border-[#FCD34D]/30 inline-flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        AI Optimize
                    </button>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto px-10 py-8 scroll-smooth custom-scrollbar">
                {activeSection === "brief" && renderBrief()}
                {activeSection === "skills" && renderSkills()}
                {activeSection === "experience" && renderExperience()}
                {activeSection === "projects" && renderProjects()}
                {activeSection === "education" && renderEducation()}
                {activeSection === "achievements" && (
                    <div className="flex flex-col gap-8 animate-stagger-1 pb-12">
                        <h3 className={`text-[22px] font-light ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>Achievements & Extracurriculars</h3>
                        {renderAchievements()}
                    </div>
                )}
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.4);
                    border-radius: 20px;
                }
            `}</style>
        </div>
    );
}
