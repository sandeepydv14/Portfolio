import React from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import WorkflowSection from './sections/WorkflowSection';
import SkillsSection from './sections/SkillsSection';
import SkillsRadarSection from './sections/SkillsRadarSection';
import DataFilterExplorerSection from './sections/DataFilterExplorerSection';
import DataCleaningInspectorSection from './sections/DataCleaningInspectorSection';
import SqlPlaygroundSection from './sections/SqlPlaygroundSection';
import EducationSection from './sections/EducationSection';
import ProjectsSection from './sections/ProjectsSection';
import ResumeSection from './sections/ResumeSection';
import CertificationsSection from './sections/CertificationsSection';
import GithubSection from './sections/GithubSection';
import ActivitiesSection from './sections/ActivitiesSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#070913] text-gray-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Page Scroll Reading Progress Line */}
      <ScrollProgress />

      {/* Dynamic Animated Node & Grid Background */}
      <BackgroundCanvas />

      {/* Smooth Trailing Cursor for Desktop */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <WorkflowSection />
        <SkillsSection />
        <SkillsRadarSection />
        <DataFilterExplorerSection />
        <DataCleaningInspectorSection />
        <SqlPlaygroundSection />
        <EducationSection />
        <ProjectsSection />
        <ResumeSection />
        <CertificationsSection />
        <GithubSection />
        <ActivitiesSection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
