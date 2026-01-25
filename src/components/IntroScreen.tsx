"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "你好",
  "مرحبا",
  "नमस्ते",
  "Olá",
];

let hasSeenIntro = false;

export default function IntroScreen() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(!hasSeenIntro);

  useEffect(() => {
    if (!show) {
      return;
    }
    let intervalId: NodeJS.Timeout | null = null;
    let hideTimeoutId: NodeJS.Timeout | null = null;

    intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 350);

    hideTimeoutId = setTimeout(() => {
      setShow(false);
      hasSeenIntro = true;
      if (intervalId) {
        clearInterval(intervalId);
      }
    }, 3500);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      if (hideTimeoutId) {
        clearTimeout(hideTimeoutId);
      }
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          aria-hidden="true"
        >
          {/* Glow Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-500/40 blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-r from-pink-500/40 to-emerald-500/40 blur-3xl animate-pulse" />
          </div>

          <motion.div
            key={greetings[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse"
          >
            {greetings[index]}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
