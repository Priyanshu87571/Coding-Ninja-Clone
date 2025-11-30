import React from "react";

const defaultStats = [
  { label: "Learners", value: "100K+" },
  { label: "Courses", value: "60+" },
  { label: "Problems", value: "4000+" },
  { label: "Hiring partners", value: "200+" }
];

const StatsStrip = ({ stats = defaultStats }) => {
  return (
    <div className="mt-6 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-xs text-slate-300 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col">
          <span className="text-sm font-semibold text-slate-50">
            {stat.value}
          </span>
          <span className="text-[11px] text-slate-400">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsStrip;
