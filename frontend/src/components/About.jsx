import React from "react";
import { softwareLogo } from "../components/data";
import { CgMail } from "react-icons/cg";
import { IoIosContact } from "react-icons/io";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center px-3 sm:px-6 lg:px-8">

      <div className="relative mx-auto w-full max-w-6xl h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] mb-10 rounded-3xl bg-linear-to-br from-white/5 to-white/0 backdrop-blur-md border border-white/10 overflow-hidden mt-5">
        
        {/* TOP LABEL */}
        <div className="absolute top-4 right-6">
          <h1 className="font-bold tracking-widest text-xs sm:text-sm text-gray-300">
            ENGINEER
          </h1>
        </div>

        {/* CENTER TEXT */}
        <div className="flex h-full items-center justify-center gap-6 sm:gap-10">
          <span
            className="mac-glow-text text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[11rem] leading-none"
            style={{ transform: "scaleY(1.6)" }}
          >
            PORT
          </span>
          <span
            className="mac-glow-text text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[11rem] leading-none"
            style={{ transform: "scaleY(1.6)" }}
          >
            FOLIO
          </span>
        </div>
      </div>

      {/* INTRO */}
      <div className="w-full max-w-6xl mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-400">
          INTRODUCTION
        </h1>
        <p className="text-sm sm:text-base text-gray-500">
          About Me
        </p>
      </div>

      {/*  ABOUT */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
        
        {/* IMAGE PLACEHOLDER */}
        <div className="md:col-span-1 flex justify-center">
          <div className="w-full h-[200px]  rounded-2xl bg-linear-to-br from-gray-500 to-gray-700 shadow-lg" />
        </div>

        {/* TEXT + STACK */}
        <div className="md:col-span-4 flex flex-col gap-6">

          {/* ABOUT TEXT */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-md">
            <p className="text-[11px] sm:text-sm md:text-base leading-relaxed text-gray-200">
              I am a passionate and motivated software developer with a strong
              interest in building modern, user-focused web applications.
              Currently, I am learning the MERN stack, focusing on creating
              responsive and interactive frontend experiences while gradually
              strengthening my backend development skills. Alongside web
              development, I am actively improving my problem-solving abilities
              by learning Java and Data Structures & Algorithms. I am also gaining
              hands-on experience with MySQL and database design. I enjoy
              learning new technologies, building projects, and continuously
              improving my technical skills.
            </p>
          </div>

          {/* TECH STACK */}
          <div className=" rounded-2xl p-4 shadow-md">
            {softwareLogo.map((item, index) => {
              const logos = [
                item.image1,
                item.image2,
                item.image3,
                item.image4,
                item.image5,
              ];
              const headings = [
                item.heading1,
                item.heading2,
                item.heading3,
                item.heading4,
                item.heading5,
              ];

              return (
                <div
                  key={index}
                  className="flex flex-wrap justify-center sm:justify-between gap-4 "
                >
                  {logos.map((logo, i) => (
                    <div key={i} className="flex flex-col items-center hover:bg-white/5 hover:backdrop-blur-md hover:border border-white/10 rounded-2xl duration-300">
                      <img
                        src={logo}
                        alt={`tech-${i}`}
                        className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-white p-2 shadow hover:scale-90 transition duration-300"
                      />
                      {headings[i] && (
                        <span className="text-[10px] sm:text-xs md:text-sm mt-2 text-gray-200">
                          {headings[i]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/*  CONTACT  */}
      <div className="w-full max-w-6xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 mb-10 shadow-lg">
        <h1 className="inline-block bg-white/15 px-6 py-1 rounded-full text-sm font-medium mb-6">
          CONTACT
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: <CgMail />, label: "Email", link: "mailto:shivamgupta73014@gmail.com" },
            { icon: <IoIosContact />, label: "Contact", link: "tel:8002920913" },
            { icon: <FaWhatsapp />, label: "WhatsApp", link: "https://wa.me/8002920913" },
            { icon: <CiLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/shivam-gupta-22818b364/" },
            { icon: <FaGithub />, label: "GitHub", link: "https://github.com/Shivam-Gupta-git" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/15 transition shadow"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-gray-300">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/*  INTEREST + EXPERIENCE */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow">
          <h1 className="inline-block bg-white/15 px-5 py-1 rounded-full text-sm mb-4">
            INTEREST
          </h1>
          <div className="px-4 py-1 border border-white/20 rounded-full text-sm text-gray-300">
            <h1>#Listening Songs</h1>
          </div>
        </div>

        <div className="md:col-span-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow">
          <h1 className="inline-block bg-white/15 px-5 py-1 rounded-full text-sm mb-4">
            EXPERIENCE
          </h1>
          <p className="text-gray-300 leading-relaxed">
            I am currently a college student and do not have professional
            experience yet. However, I am actively learning modern web
            technologies and building projects to enhance my practical skills.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;