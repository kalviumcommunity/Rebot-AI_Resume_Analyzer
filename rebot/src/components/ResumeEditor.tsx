"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Sparkles, Send } from "lucide-react";
import { ResumeData } from "@/types/resumeTypes";

interface ResumeEditorProps {
    activeSection: string;
    data: Partial<ResumeData>;
    onChange: (data: Partial<ResumeData>) => void;
}

export default function ResumeEditor({ activeSection, data, onChange }: ResumeEditorProps) {
    const [aiInput, setAiInput] = useState("");

    const glassInputStyle = "bg-white/40 border-white/60 focus:bg-white/60 transition-all rounded-xl text-[14px]";

    const renderBrief = () => (
        <div className="flex flex-col gap-8 animate-stagger-1">
            <div className="flex flex-col gap-2">
                <h3 className="text-[22px] font-light text-[#1D1E20]">Basic Information</h3>
                <p className="text-[13px] text-[#7A7B7F]">This is how recruiters will contact you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-[#7A7B7F]">Full Name</Label>
                    <Input 
                        placeholder="Lora Piterson" 
                        value={data.user?.name || ""} 
                        className={glassInputStyle}
                        onChange={(e) => onChange({ user: { ...data.user!, name: e.target.value } })}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-[#7A7B7F]">Email Address</Label>
                    <Input 
                        placeholder="student@example.com" 
                        value={data.user?.email || ""} 
                        className={glassInputStyle}
                        onChange={(e) => onChange({ user: { ...data.user!, email: e.target.value } })}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-[#7A7B7F]">LinkedIn Profile</Label>
                    <Input 
                        placeholder="linkedin.com/in/..." 
                        value={data.user?.linkedin || ""} 
                        className={glassInputStyle}
                        onChange={(e) => onChange({ user: { ...data.user!, linkedin: e.target.value } })}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-[#7A7B7F]">GitHub Profile</Label>
                    <Input 
                        placeholder="github.com/..." 
                        value={data.user?.github || ""} 
                        className={glassInputStyle}
                        onChange={(e) => onChange({ user: { ...data.user!, github: e.target.value } })}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label className="text-[11px] font-semibold uppercase tracking-wider text-[#7A7B7F]">Personal Statement</Label>
                <Textarea 
                    placeholder="Write a brief intro about yourself..." 
                    rows={6} 
                    value={data.user?.personalStatement || ""} 
                    className={`${glassInputStyle} resize-none`}
                    onChange={(e) => onChange({ user: { ...data.user!, personalStatement: e.target.value } })}
                />
            </div>
        </div>
    );

    const renderExperience = () => (
        <div className="flex flex-col gap-6 animate-stagger-1">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-[22px] font-light">Experience</h3>
                <Button className="rounded-full bg-[#2A2B2F] text-white hover:scale-105 transition-all text-[12px] px-5">
                    <Plus className="w-4 h-4 mr-2" /> Add Experience
                </Button>
            </div>
            
            <div className="p-6 rounded-[24px] bg-white/20 border border-white/40 flex flex-col gap-6 relative group border-dashed">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label className="text-[10px] uppercase font-bold text-[#7A7B7F]">Company</Label>
                        <Input placeholder="Google" defaultValue="Tech Corp" className={glassInputStyle} />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-[10px] uppercase font-bold text-[#7A7B7F]">Role</Label>
                        <Input placeholder="Software Engineer" defaultValue="Frontend Developer" className={glassInputStyle} />
                    </div>
                </div>
                <div className="space-y-1.5">
                    <Label className="text-[10px] uppercase font-bold text-[#7A7B7F]">Description</Label>
                    <Textarea placeholder="Bullet points..." rows={4} className={glassInputStyle} />
                </div>
                <button className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500/10 text-red-500 border border-red-200/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>
        </div>
    );

    const renderProjects = () => (
        <div className="flex flex-col gap-6 animate-stagger-1">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-[22px] font-light">Projects</h3>
                <Button className="rounded-full bg-[#2A2B2F] text-white hover:scale-105 transition-all text-[12px] px-5">
                    <Plus className="w-4 h-4 mr-2" /> Add Project
                </Button>
            </div>
            <p className="text-[#7A7B7F] text-sm text-center py-10">No projects added yet. Click above to start.</p>
        </div>
    );

    const renderSkills = () => (
        <div className="flex flex-col gap-8 animate-stagger-1">
            <h3 className="text-[22px] font-light">Technical Skills</h3>
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-[#7A7B7F]">Languages & Frameworks</Label>
                    <Input placeholder="React, Python, Node.js..." className={glassInputStyle} />
                </div>
                <div className="space-y-2">
                    <Label className="text-[11px] font-semibold uppercase tracking-wider text-[#7A7B7F]">Tools & Databases</Label>
                    <Input placeholder="Git, Docker, MongoDB..." className={glassInputStyle} />
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full relative">
            <header className="px-10 py-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[14px] font-medium uppercase tracking-[2px] text-[#7A7B7F]">Editor / {activeSection}</span>
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
                {activeSection === "experience" && renderExperience()}
                {activeSection === "projects" && renderProjects()}
                {activeSection === "skills" && renderSkills()}
            </div>

            {/* Bottom Input Area matching "Chat" vibe */}
            <div className="p-8 border-t border-white/20 bg-white/10 backdrop-blur-xl">
                <div className="relative group max-w-4xl mx-auto">
                    <div className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Sparkles className="w-6 h-6 text-[#FCD34D]" />
                    </div>
                    <form 
                        onSubmit={(e) => { e.preventDefault(); /* AI logic */ setAiInput(""); }}
                        className="flex items-center gap-4 bg-white/40 border border-white/60 rounded-[28px] p-2 pl-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <input 
                            type="text" 
                            placeholder={`Optimize ${activeSection} section with AI...`}
                            value={aiInput}
                            onChange={(e) => setAiInput(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none text-[15px] text-[#1D1E20] py-3 placeholder:text-[#9A9B9F]"
                        />
                        <button className="w-12 h-12 rounded-full bg-[#2A2B2F] text-white flex items-center justify-center hover:scale-105 transition-all shadow-lg active:scale-95">
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>
                <div className="flex justify-center mt-4">
                    <span className="text-[10px] font-medium text-[#7A7B7F] uppercase tracking-widest">rebot studio v0.1</span>
                </div>
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
