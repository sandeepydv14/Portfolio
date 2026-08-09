import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, BarChart3, TrendingUp, DollarSign, ShoppingBag, Layers, RefreshCw } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const rawTransactions = [
  { id: 1, region: 'West', category: 'Technology', sub: 'Phones', sales: 1250, profit: 245, month: 'Jan' },
  { id: 2, region: 'West', category: 'Technology', sub: 'Copiers', sales: 2990, profit: 620, month: 'Feb' },
  { id: 3, region: 'West', category: 'Furniture', sub: 'Chairs', sales: 940, profit: 120, month: 'Mar' },
  { id: 4, region: 'East', category: 'Technology', sub: 'Accessories', sales: 1480, profit: 310, month: 'Jan' },
  { id: 5, region: 'East', category: 'Office Supplies', sub: 'Paper', sales: 640, profit: 185, month: 'Feb' },
  { id: 6, region: 'East', category: 'Furniture', sub: 'Tables', sales: 1100, profit: -90, month: 'Mar' },
  { id: 7, region: 'Central', category: 'Furniture', sub: 'Tables', sales: 1890, profit: -345, month: 'Jan' },
  { id: 8, region: 'Central', category: 'Office Supplies', sub: 'Binders', sales: 810, profit: 95, month: 'Feb' },
  { id: 9, region: 'Central', category: 'Technology', sub: 'Phones', sales: 1650, profit: 280, month: 'Mar' },
  { id: 10, region: 'South', category: 'Office Supplies', sub: 'Paper', sales: 420, profit: 115, month: 'Jan' },
  { id: 11, region: 'South', category: 'Furniture', sub: 'Bookcases', sales: 1350, profit: -180, month: 'Feb' },
  { id: 12, region: 'South', category: 'Technology', sub: 'Accessories', sales: 1950, profit: 410, month: 'Mar' }
];

const DataFilterExplorerSection = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredData = useMemo(() => {
    return rawTransactions.filter(item => {
      const matchRegion = selectedRegion === 'All' || item.region === selectedRegion;
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      return matchRegion && matchCat;
    });
  }, [selectedRegion, selectedCategory]);

  const kpis = useMemo(() => {
    const totalSales = filteredData.reduce((acc, curr) => acc + curr.sales, 0);
    const totalProfit = filteredData.reduce((acc, curr) => acc + curr.profit, 0);
    const totalOrders = filteredData.length;
    const margin = totalSales > 0 ? ((totalProfit / totalSales) * 100).toFixed(1) : 0;
    return { totalSales, totalProfit, totalOrders, margin };
  }, [filteredData]);

  // Aggregate by Month for live chart
  const monthlyChartData = useMemo(() => {
    const months = ['Jan', 'Feb', 'Mar'];
    return months.map(m => {
      const items = filteredData.filter(d => d.month === m);
      const sales = items.reduce((acc, curr) => acc + curr.sales, 0);
      const profit = items.reduce((acc, curr) => acc + curr.profit, 0);
      return { month: m, sales, profit };
    });
  }, [filteredData]);

  return (
    <section className="py-24 relative z-10 bg-[#070913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20"
          >
            Real-Time Analytics Simulator
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Interactive Data <span className="text-gradient">Explorer</span>
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Filter regional transactions and watch key KPIs & charts recalculate dynamically in real time.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
        </div>

        {/* Filter Toolbar */}
        <div className="glass-card p-6 rounded-3xl border border-white/10 mb-10 shadow-2xl space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-white font-bold text-sm font-mono">
              <Filter className="w-4 h-4 text-cyan-400" />
              <span>Interactive Slicers & Filters</span>
            </div>

            <button
              onClick={() => {
                setSelectedRegion('All');
                setSelectedCategory('All');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-gray-400 hover:text-white bg-slate-800 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Region Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-cyan-400 uppercase font-semibold">
                Select Territory Region:
              </label>
              <div className="flex flex-wrap gap-2">
                {['All', 'West', 'East', 'Central', 'South'].map((r) => (
                  <button
                    key={r}
                    onClick={() => setSelectedRegion(r)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                      selectedRegion === r
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105'
                        : 'bg-slate-900 text-gray-300 hover:bg-slate-800'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-cyan-400 uppercase font-semibold">
                Select Product Category:
              </label>
              <div className="flex flex-wrap gap-2">
                {['All', 'Technology', 'Office Supplies', 'Furniture'].map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                      selectedCategory === c
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md scale-105'
                        : 'bg-slate-900 text-gray-300 hover:bg-slate-800'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-mono uppercase mb-1">
              <DollarSign className="w-4 h-4" />
              <span>Total Revenue</span>
            </div>
            <p className="text-2xl font-bold text-white">${kpis.totalSales.toLocaleString()}</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase mb-1">
              <TrendingUp className="w-4 h-4" />
              <span>Net Profit</span>
            </div>
            <p className={`text-2xl font-bold ${kpis.totalProfit < 0 ? 'text-red-400' : 'text-emerald-400'}`}>
              {kpis.totalProfit < 0 ? '-' : ''}${Math.abs(kpis.totalProfit).toLocaleString()}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase mb-1">
              <ShoppingBag className="w-4 h-4" />
              <span>Record Count</span>
            </div>
            <p className="text-2xl font-bold text-white">{kpis.totalOrders} Orders</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase mb-1">
              <Layers className="w-4 h-4" />
              <span>Profit Margin</span>
            </div>
            <p className="text-2xl font-bold text-white">{kpis.margin}%</p>
          </div>
        </div>

        {/* Live Filtered Chart */}
        <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4 shadow-2xl">
          <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-cyan-400" />
            Filtered Monthly Revenue & Net Profit Growth ($)
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyChartData}>
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }} />
                <Legend />
                <Bar dataKey="sales" name="Filtered Sales ($)" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                <Bar dataKey="profit" name="Filtered Profit ($)" fill="#10b981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DataFilterExplorerSection;
