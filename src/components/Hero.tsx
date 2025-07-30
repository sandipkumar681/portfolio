"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const roles = [
    "Software Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "Mobile App Developer",
    "Computer Enthusiast",
  ];

  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      // Once typing is complete
      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      }

      // Once deleting is complete
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="about"
      className="pt-20 md:pt-32 px-4 max-w-6xl mx-auto min-h-screen"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-center">
        Hi, I am <span className="text-emerald-500">Sandip</span>
        <span className="inline-block animate-waving-hand ml-2">👋</span>
      </h1>

      <h2 className="text-2xl font-semibold mt-2 mb-6 text-gray-800 dark:text-gray-200 text-center">
        I&apos;m a <span className="text-emerald-500">{displayText}</span>
        <span className="animate-pulse">|</span>
      </h2>

      <div className="flex flex-col md:flex-row items-start md:items-center mt-10 gap-10">
        {/* Profile Image & Socials */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-[0_0_25px_5px_rgba(16,185,129,0.5)]">
            <Image
              src="/profile-image.jpg"
              alt="Sandip's profile"
              width={240}
              height={240}
              className="rounded-full object-cover"
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 w-full max-w-xs">
            {/* Resume */}
            <a
              href="/sandip-resume.pdf"
              download
              className="bg-emerald-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-emerald-500 transition text-center md:text-xl"
            >
              Resume
            </a>

            {/* LinkedIn */}
            <a
              href="https://in.linkedin.com/in/sandip-kumar-behera-209299256"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-500 transition text-center md:text-xl"
            >
              LinkedIn
            </a>

            {/* GitHub centered below */}
            <a
              href="https://github.com/sandipkumar681"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 bg-gray-800 text-white px-5 py-3 rounded-lg shadow-md hover:bg-gray-700 transition text-center md:text-xl"
            >
              GitHub
            </a>
          </div>
        </div>
        {/* Overview Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-4xl font-bold text-emerald-500 text-center mb-4">
            Overview
          </h3>

          <ul className="text-gray-700 dark:text-gray-300 text-[17px] space-y-6 list-none">
            <li className="flex">
              <div className="mr-4 text-2xl">🎓</div>
              <span className="md:text-justify text-lg">
                Completed MCA with a strong academic foundation in software
                engineering, web technologies, and mobile application
                development.
              </span>
            </li>

            <li className="flex">
              <div className="mr-4 text-2xl">💻</div>
              <span className="md:text-justify text-lg">
                Proficient in the MERN stack (MongoDB, Express.js, React.js,
                Node.js) and experienced in building full-stack, scalable web
                applications using modern development practices.
              </span>
            </li>

            <li className="flex">
              <div className="mr-4 text-2xl">⚙️</div>
              <span className="md:text-justify text-lg">
                Specialized in Next.js for server-side rendering and
                performance-driven frontends. Familiar with authentication, API
                integration, and SEO optimization in real-world apps.
              </span>
            </li>

            <li className="flex">
              <div className="mr-4 text-2xl">📱</div>
              <span className="md:text-justify text-lg">
                Passionate about mobile development using React Native — capable
                of building cross-platform apps with clean UI, intuitive
                navigation, and native performance.
              </span>
            </li>

            <li className="flex">
              <div className="mr-4 text-2xl">🚀</div>
              <span className="md:text-justify text-lg">
                Committed to writing clean, maintainable code, solving complex
                problems, and continuously improving through real-world
                experience and curiosity-driven learning.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
