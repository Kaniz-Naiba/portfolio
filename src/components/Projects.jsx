import React, { useState } from "react";
import { FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
  title: "Pawfect Match",
  description: `A smart and secure pet adoption platform connecting adopters, shelters, and vets with AI-powered matching for responsible pet adoption.`,
  images: ["/projects/pawfect.jpg"],
  techStack: "Next.js 15, Node.js, Express.js, MongoDB Atlas, Stripe, DaisyUI, Tailwind CSS",
  liveLink: "https://pawfect-adoption.vercel.app/",
  githubclientLink: "https://github.com/ruhanaatiq/pawfect-match",
  githubserverLink: "",
  challenges: "Building AI-based pet matching, centralized adoption workflow, secure multi-provider authentication, and Stripe payments.",
  futurePlans: "Add real-time chat between adopters and shelters, health tracking for adopted pets, and enhanced analytics.",
},
  {
    title: "Mini Hive",
    description: `A micro-tasking platform with secure admin panel, worker and buyer management, and real-time coin-based transactions.`,
    images: ["/projects/minihive.png"],
    techStack: "React, Node.js, Express, MongoDB",
    liveLink: "https://mini-hive-client.web.app/",
    githubclientLink: "https://github.com/Kaniz-Naiba/mini-hive-client.git",
    githubserverLink: "https://github.com/Kaniz-Naiba/mini-hive-server.git",
    challenges: "Implementing user authentication, secure admin panel, and efficient data management.",
    futurePlans: "Add payment integration, better UI, and advanced analytics.",
  },
 
  {
    title: "ArtiTracker",
    description:
      "A MERN-based artifact tracking system for managing, updating, and viewing historical artifacts in museums or private collections.",
    images: ["/projects/artitracker.png"],
    techStack: "MongoDB, Express, React, Node.js, Tailwind CSS",
    liveLink: "https://lucky-florentine-ddaf3a.netlify.app/",
    githubclientLink: "https://github.com/Kaniz-Naiba/ArtiTracker.git",
    githubserverLink: "https://github.com/Kaniz-Naiba/ArtiTracker-server.git",
    challenges:
      "Implementing secure artifact updates, user authentication, and clean filtering of items by category or age.",
    futurePlans:
      "Add image upload functionality, QR code-based search, and role-based admin panel.",
  },
   {
    title: "Freelancia",
    description:
      "A freelance service marketplace allowing clients to post tasks and developers to bid and work collaboratively.",
    images: ["/projects/freelancia.png"],
    techStack: "React, Node.js, Express, MongoDB, Firebase",
    liveLink: "https://startling-treacle-331744.netlify.app/",
    githubclientLink: "https://github.com/Kaniz-Naiba/Freelancia.git",
    githubserverLink: "https://github.com/Kaniz-Naiba/freelancia-server-side.git",
    challenges:
      "Booking logic, user authentication, role-based dashboard, and secure form validation.",
    futurePlans: "Integrate Stripe payment and notifications for task updates.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="px-4 sm:px-6 py-12 bg-[#0f1629] text-white"
      
    >
      <h2
        className="text-3xl sm:text-4xl py-3 font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400"
        data-aos="fade"
        data-aos-delay={10}
      >
        Projects
      </h2>

      {/* Mobile Layout (kept as it was) */}
<div className="flex flex-col gap-10 max-w-6xl mx-auto md:hidden">
  {projectsData.map((project, idx) => (
    <div
      key={idx}
      className="bg-white/20 backdrop-blur-md border-2 sm:border-4 border-pink-300 rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition flex flex-col sm:flex-row gap-4 sm:gap-6 items-center"
      data-aos="fade-in"
      data-aos-delay={idx * 150}
    >
      {/* Image */}
      <div className="w-full sm:w-64 h-48 sm:h-40 flex-shrink-0 rounded overflow-hidden">
        <img
          src={project.images[0]}
          alt={`${project.title} image`}
          className="w-full h-full object-cover rounded"
          loading="lazy"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col flex-grow min-w-0 text-white text-center sm:text-left">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          {project.title}
        </h3>
        <p className="text-white/90 mb-4">{project.description}</p>
        <button
          onClick={() => setSelectedProject(project)}
          className="mx-auto sm:mx-0 bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500 text-white py-2 px-5 rounded shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 text-sm sm:text-base"
        >
          View Details
        </button>
      </div>
    </div>
  ))}
</div>

{/* Desktop Layout (side-by-side square cards) */}
<div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
  {projectsData.map((project, idx) => (
    <div
      key={idx}
      className="bg-white/20 backdrop-blur-md border-2 border-pink-300 rounded-2xl shadow-lg overflow-hidden
                 hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col max-h-[400px]"
      data-aos="fade-in"
      data-aos-delay={idx * 100}
    >
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={project.images[0]}
          alt={`${project.title} image`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Project Info */}
      <div className="p-4 flex flex-col flex-grow text-center text-white">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          {project.title}
        </h3>
        <p className="text-white/90 text-sm mb-4 line-clamp-3">{project.description}</p>
        <button
          onClick={() => setSelectedProject(project)}
          className="mx-auto bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500 text-white py-2 px-5 rounded shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 text-sm sm:text-base"
        >
          View Details
        </button>
      </div>
    </div>
  ))}
</div>


      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-3 z-50">
          <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl sm:rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl overflow-auto max-h-[90vh] border border-pink-300 text-black">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 sm:top-5 sm:right-5 text-pink-700 hover:text-pink-900 text-3xl sm:text-4xl font-extrabold cursor-pointer transition-colors"
              aria-label="Close"
            >
              &times;
            </button>

            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-700 to-blue-700 text-center sm:text-left">
              {selectedProject.title}
            </h2>

            <img
              src={selectedProject.images[0]}
              alt={selectedProject.title}
              className="w-full rounded-xl shadow-lg object-cover max-h-48 sm:max-h-64 mb-4 sm:mb-6"
              loading="lazy"
            />

            <p className="mb-4 sm:mb-6 text-gray-800 leading-relaxed font-medium text-sm sm:text-base">
              {selectedProject.description}
            </p>

            <div className="mb-4 sm:mb-6">
              <strong className="block mb-2 text-lg text-gray-900">Technology Stack:</strong>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {selectedProject.techStack.split(",").map((tech, index) => (
                  <span
                    key={index}
                    className="bg-pink-200 text-pink-900 font-semibold px-3 sm:px-4 py-1 rounded-full shadow-sm text-sm"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-gray-800 mb-2 text-sm sm:text-base">
              <strong>Challenges:</strong> {selectedProject.challenges}
            </p>
            <p className="text-gray-800 mb-4 sm:mb-6 text-sm sm:text-base">
              <strong>Future Plans:</strong> {selectedProject.futurePlans}
            </p>

            <div className="mt-4 sm:mt-6 flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-pink-400 hover:bg-pink-500 text-white px-4 sm:px-5 py-2 rounded shadow-md transition text-sm sm:text-base"
              >
                <FiGlobe size={18} />
                Live Project
              </a>
              <a
                href={selectedProject.githubclientLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 sm:px-5 py-2 rounded shadow-md transition text-sm sm:text-base"
              >
                <FaGithub size={18} />
                GitHub Client
              </a>
              {selectedProject.githubserverLink && (
                <a
                  href={selectedProject.githubserverLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 sm:px-5 py-2 rounded shadow-md transition text-sm sm:text-base"
                >
                  <FaGithub size={18} />
                  GitHub Server
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
