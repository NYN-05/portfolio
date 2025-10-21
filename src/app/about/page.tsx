"use client";

import { motion } from "framer-motion";
import { getAllSkills } from "@/lib/api";
import TechStack from "@/components/TechStack";

export default function AboutPage() {
  const skills = getAllSkills();

  return (
    <div className="py-20">
      <div className="container-custom space-y-20">
        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-heading">About Me</h1>
          <p className="section-subheading">
            Learn more about my background and expertise
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Hi, I&apos;m Jhashank Nayan
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;m a passionate Software Developer with over 5 years of
                experience in building web applications. I specialize in
                creating scalable, maintainable, and performant solutions using
                modern technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey in software development started with a curiosity
                about how things work. Today, I focus on full-stack development,
                with a particular interest in React, Next.js, and TypeScript.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I&apos;m not coding, you can find me contributing to open-source
                projects, writing technical blog posts, or exploring new
                technologies and frameworks.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <span className="text-3xl">🎓</span>
                  <div>
                    <p className="font-semibold">Education</p>
                    <p className="text-sm opacity-90">
                      B.S. Computer Science
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-3xl">💼</span>
                  <div>
                    <p className="font-semibold">Experience</p>
                    <p className="text-sm opacity-90">5+ Years</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-3xl">🌍</span>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm opacity-90">Your City, Country</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-3xl">📧</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm opacity-90">your.email@example.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">Technical Skills</h2>
          <p className="section-subheading">
            Technologies and tools I work with
          </p>

          <div className="space-y-12">
            <TechStack skills={skills.languages} category="Languages" />
            <TechStack skills={skills.frameworks} category="Frameworks & Libraries" />
            <TechStack skills={skills.tools} category="Tools & Technologies" />
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading">Experience</h2>
          <p className="section-subheading">My professional journey</p>

          <div className="space-y-8">
            {[
              {
                title: "Senior Software Developer",
                company: "Tech Company Inc.",
                period: "2021 - Present",
                description:
                  "Leading development of web applications using React, Next.js, and Node.js. Mentoring junior developers and implementing best practices.",
              },
              {
                title: "Software Developer",
                company: "Startup Co.",
                period: "2019 - 2021",
                description:
                  "Developed and maintained multiple client projects. Worked with diverse tech stacks and collaborated with cross-functional teams.",
              },
              {
                title: "Junior Developer",
                company: "Digital Agency",
                period: "2018 - 2019",
                description:
                  "Built responsive websites and web applications. Learned industry best practices and modern development workflows.",
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    {job.period}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
