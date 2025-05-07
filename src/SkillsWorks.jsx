import React from "react";
import { SiTailwindcss, SiFlutter, SiAngular, SiNodedotjs } from "react-icons/si";

const ProjectGrid = ({ projects, color = "text-black", titleColor = "", columns = "md:grid-cols-3" }) => (
  <div className={`grid grid-cols-1 ${columns} gap-6 max-w-6xl mx-auto`}>
    {projects.map((proj, index) => (
      <a
        key={index}
        href={proj.link}
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
        className="bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 overflow-hidden"
        style={{ maxWidth: '320px', width: '100%', margin: '0 auto' }}
      >
        <div className="h-72 w-full overflow-hidden">
          <img
            src={proj.img}
            alt={proj.title}
            className="rounded-t-xl w-full h-full object-cover transition-transform duration-300"
          />
        </div>
        <p className={`font-bold py-3 ${color} ${titleColor} text-xl text-center`}>{proj.title}</p>
      </a>
    ))}
  </div>
);

const SkillsWorks = () => {
  const tailwindProjects = [
    { title: "Lottery", img: "/work/lot.jpeg", link: "https://github.com/Tinz2/Tinlotto" },
    { title: "Devilery", img: "/work/delivery.png", link: "https://github.com/Tinz2/TinDelivery" },
    { title: "POS", img: "/work/pos.jpeg", link: "https://github.com/Tinz2/Tinpos" },
  ];

  const flutterProjects = [
    { title: "Fable Land", img: "/work/fable.png", link: "https://github.com/Tinz2/fableland" },
    { title: "CodeCraft", img: "/work/codecraft.jpg", link: "https://github.com/Tinz2/codecraft2.0" },
  ];

  const angularNodeProjects = [
    { title: "POS Restaurant", img: "/work/posres.jpeg", link: "https://example.com/posres" },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 text-center">
      <h2
        className="text-5xl font-bold mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] text-white"
        data-aos="fade-down"
      >
        Skills & Works
      </h2>

      {/* Tailwind CSS Section */}
      <div className="mb-24">
        <div className="flex items-center justify-center gap-2 mb-8">
          <SiTailwindcss className="text-cyan-400 text-4xl drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
          <h3 className="text-cyan-400 text-2xl font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
            Tailwind CSS
          </h3>
        </div>
        <ProjectGrid projects={tailwindProjects} />
      </div>

      {/* Flutter Section */}
      <div className="mb-24">
        <div className="flex items-center justify-center gap-2 mb-8">
          <SiFlutter className="text-blue-400 text-4xl drop-shadow-[0_0_8px_rgba(96,165,250,0.7)]" />
          <h3 className="text-blue-400 text-2xl font-semibold drop-shadow-[0_0_8px_rgba(96,165,250,0.7)]">
            Flutter
          </h3>
        </div>
        <ProjectGrid projects={flutterProjects} columns="md:grid-cols-2" />
      </div>

      {/* Angular + NodeJS Section */}
      <div>
        <div className="flex items-center justify-center gap-3 mb-8">
          <SiAngular className="text-pink-500 text-4xl drop-shadow-[0_0_8px_rgba(219,39,119,0.7)]" />
          <span className="text-pink-500 text-2xl font-semibold drop-shadow-[0_0_8px_rgba(219,39,119,0.7)]">Angular</span>
          <span className="text-white font-bold text-3xl">+</span>
          <SiNodedotjs className="text-green-400 text-4xl drop-shadow-[0_0_8px_rgba(74,222,128,0.7)]" />
          <span className="text-green-400 text-2xl font-semibold drop-shadow-[0_0_8px_rgba(74,222,128,0.7)]">Node.js</span>
        </div>
        <div className="flex justify-center" data-aos="zoom-in">
          <a
            href={angularNodeProjects[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 overflow-hidden max-w-2xl w-full"
          >
            <div className="h-56 overflow-hidden">
              <img 
                src={angularNodeProjects[0].img} 
                alt={angularNodeProjects[0].title} 
                className="rounded-t-xl w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <p className="font-bold py-3 text-pink-500 text-xl text-center">
              {angularNodeProjects[0].title}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SkillsWorks;
