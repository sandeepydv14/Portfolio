import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Code2, FolderGit2, Star } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import socialLinksData from '../data/socialLinks';
import profileData from '../data/profile';

const repoShortcuts = [
  {
    name: "sales-performance-analysis",
    description: "Retail sales profitability & loss-making product EDA in Python, SQL, and Power BI.",
    language: "Python • SQL",
    stars: "Main Project",
    url: "https://github.com/sandeepydv14/sales-performance-analysis"
  },
  {
    name: "netflix-content-trend-analysis",
    description: "Exploratory data analysis of Netflix global catalog, genre shifts, & content growth trends.",
    language: "Python • Pandas",
    stars: "Main Project",
    url: "https://github.com/sandeepydv14/netflix-content-trend-analysis"
  }
];

const GithubSection = () => {
  return (
    <section className="py-20 relative z-10 bg-[#070913]/90 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Profile Overview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-mono">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Open Source & <span className="text-gradient">Repositories</span>
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed">
                Explore my data analysis notebooks, SQL scripts, and data visualization code repositories hosted publicly on GitHub.
              </p>

              <div className="pt-2">
                <a
                  href={socialLinksData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 shadow-lg transition-all hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>Visit @sandeepydv14</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              </div>
            </div>

            {/* Right Repository Cards */}
            <div className="lg:col-span-7 space-y-4">
              {repoShortcuts.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="block p-5 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-white font-bold font-mono text-sm group-hover:text-cyan-300">
                      <FolderGit2 className="w-4 h-4 text-cyan-400" />
                      <span>{repo.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                      {repo.stars}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 mt-2 font-normal">
                    {repo.description}
                  </p>

                  <div className="flex items-center gap-4 mt-3 text-[11px] font-mono text-gray-400">
                    <span className="flex items-center gap-1">
                      <Code2 className="w-3 h-3 text-blue-400" />
                      {repo.language}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GithubSection;
