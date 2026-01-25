"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const contactLinks = [
  {
    name: "GitHub",
    description: "Open-source work and repositories",
    href: "https://github.com/NYN-05",
    icon: FiGithub,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    name: "LinkedIn",
    description: "Professional profile and updates",
    href: "https://www.linkedin.com/in/jhashanknayan/",
    icon: FiLinkedin,
    accent: "from-purple-500 to-pink-400",
  },
  {
    name: "Email",
    description: "Let’s discuss your next project",
    href: "mailto:jnyn2005@gmail.com",
    icon: FiMail,
    accent: "from-emerald-500 to-lime-400",
  },
];

export default function LinksAndContact() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="section-heading">Let&apos;s Connect</h2>
        <p className="section-subheading">
          Reach out through any platform that works best for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
          >
            <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r ${link.accent} blur-2xl`} />
            <div className="relative z-10 space-y-4">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${link.accent} text-white shadow-lg`}>
                <link.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {link.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{link.description}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        Crafted with <span className="text-red-400">♥</span> and curiosity.
      </div>
    </section>
  );
}
