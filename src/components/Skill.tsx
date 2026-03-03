"use client";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiGit,
  SiGithub,
  SiLinux,
  SiGooglechrome,
  SiReactrouter,
  SiAndroidstudio,
  SiHtml5,
  SiCss3,
  SiWebrtc,
  SiSocketdotio,
  SiStripe,
  SiStrapi,
} from "react-icons/si";
import {
  FaCookieBite,
  FaLock,
  FaSearch,
  FaServer,
  FaTerminal,
} from "react-icons/fa";
import { RiDatabase2Fill } from "react-icons/ri";
import { MdSpeed, MdOutlineApi, MdSmartphone } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import { motion, Variants } from "framer-motion";

export default function Skills() {
  const skillArray = [
    {
      title: "💻 Languages",
      skills: [
        {
          name: "JavaScript (ES6+)",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
      ],
    },
    {
      title: "🌐 Frontend",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
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
          name: "Responsive Design",
          icon: <SiReactrouter className="text-pink-400" />,
        },
        {
          name: "WebRTC",
          icon: <SiWebrtc className="text-cyan-400" />,
        },
        {
          name: "CMS (Sanity, Strapi)",
          icon: <SiStrapi className="text-indigo-500" />,
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
          name: "REST APIs",
          icon: <MdOutlineApi className="text-gray-500 dark:text-gray-300" />,
        },
        {
          name: "Authentication & Authorization",
          icon: <FaLock className="text-gray-400" />,
        },
        {
          name: "Cookie Handling",
          icon: <FaCookieBite className="text-yellow-600" />,
        },
        {
          name: "Server-Side Rendering",
          icon: <FaServer className="text-green-500" />,
        },
        {
          name: "WebSocket",
          icon: <SiSocketdotio className="text-black dark:text-white" />,
        },
        {
          name: "Payment Gateway (Stripe)",
          icon: <SiStripe className="text-indigo-400" />,
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
          icon: <FaSearch className="text-indigo-500" />,
        },
        {
          name: "Performance Optimization",
          icon: <MdSpeed className="text-yellow-500" />,
        },
        {
          name: "Aggregation Pipeline",
          icon: <RiDatabase2Fill className="text-red-500" />,
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
          name: "Cross-Platform Apps",
          icon: <MdSmartphone className="text-indigo-400" />,
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
        {
          name: "CLI Tools",
          icon: <FaTerminal className="text-gray-500 dark:text-gray-300" />,
        },
      ],
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

  return (
    <section
      id="skills"
      className="px-4 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen py-24 relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-cyan-500 mb-16 text-center tracking-tight drop-shadow-sm">
          Technical Arsenal
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        {skillArray.map(({ title, skills }, index) => (
          <SkillCard key={index} title={title} skills={skills} index={index} />
        ))}
      </motion.div>
    </section>
  );
}

const cardVariants: Variants = {
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

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: React.ReactNode }[];
  index: number;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
      className="group relative bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-2xl p-7 shadow-lg transition-all duration-300 border border-gray-100/50 dark:border-zinc-800/80 hover:border-emerald-500/40 hover:shadow-emerald-500/10 hover:shadow-2xl overflow-hidden"
    >
      {/* Subtle hover gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-500/0 via-transparent to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-colors duration-500 rounded-2xl -z-10" />

      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-gray-800 dark:text-gray-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300">
          {title}
        </span>
      </h3>

      <motion.ul
        className="grid grid-cols-2 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        {skills.map((skill, index) => (
          <motion.li
            variants={itemVariants}
            key={index}
            className="flex items-center gap-3 text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors group/item cursor-pointer"
          >
            <div className="p-2.5 bg-gray-50 dark:bg-zinc-800/80 rounded-xl group-hover/item:scale-110 group-hover/item:-rotate-3 transition-transform duration-300 shadow-sm border border-gray-100 dark:border-zinc-700/50">
              <span className="text-xl flex">{skill.icon}</span>
            </div>
            <span className="text-[15px] tracking-wide font-semibold">
              {skill.name}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
