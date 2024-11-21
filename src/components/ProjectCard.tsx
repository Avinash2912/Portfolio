import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  siteLink?: string;
  githubLink?: string;
}

export default function ProjectCard({ title, tech, description, siteLink, githubLink }: ProjectCardProps) {
  return (
    <div className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-xl p-6 border border-violet-500/20 hover:border-fuchsia-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-fuchsia-500/10">
      <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-fuchsia-400 transition-colors">{title}</h3>
      <p className="text-fuchsia-400/90 text-sm mb-4 font-mono">{tech}</p>
      <p className="text-gray-300 mb-6">{description}</p>
      
      <div className="flex gap-4">
        {siteLink && (
          <a
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-fuchsia-500/20 hover:bg-fuchsia-500/30 text-fuchsia-300 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
      </div>
    </div>
  );
}