"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import ContactForm from "@/components/ContactForm";

const socialLinks = [
  {
    name: "Email",
    icon: FiMail,
    url: "mailto:jnyn2005@gmail.com",
    color: "text-red-500",
  },
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/NYN-05",
    color: "text-gray-700 dark:text-gray-300",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/jhashanknayan/",
    color: "text-blue-600",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://x.com/Metalgear63097",
    color: "text-blue-400",
  },
];

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-heading">Get In Touch</h1>
          <p className="section-subheading">
            Let&apos;s discuss your project or just say hi!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Let&apos;s Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I&apos;m always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <FiMail className="w-6 h-6 text-primary-600" />
                  <span>jnyn2005@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Banglore, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors group"
                      aria-label={social.name}
                    >
                      <social.icon className={`w-6 h-6 ${social.color} group-hover:text-white`} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Available for Work
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  I&apos;m currently available for freelance projects and full-time
                  opportunities.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
