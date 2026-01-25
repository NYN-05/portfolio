"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/NYN-05",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jhashanknayan/",
    icon: FiLinkedin,
  },
  {
    name: "Email",
    href: "mailto:jnyn2005@gmail.com",
    icon: FiMail,
  },
];

export default function HomeContent() {
  const { scrollY } = useScroll();
  const blobTopY = useTransform(scrollY, [0, 600], [0, 80]);
  const blobBottomY = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section className="relative pt-24 pb-20">
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y: blobTopY }}
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl"
        />
        <motion.div
          style={{ y: blobBottomY }}
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-r from-pink-500/30 to-emerald-500/30 blur-3xl"
        />
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Jhashank Nayan
              </span>
            </motion.h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              I build modern, scalable products with a strong focus on
              performance, delightful user experience, and clean architecture.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/20 transition-all hover:shadow-xl"
                >
                  View My Work
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    <FiArrowRight className="h-5 w-5" />
                  </span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 dark:border-white/20 dark:bg-white/5 dark:text-gray-100 dark:backdrop-blur dark:hover:bg-white/10"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-40 transition-opacity group-hover:opacity-70" />
              <motion.div
                className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Jhashank Nayan portrait"
                  fill
                  sizes="(min-width: 768px) 320px, 256px"
                  priority
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                {/* Overlay ring placed above the image so edges meet cleanly */}
                <div className="absolute inset-0 rounded-full pointer-events-none ring-2 ring-gray-200 dark:ring-white/10" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
