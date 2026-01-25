"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full-stack Product Builder",
    company: "Independent Projects",
    period: "Ongoing",
    description:
      "Designing, building, and shipping end-to-end web experiences with React, Next.js, and Node.js while focusing on performance and usability.",
    badge: "Shipping",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    title: "Open-source Contributor",
    company: "Community-driven work",
    period: "Ongoing",
    description:
      "Contributing to open-source projects, improving developer tooling, and collaborating with maintainers on quality and documentation.",
    badge: "Impact",
    accent: "from-purple-500 to-pink-400",
  },
  {
    title: "Project Collaborator",
    company: "Hackathons & Team Projects",
    period: "Recent",
    description:
      "Partnering with teammates to prototype and deliver product ideas quickly, from UX to deployment.",
    badge: "Growth",
    accent: "from-emerald-500 to-lime-400",
  },
];

export default function ExperienceAndValidation() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="section-heading">Experience</h2>
        <p className="section-subheading">My professional journey</p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent dark:from-white/40 dark:via-white/10" />
        <div className="space-y-6">
          {experiences.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12"
            >
              <span
                className={`absolute left-0 top-4 h-4 w-4 rounded-full bg-gradient-to-r ${role.accent}`}
              />
              <div className="card rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{role.company}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center rounded-full bg-gradient-to-r ${role.accent} px-3 py-1 text-xs font-semibold text-white`}
                    >
                      {role.badge}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{role.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{role.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
