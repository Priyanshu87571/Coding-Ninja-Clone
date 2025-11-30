import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-semibold text-slate-50">404</h1>
      <p className="mt-2 text-sm text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        to="/"
        className="mt-4 text-xs font-semibold text-orange-400 hover:underline"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
