import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import AchievementsSection from './sections/AchievementsSection';
import EducationSection from './sections/EducationSection';
import CodingProfilesSection from './sections/CodingProfilesSection';

function App() {
  const [activeSection, setActiveSection] = useState('projects');

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent pointer-events-none" />
      
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeSection === 'projects' && <ProjectsSection />}
          {activeSection === 'experience' && <ExperienceSection />}
          {activeSection === 'skills' && <SkillsSection />}
          {activeSection === 'achievements' && <AchievementsSection />}
          {activeSection === 'education' && <EducationSection />}
          {activeSection === 'profiles' && <CodingProfilesSection />}
        </motion.div>
      </main>
    </div>
  );
}

export default App;