import Head from "next/head";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import myImage from "../public/myImage.png";
import Image from "next/image";
import Skills from "./components/skills";
import TestimonialScroller from "./components/TestimonialScroller";
import SkillsPhases from "./components/SkillsPhases";
import ProjectsSection from "./components/ProjectsSection";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mani Bharadwaj — Full Stack Developer | React, Next.js, Node.js</title>
        <meta name="description" content="Mani Bharadwaj is a full-stack developer and designer specializing in React, Next.js, Node.js, and AI-driven solutions. Based in India. View portfolio and projects." />
        <meta name="keywords" content="Mani Bharadwaj, full stack developer, React developer, Next.js, Node.js, web developer India, portfolio" />
        <meta property="og:title" content="Mani Bharadwaj — Full Stack Developer" />
        <meta property="og:description" content="Full-stack developer and designer passionate about React, Next.js, Node.js, and AI-driven solutions." />
        <meta property="og:image" content="https://manibharadwaj.netlify.app/myImage.png" />
        <meta property="og:url" content="https://manibharadwaj.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mani Bharadwaj — Full Stack Developer" />
        <meta name="twitter:description" content="Full-stack developer and designer passionate about React, Next.js, Node.js, and AI-driven solutions." />
        <link rel="canonical" href="https://manibharadwaj.netlify.app/" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mani Bharadwaj",
            "url": "https://manibharadwaj.netlify.app",
            "jobTitle": "Full Stack Developer",
            "knowsAbout": ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
            "sameAs": [
              "https://github.com/Manibharadwaj",
              "https://www.linkedin.com/in/mani-bharadwaj"
            ]
          })}
        </script>
      </Head>
      <main className=" bg-wheat px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between items-center dark:text-white">
            <Link href="/" className="font-burtons text-xl hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              developedby
            </Link>
            <ul className="flex items-center gap-6">
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
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md"
                  target="_blank" href="/Resume.pdf"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:mt-0 md:h-96 md:w-96">
          <Image src={myImage} fill={true} style={{ objectFit: 'cover' }} alt="Mani Bharadwaj profile photo" />

          </div>

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Mani Bharadwaj
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Full-stack developer and designer based in India, passionate about creating innovative solutions with React, Next.js, Node.js, and AI-driven technologies. I build responsive web applications focused on performance, accessibility, and user experience. Let&apos;s connect and explore opportunities!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a target="_blank" href="https://github.com/Manibharadwaj" rel="noreferrer" className="hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer hover:text-black dark:hover:text-white hover:shadow-lg hover:shadow-gray-500/50">
                <AiFillGithub />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/mani-bharadwaj" rel="noreferrer" className="hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/50">
                <AiFillLinkedin />
              </a>
              <a target="_blank" href="mailto:manibharadwajcr@gmail.com" rel="noreferrer" className="hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer hover:text-red-500 dark:hover:text-red-400 hover:shadow-lg hover:shadow-red-500/50">
                <AiFillMail />
              </a>
            </div>


          </div>
        </section>

        <Skills />

        <ProjectsSection />
        <TestimonialScroller />

        <SkillsPhases />
      </main>

      <footer className="text-center">
        <div className="border-t border-gray-300 py-2">
          <p className="text-gray-600">
            Phone: <a href="tel:+919632453556">+91 9632453556</a>
          </p>
          <p className="text-gray-600">
            Email: <a href="mailto:manibharadwajcr@gmail.com">manibharadwajcr@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
