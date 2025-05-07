// ContactForm.jsx
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
// เพิ่มไอคอนจาก react-icons
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white py-12 px-6 md:px-20" id="contact">
      <h2 className="text-4xl font-bold text-center mb-10  drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" data-aos="fade-down">
        Get In Touch
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left side */}
        <div className="flex-1 space-y-6" data-aos="fade-right">
          <h3 className="text-3xl font-semibold  drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">Contact Me</h3>
          <p className="text-lg">
            You can reach me via email through this message box.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MdEmail className="w-6 h-6 text-sky-400" />
              <a href="mailto:tinapat2547@gmail.com" className="hover:underline">
                tinapat2547@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MdPhone className="w-6 h-6 text-green-400" />
              <span>+66 96-909-7868</span>
            </div>
            <div className="flex items-center gap-3">
              <MdLocationOn className="w-6 h-6 text-pink-400" />
              <span>Nakornnayok, Thailand</span>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex-1 space-y-6" data-aos="fade-left">
          <form
            action="https://formsubmit.co/tinapat2547@gmail.com"
            method="POST"
            className="flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              required
              className="bg-transparent border border-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email address"
              required
              className="bg-transparent border border-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              required
              className="bg-transparent border border-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
