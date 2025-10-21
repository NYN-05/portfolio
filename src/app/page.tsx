"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { getFeaturedProjects } from "@/lib/api";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">Jhashank Nayan</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-8"
            >
              Software Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl"
            >
              I craft elegant, scalable solutions to complex problems using
              modern web technologies. Passionate about clean code, beautiful
              UIs, and creating exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/projects" className="btn-primary flex items-center space-x-2">
                <span>View My Work</span>
                <FiArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="/resume.pdf"
                download
                className="btn-outline flex items-center space-x-2"
              >
                <span>Download Resume</span>
                <FiDownload className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary-200 dark:bg-primary-900 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-20 right-40 w-48 h-48 bg-secondary-200 dark:bg-secondary-900 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
      </section>

      {/* Featured Projects Section */}
      <section className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            Check out some of my recent work
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/projects" className="btn-outline inline-flex items-center space-x-2">
              <span>View All Projects</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary">
        <div className="container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Have a project in mind? Let&apos;s create something amazing together.
            </p>
            <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
              <span>Get In Touch</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
