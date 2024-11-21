
import { motion } from 'framer-motion';
import { Code2, Star, Trophy, GitBranch, ExternalLink } from 'lucide-react';

const profiles = [
  {
    platform: 'LeetCode',
    icon: <Code2 className="w-8 h-8 text-yellow-400" />,
    stats: ['350+ DSA Problems Solved', 'Active Problem Solver'],
    link: 'https://leetcode.com/u/Avinash_1912/',
    bgColor: 'from-yellow-500/10 to-orange-500/10',
    borderColor: 'hover:border-yellow-500/50',
    buttonColor: 'bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400',
    rating: '350+ Problems'
  },
  {
    platform: 'CodeForces',
    icon: <Trophy className="w-8 h-8 text-blue-400" />,
    stats: ['Competitive Programmer', 'Regular Participant'],
    link: 'https://codeforces.com/profile/Avinash19',
    bgColor: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'hover:border-blue-500/50',
    buttonColor: 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400',
    rating: 'Active Coder'
  },
  {
    platform: 'GeeksForGeeks',
    icon: <Star className="w-8 h-8 text-green-400" />,
    stats: ['DSA Practice', 'Problem Solving'],
    link: 'https://www.geeksforgeeks.org/user/avinashjha832/',
    bgColor: 'from-green-500/10 to-emerald-500/10',
    borderColor: 'hover:border-green-500/50',
    buttonColor: 'bg-green-500/20 hover:bg-green-500/30 text-green-400',
    rating: '120+ Problem'
  },
  {
    platform: 'GitHub',
    icon: <GitBranch className="w-8 h-8 text-purple-400" />,
    stats: ['Open Source Contributor', 'Project Portfolio'],
    link: 'https://github.com/Avinash2912',
    bgColor: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'hover:border-purple-500/50',
    buttonColor: 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-400',
    rating: 'Active Contributor'
  }
];

export default function CodingProfilesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.platform}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-br ${profile.bgColor} rounded-xl p-6 border border-gray-700/50 ${profile.borderColor} transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20 flex flex-col justify-between min-h-[280px]`}
          >
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  {profile.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{profile.platform}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${profile.buttonColor}`}>
                    {profile.rating}
                  </span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {profile.stats.map((stat, i) => (
                  <li key={i} className="text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                    {stat}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 py-2.5 rounded-lg ${profile.buttonColor} transition-all duration-300 hover:scale-105`}
            >
              View Profile <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}