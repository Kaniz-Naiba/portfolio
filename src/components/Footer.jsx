import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f1629] text-white py-6 border-t border-pink-600">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center">
        <p className="text-sm mb-4 md:mb-0 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400">
          &copy; {new Date().getFullYear()} Kaniz Naiba. All rights reserved.
        </p>

        <div className="flex space-x-8 text-2xl">
          {[{
            href: "https://github.com/Kaniz-Naiba",
            label: "GitHub",
            icon: <FaGithub />,
          }, {
            href: "https://linkedin.com/in/Kaniz-Naiba",
            label: "LinkedIn",
            icon: <FaLinkedin />,
          }, {
            href: "mailto:kanizshuva7@gmail.com",
            label: "Email",
            icon: <FaEnvelope />,
          }].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : "_blank"}
              rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="p-3 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white hover:scale-110 hover:shadow-[0_0_10px_rgba(236,72,153,0.7),0_0_20px_rgba(139,92,246,0.7),0_0_30px_rgba(59,130,246,0.7)] transition transform duration-300 ease-in-out"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
