import React from "react";

const SectionTitle = ({ eyebrow, title, subtitle, align = "left" }) => {
  const alignment = {
    left: "items-start text-left",
    center: "items-center text-center"
  }[align];

  return (
    <div className={`flex flex-col gap-1 ${alignment}`}>
      {eyebrow && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-xs text-slate-400 md:text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
