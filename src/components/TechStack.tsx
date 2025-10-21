"use client";

import { motion } from "framer-motion";
import { Skill } from "@/lib/types";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiDjango,
  SiGit,
  SiDocker,
  SiAmazon,
  SiMongodb,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  SiJavascript,
  SiTypescript,
  SiPython,
  FaJava,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiDjango,
  SiGit,
  SiDocker,
  SiAmazon,
  SiMongodb,
  SiPostgresql,
  SiVercel,
};

interface TechStackProps {
  skills: Skill[];
  category: string;
}

export default function TechStack({ skills, category }: TechStackProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
        {category}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon ? iconMap[skill.icon] : null;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {Icon && <Icon className="w-5 h-5 text-primary-600" />}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-700"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
