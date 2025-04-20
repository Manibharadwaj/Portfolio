"use client";

import { useState } from "react";
import Image from "next/image";

const Box = ({ img, text, subtext, className, children }) => (
  <div
    className={`relative rounded-xl overflow-hidden ${className}`}
    style={{ height: "300px" }}
  >
    {img && (
      <Image
        src={img}
        alt="img"
        layout="fill"
        objectFit="cover"
        className="rounded-xl blur-sm" // 👈 Added blur here
      />
    )}

    {/* Overlay content */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black/40 text-white dark:text-white">
      {text && <h2 className="text-lg font-semibold mb-2">{text}</h2>}
      {subtext && <p className="text-sm text-gray-200">{subtext}</p>}
      {children}
    </div>
  </div>
);

export default function Skills() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("manibharadwajcr@.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Box
          img="/b1.svg"
          text="I prioritize client collaboration, fostering open communication"
          className="md:col-span-2"
        />

        <Box
          img="/glob.webp"
          text="I'm flexible with time zone communications"
        />
<Box
  img="/tech.webp"
  text="I constantly strive to improve"
>
  <div className="mt-4">
    <h3 className="text-sm mb-1">My tech stack</h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {[
        "ReactJS",
        "Express",
        "Typescript",
        "NextJS",
        "Native",
        "Mobile",
      ].map((tech, i) => (
        <span
          key={i}
          className="bg-purple-600/30 text-white dark:text-purple-300 text-xs px-2 py-1 rounded-md"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</Box>


        <Box
          img="/team.webp"
          text="Tech enthusiast with a passion for development."
        />

        <Box
          img="/dev.webp"
          text="The Inside Scoop"
          subtext="Currently building on JS Animation and Real Time Communication."
        />
      </div>

      {/* CTA section */}
      <div className="w-full mt-10 bg-gradient-to-r from-purple-600 to-indigo-600 flex justify-center items-center py-16 rounded-xl transition-all duration-500 ease-in-out">
        <div className="w-full max-w-3xl px-6 text-center text-white flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6">
            Do you want to start a project together?
          </h2>
          <button
            onClick={handleCopy}
            className={`relative bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-all duration-300 transform ${
              copied ? "scale-110 bg-green-400" : "hover:scale-105"
            }`}
          >
            {copied ? (
              <span className="text-green-800">Email Copied!</span>
            ) : (
              "Copy my email address"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
