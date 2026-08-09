import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Globe, GraduationCap, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';
import educationData from '../data/education';

const EducationSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(2); // Default to B.Tech IT

  const activeEdu = educationData[selectedIndex];

  return (
    <section id="education" className="py-24 relative z-10 bg-[#070913]/90 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20"
          >
            Academic Foundation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Education <span className="text-gradient">Timeline</span>
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Verified academic background with institution details, official campus addresses, and live map navigation links.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
        </div>

        {/* Timeline + Institution Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Animated Timeline List */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative border-l-2 border-blue-500/30 ml-4 pl-6 space-y-8">
              {educationData.map((edu, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative cursor-pointer glass-card p-5 rounded-2xl border transition-all duration-300 ${
                      isSelected
                        ? 'border-cyan-400 bg-slate-800/90 shadow-xl shadow-blue-500/15 scale-[1.02]'
                        : 'border-white/10 opacity-80 hover:opacity-100 hover:border-white/20'
                    }`}
                  >
                    {/* Timeline Node Dot */}
                    <div
                      className={`absolute -left-[31px] top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-cyan-400 border-white shadow-[0_0_10px_#38bdf8]'
                          : 'bg-[#070913] border-blue-500/50'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-slate-900" />}
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                        {edu.classOrDegree}
                      </span>
                      <span className="text-[11px] text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-blue-400" />
                        {edu.status}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mt-2 leading-snug">
                      {edu.institution}
                    </h3>

                    {edu.formerly && (
                      <p className="text-xs text-gray-400 font-mono mt-0.5">
                        Formerly: {edu.formerly}
                      </p>
                    )}

                    <p className="text-xs text-gray-400 mt-2 line-clamp-2 flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{edu.fullAddress}</span>
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Institution Card Feature */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEdu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/30 relative overflow-hidden shadow-2xl"
              >
                {/* Background Accent Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

                {/* Institution Image */}
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/10 mb-6 group">
                  <img
                    src={activeEdu.image}
                    alt={activeEdu.institution}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-70" />
                  
                  <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 text-xs font-mono text-cyan-300 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span>{activeEdu.classOrDegree}</span>
                  </div>
                </div>

                {/* Institution Info Header */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {activeEdu.institution}
                    </h3>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
                      {activeEdu.status}
                    </span>
                  </div>

                  {activeEdu.formerly && (
                    <p className="text-xs text-cyan-400 font-mono">
                      (Formerly known as {activeEdu.formerly})
                    </p>
                  )}

                  {/* Address Display */}
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-semibold text-gray-200">Full Verified Address:</span>
                      <p className="text-gray-300 font-mono text-xs">{activeEdu.fullAddress}</p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">Key Academic Highlights:</p>
                    <div className="space-y-1.5">
                      {activeEdu.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: View Location & Website */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                    <a
                      href={activeEdu.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>View Location</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {activeEdu.website && (
                      <a
                        href={activeEdu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-gray-200 bg-slate-800/80 hover:bg-slate-700 border border-white/10 hover:border-cyan-500/30 transition-all hover:scale-105 active:scale-95"
                      >
                        <Globe className="w-4 h-4 text-cyan-400" />
                        <span>Official Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
