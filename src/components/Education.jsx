import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="px-6 py-16 bg-[#0f1629] text-white"
      
    >
      <h2
        className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400"
        data-aos="fade"
        data-aos-delay="100"
      >
        Education
      </h2>

      <div
        className="w-full max-w-5xl mx-auto bg-white/10 rounded-3xl shadow-lg p-12 text-white text-left"
        data-aos="zoom"
        data-aos-delay="200"
      >
        <div className="space-y-8">
          <div className="border-l-4 border-pink-300 pl-4">
            <h3 className="text-xl font-semibold">
              B.Sc. in Information & Communication Technology (ICT)
            </h3>
            <p className="text-sm text-pink-300">
              Comilla University — 2022 to Present
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Currently pursuing a Bachelor’s degree focused on software
              development, database systems, networking, and modern web
              technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
