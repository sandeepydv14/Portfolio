import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Database, LineChart, FileSpreadsheet, Sparkles } from 'lucide-react';
import { getProfileData } from '../data/profile';

const HeroSection = () => {
  const [profile, setProfile] = useState(getProfileData());
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % profile.secondaryPhrases.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [profile]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{profile.semester} • {profile.degree}</span>
            </motion.div>

            {/* Greeting */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-gray-200"
            >
              Hi, I'm <span className="text-white underline decoration-cyan-500/50 underline-offset-8">{profile.name}</span> 👋
            </motion.h2>

            {/* Animated Large Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white">
                <span className="text-gradient">Aspiring Data</span> <br />
                <span className="text-white">Analyst</span>
              </h1>
            </motion.div>

            {/* Cycling Animated Subtitle Phrase */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="h-10 flex items-center"
            >
              <div className="text-lg sm:text-xl font-mono text-cyan-400 flex items-center gap-2">
                <span className="text-gray-500">&gt;</span>
                <motion.span
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="font-semibold text-cyan-300 border-r-2 border-cyan-400 pr-1 animate-pulse"
                >
                  {profile.secondaryPhrases[phraseIndex]}
                </motion.span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-normal"
            >
              {profile.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={profile.resumePath}
                download={profile.resumeName || "Sandeep_Yadav_Resume.pdf"}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-gray-200 bg-slate-800/80 hover:bg-slate-700/90 border border-white/10 hover:border-cyan-500/40 shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-blue-300 hover:text-white bg-blue-950/40 hover:bg-blue-900/40 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-3 text-xs text-gray-400 font-mono"
            >
              <span className="text-gray-500 uppercase font-semibold tracking-wider">Core Tools:</span>
              {['Python', 'SQL', 'Excel', 'Power BI', 'Tableau', 'Pandas'].map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-white/5 text-gray-300 hover:border-cyan-500/30 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Visual Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-md"
            >
              {/* Animated Outer Neon Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-3xl blur-lg opacity-40 animate-pulse" />

              {/* Main Profile Card Glass Box */}
              <div className="relative glass-card rounded-3xl p-6 border border-white/15 overflow-hidden flex flex-col items-center">
                
                {/* Profile Image Frame */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden mb-6 border-2 border-cyan-500/30 shadow-2xl group">
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Analytics Node Badge */}
                  <div className="absolute bottom-3 left-3 bg-[#0b0f19]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/40 flex items-center gap-2 text-xs font-mono text-cyan-300">
                    <Database className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Data Enthusiast</span>
                  </div>
                </div>

                {/* Profile Card Header Info */}
                <h3 className="text-xl font-bold text-white text-center">
                  {profile.name}
                </h3>
                <p className="text-xs text-cyan-400 font-mono mt-1 text-center">
                  {profile.university}
                </p>

                {/* Glass Metric Pill Overlay Cards */}
                <div className="grid grid-cols-2 gap-3 w-full mt-6">
                  <div className="glass-panel p-3 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <LineChart className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-mono uppercase">Projects</p>
                      <p className="text-sm font-bold text-white">2+ Analytics</p>
                    </div>
                  </div>

                  <div className="glass-panel p-3 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <FileSpreadsheet className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-mono uppercase">Status</p>
                      <p className="text-sm font-bold text-white">7th Sem B.Tech</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
