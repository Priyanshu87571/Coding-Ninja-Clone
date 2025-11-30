import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-400">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <p>© {new Date().getFullYear()} CodeNinjas (demo). All rights reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-orange-400">Terms</button>
            <button className="hover:text-orange-400">Privacy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
