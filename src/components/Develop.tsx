'use client';

import { motion } from 'framer-motion';

const developmentGoals = [
  {
    title: 'React',
    description: 'My knowledge of React is quite limited. I understand the basics, but I would like to work with it more because this framework is widely used, and there is high demand for developers who master this language.',
    icon: '⚛️'
  },
  {
    title: 'Security',
    description: 'I would also like to learn how to secure websites and apps, how to prevent hackers from exploiting a payment system and draining the connected account. Additionally, I want to understand how apps like Steam ensure that people cannot add games to their account using exploits.',
    icon: '🔒'
  },
  {
    title: 'PHP',
    description: 'My knowledge of PHP is also quite limited. My goal is to become a Full-Stack developer, and the back-end is crucial for that. So, I would also like to improve my skills in this area.',
    icon: '🐘'
  },
  {
    title: 'Databases',
    description: 'So far, I\'ve worked extensively with JSON for storing and retrieving data in websites. However, I would also like to learn how to do this with databases, how to store and retrieve information at a large scale without the risk of data leakage to hackers.',
    icon: '🗄️'
  }
];

export default function Develop() {
  return (
    <section id="develop" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Development</h2>
          <p className="text-gray-600 dark:text-gray-400">Skills and technologies I want to master</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {developmentGoals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="text-4xl mr-4">{goal.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{goal.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{goal.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 