import React, { useState, memo, useMemo } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = memo(() => {
  const sections = useMemo(() => [
    [
      { title: "StudyMate Education Platform", category: "Web App", image: "/images/frontend6.png", link: "https://study-mate-flame.vercel.app" },
      { title: "Advanced JS Projects", category: "Interactive", image: "/images/frontend3.png", link: "https://java-script-project-alpha.vercel.app" },
      { title: "Dynamic Logic App", category: "Frontend", image: "/images/frontend5.png", link: "https://java-script-project-kqee.vercel.app" },
      { title: "Pizza Booking Flow", category: "E-Commerce", image: "/images/frontend4.png", link: "https://pizza-booking-web.vercel.app/Home.html" },
    ],
    [
      { title: "React Dashboard", category: "UI/UX", image: "/images/project5.jpg", link: "#" },
      { title: "Express API Setup", category: "Backend", image: "/images/project6.jpg", link: "#" },
      { title: "MongoDB Arch", category: "Database", image: "/images/project7.jpg", link: "#" },
      { title: "NextJS Template", category: "Full-Stack", image: "/images/project8.jpg", link: "#" },
    ],
  ], []);

  const [currentSection, setCurrentSection] = useState(0);

  const handlePrev = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const handleNext = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  return (
    <div id="work" className="w-full bg-[#f8fafc] py-16 overflow-hidden relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col max-w-2xl"
          >
            <span className="section-label self-start">Showcase</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-4 mb-3 tracking-tight">
              Selected Works
            </h2>
            <p className="text-[#64748b] text-base sm:text-lg">
              A curated collection of my recent projects, demonstrating my focus on elegant design and robust development.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-600 hover:bg-[#0f172a] hover:border-[#0f172a] hover:text-white transition-all shadow-sm"
              aria-label="Previous"
            >
              <FiArrowLeft className="text-xl" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-600 hover:bg-[#0f172a] hover:border-[#0f172a] hover:text-white transition-all shadow-sm"
              aria-label="Next"
            >
              <FiArrowRight className="text-xl" />
            </button>
          </motion.div>
        </div>

        {/* Featured Bento Grid UI */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
          >
            {sections[currentSection].map((box, index) => (
              <a
                key={index}
                href={box.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col premium-card overflow-hidden relative cursor-pointer ${
                  index === 0 
                    ? "md:col-span-2 lg:col-span-2 lg:row-span-2 h-[600px] lg:h-full" 
                    : "h-full"
                }`}
              >
                {/* Image Container */}
                <div className="w-full h-full absolute inset-0 overflow-hidden bg-slate-100">
                  <img
                    src={box.image}
                    alt={box.title}
                    className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  
                  {/* Hover overlay icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 shadow-sm">
                    <FiArrowUpRight className="text-white text-xl" />
                  </div>
                </div>

                {/* Text Info - Absolute Positioned over Image */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col z-10">
                  <span className="inline-flex w-max px-3 py-1 bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30 text-indigo-200 text-xs font-semibold uppercase tracking-wider rounded-full mb-3 shadow-sm">
                    {box.category}
                  </span>
                  <h3 className={`text-white font-bold leading-tight group-hover:text-indigo-300 transition-colors ${
                    index === 0 ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"
                  }`}>
                    {box.title}
                  </h3>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
});

export default Carousel;