
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
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-x-hidden">
      {/* Responsive gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-blue-500/5 pointer-events-none" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none" />
      
      <Header />
      
      {/* Responsive main container */}
      <main className="w-full max-w-[1440px] mx-auto 
        px-4 sm:px-6 lg:px-8 
        py-4 sm:py-6 lg:py-8 
        relative z-10">
        
        {/* Navigation wrapper with horizontal scroll on mobile */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-max sm:min-w-0">
            <Navigation 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />
          </div>
        </div>
        
        {/* Responsive content container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 sm:mt-6 lg:mt-8 
            backdrop-blur-sm 
            bg-white/5 
            rounded-lg sm:rounded-xl lg:rounded-2xl 
            p-4 sm:p-6 lg:p-8 
            shadow-xl"
        >
          {/* Dynamic content with proper spacing */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {activeSection === 'projects' && <ProjectsSection />}
            {activeSection === 'experience' && <ExperienceSection />}
            {activeSection === 'skills' && <SkillsSection />}
            {activeSection === 'achievements' && <AchievementsSection />}
            {activeSection === 'education' && <EducationSection />}
            {activeSection === 'profiles' && <CodingProfilesSection />}
          </div>
        </motion.div>
      </main>

      {/* Bottom spacing for mobile devices */}
      <div className="h-8 sm:h-12 lg:h-16" />
    </div>
  );
}
export default App;