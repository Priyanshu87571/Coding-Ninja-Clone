import React from "react";

const problems = [
  {
    title: "Two Sum",
    difficulty: "Easy",
    topic: "Arrays",
    status: "Unattempted",
  },
  {
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topic: "Sliding Window",
    status: "In progress",
  },
  {
    title: "Reverse Linked List",
    difficulty: "Easy",
    topic: "Linked List",
    status: "Solved",
  },
  {
    title: "Merge Intervals",
    difficulty: "Medium",
    topic: "Sorting",
    status: "Unattempted",
  },
  {
    title: "LRU Cache",
    difficulty: "Hard",
    topic: "Design",
    status: "Unattempted",
  },
];

const difficultyColor = (diff) => {
  if (diff === "Easy") return "text-emerald-300 bg-emerald-900/40";
  if (diff === "Medium") return "text-amber-300 bg-amber-900/40";
  return "text-rose-300 bg-rose-900/40";
};

const statusColor = (status) => {
  if (status === "Solved") return "bg-emerald-500/10 text-emerald-300";
  if (status === "In progress") return "bg-amber-500/10 text-amber-300";
  return "bg-slate-800 text-slate-300";
};

const Practice = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-400">
          Coding practice
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-50">
          Sharpen your problem-solving
        </h1>
        <p className="mt-2 max-w-xl text-sm text-slate-400">
          Daily DSA problems with difficulty tags and topic-wise tracking. This
          is a static demo—hook it to your own problem database later.
        </p>
      </header>

      {/* Filters (UI only) */}
      <div className="mb-4 flex flex-wrap gap-3 text-xs">
        <button className="rounded-full bg-slate-800 px-3 py-1 text-slate-100">
          All
        </button>
        <button className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-orange-500 hover:text-orange-400">
          Easy
        </button>
        <button className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-orange-500 hover:text-orange-400">
          Medium
        </button>
        <button className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-orange-500 hover:text-orange-400">
          Hard
        </button>
        <button className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-orange-500 hover:text-orange-400">
          Arrays
        </button>
        <button className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-orange-500 hover:text-orange-400">
          Linked List
        </button>
      </div>

      {/* Problems list */}
      <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-xs">
        {problems.map((p) => (
          <div
            key={p.title}
            className="flex flex-col gap-2 border-b border-slate-800 pb-3 last:border-b-0 last:pb-0 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-sm font-medium text-slate-50">
                {p.title}
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Topic: {p.topic}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 md:justify-end">
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] ${difficultyColor(
                  p.difficulty
                )}`}
              >
                {p.difficulty}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] ${statusColor(
                  p.status
                )}`}
              >
                {p.status}
              </span>
              <button className="rounded-full border border-slate-700 px-3 py-1 text-[11px] text-slate-100 hover:border-orange-500 hover:text-orange-400">
                Solve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice;
