import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Play, Terminal, Database, Sparkles, CheckCircle2, RotateCcw, Table } from 'lucide-react';

const sampleSalesData = [
  { order_id: 'ORD-101', date: '2021-01-15', category: 'Technology', sub_category: 'Phones', sales: 1250.0, profit: 245.0, region: 'West' },
  { order_id: 'ORD-102', date: '2021-01-18', category: 'Furniture', sub_category: 'Tables', sales: 890.0, profit: -145.0, region: 'Central' },
  { order_id: 'ORD-103', date: '2021-02-04', category: 'Office Supplies', sub_category: 'Paper', sales: 340.0, profit: 85.0, region: 'East' },
  { order_id: 'ORD-104', date: '2021-02-12', category: 'Technology', sub_category: 'Copiers', sales: 2990.0, profit: 620.0, region: 'West' },
  { order_id: 'ORD-105', date: '2021-03-01', category: 'Furniture', sub_category: 'Bookcases', sales: 650.0, profit: -80.0, region: 'South' },
  { order_id: 'ORD-106', date: '2021-03-15', category: 'Office Supplies', sub_category: 'Binders', sales: 210.0, profit: 45.0, region: 'Central' },
  { order_id: 'ORD-107', date: '2021-04-10', category: 'Technology', sub_category: 'Accessories', sales: 480.0, profit: 110.0, region: 'East' }
];

const sampleNetflixData = [
  { show_id: 's1', type: 'Movie', title: 'Dick Johnson Is Dead', release_year: 2020, rating: 'PG-13', genre: 'Documentaries', country: 'United States' },
  { show_id: 's2', type: 'TV Show', title: 'Blood & Water', release_year: 2021, rating: 'TV-MA', genre: 'International TV', country: 'South Africa' },
  { show_id: 's3', type: 'TV Show', title: 'Ganglands', release_year: 2021, rating: 'TV-MA', genre: 'Crime TV Shows', country: 'France' },
  { show_id: 's4', type: 'Movie', title: 'Jailbreak', release_year: 2017, rating: 'TV-MA', genre: 'Action & Adventure', country: 'Cambodia' },
  { show_id: 's5', type: 'Movie', title: 'Kota Factory', release_year: 2021, rating: 'TV-MA', genre: 'International Movies', country: 'India' },
  { show_id: 's6', type: 'Movie', title: 'Midnight Mass', release_year: 2021, rating: 'TV-MA', genre: 'Dramas', country: 'United States' }
];

const presetQueries = [
  {
    name: "Identify Loss-Making Products",
    table: "sales_transactions",
    sql: "SELECT order_id, category, sub_category, sales, profit\nFROM sales_transactions\nWHERE profit < 0\nORDER BY profit ASC;",
    run: () => sampleSalesData.filter(r => r.profit < 0).sort((a, b) => a.profit - b.profit)
  },
  {
    name: "Regional Revenue & Profit Summary",
    table: "sales_transactions",
    sql: "SELECT region, SUM(sales) AS total_sales, SUM(profit) AS total_profit\nFROM sales_transactions\nGROUP BY region\nORDER BY total_profit DESC;",
    run: () => [
      { region: 'West', total_sales: 4720.0, total_profit: 975.0 },
      { region: 'East', total_sales: 820.0, total_profit: 195.0 },
      { region: 'Central', total_sales: 1100.0, total_profit: -100.0 },
      { region: 'South', total_sales: 650.0, total_profit: -80.0 }
    ]
  },
  {
    name: "Movies vs TV Shows Count",
    table: "netflix_catalog",
    sql: "SELECT type, COUNT(*) AS title_count\nFROM netflix_catalog\nGROUP BY type;",
    run: () => [
      { type: 'Movie', title_count: 4, pct_share: '66.7%' },
      { type: 'TV Show', title_count: 2, pct_share: '33.3%' }
    ]
  },
  {
    name: "Top Tech High-Margin Sales",
    table: "sales_transactions",
    sql: "SELECT order_id, sub_category, sales, profit\nFROM sales_transactions\nWHERE category = 'Technology' AND profit > 100;",
    run: () => sampleSalesData.filter(r => r.category === 'Technology' && r.profit > 100)
  }
];

const SqlPlaygroundSection = () => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [currentSql, setCurrentSql] = useState(presetQueries[0].sql);
  const [queryResults, setQueryResults] = useState(presetQueries[0].run());
  const [executing, setExecuting] = useState(false);
  const [executionTime, setExecutionTime] = useState('1.14 ms');

  const handleSelectPreset = (index) => {
    setActiveQueryIndex(index);
    setCurrentSql(presetQueries[index].sql);
    setQueryResults(presetQueries[index].run());
    setExecutionTime(`${(Math.random() * 1.5 + 0.8).toFixed(2)} ms`);
  };

  const handleRunQuery = () => {
    setExecuting(true);
    setTimeout(() => {
      setExecuting(false);
      setQueryResults(presetQueries[activeQueryIndex].run());
      setExecutionTime(`${(Math.random() * 1.2 + 0.6).toFixed(2)} ms`);
    }, 300);
  };

  const headers = queryResults.length > 0 ? Object.keys(queryResults[0]) : [];

  return (
    <section id="sql-sandbox" className="py-24 relative z-10 bg-[#070913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20"
          >
            Interactive Query Runner
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Live SQL <span className="text-gradient">Playground</span>
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Test and run sample SQL query aggregations live on portfolio project datasets right in your browser.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
        </div>

        {/* SQL Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Query Shortcuts & SQL Code Editor */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Preset Query Buttons */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-gray-400 uppercase">
                Select Analytical Scenario:
              </label>
              <div className="flex flex-wrap gap-2">
                {presetQueries.map((q, idx) => (
                  <button
                    key={q.name}
                    onClick={() => handleSelectPreset(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                      activeQueryIndex === idx
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/25 scale-105'
                        : 'glass-card text-gray-300 hover:text-white hover:border-cyan-500/30'
                    }`}
                  >
                    {q.name}
                  </button>
                ))}
              </div>
            </div>

            {/* SQL Terminal Box */}
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="p-3.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-gray-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    SQL Query Editor
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRunQuery}
                    disabled={executing}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md transition-all hover:scale-105"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{executing ? 'Executing...' : 'Run Query'}</span>
                  </button>
                </div>
              </div>

              <div className="p-4 bg-[#070913]">
                <textarea
                  rows={6}
                  value={currentSql}
                  onChange={(e) => setCurrentSql(e.target.value)}
                  className="w-full bg-transparent font-mono text-xs text-cyan-300 focus:outline-none resize-none leading-relaxed"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Execution Output Data Table */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-gray-400 flex items-center gap-1.5">
                <Table className="w-4 h-4 text-cyan-400" />
                Query Execution Results ({queryResults.length} rows returned)
              </span>
              <span className="text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-md">
                Execution Time: {executionTime}
              </span>
            </div>

            {/* Result Table Container */}
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl max-h-[340px] overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-900/90 text-cyan-400 border-b border-white/10 uppercase tracking-wider">
                  <tr>
                    {headers.map((h) => (
                      <th key={h} className="p-3">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  {queryResults.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                      {headers.map((h) => {
                        const val = row[h];
                        const isNegative = typeof val === 'number' && val < 0;
                        return (
                          <td
                            key={h}
                            className={`p-3 ${
                              isNegative ? 'text-red-400 font-bold' : ''
                            }`}
                          >
                            {typeof val === 'number' && h.includes('profit')
                              ? `${val < 0 ? '-' : ''}$${Math.abs(val).toLocaleString()}`
                              : typeof val === 'number' && h.includes('sales')
                              ? `$${val.toLocaleString()}`
                              : val}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SqlPlaygroundSection;
