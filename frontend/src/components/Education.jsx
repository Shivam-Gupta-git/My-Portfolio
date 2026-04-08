import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiBookOpen } from "react-icons/fi";

const educations = [
  {
    id: 1,
    degree: "Bachelor of Technology in Information Technology",
    institution: "Swami Vivekanand Subharti University, Meerut",
    duration: "2022 - 2026",
    description: "Specialized in software engineering, algorithms, and full-stack development.",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Universal Public School",
    duration: "2019 - 2021",
    description: "Focus on Computer Science and Mathematics.",
  }
];

const certifications = [
  {
    id: 1,
    title: "NPTEL Online Certification",
    issuer: "",
    date: "Jan - Apr 2025",
    link: "#"
  },
  // {
  //   id: 2,
  //   title: "Meta Front-End Developer",
  //   issuer: "Coursera",
  //   date: "April 2023",
  //   link: "#"
  // },
  // {
  //   id: 3,
  //   title: "Full Stack Open",
  //   issuer: "University of Helsinki",
  //   date: "December 2022",
  //   link: "#"
  // }
];

const Education = () => {
  return (
    <div id="education" className="w-full bg-white py-16 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12"
        >
          <span className="section-label">Background</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-4 mb-3 tracking-tight">
            Education & Certifications
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-[#64748b] text-base sm:text-lg">
            My academic foundation and continuous learning journey through professional certifications.
          </p>
        </motion.div>

        {/* Two Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Education Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                <FiBookOpen className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">Education</h3>
            </div>

            <div className="flex flex-col gap-6">
              {educations.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="premium-card p-6 sm:p-8 bg-white border border-slate-100 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-indigo-100 hover:shadow-[0_8px_30px_rgb(79,70,229,0.06)] transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg sm:text-xl font-bold text-[#0f172a] group-hover:text-indigo-600 transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto border border-slate-100">
                      {edu.duration}
                    </span>
                  </div>
                  <h5 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-4">
                    {edu.institution}
                  </h5>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-6 lg:ml-4">
              <div className="p-3 bg-orange-50 rounded-xl text-orange-500">
                <FiAward className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">Certifications</h3>
            </div>

            <div className="flex flex-col gap-4 lg:ml-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={cert.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="premium-card p-5 bg-white border border-slate-100 rounded-2xl shadow-[0_4px_16px_rgb(0,0,0,0.02)] hover:border-indigo-100 hover:shadow-[0_8px_24px_rgb(79,70,229,0.06)] transition-all duration-300 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[#0f172a] font-bold text-base sm:text-lg group-hover:text-indigo-600 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-slate-500 text-sm font-medium">
                      {cert.issuer} <span className="mx-1 text-slate-300">•</span> {cert.date}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors shrink-0 outline outline-slate-100 group-hover:outline-indigo-100">
                    <FiAward className="text-xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Education;
