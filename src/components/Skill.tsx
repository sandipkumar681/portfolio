"use client";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiGit,
  SiGithub,
  SiLinux,
  SiGooglechrome,
  SiReactrouter,
  SiC,
  SiAndroidstudio,
} from "react-icons/si";
import {
  FaCookieBite,
  FaLock,
  FaSearch,
  FaServer,
  FaTerminal,
} from "react-icons/fa";
import { RiDatabase2Fill } from "react-icons/ri";
import { MdSpeed } from "react-icons/md";
import { DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skillArray = [
    {
      title: "💻 Languages",
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
        {
          name: "Java",
          icon: <DiJava className="text-orange-600" />,
        },
        {
          name: "C",
          icon: <SiC className="text-blue-700" />,
        },
      ],
    },
    {
      title: "🌐 Frontend",
      skills: [
        { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-teal-400" />,
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-indigo-600" />,
        },
        {
          name: "Responsive Design",
          icon: <SiReactrouter className="text-pink-400" />,
        },
      ],
    },
    {
      title: "🛠 Backend",
      skills: [
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-green-500" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-700 dark:text-gray-200" />,
        },
        {
          name: "REST API & Auth",
          icon: <FaLock className="text-gray-400" />,
        },
        {
          name: "Cookie Handling",
          icon: <FaCookieBite className="text-yellow-600" />, // 🍪
        },
        {
          name: "Server-Side Rendering",
          icon: <FaServer className="text-purple-500" />, // 🖥️
        },
      ],
    },
    {
      title: "🗄 Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        {
          name: "Mongoose",
          icon: <RiDatabase2Fill className="text-red-500" />,
        },
        {
          name: "Query Optimization",
          icon: <FaSearch className="text-indigo-500" />, // Represents efficient querying
        },
        {
          name: "Performance Optimization",
          icon: <MdSpeed className="text-yellow-500" />, // Represents speed/performance
        },
      ],
    },
    {
      title: "📱 Mobile & Tools",
      skills: [
        {
          name: "React Native",
          icon: <SiReact className="text-blue-400" />,
        },
        {
          name: "Android Studio",
          icon: <SiAndroidstudio className="text-green-500" />,
        },
        {
          name: "VS Code",
          icon: <VscVscode className="text-blue-600" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-orange-500" />,
        },
        {
          name: "Chrome DevTools",
          icon: <SiGooglechrome className="text-yellow-500" />,
        },
      ],
    },

    {
      title: "🔧 Git & CLI",
      skills: [
        {
          name: "Git & GitHub",
          icon: <SiGithub className="text-gray-800 dark:text-gray-100" />,
        },
        {
          name: "Git Workflows",
          icon: <SiGit className="text-orange-500" />,
        },
        { name: "Linux/Unix", icon: <SiLinux className="text-gray-600" /> },
        { name: "CLI Tools", icon: <FaTerminal className="text-white" /> },
      ],
    },
  ];
  return (
    <section
      id="skill"
      className="px-4 max-w-6xl mx-auto flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl mt-22 font-bold text-emerald-500 mb-6 text-center">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 dark:text-gray-200 w-full">
        {/* Card Component */}

        {skillArray.map(({ title, skills }, index) => (
          <SkillCard key={index} title={title} skills={skills} />
        ))}
      </div>
    </section>
  );
}

// 🧩 Reusable SkillCard Component
function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: React.ReactNode }[];
}) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-100 dark:border-zinc-700">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-md hover:text-emerald-500 transition"
          >
            <span className="text-xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

{
  /* <section className="mt-20 px-4 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold text-emerald-500 mb-6 text-center">Skills</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-800 dark:text-gray-300">
    <div>
      <h3 className="font-semibold text-xl mb-2">💻 Languages</h3>
      <ul className="list-disc ml-6">
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold text-xl mb-2">🌐 Frontend</h3>
      <ul className="list-disc ml-6">
        <li>HTML5, CSS3, Responsive Design</li>
        <li>React.js, Redux</li>
        <li>Next.js (SSR, API Routes, Routing)</li>
        <li>Tailwind CSS, Bootstrap</li>
        <li>React Native (Mobile Development)</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold text-xl mb-2">🛠 Backend</h3>
      <ul className="list-disc ml-6">
        <li>Node.js, Express.js</li>
        <li>REST APIs, Cookie Handling, Authentication</li>
        <li>Server-Side Rendering (Next.js)</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold text-xl mb-2">🗄 Database</h3>
      <ul className="list-disc ml-6">
        <li>MongoDB, Mongoose</li>
        <li>NoSQL Data Modeling, CRUD Operations</li>
        <li>Query Optimization</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold text-xl mb-2">🧪 Tools & Debugging</h3>
      <ul className="list-disc ml-6">
        <li>VS Code, Postman, Chrome DevTools</li>
        <li>Performance Optimization & Debugging</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold text-xl mb-2">🔧 Version Control</h3>
      <ul className="list-disc ml-6">
        <li>Git, GitHub, Git Workflows</li>
        <li>Team Collaboration</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold text-xl mb-2">🖥 OS & CLI</h3>
      <ul className="list-disc ml-6">
        <li>Linux, UNIX-based systems</li>
        <li>Command Line Tools & Scripting</li>
      </ul>
    </div>
  </div>
</section> */
}
