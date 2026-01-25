"use client";

import { motion } from "framer-motion";

const blogPosts: Array<{
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}> = [];

const upcomingTopics = [
  "Building accessible, high-performance UIs",
  "Scaling Next.js apps with clean architecture",
  "TypeScript patterns for maintainable code",
  "Frontend performance & Core Web Vitals",
  "Design systems and component APIs",
  "API design and DX-focused tooling",
];

export default function BlogPage() {
  return (
    <div className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-heading">Blog</h1>
          <p className="section-subheading">
            Thoughts on software development and technology
          </p>

          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <time>{new Date(post.date).toLocaleDateString()}</time>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Articles are in progress. I&apos;m drafting posts on topics like:
              </p>
              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300">
                {upcomingTopics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/5"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
