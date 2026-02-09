import React from "react";
import { FiDownload } from "react-icons/fi";

function CV() {
  return (
    <div className="w-full flex justify-start py-10 px-18">
      <a
        href="https://drive.google.com/uc?export=download&id=FILE_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center gap-2
          px-7 py-3 rounded-xl
          bg-white/10 backdrop-blur-md
          border border-white/20
          text-white font-medium
          hover:bg-white/20
          transition-all duration-300
        "
      >
        <FiDownload />
        Download CV
      </a>
    </div>
  );
}

export default CV;