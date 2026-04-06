import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiZap, FiActivity, FiClock, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "2+", icon: <FiClock className="text-blue-500" /> },
    { label: "Projects Completed", value: "15+", icon: <FiZap className="text-orange-500" /> },
    { label: "Github Commits", value: "500+", icon: <FiActivity className="text-emerald-500" /> },
  ];

  const processSteps = [
    { title: "Design", desc: "Crafting beautiful, user-centric interfaces." },
    { title: "Code", desc: "Building scalable and performant systems." },
    { title: "Ship", desc: "Deploying high-quality software to the world." },
  ];

  return (
    <div id="about" className="w-full bg-[#F8F9FC] py-16 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12"
        >
          <span className="section-label">Identity</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-4 mb-3 tracking-tight">
            About Me
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-[#64748b] text-base sm:text-lg max-w-2xl">
            I bridge the gap between design and engineering to build modern, performant web applications that solve real-world problems.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-min">
          
          {/* 1. Main Bio Card (col-span-8) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 premium-card p-8 sm:p-12 relative overflow-hidden bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50/50 rounded-bl-full pointer-events-none"></div>
            <h3 className="text-2xl font-extrabold text-[#0f172a] mb-6 flex items-center gap-3">
              My Journey
            </h3>
            <div className="space-y-6 text-[#64748b] text-base sm:text-lg leading-relaxed">
              <p>
                I am a passionate and motivated software developer with a strong focus on building modern, user-centric web applications. Currently, I specialize in the <span className="font-bold text-indigo-600">MERN stack</span>, ensuring that every frontend experience is responsive and visually stunning.
              </p>
              <p>
                My approach to development is rooted in <span className="font-bold text-[#0f172a]">Continuous Learning</span>. Beyond standard web development, I am actively refining my problem-solving capabilities by exploring Java and Data Structures & Algorithms. I thrive on learning new technologies and continuously elevating the quality of my engineering.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Work with me <FiArrowRight />
              </a>
              <div className="flex items-center gap-3 ml-2">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* 2. Quick Status Card (col-span-4) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 flex flex-col gap-6"
          >
            {/* Location Card */}
            <div className="premium-card p-8 bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-1/2 flex flex-col justify-center hover:shadow-[0_15px_35px_rgb(79,70,229,0.06)] transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[#0f172a] font-bold text-lg">Location</h4>
                  <p className="text-slate-500 font-medium">Bhopal, India</p>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="premium-card p-8 bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-1/2 flex flex-col justify-center hover:shadow-[0_15px_35px_rgb(34,197,94,0.06)] transition-all">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <FiActivity size={24} />
                  </div>
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse"></span>
                </div>
                <div>
                  <h4 className="text-[#0f172a] font-bold text-lg">Status</h4>
                  <p className="text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full text-xs uppercase tracking-widest mt-1">Available for Hire</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Stats Section (col-span-4) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 premium-card p-8 sm:p-10 bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center"
          >
            <h3 className="text-xl font-extrabold text-[#0f172a] mb-8">Key Achievements</h3>
            <div className="space-y-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-2xl group-hover:bg-white group-hover:border-indigo-100 transition-all shadow-sm">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#0f172a] mb-1">{stat.value}</div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. Process/Philosophy (col-span-8) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 premium-card p-10 bg-indigo-600 border border-indigo-700 shadow-[0_15px_40px_rgb(79,70,229,0.15)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/50 to-transparent pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="text-4xl font-black text-indigo-300/30">0{idx + 1}</div>
                  <h4 className="text-white font-extrabold text-xl">{step.title}</h4>
                  <p className="text-indigo-100 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* 5. Infinite Marquee */}
        <div className="mt-12 py-10 bg-white border-y border-slate-100 overflow-hidden relative">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap items-center shrink-0"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 shrink-0">
                <span className="text-2xl sm:text-3xl font-black text-slate-200 outline-text hover:text-indigo-600 transition-colors cursor-default uppercase italic tracking-tighter">
                  MERN Stack Developer
                </span>
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-2xl sm:text-3xl font-black text-[#0f172a] hover:text-indigo-600 transition-colors cursor-default uppercase tracking-tighter">
                  Available for Hire
                </span>
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;