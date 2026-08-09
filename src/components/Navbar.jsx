import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BarChart3, Download, Settings, Eye, Terminal, GraduationCap, Briefcase, User, Mail, Sparkles } from 'lucide-react';
import { getProfileData } from '../data/profile';
import ProfileCustomizerModal from './ProfileCustomizerModal';
import ResumeViewerModal from './ResumeViewerModal';

const navItems = [
  { label: 'Home', href: '#home', icon: User },
  { label: 'About', href: '#about', icon: User },
  { label: 'Workflow', href: '#workflow', icon: Sparkles },
  { label: 'Skills', href: '#skills', icon: Terminal },
  { label: 'SQL Sandbox', href: '#sql-sandbox', icon: Terminal },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Projects', href: '#projects', icon: Briefcase },
  { label: 'Resume', href: '#resume-section', icon: Download },
  { label: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
  const [profile, setProfile] = useState(getProfileData());
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [resumeViewerOpen, setResumeViewerOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setCustomizerOpen(false);
        setResumeViewerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

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
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.substring(1));
    }
  };


  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070913]/90 backdrop-blur-xl border-b border-white/10 py-2.5 shadow-2xl shadow-black/60'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-[1px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-cyan-500/20">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-cyan-400 transition-transform duration-300 group-hover:rotate-6" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                {profile.name}
              </span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-wider uppercase">
                Data Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links Pill Bar */}
          <nav className="hidden lg:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-md shadow-blue-500/30 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>


          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* View Resume Preview Modal Trigger */}
            <button
              onClick={() => setResumeViewerOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-gray-300 bg-slate-800/90 hover:bg-slate-700 border border-white/10 hover:border-cyan-500/30 transition-all hover:scale-105"
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>Preview</span>
            </button>

            {/* Customize Info Button */}
            <button
              onClick={() => setCustomizerOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/70 border border-cyan-500/40 hover:bg-cyan-900/80 transition-all hover:scale-105"
              title="Edit Profile Picture, Resume PDF & Info"
            >
              <Settings className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span className="hidden sm:inline">Edit Info</span>
            </button>

            {/* Main Resume Download CTA */}
            <a
              href={profile.resumePath}
              download={profile.resumeName || "Sandeep_Yadav_Resume.pdf"}
              className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-800/90 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Animated Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0b0f19]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl z-50 max-h-[85vh] overflow-y-auto"
            >
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white border border-white/5'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setResumeViewerOpen(true);
                  }}
                  className="w-full text-center flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-200 bg-slate-800 border border-white/10"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Preview Resume PDF</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCustomizerOpen(true);
                  }}
                  className="w-full text-center flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-500/40"
                >
                  <Settings className="w-4 h-4 text-cyan-400" />
                  <span>Edit Photo & Resume</span>
                </button>

                <a
                  href={profile.resumePath}
                  download={profile.resumeName || "Sandeep_Yadav_Resume.pdf"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-600/30"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
