
import { Trophy, Award, Star, Code, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    title: 'ZS Campus Beats Hackathon\'24',
    description: 'Achieved AIR 26 out of 950+ teams'
  },
  {
    icon: <Award className="w-8 h-8 text-purple-400" />,
    title: 'CodeChef Competition',
    description: 'Global rank 157 in Starters 131 Division 4'
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-400" />,
    title: 'CodeChef Rating',
    description: '2-star rating with max rating of 1577'
  },
  {
    icon: <Code className="w-8 h-8 text-blue-400" />,
    title: 'Problem Solving',
    description: '500+ DSA problems solved across platforms'
  },
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: 'Event Management',
    description: 'Led hackathon with 15,000+ registrations'
  }
];

export default function AchievementsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-gray-800/50 rounded-lg">
              {achievement.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}