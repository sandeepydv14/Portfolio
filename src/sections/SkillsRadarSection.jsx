import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { ShieldCheck, Sparkles } from 'lucide-react';

const skillRadarData = [
  { subject: 'Python & Pandas', A: 90, fullMark: 100 },
  { subject: 'SQL & Queries', A: 88, fullMark: 100 },
  { subject: 'EDA & Statistics', A: 92, fullMark: 100 },
  { subject: 'Power BI & DAX', A: 85, fullMark: 100 },
  { subject: 'Data Cleaning', A: 95, fullMark: 100 },
  { subject: 'Visualization', A: 90, fullMark: 100 }
];

const SkillsRadarSection = () => {
  return (
    <section className="py-20 relative z-10 bg-[#070913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Competency Radar</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Analytical Skill <span className="text-gradient">Matrix</span>
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed font-normal">
                A holistic visual evaluation of my proficiency across key data analytics domains: data cleaning, exploratory analysis, SQL database querying, and executive dashboard design.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-cyan-300">
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10">• Data Wrangling: 95%</span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10">• EDA: 92%</span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10">• Python: 90%</span>
              </div>
            </div>

            {/* Right Recharts Radar Chart */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="h-80 w-full max-w-lg">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillRadarData}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" stroke="#38bdf8" fontSize={11} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#64748b" fontSize={10} />
                    <Radar
                      name="Sandeep Proficiency"
                      dataKey="A"
                      stroke="#38bdf8"
                      fill="#3b82f6"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsRadarSection;
