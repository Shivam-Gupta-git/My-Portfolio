import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Desktop & Mobile Navbar Wrapper */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-1.5" 
            : "bg-transparent py-3.5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group z-50">
            <span className="text-2xl font-bold font-['Plus_Jakarta_Sans'] text-[#111827] tracking-tight group-hover:text-indigo-600 transition-colors">
              Shivam<span className="text-indigo-500">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 bg-white/50 px-6 py-2.5 rounded-full border border-slate-200/60 shadow-sm backdrop-blur-md">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[15px] font-semibold text-slate-600 hover:text-[#111827] transition-all relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1.5 after:left-0 after:bg-indigo-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA / Socials */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/Shivam-Gupta-git" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-slate-200 text-slate-600 hover:bg-[#111827] hover:border-[#111827] hover:text-white transition-all">
              <FiGithub className="text-lg" />
            </a>
            <a href="#contact" className="btn-primary py-2.5 px-6">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#111827] z-50 p-2 focus:outline-none"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center min-h-screen"
          >
            <ul className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full text-center border-b border-slate-100 pb-4">
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold text-[#111827] hover:text-indigo-600 transition-colors font-['Plus_Jakarta_Sans']"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-6 mt-12">
              <a href="https://github.com/Shivam-Gupta-git" className="p-3 bg-slate-100 rounded-full text-slate-700 hover:bg-indigo-600 hover:text-white transition-all"><FiGithub size={24} /></a>
              <a href="https://linkedin.com" className="p-3 bg-slate-100 rounded-full text-slate-700 hover:bg-indigo-600 hover:text-white transition-all"><FiLinkedin size={24} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
