import React, { useState } from "react";
import { nextJsData } from "../components/data";
import { MdCancel } from "react-icons/md";

function NextJS() {
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
    <div className="w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex flex-row gap-4 sm:gap-6 p-3 sm:p-4 md:p-6 overflow-x-auto hide-scrollbar">

      {nextJsData.map((item) => (
        <div
          key={item.id}
          className="w-full flex  space-x-3 sm:space-x-4 p-2 sm:p-4 rounded-lg"
        >
          {item.images.map((img, i) => (
            <div
              key={i}
              onClick={() => openModal(img, item)}
              className="shrink-0 
                w-[300px] h-[350px]
                sm:w-[300px] sm:h-[400px]
                md:w-[300px] md:h-[400px]
                lg:w-[400px] lg:h-[400px]
                border rounded-lg flex items-center justify-center p-2 sm:p-4 
                bg-gray-100 cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={img}
                alt={`box-${i}`}
                className="w-full h-full object-contain rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      ))}

      {isOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-3 sm:px-6">
          <div
            className="
              bg-white rounded-lg relative 
              w-full sm:w-[90%] md:w-[80%] lg:w-[70%]
              h-auto md:h-[70%]
              p-4 sm:p-6
            "
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              <MdCancel className="text-2xl sm:text-3xl" />
            </button>

            <div className="w-full h-full flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 h-[220px] sm:h-[280px] md:h-full flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain rounded-lg"
                  loading="eager"
                />
              </div>

              <div className="w-full md:w-1/2 h-auto md:h-full p-2 sm:p-4 flex items-start flex-col border">
                <h1 className="text-gray-700 font-medium text-sm lg:text-2xl sm:text-base leading-relaxed">
                  {selectedProject.title}
                </h1>

                <p className="text-gray-700 text-[8px] sm:text-base lg:text-[15px] leading-relaxed">
                  {selectedProject.description}
                </p>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 px-4 py-1 rounded-3xl text-white shadow-sm shadow-gray-300 mt-2"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default NextJS;