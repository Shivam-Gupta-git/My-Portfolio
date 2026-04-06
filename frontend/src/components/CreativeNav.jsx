import React from 'react'

function CreativeNav({ activeTab, setActiveTab }) {
  const tabs = [
    { key: 'javascript',     label: 'JavaScript' },
    { key: 'react',          label: 'React' },
    { key: 'nextjs',         label: 'NextJS' },
    { key: 'fullstack',      label: 'FullStack' },
    { key: 'java',           label: 'Java' },
  ];

  return (
    <div className="w-full flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 mt-4 sm:mt-6 md:mt-8 overflow-x-auto hide-scrollbar">
      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 min-w-max bg-white rounded-full p-1 sm:p-1.5 border border-slate-200 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 rounded-full text-[9px] xs:text-xs sm:text-sm md:text-base font-medium cursor-pointer transition-all duration-200 whitespace-nowrap
              ${activeTab === tab.key
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CreativeNav