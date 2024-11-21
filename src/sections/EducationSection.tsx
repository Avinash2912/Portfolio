
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-8"
    >
      {/* College Information */}
      <div className="bg-gradient-to-br from-green-500/50 to-green-700/50 rounded-xl p-6 mb-6 border border-green-800">
        <div className="flex items-center mb-4">
          <GraduationCap className="w-8 h-8 text-green-300 mr-4" />
          <h2 className="text-2xl font-bold text-white">Guru Gobind Singh Indraprastha University</h2>
          <span className='ml-auto text-white'>CGPA: 8.675</span>
        </div>
        
        <div className="space-y-4 ml-12">
          <div className="flex items-center text-gray-300">
            <Calendar className="w-5 h-5 mr-3" />
            <span className="text-white">2021 – 2025</span>
          </div>
          
          <div className="flex items-center text-gray-300">
            <Award className="w-5 h-5 mr-3" />
            <span className="text-white">Bachelor of Technology, Computer Science Engineering</span>
          </div>
        </div>
      </div>

      {/* 12th Grade Information */}
      <div className="bg-gradient-to-br from-blue-500/50 to-blue-700/50 rounded-xl p-6 mb-6 border border-blue-800">
        <div className="flex items-center mb-4">
          <GraduationCap className="w-8 h-8 text-blue-300 mr-4" />
          <h2 className="text-2xl font-bold text-white">Poorna Prajna Public School</h2>
          <span className='ml-auto text-white'>Percentage: 75%</span>
        </div>
        
        <div className="space-y-4 ml-12">
          <div className="flex items-center text-gray-300">
            <Calendar className="w-5 h-5 mr-3" />
            <span className="text-white">2019 – 2020</span>
          </div>
          
          <div className="flex items-center text-gray-300">
            <Award className="w-5 h-5 mr-3" />
            <span className="text-white">Senior Secondary Education, PCM</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}