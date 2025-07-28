"use client";

import Link from "next/link";
import { Dancing_Script, Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const DancingScriptFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { key: 1, link: "#about", name: "About" },
    { key: 2, link: "#skills", name: "Skills" },
    { key: 3, link: "#projects", name: "Projects" },
    { key: 4, link: "#contact", name: "Contact me" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow-md">
      <nav
        className="flex flex-row px-4 md:justify-around justify-between items-center py-4 bg-transparent"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex flex-row items-center">
          <div className="rounded-full w-10 h-10 overflow-hidden mr-4">
            <Image
              src="/logo.jpg"
              alt="My profile image"
              height={500}
              width={300}
              className="rounded-full object-cover"
            />
          </div>

          <h1
            className={`text-3xl font-dancing cursive ${DancingScriptFont.className}`}
          >
            &lt;Sandip /&gt;
          </h1>
        </Link>
        <ul className="hidden mx-3 md:flex flex-row list-none items-center">
          {navigationLinks.map(({ key, link, name }) => (
            <li
              className={`mx-4 text-xl hover:text-emerald-400 ${PoppinsFont.className}`}
              key={key}
            >
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Open Menu"
        >
          {!isOpen ? <Menu size={28} /> : <X size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div
          className="fixed top-18 right-5 w-[200px] z-50 
      bg-gradient-to-br from-white via-neutral-100 to-gray-300 
      dark:from-black dark:via-neutral-900 dark:to-zinc-800 
      p-6 shadow-xl rounded-xl"
        >
          <ul className="mt-2 flex flex-col space-y-6">
            {navigationLinks.map(({ key, link, name }) => (
              <li
                key={key}
                className={`text-black dark:text-white text-lg hover:text-emerald-400 transition-colors ${PoppinsFont.className}`}
              >
                <Link href={link} onClick={() => setIsOpen(false)}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
