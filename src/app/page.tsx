'use client';

import Navigation from '@/components/Navigation';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Develop from '@/components/Develop';
import Tools from '@/components/Tools';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute w-64 h-64 bg-blue-500/5 rounded-full -top-32 -left-32 dark:bg-blue-500/10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-orange-500/5 rounded-full -bottom-48 -right-48 dark:bg-orange-500/10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="container mx-auto px-6 py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Hello, my name is{' '}
              <motion.span 
                className="text-blue-600 inline-block"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                Vlad Verheij
              </motion.span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
              whileHover={{ scale: 1.02 }}
            >
              A Software Developer from Amsterdam
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12"
              whileHover={{ scale: 1.01 }}
            >
              Specialized in front-end development with a focus on JavaScript OOP, SCSS, and BEM.
              I work according to the SCRUM framework and am currently a third-year Software Developer
              at the Mediacollege Amsterdam.
            </motion.p>
            <div className="flex gap-4 justify-center">
              <motion.a
                href="https://vladverheij.com/assets/files/Vlad_Verheij_CV_English.pdf"
                download
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
              <motion.a
                href="https://github.com/05v"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Tools Section */}
      <Tools />

      {/* Projects Section */}
      <Projects />

      {/* Develop Section */}
      <Develop />

      {/* Contact Section */}
      <Contact />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} vladverheij.com | Vlad Verheij
          </p>
        </div>
      </footer>
    </main>
  );
}
