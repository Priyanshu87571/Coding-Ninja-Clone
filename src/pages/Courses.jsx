import React from "react";

const courseData = [
  {
    tag: "DSA",
    title: "Data Structures & Algorithms in C++",
    level: "Beginner → Advanced",
    duration: "5–6 months",
    projects: 5,
    rating: "4.8",
  },
  {
    tag: "DSA",
    title: "Data Structures & Algorithms in Java",
    level: "Beginner → Advanced",
    duration: "5–6 months",
    projects: 5,
    rating: "4.7",
  },
  {
    tag: "Development",
    title: "Full-Stack Web Dev with MERN",
    level: "Beginner → Intermediate",
    duration: "4–5 months",
    projects: 6,
    rating: "4.9",
  },
  {
    tag: "Development",
    title: "Modern Frontend with React",
    level: "Beginner → Intermediate",
    duration: "3–4 months",
    projects: 4,
    rating: "4.6",
  },
  {
    tag: "Programming",
    title: "Programming Essentials with Python",
    level: "Absolute Beginner",
    duration: "2–3 months",
    projects: 3,
    rating: "4.7",
  },
  {
    tag: "Advanced",
    title: "System Design Interview Prep",
    level: "Advanced",
    duration: "2–3 months",
    projects: 6,
    rating: "4.8",
  },
];

const Courses = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-400">
          All courses
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-50">
          Choose your learning path
        </h1>
        <p className="mt-2 max-w-xl text-sm text-slate-400">
          Structured tracks for DSA, web development, and interview prep. This
          is demo content—you can connect it to a backend later.
        </p>
      </header>

      <div className="mb-4 flex flex-wrap gap-3 text-xs">
        <button className="rounded-full bg-slate-800 px-3 py-1 text-slate-100">
          All
        </button>
        <button className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-orange-500 hover:text-orange-400">
          DSA
        </button>
        <button className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-orange-500 hover:text-orange-400">
          Development
        </button>
        <button className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-orange-500 hover:text-orange-400">
          Beginner friendly
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courseData.map((course) => (
          <div
            key={course.title}
            className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-300 transition hover:border-orange-500/80 hover:bg-slate-900/80"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-300">
                {course.tag}
              </span>
              <span className="text-[11px] text-slate-400">
                {course.level}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-slate-50">
              {course.title}
            </h3>
            <p className="mt-3 text-[11px] text-slate-400">
              {course.projects} real-world projects • {course.duration}
            </p>

            <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3 text-[11px]">
              <span className="font-semibold text-emerald-300">
                Placement-focused
              </span>
              <span className="text-slate-400">★ {course.rating}</span>
            </div>

            <button className="mt-3 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-semibold text-slate-950 hover:bg-orange-600">
              View details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
