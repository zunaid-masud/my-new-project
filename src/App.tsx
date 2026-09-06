import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Scene3DBackground } from './components/Scene3DBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGrid } from './components/PortfolioGrid';
import { ResultsSection } from './components/ResultsSection';
import { SkillsVisualization } from './components/SkillsVisualization';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CertificatesGallery } from './components/CertificatesGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProjectManagerModal } from './components/ProjectManagerModal';
import { BrandIdentityModal } from './components/BrandIdentityModal';
import { initialProjects } from './data/projects';
import { ProjectItem } from './types';

export function App() {
  // Projects State with LocalStorage Persistence
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem('zm_portfolio_projects');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('LocalStorage unavailable');
    }
    return initialProjects;
  });

  // Active Case Study for Modal
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  // Project Studio / CMS Modal State
  const [isProjectStudioOpen, setIsProjectStudioOpen] = useState(false);

  // Brand Identity / Logo Suite Modal State
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);

  // Update projects and save to local storage
  const handleUpdateProjects = (updated: ProjectItem[]) => {
    setProjects(updated);
    try {
      localStorage.setItem('zm_portfolio_projects', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
  };

  const handleResetProjects = () => {
    setProjects(initialProjects);
    try {
      localStorage.removeItem('zm_portfolio_projects');
    } catch (e) {
      // ignore
    }
  };

  const handleOpenCaseStudy = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsCaseStudyOpen(true);
  };

  const handleCloseCaseStudy = () => {
    setIsCaseStudyOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#050817] text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Immersive UI Dot Grid & Ambient Atmosphere */}
      <div className="fixed inset-0 dot-grid opacity-20 pointer-events-none z-0" />
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-blue-900 rounded-full blur-[160px] opacity-30 pointer-events-none z-0" />
      <div className="fixed top-1/2 -right-40 w-[500px] h-[500px] bg-red-900 rounded-full blur-[200px] opacity-20 pointer-events-none z-0" />

      {/* 1. Custom Interactive Cursor */}
      <CustomCursor />

      {/* 2. 3D WebGL Background Scene */}
      <Scene3DBackground />

      {/* 3. Floating Glass Navigation */}
      <Navbar
        onOpenProjectStudio={() => setIsProjectStudioOpen(true)}
        onOpenBrandModal={() => setIsBrandModalOpen(true)}
      />

      {/* 4. Main Portfolio Layout */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection onOpenBrandModal={() => setIsBrandModalOpen(true)} />
        <ServicesSection />
        <PortfolioGrid
          projects={projects}
          onSelectProject={handleOpenCaseStudy}
          onOpenProjectStudio={() => setIsProjectStudioOpen(true)}
        />
        <ResultsSection />
        <SkillsVisualization />
        <ExperienceTimeline />
        <CertificatesGallery />
        <TestimonialsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* 5. Minimal Futuristic Footer */}
      <Footer onOpenBrandModal={() => setIsBrandModalOpen(true)} />

      {/* 6. Floating Glass WhatsApp CTA */}
      <WhatsAppButton />

      {/* 7. Fullscreen Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        allProjects={projects}
        isOpen={isCaseStudyOpen}
        onClose={handleCloseCaseStudy}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* 8. Built-in Dynamic CMS / Project Manager Studio */}
      <ProjectManagerModal
        isOpen={isProjectStudioOpen}
        onClose={() => setIsProjectStudioOpen(false)}
        projects={projects}
        onUpdateProjects={handleUpdateProjects}
        onResetDefault={handleResetProjects}
      />

      {/* 9. Brand Identity & Logo Suite Modal */}
      <BrandIdentityModal
        isOpen={isBrandModalOpen}
        onClose={() => setIsBrandModalOpen(false)}
      />
    </div>
  );
}

export default App;
