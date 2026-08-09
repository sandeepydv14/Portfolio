import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BarChart2, Lightbulb, Compass, Award } from 'lucide-react';
import profileData from '../data/profile';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-[#070913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20"
          >
            Personal Background
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Bio Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Compass className="w-6 h-6 text-cyan-400" />
                <span>Passionate About Data-Driven Insights</span>
              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                {profileData.aboutBio}
              </p>

              {/* Core Interests Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-1">
                    <BarChart2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Exploratory Data Analysis</h4>
                    <p className="text-xs text-gray-400">Finding trends & anomalous patterns in raw data</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">BI Dashboards</h4>
                    <p className="text-xs text-gray-400">Converting metrics into executive dashboards</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Stats & Highlight Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {profileData.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.03, translateY: -4 }}
                className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/20">
                  {idx === 0 && <GraduationCap className="w-5 h-5" />}
                  {idx === 1 && <Award className="w-5 h-5" />}
                  {idx === 2 && <BarChart2 className="w-5 h-5" />}
                  {idx === 3 && <Lightbulb className="w-5 h-5" />}
                </div>

                <div>
                  <p className="text-2xl font-bold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 font-mono mt-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
