import React from 'react';
import { motion } from 'framer-motion';
import { Database, DownloadCloud, Sparkles, Search, Code2, LineChart, LayoutDashboard, Lightbulb, ArrowRight } from 'lucide-react';

const workflowSteps = [
  {
    step: "01",
    title: "Raw Data",
    icon: Database,
    description: "Identifying heterogeneous data sources, CSV files, relational databases, or APIs.",
    color: "from-blue-600 to-indigo-600"
  },
  {
    step: "02",
    title: "Data Collection",
    icon: DownloadCloud,
    description: "Extracting datasets, establishing connections, and consolidating structured inputs.",
    color: "from-cyan-600 to-blue-600"
  },
  {
    step: "03",
    title: "Data Cleaning",
    icon: Sparkles,
    description: "Handling missing values, deduplicating records, correcting types, and removing outliers.",
    color: "from-teal-600 to-cyan-600"
  },
  {
    step: "04",
    title: "Exploratory EDA",
    icon: Search,
    description: "Uncovering distributions, calculating summary metrics, and discovering correlations.",
    color: "from-indigo-600 to-purple-600"
  },
  {
    step: "05",
    title: "SQL Analysis",
    icon: Code2,
    description: "Querying database schemas with CTEs, JOINs, aggregations, and window functions.",
    color: "from-purple-600 to-pink-600"
  },
  {
    step: "06",
    title: "Visualization",
    icon: LineChart,
    description: "Designing intuitive charts, trendlines, and comparative visual breakdowns.",
    color: "from-blue-600 to-cyan-500"
  },
  {
    step: "07",
    title: "Dashboard",
    icon: LayoutDashboard,
    description: "Building interactive Power BI & Tableau dashboards with dynamic slicers.",
    color: "from-cyan-500 to-emerald-500"
  },
  {
    step: "08",
    title: "Business Insights",
    icon: Lightbulb,
    description: "Translating empirical findings into actionable recommendations for decision-makers.",
    color: "from-emerald-500 to-teal-500"
  }
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-24 relative z-10 bg-[#070913]/90 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20"
          >
            End-to-End Methodology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            My Data Analytics <span className="text-gradient">Workflow</span>
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            A structured step-by-step analytical lifecycle turning raw, unstructured datasets into clear strategic insights.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
        </div>

        {/* Workflow Pipeline Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.03, translateY: -6 }}
                className="glass-card p-6 rounded-2xl border border-white/10 relative group flex flex-col justify-between"
              >
                {/* Step Index Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30">
                    STEP {item.step}
                  </span>
                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  )}
                </div>

                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-[1px] mb-4 shadow-lg`}>
                  <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>

                {/* Text Description */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Border Highlight on Hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WorkflowSection;
