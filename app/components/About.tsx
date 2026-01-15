"use client";

import Image from "next/image";
import { Target, Eye, Workflow } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="border-t border-gray-200 bg-gradient-to-br from-white to-gray-50 py-16 md:py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* content */}
          <motion.div
            className="space-y-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Who We Are
              </h2>
              <p className="text-purple-600 font-medium">
                Building modern digital experiences
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              We are a digital-first team focused on building modern, scalable,
              and user-friendly web solutions that deliver real business value.
            </p>

            <div className="space-y-6">
              {/* Mission */}
              <motion.div
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <Target
                  size={24}
                  aria-hidden
                  className="text-purple-600 mt-1 flex-shrink-0"
                />
               <p className="text-gray-700">
                  <strong className="text-gray-900">Our Mission:</strong>{" "}
                Deliver high-quality digital experiences with clean design and
                  strong performance.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <Eye
                  size={24}
                  aria-hidden
                  className="text-purple-600 mt-1 flex-shrink-0"
                />
                <p className="text-gray-700">
                  <strong className="text-gray-900">Our Vision:</strong>{" "}
                  To become a trusted partner for modern and future-ready web development.
                </p>
              </motion.div>

              {/* Process */}
              <motion.div
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <Workflow
                  size={24}
                  aria-hidden
                  className="text-purple-600 mt-1 flex-shrink-0"
                />
                <p className="text-gray-700">
                  <strong className="text-gray-900">Our Process:</strong>{" "}
                  Research → Design → Develop → Deliver.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/about.jpg"
              alt="Team collaboration illustration"
              width={500}
              height={400}
              className="rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              priority={false}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
