import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, CheckCircle2, FileCode, Layers, ShieldCheck } from 'lucide-react';

const certificationTrack = [
  {
    title: "Data Analytics & Python Programming",
    provider: "Data Science Specialization Track",
    badge: "Core Skill Track",
    icon: FileCode,
    skillsCovered: [
      "Pandas & Data Manipulation",
      "NumPy Array Operations",
      "Data Cleansing & Imputation",
      "Matplotlib & Seaborn Visualizations"
    ]
  },
  {
    title: "SQL & Database Management",
    provider: "Relational Query Specialization",
    badge: "Database Core",
    icon: Layers,
    skillsCovered: [
      "Relational Database Schema Design",
      "Multi-Table JOINs & Subqueries",
      "Aggregate Metrics & GROUP BY",
      "Data Extraction & CTE Optimization"
    ]
  },
  {
    title: "Business Intelligence & BI Dashboards",
    provider: "Power BI & Tableau Analytics",
    badge: "BI Core",
    icon: Award,
    skillsCovered: [
      "Power BI Interactive Dashboard Design",
      "DAX Measures & Calculated Columns",
      "Advanced Microsoft Excel & Pivot Tables",
      "Executive KPI Reporting & Metrics"
    ]
  }
];

const CertificationsSection = () => {
  return (
    <section className="py-24 relative z-10 bg-[#070913]/90 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20"
          >
            Academic & Skill Credentials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Analytical <span className="text-gradient">Specializations</span>
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Key analytical domains and course competencies mastered through practical hands-on application.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationTrack.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ translateY: -4 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-500/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-300 font-semibold px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                    {cert.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-blue-400 font-mono mt-1">
                    {cert.provider}
                  </p>

                  <div className="mt-6 space-y-2 pt-4 border-t border-white/10">
                    {cert.skillsCovered.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
