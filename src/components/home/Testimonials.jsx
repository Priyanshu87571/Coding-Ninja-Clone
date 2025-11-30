import React from "react";
import SectionTitle from "@/components/common/SectionTitle.jsx";
import { testimonials } from "@/data/testimonials.js";

const Testimonials = () => {
  return (
    <section className="mt-16">
      <SectionTitle
        eyebrow="Student stories"
        title="Learners who switched from confusion to clarity"
        subtitle="These are placeholder testimonials. Replace them with your own student success stories."
        align="center"
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-300"
          >
            <p className="line-clamp-4 text-[11px] text-slate-300">
              “{t.quote}”
            </p>
            <div className="mt-3 flex items-center gap-2">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-semibold text-slate-50">
                  {t.name}
                </p>
                <p className="text-[11px] text-slate-400">
                  {t.role} @ {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
