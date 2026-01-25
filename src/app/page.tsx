"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { getFeaturedProjects } from "@/lib/api";
import ProjectCard from "@/components/ProjectCard";
import IntroScreen from "@/components/IntroScreen";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="space-y-20 pb-20">
      <IntroScreen />
      <HomeContent />

      {/* Featured Projects Section */}
      <motion.section
        className="container-custom"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
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
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom py-20">
          <div className="text-center text-white">
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
          </div>
        </div>
      </motion.section>
    </div>
  );
}
