import React from "react";

const PageContainer = ({ children, className = "" }) => {
  return (
    <main className={`mx-auto max-w-6xl px-4 pt-8 pb-16 ${className}`}>
      {children}
    </main>
  );
};

export default PageContainer;
