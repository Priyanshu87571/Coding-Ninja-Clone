import React from "react";
import SectionTitle from "@/components/common/SectionTitle.jsx";
import CourseCard from "@/components/courses/CourseCard.jsx";
import { courses } from "@/data/courses.js";

const CourseGrid = () => {
  const featured = courses.slice(0, 6);

  return (
    <section className="mt-16">
      <SectionTitle
        eyebrow="Structured tracks"
        title="Guided learning paths for every stage"
        subtitle="From absolute beginner to interview-ready, pick the track that matches your current level and goals."
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  );
};

export default CourseGrid;
