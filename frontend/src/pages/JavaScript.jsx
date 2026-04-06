import React, { useState } from "react";
import { javaScriptData } from "../components/data";
import { FiX, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function JavaScript() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (image, project) => {
    setSelectedImage(image);
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
    setSelectedProject(null);
  };

  return (
    <div className="w-full flex gap-6 sm:gap-8 px-2 sm:px-4 py-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
      {javaScriptData.map((item) => (
        <div key={item.id} className="flex gap-6 sm:gap-8">
          {item.images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              onClick={() => openModal(img, item)}
              className="shrink-0 w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] premium-card p-6 flex flex-col items-center justify-center cursor-pointer bg-white relative overflow-hidden group snap-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-indigo-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <img
                src={img}
                alt={`preview-${i}`}
                className="w-full h-full object-contain rounded-xl relative z-10 transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute bottom-6 right-6 w-10 h-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                <FiExternalLink className="text-indigo-600" />
              </div>
            </motion.div>
          ))}
        </div>
      ))}

      <AnimatePresence>
        {isOpen && selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md flex items-center justify-center z-[100] px-4 sm:px-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl relative w-full sm:w-[90%] md:w-[85%] lg:w-[75%] max-w-5xl max-h-[90vh] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full flex items-center justify-center transition-colors z-10"
                onClick={closeModal}
              >
                <FiX className="text-xl" />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-auto bg-[#F8F9FC] flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-slate-100">
                <img
                  src={selectedImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain drop-shadow-sm"
                  loading="eager"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center bg-white overflow-y-auto">
                <div className="inline-flex items-center w-max px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                  Project Detail
                </div>
                
                <h2 className="text-[#0f172a] font-extrabold text-2xl sm:text-3xl leading-tight mb-4 tracking-tight">
                  {selectedProject.title}
                </h2>

                <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-8 flex-1">
                  {selectedProject.description}
                </p>

                <div className="mt-auto pt-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex shadow-lg shadow-indigo-500/20 w-fit"
                  >
                    View Live Site <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default JavaScript;