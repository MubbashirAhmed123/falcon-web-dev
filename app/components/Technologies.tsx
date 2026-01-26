
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TechnologiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React', logo: '⚛️', color: 'bg-blue-400' },
        { name: 'Next.js', logo: '▲', color: 'bg-black' },
        { name: 'Tailwind CSS', logo: '🎨', color: 'bg-cyan-400' },
        { name: 'TypeScript', logo: 'TS', color: 'bg-blue-600' },
        { name: 'Redux', logo: '⚡', color: 'bg-purple-500' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', logo: '📗', color: 'bg-green-600' },
        { name: 'Express', logo: 'E', color: 'bg-gray-700' },
        { name: 'Python', logo: '🐍', color: 'bg-blue-500' },
        { name: 'Django', logo: 'D', color: 'bg-green-700' },
        { name: 'FastAPI', logo: '⚡', color: 'bg-teal-500' },
      ]
    },
    {
      id: 'database',
      name: 'Database',
      icon: '💾',
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'MySQL', logo: '🐬', color: 'bg-blue-600' },
        { name: 'PostgreSQL', logo: '🐘', color: 'bg-blue-700' },
        { name: 'MongoDB', logo: '🍃', color: 'bg-green-600' },
        { name: 'Redis', logo: '📮', color: 'bg-red-500' },

      ]
    },
    {
      id: 'ai',
      name: 'AI & ML',
      icon: '🤖',
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'PyTorch', logo: '🔥', color: 'bg-red-600' },
        {name:'Agentic AI', logo: '🤖', color: 'bg-blue-500' },
        { name: 'OpenAI', logo: '🤖', color: 'bg-green-500' },
        { name: 'Hugging Face', logo: '🤗', color: 'bg-yellow-500' },
        { name: 'LangChain', logo: '🦜', color: 'bg-blue-500' },
        { name: 'Scikit-learn', logo: '📊', color: 'bg-orange-400' }
      ]
    },
    {
      id: 'devops',
      name: 'DevOps',
      icon: '🚀',
      color: 'from-indigo-500 to-blue-500',
      technologies: [
        { name: 'Docker', logo: '🐳', color: 'bg-blue-500' },
        { name: 'Kubernetes', logo: '☸️', color: 'bg-blue-600' },
        { name: 'AWS', logo: '☁️', color: 'bg-orange-500' },
        { name: 'GitHub Actions', logo: '⚡', color: 'bg-gray-800' },
        { name: 'Jenkins', logo: 'J', color: 'bg-red-600' },
        { name: 'Terraform', logo: '🔧', color: 'bg-purple-600' }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile',
      icon: '📱',
      color: 'from-pink-500 to-rose-500',
      technologies: [
        { name: 'React Native', logo: '⚛️', color: 'bg-blue-400' },
        { name: 'Flutter', logo: '🦋', color: 'bg-blue-500' },
        { name: 'Swift', logo: 'S', color: 'bg-orange-500' },
        { name: 'Kotlin', logo: 'K', color: 'bg-purple-600' },
        { name: 'Expo', logo: 'E', color: 'bg-indigo-600' },
        { name: 'Ionic', logo: 'I', color: 'bg-blue-600' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 md:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold  bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-">
          Our Technology Stack
        </h1>
        <p className="mt-7 text-gray-400 text-lg md:text-xl">
          Cutting-edge tools and frameworks we use to build amazing products
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer rounded-2xl bg-gradient-to-br ${category.color} p-8 shadow-2xl hover:shadow-3xl transition-all`}
                >
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{category.name}</h2>
                  <p className="text-white/80">Click to explore →</p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Back Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <span>←</span>
                <span>Back to Categories</span>
              </motion.button>

              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-2xl bg-gradient-to-br ${selectedCategory.color} p-8 shadow-2xl`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{selectedCategory.icon}</div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">{selectedCategory.name}</h2>
                    <p className="text-white/80">Technologies & Tools</p>
                  </div>
                </div>
              </motion.div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCategory.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:bg-white/10 transition-all border border-white/10"
                  >
                    <div className={`${tech.color} w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                      {tech.logo}
                    </div>
                    <h3 className="text-xl font-bold">{tech.name}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default TechnologiesPage;