import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';
import socialLinksData from '../data/socialLinks';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') {
      setStatus('idle');
      setErrorMsg('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Form Validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      setStatus('error');
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    if (!formData.subject.trim()) {
      setErrorMsg('Please enter a subject for your message.');
      setStatus('error');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMsg('Please enter a message containing at least 10 characters.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate clean dispatch with canvas-confetti burst
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${socialLinksData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#070913]/90 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Interested in data analyst internships, placement opportunities, or technical collaborations? Feel free to reach out.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <a
              href={`mailto:${socialLinksData.email}`}
              className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-4 block hover:border-cyan-500/40 transition-all group"
            >
              <div className="p-3.5 rounded-xl bg-blue-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-mono uppercase">Email Address</p>
                <p className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {socialLinksData.email}
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${socialLinksData.phone}`}
              className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-4 block hover:border-cyan-500/40 transition-all group"
            >
              <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-mono uppercase">Phone Number</p>
                <p className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  +91 {socialLinksData.phone}
                </p>
              </div>
            </a>

            {/* Social Links Row */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <p className="text-xs text-gray-400 font-mono uppercase">Professional Profiles</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={socialLinksData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-900/40 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-800/60 text-xs font-semibold transition-all hover:scale-105"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={socialLinksData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 border border-white/10 text-gray-300 hover:text-white hover:bg-slate-700 text-xs font-semibold transition-all hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={socialLinksData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-900/30 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-800/50 text-xs font-semibold transition-all hover:scale-105"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-gray-300 uppercase mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-gray-300 uppercase mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sandeep@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-gray-300 uppercase mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Data Analyst Internship / Placement Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message" className="block text-xs font-mono text-gray-300 uppercase">
                      Your Message *
                    </label>
                    <span className="text-[11px] font-mono text-gray-500">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here (min 10 characters)..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                  />
                </div>

                {/* Validation Error Banner */}
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2 font-mono">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Success Banner */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 font-mono">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Message received! Thank you for getting in touch.</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleMailto}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-xs text-gray-300 bg-slate-800/80 hover:bg-slate-700 border border-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-center gap-2"
                    title="Open default email client"
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                    <span>Open Email App</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

