import React, { memo } from "react";
import { FaGithub, FaCodeBranch, FaFire } from "react-icons/fa";

const GithubStatus = memo(() => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaGithub className="text-3xl text-gray-800 dark:text-white" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          GitHub Activity
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Contribution Graph */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm shadow-gray-600 p-4 hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-3">
            <FaFire className="text-orange-500" />
            <h3 className="font-semibold text-gray-700 dark:text-gray-200">
              Contribution Graph
            </h3>
          </div>
          <img
            src="https://ghchart.rshah.org/Shivam-Gupta-git"
            alt="GitHub Contributions"
            className="w-full rounded-lg h-30"
          />
        </div>

        {/* GitHub Stats */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm shadow-gray-600 p-4 hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-3">
            <FaCodeBranch className="text-blue-500" />
            <h3 className="font-semibold text-gray-700 dark:text-gray-200">
              GitHub Stats
            </h3>
          </div>
          <img
            src="https://github-readme-stats-sigma-five.vercel.app/api?username=Shivam-Gupta-git&show_icons=true&theme=react&hide_border=true"
            alt="GitHub Stats"
            className="w-full rounded-lg"
          />
        </div>

      </div>
    </section>
  );
});

export default GithubStatus;