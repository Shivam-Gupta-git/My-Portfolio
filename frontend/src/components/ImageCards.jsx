import React, { useState, Suspense, lazy, memo } from "react";
import CreativeNav from "./CreativeNav";

// Lazy load page components to improve initial load performance
const JavaScript = lazy(() => import("../pages/JavaScript"));
const React_Page = lazy(() => import("../pages/React_Page"));
const NextJS = lazy(() => import("../pages/NextJS"));
const FullStack = lazy(() => import("../pages/FullStack"));
const Java = lazy(() => import("../pages/Java"));

const ImageCards = memo(function ImageCards() {
  const [activeTab, setActiveTab] = useState("photoshop");

  // Determine which component to render based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "photoshop":
        return <JavaScript/>;
      case "illustrator":
        return <React_Page/>;
      case "premiere-pro":
        return <NextJS/>;
      case "after-effects":
        return <FullStack/>;
      case "corel-draw":
        return <Java/>;
      default:
        return <JavaScript/>;
    }
  };

  return (
    <div className="ImageCards-container min-h-[350px] sm:min-h-[400px] md:h-[500px] w-full flex items-center justify-center mt-4 sm:mt-6 md:mt-10 px-3 sm:px-4">
      <div className="h-full w-full sm:w-[95%] md:w-[90%] p-2 sm:p-3 md:p-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">All in a single creative suite</h1>

        <CreativeNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        ></CreativeNav>

        <div className="mt-3 sm:mt-4 md:mt-6">
          <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]"><div className="text-gray-400">Loading...</div></div>}>
            {renderContent()}
          </Suspense>
        </div>
      </div>
    </div>
  );
});

export default ImageCards;
