import React from "react";
import { FiDownload } from "react-icons/fi";

function CV() {
  return (
    <div className="w-full flex justify-start py-8 sm:py-10 px-6 sm:px-12 md:px-18 bg-slate-50">
      <a
        href="https://drive.google.com/uc?export=download&id=FILE_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-sm sm:text-base"
      >
        <FiDownload className="text-lg" />
        Download CV
      </a>
    </div>
  );
}

export default CV;