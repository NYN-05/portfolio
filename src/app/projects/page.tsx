"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getAllProjects, getCategories } from "@/lib/api";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const allProjects = getAllProjects();
  const categories = ["All", ...getCategories()];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const techCounts = allProjects.reduce<Record<string, number>>((acc, project) => {
    project.technologies.forEach((tech) => {
      acc[tech] = (acc[tech] || 0) + 1;
    });
    return acc;
  }, {});

  const totalTech = Object.values(techCounts).reduce((sum, count) => sum + count, 0);
  const topTech = Object.entries(techCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({
      name,
      count,
      percent: totalTech ? Math.round((count / totalTech) * 100) : 0,
    }));

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-heading">My Projects</h1>
          <p className="section-subheading">
            A showcase of my work and side projects
          </p>

          {/* Language Statistics */}
          <div className="mb-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technology Snapshot</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topTech.map((tech, index) => (
                <div key={tech.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                    <span>{tech.name}</span>
                    <span>{tech.percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        index % 3 === 0
                          ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                          : index % 3 === 1
                          ? "bg-gradient-to-r from-purple-500 to-pink-500"
                          : "bg-gradient-to-r from-emerald-500 to-lime-400"
                      }`}
                      style={{ width: `${tech.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 dark:border-white/10"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
