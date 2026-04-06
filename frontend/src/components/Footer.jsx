import React from 'react'
import { CgMail } from "react-icons/cg";
import { IoIosContact } from "react-icons/io";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <footer className='w-full bg-white border-t border-slate-100 py-10 overflow-hidden'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12'>

        {/* Top: Logo + Tagline */}
        <div className='flex flex-col md:flex-row items-start justify-between gap-10 mb-8'>
          <div className="max-w-sm">
            <h3 className='font-bold text-3xl font-["Plus_Jakarta_Sans"] text-[#111827] tracking-tight'>
              Shivam<span className='text-indigo-500'>.</span>
            </h3>
            <p className='text-base text-[#6B7280] mt-4 leading-relaxed'>
              A passionate engineer crafting beautiful, performant, and reliable web experiences.
            </p>
          </div>

          {/* Social Icons */}
          <div className='flex flex-col md:items-end'>
            <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-4">Connect</h4>
            <div className='flex items-center gap-3'>
              {[
                { href: "mailto:shivamgupta73014@gmail.com", icon: <CgMail /> },
                { href: "tel:8002920913", icon: <IoIosContact /> },
                { href: "https://wa.me/8002920913", icon: <FaWhatsapp /> },
                { href: "https://www.linkedin.com/in/shivam-gupta-22818b364/", icon: <CiLinkedin /> },
                { href: "https://github.com/Shivam-Gupta-git", icon: <FaGithub /> },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className='w-12 h-12 flex items-center justify-center rounded-full bg-[#f8fafc] border border-slate-200 text-slate-500 hover:bg-[#111827] hover:border-[#111827] hover:text-white transition-all duration-300 text-xl shadow-sm'
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8'></div>

        {/* Bottom: Links + Copyright */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
          <p className='text-sm text-slate-500 font-medium'>
            © {new Date().getFullYear()} Shivam Kumar. All Rights Reserved.
          </p>
          
          <div className='flex flex-wrap justify-center gap-6 sm:gap-8 text-sm font-semibold text-slate-500'>
            <span className='hover:text-[#111827] cursor-pointer transition-colors'>Terms & Conditions</span>
            <span className='hover:text-[#111827] cursor-pointer transition-colors'>Privacy Policy</span>
            <span className='hover:text-[#111827] cursor-pointer transition-colors'>Disclosures</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer