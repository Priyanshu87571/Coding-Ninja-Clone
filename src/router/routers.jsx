import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import Courses from "@/pages/Courses.jsx";
import CourseDetails from "@/pages/CourseDetails.jsx";
import Practice from "@/pages/Practice.jsx";
import Blog from "@/pages/Blog.jsx";
import About from "@/pages/About.jsx";
import Contact from "@/pages/Contact.jsx";
import NotFound from "@/pages/NotFound.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/courses/:id" element={<CourseDetails />} />
    <Route path="/practice" element={<Practice />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
