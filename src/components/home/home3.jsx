'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Aperture, ChevronDown } from 'lucide-react';

export default function ContentLeadDesign() {
  // Animation for standard elements fading up
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Advanced animation for the fanning cards
  const cardVariants = {
  hidden: { opacity: 0, y: 150, rotate: 0 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    rotate: custom.rotate,
    transition: {
      delay: custom.delay,
      duration: 0.6
    }
  })
};

  return (
    <div className="relative min-h-screen overflow-hidden font-sans flex flex-col bg-gradient-to-b from-[#56a8fb] via-[#2e74e6] to-[#1a1f35]">
      
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 relative z-50">
        <div className="flex items-center gap-6">
          <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-6 shadow-sm border border-white/10">
            <div className="flex items-center gap-2 cursor-pointer text-white mr-4">
              <Aperture className="w-6 h-6 stroke-[2.5]" />
              <span className="text-xl font-bold tracking-tight">Rebot</span>
            </div>
            <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-white/90">
              <a href="#" className="hover:text-white transition">Features</a>
              <a href="#" className="hover:text-white transition">Pricing</a>
              <a href="#" className="hover:text-white transition">Tutorial</a>
              <a href="#" className="hover:text-white transition">Blog</a>
              <a href="#" className="flex items-center gap-1 hover:text-white transition">
                Tools <ChevronDown className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="hover:text-white transition">Community</a>
              <a href="#" className="hover:text-white transition">FAQs</a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-full text-sm font-medium text-slate-800 bg-white shadow-sm hover:bg-gray-50 transition">
            Log in
          </button>
          <button className="px-5 py-2 rounded-full text-sm font-medium text-white bg-[#1c1c1c] hover:bg-black transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Content Area */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="flex flex-col items-center mt-12 z-20 text-center px-4"
      >
        <div className="bg-white/20 backdrop-blur-sm text-white/90 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/10">
          CONTENT-FIRST
        </div>
        
        <h2 className="text-white text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Let <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 'normal' }}>content lead</span> the design
        </h2>
        
        <p className="text-blue-100/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-8 font-light">
          Rebot adapts layout and structure to your content, so every presentation feels clear, focused, and right for its moment.
        </p>

        <button className="bg-white text-[#111] hover:bg-gray-50 px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-xl">
          Start for free <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Interactive Floating Cards Section */}
      <div className="relative w-full max-w-[1200px] mx-auto h-[450px] mt-24 perspective-1000 z-30">
        
        {/* Card 1: Q4 Sales Report (Left) */}
        <motion.div
          custom={{ rotate: -6, delay: 0.1 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          variants={cardVariants}
          className="absolute left-[5%] top-[10%] w-[380px] h-[220px] bg-gradient-to-br from-[#4faaff] via-[#2a77ff] to-[#0d3bcf] rounded-xl shadow-[-10px_20px_40px_rgba(0,0,0,0.4)] z-10 p-6 overflow-hidden border border-white/10 origin-bottom-right"
        >
          {/* Decorative Torus/Ring element */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border-[24px] border-[#66bcff] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.2)] opacity-80" />
          <div className="absolute top-4 right-12 w-16 h-16 rounded-full bg-gradient-to-br from-white/30 to-transparent backdrop-blur-sm" />
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <h3 className="text-white font-black text-4xl leading-tight tracking-tight mt-4 drop-shadow-md">
              Q4 SALES <br/> REPORT
            </h3>
            <div className="text-white/70 text-[8px] max-w-[150px] uppercase font-bold tracking-wider leading-tight">
              Report Period: Q4 2024 <br/> Department: Sales & Analytics Team
            </div>
          </div>
        </motion.div>

        {/* Card 2: Table of Contents (Center Left) */}
        <motion.div
          custom={{ rotate: 4, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="absolute left-[22%] top-[15%] w-[420px] h-[240px] bg-gradient-to-br from-[#2ca0ff] to-[#0433a1] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 p-6 overflow-hidden border border-white/10 origin-bottom-left"
        >
          {/* Decorative circles */}
          <div className="absolute top-10 left-1/3 w-12 h-12 rounded-full bg-white/20 blur-[2px]" />
          <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-blue-400/30 blur-[10px]" />

          <h3 className="text-white font-black text-4xl leading-none tracking-tighter mt-2 mb-8 drop-shadow-md relative z-10 flex flex-col">
            <span className="text-3xl opacity-90">TABLE OF</span>
            <span className="ml-12 text-5xl">CONTENTS</span>
          </h3>

          <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-2 z-10">
            {[
              { num: '1', title: 'Executive Summary', desc: 'Market analysis' },
              { num: '2', title: 'Competitor Analysis', desc: 'Market overview' },
              { num: '3', title: 'Q4 Channel Performance', desc: 'Metrics' },
              { num: '4', title: 'Inventory Turnover Analysis', desc: 'Supply chain' },
              { num: '5', title: 'Supply Chain Optimization Results', desc: 'Logistics' },
            ].map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center">
                <div className="w-5 h-5 rounded-full bg-white text-blue-800 text-[10px] font-bold flex items-center justify-center mb-2 shadow-sm">
                  {item.num}
                </div>
                <div className="text-white text-[7px] font-medium leading-tight">{item.title}</div>
              </div>
            ))}
            {/* Connecting line behind numbers */}
            <div className="absolute top-2.5 left-4 right-4 h-px bg-white/30 -z-10" />
          </div>
        </motion.div>

        {/* Card 4: Competitor Donut Chart (Right - behind Card 3) */}
        <motion.div
          custom={{ rotate: 10, delay: 0.4 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="absolute right-[5%] top-[18%] w-[380px] h-[220px] bg-gradient-to-br from-[#1264df] to-[#041a54] rounded-xl shadow-[10px_20px_40px_rgba(0,0,0,0.4)] z-10 p-5 border border-white/10 origin-bottom-left"
        >
          <div className="flex justify-between h-full">
            <div className="w-1/3 flex flex-col">
              <h3 className="text-white font-black text-lg tracking-wider mb-6">COMPETITOR</h3>
              {/* Mock Bar Chart Table left side */}
              <div className="space-y-2 mt-auto">
                <div className="h-6 border border-blue-400/30 rounded flex items-center px-2"><div className="w-1/2 h-1.5 bg-blue-400 rounded"></div></div>
                <div className="h-6 border border-blue-400/30 rounded flex items-center px-2"><div className="w-3/4 h-1.5 bg-purple-400 rounded"></div></div>
                <div className="h-6 border border-blue-400/30 rounded flex items-center px-2"><div className="w-1/3 h-1.5 bg-orange-400 rounded"></div></div>
              </div>
            </div>
            
            <div className="w-2/3 flex items-center justify-center relative">
              {/* CSS Donut Chart */}
              <div className="w-40 h-40 rounded-full bg-[conic-gradient(#3b82f6_0%_35%,_#8b5cf6_35%_65%,_#f97316_65%_80%,_#1e40af_80%_100%)] flex items-center justify-center shadow-lg relative">
                {/* Donut hole */}
                <div className="w-24 h-24 rounded-full bg-[#07246b] shadow-inner" />
                
                {/* Labels */}
                <span className="absolute top-4 right-8 text-white text-[8px] font-bold">25%</span>
                <span className="absolute bottom-6 right-6 text-white text-[8px] font-bold">15%</span>
                <span className="absolute bottom-8 left-8 text-white text-[8px] font-bold">10%</span>
                <span className="absolute top-8 left-6 text-white text-[8px] font-bold">45%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Performance Overview (Center Right - TOP MOST Z-INDEX) */}
        <motion.div
          custom={{ rotate: 2, delay: 0.3 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="absolute right-[22%] top-[12%] w-[440px] h-[250px] bg-[#f8faff] rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-40 p-6 border border-gray-100 flex flex-col justify-between origin-bottom-left"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-gray-900 font-black text-xl tracking-tight">PERFORMANCE OVERVIEW</h3>
            <div className="bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
              +18%
            </div>
          </div>

          <div className="flex h-full mt-4">
            {/* Chart Area */}
            <div className="w-2/3 relative h-full flex flex-col justify-end pb-4 border-b border-gray-200">
               {/* Grid lines */}
               <div className="absolute top-0 w-full border-b border-dashed border-gray-200" />
               <div className="absolute top-1/3 w-full border-b border-dashed border-gray-200" />
               <div className="absolute top-2/3 w-full border-b border-dashed border-gray-200" />
               
               {/* SVG Smooth Curve Graph */}
               <svg className="w-full h-24 absolute bottom-4 left-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                 {/* Blue fill under the line */}
                 <path d="M0,100 C20,90 40,80 60,60 C80,30 100,10 100,10 L100,100 Z" fill="rgba(59,130,246,0.1)" />
                 {/* The Stroke */}
                 <path d="M0,100 C20,90 40,80 60,60 C80,30 100,10" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
                 {/* Data point circle */}
                 <circle cx="60" cy="60" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
               </svg>

               <div className="flex justify-between text-gray-400 text-[8px] font-medium absolute -bottom-4 w-full">
                 <span>Q1 2024</span>
                 <span>Q2 2024</span>
                 <span>Q3 2024</span>
                 <span>Q4 2024</span>
               </div>
            </div>

            {/* Stats Sidebar */}
            <div className="w-1/3 pl-4 flex flex-col justify-between h-full relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
              
              <div className="mb-2">
                <div className="text-gray-400 text-[8px] font-bold uppercase">Total Revenue</div>
                <div className="text-blue-600 font-black text-2xl tracking-tighter">$125M</div>
                <div className="text-gray-400 text-[6px]">+12% vs previous period</div>
              </div>
              
              <div className="mb-2">
                <div className="text-gray-400 text-[8px] font-bold uppercase">Units Sold</div>
                <div className="text-blue-500 font-black text-xl tracking-tighter">2.3M</div>
              </div>
              
              <div>
                <div className="text-gray-400 text-[8px] font-bold uppercase">Avg Order Value</div>
                <div className="text-blue-500 font-black text-xl tracking-tighter">$54.35</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Scrolling / Static Large Text */}
      <div className="absolute bottom-[-20px] left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none z-0">
        <h1 className="text-[12vw] font-black text-white/5 uppercase tracking-wider text-center flex gap-8 justify-center select-none">
          <span>Education</span>
          <span>•</span>
          <span>Business</span>
          <span>•</span>
          <span>Fashion</span>
          <span>•</span>
          <span>Tech</span>
        </h1>
      </div>
      
    </div>
  );
}