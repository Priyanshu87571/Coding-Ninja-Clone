// About.jsx
import React from "react";
import PageContainer from "@/components/layout/PageContainer.jsx";
import SectionTitle from "@/components/common/SectionTitle.jsx";

const About = () => (
  <PageContainer>
    <SectionTitle
      eyebrow="About"
      title="A modern way to learn coding"
      subtitle="Explain your mission, teaching philosophy, and how your platform is different here."
    />
    <p className="mt-4 text-sm text-slate-300">
      This is an educational demo clone built with React and Tailwind.
      Replace this text with your real story and values.
    </p>
  </PageContainer>
);

export default About;
