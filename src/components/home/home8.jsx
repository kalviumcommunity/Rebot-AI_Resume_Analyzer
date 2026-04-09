'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Aperture, Globe } from 'lucide-react';

export default function FooterComponent() {
  // Animation for the footer card to slide up when scrolled into view
  const slideUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    // Background gradient mimicking the transition from light blue to warm peach
    <div className="relative min-h-screen bg-gradient-to-b from-[#83d1ff] via-[#d3efff] to-[#ffe4cc] overflow-hidden font-sans flex flex-col items-center justify-end pb-12 pt-32 px-4 md:px-8">
      
      {/* Footer White Card */}
      <motion.footer 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={slideUp}
        className="w-full max-w-[1200px] bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-10 md:p-16 flex flex-col justify-between min-h-[400px] z-10"
      >
        
        {/* Top Section: Logo & Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Aperture className="w-8 h-8 text-[#2a85ff] stroke-[2.5]" />
            <span className="text-3xl font-bold text-[#0a0a0a] tracking-tight">Rebot</span>
          </div>

          {/* Right: Links Columns */}
          <div className="flex gap-16 md:gap-24">
            
            {/* Product Column */}
            <div className="flex flex-col">
              <h4 className="text-[13px] font-bold text-gray-900 mb-6 tracking-wide">Product</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">Tools</a></li>
                <li><a href="#" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col">
              <h4 className="text-[13px] font-bold text-gray-900 mb-6 tracking-wide">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">Community</a></li>
                <li><a href="#" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">Guides</a></li>
                <li><a href="#" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col">
              <h4 className="text-[13px] font-bold text-gray-900 mb-6 tracking-wide">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">Privacy</a></li>
                <li><a href="#" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">Terms</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Utilities & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-20 pt-8 border-t border-gray-50 gap-6 md:gap-0">
          
          {/* Left: Lang & Socials */}
          <div className="flex items-center gap-6">
            
            {/* Language Selector Pill */}
            <button className="flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-[11px] font-bold transition-colors">
              <Globe className="w-3.5 h-3.5 text-gray-500" /> EN
            </button>

            {/* Social Icons (Using SVG paths to perfectly match brand logos) */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  {/* Discord */}
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.2.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  {/* X (Twitter) */}
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 4.005H5.032z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Instagram */}
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  {/* TikTok */}
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.27-1.67 1.36-3.83 1.94-5.94 1.6-3.15-.46-5.74-2.84-6.42-5.93-.68-3.04.16-6.4 2.5-8.4 2.15-1.87 5.16-2.52 7.89-1.92v4.22c-1.28-.35-2.69-.32-3.84.28-1.53.79-2.39 2.59-2.09 4.26.23 1.29 1.04 2.5 2.19 3.12 1.63.88 3.75.58 4.96-.86.91-1.07 1.29-2.54 1.26-3.95-.05-5.55-.02-11.1-.03-16.65z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* YouTube */}
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Copyright */}
          <div className="text-[11px] font-medium text-gray-400 tracking-wide">
            ©2024 Rebot. All rights reserved
          </div>
          
        </div>
      </motion.footer>

    </div>
  );
}