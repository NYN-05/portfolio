"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Start with clarity",
    description:
      "I align on goals, constraints, and success metrics before writing a single line of code.",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    title: "Design for change",
    description:
      "I favor modular, composable systems that stay flexible as requirements evolve.",
    accent: "from-purple-500 to-pink-400",
  },
  {
    title: "Ship with confidence",
    description:
      "I iterate fast with measurable outcomes, testing and validating every milestone.",
    accent: "from-emerald-500 to-lime-400",
  },
];

export default function HowIThink() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="section-heading">How I Think</h2>
        <p className="section-subheading">
          The principles that guide my approach to building products
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-3 top-3 bottom-3 w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent dark:from-white/40 dark:via-white/10" />
        <div className="space-y-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10"
            >
              <span
                className={`absolute left-0 top-2 h-3 w-3 rounded-full bg-gradient-to-r ${principle.accent}`}
              />
              <div className="card rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
                <div className={`h-1.5 w-14 rounded-full bg-gradient-to-r ${principle.accent} mb-4`} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{principle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
