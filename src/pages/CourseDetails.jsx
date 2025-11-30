import React from "react";
import { useParams, Link } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer.jsx";
import Button from "@/components/common/Button.jsx";
import { courses } from "@/data/courses.js";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <PageContainer>
        <p className="text-sm text-slate-300">
          Course not found. Go back to{" "}
          <Link to="/courses" className="text-primary hover:underline">
            all courses
          </Link>
          .
        </p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="grid gap-10 md:grid-cols-[2fr,1fr]">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-primary">
            {course.tag}
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-50">
            {course.title}
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            {course.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-300">
            <span>{course.level}</span>
            <span>•</span>
            <span>{course.duration}</span>
            <span>•</span>
            <span>{course.language}</span>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-300">
            <h2 className="text-sm font-semibold text-slate-50">
              What you&apos;ll learn
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[11px] text-slate-400">
              <li>Core concepts and problem-solving patterns</li>
              <li>Hands-on coding assignments and quizzes</li>
              <li>Projects to build a portfolio</li>
              <li>Interview-oriented practice problems</li>
            </ul>
          </div>
        </div>

        <aside className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-300">
          <p className="text-[11px] uppercase tracking-wide text-slate-400">
            Enrollment
          </p>
          <p className="text-sm font-semibold text-slate-50">
            Placement-focused, mentor-assisted program.
          </p>
          <p className="text-[11px] text-slate-400">
            This is a demo UI. Replace this with your actual pricing,
            schedule, and enrollment flow.
          </p>
          <Button className="w-full mt-2">Apply / Enroll</Button>
          <p className="text-[11px] text-slate-500">
            ★ {course.rating} ({course.ratingCount} ratings)
          </p>
        </aside>
      </div>
    </PageContainer>
  );
};

export default CourseDetails;
