import React, { useState, Suspense, lazy, memo } from "react";
import CreativeNav from "./CreativeNav";
import { motion } from "framer-motion";

const JavaScript = lazy(() => import("../pages/JavaScript"));
const React_Page = lazy(() => import("../pages/React_Page"));
const NextJS = lazy(() => import("../pages/NextJS"));
const FullStack = lazy(() => import("../pages/FullStack"));
const Java = lazy(() => import("../pages/Java"));

const ImageCards = memo(function ImageCards() {
  const [activeTab, setActiveTab] = useState("javascript");

  const renderContent = () => {
    switch (activeTab) {
      case "javascript":     return <JavaScript/>;
      case "react":          return <React_Page/>;
      case "nextjs":         return <NextJS/>;
      case "fullstack":      return <FullStack/>;
      case "java":           return <Java/>;
      default:               return <JavaScript/>;
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] py-24 overflow-hidden relative">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-2xl mb-10"
        >
          <span className="section-label">Tech Stack</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-4 mb-3 tracking-tight">
            All in a single creative suite
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-[#64748b] text-base sm:text-lg">
            A comprehensive set of modern technologies powering everything from responsive frontend interfaces to robust backend architectures.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full relative z-20"
        >
          <CreativeNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </motion.div>

        {/* Selected Tab Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mt-10 sm:mt-12 group"
        >
          <div className="premium-card p-4 sm:p-6 lg:p-8 min-h-[400px] w-full flex items-center justify-center bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] hover:shadow-[0_20px_40px_rgb(79,70,229,0.06)] transition-all duration-500">
            <Suspense fallback={
              <div className="flex flex-col items-center justify-center min-h-[300px] w-full gap-4">
                <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                <div className="text-indigo-600 font-semibold text-sm animate-pulse">Loading suite...</div>
              </div>
            }>
              {renderContent()}
            </Suspense>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default ImageCards;
