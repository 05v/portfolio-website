'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'El Toro Restaurant',
    period: 'May 21, 2023 - May 25, 2023',
    description: 'I built a simple yet fully responsive website for El Toro Zaandam using basic web tools like HTML, SCSS, and JS. Customers can easily make reservations and contact the restaurant through forms that connect to an email API for quick replies.',
    tags: ['HTML', 'SCSS', 'JavaScript', 'Email API']
  },
  {
    title: 'Gym Toolz',
    period: 'May 14, 2023 - May 22, 2023',
    description: 'I created this project outside of school because I was looking for a calorie tracker that didn\'t display macros (carbs, etc.), but I couldn\'t find one, so I decided to create my own. I built this project with OOP JavaScript.',
    tags: ['JavaScript', 'OOP', 'HTML', 'CSS']
  },
  {
    title: 'React Pokedex',
    period: '2 Okt 2023 - 9 Okt 2023',
    description: 'I created a simple-to-use Pokédex using React and the Poké API, which allows fans to search and view information about their favorite Pokémon. The app is responsive, ensuring a great experience on both desktops and mobile devices.',
    tags: ['React', 'API', 'Responsive Design']
  },
  {
    title: 'YubTub',
    period: 'Jun 6, 2023 - Jun 7, 2023',
    description: 'For my end-of-year project in the second year, in the third module "Front-End," I had to create a clone of YouTube with the colors of Twitch. YubTub has a functional video switcher and a comment system.',
    tags: ['SCSS', 'JavaScript', 'OOP']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.period}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-block bg-gray-900 dark:bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
} 