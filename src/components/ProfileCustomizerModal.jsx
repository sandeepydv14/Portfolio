import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Camera, FileText, CheckCircle2, RotateCcw, Save, Sparkles, Download } from 'lucide-react';
import { defaultProfileData, getProfileData } from '../data/profile';

const ProfileCustomizerModal = ({ isOpen, onClose, onSave }) => {
  const currentProfile = getProfileData();

  const [formData, setFormData] = useState({
    name: currentProfile.name,
    title: currentProfile.title,
    email: currentProfile.email,
    phone: currentProfile.phone,
    university: currentProfile.university,
    aboutBio: currentProfile.aboutBio,
    profileImage: currentProfile.profileImage,
    resumePath: currentProfile.resumePath,
    resumeName: "Sandeep_Yadav_Resume.pdf"
  });

  const [imagePreview, setImagePreview] = useState(currentProfile.profileImage);
  const [resumeStatus, setResumeStatus] = useState("Original PDF Attached");
  const [successNotice, setSuccessNotice] = useState("");

  if (!isOpen) return null;

  // Handle Profile Picture File Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file (JPG, PNG, WEBP).');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result;
        setImagePreview(base64Data);
        setFormData(prev => ({ ...prev, profileImage: base64Data }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Resume PDF Upload
  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) {
        alert('Please upload a PDF document.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Pdf = reader.result;
        setFormData(prev => ({ 
          ...prev, 
          resumePath: base64Pdf,
          resumeName: file.name
        }));
        setResumeStatus(`Custom PDF Uploaded: ${file.name}`);
      };
      reader.readAsDataURL(file);
    }
  };

  // Save changes to localStorage and update state
  const handleSave = () => {
    try {
      localStorage.setItem('sandeep_portfolio_profile', JSON.stringify(formData));
      setSuccessNotice('Profile & Resume updated successfully! Refreshing portfolio view...');
      setTimeout(() => {
        if (onSave) onSave(formData);
        onClose();
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.error(err);
      alert('Storage limit exceeded or save error. Try uploading a smaller image.');
    }
  };

  // Reset to default
  const handleReset = () => {
    localStorage.removeItem('sandeep_portfolio_profile');
    setImagePreview(defaultProfileData.profileImage);
    setFormData(defaultProfileData);
    setResumeStatus("Original PDF Attached");
    setSuccessNotice('Reset to original default profile!');
    setTimeout(() => setSuccessNotice(''), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-[#0b0f19] border border-cyan-500/40 rounded-3xl shadow-2xl overflow-hidden my-8 flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 bg-slate-900/80 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Customize Portfolio Info</h2>
                <p className="text-xs text-cyan-400 font-mono">Upload photo, resume PDF & edit personal details</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* Success Notice Banner */}
            {successNotice && (
              <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 font-mono">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{successNotice}</span>
              </div>
            )}

            {/* Profile Picture Upload Box */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-4">
              <label className="block text-xs font-mono text-cyan-400 uppercase font-semibold">
                1. Profile Picture Photo
              </label>
              
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shrink-0 shadow-lg">
                  <img src={imagePreview} alt="Profile Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="space-y-3 w-full">
                  <p className="text-xs text-gray-300">
                    Upload a new square headshot (JPG, PNG, WEBP). It updates live on your Hero section.
                  </p>

                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 cursor-pointer transition-colors shadow-md">
                      <Upload className="w-4 h-4" />
                      <span>Choose New Image</span>
                      <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                    </label>

                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview(defaultProfileData.profileImage);
                        setFormData(prev => ({ ...prev, profileImage: defaultProfileData.profileImage }));
                      }}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white bg-slate-800 transition-colors"
                    >
                      Reset Photo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Upload Box */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-4">
              <label className="block text-xs font-mono text-cyan-400 uppercase font-semibold">
                2. Resume PDF Upload
              </label>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-red-500/10 text-red-400">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{formData.resumeName}</p>
                    <span className="text-xs font-mono text-gray-400">{resumeStatus}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 cursor-pointer transition-all shadow-md">
                    <Upload className="w-4 h-4" />
                    <span>Upload New Resume PDF</span>
                    <input type="file" accept="application/pdf" onChange={handleResumeChange} className="hidden" />
                  </label>
                </div>
              </div>
            </div>

            {/* Text Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Professional Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Phone</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-300 uppercase mb-1">About Me Narrative</label>
              <textarea
                rows={3}
                value={formData.aboutBio}
                onChange={e => setFormData({ ...formData, aboutBio: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
              />
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/10 bg-slate-900/90 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-400 hover:text-white bg-slate-800 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-400 hover:text-white bg-slate-800/60"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg transition-all"
              >
                <Save className="w-4 h-4" />
                <span>Save Portfolio Changes</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProfileCustomizerModal;
