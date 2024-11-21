import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="min-w-[150px] group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-3 text-center border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 cursor-default backdrop-blur-sm">
      <span className="text-gray-300 group-hover:text-indigo-400 transition-colors">{skill}</span>
    </div>
  );
}