'use client';

import { motion } from 'framer-motion';

const tools = [
  {
    title: 'GitHub',
    description: 'I have worked extensively with GitHub and can properly add versions, commit changes, and push to GitHub.',
    icon: '🐙'
  },
  {
    title: 'Trello',
    description: 'I am proficient in using Trello with the SCRUM methodology, where I create user story cards, for example.',
    icon: '📋'
  },
  {
    title: 'Docker',
    description: 'I can start local servers in Docker, including WordPress and PHP servers.',
    icon: '🐳'
  },
  {
    title: 'Fontawesome',
    description: 'I can import, style, and use icons in my websites using Fontawesome.',
    icon: '🎨'
  },
  {
    title: 'Diagrams.net',
    description: 'I can create PHP database diagrams using Diagrams.net.',
    icon: '📊'
  },
  {
    title: 'WordPress',
    description: 'I can create and maintain websites using WordPress.',
    icon: '📝'
  }
];

const methods = [
  {
    title: 'SCRUM',
    description: 'I use SCRUM for projects, allowing me and my team to clearly see what still needs to be completed.',
    icon: '📊'
  },
  {
    title: 'OOP',
    description: 'In JavaScript, I employ Object-Oriented Programming (OOP) using classes to maintain organized code.',
    icon: '🔄'
  },
  {
    title: 'BEM',
    description: 'In my HTML code, I utilize BEM classes like \'skills\' and \'skills__title\' for easy and structured styling in SCSS.',
    icon: '🎯'
  }
];

export default function Tools() {
  return (
    <section id="tools" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools & Methods</h2>
          <p className="text-gray-600 dark:text-gray-400">Technologies and methodologies I use daily</p>
        </motion.div>

        {/* Tools Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{tool.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{tool.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Methods Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Methods</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{method.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{method.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{method.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 