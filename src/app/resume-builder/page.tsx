"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import ResumeEditor from "@/components/ResumeEditor";
import ResumePreview from "@/components/ResumePreview";
import ChatbotWidget from "@/components/ChatbotWidget";
import { ResumeData } from "@/types/resumeTypes";
import {
    FileText, Briefcase, Layout, Cpu, GraduationCap, Award,
    Menu, X, Sparkles, Edit2, Edit3
} from "lucide-react";

import { useTheme } from "@/context/ThemeContext";

export default function ResumeBuilderPage() {
    const [mounted, setMounted] = useState(false);
    const [activeSection, setActiveSection] = useState("brief");
    const { theme, resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    // Sidebar width (percentage for desktop)
    const [sidebarWidth, setSidebarWidth] = useState(18);
    const [isDragging, setIsDragging] = useState(false);

    // Mobile/Tablet overlays
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");

    const [resumeData, setResumeData] = useState<Partial<ResumeData>>({
        user: {
            id: "demo-user",
            name: "Aarav Sharma",
            email: "aarav.sharma@kalvium.community",
            linkedin: "linkedin.com/in/aaravsharma",
            github: "github.com/aaravsharma",
            portfolio: "aaravsharma.dev",
            personalStatement: "A full-stack developer proficient in React, Node.js, and Python, with strong problem-solving skills honed through competitive programming. Contributed to a live e-commerce platform during an internship at ShopEasy, where I optimized the checkout flow resulting in a 15% increase in conversions. Seeking an internship to deepen my backend architecture knowledge and contribute to scalable, user-centric products.",
        },
        skills: {
            id: "demo-user",
            languages: ["Python [Advanced]", "JavaScript [Intermediate]", "C++ [Basic]", "TypeScript [Intermediate]"],
            frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
            backend: ["Node.js", "Express.js", "Django"],
            databases: ["MongoDB", "MySQL", "Firebase Firestore"],
            tools: ["Git", "Docker", "REST APIs", "Postman", "Figma", "VS Code", "Linux"],
        },
        experience: [
            {
                id: "exp-1", userId: "demo-user", company: "ShopEasy Technologies", role: "Frontend Developer Intern",
                startDate: "Jun 2025", endDate: "Aug 2025", techUsed: [],
                description: [
                    "Built a dynamic product filtering system and revamped the checkout UI, reducing cart abandonment by 12% across 50K+ monthly active users.",
                    "Technology used: React, Redux Toolkit, Tailwind CSS, REST APIs, Git, and Jira for sprint tracking.",
                    "Impact delivered: Reduced average checkout time from 4.2 min to 2.8 min; contributed to a 15% increase in successful transactions within 2 months.",
                    "Recognitions or Highlights: Checkout redesign went live in production and was adopted by the mobile web team as the new baseline template.",
                    "Key Learnings: Gained hands-on experience with state management at scale, cross-functional collaboration with designers, and performance profiling using Lighthouse.",
                ],
            },
            {
                id: "exp-2", userId: "demo-user", company: "Kalvium", role: "Teaching Assistant – Web Development",
                startDate: "Jan 2025", endDate: "May 2025", techUsed: [],
                description: [
                    "Mentored 40+ students in JavaScript fundamentals and React, conducting weekly doubt-clearing sessions and reviewing project submissions.",
                    "Technology used: JavaScript, React, Node.js, GitHub Classroom.",
                    "Impact delivered: Improved average assignment submission quality by 25% and reduced TA escalation tickets by 30%.",
                ],
            },
        ],
        projects: [
            {
                id: "proj-1", userId: "demo-user", title: "Rebot – AI Resume Analyzer", repo: "github.com/aaravsharma/rebot",
                techStack: [], startDate: "Sep 2025", endDate: "Dec 2025",
                description: [
                    "Developed a full-stack AI-powered resume builder that parses user input and generates ATS-optimized resumes with real-time preview and PDF export.",
                    "Tech Stack and Frameworks used: Next.js 14, TypeScript, Tailwind CSS, Firebase Auth & Firestore, Google Gemini API, Mammoth.js for DOCX parsing.",
                    "Problem Solved / Use Case: Addressed the challenge students face in creating professional, ATS-friendly resumes without design expertise or paid tools.",
                    "Impact / Usage (if any): Used by 120+ Kalvium students during placement season; received positive feedback for intuitive UI and accurate template matching.",
                    "Challenges Tackled / Learning Outcome: Implemented complex page-split logic for multi-page previews and learned to integrate LLM APIs for content optimization.",
                ],
            },
            {
                id: "proj-2", userId: "demo-user", title: "FoodDash – Vendor Management Platform", repo: "github.com/aaravsharma/fooddash",
                techStack: [], startDate: "Mar 2025", endDate: "Jun 2025",
                description: [
                    "Built a real-time vendor management dashboard with order tracking, menu CRUD, and payment analytics for small food businesses.",
                    "Tech Stack and Frameworks used: React, Node.js, Express, MongoDB, Socket.io, Razorpay API.",
                    "Problem Solved / Use Case: Enabled local food vendors to digitize operations, reducing order processing time by 40%.",
                ],
            },
        ],
        education: [{
            id: "edu-1", userId: "demo-user", degree: "Kalvium's UG Program in CS", field: "Software Product Engineering",
            institution: "Coimbatore Campus | Bachelor's enrollment: B.Tech, Anna University", startDate: "2023", endDate: "2027",
        }],
        achievements: [
            { id: "ach-1", userId: "demo-user", type: "Hackathons & Competitions", description: "Finalist at HackWithInfy 2025 (Top 50 out of 12,000+ participants). Won 1st place at Kalvium Internal Hackathon for building an AI-based study planner." },
            { id: "ach-2", userId: "demo-user", type: "Technical Contributions", description: "Active contributor to open-source project 'react-pdf-viewer' with 3 merged PRs. Published a blog on Medium: 'Building Scalable REST APIs with Express & MongoDB' (500+ reads)." },
            { id: "ach-3", userId: "demo-user", type: "Campus Engagement / Leadership", description: "Lead Organizer of CodeSprint 2025 (campus-wide coding competition, 200+ participants). Peer mentor for 15 junior students in the Kalvium cohort." },
            { id: "ach-4", userId: "demo-user", type: "Personal Interests", description: "Competitive chess player (rated 1600 on Chess.com). Amateur landscape photographer with a curated Instagram portfolio." },
        ],
    });

    useEffect(() => { setMounted(true); }, []);

    // Responsive breakpoints
    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth;
            if (w < 768) setScreenSize("mobile");
            else if (w < 1024) setScreenSize("tablet");
            else setScreenSize("desktop");
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Save sidebar width
    useEffect(() => {
        if (screenSize === "desktop") {
            localStorage.setItem("resumeSidebarWidth", JSON.stringify(sidebarWidth));
        }
    }, [sidebarWidth, screenSize]);

    useEffect(() => {
        const saved = localStorage.getItem("resumeSidebarWidth");
        if (saved) setSidebarWidth(JSON.parse(saved));
    }, []);

    // Drag handler — sidebar resizer only
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (isDragging) {
            const pct = (e.clientX / window.innerWidth) * 100;
            setSidebarWidth(Math.max(5, Math.min(30, pct)));
        }
    }, [isDragging]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
    }, []);

    useEffect(() => {
        if (isDragging) {
            document.body.style.cursor = "col-resize";
            document.body.style.userSelect = "none";
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                window.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    const handleDataChange = (newData: Partial<ResumeData>) => {
        setResumeData(prev => ({ ...prev, ...newData }));
    };

    if (!mounted) return null;

    const sections = [
        { id: "brief", label: "Brief", icon: <FileText className="w-[18px] h-[18px]" /> },
        { id: "skills", label: "Skills", icon: <Cpu className="w-[18px] h-[18px]" /> },
        { id: "experience", label: "Experience", icon: <Briefcase className="w-[18px] h-[18px]" /> },
        { id: "projects", label: "Projects", icon: <Layout className="w-[18px] h-[18px]" /> },
        { id: "education", label: "Education", icon: <GraduationCap className="w-[18px] h-[18px]" /> },
        { id: "achievements", label: "Achievements", icon: <Award className="w-[18px] h-[18px]" /> },
    ];

    const isCollapsedSidebar = sidebarWidth < 12;
    const glassStyle = isDark 
        ? "bg-zinc-900/60 backdrop-blur-[24px] [-webkit-backdrop-filter:blur(24px)] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.4)] text-white/90"
        : "bg-white/60 backdrop-blur-[24px] [-webkit-backdrop-filter:blur(24px)] border border-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.04)] text-zinc-900";
    
    const darkGlass = isDark
        ? "bg-[#09090B]/95 backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] border border-white/10"
        : "bg-white/95 backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] border border-black/5 shadow-xl";

    // ===== SIDEBAR CONTENT =====
    const SidebarContent = ({ isOverlay = false }: { isOverlay?: boolean }) => (
        <div className="flex flex-col h-full p-4 gap-2">
            {isOverlay && (
                <div className="flex justify-between items-center mb-6">
                    <span className="text-[14px] font-semibold text-white/90">Source</span>
                    <button onClick={() => setIsSidebarOpen(false)} className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
                        <X className="w-4 h-4 text-white/60" />
                    </button>
                </div>
            )}
            {!isOverlay && !isCollapsedSidebar && (
                <span className="text-[14px] font-semibold text-white/50 px-2 mb-4 uppercase tracking-wider text-[10px]">Resume Source</span>
            )}
            <div className="flex flex-col gap-1">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => {
                            setActiveSection(section.id);
                            if (isOverlay) setIsSidebarOpen(false);
                        }}
                        title={isCollapsedSidebar && !isOverlay ? section.label : undefined}
                        className={`flex items-center ${isCollapsedSidebar && !isOverlay ? "justify-center px-2 py-3" : "gap-3 px-4 py-3.5"} rounded-2xl text-[13px] font-medium transition-all duration-300 ${
                            activeSection === section.id
                                ? (isDark ? "bg-white text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.15)]" : "bg-black text-white shadow-xl translate-x-1")
                                : (isDark ? "text-zinc-400 hover:bg-white/5 hover:text-white" : "text-zinc-500 hover:bg-black/5 hover:text-zinc-900")
                        }`}
                    >
                        {section.icon}
                        {(!isCollapsedSidebar || isOverlay) && <span>{section.label}</span>}
                    </button>
                ))}
            </div>
            <div className="mt-auto pt-4 border-t border-white/20">
                {isCollapsedSidebar && !isOverlay ? (
                    <div className="flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#FCD34D]/20 flex items-center justify-center">
                            <Sparkles className="w-3.5 h-3.5 text-[#8C6D1F]" />
                        </div>
                    </div>
                ) : (
                    <div className="p-3 rounded-[20px] bg-[#FCD34D]/10 border border-[#FCD34D]/20">
                        <p className="text-[10px] font-semibold text-[#8C6D1F] uppercase tracking-wider mb-1">AI Assistant</p>
                        <p className="text-[11px] text-[#8C6D1F]/80 leading-relaxed">Let Rebot optimize your content.</p>
                    </div>
                )}
            </div>
        </div>
    );

    // ====================
    // MOBILE LAYOUT
    // ====================
    if (screenSize === "mobile") {
        return (
            <div className={`min-h-screen flex flex-col relative font-sans ${isDark ? 'bg-zinc-950 text-white' : 'bg-[#FAFAFA] text-zinc-900'}`}>
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className={`absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full blur-[120px] ${isDark ? 'bg-blue-900/10' : 'bg-blue-600/5'}`} />
                </div>

                {/* Mobile Top Bar */}
                <div className={`flex justify-between items-center px-4 py-4 relative z-20 border-b backdrop-blur-md ${isDark ? 'border-white/5 bg-black/50' : 'border-black/5 bg-white/50'}`}>
                    <button onClick={() => setIsSidebarOpen(true)} className={`p-2 rounded-xl transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}>
                        <Menu className={`w-5 h-5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} />
                    </button>
                    <span className={`text-[16px] font-bold tracking-tight italic ${isDark ? 'bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent' : 'text-zinc-900'}`}>OneResume</span>
                    <div className="w-9" /> {/* spacer */}
                </div>

                {/* Editor */}
                <div className="flex-1 overflow-y-auto relative z-10">
                    <ResumeEditor activeSection={activeSection} data={resumeData} onChange={handleDataChange} />
                </div>

                {/* Sidebar Drawer */}
                {isSidebarOpen && (
                    <>
                        <div className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
                        <div className={`fixed left-0 top-0 w-72 h-full z-50 ${glassStyle} bg-zinc-950/95 shadow-2xl animate-slideIn border-r border-white/10`}>
                            <SidebarContent isOverlay />
                        </div>
                    </>
                )}

                {/* Floating AI Chatbot */}
                <ChatbotWidget />

                <style>{`
                    @keyframes slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }
                    .animate-slideIn { animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                `}</style>
            </div>
        );
    }

    // ====================
    // TABLET LAYOUT
    // ====================
    if (screenSize === "tablet") {
        return (
            <div className={`min-h-screen h-screen flex flex-col relative font-sans overflow-hidden ${isDark ? 'bg-zinc-950 text-white' : 'bg-[#FAFAFA] text-zinc-900'}`}>
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className={`absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full blur-[120px] ${isDark ? 'bg-blue-900/10' : 'bg-blue-600/5'}`} />
                    <div className={`absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[100px] ${isDark ? 'bg-purple-900/10' : 'bg-purple-600/5'}`} />
                </div>

                <Navbar />

                {/* Tablet Top Bar */}
                <div className={`flex items-center gap-3 px-6 py-4 relative z-20 border-b ${isDark ? 'border-white/5' : 'border-black/5'}`}>
                    <button onClick={() => setIsSidebarOpen(true)} className={`p-2 rounded-xl transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}>
                        <Menu className={`w-5 h-5 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} />
                    </button>
                    <span className={`flex-1 text-[12px] font-bold text-zinc-500 uppercase tracking-[0.2em]`}>Explanation / {activeSection}</span>
                </div>

                <main className="flex-1 flex overflow-hidden relative z-10 px-6 pb-6 gap-5">
                    {/* Editor (Explanation) */}
                    <section className={`flex-1 rounded-[28px] flex flex-col overflow-hidden border border-white/5 bg-zinc-900/40 shadow-2xl ${glassStyle}`}>
                        <ResumeEditor activeSection={activeSection} data={resumeData} onChange={handleDataChange} />
                    </section>

                    {/* Preview (Rebot Studio) */}
                    <section className={`w-[45%] rounded-[28px] flex flex-col overflow-hidden border shadow-2xl ${glassStyle} ${isDark ? 'border-white/5' : 'border-black/5'}`}>
                        <div className="flex items-center justify-between p-6 pb-2">
                            <div className="flex items-center gap-2">
                                <h2 className={`text-lg font-medium px-1`}>Rebot Studio</h2>
                                <div className={`px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase tracking-wider ${isDark ? 'bg-white/5 border-white/10 text-white/50' : 'bg-black/5 border-black/10 text-black/50'}`}>Expert</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer text-white/40">
                                    <Edit2 className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                        <ResumePreview data={resumeData} isStudio />
                    </section>
                </main>

                {/* Sidebar Drawer */}
                {isSidebarOpen && (
                    <>
                        <div className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
                        <div className={`fixed left-0 top-0 w-72 h-full z-50 ${glassStyle} bg-zinc-950/95 shadow-2xl animate-slideIn border-r border-white/10`}>
                            <SidebarContent isOverlay />
                        </div>
                    </>
                )}

                {/* Floating AI Chatbot */}
                <ChatbotWidget />

                <style>{`
                    @keyframes slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }
                    .animate-slideIn { animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                `}</style>
            </div>
        );
    }

    // ====================
    // DESKTOP LAYOUT (Sidebar | Editor + Preview)
    // ====================
    const editorWidth = 100 - sidebarWidth;

    return (
        <div className={`min-h-screen h-screen flex flex-col relative overflow-hidden font-sans ${isDark ? 'bg-zinc-950 text-white' : 'bg-[#FAFAFA] text-zinc-900'}`}>
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className={`absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full blur-[120px] ${isDark ? 'bg-blue-900/10' : 'bg-blue-600/5'}`} />
                <div className={`absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[100px] ${isDark ? 'bg-purple-900/10' : 'bg-purple-600/5'}`} />
                <div className={`absolute bottom-[0%] right-[10%] w-[60%] h-[60%] rounded-full blur-[120px] ${isDark ? 'bg-zinc-800/20' : 'bg-zinc-800/10'}`} />
            </div>

            <Navbar />

            <main className="flex-1 flex overflow-hidden relative z-10 w-full max-w-[2400px] mx-auto px-4 pb-4 gap-4">

                {/* === LEFT SIDEBAR === */}
                <aside
                    style={{ width: `${sidebarWidth}%`, transition: isDragging ? "none" : "width 0.2s ease" }}
                    className={`rounded-[28px] flex flex-col overflow-hidden shrink-0 border border-white/5 bg-zinc-900/40 ${glassStyle}`}
                >
                    <SidebarContent />
                </aside>



                {/* === CENTER (Editor + Preview) === */}
                <div style={{ width: `${editorWidth}%`, transition: isDragging ? "none" : "width 0.2s ease" }} className="flex gap-4 min-w-0">
                    {/* Editor */}
                    <section className={`flex-1 rounded-[28px] flex flex-col overflow-hidden ${glassStyle}`}>
                        <ResumeEditor activeSection={activeSection} data={resumeData} onChange={handleDataChange} />
                    </section>

                    {/* Preview */}
                    <section className={`w-[48%] rounded-[28px] flex flex-col overflow-hidden ${glassStyle}`}>
                        <div className="flex items-center justify-between p-5 pb-2">
                            <h2 className="text-lg font-medium px-1">Rebot Studio</h2>
                            <div className="px-2.5 py-1 rounded-full bg-blue-100/50 border border-blue-200/50 text-blue-600 text-[10px] font-bold">PRO</div>
                        </div>
                        <ResumePreview data={resumeData} isStudio />
                    </section>
                </div>
            </main>

            {/* Floating AI Chatbot Icon */}
            <ChatbotWidget />
        </div>
    );
}
