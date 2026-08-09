import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import projectsData from '../data/projects';
import CaseStudyModal from '../components/CaseStudyModal';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#070913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20"
          >
            Practical Portfolio Case Studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Featured Analytics <span className="text-gradient">Projects</span>
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            End-to-end data analytics and business intelligence projects featuring Python, SQL querying, exploratory analysis, and BI dashboards.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
        </div>

        {/* Featured Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ translateY: -6 }}
              className="glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group shadow-xl hover:border-cyan-500/40"
            >
              
              {/* Card Image Banner */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/30 to-transparent" />
                
                {/* Category & Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-xs font-mono font-semibold text-cyan-300 border border-cyan-500/40">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-blue-400 font-mono mt-1">
                    {project.type}
                  </p>

                  <p className="text-sm text-gray-300 mt-3 leading-relaxed font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Tools Badges */}
                  <div className="flex flex-wrap items-center gap-2 mt-5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-white/5 text-[11px] font-mono text-gray-300 group-hover:border-cyan-500/30 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action Footer */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700 border border-white/10 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Popup */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
