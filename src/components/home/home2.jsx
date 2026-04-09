'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  Wand2, 
  FileText, 
  Link, 
  Youtube,
  Aperture,
  Maximize2,
  Move,
  Play
} from 'lucide-react';

export default function InteractiveStorySection() {
  // Animation variants for scroll reveal
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

const floatCard = (delay) => ({
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay,
      duration: 0.5
    }
  }
});
  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-sans pb-32">
      
      {/* Background Gradient matching the warm bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-100/40 via-transparent to-transparent pointer-events-none" />

      {/* Navbar specific to this image */}
      <nav className="flex items-center justify-between px-6 py-4 sticky top-0 z-50">
        {/* Left Side: Logo & Glass Menu */}
        <div className="flex items-center gap-6">
          <div className="bg-slate-300/30 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-6 shadow-sm border border-white/20">
            <div className="flex items-center gap-2 cursor-pointer text-slate-800 mr-4">
              <Aperture className="w-6 h-6 stroke-[2.5]" />
              <span className="text-xl font-bold tracking-tight">Rebot</span>
            </div>
            <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-slate-900 transition">Features</a>
              <a href="#" className="hover:text-slate-900 transition">Pricing</a>
              <a href="#" className="hover:text-slate-900 transition">Tutorial</a>
              <a href="#" className="hover:text-slate-900 transition">Blog</a>
              <a href="#" className="flex items-center gap-1 hover:text-slate-900 transition">
                Tools <ChevronDown className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="hover:text-slate-900 transition">Community</a>
              <a href="#" className="hover:text-slate-900 transition">FAQs</a>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-full text-sm font-medium text-slate-800 bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition">
            Log in
          </button>
          <button className="px-5 py-2 rounded-full text-sm font-medium text-white bg-[#1c1c1c] hover:bg-black transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Top Action Pills (Start from here) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="flex flex-col items-center mt-8 mb-24 z-10 relative"
      >
        <p className="text-gray-400 text-sm mb-4 font-medium">Start from here</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.03)] px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:shadow-md transition-all">
            <Wand2 className="w-4 h-4 text-red-400" />
            Refresh your deck <span className="text-gray-400 ml-1">&gt;</span>
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.03)] px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:shadow-md transition-all">
            <FileText className="w-4 h-4 text-blue-400" />
            Start from a doc <span className="text-gray-400 ml-1">&gt;</span>
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.03)] px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:shadow-md transition-all">
            <Link className="w-4 h-4 text-green-500" />
            Turn a link into a deck <span className="text-gray-400 ml-1">&gt;</span>
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.03)] px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:shadow-md transition-all">
            <Youtube className="w-4 h-4 text-red-500" />
            Summarize a YouTube video <span className="text-gray-400 ml-1">&gt;</span>
          </button>
        </div>
      </motion.div>

      {/* Main Interactive Stories Hero Section */}
      <div className="relative w-full max-w-6xl mx-auto h-[500px] flex items-center justify-center">
        
        {/* Central Text Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center z-20 flex flex-col items-center mt-32"
        >
          <div className="border border-gray-200 text-gray-500 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-6 bg-white/50 backdrop-blur-sm">
            Interactive Story
          </div>
          <h2 className="text-[#0a0a1a] text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            From slides to <br />
            <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 'normal' }}>Interactive</span> stories
          </h2>
        </motion.div>

        {/* FLOATING CARDS (Positioned absolutely around the center) */}

        {/* 1. Left Red Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatCard(0.1)}
          className="absolute left-[5%] md:left-[10%] top-[10%] md:top-[20%] w-[240px] bg-[#991b1b] rounded-2xl p-4 shadow-xl z-10 cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className="space-y-3">
            <div className="text-white/70 font-medium">Illustration</div>
            <div className="text-white/70 font-medium">Graphic Design</div>
            <div className="text-white font-bold flex items-center justify-between">
              Motion Design
              {/* Fake Mouse Pointer from Image */}
              <div className="absolute -bottom-4 right-10 w-4 h-6 bg-black text-white flex items-center justify-center shadow-md transform rotate-[-20deg]" style={{ clipPath: 'polygon(0 0, 100% 100%, 40% 100%, 0 140%)' }}></div>
            </div>
            {/* Nested Black Video Box */}
            <div className="w-full h-20 bg-[#111] rounded-lg mt-2 border border-white/20 flex items-center justify-center relative overflow-hidden">
               <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400"></div>
               <div className="absolute bottom-1 left-1 w-2 h-2 bg-blue-400"></div>
               <span className="text-white/50 text-[10px] text-center px-4 leading-tight">THIS CONTENT IS NOT AVAILABLE</span>
            </div>
          </div>
        </motion.div>

        {/* 2. Bottom Left Landscape Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatCard(0.3)}
          className="absolute left-[2%] md:left-[5%] bottom-[5%] md:bottom-[10%] w-[200px] h-[120px] rounded-2xl shadow-xl z-20 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-[#e6a88e] to-[#a491b5]"
        >
          <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #ff7b54 0%, transparent 40%)' }} />
          {/* Mock landscape elements */}
          <div className="absolute bottom-0 w-full h-10 bg-[#594d66]"></div>
          <div className="absolute bottom-10 w-full h-px bg-white/20"></div>
          {/* Mock UI Overlay */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[8px] flex items-center gap-2">
            <Play className="w-2 h-2 fill-black" />
            <div className="w-10 h-1 bg-gray-300 rounded-full overflow-hidden">
               <div className="w-1/2 h-full bg-green-500"></div>
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm w-16 h-8 rounded text-[6px] p-1 text-gray-500 text-right leading-tight">
             Lorem ipsum dolor sit amet
          </div>
        </motion.div>

        {/* 3. Top Right Dashboard Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatCard(0.2)}
          className="absolute right-[10%] md:right-[25%] top-[10%] md:top-[5%] w-[260px] bg-white rounded-2xl p-3 shadow-2xl z-30 cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          {/* Floating Actions on top of the card */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#333] text-white flex items-center justify-center shadow-lg"><Maximize2 className="w-4 h-4" /></div>
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg"><Move className="w-4 h-4" /></div>
            <div className="w-8 h-8 rounded-full bg-[#333] text-white flex items-center justify-center shadow-lg"><Play className="w-4 h-4 fill-white" /></div>
          </div>
          
          <div className="text-[10px] font-bold text-gray-800 mb-2 mt-2">FY2024 Financial Performance</div>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1 bg-blue-50/50 rounded p-2 border border-gray-100 flex flex-col justify-end h-16">
               <div className="w-full flex items-end gap-1">
                  <div className="w-1/3 bg-blue-200 h-4 rounded-sm"></div>
                  <div className="w-1/3 bg-blue-400 h-8 rounded-sm"></div>
                  <div className="w-1/3 bg-blue-600 h-12 rounded-sm"></div>
               </div>
            </div>
            <div className="col-span-1 bg-[#eaff80] rounded p-2 border border-gray-100 relative overflow-hidden h-16">
               <div className="text-[10px] font-bold">214.45</div>
               {/* Mock Line Chart */}
               <svg className="absolute bottom-0 left-0 w-full h-8" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,100 L20,60 L50,80 L100,20 L100,100 Z" fill="rgba(0,0,0,0.1)" />
                  <path d="M0,100 L20,60 L50,80 L100,20" fill="none" stroke="black" strokeWidth="2" />
               </svg>
            </div>
            <div className="col-span-1 bg-indigo-500 rounded p-2 flex items-center justify-center h-16 relative">
               <div className="absolute top-1 left-1 text-white/80 text-[8px]">15%</div>
               {/* Mock Donut Chart */}
               <div className="w-8 h-8 rounded-full border-[3px] border-white/30 border-t-white"></div>
            </div>
          </div>
        </motion.div>

        {/* 4. Right Angelfish Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatCard(0.4)}
          className="absolute right-[5%] md:right-[15%] top-[40%] md:top-[45%] w-[220px] h-[140px] rounded-2xl shadow-xl z-10 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 bg-[#006699]"
        >
          {/* Simulated Underwater background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#00b4d8] to-[#0077b6] opacity-80 mix-blend-overlay"></div>
          {/* Simulated light rays */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-white/20 blur-[1px] rotate-12 transform origin-top"></div>
          <div className="absolute top-0 left-1/2 w-2 h-full bg-white/10 blur-[2px] rotate-12 transform origin-top"></div>
          
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 text-white text-center">
             <h3 className="text-3xl font-serif z-10">Emperor</h3>
             <h3 className="text-xl font-serif italic z-10 -mt-2">Angelfish</h3>
             {/* Note: In a real app, you would place an <img /> here of the fish with transparent bg */}
             <div className="absolute right-2 top-2 w-16 h-16 bg-yellow-400 rounded-full blur-[20px] opacity-40"></div> 
          </div>
        </motion.div>

        {/* 5. Bottom Right Fashion Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatCard(0.5)}
          className="absolute right-[0%] md:right-[5%] bottom-[0%] md:bottom-[5%] w-[240px] bg-white rounded-xl shadow-2xl z-20 overflow-hidden border border-gray-100 cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className="relative p-3 overflow-hidden text-center flex items-center justify-center h-[120px]">
             {/* Repeated red background text */}
             <div className="absolute inset-0 flex flex-col justify-center opacity-90 leading-[0.8]">
               <span className="text-red-600 font-black text-2xl tracking-tighter whitespace-nowrap">ME COLLECTION 202</span>
               <span className="text-black font-black text-2xl tracking-tighter whitespace-nowrap">/ NYC / NY 94 / NY</span>
               <span className="text-red-600 font-black text-2xl tracking-tighter whitespace-nowrap">1994 EST 1994 ES</span>
             </div>
             {/* Mock Figure Outline in front of text */}
             <div className="absolute bottom-0 w-16 h-24 bg-gray-800 rounded-t-full shadow-[0_0_15px_rgba(255,255,255,1)] flex items-end justify-center z-10 border-2 border-white overflow-hidden">
                <div className="w-full h-1/2 bg-gray-600 border-t-2 border-gray-400 flex justify-center gap-1">
                   <div className="w-1 h-full bg-white/30"></div>
                   <div className="w-1 h-full bg-white/30"></div>
                </div>
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}