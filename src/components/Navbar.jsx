import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3, Download } from 'lucide-react';
import profileData from '../data/profile';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Active section detection
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
              {profileData.name}
            </span>
            <span className="text-[10px] text-blue-400 font-mono tracking-wider uppercase">
              Data Analyst
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
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

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={profileData.resumePath}
            download="Sandeep_Yadav_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-600/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0b0f19]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl z-50">
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
            <a
              href={profileData.resumePath}
              download="Sandeep_Yadav_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-600/30"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
