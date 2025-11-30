import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-300 transition hover:border-primary/80 hover:bg-slate-900/80"
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-300">
          {course.tag}
        </span>
        <span className="text-[11px] text-slate-400">
          {course.level} • {course.language}
        </span>
      </div>
      <h3 className="text-sm font-semibold text-slate-50">
        {course.title}
      </h3>
      <p className="mt-1 line-clamp-2 text-[11px] text-slate-400">
        {course.description}
      </p>

      <div className="mt-4 flex items-center justify-between text-[11px]">
        <span>{course.duration}</span>
        <span className="text-slate-400">{course.projects} projects</span>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-slate-800 pt-3 text-[11px]">
        <span className="font-semibold text-emerald-300">
          {course.placementLabel}
        </span>
        <span className="text-slate-400">
          ★ {course.rating} ({course.ratingCount})
        </span>
      </div>
    </Link>
  );
};

export default CourseCard;
