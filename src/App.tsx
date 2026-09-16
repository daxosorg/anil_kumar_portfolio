import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { FlutterPlayground } from './components/FlutterPlayground';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { SkillsEcosystem } from './components/SkillsEcosystem';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleOpenContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectById = (projectId: string) => {
    const found = PROJECTS.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0f0f0] font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Top Floating Glassmorphism Navbar */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      <main className="relative">
        {/* Hero Section with Live 3D Phone Simulator */}
        <HeroSection 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
          onSelectProject={handleSelectProjectById}
        />

        {/* Featured Production Apps Grid & Bento Showcase */}
        <ProjectShowcase 
          onSelectProject={(proj) => setSelectedProject(proj)}
          onViewSnippet={(proj) => setSelectedProject(proj)}
        />

        {/* Interactive Flutter Lab (BLoC Stream, Material 3 / Cupertino, 30% Speed Profiler) */}
        <FlutterPlayground />

        {/* Clean Architecture Blueprint Explorer */}
        <ArchitectureExplorer />

        {/* Skills & 6 Global App Stores Ecosystem */}
        <SkillsEcosystem />

        {/* Experience Timeline, Star Performer Award & Education */}
        <ExperienceTimeline />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

    </div>
  );
}
