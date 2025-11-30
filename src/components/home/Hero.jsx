import React from "react";
import Button from "@/components/common/Button.jsx";
import StatsStrip from "@/components/common/StatsStrip.jsx";
import heroIllustration from "@/assets/hero-illustration.svg";

const Hero = () => {
  return (
    <section className="grid gap-10 md:grid-cols-2 md:items-center">
      {/* Left content */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 text-[11px] text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Live + self-paced coding courses</span>
        </div>

        <h1 className="mt-4 text-2xl font-semibold leading-tight text-slate-50 md:text-4xl">
          Become a{" "}
          <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
            job-ready developer
          </span>{" "}
          with structured learning & practice.
        </h1>

        <p className="mt-3 text-sm text-slate-400 md:text-base">
          Master DSA, development, and interview prep with a guided,
          project-based curriculum and daily practice problems.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button>Explore courses</Button>
          <Button variant="outline">Try practice for free</Button>
          <p className="text-[11px] text-slate-500">
            No credit card required.
          </p>
        </div>

        <StatsStrip />
      </div>

      {/* Right illustration */}
      <div className="relative">
        <div className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.06),_transparent_60%)]" />
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-xl">
          <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
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
                <p className="font-medium text-slate-100">
                  Arrays & Hashing
                </p>
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

          <img
            src={heroIllustration}
            alt="Coding dashboard"
            className="mt-3 w-full rounded-2xl border border-slate-800 bg-slate-950/50 p-3"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
