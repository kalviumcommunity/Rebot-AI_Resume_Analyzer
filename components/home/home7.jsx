'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Aperture, ArrowRight, ChevronDown } from 'lucide-react';

export default function HumanAiCollaboration() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideFromTopLeft = {
    hidden: { opacity: 0, x: -100, y: -50 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  const slideFromBottomRight = {
    hidden: { opacity: 0, x: 100, y: 50 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-sans flex flex-col bg-gradient-to-br from-[#e0f2fe] via-[#80d4ff] to-[#50bfff]">
      
      {/* Navbar overlaying the gradient */}
      <nav className="w-full flex items-center justify-between px-6 py-4 absolute top-0 z-50">
        <div className="flex items-center gap-6">
          <div className="bg-black/10 backdrop-blur-md rounded-full px-5 py-2.5 flex items-center gap-6 shadow-sm border border-white/20">
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
          <button className="px-5 py-2 rounded-full text-sm font-medium text-slate-800 bg-white shadow-sm border border-white/20 hover:bg-gray-50 transition">
            Log in
          </button>
          <button className="px-5 py-2 rounded-full text-sm font-medium text-white bg-[#1a1a1a] hover:bg-black transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="relative flex-1 w-full h-full min-h-[800px] flex items-center justify-center pt-20">
        
        {/* Top Left: Stylized Human Hand (SVG) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideFromTopLeft}
          className="absolute top-[15%] left-[-5%] md:left-[5%] w-[400px] md:w-[600px] opacity-90 pointer-events-none"
        >
          <svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
             {/* Thumb */}
             <path d="M 50 150 C 150 180, 250 250, 320 230 C 350 220, 330 200, 300 210" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
             {/* Index Finger */}
             <path d="M 50 120 C 200 150, 350 200, 420 250 C 430 260, 410 270, 400 250" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
             {/* Middle Finger */}
             <path d="M 80 100 C 250 130, 400 180, 470 230 C 480 240, 460 250, 450 230" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
             {/* Ring Finger */}
             <path d="M 120 80 C 280 110, 450 160, 520 200 C 530 210, 510 220, 500 200" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
             {/* Pinky */}
             <path d="M 160 60 C 310 90, 480 130, 550 160 C 560 170, 540 180, 530 160" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        {/* Center Text & Button */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-20 flex flex-col items-center text-center -mt-20"
        >
          <h1 className="text-white text-5xl md:text-6xl tracking-wide mb-8 drop-shadow-md" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 'bold' }}>
            Human for will, AI for skill.
          </h1>
          
          <button className="bg-[#2a85ff] hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-[0_10px_30px_rgba(42,133,255,0.4)]">
            Start for free <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Bottom Right: Stylized Robot Hand (CSS/SVG Composition) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideFromBottomRight}
          className="absolute bottom-[-10%] right-[-5%] md:right-[5%] w-[500px] h-[500px] pointer-events-none opacity-90 mix-blend-screen"
        >
           {/* Abstract Geometric Representation of the Mechanical Hand */}
           <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_20px_rgba(100,200,255,0.5)]">
              <defs>
                 <linearGradient id="metalBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#80c4ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1a75ff" stopOpacity="0.9" />
                 </linearGradient>
                 <linearGradient id="glowYellow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffea80" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ffb31a" stopOpacity="0.5" />
                 </linearGradient>
              </defs>
              
              {/* Forearm Base */}
              <path d="M 350 500 L 450 500 L 400 350 L 300 380 Z" fill="url(#metalBlue)" stroke="#a1d6ff" strokeWidth="2" />
              <path d="M 390 360 L 410 355 L 420 380 L 400 385 Z" fill="url(#glowYellow)" opacity="0.8" blur="2" />

              {/* Palm Area */}
              <path d="M 280 370 C 250 300, 300 250, 350 250 C 380 250, 420 300, 410 360 Z" fill="url(#metalBlue)" stroke="#a1d6ff" strokeWidth="2" />
              <circle cx="340" cy="310" r="30" fill="none" stroke="url(#glowYellow)" strokeWidth="4" className="drop-shadow-[0_0_10px_#ffea80]" />

              {/* Thumb */}
              <path d="M 260 340 L 200 320 L 180 300 L 190 280 L 220 310 L 280 320 Z" fill="url(#metalBlue)" stroke="#a1d6ff" strokeWidth="1.5" />
              <circle cx="200" cy="320" r="6" fill="url(#glowYellow)" />

              {/* Index Finger */}
              <path d="M 300 260 L 260 180 L 240 120 L 255 115 L 275 175 L 320 250 Z" fill="url(#metalBlue)" stroke="#a1d6ff" strokeWidth="1.5" />
              <ellipse cx="260" cy="180" rx="8" ry="12" fill="url(#metalBlue)" stroke="url(#glowYellow)" strokeWidth="2" transform="rotate(-20 260 180)" />
              <ellipse cx="247" cy="117" rx="6" ry="10" fill="url(#glowYellow)" opacity="0.8" transform="rotate(-15 247 117)" />

              {/* Middle Finger */}
              <path d="M 330 250 L 310 160 L 305 90 L 320 85 L 330 155 L 350 245 Z" fill="url(#metalBlue)" stroke="#a1d6ff" strokeWidth="1.5" />
              <ellipse cx="310" cy="160" rx="8" ry="12" fill="url(#metalBlue)" stroke="url(#glowYellow)" strokeWidth="2" transform="rotate(-5 310 160)" />

              {/* Ring Finger */}
              <path d="M 360 255 L 365 170 L 375 110 L 390 115 L 380 175 L 380 260 Z" fill="url(#metalBlue)" stroke="#a1d6ff" strokeWidth="1.5" />
              <ellipse cx="365" cy="170" rx="8" ry="12" fill="url(#metalBlue)" stroke="url(#glowYellow)" strokeWidth="2" transform="rotate(10 365 170)" />

              {/* Pinky */}
              <path d="M 390 270 L 410 200 L 430 150 L 440 160 L 420 210 L 400 280 Z" fill="url(#metalBlue)" stroke="#a1d6ff" strokeWidth="1.5" />
              <ellipse cx="410" cy="200" rx="8" ry="12" fill="url(#metalBlue)" stroke="url(#glowYellow)" strokeWidth="2" transform="rotate(25 410 200)" />
           </svg>
        </motion.div>

      </div>

      {/* Bottom White Peeking Card */}
      <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] h-[120px] bg-white rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-30" />

    </div>
  );
}