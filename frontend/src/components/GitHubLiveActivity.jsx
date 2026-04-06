import React, { useEffect, useState, memo } from "react";
import { FaGithub, FaCodeBranch, FaClock } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const GitHubLiveActivity = memo(() => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Shivam-Gupta-git/events/public")
      .then(res => res.json())
      .then(data => {
        setEvents(data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <FaGithub className="text-2xl sm:text-3xl text-slate-700" />
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Live GitHub Activity</h2>
      </div>
      <div className="section-divider"></div>

      {/* Loader */}
      {loading && (
        <p className="text-slate-400 animate-pulse mt-4">
          Fetching recent activity...
        </p>
      )}

      {/* Activity List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="card-light p-4 sm:p-5 group"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaCodeBranch className="text-indigo-500" />
              <h3 className="font-semibold text-sm text-slate-700">
                {event.type.replace("Event", "")}
              </h3>
            </div>

            <p className="text-sm text-slate-500">
              Repo: <span className="font-medium text-slate-700">{event.repo.name}</span>
            </p>

            <div className="flex items-center gap-1 mt-2.5 text-xs text-slate-400">
              <FaClock />
              {new Date(event.created_at).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <a
          href="https://github.com/Shivam-Gupta-git"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          <FiExternalLink />
          Visit GitHub Profile
        </a>
      </div>
    </section>
  );
});

export default GitHubLiveActivity;