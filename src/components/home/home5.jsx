'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Aperture, ArrowRight, ChevronDown } from 'lucide-react';

export default function BrandReadySection() {
  // Animation variants for text entering from bottom
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Animation variants for floating elements popping in with staggered delays
  const floatElement = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (customDelay) => ({
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        delay: customDelay, 
        type: "spring", 
        stiffness: 60,
        damping: 12
      }
    })
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-sans flex flex-col items-center pb-20">
      
      {/* Navbar specific to this image */}
      <nav className="w-full flex items-center justify-between px-6 py-4 sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-6">
          <div className="bg-[#e5e7eb] rounded-full px-5 py-2.5 flex items-center gap-6 shadow-sm">
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

        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-full text-sm font-medium text-slate-800 bg-white shadow-sm border border-gray-200 hover:bg-gray-50 transition">
            Log in
          </button>
          <button className="px-5 py-2 rounded-full text-sm font-medium text-white bg-[#1a1a1a] hover:bg-black transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Massive Card Container */}
      <div className="relative w-full max-w-[1250px] mx-auto mt-12 px-4">
        <div className="w-full h-[800px] bg-gradient-to-tr from-[#fff7e0] via-[#fffbfa] to-white rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-orange-50/50 overflow-hidden relative flex flex-col items-center pt-16">
          
          {/* Header Text Area */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="flex flex-col items-center text-center z-30"
          >
            <div className="border border-gray-200 text-gray-700 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 bg-white shadow-sm">
              BRAND-READY
            </div>
            
            <h2 className="text-[#0a0a0a] text-5xl md:text-6xl font-extrabold mb-5 tracking-tight">
              Built for your brand
            </h2>
            
            <p className="text-gray-500 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
              Upload templates to ensure presentations follow your brand's design consistently.
            </p>

            <button className="bg-[#2a85ff] hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20">
              Start for free <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Interactive UI Graph/Nodes Area */}
          <div className="absolute inset-x-0 bottom-0 h-[450px] w-full flex justify-center perspective-[1200px]">
            
            {/* 1. Left - PPTX Node */}
            <motion.div 
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={floatElement}
              className="absolute left-[15%] top-[150px] flex flex-col items-center z-20"
            >
               <div className="w-20 h-24 bg-white rounded-xl shadow-xl flex items-center justify-center relative border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute top-0 right-0 w-6 h-6 bg-gray-100 rounded-bl-xl border-l border-b border-white"></div>
                  <div className="bg-[#ed6b23] text-white text-xs font-black px-3 py-1.5 rounded">PPTX</div>
               </div>
               <div className="mt-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-semibold text-gray-600 shadow-sm border border-gray-100">
                  Your Template
               </div>

               {/* Drawing the connecting lines to the center panel */}
               <svg className="absolute left-[80px] top-[40px] w-[120px] h-[60px] overflow-visible -z-10">
                 <path d="M0,10 C40,10 60,-40 100,-40" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4 4" />
                 <circle cx="100" cy="-40" r="3" fill="#ed6b23" />
                 
                 <path d="M0,10 C40,10 60,60 100,60" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4 4" />
                 <circle cx="100" cy="60" r="3" fill="#ed6b23" />
               </svg>
            </motion.div>

            {/* 2. Center - Brand Control Panel */}
            <motion.div 
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={floatElement}
              className="absolute left-[30%] top-[70px] w-[300px] bg-white/90 backdrop-blur-xl rounded-[28px] p-4 shadow-[0_20px_50px_rgba(237,107,35,0.08)] border border-orange-100/50 z-30"
            >
              {/* Top Logo Panel */}
              <div className="bg-[#fff9f5] rounded-2xl p-4 mb-3 border border-orange-50 h-[100px] flex flex-col">
                 <span className="text-[10px] font-bold text-gray-500 mb-auto">Logo</span>
                 <div className="flex items-center justify-center gap-2 mb-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#ed6b23] fill-current">
                       <path d="M12 0l2 8h8l-6 5 2 9-6-6-6 6 2-9-6-5h8z" />
                    </svg>
                    <span className="text-[#ed6b23] font-black text-xl tracking-wider">SIMPLE</span>
                 </div>
              </div>
              
              {/* Bottom Row Panels */}
              <div className="flex gap-3 h-[90px]">
                 {/* Font Panel */}
                 <div className="w-1/3 bg-[#fff9f5] rounded-2xl p-3 border border-orange-50 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-gray-500">Font</span>
                    <div className="text-3xl font-serif text-gray-800 text-center leading-none mb-1 tracking-tighter">Aa</div>
                 </div>
                 
                 {/* Color Panel */}
                 <div className="w-2/3 bg-[#fff9f5] rounded-2xl p-3 border border-orange-50 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-gray-500">Color</span>
                    <div className="flex justify-between items-center px-1 mb-1">
                       <div className="w-5 h-5 rounded-full bg-[#ed6b23] shadow-sm"></div>
                       <div className="w-5 h-5 rounded-full bg-[#562123] shadow-sm"></div>
                       <div className="w-5 h-5 rounded-full bg-[#9ca3af] shadow-sm"></div>
                       <div className="w-5 h-5 rounded-full bg-white shadow-sm border border-gray-200"></div>
                       <div className="w-5 h-5 rounded-full bg-[#1f2937] shadow-sm"></div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* 3. Right Floating Presentations Group */}
            
            {/* Slide 2 (Back) - Product Mix */}
            <motion.div 
              custom={0.4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={floatElement}
              className="absolute right-[5%] top-[10px] w-[340px] h-[200px] bg-white rounded-xl shadow-lg border border-orange-50/50 p-6 origin-bottom-left rotate-[-2deg] scale-[0.85] z-10 opacity-90"
            >
               <div className="text-[#ed6b23] text-[8px] font-bold mb-4 tracking-widest uppercase border-b border-orange-100 pb-2">Product Mix & Drivers</div>
               <div className="flex gap-4">
                 <div className="w-1/2 space-y-3">
                   <div className="w-full h-8 bg-orange-50 rounded"></div>
                   <div className="space-y-1.5">
                     <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                     <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
                     <div className="h-1.5 bg-gray-200 rounded w-5/6"></div>
                   </div>
                 </div>
                 <div className="w-1/2 space-y-3">
                   <div className="w-full h-8 bg-[#fff5f0] border border-orange-100 rounded"></div>
                   <div className="space-y-1.5">
                     <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                     <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
                   </div>
                 </div>
               </div>
            </motion.div>

            {/* Slide 1 (Front/Hero) - Q4 Sales Report */}
            <motion.div 
              custom={0.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={floatElement}
              className="absolute right-[22%] top-[60px] w-[380px] h-[220px] bg-[#fffaf5] rounded-xl shadow-[0_20px_40px_rgba(237,107,35,0.15)] border border-orange-100 p-6 origin-bottom-left rotate-[4deg] z-30 overflow-hidden"
            >
               {/* Decorative Orange SVG Leaf Right */}
               <svg className="absolute -top-10 -right-8 w-40 h-40 text-[#ed6b23] opacity-90" viewBox="0 0 200 200" fill="currentColor">
                  <path d="M 100, 0 C 130, 20 160, 10 180, 40 C 170, 70 190, 90 170, 120 C 180, 150 150, 170 120, 160 C 100, 190 70, 180 50, 150 C 20, 160 0, 130 10, 100 C -10, 70 10, 40 40, 50 C 30, 20 60, 0 80, 20 Z" />
               </svg>
               {/* Decorative Orange SVG Leaf Bottom Left */}
               <svg className="absolute -bottom-16 -left-10 w-32 h-32 text-[#ed6b23] opacity-20" viewBox="0 0 200 200" fill="currentColor">
                  <path d="M 100, 0 C 130, 20 160, 10 180, 40 C 170, 70 190, 90 170, 120 C 180, 150 150, 170 120, 160 C 100, 190 70, 180 50, 150 C 20, 160 0, 130 10, 100 C -10, 70 10, 40 40, 50 C 30, 20 60, 0 80, 20 Z" />
               </svg>

               <div className="relative z-10 h-full flex justify-between">
                 <div className="w-[55%] flex flex-col">
                   <div className="flex items-center gap-1 text-[#ed6b23] font-bold text-[8px] mb-2">
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2 8h8l-6 5 2 9-6-6-6 6 2-9-6-5h8z" /></svg>
                     SIMPLE
                   </div>
                   <h3 className="text-[#562123] font-black text-3xl leading-tight mb-2 tracking-tighter">Q4 Sales Report</h3>
                   <p className="text-gray-500 text-[9px] mb-auto font-medium">Consumer Electronics Brand | Internal Overview</p>
                   
                   <div className="flex justify-between text-[7px] text-gray-400 font-bold border-t border-orange-100 pt-2 mt-4">
                     <div>
                       <span className="text-[#ed6b23]">DATE</span> <br/>
                       2024-11-22
                     </div>
                     <div>
                       <span className="text-[#ed6b23]">PREPARED FOR</span> <br/>
                       Executive Leadership Team
                     </div>
                   </div>
                 </div>
                 
                 {/* Slanted Dark Red Box */}
                 <div className="w-[40%] flex justify-end items-center relative z-20">
                   <div className="w-24 h-32 bg-[#562123] transform rotate-[20deg] rounded-lg shadow-xl border-4 border-white/50"></div>
                 </div>
               </div>
            </motion.div>

            {/* Slide 3 (Bottom Left) - Contents */}
            <motion.div 
              custom={0.6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={floatElement}
              className="absolute left-[30%] top-[250px] w-[340px] h-[200px] bg-white rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-orange-50 p-6 origin-bottom-right rotate-[-4deg] z-20 overflow-hidden"
            >
               {/* Decorative orange leaf corner */}
               <svg className="absolute -top-8 right-10 w-24 h-24 text-[#ed6b23] opacity-80" viewBox="0 0 200 200" fill="currentColor">
                  <path d="M 100, 0 C 130, 20 160, 10 180, 40 C 170, 70 190, 90 170, 120 C 180, 150 150, 170 120, 160 C 100, 190 70, 180 50, 150 C 20, 160 0, 130 10, 100 C -10, 70 10, 40 40, 50 C 30, 20 60, 0 80, 20 Z" />
               </svg>
               <h3 className="text-[#ed6b23] font-black text-xl mb-4 tracking-tight">CONTENTS</h3>
               <div className="space-y-3">
                 {[1, 2, 3].map((num) => (
                   <div key={num} className="flex items-center gap-3">
                     <div className="text-[#ed6b23] font-bold text-xs">{num}</div>
                     <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                        <div className="h-1.5 bg-gray-100 rounded w-3/4"></div>
                     </div>
                   </div>
                 ))}
               </div>
            </motion.div>

            {/* Slide 4 (Bottom Right) - Supply Chain */}
            <motion.div 
              custom={0.7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={floatElement}
              className="absolute right-[12%] top-[240px] w-[360px] h-[200px] bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-orange-100 p-5 origin-bottom-left rotate-[2deg] z-40 overflow-hidden"
            >
               <div className="text-[#ed6b23] text-[9px] font-bold mb-3 tracking-widest uppercase">Supply Chain Optimization Result</div>
               <div className="flex gap-4">
                 <div className="w-[60%] space-y-3">
                   <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                   <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                   <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
                   
                   <div className="mt-4 pt-2 border-t border-orange-50">
                     <div className="text-[#562123] font-bold text-[8px] mb-1">Key Improvements</div>
                     <div className="flex items-center gap-1 mb-1">
                       <div className="w-1 h-1 bg-[#ed6b23] rounded-full"></div>
                       <div className="h-1 bg-gray-200 rounded w-full"></div>
                     </div>
                     <div className="flex items-center gap-1">
                       <div className="w-1 h-1 bg-[#ed6b23] rounded-full"></div>
                       <div className="h-1 bg-gray-200 rounded w-5/6"></div>
                     </div>
                   </div>
                 </div>
                 
                 {/* Vertical Navy/Orange Bar chart mock */}
                 <div className="w-[40%] flex items-end justify-center gap-2 h-24 border-b border-gray-100 pb-1">
                   <div className="w-6 h-[40%] bg-[#ed6b23] rounded-t-sm relative"><span className="absolute -top-3 text-[6px] text-gray-500 w-full text-center">Q1</span></div>
                   <div className="w-6 h-[60%] bg-[#562123] rounded-t-sm relative"><span className="absolute -top-3 text-[6px] text-gray-500 w-full text-center">Q2</span></div>
                   <div className="w-6 h-[90%] bg-[#1e293b] rounded-t-sm relative"><span className="absolute -top-3 text-[6px] text-gray-500 w-full text-center">Q3</span></div>
                 </div>
               </div>
            </motion.div>

          </div>
        </div>
      </div>
      
    </div>
  );
}