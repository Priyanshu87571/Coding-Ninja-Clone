import React from "react";

const Home = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 text-[11px] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Live + self-paced coding courses</span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
            Become a{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent">
              job-ready developer
            </span>{" "}
            with structured learning & practice.
          </h1>

          <p className="mt-3 text-sm text-slate-400 md:text-base">
            Master DSA, development, and interview prep with a guided,
            project-based curriculum and daily practice problems.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
            <button className="rounded-full bg-orange-500 px-4 py-1.5 font-semibold text-slate-950 hover:bg-orange-600">
              Explore courses
            </button>
            <button className="rounded-full border border-slate-700 px-4 py-1.5 font-semibold text-slate-100 hover:border-slate-500">
              Try practice for free
            </button>
            <span className="text-slate-500">No credit card required.</span>
          </div>

          <div className="mt-6 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-xs text-slate-300 sm:grid-cols-4">
            <div>
              <p className="text-sm font-semibold text-slate-50">100K+</p>
              <p className="text-[11px] text-slate-400">Learners</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-50">60+</p>
              <p className="text-[11px] text-slate-400">Courses</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-50">4000+</p>
              <p className="text-[11px] text-slate-400">Problems</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-50">200+</p>
              <p className="text-[11px] text-slate-400">Hiring partners</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-xl">
          <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-xs">
            <div>
              <p className="text-[11px] text-slate-400">Today&apos;s target</p>
              <p className="text-sm font-semibold text-slate-50">
                3 Problems • 1 Code review
              </p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
              Streak: 7 days 🔥
            </span>
          </div>

          <div className="mt-4 space-y-3 text-xs">
            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2">
              <div>
                <p className="font-medium text-slate-100">Arrays & Hashing</p>
                <p className="text-[11px] text-slate-400">
                  24 / 30 problems completed
                </p>
              </div>
              <span className="text-[11px] text-emerald-300">80% done</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2">
              <div>
                <p className="font-medium text-slate-100">
                  Full-stack MERN project
                </p>
                <p className="text-[11px] text-slate-400">
                  Inventory dashboard — Sprint 2
                </p>
              </div>
              <span className="text-[11px] text-amber-300">In progress</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
