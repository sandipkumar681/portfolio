import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section id="contact" className="px-4 py-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-emerald-500 mb-6">Contact Me</h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
        I'm always open to collaboration or opportunities. Reach out through any
        of the following:
      </p>

      <div className="flex flex-col gap-4 items-center">
        {/* Email */}
        <div className="inline-flex items-center gap-2 text-lg text-emerald-600 dark:text-emerald-400">
          <MdEmail className="text-2xl" />
          <a href="mailto:sandipbeher681@gmail.com" className="hover:underline">
            sandipbehera681@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="inline-flex items-center gap-2 text-lg text-emerald-600 dark:text-emerald-400">
          <MdPhone className="text-2xl" />
          <a href="tel:+917735939759" className="hover:underline">
            +91-7735939759
          </a>
        </div>

        {/* LinkedIn */}
        <div className="inline-flex items-center gap-2 text-lg text-emerald-600 dark:text-emerald-400">
          <FaLinkedin className="text-2xl" />
          <a
            href="https://in.linkedin.com/in/sandip-kumar-behera-209299256"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Message me on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
