import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Code2 } from 'lucide-react';

const rawMessyRows = [
  { id: '1', date: '01/15/2021', category: 'Technology', sales: '$1,250.00', profit: '245.0', nulls: 'MISSING' },
  { id: '2', date: '2021-01-15', category: 'Technology', sales: '$1,250.00', profit: '245.0', nulls: 'DUPLICATE' },
  { id: '3', date: 'Feb 4 2021', category: 'furniture', sales: '890', profit: '-145.00', nulls: 'UNFORMATTED' },
  { id: '4', date: 'null', category: 'Office Supplies', sales: '340.0', profit: 'NaN', nulls: 'NULL PROFIT' }
];

const cleanedRows = [
  { id: 1, date: '2021-01-15', category: 'Technology', sales: 1250.00, profit: 245.00, status: 'Imputed & Formatted' },
  { id: 2, date: '2021-02-04', category: 'Furniture', sales: 890.00, profit: -145.00, status: 'Standardized Case' },
  { id: 3, date: '2021-02-12', category: 'Office Supplies', sales: 340.00, profit: 0.00, status: 'Null Imputed (0.0)' }
];

const cleaningSnippets = `import pandas as pd

# 1. Standardize Datetime & String Columns
df['Order Date'] = pd.to_datetime(df['Order Date'], errors='coerce')
df['Category'] = df['Category'].str.strip().str.title()

# 2. Clean Currency Strings to Numeric Floats
df['Sales'] = df['Sales'].astype(str).str.replace('[\$,]', '', regex=True).astype(float)

# 3. Deduplicate Records & Impute Missing Values
df = df.drop_duplicates()
df['Profit'] = df['Profit'].fillna(0.0)`;

const DataCleaningInspectorSection = () => {
  const [viewState, setViewState] = useState('clean'); // 'raw' | 'clean'

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
            Pandas & Python Data Wrangling
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Data Cleaning <span className="text-gradient">Inspector</span>
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Toggle between raw, unformatted data and cleaned, production-ready dataset pipelines.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
        </div>

        {/* Before vs After Switch */}
        <div className="flex justify-center mb-10">
          <div className="glass-card p-1.5 rounded-full border border-white/10 flex items-center gap-2">
            <button
              onClick={() => setViewState('raw')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                viewState === 'raw'
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ⚠️ Raw Uncleaned Data
            </button>

            <button
              onClick={() => setViewState('clean')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                viewState === 'clean'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ✨ Clean Processed Data
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Table Display */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-gray-300 font-semibold flex items-center gap-2">
                {viewState === 'raw' ? (
                  <>
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    Raw Dataset (Contains nulls, mixed types, duplicates)
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Clean Dataset (Normalized types, imputed missing values)
                  </>
                )}
              </span>
            </div>

            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-900/90 text-cyan-400 border-b border-white/10 uppercase">
                  <tr>
                    <th className="p-3">Date</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Sales</th>
                    <th className="p-3">Profit</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  {viewState === 'raw' ? (
                    rawMessyRows.map((r, i) => (
                      <tr key={i} className="hover:bg-amber-950/20 transition-colors">
                        <td className="p-3 text-amber-300">{r.date}</td>
                        <td className="p-3">{r.category}</td>
                        <td className="p-3 text-amber-300">{r.sales}</td>
                        <td className="p-3 text-red-400 font-bold">{r.profit}</td>
                        <td className="p-3">
                          <span className="text-[10px] text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                            {r.nulls}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    cleanedRows.map((r, i) => (
                      <tr key={i} className="hover:bg-emerald-950/20 transition-colors">
                        <td className="p-3 text-emerald-300">{r.date}</td>
                        <td className="p-3 text-white font-semibold">{r.category}</td>
                        <td className="p-3 text-white">${r.sales.toFixed(2)}</td>
                        <td className={`p-3 ${r.profit < 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                          ${r.profit.toFixed(2)}
                        </td>
                        <td className="p-3">
                          <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                            {r.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Python Code Snippet */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-sm font-bold text-cyan-300 font-mono flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Pandas Data Cleaning Code Script
              </h3>
              <pre className="p-4 rounded-xl bg-[#070913] border border-white/10 text-xs font-mono text-cyan-200 overflow-x-auto">
                <code>{cleaningSnippets}</code>
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DataCleaningInspectorSection;
