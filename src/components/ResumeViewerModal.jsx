import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import profileData from '../data/profile';

const ResumeViewerModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div
        onClick={handleBackdropClick}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      >

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0b0f19] border border-cyan-500/40 rounded-3xl shadow-2xl overflow-hidden my-6 h-[85vh] flex flex-col"
        >
          {/* Sticky Header Toolbar */}
          <div className="p-4 sm:p-5 border-b border-white/10 bg-slate-900/90 backdrop-blur-md flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-500/10 text-cyan-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-tight">
                  {profileData.name} — Resume Preview
                </h3>
                <span className="text-[11px] font-mono text-cyan-400">
                  {profileData.title} • {profileData.degree}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={profileData.resumePath}
                download="Sandeep_Yadav_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md transition-all hover:scale-105"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-800 text-gray-400 hover:text-white transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Viewer Frame */}
          <div className="flex-1 bg-slate-950 p-2 relative overflow-hidden flex flex-col items-center justify-center">
            <iframe
              src={profileData.resumePath}
              title="Sandeep Resume PDF"
              className="w-full h-full rounded-2xl border border-white/10"
            />
          </div>

          {/* Footer Bar */}
          <div className="p-4 border-t border-white/10 bg-slate-900/80 flex items-center justify-between text-xs font-mono text-gray-400 shrink-0">
            <span>Official Resume Document</span>
            <a
              href={profileData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeViewerModal;
