import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-16 md:py-24 top-10 p-10  relative overflow-hidden bg-black text-green-600">
      <div className="absolute inset-0 bg-black opacity-60 "></div>
      <div className="max-w-4xl mx-auto relative text-center z-10">
        <div className="animate-fadeIn space-y-6">
          <TypeAnimation
            sequence={[
              'Avinash Jha',
              1000,
              'CSE  Student',
              1000,
              'MERN Stack Developer',
              1000,
            ]}
            wrapper="h1"
            speed={10}
            className="text-5xl md:text-7xl font-extrabold mb-4 text-gray-400"
            repeat={Infinity}
          />
          
          <div className="flex justify-center gap-8 mt-8">
            <SocialLink
              href="mailto:avinashjha19@outlook.com"
              icon={<Mail />}
              label="Email"
              hoverColor="hover:text-red-400"
            />
            <SocialLink
              href="https://www.linkedin.com/in/avinash-jha-46b969167/"
              icon={<Linkedin />}
              label="LinkedIn"
              hoverColor="hover:text-blue-600"
            />
            <SocialLink
              href="https://github.com/Avinash2912"
              icon={<Github />}
              label="GitHub"
              hoverColor="hover:text-yellow-400"
            />
            <SocialLink
              href="https://drive.google.com/file/d/1_qsw_23XvFkOfUeEprRY3UcFfpKnzDuH/view?usp=sharing"
              icon={<FileText />}
              label="Resume"
              hoverColor="hover:text-green-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactElement;
  label: string;
  hoverColor?: string;
}

function SocialLink({ href, icon, label, hoverColor }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-all transform hover:scale-110 ${hoverColor} text-gray-400`}
      aria-label={label}
    >
      {React.cloneElement(icon, { className: 'w-8 h-8' })}
    </a>
  );
}