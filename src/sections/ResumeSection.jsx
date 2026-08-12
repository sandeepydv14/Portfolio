import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, GraduationCap, Briefcase, Code2, Award, CheckCircle2, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import profileData from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import ResumeViewerModal from '../components/ResumeViewerModal';

const ResumeSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="resume-section" className="py-24 relative z-10 bg-[#070913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20"
          >
            Official Curated Resume
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            My Interactive <span className="text-gradient">Resume</span>
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            A comprehensive overview of my academic background, technical skills, analytics projects, and campus leadership.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
        </div>

        {/* Resume Card Paper Display */}
        <div className="glass-card rounded-3xl border border-white/10 p-6 sm:p-12 relative overflow-hidden shadow-2xl space-y-10 max-w-5xl mx-auto">
          
          {/* Top Resume Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {profileData.name}
                </h3>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-3 py-1 rounded-full">
                  CGPA: 6.34 (Till 6th Sem)
                </span>
              </div>
              <p className="text-sm font-mono text-cyan-400 mt-1">
                {profileData.title} • {profileData.university}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 mt-3">
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-blue-400" /> {profileData.email}</span>
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> +91 {profileData.phone}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-red-400" /> Faridabad / Delhi NCR</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-gray-200 bg-slate-800 hover:bg-slate-700 border border-white/10 transition-all hover:scale-105"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Preview PDF Modal</span>
              </button>

              <a
                href={profileData.resumePath}
                download="Sandeep_Yadav_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Section 1: Executive Summary */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Executive Summary
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed font-normal p-4 rounded-2xl bg-slate-900/60 border border-white/5">
              Final-year B.Tech Information Technology student (2023 - 27) at J.C. Bose University of Science and Technology, YMCA (**Cumulative CGPA: 6.34 till 6th semester**). Passionate about transforming raw datasets into strategic business insights using Python, SQL, Microsoft Excel, Power BI, and Tableau. Demonstrated capability in exploratory data analysis (EDA), data cleaning, relational database querying, and executive BI dashboard design through hands-on analytics projects.
            </p>
          </div>

          {/* Section 2: Education History */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education History
            </h4>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-base font-bold text-white">B.Tech — Information Technology</h5>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      CGPA: 6.34 / 10.0
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">
                    J.C. Bose University of Science and Technology, YMCA, Faridabad, Haryana • Batch: 2023 – 27
                  </p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full shrink-0">
                  2023 - 27 (Final Year)
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <h5 className="text-base font-bold text-white">Class 12th — Senior Secondary Education</h5>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">
                    White Leaf Public School, Bawana, Delhi • Science Stream with Computer Science
                  </p>
                </div>
                <span className="text-xs font-mono text-gray-400">Completed</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <h5 className="text-base font-bold text-white">Class 10th — Secondary Education</h5>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">
                    Holy Child Senior Secondary School, Hisar, Haryana • Science & Mathematics Foundation
                  </p>
                </div>
                <span className="text-xs font-mono text-gray-400">Completed</span>
              </div>
            </div>
          </div>

          {/* Section 3: Featured Analytics Projects */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Featured Analytics Case Studies
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-base font-bold text-white">Sales Performance & Profitability</h5>
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                    Python • SQL • Power BI
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-gray-300 font-normal">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Analyzed 9,990+ retail transaction records to evaluate revenue and profit margin drivers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Executed SQL queries isolating high-margin Tech items (17.4%) vs loss-making Furniture Tables (-$17.7K).</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-base font-bold text-white">Netflix Content & Trend Analysis</h5>
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                    Python • Pandas • Tableau
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-gray-300 font-normal">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Investigated 8,800+ global streaming titles to uncover acquisition trends and genre shifts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Mapped Movies vs TV Shows ratio (69.6% vs 30.4%) and annual content addition spikes (2,016 titles in 2019).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: Activities & Leadership */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Campus Activities & Leadership
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">Active Member — IEEE Student Chapter</h5>
                  <p className="text-xs text-gray-400">J.C. Bose University of Science and Technology, YMCA</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">University Hackathon Participant</h5>
                  <p className="text-xs text-gray-400">Collaborated on data analysis & visual presentation pipeline</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* PDF Resume Viewer Modal */}
      <ResumeViewerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};

export default ResumeSection;
