import React, { useEffect, useState, memo } from "react";
import { FaGithub, FaCodeBranch, FaFire, FaClock, FaStar, FaCode } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const GithubStatus = memo(() => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Shivam-Gupta-git/events/public")
      .then(res => res.json())
      .then(data => {
        setEvents(data.slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="w-full bg-[#f8fafc] py-16 relative overflow-hidden">
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12"
        >
          <span className="section-label group flex items-center gap-2">
            <FaGithub className="text-indigo-500 group-hover:rotate-12 transition-transform" />
            Open Source
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-4 mb-3 tracking-tight">
            GitHub Activity
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-[#64748b] text-base sm:text-lg mb-8">
            A real-time overview of my open-source contributions, repositories, and daily development consistency.
          </p>
          <a
            href="https://github.com/Shivam-Gupta-git"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex shadow-lg shadow-indigo-500/20"
          >
            Follow on GitHub <FiExternalLink />
          </a>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Left Column (Stats & Graph) */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:gap-8">
            
            {/* Contribution Graph */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card p-6 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(79,70,229,0.06)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 text-orange-500 flex items-center justify-center">
                    <FaFire className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f172a] text-xl">Contributions</h3>
                    <p className="text-slate-500 text-sm">Past year activity</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-100 flex items-center justify-center overflow-x-auto hide-scrollbar w-full relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-transparent to-[#f8fafc] w-full h-full pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <img
                  src="https://ghchart.rshah.org/4f46e5/Shivam-Gupta-git"
                  alt="GitHub Contributions Graph"
                  className="w-full mix-blend-darken filter opacity-90 group-hover:opacity-100 transition-opacity min-w-[600px] object-cover"
                />
              </div>
            </motion.div>

            {/* GitHub Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="premium-card p-6 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(79,70,229,0.06)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-bl-full pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-500 flex items-center justify-center">
                  <FaStar className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] text-xl">Repository Stats</h3>
                  <p className="text-slate-500 text-sm">Global language & star metrics</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 relative z-10">
                <img
                  src="https://github-readme-stats-sigma-five.vercel.app/api?username=Shivam-Gupta-git&show_icons=true&title_color=0f172a&icon_color=4f46e5&text_color=64748b&bg_color=ffffff&hide_border=true&border_radius=16"
                  alt="GitHub Stats"
                  className="w-full max-w-[400px] drop-shadow-sm hover:drop-shadow-md transition-all hover:-translate-y-1"
                />
                <img
                  src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=Shivam-Gupta-git&layout=compact&title_color=0f172a&text_color=64748b&bg_color=ffffff&hide_border=true&border_radius=16"
                  alt="Top Languages"
                  className="w-full max-w-[300px] drop-shadow-sm hover:drop-shadow-md transition-all hover:-translate-y-1"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column (Live Activity Feed) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 premium-card bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(79,70,229,0.06)] transition-all duration-300 flex flex-col h-full"
          >
            <div className="p-6 sm:p-8 border-b border-slate-100">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center">
                  <FaCode className="text-xl" />
                </div>
                <h3 className="font-bold text-[#0f172a] text-xl">Live Feed</h3>
              </div>
              <p className="text-slate-500 text-sm">Most recent push events</p>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col gap-4 relative">
              {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-3 border-slate-200 border-t-indigo-500 rounded-full animate-spin"></div>
                    <span className="text-sm font-medium text-slate-400">Syncing...</span>
                  </div>
                </div>
              ) : (
                events.map((event, index) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-indigo-100 hover:shadow-[0_4px_12px_rgb(79,70,229,0.05)] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FaCodeBranch className="text-indigo-400 group-hover:text-indigo-600 transition-colors" />
                      <h4 className="font-bold text-sm text-[#0f172a]">
                        {event.type.replace("Event", "")}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-500 truncate mb-3" title={event.repo.name}>
                      <span className="font-medium text-slate-700">{event.repo.name.split('/')[1]}</span>
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-white w-max px-2 py-1 rounded-md border border-slate-100">
                      <FaClock />
                      {new Date(event.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' })}
                    </div>
                  </div>
                ))
              )}

              {!loading && events.length === 0 && (
                <div className="flex-1 flex flex-col items-center justify-center text-slate-400 gap-2">
                  <FaGithub className="text-4xl text-slate-200" />
                  <p className="text-sm border border-slate-100 bg-slate-50 px-4 py-2 rounded-full">No recent activity</p>
                </div>
              )}
            </div>
            
          </motion.div>

        </div>
      </section>
    </div>
  );
});

export default GithubStatus;