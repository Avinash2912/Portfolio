import React from 'react';
import SkillBadge from '../components/SkillBadge';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C/C++', 'Java', 'JavaScript', 'Python', 'TypeScript']
  },
  {
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'React', 'Node.js', 'Express', 'Socket.io']
  },
  {
    title: 'Databases & Tools',
    skills: ['MySQL', 'MongoDB', 'Redis', 'Docker', 'Git']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Tailwind CSS', 'Bootstrap', 'WebRTC', 'RabbitMQ']
  }
];

export default function SkillsSection() {
  return (
    <div className="space-y-12">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-semibold text-blue-500 mb-6">{category.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}