import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="border-t border-gray-600 pt-6 flex flex-col items-center space-y-4" data-aos="fade-up">
        <div className="flex space-x-6">
          <a
            href="https://github.com/Tinz2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaGithub className="text-6xl text-white bg-transparent rounded-full p-2 hover:bg-gray-800" />
          </a>
          <a
            href="https://www.instagram.com/t0t._.t0t._.t0t/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaInstagram className="text-6xl text-white bg-transparent rounded-full p-2 hover:bg-pink-600" />
          </a>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7232082671651188736/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaLinkedin className="text-6xl text-white bg-transparent rounded-full p-2 hover:bg-blue-600" />
          </a>
        </div>
        <p className="text-sm text-gray-400">© 2025 Tinapat</p>
      </div>
    </footer>
  );
};

export default Footer;
