import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Table, Binary, LineChart, Sparkles, Search, Database, Server, 
  FileSpreadsheet, BarChart3, PieChart, TrendingUp, GitBranch, BookOpen 
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import skillsData from '../data/skills';

const iconMap = {
  Code2, Table, Binary, LineChart, Sparkles, Search, Database, Server,
  FileSpreadsheet, BarChart3, PieChart, TrendingUp, GitBranch, Github: GithubIcon, BookOpen
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData.skills
    : skillsData.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#070913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20"
          >
            Technical Competencies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Tools & <span className="text-gradient">Skills</span>
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Core analytical libraries, query languages, and business intelligence suites applied in my projects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
          {skillsData.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'glass-card text-gray-300 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Animated Skill Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ translateY: -4 }}
                  className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 mt-4 leading-relaxed font-normal">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
