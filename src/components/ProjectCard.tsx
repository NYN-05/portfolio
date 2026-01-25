"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasGithub = Boolean(project.githubUrl);
  const hasLive = Boolean(project.liveUrl);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
      <div className="card relative rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
      {/* Project Image */}
      <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-gray-100 dark:bg-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={tech}
              className={`px-3 py-1 text-xs font-medium rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10 ${
                techIndex % 3 === 0
                  ? "ring-1 ring-blue-400/30"
                  : techIndex % 3 === 1
                  ? "ring-1 ring-purple-400/30"
                  : "ring-1 ring-pink-400/30"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {(hasGithub || hasLive) && (
          <div className="flex space-x-4 pt-4">
            {hasGithub && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-200 dark:hover:text-white"
              >
                <FiGithub className="w-5 h-5" />
                <span>Code</span>
              </Link>
            )}

            {hasLive && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-200 dark:hover:text-white"
              >
                <FiExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </Link>
            )}
          </div>
        )}
      </div>
      </div>
    </motion.div>
  );
}
