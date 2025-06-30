import Image from "next/image";

// Sample project data
const projects = [
  {
    
    title: "SwiftRide - Uber",
    description: "A modern React-based ride-booking app inspired by Uber, built with real-time tracking, interactive panels, and socket integration.",
    image: "/web1.png",
    tech: ["Graphhopper API", "Gsap", "Socket.io"],
    live: "https://swiftride-web.onrender.com/",
    github: "https://github.com/Manibharadwaj/SwiftRide",
},
  {
    title: "SafeZone - Emergency Alert App",
    description: "SafeZone is a React Native emergency response app designed to detect distress and instantly trigger safety protocols.",
    image: "/web2.png",
    tech: ["React Native", "Tailwind", "Expo"],
    live: "https://expo.dev/accounts/mmtspteam/projects/SafeZoneApp/builds/37736c3a-1369-44d3-bbfc-800dd40057e7/",
    github: "https://github.com/Manibharadwaj/SafeZone",
  },
  {
    title: "HealthOne",
    description: "Healthcare platform where users with seamless access to medical consultations, service, and an AI-driven health assistant.",
    image: "/web3.png",
    tech: ["nextjs", "Auth", "Mongodb"],
    live: "https://healthone-xi.vercel.app/",
    github: "https://github.com/Manibharadwaj/healthone",
  },
  {
    title: "YouTube",
    description: "A minimal YouTube-like UI built with React, offering a clean video listing interface.",
    image: "/web4.png",
    tech: ["React", "CSS", "Netlify"],
    live: "https://myyoutubecom.netlify.app/",
    github: "https://github.com/Manibharadwaj",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 px-4 md:px-10 bg-white dark:bg-gray-900">
  <div className="max-w-screen-lg mx-auto text-center">
    <h3 className="text-4xl font-bold py-2 dark:text-white">Projects</h3>
    <p className="text-lg py-3 leading-8 text-gray-800 dark:text-gray-200">
      As a passionate developer with a focus on both Fullstack and AI-driven solutions, I&apos;ve worked on diverse projects that showcase my skills in building innovative web applications and intuitive user interfaces. From developing fraud detection systems to emergency response apps, each project reflects my dedication to delivering high-quality, functional, and user-centered digital solutions.
    </p>
    <p className="text-lg text-gray-700 dark:text-gray-300">Check them out below.</p>
  <br/>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h4>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center text-sm font-medium">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
