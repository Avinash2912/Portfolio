
import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import AchievementsSection from './sections/AchievementsSection';
import EducationSection from './sections/EducationSection';
import CodingProfilesSection from './sections/CodingProfilesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />
      
      <main className="max-w-[1440px] mx-auto px-4 py-8">
        {/* Projects */}
        <div className="mb-12 bg-white/5 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <ProjectsSection />
        </div>

        {/* Experience */}
        <div className="mb-12 bg-white/5 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
          <ExperienceSection />
        </div>

        {/* Skills */}
        <div className="mb-12 bg-white/5 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <SkillsSection />
        </div>

        {/* Achievements */}
        <div className="mb-12 bg-white/5 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Achievements</h2>
          <AchievementsSection />
        </div>

        {/* Education */}
        <div className="mb-12 bg-white/5 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <EducationSection />
        </div>

        {/* Coding Profiles */}
        <div className="mb-12 bg-white/5 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Coding Profiles</h2>
          <CodingProfilesSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;