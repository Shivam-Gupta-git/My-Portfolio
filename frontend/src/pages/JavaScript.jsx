import React, { useState } from "react";
import { javaScriptData } from "../components/data";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import ProjectModal from "../components/ProjectModal";

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

      <ProjectModal
        isOpen={isOpen}
        closeModal={closeModal}
        selectedImage={selectedImage}
        selectedProject={selectedProject}
      />
    </div>
  );
}

export default JavaScript;