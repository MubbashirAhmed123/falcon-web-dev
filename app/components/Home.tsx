"use client";
import { motion } from "framer-motion";
import {
  Code,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Rocket,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  
   return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-900 overflow-x-hidden">
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] bg-blue-300/40 rounded-full blur-3xl top-20 -left-40"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] bg-indigo-300/40 rounded-full blur-3xl bottom-20 -right-40"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] h-[400px] bg-purple-300/40 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              {[Sparkles, Rocket, Zap].map((Icon, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-xl"
                >
                  <Icon size={32} />
                </motion.div>
              ))}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              We Build{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Web & AI
              </span>
              <br />
              Solutions That Scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              Custom websites, AI-powered applications & enterprise-grade
              solutions to grow your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition">
                Get Free Consultation <ArrowRight size={20} />
              </button>

              <button className="border-2 border-indigo-500 text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 transition">
                View Our Work
              </button>
            </motion.div>


            <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto lg:mx-0">
              {[
                ["200+", "Projects"],
                ["150+", "Clients"],
                ["98%", "Satisfaction"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {num}
                  </div>
                  <div className="text-slate-500 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <Image src="/home.png" alt="home" width={700} height={700} className="rounded-md" />

            <div className="absolute -top-8 -left-8 bg-white text-slate-800 p-6 rounded-2xl shadow-2xl border">
              <div className="flex items-center gap-3">
                <Code />
                <div>
                  <div className="font-bold">Web Development</div>
                  <div className="text-sm text-slate-500">
                    Frontend and Backedn Design
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white text-slate-800 p-6 rounded-2xl shadow-2xl border">
              <div className="flex items-center gap-3">
                <Sparkles />
                <div>
                  <div className="font-bold">AI Solutions</div>
                  <div className="text-sm text-slate-500">
                    Chatbots • ML • NLP
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  </div>
);

  
}
