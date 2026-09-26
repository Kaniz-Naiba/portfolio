import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFirebase } from "react-icons/si";

const circleRadius = 40;
const circumference = 2 * Math.PI * circleRadius;

const SkillCircle = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center">
      <svg
        className="w-24 h-24"
        viewBox="0 0 100 100"
        role="img"
        aria-label={`${name} skill`}
      >
        <circle
          cx="50"
          cy="50"
          r={circleRadius}
          stroke="#ddd"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={circleRadius}
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={0} // full circle
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <foreignObject
          x="25"
          y="25"
          width="50"
          height="50"
          className="flex justify-center items-center"
        >
          <div className="text-4xl text-center text-gradient">{icon}</div>
        </foreignObject>
      </svg>
      <p className="mt-3 font-semibold text-lg text-center">{name}</p>
    </div>
  );
};

const Skills = () => {
  const frontend = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ];

  const tools = [{ name: "Git", icon: <FaGitAlt /> }];

  const renderSkills = (title, skillsArray, index) => (
    <div
      className="bg-white/20 backdrop-blur-md border-4 border-pink-300 rounded-3xl p-8 min-h-[320px] shadow-lg hover:shadow-xl transition w-full h-full"
      data-aos="fade-up"
      data-aos-delay={index * 200}
    >
      <h3 className="text-xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-10 justify-items-center">
        {skillsArray.map((skill, idx) => (
          <SkillCircle key={idx} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="px-6 py-16 bg-[#0f1629] text-white"
      
    >
      <h2
        className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Skills
      </h2>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
        {renderSkills("Frontend", frontend, 0)}
        {renderSkills("Backend", backend, 1)}
        {renderSkills("Tools", tools, 2)}
      </div>
    </section>
  );
};

export default Skills;
