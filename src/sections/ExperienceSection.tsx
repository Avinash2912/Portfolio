import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Code2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative border-l-2 border-indigo-500/30 pl-8 ml-4"
      >
        <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-0" />
        
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <Briefcase className="w-6 h-6 text-indigo-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Hash Define</h3>
          </div>
          <p className="text-indigo-400 mb-4">Tech Team Member | August 2022 – Present</p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <Users className="w-5 h-5 text-gray-400 mt-1" />
              <p className="text-gray-300">Managed and coordinated a diverse range of 15+ Technical events by working alongside industry leaders, fostering a technical environment at various colleges.</p>
            </div>
            
            <div className="flex items-start space-x-4">
              <Code2 className="w-5 h-5 text-gray-400 mt-1" />
              <p className="text-gray-300">Instructed and mentored 250+ up-and-coming programmers in Data Structures and Algorithms, enabling them with essential skills and knowledge to excel professionally.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}