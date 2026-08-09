import React from 'react';
import { BarChart3, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import profileData from '../data/profile';
import socialLinksData from '../data/socialLinks';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070e] border-t border-white/10 py-12 relative z-10 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white">
                <BarChart3 className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-wide">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs text-gray-400 font-mono">
              {profileData.title} • {profileData.university}
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="md:col-span-4 flex flex-wrap items-center gap-4 text-xs font-mono">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#workflow" className="hover:text-cyan-400 transition-colors">Workflow</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={socialLinksData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-cyan-400 transition-colors border border-white/5"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={socialLinksData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-cyan-400 transition-colors border border-white/5"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={socialLinksData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-cyan-400 transition-colors border border-white/5"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-blue-600/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors border border-blue-500/30 ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500">
          <p>© {new Date().getFullYear()} Sandeep. Built with React, Vite & Tailwind CSS.</p>
          <p>Designed for Data Analyst & Business Intelligence Roles.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
