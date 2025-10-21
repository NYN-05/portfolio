"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-9xl font-bold text-gradient">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been
            moved or deleted.
          </p>
          <Link
            href="/"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <FiHome className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
