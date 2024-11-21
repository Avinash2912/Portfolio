
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'NEXAMEET',
    tech: 'NodeJs, Socket.io, WebRTC, Express',
    description: 'P2P Video Call platform with real-time communication. Engineered with WebRTC for seamless video calls and ExpressJS backend.',
    siteLink: 'https://nexameet.onrender.com/',
    githubLink: 'https://github.com/Avinash2912/NexaMeet',
    
  },
  {
    title: 'SPOTON',
    tech: 'Socket.io, Express, NodeJS, EJS',
    description: 'Real-time location tracking system with interactive map interface and bidirectional communication.',
    siteLink: 'https://nexameet.onrender.com/',
    githubLink: 'https://github.com/Avinash2912/Spoton',
    
    
  },
  {
    title: 'CodeCrank',
    tech: 'Node.js, Docker, Redis, RabbitMQ',
    description: 'Highly scaled Online Compiler with Micro-Services Architecture and secure code execution.',
    siteLink: '#',
    githubLink: 'https://github.com/Avinash2912/CodeCrank',
   
  }
];

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}