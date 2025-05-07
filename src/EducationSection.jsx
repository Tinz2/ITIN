import React from "react";

export default function EducationSection() {
  return (
    <div className="bg-black text-white py-10 px-4 md:px-20 space-y-16">
      <h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 space-x-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        data-aos="fade-down"
      >
        EDUCATION
      </h1>

      {/* Minburi College */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
        <div
          className="flex flex-col md:flex-row items-center gap-6 flex-1"
          data-aos="fade-right"
        >
          <img src="/min.png" alt="Minburi Logo" className="w-24 h-24 object-contain" />
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-bold">
              <span className="text-red-500">MinBuri</span>{" "}
              Tecnical{" "}<span className="text-red-500">College</span>
            </h2>
            <p className="text-white text-lg">
              Vocation certificate in <span className="text-red-500">Computer Business</span>
            </p>
            <p className="text-white text-lg">2019 – 2021</p>
          </div>
        </div>
        <div
          className="w-full md:w-[400px] h-[250px] rounded-xl overflow-hidden shadow-md"
          data-aos="fade-left"
        >
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.433007673156!2d100.71965317509138!3d13.813017986585262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d646341782339%3A0xbd62bc4b5700b708!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LiZ4Li04LiE4Lih4Li14LiZ4Lia4Li44Lij4Li1!5e0!3m2!1sth!2sth!4v1745392390898!5m2!1sth!2sth"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* RMUTT */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
        <div
          className="flex flex-col md:flex-row items-center gap-6 flex-1"
          data-aos="fade-right"
        >
          <img src="/rmutt.png" alt="RMUTT Logo" className="w-24 h-24 object-contain" />
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-bold">
              Rajamangala University of Technology{" "}
              <span className="text-sky-500">Thanyaburi</span>
            </h2>
            <p className="text-white text-lg">
              Bachelor’s Degree in <span className="text-sky-500">Computer Business</span>
            </p>
            <p className="text-white text-lg">2022 – Present</p>
          </div>
        </div>
        <div
          className="w-full md:w-[400px] h-[250px] rounded-xl overflow-hidden shadow-md"
          data-aos="fade-left"
        >
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.6860744486894!2d100.7253582759896!3d14.036613286385574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d78a4a8713c3f%3A0xf019238243532a0!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lij4Liy4LiK4Lih4LiH4LiE4Lil4LiY4Lix4LiN4Lia4Li44Lij4Li1!5e0!3m2!1sth!2sth!4v1745393116935!5m2!1sth!2sth"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
