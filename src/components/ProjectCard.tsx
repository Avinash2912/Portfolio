

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  imageUrl?: string;  // Made optional to use fallback
  siteLink?: string;
  githubLink?: string;
}



export default function ProjectCard({ 
  title, 
  tech, 
  description, 
  imageUrl, 
  siteLink, 
  githubLink 
}: ProjectCardProps) {
  const fallbackImage = `https://placehold.co/600x400/1a1a1a/ffffff?text=${title}`;

  return (
    <div className="max-w-[280px]  rounded-xl overflow-hidden border border-cyan-800/30 hover:border-cyan-600/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 p-4 m-4">
      {/* Image Container */}
      <div className="w-full h-48 overflow-hidden rounded-lg">
        <img 
          src={imageUrl || fallbackImage} 
          alt={title} 
          className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = fallbackImage;
          }}
        />
      </div>

      {/* Content Container */}
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-cyan-50 group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          <p className="text-cyan-400/90 text-sm font-mono">
            {tech}
          </p>
        </div>

        <p className="text-cyan-100/70 mb-6 text-sm line-clamp-3">
          {description}
        </p>
        
        {/* Buttons Container */}
        <div className="flex gap-3">
          {siteLink && (
            <a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-lg transition-all duration-300 hover:scale-105 text-sm border border-emerald-500/30 hover:border-emerald-400/50"
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
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-all duration-300 hover:scale-105 text-sm border border-blue-500/30 hover:border-blue-400/50"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}




