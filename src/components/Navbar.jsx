import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3, Download, Settings, Eye } from 'lucide-react';
import { getProfileData } from '../data/profile';
import ProfileCustomizerModal from './ProfileCustomizerModal';
import ResumeViewerModal from './ResumeViewerModal';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Skills', href: '#skills' },
  { label: 'SQL Sandbox', href: '#sql-sandbox' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume-section' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [profile, setProfile] = useState(getProfileData());
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [resumeViewerOpen, setResumeViewerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    const sections = navItems.map((item) => document.querySelector(item.href)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070913]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:rotate-6" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                {profile.name}
              </span>
              <span className="text-[10px] text-blue-400 font-mono tracking-wider uppercase">
                Data Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* View Resume Modal Trigger */}
            <button
              onClick={() => setResumeViewerOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-mono font-semibold text-gray-300 bg-slate-800/80 hover:bg-slate-700 border border-white/10 hover:border-cyan-500/30 transition-all hover:scale-105"
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>Preview Resume</span>
            </button>

            {/* Customize Info Button */}
            <button
              onClick={() => setCustomizerOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:bg-cyan-900/60 transition-all hover:scale-105"
              title="Edit Profile Picture, Resume PDF & Info"
            >
              <Settings className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span className="hidden md:inline">Edit Info</span>
            </button>

            <a
              href={profile.resumePath}
              download={profile.resumeName || "Sandeep_Yadav_Resume.pdf"}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-600/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Drawer Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[65px] bg-[#0b0f19]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl z-50">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResumeViewerOpen(true);
                }}
                className="w-full text-center flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-gray-200 bg-slate-800 border border-white/10"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                Preview Resume PDF
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCustomizerOpen(true);
                }}
                className="w-full text-center flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-500/40"
              >
                <Settings className="w-4 h-4 text-cyan-400" />
                Edit Photo & Resume
              </button>

              <a
                href={profile.resumePath}
                download={profile.resumeName || "Sandeep_Yadav_Resume.pdf"}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-600/30"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Profile & Resume Customizer Modal */}
      <ProfileCustomizerModal
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        onSave={(updated) => setProfile(updated)}
      />

      {/* Resume Viewer Modal */}
      <ResumeViewerModal
        isOpen={resumeViewerOpen}
        onClose={() => setResumeViewerOpen(false)}
      />
    </>
  );
};

export default Navbar;
