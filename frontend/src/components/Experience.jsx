import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Tech Innovators Inc.",
    duration: "Jan 2024 - Present",
    type: "Full-Time",
    description: "Architecting and developing scalable web applications using the MERN stack. Spearheaded the migration of legacy systems to a modern React-based architecture, improving performance by 40%.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
  // {
  //   id: 2,
  //   role: "Frontend Engineering Intern",
  //   company: "Creative Web Solutions",
  //   duration: "May 2023 - Aug 2023",
  //   type: "Internship",
  //   description: "Collaborated with designers to implement pixel-perfect user interfaces. Built responsive landing pages and interactive dashboards using React and Framer Motion.",
  //   technologies: ["JavaScript", "React", "Framer Motion", "Figma"],
  // },
  // {
  //   id: 3,
  //   role: "Freelance Web Developer",
  //   company: "Self-Employed",
  //   duration: "Jan 2022 - May 2023",
  //   type: "Freelance",
  //   description: "Designed and developed custom portfolios, e-commerce stores, and corporate websites for various clients, focusing on SEO optimization and performance.",
  //   technologies: ["HTML/CSS", "JavaScript", "Next.js", "Vercel"],
  // }
];

const Experience = () => {
  return (
    <div id="experience" className="w-full bg-[#f8fafc] py-16 relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12"
        >
          <span className="section-label">Trajectory</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-4 mb-3 tracking-tight">
            My Experience
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-[#64748b] text-base sm:text-lg">
            A timeline of my professional journey, highlighting key roles, responsibilities, and the technologies I've mastered along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node/Icon */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-[3px] border-indigo-100 rounded-full items-center justify-center shadow-sm z-10">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-12 lg:pl-16 md:text-left" : "md:pr-12 lg:pr-16 md:text-right"
                }`}>
                  <div className="premium-card p-6 sm:p-8 bg-white border border-slate-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(79,70,229,0.08)] transition-all duration-300 relative overflow-hidden group text-left">
                    
                    {/* Decorative Gradient Blob */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    {/* Metadata Row */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest rounded-full">
                        <FiBriefcase className="text-indigo-400" /> {exp.type}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                        {exp.duration}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-1 group-hover:text-indigo-600 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-base sm:text-lg font-medium text-[#64748b] mb-4">
                      {exp.company}
                    </h4>
                    
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium rounded-md hover:border-indigo-200 hover:bg-white transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
