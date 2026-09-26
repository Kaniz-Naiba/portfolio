import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaArrowRight, FaBars, FaCode, FaEnvelope, FaFacebook,
  FaGithub, FaGraduationCap, FaLinkedin, FaMapMarkerAlt, FaTimes
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import {
  SiCss3, SiExpress, SiFirebase, SiGit, SiHtml5, SiJavascript,
  SiMongodb, SiNodedotjs, SiReact, SiTailwindcss, SiNextdotjs
} from "react-icons/si";

const projects = [
  {
    title: "Pawfect Match",
    description: "A modern pet adoption platform connecting adopters, shelters and vets through a secure, user-friendly adoption workflow.",
    image: "/projects/pawfect.jpg",
    tags: ["Next.js", "MongoDB", "Express", "Stripe"],
    live: "https://pawfect-adoption.vercel.app/",
    github: "https://github.com/ruhanaatiq/pawfect-match",
  },
  {
    title: "Mini Hive",
    description: "A micro-tasking marketplace with authentication, worker and buyer dashboards, admin management and coin-based transactions.",
    image: "/projects/minihive.png",
    tags: ["React", "Node.js", "MongoDB", "Firebase"],
    live: "https://mini-hive-client.web.app/",
    github: "https://github.com/Kaniz-Naiba/mini-hive-client",
  },
  {
    title: "ArtiTracker",
    description: "A MERN application for discovering, managing and updating historical artifacts in museums and private collections.",
    image: "/projects/artitracker.png",
    tags: ["MERN", "JWT", "MongoDB", "Tailwind"],
    live: "https://lucky-florentine-ddaf3a.netlify.app/",
    github: "https://github.com/Kaniz-Naiba/ArtiTracker",
  },
  {
    title: "Freelancia",
    description: "A freelance marketplace where clients can post tasks and developers can bid, communicate and collaborate.",
    image: "/projects/freelancia.png",
    tags: ["React", "Node.js", "Express", "Firebase"],
    live: "https://startling-treacle-331744.netlify.app/",
    github: "https://github.com/Kaniz-Naiba/Freelancia",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: [
      ["HTML5", SiHtml5], ["CSS3", SiCss3], ["JavaScript", SiJavascript],
      ["React", SiReact], ["Next.js", SiNextdotjs], ["Tailwind", SiTailwindcss],
    ],
  },
  {
    title: "Backend & Database",
    items: [
      ["Node.js", SiNodedotjs], ["Express.js", SiExpress],
      ["MongoDB", SiMongodb], ["Firebase", SiFirebase],
    ],
  },
  {
    title: "Tools",
    items: [["Git & GitHub", SiGit], ["REST API", FaCode]],
  },
];

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 750, once: true, offset: 60 });
  }, []);

  const nav = ["About", "Skills", "Education", "Projects", "Contact"];

  return (
    <div className="portfolio">
      <header className="nav-wrap">
        <nav className="nav">
          <a className="logo" href="#home" onClick={() => setOpen(false)}>
            <span>KN</span>
            <strong>Kaniz Naiba</strong>
          </a>

          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`nav-menu ${open ? "show" : ""}`}>
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>
            ))}
            <a className="resume-link" href="/Tanbina Kaniz Naiba -Web Developer.pdf" download>Resume</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-inner">
            <div className="hero-copy" data-aos="fade-right">
              <div className="availability"><i /> Available for opportunities</div>
              <p className="kicker">HELLO, I'M</p>
              <h1>Tanbina Kaniz <em>Naiba</em></h1>
              <h2>
                <Typewriter
                  words={["MERN Stack Developer", "Web Developer", "Frontend Enthusiast"]}
                  loop cursor cursorStyle="|"
                  typeSpeed={70} deleteSpeed={40} delaySpeed={1300}
                />
              </h2>
              <p className="lead">
                I create clean, responsive and purposeful web experiences with modern
                JavaScript technologies. I enjoy turning ideas into products people can actually use.
              </p>
              <div className="hero-buttons">
                <a className="button dark" href="#projects">Explore my work <FaArrowRight /></a>
                <a className="button outline" href="/Tanbina Kaniz Naiba -Web Developer.pdf" download>Download CV</a>
              </div>
              <div className="social-row">
                <a href="https://github.com/Kaniz-Naiba" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/Kaniz-Naiba" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://www.facebook.com/share/1CUgwXxfa7/" target="_blank" rel="noreferrer"><FaFacebook /></a>
              </div>
            </div>

            <div className="hero-art" data-aos="fade-left">
              <div className="portrait-frame">
                <div className="portrait">
                  <img src="/projects/Tanbina Kaniz Naiba Profile.png" alt="Tanbina Kaniz Naiba" />
                </div>
              </div>
              <div className="code-chip"><FaCode /><span><b>&lt;code /&gt;</b><small>Build. Learn. Repeat.</small></span></div>
              <div className="year-chip"><b>01</b><span>Developer<br />Portfolio</span></div>
            </div>
          </div>
          <div className="hero-bottom"><span>Scroll to explore</span><i /></div>
        </section>

        <section id="about" className="about section">
          <div className="section-label" data-aos="fade-up">01 — ABOUT ME</div>
          <div className="about-grid">
            <div data-aos="fade-up">
              <h2>Building with curiosity,<br /><span>creating with purpose.</span></h2>
            </div>
            <div className="about-copy" data-aos="fade-up" data-aos-delay="100">
              <p>
                Hi, I'm <strong>Kaniz Naiba</strong>, an ICT student and full-stack web developer
                who loves building useful, thoughtful digital products.
              </p>
              <p>
                My core stack is React, Node.js, Express and MongoDB. I enjoy working across
                the frontend and backend, learning new technologies and solving real-world problems
                through code.
              </p>
              <a className="under-link" href="#contact">Let's connect <FaArrowRight /></a>
            </div>
          </div>
          <div className="numbers" data-aos="fade-up">
            <div><strong>04+</strong><span>Featured projects</span></div>
            <div><strong>MERN</strong><span>Primary stack</span></div>
            <div><strong>ICT</strong><span>Academic background</span></div>
            <div><strong>∞</strong><span>Things left to learn</span></div>
          </div>
        </section>

        <section id="skills" className="skills section dark">
          <div className="section-label">02 — SKILLS</div>
          <div className="section-title-row">
            <h2>My <span>toolkit.</span></h2>
            <p>Technologies and tools I use to turn ideas into reliable web applications.</p>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group, index) => (
              <div className="skill-group" key={group.title} data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="group-number">0{index + 1}</div>
                <h3>{group.title}</h3>
                <div className="skill-items">
                  {group.items.map(([name, Icon]) => (
                    <div className="skill-item" key={name}><Icon /><span>{name}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="education section">
          <div className="section-label">03 — EDUCATION</div>
          <div className="education-grid">
            <h2 data-aos="fade-up">The foundation<br /><span>behind the work.</span></h2>
            <div className="education-card" data-aos="fade-up" data-aos-delay="100">
              <div className="edu-icon"><FaGraduationCap /></div>
              <div>
                <span className="edu-date">2022 — PRESENT</span>
                <h3>B.Sc. in Information & Communication Technology</h3>
                <h4>Comilla University</h4>
                <p>Studying software development, database systems, networking, communication technologies and modern web development.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects section dark">
          <div className="section-label">04 — SELECTED WORK</div>
          <div className="section-title-row">
            <h2>Things I've <span>built.</span></h2>
            <p>A few projects that show how I approach design, development and problem solving.</p>
          </div>
          <div className="project-list">
            {projects.map((project, i) => (
              <article className="project" key={project.title} data-aos="fade-up">
                <div className="project-number">0{i + 1}</div>
                <div className="project-image"><img src={project.image} alt={project.title} loading="lazy" /></div>
                <div className="project-info">
                  <div className="project-top"><h3>{project.title}</h3><span>Web Application</span></div>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-actions">
                    <a href={project.live} target="_blank" rel="noreferrer">Live site <FiExternalLink /></a>
                    <a href={project.github} target="_blank" rel="noreferrer">GitHub <FaGithub /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-inner" data-aos="fade-up">
            <div className="section-label">05 — CONTACT</div>
            <h2>Let's make something<br /><span>meaningful together.</span></h2>
            <p>Have an opportunity, project idea, or just want to say hello? I'd love to hear from you.</p>
            <div className="contact-links">
              <a href="mailto:kanizshuva7@gmail.com"><FaEnvelope /><span>kanizshuva7@gmail.com</span></a>
              <a href="https://linkedin.com/in/Kaniz-Naiba" target="_blank" rel="noreferrer"><FaLinkedin /><span>LinkedIn</span></a>
              <span><FaMapMarkerAlt /><span>Bangladesh</span></span>
            </div>
            <a className="button dark contact-button" href="mailto:kanizshuva7@gmail.com">Say hello <FaArrowRight /></a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Tanbina Kaniz Naiba</span>
        <span>Designed & built with React</span>
        <div><a href="https://github.com/Kaniz-Naiba" target="_blank" rel="noreferrer"><FaGithub /></a><a href="mailto:kanizshuva7@gmail.com"><FaEnvelope /></a></div>
      </footer>
    </div>
  );
}

export default App;
