import React from "react";

export default function AboutSection() {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-20 text-center">
      <h1
        className="text-4xl md:text-5xl font-extrabold mb-10 drop-shadow-[0_2px_4px_rgba(255,255,255,0.6)]"
        data-aos="fade-down"
      >
        ABOUT ME
      </h1>

      <div
        className="max-w-3xl mx-auto space-y-6 text-base md:text-lg leading-relaxed"
        data-aos="fade-up"
      >
        <p>
          My name is Tinapat Tonsakul. I'm from Thailand and I graduated with a degree in
          Business Administration, majoring in Business Computer. This background
          sparked my interest in programming.
        </p>
        <p>
          One of the strengths of my major is that it allowed me to understand both
          business and web development at the same time, giving me valuable insight
          into building websites for business purposes.
        </p>
        <p>
          However, the challenge was that studying both areas simultaneously made it
          difficult to master either one deeply during university.
        </p>
        <p>
          Despite this, my passion for programming led me to continue learning and
          exploring on my own, with the goal of pursuing a career as a developer.
        </p>
      </div>
    </div>
  );
}
