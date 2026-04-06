import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { FiX, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ isOpen, closeModal, selectedImage, selectedProject }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`; // Prevent layout shift from scrollbar disappearing
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  if (typeof document === "undefined") return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xl flex items-center justify-center z-[9999] px-4 py-6 md:p-8"
          onTap={(e) => {
            // Handle clicking background to close
            if (e.target === e.currentTarget) closeModal();
          }}
          style={{ touchAction: "none" }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onTap={(e) => e.stopPropagation()}
            className="bg-white rounded-[32px] relative w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col md:flex-row border border-white/20"
          >
            {/* Close Button - Larger and more accessible on mobile */}
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur shadow-lg hover:bg-slate-100 text-slate-800 rounded-full flex items-center justify-center transition-all z-[100] border border-slate-100 active:scale-90"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              aria-label="Close modal"
            >
              <FiX className="text-2xl" />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-[220px] sm:h-[300px] md:h-auto bg-slate-100/50 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-slate-100/50">
              <img
                src={selectedImage}
                alt={selectedProject.title}
                className="w-full h-full object-contain drop-shadow-2xl"
                loading="eager"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-start bg-white overflow-y-auto">
              <div className="inline-flex items-center w-max px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                Project Detail
              </div>
              
              <h2 className="text-[#0f172a] font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4 tracking-tight">
                {selectedProject.title}
              </h2>

              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-50 flex items-center">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex gap-2 shadow-lg shadow-indigo-500/20 w-fit px-8 py-3.5 no-underline"
                >
                  View Live Site <FiExternalLink />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
