import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin,  FaFacebook } from "react-icons/fa";

// Dynamic Data
const heroData = {
  name: "Tanbina Kaniz Naiba",
  role: "Web Developer",
  intro: "Hi, I’m passionate about building clean and efficient web applications.",
  typewriterWords: ["MERN Stack Developer", "Frontend Enthusiast", "React Lover"],
  socialLinks: [
    { icon: <FaGithub />, url: "https://github.com/Kaniz-Naiba", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/Kaniz-Naiba", label: "LinkedIn" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/share/1CUgwXxfa7/", label: "Facebook" },
  ],
  resumeLink: "/Tanbina Kaniz Naiba -Web Developer.pdf",
  profileImage: "/projects/Tanbina Kaniz Naiba Profile.png",
};

// Particle component (floating small white dots)
const Particle = ({ style }) => (
  <div className="particle" style={style}></div>
);

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 15 }).map((_, i) => {
    const style = {
      top: `${Math.random() * 90 + 5}%`,
      left: `${Math.random() * 90 + 5}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${4 + Math.random() * 4}s`,
    };
    return <Particle key={i} style={style} />;
  });

  return (
    <>
      <style>{`
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          opacity: 0.8;
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.4;
          }
        }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-[#0f1629]"
      >
        {/* Hero Content Card */}
        <div
          className="relative z-10 max-w-6xl w-full bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col md:flex-row items-center gap-16 min-h-[600px]"
          data-aos="fade-up"
        >
          {/* Floating particles inside the hero card */}
          {particles}

          {/* Left Side */}
          <div className="flex flex-col items-start max-w-lg text-black" data-aos="fade-right">
            <h1 className="text-6xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400">
              {heroData.name}
            </h1>
            <p className="text-3xl font-semibold mb-4 text-pink-600">{heroData.role}</p>
            <p className="text-lg mb-6 max-w-md">{heroData.intro}</p>

            {/* Typewriter */}
            <p className="text-lg mb-8 font-mono text-white">
              <Typewriter
                words={heroData.typewriterWords}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>

            {/* Social Icons */}
            <div className="flex space-x-8 mb-8 text-black text-3xl">
              {heroData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="hover:text-pink-600 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Resume Download Button */}
           <a
  href={heroData.resumeLink}
  download="Tanbina Kaniz Naiba -Web Developer.pdf"
  className="px-8 py-3 rounded-full bg-pink-600 text-white 
             hover:bg-pink-700 
             transition transform duration-300 ease-in-out
             font-semibold shadow-lg
             hover:scale-110
             hover:shadow-[0_0_10px_rgba(236,72,153,0.7),0_0_20px_rgba(139,92,246,0.7),0_0_30px_rgba(59,130,246,0.7)]"
>
  Download Resume
</a>

          </div>

          {/* Right Side - Profile Picture */}
          <div
            className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-pink-300"
            data-aos="fade-left"
          >
            <img
              src={heroData.profileImage}
              alt={heroData.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
