import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Database, Code2, LineChart, CheckCircle2, Lightbulb, ArrowUpRight, BarChart3 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const CaseStudyModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        
        {/* Modal Outer Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-[#0b0f19] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >

          {/* Modal Sticky Top Header */}
          <div className="p-6 border-b border-white/10 bg-slate-900/80 backdrop-blur-md flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">{project.type}</span>
                <h2 className="text-xl font-bold text-white leading-tight">{project.title}</h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tab Bar */}
          <div className="flex items-center gap-2 px-6 py-3 bg-slate-900/40 border-b border-white/5 overflow-x-auto shrink-0 font-mono text-xs">
            {[
              { id: 'overview', label: 'Overview & Problem' },
              { id: 'cleaning', label: 'Data Cleaning & EDA' },
              { id: 'sql', label: 'SQL Queries' },
              { id: 'charts', label: 'Visual Dashboard' },
              { id: 'insights', label: 'Insights & Recs' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Modal Body Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            
            {/* TAB 1: OVERVIEW & PROBLEM */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-fadeIn">
                
                {/* Project Banner Image */}
                <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-white/10">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
                    {project.tools.map(tool => (
                      <span key={tool} className="px-3 py-1 rounded-lg bg-slate-900/90 text-cyan-300 border border-cyan-500/40 text-xs font-mono">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Business Problem */}
                <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Database className="w-5 h-5 text-cyan-400" />
                    Business Problem Statement
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                </div>

                {/* Dataset Summary */}
                <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-blue-400" />
                      Dataset Architecture
                    </h3>
                    {project.isSampleData && (
                      <span className="text-[11px] font-mono text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                        Sample / Demo Dataset
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.datasetInfo}</p>
                </div>

                {/* Key KPIs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.kpis.map((kpi, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-white/10">
                      <p className="text-[10px] text-gray-400 font-mono uppercase">{kpi.label}</p>
                      <p className="text-xl font-bold text-white mt-1">{kpi.value}</p>
                      <span className="text-[11px] text-cyan-400 font-mono">{kpi.note}</span>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* TAB 2: DATA CLEANING & EDA */}
            {activeTab === 'cleaning' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-400" />
                    Data Cleaning & Processing Pipeline
                  </h3>
                  <div className="space-y-3">
                    {project.dataCleaning.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                        <span className="text-xs font-mono text-cyan-400 font-bold mt-0.5">0{idx + 1}.</span>
                        <p className="text-sm text-gray-300">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <LineChart className="w-5 h-5 text-purple-400" />
                    Exploratory Data Analysis (EDA) Summary
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.edaSummary}</p>
                </div>
              </div>
            )}

            {/* TAB 3: SQL QUERIES */}
            {activeTab === 'sql' && (
              <div className="space-y-6 animate-fadeIn">
                <p className="text-xs font-mono text-gray-400">
                  SQL queries executed for aggregation, metric calculations, and filtering:
                </p>

                {project.sqlAnalysis.map((sq, idx) => (
                  <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                    <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2 font-mono">
                      <Code2 className="w-4 h-4" />
                      {sq.title}
                    </h4>
                    <pre className="p-4 rounded-xl bg-[#070913] border border-white/10 text-xs font-mono text-cyan-200 overflow-x-auto">
                      <code>{sq.query}</code>
                    </pre>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 4: VISUAL DASHBOARD */}
            {activeTab === 'charts' && (
              <div className="space-y-8 animate-fadeIn">
                
                {/* Sales Analytics Charts */}
                {project.id === 'sales-performance-analysis' && (
                  <>
                    <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
                      <h4 className="text-sm font-bold text-white font-mono">Monthly Revenue ($) & Profit ($) Growth</h4>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={project.chartData.monthlyTrend}>
                            <defs>
                              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
                              </linearGradient>
                              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                            <YAxis stroke="#94a3b8" fontSize={11} />
                            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }} />
                            <Legend />
                            <Area type="monotone" dataKey="sales" name="Sales ($)" stroke="#38bdf8" fillOpacity={1} fill="url(#colorSales)" />
                            <Area type="monotone" dataKey="profit" name="Profit ($)" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorProfit)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
                        <h4 className="text-sm font-bold text-white font-mono">Regional Performance Comparison</h4>
                        <div className="h-56 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={project.chartData.regional}>
                              <XAxis dataKey="region" stroke="#94a3b8" fontSize={11} />
                              <YAxis stroke="#94a3b8" fontSize={11} />
                              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }} />
                              <Bar dataKey="sales" name="Sales ($)" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                              <Bar dataKey="profit" name="Profit ($)" fill="#10b981" radius={[6, 6, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
                        <h4 className="text-sm font-bold text-white font-mono">Category Profit Margin %</h4>
                        <div className="h-56 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={project.chartData.categories} layout="vertical">
                              <XAxis type="number" stroke="#94a3b8" fontSize={11} />
                              <YAxis dataKey="category" type="category" stroke="#94a3b8" fontSize={11} />
                              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }} />
                              <Bar dataKey="margin" name="Margin %" fill="#06b6d4" radius={[0, 6, 6, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Netflix Analytics Charts */}
                {project.id === 'netflix-content-trend-analysis' && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col items-center">
                        <h4 className="text-sm font-bold text-white font-mono self-start">Movies vs TV Shows Ratio</h4>
                        <div className="h-56 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={project.chartData.typeDistribution}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={80}
                                paddingAngle={5}
                              >
                                {project.chartData.typeDistribution.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }} />
                              <Legend />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
                        <h4 className="text-sm font-bold text-white font-mono">Top Genre Categories</h4>
                        <div className="h-56 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={project.chartData.topGenres} layout="vertical">
                              <XAxis type="number" stroke="#94a3b8" fontSize={11} />
                              <YAxis dataKey="genre" type="category" stroke="#94a3b8" fontSize={10} width={110} />
                              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }} />
                              <Bar dataKey="count" name="Titles" fill="#e50914" radius={[0, 6, 6, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
                      <h4 className="text-sm font-bold text-white font-mono">Annual Content Additions Trend</h4>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={project.chartData.yearlyAdditions}>
                            <XAxis dataKey="year" stroke="#94a3b8" fontSize={11} />
                            <YAxis stroke="#94a3b8" fontSize={11} />
                            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }} />
                            <Legend />
                            <Bar dataKey="movies" name="Movies Added" fill="#e50914" stackId="a" />
                            <Bar dataKey="tvShows" name="TV Shows Added" fill="#38bdf8" stackId="a" radius={[6, 6, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </>
                )}

              </div>
            )}

            {/* TAB 5: INSIGHTS & RECOMMENDATIONS */}
            {activeTab === 'insights' && (
              <div className="space-y-6 animate-fadeIn">
                
                {/* Insights */}
                <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-400" />
                    Key Analytical Insights
                  </h3>
                  <div className="space-y-3">
                    {project.insights.map((insight, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                        <span className="text-xs font-mono text-cyan-400 font-bold mt-0.5">•</span>
                        <p className="text-sm text-gray-300 leading-relaxed">{insight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <ArrowUpRight className="w-5 h-5 text-emerald-400" />
                    Strategic Business Recommendations
                  </h3>
                  <div className="space-y-3">
                    {project.recommendations.map((rec, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                        <span className="text-xs font-mono text-emerald-400 font-bold mt-0.5">{idx + 1}.</span>
                        <p className="text-sm text-gray-300 leading-relaxed">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Modal Sticky Bottom Action Footer */}
          <div className="p-6 border-t border-white/10 bg-slate-900/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-all hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {project.liveDemo && project.liveDemo !== '#' && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-105"
                >
                  <span>Live Dashboard</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-gray-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
            >
              Close Case Study
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CaseStudyModal;
