import React, { useEffect, useState, memo } from "react";
import { FaGithub, FaCodeBranch, FaClock } from "react-icons/fa";

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
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaGithub className="text-3xl" />
        <h2 className="text-2xl font-bold">Live GitHub Activity</h2>
      </div>

      {/* Loader */}
      {loading && (
        <p className="text-gray-500 animate-pulse">
          Fetching recent activity...
        </p>
      )}

      {/* Activity List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaCodeBranch className="text-blue-500" />
              <h3 className="font-semibold text-sm">
                {event.type.replace("Event", "")}
              </h3>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              Repo: <span className="font-medium">{event.repo.name}</span>
            </p>

            <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
              <FaClock />
              {new Date(event.created_at).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 text-center">
        <a
          href="https://github.com/Shivam-Gupta-git"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition"
        >
          Visit GitHub Profile →
        </a>
      </div>
    </section>
  );
});

export default GitHubLiveActivity;