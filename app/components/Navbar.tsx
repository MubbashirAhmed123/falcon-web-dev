"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={`${poppins.className} fixed top-0 left-0 w-full bg-[#1F2937] border-b border-gray-600 z-50 shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-4 md:ml-8" onClick={closeMenu}>
          <Image
            src="/logo.jpeg"
            alt="Falcon Logo"
            width={60}
            height={30}
            priority
            className="w-9 h-9 md:w-12 md:h-12 lg:w-16 lg:h-16"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-8 text-white">
          <Link
            href="#home"
            className="relative px-3 py-2 text-white font-medium text-sm md:text-base tracking-wide
                       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white
                       hover:after:w-full after:transition-all after:duration-300 hover:text-gray-200"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="relative px-3 py-2 text-white font-medium text-sm md:text-base tracking-wide
                       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white
                       hover:after:w-full after:transition-all after:duration-300 hover:text-gray-200"
          >
            About
          </Link>
          <Link
            href="#services"
            className="relative px-3 py-2 text-white font-medium text-sm md:text-base tracking-wide
                       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white
                       hover:after:w-full after:transition-all after:duration-300 hover:text-gray-200"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="relative px-3 py-2 text-white font-medium text-sm md:text-base tracking-wide
                       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white
                       hover:after:w-full after:transition-all after:duration-300 hover:text-gray-200"
          >
            Contact
          </Link>
        </div>

        {/* Desktop right Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm md:text-base tracking-wide rounded-md transition-colors shadow-md">
            Sign In
          </button>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm md:text-base tracking-wide rounded-md transition-colors shadow-md">
            Sign Up
          </button>

          {/* Dark Mode toggle (functionality will be added in future) */}
          <button
            className="text-xl hover:scale-110 transition-transform p-1 rounded-full hover:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            🌙
          </button>
        </div>

        {/* Mobile Right Buttons */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Hamburger button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <motion.svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={open ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>

          {/* Dark mode Toggle  */}
          <button
            className="flex items-center justify-center w-10 h-10 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Toggle dark mode"
          >
            🌙
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-gradient-to-b from-[#1F2937] to-[#374151] border-t border-gray-600 rounded-b-lg shadow-xl overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="space-y-4">
                <Link
                  href="#home"
                  onClick={closeMenu}
                  className="block relative text-white font-medium text-lg tracking-wide py-3 px-4 rounded-lg
                             hover:text-white hover:scale-105 transition-all duration-200
                             after:absolute after:left-4 after:bottom-2 after:h-[2px] after:w-0 after:bg-purple-400
                             hover:after:w-3/4 after:transition-all after:duration-300"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  onClick={closeMenu}
                  className="block relative text-white font-medium text-lg tracking-wide py-3 px-4 rounded-lg
                             hover:text-white hover:scale-105 transition-all duration-200
                             after:absolute after:left-4 after:bottom-2 after:h-[2px] after:w-0 after:bg-purple-400
                             hover:after:w-3/4 after:transition-all after:duration-300"
                >
                  About
                </Link>
                <Link
                  href="#services"
                  onClick={closeMenu}
                  className="block relative text-white font-medium text-lg tracking-wide py-3 px-4 rounded-lg
                             hover:text-white hover:scale-105 transition-all duration-200
                             after:absolute after:left-4 after:bottom-2 after:h-[2px] after:w-0 after:bg-purple-400
                             hover:after:w-3/4 after:transition-all after:duration-300"
                >
                  Services
                </Link>
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="block relative text-white font-medium text-lg tracking-wide py-3 px-4 rounded-lg
                             hover:text-white hover:scale-105 transition-all duration-200
                             after:absolute after:left-4 after:bottom-2 after:h-[2px] after:w-0 after:bg-purple-400
                             hover:after:w-3/4 after:transition-all after:duration-300"
                >
                  Contact
                </Link>
              </div>

              <div className="pt-6 border-t border-gray-600 space-y-4">
                <button className="w-full px-6 py-3 bg-purple-600 text-white font-medium text-lg rounded-lg hover:bg-purple-700">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}