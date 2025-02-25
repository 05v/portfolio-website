'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    title: 'HTML5',
    description: 'I can write semantic HTML code for websites, and I name class names using the Block Element Modifier method.',
    icon: '🌐'
  },
  {
    title: 'CSS3',
    description: 'I have a lot of knowledge about CSS and the ability to create responsive websites for desktop, iPads, mobile, etc.',
    icon: '🎨'
  },
  {
    title: 'SASS',
    description: 'My SCSS skills are excellent. I can work with variables, nesting, and organize styles into different folders, such as components.',
    icon: '💅'
  },
  {
    title: 'JavaScript',
    description: 'I also have a lot of knowledge about JavaScript and can build apps using Object-Oriented Programming.',
    icon: '⚡'
  },
  {
    title: 'JSON',
    description: 'I can easily read data from JSON using JavaScript. All these skills are also extracted from JSON :)',
    icon: '📦'
  },
  {
    title: 'Python',
    description: 'I have experience with Python. I worked extensively with Python in my first year and still have a good command of the language.',
    icon: '🐍'
  },
  {
    title: 'Node.js',
    description: 'I have minimal experience with Node.js but can however create environments in Node JS.',
    icon: '🟢'
  },
  {
    title: 'Git',
    description: 'I can create local backups with Git and also upload projects to GitHub.',
    icon: '📚'
  },
  {
    title: 'C++',
    description: 'Using C++, I created a weather dashboard that reads data from a temperature sensor and displays it on my website.',
    icon: '⚙️'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <motion.div 
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col relative overflow-hidden shine"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="text-4xl mb-4 animate-float"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {skill.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold mb-3"
                  whileHover={{ scale: 1.05, color: '#3B82F6' }}
                >
                  {skill.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 flex-grow"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {skill.description}
                </motion.p>
                
                {/* Progress indicator */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-blue-500 dark:bg-blue-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 