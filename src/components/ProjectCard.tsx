

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
  // Fallback image URL - using placeholder.com for demo
  const fallbackImage = `https://placehold.co/600x400/1a1a1a/ffffff?text=${title}`;

  return (
    <div className="max-w-[300px] bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-xl overflow-hidden border border-violet-500/20 hover:border-fuchsia-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-fuchsia-500/10 p-5 m-7">
      {/* Image Container */}
      <div className="w-full h-48 overflow-hidden">
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
          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-fuchsia-400 transition-colors">
            {title}
          </h3>
          <p className="text-fuchsia-400/90 text-sm font-mono">
            {tech}
          </p>
        </div>

        <p className="text-gray-300 mb-6 text-sm line-clamp-3">
          {description}
        </p>
        
        {/* Buttons Container */}
        <div className="flex gap-3">
          {siteLink && (
            <a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
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
              className="flex items-center gap-2 px-3 py-1.5 bg-fuchsia-500/20 hover:bg-fuchsia-500/30 text-fuchsia-300 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
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





