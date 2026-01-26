'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, TrendingUp, Palette, Database, Rocket, Check, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      features: [
        "Responsive Design",
        "React & Next.js",
        "E-commerce Solutions",
        "Progressive Web Apps"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: Brain,
      title: "AI Projects",
      description: "Intelligent solutions powered by machine learning and artificial intelligence",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "AI Chatbots"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "SEO Services",
      description: "Boost your online visibility and drive organic traffic to your website",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Link Building",
        "Analytics & Reporting"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love to interact with",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions and database architecture",
      features: [
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Security Implementation"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      icon: Rocket,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation and growth strategies",
      features: [
        "Market Analysis",
        "Brand Development",
        "Content Strategy",
        "Performance Optimization"
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div id="services" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your digital presence with our comprehensive suite of technology solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="relative group"
              >
                <div className="h-full bg-white backdrop-blur-sm rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: hoveredService === service.id ? 1.1 : 1,
                      rotate: hoveredService === service.id ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-slate-700"
                      >
                        <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-blue-50 mb-8">
            Let's bring your vision to life with our expert team
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}