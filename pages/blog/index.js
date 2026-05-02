import Head from "next/head";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        frontmatter: data,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Blog | Mani Bharadwaj</title>
        <meta name="description" content="Thoughts on books, learning, and building things." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-wheat px-10 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen">
        <nav className="py-10 mb-8 flex justify-between dark:text-white">
          <Link href="/" className="font-burtons text-xl hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            developedby
          </Link>
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-teal-600 dark:text-teal-400 font-medium">
                Blog
              </Link>
            </li>
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"
              />
            </li>
          </ul>
        </nav>

        <section className="py-10">
          <h1 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl font-burtons">
            Blog
          </h1>
          <p className="text-md py-4 leading-8 text-gray-800 dark:text-gray-200 max-w-2xl md:text-lg">
            Thoughts on books I read, things I learn, and ideas worth sharing with the world.
          </p>
        </section>

        <section className="pb-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-4">
                  <img
                    src={post.frontmatter.cover}
                    alt={post.frontmatter.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {post.frontmatter.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg font-bold dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                    {post.frontmatter.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                    {post.frontmatter.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <time className="text-xs text-gray-500 dark:text-gray-500">
                      {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-teal-600 dark:text-teal-400 text-sm font-medium group-hover:underline">
                      Read more &rarr;
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </main>

      <footer className="text-center">
        <div className="border-t border-gray-300 dark:border-gray-700 py-2">
          <p className="text-gray-600 dark:text-gray-400">
            Phone: <a href="tel:+91 9632453556">+91 9632453556</a>
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Email: <a href="mailto:manibharadwajcr@gmail.com">manibharadwajcr@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}