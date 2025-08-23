import Image from "next/image";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Edutrack",
    stack: "React Native + Node.js + MongoDB",
    image: "/edutrack-preview.webp",
    description:
      "Edutrack helps students track their exam preparation. Store data offline with MMKV or sync online by signing in with Google. There is a custom backend keep things simple and secure.",
    github: "https://github.com/sandipkumar681/Edu-Track",
    demo: "",
  },
  {
    title: "Streamio",
    stack: "MERN Stack",
    image: "/streamio-preview.webp",
    description:
      "A YouTube-like platform for uploading, streaming, liking, and commenting on videos. Includes playlists and dashboards.",
    github: "https://github.com/sandipkumar681/Streamio",
    demo: "https://streamioplayer.netlify.app/",
  },
  {
    title: "Nimbus Notes",
    stack: "MERN Stack",
    image: "/nimbus-preview.webp",
    description:
      "Secure, cloud-based note-taking app with full CRUD, JWT auth, and user-specific access.",
    github: "https://github.com/sandipkumar681/Nimbus-Notes",
    demo: "https://nimbus-notes.netlify.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-500 text-center mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden bg-white dark:bg-gray-900 hover:shadow-xl transition duration-300"
          >
            <Image
              height={200}
              width={200}
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-emerald-600 mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2 italic">
                {project.stack}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition"
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-emerald-500 transition"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
