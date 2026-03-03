"use client";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaAndroid } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const projects = [
  {
    title: "Aerovideo",
    stack:
      "Full-Stack Video Streaming Platform (Web + Mobile) | Next.js • React Native • Node.js • MongoDB • TypeScript • Redux Toolkit",
    image: "/aerovideo-preview.webp",
    description:
      "Full-stack video streaming platform built with Next.js (SSR), React Native, Node.js, and MongoDB in a unified TypeScript monorepo. Features include JWT authentication, subscriptions, watch history, creator dashboard, and optimized cloud video storage.",
    github: "https://github.com/sandipkumar681/Aerovideo",
    demo: "https://aerovideo.duckdns.org",
    apk: "/Aerovideo.apk",
  },
  {
    title: "Nimbus Notes",
    stack: "Full-Stack Web Application | MERN Stack",
    image: "/nimbus-preview.webp",
    description:
      "Secure, cloud-based note-taking app JWT authentication, and user-specific access.",
    github: "https://github.com/sandipkumar681/Nimbus-Notes",
    demo: "https://nimbus-notes.netlify.app",
  },
  {
    title: "Edutrack",
    stack: "Mobile App | React Native, Node.js, MongoDB",
    image: "/edutrack-preview.webp",
    description:
      "Exam prep tracker with offline data storage and Google-authenticated backup sync. Custom backend ensures secure, seamless data handling.",
    github: "https://github.com/sandipkumar681/Edu-Track",
    demo: "",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-4 py-24 max-w-7xl mx-auto relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-cyan-500 mb-16 text-center tracking-tight drop-shadow-sm">
          Featured Projects
        </h2>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
            key={index}
            className="group flex flex-col border border-gray-100/50 dark:border-zinc-800/80 rounded-2xl shadow-lg overflow-hidden bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:shadow-2xl transition-all duration-300 relative"
          >
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500/0 via-transparent to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-colors duration-500 -z-10" />
            <div className="relative h-60 w-full overflow-hidden shrink-0">
              <Image
                height={400}
                width={600}
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-4 tracking-wider uppercase leading-relaxed">
                {project.stack}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center flex-1 items-center px-4 py-2 border border-gray-200 dark:border-zinc-700 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all shadow-sm"
                  >
                    <FaGithub className="mr-2 text-lg" /> Source Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center flex-1 items-center px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm shadow-emerald-500/20"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                )}
                {project.apk && (
                  <a
                    href={project.apk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center flex-1 items-center px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm shadow-emerald-500/20"
                  >
                    <FaAndroid className="mr-2 text-lg" /> Get APK
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
