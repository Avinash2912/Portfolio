
interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const sections = ['projects', 'experience', 'achievements', 'skills', 'education', 'profiles'];
  
  return (
    <nav className="flex justify-center items-center gap-6 mb-12 border-b border-black-700/50 pb-4 bg-gray-900 py-4"> {/* Added vertical padding */}
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          className={`px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
            activeSection === section
              ? 'bg-blue-700 text-white shadow-lg shadow-blue-900/25' // Active button styles
              : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
          }`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </nav>
  );
}