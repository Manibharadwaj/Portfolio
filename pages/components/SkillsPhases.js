import { useState } from "react";
import Image from "next/image";

const skillsData = [
  {
    phase: "Phase 1",
    title: "Design Implementation",
    image: "/design.png",
    description:
      "Crafting visually appealing solutions that adhere to fundamental design principles",
    tools: ["Figma", "React", "Tailwind CSS", "Chrome DevTools"],
  },
  {
    phase: "Phase 2",
    title: "Code your dream project",
    image: "/code.png",
    description:
      "Do you have an idea for your next great website? Let's make it a reality.",
    tools: ["Nextjs", "Visual Studio", "Git", "MERN"],
  },
  {
    phase: "Phase 3",
    title: "Live and running",
    image: "/consulting.png",
    description:
      "Need quick, actionable insights for your coding project? Let's enhance it together!",
    tools: ["Azure", "Thunder Client", "MongoDB", "Nodejs"],
  },
];

export default function SkillsPhases() {
  const [activePhase, setActivePhase] = useState(null);

  return (
    <section className="py-10">
      <div className="text-center">
        <h3 className="text-3xl py-1 dark:text-white">My Approach</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          In the digital realm, I am an aspiring professional with a focus on
          design and development. I have had the privilege of working with an
          organization and collaborating with talented individuals. Together, we
          have created digital products that cater to both businesses and
          consumers.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Hover over each card to explore what I offer.
        </p>
      </div>

      <div className="lg:flex gap-10">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="relative text-center shadow-lg p-10 rounded-xl my-10 transition duration-500 ease-in-out transform bg-gray-600 hover:bg-teal-600 hover:scale-105 flex-1"
            onMouseEnter={() => setActivePhase(index)}
            onMouseLeave={() => setActivePhase(null)}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div
                className={`text-xl font-semibold text-white transition-all duration-300 ${
                  activePhase === index ? "opacity-0" : "opacity-100"
                }`}
              >
                {skill.phase}
              </div>
            </div>

            <div
              className={`transition-all duration-500 opacity-0 transform ${
                activePhase === index ? "opacity-100 scale-100" : "opacity-0 scale-110"
              }`}
            >
              <Image
                src={skill.image}
                width={100}
                height={100}
                alt={skill.title}
                className="transition-all duration-500"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-white">
                {skill.title}
              </h3>
              <p className="py-2 text-white">{skill.description}</p>
              <h4 className="py-4 text-white font-semibold">Tech I Use</h4>
              <ul className="text-white">
                {skill.tools.map((tool, i) => (
                  <li key={i} className="py-1">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
