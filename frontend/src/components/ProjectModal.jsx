import React, { useEffect } from "react";
import { FiX, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ isOpen, closeModal, selectedImage, selectedProject }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-[200] px-4 py-6"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[32px] relative w-full max-w-5xl max-h-full md:max-h-[85vh] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] flex flex-col md:flex-row"
          >
            {/* Close Button - More accessible on mobile */}
            <button
              className="absolute top-4 right-4 w-11 h-11 bg-white/80 backdrop-blur shadow-md hover:bg-slate-100 text-slate-600 rounded-full flex items-center justify-center transition-all z-50 border border-slate-100 active:scale-90"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FiX className="text-2xl" />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-[280px] sm:h-[350px] md:h-auto bg-slate-50 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-slate-100">
              <img
                src={selectedImage}
                alt={selectedProject.title}
                className="w-full h-full object-contain drop-shadow-2xl"
                loading="eager"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-7 sm:p-10 flex flex-col justify-start bg-white overflow-y-auto">
              <div className="inline-flex items-center w-max px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full mb-5">
                Project Detail
              </div>
              
              <h2 className="text-[#0f172a] font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-5 tracking-tight">
                {selectedProject.title}
              </h2>

              <div className="flex-1 min-h-0">
                 <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-50 flex items-center gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex gap-2 shadow-lg shadow-indigo-500/20 w-fit px-8 py-3.5"
                >
                  View Live Site <FiExternalLink />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
