import React from "react";

const base =
  "inline-flex items-center justify-center rounded-full px-4 py-1.5 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950";

const Button = ({ variant = "primary", children, className = "", ...rest }) => {
  const variants = {
    primary:
      "bg-primary text-slate-950 hover:bg-primary-dark focus:ring-primary",
    outline:
      "border border-slate-600 text-slate-100 hover:border-slate-400 focus:ring-slate-500",
    ghost: "text-slate-300 hover:bg-slate-800/60 focus:ring-slate-600"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
