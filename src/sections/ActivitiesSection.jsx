import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Users, Lightbulb } from 'lucide-react';
import achievementsData from '../data/achievements';

const iconMap = {
  Award, Trophy
};

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-24 relative z-10 bg-[#070913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20"
          >
            Campus & Leadership Initiatives
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Activities & <span className="text-gradient">Responsibilities</span>
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Active participation in university technical chapters and competitive hackathon events.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
        </div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ translateY: -4 }}
                className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-500/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono text-cyan-300 font-semibold px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-blue-400 font-mono mt-1">
                    {item.organization}
                  </p>
                  <p className="text-sm text-gray-300 mt-4 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ActivitiesSection;
