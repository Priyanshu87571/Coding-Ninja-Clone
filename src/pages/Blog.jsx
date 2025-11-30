// Blog.jsx
import React from "react";
import PageContainer from "@/components/layout/PageContainer.jsx";
import SectionTitle from "@/components/common/SectionTitle.jsx";

const Blog = () => (
  <PageContainer>
    <SectionTitle
      eyebrow="Blog"
      title="Guides on DSA, development, and careers"
      subtitle="This is placeholder content. Replace with your own blog posts or CMS integration."
    />
    <p className="mt-4 text-sm text-slate-300">
      Coming soon...
    </p>
  </PageContainer>
);

export default Blog;
