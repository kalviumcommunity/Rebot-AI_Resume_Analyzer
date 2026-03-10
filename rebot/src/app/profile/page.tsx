"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

// Mocking icons with TS support
const icons = {
    Setting: (props: any) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
    ),
    Bell: (props: any) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
    ),
    User: (props: any) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    ),
    ArrowUpRight: (props: any) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
    ),
    ChevronDown: (props: any) => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    ),
    ChevronUp: (props: any) => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    ),
    MoreVertical: (props: any) => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
        </svg>
    ),
    Play: (props: any) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
    ),
    Pause: (props: any) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
    ),
    Clock: (props: any) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
    ),
    Monitor: (props: any) => (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
    ),
    Lightning: (props: any) => (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
    ),
    Chat: (props: any) => (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <line x1="9" y1="10" x2="15" y2="10"></line>
        </svg>
    ),
    Ruler: (props: any) => (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
            <path d="m15 5 4 4"></path>
        </svg>
    ),
    Link: (props: any) => (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
    ),
    Check: (props: any) => (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    ),
    LogOut: (props: any) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
    ),
    Plus: (props: any) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    ),
};

interface Course {
    name: string;
    duration: string;
    fee: string;
    status: string;
}

const ProfileDashboard = () => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    
    // Education State
    const [editingEdu, setEditingEdu] = useState(false);
    const [edu10, setEdu10] = useState({ percent: 85, board: 'CBSE' });
    const [edu12, setEdu12] = useState({ percent: 78, board: 'TN HSC' });
    const [tempEdu10, setTempEdu10] = useState({ ...edu10 });
    const [tempEdu12, setTempEdu12] = useState({ ...edu12 });
    
    // Course State
    const [editingCourse, setEditingCourse] = useState(false);
    const [courseData, setCourseData] = useState<Course[]>([{ name: 'GenAI', duration: '6 Months', fee: '₹7,000/mo', status: 'Applied' }]);
    const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
    const [tempCourse, setTempCourse] = useState<Course>({ name: '', duration: '', fee: '', status: 'Applied' });
    const [isAddingCourse, setIsAddingCourse] = useState(false);
    
    // Personal State
    const [editingPersonal, setEditingPersonal] = useState(false);
    const [personalData, setPersonalData] = useState<any>({ email: 'student@kalvium.com', dob: '2000-01-15', mobile: '+91 98765 43210', location: 'Chennai, TN' });
    const [tempPersonal, setTempPersonal] = useState<any>({ ...personalData });
    
    // Chat State
    const [chatMessages, setChatMessages] = useState<any[]>([{ role: 'ai', content: "Hi! I'm your ProfileLMS AI Assistant. Ask me anything about your courses or profile." }]);
    const [chatInput, setChatInput] = useState('');
    const [chatLoading, setChatLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const [isChatMinimized, setIsChatMinimized] = useState(false);

    // Profile State
    const [profileName, setProfileName] = useState('Lora Piterson');
    const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop');
    const [editingProfile, setEditingProfile] = useState(false);
    const [tempProfileName, setTempProfileName] = useState(profileName);
    const [tempProfileImage, setTempProfileImage] = useState(profileImage);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [profileStats, setProfileStats] = useState({ courses: 4, modules: 12, certificates: 2 });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatMessages, chatLoading]);

    const handleChatSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!chatInput.trim() || chatLoading) return;
        const msg = chatInput.trim();
        setChatInput('');
        setChatMessages(prev => [...prev, { role: 'user', content: msg }]);
        setChatLoading(true);
        
        // Mocking AI response
        setTimeout(() => {
            setChatMessages(prev => [...prev, { role: 'ai', content: "I'm currently in preview mode. Once the backend is connected, I'll be able to help you with " + msg }]);
            setChatLoading(false);
        }, 1000);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const renderMetric = (label: string, value: number, icon: React.ReactNode, vertical = false) => {
        if (vertical) {
            return (
                <div key={label} className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md flex-1 w-full text-center">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#FCD34D]/20 text-[#FCD34D] border border-[#FCD34D]/30">
                        {icon}
                    </div>
                    <span className="text-[18px] font-light text-white leading-none mt-1">{value}</span>
                    <span className="text-[8px] font-medium text-white/40 uppercase tracking-wider">{label}</span>
                </div>
            );
        }
        return (
            <div key={label} className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-[#5A5B5F]">
                    {icon}
                </div>
                <div className="flex flex-col">
                    <span className="text-[36px] md:text-[44px] leading-none font-light tracking-tighter">{value}</span>
                    <span className="text-[12px] font-medium text-[#7A7B7F]">{label}</span>
                </div>
            </div>
        );
    };

    const glassStyle = "bg-white/40 backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]";
    const hoverGlassStyle = "transition-all duration-400 ease-out hover:bg-white/50 hover:shadow-xl hover:-translate-y-1";
    const darkGlassStyle = "bg-[#2A2B2F]/90 backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] border border-white/10 shadow-[0_12px_40px_0_rgba(0,0,0,0.2)]";

    return (
        <div className={`min-h-screen w-full font-sans text-[#1D1E20] overflow-hidden bg-[#FDFBF7] relative ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>

            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-[#FFF2CB]/80 to-[#FDFBF7]/10 blur-[120px]" />
                <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#60A5FA]/20 to-transparent blur-[100px]" />
                <div className="absolute bottom-[0%] right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-[#FFF4D5]/60 to-transparent blur-[120px]" />
            </div>

            <style>{`
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-stagger-1 { animation: slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; opacity: 0; }
        .animate-stagger-2 { animation: slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
        .animate-stagger-3 { animation: slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards; opacity: 0; }
        .animate-stagger-4 { animation: slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards; opacity: 0; }
        
        .hatched-pattern {
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 6px,
            rgba(255, 255, 255, 0.8) 6px,
            rgba(255, 255, 255, 0.8) 8px
          );
        }
        
        ::-webkit-scrollbar { width: 0px; background: transparent; }
      `}</style>

            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-6 flex flex-col gap-8">

            <Navbar />

                {/* Welcome Section */}
                <section className="flex flex-col md:flex-row items-start md:items-end justify-between px-2 gap-6 animate-stagger-2">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[32px] md:text-[42px] font-light tracking-tight text-[#1D1E20]">Hello, {profileName}</h1>
                        <span className="text-[12px] font-medium text-[#7A7B7F]">Welcome to your dashboard profile</span>
                    </div>

                    <div className={`flex items-center gap-6 md:gap-10 flex-wrap transition-all duration-500 ${isChatMinimized ? 'opacity-0 -translate-y-4 pointer-events-none scale-95' : 'opacity-100 translate-y-0'}`}>
                        {renderMetric('Courses', profileStats.courses, <icons.Monitor className="w-4 h-4" />)}
                        {renderMetric('Modules', profileStats.modules, <icons.Lightning className="w-4 h-4" />)}
                        {renderMetric('Certificates', profileStats.certificates, <icons.Check className="w-4 h-4" />)}
                    </div>
                </section>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full pb-10">

                    {/* Left Column */}
                    <div className="lg:col-span-3 flex flex-col gap-6 animate-stagger-3">

                        {/* Profile Card */}
                        <div className={`relative h-[320px] rounded-[32px] overflow-hidden group ${glassStyle} p-2`}>
                            <div className="absolute inset-2 rounded-[24px] overflow-hidden bg-[#D3CECA]">
                                <img src={profileImage} alt="Profile" className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105" />
                            </div>

                            <div className="absolute bottom-6 left-6 flex flex-col z-10">
                                <span className="text-[20px] font-medium text-white drop-shadow-md">{profileName}</span>
                                <span className="text-[12px] font-light text-white/80 drop-shadow-md">Senior Student</span>
                            </div>

                            <button
                                onClick={() => {
                                    if (!editingProfile) {
                                        setTempProfileName(profileName);
                                        setTempProfileImage(profileImage);
                                    }
                                    setEditingProfile(!editingProfile);
                                }}
                                className={`absolute bottom-5 right-5 z-10 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center border transition-all duration-300 shadow-lg ${editingProfile ? 'bg-red-500/20 border-red-300/40 hover:bg-red-500/30' : 'bg-white/20 border-white/30 hover:bg-white/30'}`}
                            >
                                {editingProfile ? (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                ) : (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                                )}
                            </button>
                        </div>

                        {/* Profile Edit Panel */}
                        <div className={`rounded-[32px] p-6 flex flex-col gap-4 transition-all duration-500 ${glassStyle} ${editingProfile ? 'opacity-100 filter-none pointer-events-auto' : 'opacity-40 blur-[3px] pointer-events-none'}`}>
                            <span className="text-[14px] font-semibold text-[#1D1E20]">Edit Profile</span>

                            <div className="flex flex-col gap-1">
                                <label className="text-[9px] font-medium text-[#7A7B7F] uppercase tracking-wider">Profile Image URL</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={tempProfileImage}
                                        onChange={(e) => setTempProfileImage(e.target.value)}
                                        className="flex-1 px-3 py-2 rounded-xl bg-white/40 border border-white/40 text-[11px] outline-none"
                                        placeholder="Paste image URL..."
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-[9px] font-medium text-[#7A7B7F] uppercase tracking-wider">Full Name</label>
                                <input
                                    type="text"
                                    value={tempProfileName}
                                    onChange={(e) => setTempProfileName(e.target.value)}
                                    className="w-full px-3 py-2 rounded-xl bg-white/40 border border-white/40 text-[12px] outline-none"
                                />
                            </div>

                            <div className="flex gap-2 mt-1">
                                <button
                                    onClick={() => {
                                        setProfileName(tempProfileName);
                                        setProfileImage(tempProfileImage);
                                        setEditingProfile(false);
                                    }}
                                    className="flex-1 py-2 rounded-xl bg-[#FCD34D] text-[#8C6D1F] text-[11px] font-semibold hover:bg-[#FCD34D]/80 transition-all shadow-md"
                                >Save</button>
                                <button
                                    onClick={() => setEditingProfile(false)}
                                    className="flex-1 py-2 rounded-xl bg-white/30 text-[#7A7B7F] text-[11px] font-semibold border border-white/30"
                                >Cancel</button>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column */}
                    <div className="lg:col-span-6 flex flex-col gap-6 animate-stagger-4">

                        {/* Personal Details Card */}
                        <div className={`rounded-[32px] p-7 flex flex-col relative ${glassStyle} ${hoverGlassStyle}`}>
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex flex-col">
                                    <span className="text-[18px] font-medium text-[#1D1E20]">Personal Details</span>
                                    <span className="text-[11px] font-medium text-[#7A7B7F] mt-1">Contact Information</span>
                                </div>
                                <button
                                    onClick={() => {
                                        if (!editingPersonal) setTempPersonal({ ...personalData });
                                        setEditingPersonal(!editingPersonal);
                                    }}
                                    className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center border transition-all duration-300 ${editingPersonal ? 'bg-red-500/20 border-red-300/40' : 'bg-white/20 border-white/30'}`}
                                >
                                    {editingPersonal ? (
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                    ) : (
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                                    )}
                                </button>
                            </div>

                            {editingPersonal ? (
                                <div className="grid grid-cols-2 gap-3">
                                    {[{ label: 'Email', key: 'email', type: 'email' }, { label: 'DOB', key: 'dob', type: 'date' }, { label: 'Mobile', key: 'mobile', type: 'tel' }, { label: 'Location', key: 'location', type: 'text' }].map((field) => (
                                        <div key={field.key} className="flex flex-col gap-1">
                                            <label className="text-[9px] font-medium text-[#7A7B7F] uppercase tracking-wider">{field.label}</label>
                                            <input
                                                type={field.type}
                                                value={tempPersonal[field.key]}
                                                onChange={(e) => setTempPersonal({ ...tempPersonal, [field.key]: e.target.value })}
                                                className="w-full px-3 py-2 rounded-xl bg-white/40 border border-white/40 text-[12px] outline-none"
                                            />
                                        </div>
                                    ))}
                                    <div className="col-span-2 flex gap-2 mt-2">
                                        <button
                                            onClick={() => {
                                                setPersonalData({ ...tempPersonal });
                                                setEditingPersonal(false);
                                            }}
                                            className="flex-1 py-2 rounded-xl bg-[#FCD34D] text-[#8C6D1F] text-[11px] font-semibold"
                                        >Save</button>
                                        <button
                                            onClick={() => setEditingPersonal(false)}
                                            className="flex-1 py-2 rounded-xl bg-white/30 text-[#7A7B7F] text-[11px] font-semibold"
                                        >Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        { icon: <icons.Chat className="w-4 h-4" />, label: 'Email', value: personalData.email },
                                        { icon: <icons.Clock className="w-4 h-4" />, label: 'DOB', value: personalData.dob },
                                        { icon: <icons.Lightning className="w-4 h-4" />, label: 'Mobile', value: personalData.mobile },
                                        { icon: <icons.Link className="w-4 h-4" />, label: 'Location', value: personalData.location }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col gap-2 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 border border-white/30 text-[#5A5B5F]">
                                                {item.icon}
                                            </div>
                                            <span className="text-[9px] font-medium text-[#7A7B7F] uppercase tracking-wider">{item.label}</span>
                                            <span className="text-[12px] font-medium text-[#1D1E20] truncate">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Education & Course Tracker Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Education Details Card */}
                            <div className={`rounded-[32px] p-7 flex flex-col relative ${glassStyle} ${hoverGlassStyle}`}>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex flex-col">
                                        <span className="text-[18px] font-medium text-[#1D1E20]">Education</span>
                                        <span className="text-[11px] font-medium text-[#7A7B7F] mt-1">Academic Results</span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (!editingEdu) {
                                                setTempEdu10({ ...edu10 });
                                                setTempEdu12({ ...edu12 });
                                            }
                                            setEditingEdu(!editingEdu);
                                        }}
                                        className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center border transition-all duration-300 ${editingEdu ? 'bg-red-500/20 border-red-300/40' : 'bg-white/20 border-white/30'}`}
                                    >
                                        {editingEdu ? (
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                        ) : (
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                                        )}
                                    </button>
                                </div>

                                {editingEdu ? (
                                    <div className="flex flex-col gap-4">
                                        {[{ label: '10th', data: tempEdu10, setData: setTempEdu10 }, { label: '12th', data: tempEdu12, setData: setTempEdu12 }].map((item, i) => (
                                            <div key={i} className="flex flex-col gap-1.5">
                                                <span className="text-[11px] font-medium text-[#1D1E20]">{item.label} Results</span>
                                                <div className="flex gap-2">
                                                    <input
                                                        type="number"
                                                        value={item.data.percent}
                                                        onChange={(e) => item.setData({ ...item.data, percent: Number(e.target.value) })}
                                                        className="flex-1 px-3 py-2 rounded-xl bg-white/40 border border-white/40 text-[12px] outline-none"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={item.data.board}
                                                        onChange={(e) => item.setData({ ...item.data, board: e.target.value })}
                                                        className="flex-1 px-3 py-2 rounded-xl bg-white/40 border border-white/40 text-[12px] outline-none"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <div className="flex gap-2">
                                            <button onClick={() => { setEdu10(tempEdu10); setEdu12(tempEdu12); setEditingEdu(false); }} className="flex-1 py-2 rounded-xl bg-[#FCD34D] text-[#8C6D1F] text-[11px] font-semibold">Save</button>
                                            <button onClick={() => setEditingEdu(false)} className="flex-1 py-2 rounded-xl bg-white/30 text-[#7A7B7F] text-[11px] font-semibold">Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-5">
                                        <div className="relative">
                                            <div className="flex items-center justify-between mb-1.5">
                                                <span className="text-[11px] font-medium text-[#1D1E20]">10th Board</span>
                                                <span className="text-[10px] font-medium text-[#7A7B7F] uppercase">{edu10.board}</span>
                                            </div>
                                            <div className="relative h-10 bg-[#FCD34D]/40 rounded-full flex items-center px-4 border border-[#FCD34D]/30">
                                                <span className="text-[12px] font-medium text-[#8C6D1F]">{edu10.percent}%</span>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="flex items-center justify-between mb-1.5">
                                                <span className="text-[11px] font-medium text-[#1D1E20]">12th Board</span>
                                                <span className="text-[10px] font-medium text-[#7A7B7F] uppercase">{edu12.board}</span>
                                            </div>
                                            <div className="relative h-10 bg-[#2A2B2F]/60 rounded-full flex items-center px-4 border border-white/10">
                                                <span className="text-[12px] font-medium text-white">{edu12.percent}%</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Course Tracker Card */}
                            <div className={`rounded-[32px] p-7 flex flex-col items-center relative ${glassStyle} ${hoverGlassStyle}`}>
                                <div className="w-full flex justify-between items-start mb-4">
                                    <div className="flex flex-col">
                                        <span className="text-[18px] font-medium text-[#1D1E20]">Course Tracker</span>
                                        <span className="text-[11px] font-medium text-[#7A7B7F] mt-0.5">Enrolled Program</span>
                                    </div>
                                </div>

                                <div className="relative w-[180px] h-[180px] flex items-center justify-center">
                                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="4" strokeDasharray="4 4" className="opacity-50" />
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#FCD34D" strokeWidth="6" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="70" className="transition-all duration-1000 ease-out" />
                                    </svg>
                                    <div className="absolute flex flex-col items-center justify-center text-center px-4">
                                        <span className="text-[20px] font-light text-[#1D1E20] leading-tight line-clamp-2">{courseData[currentCourseIndex]?.name || 'GenAI'}</span>
                                        <span className="text-[11px] font-medium text-[#7A7B7F] mt-1">6 Months</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mt-auto w-full justify-between">
                                    <span className={`text-[10px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider bg-[#FCD34D]/20 text-[#8C6D1F] border border-[#FCD34D]/20`}>
                                        {courseData[currentCourseIndex]?.status}
                                    </span>
                                    <div className="bg-white/20 px-3 py-1.5 rounded-full border border-white/30">
                                        <span className="text-[11px] font-semibold text-[#1D1E20]">₹7,000/mo</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: AI Chatbot */}
                    <div className="lg:col-span-3 flex flex-col gap-6 animate-stagger-1 h-full">
                        <div className={`flex-1 rounded-[32px] flex flex-col relative overflow-hidden transition-all duration-500 shadow-2xl ${isChatMinimized ? 'max-h-[100px]' : `${darkGlassStyle} hover:-translate-y-1 max-h-[600px]`} h-full`}>

                            {isChatMinimized ? (
                                <div className="flex items-center justify-between p-6 h-full">
                                    <span className="text-white text-sm font-medium">AI Assistant</span>
                                    <button
                                        onClick={() => setIsChatMinimized(false)}
                                        className="w-10 h-10 rounded-full bg-[#FCD34D] flex items-center justify-center shadow-lg"
                                    >
                                        <icons.Chat className="w-5 h-5 text-[#24252A]" />
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="flex justify-between items-center p-5 pb-3 border-b border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FCD34D] to-[#F59E0B] flex items-center justify-center">
                                                <icons.Chat className="w-4 h-4 text-[#24252A]" />
                                            </div>
                                            <span className="text-[14px] font-semibold text-white">Assistant</span>
                                        </div>
                                        <button onClick={() => setIsChatMinimized(true)} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" /></svg>
                                        </button>
                                    </div>

                                    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-0">
                                        {chatMessages.map((msg, i) => (
                                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[12px] leading-relaxed ${msg.role === 'user'
                                                    ? 'bg-[#FCD34D] text-[#8C6D1F] rounded-br-none'
                                                    : 'bg-white/10 text-white/90 rounded-bl-none border border-white/10'
                                                    }`}>
                                                    {msg.content}
                                                </div>
                                            </div>
                                        ))}
                                        {chatLoading && <div className="text-white/40 text-[10px] ml-1">AI is thinking...</div>}
                                        <div ref={chatEndRef} />
                                    </div>

                                    <div className="p-4 pt-4 pb-6 bg-[#2A2B2F]/40 backdrop-blur-xl border-t border-white/5">
                                        <form onSubmit={handleChatSubmit} className="flex gap-2">
                                            <input
                                                type="text"
                                                value={chatInput}
                                                onChange={(e) => setChatInput(e.target.value)}
                                                placeholder="Type a message..."
                                                className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-[12px] text-white outline-none"
                                            />
                                            <button type="submit" className="w-10 h-10 rounded-xl bg-[#FCD34D] flex items-center justify-center shadow-lg shrink-0">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#24252A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                                            </button>
                                        </form>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDashboard;
