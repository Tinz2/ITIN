import { useEffect, useRef } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import EducationSection from "./EducationSection";
import AboutSection from "./AboutSection";
import SkillsWorks from "./SkillsWorks";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ToolsSection from "./ToolsSection";
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { SiAngular, SiTailwindcss, SiNodedotjs, SiReact, SiFlutter, SiGithub } from "react-icons/si";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs for scroll
  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll to section
  const scrollToSection = (ref) => {
    setMenuOpen(false);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans">
      {/* Header - full width */}
      <header className="w-screen p-4 flex justify-between items-center bg-black sticky top-0 z-10 border-b border-gray-700 shadow-[0_12px_32px_0_rgba(0,0,0,0.7)]" data-aos="fade-down">
        <div className="w-full flex justify-between items-center px-4 xl:px-16">
          <h1 className="text-2xl font-extrabold text-white tracking-wider drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
            ITIN
          </h1>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4 md:space-x-6 text-white font-medium">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="!text-white hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection(aboutRef)} className="!text-white hover:text-blue-400 transition-colors">About me</button>
            <button onClick={() => scrollToSection(projectRef)} className="!text-white hover:text-blue-400 transition-colors">Project</button>
          </nav>
          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="!text-white text-2xl bg-transparent focus:outline-none shadow-none border-none p-0"
              style={{ background: "none" }} // เผื่อ Tailwind ไม่ override
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Side Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Close menu background"
        />
      )}
      <div className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-blue-900 via-black to-cyan-900 shadow-2xl z-50 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden`}>
        <div className="flex flex-col space-y-8 p-8 pt-16 h-full relative">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-3xl focus:outline-none hover:text-cyan-400 transition-colors"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <button
            onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}
            className="text-white text-xl font-bold text-right py-2 px-4 rounded-lg hover:bg-white/10 hover:backdrop-blur-md transition-all duration-200"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="text-white text-xl font-bold text-right py-2 px-4 rounded-lg hover:bg-white/10 hover:backdrop-blur-md transition-all duration-200"
          >
            About me
          </button>
          <button
            onClick={() => scrollToSection(projectRef)}
            className="text-white text-xl font-bold text-right py-2 px-4 rounded-lg hover:bg-white/10 hover:backdrop-blur-md transition-all duration-200"
          >
            Project
          </button>
        </div>
      </div>

      {/* Main content */}
      <main className="w-screen min-h-[calc(100vh-80px)] flex flex-col items-center px-4 py-10" data-aos="fade-up">
        <div className="w-full flex flex-col items-center px-4 xl:px-16">

          {/* Junior Developer heading with glow effect */}
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] mb-8 w-full" data-aos="zoom-in">
            Junior Developer
          </h2>

          {/* Skills and Profile section */}
          <div className="relative w-full flex flex-col items-center justify-center mb-12">
            {/* Skills on mobile - displayed in rows above profile */}
            <div className="flex flex-wrap justify-center gap-4 md:hidden w-full mb-8">
              <div className="text-pink-500 flex items-center space-x-2 drop-shadow-[0_0_8px_rgba(219,39,119,0.7)]" data-aos="fade-right" data-aos-delay="100">
                <SiAngular className="text-2xl" />
                <span>Angular</span>
              </div>
              <div className="text-cyan-400 flex items-center space-x-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" data-aos="fade-right" data-aos-delay="200">
                <SiTailwindcss className="text-2xl" />
                <span>Tailwind CSS</span>
              </div>
              <div className="text-green-400 flex items-center space-x-2 drop-shadow-[0_0_8px_rgba(74,222,128,0.7)]" data-aos="fade-right" data-aos-delay="300">
                <SiNodedotjs className="text-2xl" />
                <span>Node Js</span>
              </div>
              <div className="text-cyan-400 flex items-center space-x-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" data-aos="fade-left" data-aos-delay="100">
                <SiReact className="text-2xl" />
                <span>React</span>
              </div>
              <div className="text-blue-400 flex items-center space-x-2 drop-shadow-[0_0_8px_rgba(96,165,250,0.7)]" data-aos="fade-left" data-aos-delay="200">
                <SiFlutter className="text-2xl" />
                <span>Flutter</span>
              </div>
              <div className="text-blue-300 flex items-center space-x-2 drop-shadow-[0_0_8px_rgba(125,211,252,0.7)]" data-aos="fade-left" data-aos-delay="300">
                <SiGithub className="text-2xl" />
                <span>Fork Github</span>
              </div>
            </div>

            {/* Desktop layout with positioned skills */}
            <div className="hidden md:flex relative w-full min-h-[400px] items-center justify-center">
              {/* Left side skills */}
              <div className="absolute left-4 xl:left-0 top-1/4 text-pink-500 flex items-center space-x-2 drop-shadow-[0_0_8px_rgba(219,39,119,0.7)] font-bold" data-aos="fade-right" data-aos-delay="100">
                <SiAngular className="text-3xl" />
                <span className="text-xl">Angular</span>
              </div>
              <div className="absolute left-4 xl:left-0 top-1/2 text-cyan-400 flex items-center space-x-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] font-bold" data-aos="fade-right" data-aos-delay="200">
                <SiTailwindcss className="text-3xl" />
                <span className="text-xl">Tailwind CSS</span>
              </div>
              <div className="absolute left-4 xl:left-0 bottom-1/4 text-green-400 flex items-center space-x-2 drop-shadow-[0_0_8px_rgba(74,222,128,0.7)] font-bold" data-aos="fade-right" data-aos-delay="300">
                <SiNodedotjs className="text-3xl" />
                <span className="text-xl">Node Js</span>
              </div>
              {/* Right side skills */}
              <div className="absolute right-4 xl:right-0 top-1/4 text-cyan-400 flex items-center space-x-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] font-bold" data-aos="fade-left" data-aos-delay="100">
                <SiReact className="text-3xl" />
                <span className="text-xl">React</span>
              </div>
              <div className="absolute right-4 xl:right-0 top-1/2 text-blue-400 flex items-center space-x-2 drop-shadow-[0_0_8px_rgba(96,165,250,0.7)] font-bold" data-aos="fade-left" data-aos-delay="200">
                <SiFlutter className="text-3xl" />
                <span className="text-xl">Flutter</span>
              </div>
              <div className="absolute right-4 xl:right-0 bottom-1/4 text-blue-300 flex items-center space-x-2 drop-shadow-[0_0_8px_rgba(125,211,252,0.7)] font-bold" data-aos="fade-left" data-aos-delay="300">
                <SiGithub className="text-3xl" />
                <span className="text-xl">Fork Github</span>
              </div>
              {/* Profile Image in center */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" data-aos="zoom-in" data-aos-delay="400">
                <img
                  src="/tin.PNG"
                  alt="Profile"
                  className="w-32 h-auto md:w-48 h-auto lg:w-56 h-auto object-cover"
                />
              </div>
            </div>

            {/* Mobile profile image */}
            <div className="md:hidden flex justify-center w-full" data-aos="zoom-in" data-aos-delay="400">
              <img src="/tin.PNG" alt="Profile" className="w-40 h-auto object-cover" />
            </div>
          </div>

          {/* Name with glow effect */}
          <h3 className="text-4xl md:text-6xl font-bold text-center mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] w-full" data-aos="zoom-in">
            Tinapat <span className="text-white">Tonsakul</span>
          </h3>

          {/* Social Links - 3 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4 xl:px-16">
            {/* GitHub */}
            <div className="flex flex-col items-center justify-center bg-gray-200 text-black p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-600 w-full md:h-64" data-aos="flip-left" data-aos-delay="100">
              <FaGithub size={40} />
              <p className="mt-2 font-bold text-xl">Tinz2</p>
              <a
                href="https://github.com/Tinz2"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-full text-sm shadow-md hover:bg-gray-700 transition-colors"
              >
                <div className="text-black">Github</div>
              </a>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-600 w-full md:h-64" data-aos="flip-up" data-aos-delay="200">
              <FaInstagram className="text-black" size={40} />
              <p className="mt-2 font-bold text-xl text-black">t0t_.t0t._.t0t</p>
              <a
                href="https://www.instagram.com/t0t._.t0t._.t0t/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-pink-800 text-white px-6 py-2 rounded-full text-sm shadow-md hover:bg-pink-700 transition-colors"
              >
                <div className="text-black">Instagram</div>
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center justify-center bg-cyan-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-600 w-full md:h-64" data-aos="flip-right" data-aos-delay="300">
              <FaLinkedin className="text-black" size={40} />
              <p className="mt-2 font-bold text-xl text-black">Tinapat Tonsakul</p>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7232082671651188736/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-cyan-800 text-black px-6 py-2 rounded-full text-sm shadow-md hover:bg-cyan-700 transition-colors"
              >
                <div className="text-black">LinkedIn</div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <EducationSection />
        </div>
        <div ref={aboutRef}>
          <AboutSection />
        </div>
        <div ref={projectRef} className="App">
          <SkillsWorks />
        </div>
       
        <div>
          <ToolsSection />
        </div>
        <div>
          <ContactForm />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
  
}

export default App;