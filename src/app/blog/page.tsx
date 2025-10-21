"use client";

import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt:
      "Learn best practices for building large-scale React applications that are maintainable and performant.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Best Practices", "Architecture"],
  },
  {
    id: 2,
    title: "Next.js 14: What's New",
    excerpt:
      "Explore the latest features in Next.js 14 and how they can improve your web development workflow.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Next.js", "Web Development"],
  },
  {
    id: 3,
    title: "TypeScript Tips and Tricks",
    excerpt:
      "Discover advanced TypeScript techniques to write better, more type-safe code.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["TypeScript", "JavaScript"],
  },
];

export default function BlogPage() {
  return (
    <div className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-heading">Blog</h1>
          <p className="section-subheading">
            Thoughts on software development and technology
          </p>

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

                  <a
                    href="#"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-12 text-center p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              More blog posts coming soon! Stay tuned for articles on web
              development, best practices, and technology trends.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
