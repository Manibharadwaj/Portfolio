import Head from "next/head";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => ({
      params: { slug: fileName.replace(/\.md$/, "") },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fullPath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    props: {
      frontmatter: data,
      content,
    },
  };
}

export default function BlogPost({ frontmatter, content }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>{frontmatter.title} | Mani Bharadwaj</title>
        <meta name="description" content={frontmatter.excerpt} />
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
              <Link href="/blog" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
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

        <article className="max-w-3xl mx-auto pb-20">
          <header className="mb-10">
            <div className="flex gap-2 mb-4 flex-wrap">
              {frontmatter.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold dark:text-white leading-tight">
              {frontmatter.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{frontmatter.author}</span>
              <span>&middot;</span>
              <time>
                {new Date(frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </header>

          <div className="w-full rounded-2xl overflow-hidden mb-10 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-6">
            <img
              src={frontmatter.cover}
              alt={frontmatter.title}
              className="max-h-96 object-contain"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:dark:text-white prose-p:dark:text-gray-200 prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-strong:dark:text-white prose-blockquote:border-teal-500 prose-blockquote:dark:text-gray-300 prose-hr:dark:border-gray-700 prose-code:text-teal-600 dark:prose-code:text-teal-400 prose-li:dark:text-gray-200">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700">
            <Link
              href="/blog"
              className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
            >
              &larr; Back to all posts
            </Link>
          </div>
        </article>
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