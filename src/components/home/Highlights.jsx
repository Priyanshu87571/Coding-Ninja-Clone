import React from "react";
import SectionTitle from "@/components/common/SectionTitle.jsx";

const items = [
  {
    title: "Structured roadmap",
    body: "No more random tutorials. Follow a progression designed around core concepts, projects, and interview prep."
  },
  {
    title: "Practice + mentorship",
    body: "Daily problems, code reviews, and live sessions so you never stay stuck for too long."
  },
  {
    title: "Job-oriented outcome",
    body: "Build a solid portfolio and prepare for tech interviews with resume + mock interview guidance."
  }
];

const Highlights = () => {
  return (
    <section className="mt-16">
      <SectionTitle
        eyebrow="Why this platform"
        title="Learning that actually sticks"
        subtitle="Combine video content with hands-on coding, structured practice, and real-world projects."
      />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-300"
          >
            <h3 className="text-sm font-semibold text-slate-50">
              {item.title}
            </h3>
            <p className="mt-2 text-[11px] text-slate-400">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
