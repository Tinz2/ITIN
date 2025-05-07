import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// ลิงก์แต่ละ tools
const tools = [
  {
    name: 'ChatGPT',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    url: 'https://chat.openai.com/',
  },
  {
    name: 'GitHub Copilot',
    img: 'https://user-images.githubusercontent.com/28068/123712981-02676c80-d839-11eb-919a-96ee0c895e15.png',
    url: 'https://github.com/features/copilot',
  },
  {
    name: 'VS Code',
    img: 'https://code.visualstudio.com/assets/images/code-stable.png',
    url: 'https://code.visualstudio.com/',
  },
  {
    name: 'Figma',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    url: 'https://www.figma.com/downloads/',
  },
  {
    name: 'Fork',
    img: 'https://fork.dev/images/logo.png',
    url: 'https://fork.dev/',
  },
  {
    name: 'Render',
    img: 'https://th.bing.com/th/id/ODLS.1d11feba-b35b-4181-b076-2ec2a93c689a?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
    url: 'https://render.com/',
  },
];

const ToolsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-black text-white py-12" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-10 drop-shadow-[0_1px_5px_rgba(255,255,255,0.6)]">
        Tools
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img
              src={tool.img}
              alt={tool.name}
              className="w-20 h-20 object-contain bg-transparent rounded-lg"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
