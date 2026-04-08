import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiDatabase, FiServer, FiTool } from 'react-icons/fi';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, 
  FaGithub, FaPython, 
} from 'react-icons/fa';
import { 
   SiNextdotjs, SiTailwindcss, SiExpress, 
  SiMongodb,  SiFirebase
} from 'react-icons/si';
import { GrMysql } from "react-icons/gr";

// Skill categorizations matching the reference standard
const skillCategories = [
  {
    title: "Languages",
    icon: <FiCode className="text-indigo-500" />,
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: "Java", icon: <FaJava className="text-[#5382A1]" /> },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    ]
  },
  {
    title: "Frontend",
    icon: <FiLayout className="text-pink-500" />,
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-slate-800" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    ]
  },
  {
    title: "Backend",
    icon: <FiServer className="text-emerald-500" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-slate-800" /> },
    ]
  },
  {
    title: "Database",
    icon: <FiDatabase className="text-orange-500" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "My SQL", icon: <GrMysql className="text-[#4169E1]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    ]
  },
  {
    title: "Tools & DevOps",
    icon: <FiTool className="text-cyan-500" />,
    skills: [
      { name: "Git & GitHub", icon: <FaGithub className="text-slate-800" /> },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Skills = () => {
  return (
    <div id="skills" className="w-full bg-[#f8fafc] py-16 relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12"
        >
          <span className="section-label">Expertise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-4 mb-3 tracking-tight">
            Technical Skills
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-[#64748b] text-base sm:text-lg">
            A categorized overview of my technical capabilities and the specific tools I use everyday to build modern applications.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="premium-card bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(79,70,229,0.06)] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="p-3 bg-slate-50 rounded-2xl shadow-sm border border-slate-100/50 text-2xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-white border border-slate-200 hover:border-indigo-200 rounded-full text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors shadow-sm"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Skills;
