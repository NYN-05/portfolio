"use client";

import { motion } from "framer-motion";
import { getAllSkills } from "@/lib/api";
import TechStack from "@/components/TechStack";
import BackgroundLinesDemo from "@/components/background-lines-demo";
import HowIThink from "@/components/HowIThink";
import ExperienceAndValidation from "@/components/ExperienceAndValidation";

export default function AboutPage() {
  const skills = getAllSkills();

  return (
    <div className="py-20">
      <div className="container-custom space-y-20">
        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-heading">About Me</h1>
          <p className="section-subheading">
            Learn more about my background and expertise
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div whileHover={{ y: -6 }} className="relative group">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/40 to-cyan-500/40 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
              <div className="card relative rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Who I Am</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I&apos;m a passionate Software Developer focused on building products that blend design and engineering. I specialize in creating scalable, maintainable, and performant solutions using modern technologies.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div whileHover={{ y: -6 }} className="relative group">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/40 to-pink-500/40 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
              <div className="card relative rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-400" />
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">What I Do</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I focus on <span className="text-gray-900 dark:text-white font-semibold">full-stack development</span> with a love for React, Next.js, and TypeScript. I enjoy shaping clear product experiences, building APIs, and refining performance across the stack.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div whileHover={{ y: -6 }} className="relative group">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-emerald-500/40 to-lime-500/40 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
              <div className="card relative rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400" />
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Quick Facts</h2>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center justify-between">
                    <span>Education</span>
                    <span className="text-gray-900 dark:text-white">Computer Science</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Focus</span>
                    <span className="text-gray-900 dark:text-white">Full-stack Web</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Location</span>
                    <span className="text-gray-900 dark:text-white">Bengaluru, India</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Email</span>
                    <span className="text-gray-900 dark:text-white">jnyn2005@gmail.com</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <p className="mt-10 text-center text-gray-600 dark:text-gray-300 italic">
            “I believe thoughtful engineering and delightful design together create experiences people love.”
          </p>
        </motion.section>

        {/* Background lines demo */}
        <div>
          <BackgroundLinesDemo />
        </div>

        {/* How I Think Section */}
        <HowIThink />

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">Technical Skills</h2>
          <p className="section-subheading">
            Technologies and tools I work with
          </p>

          <div className="space-y-12">
            <TechStack skills={skills.languages} category="Languages" />
            <TechStack skills={skills.frameworks} category="Frameworks & Libraries" />
            <TechStack skills={skills.tools} category="Tools & Technologies" />
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <ExperienceAndValidation />
      </div>
    </div>
  );
}
