import React from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/courses", label: "Courses" },
  { path: "/practice", label: "Practice" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-sm font-bold text-slate-950">
            CN
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-50">
              CodeNinjas
            </span>
            <span className="text-[11px] text-slate-400">
              Learn • Practice • Get hired
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `transition hover:text-orange-400 ${
                  isActive ? "text-orange-400" : "text-slate-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-200 hover:border-slate-500">
            Login
          </button>
          <button className="rounded-full bg-orange-500 px-4 py-1.5 text-xs font-semibold text-slate-950 hover:bg-orange-600">
            Start for free
          </button>
        </div>

        {/* Mobile placeholder */}
        <button className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-2 py-1 text-xs text-slate-200 md:hidden">
          Menu
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
