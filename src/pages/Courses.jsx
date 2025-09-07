import React, { useState, useMemo } from "react";
import CourseCard from "../components/CourseCard";
import { courses as sampleCourses } from "../data/courses";

const Courses = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return sampleCourses.filter((c) => {
      const matchQuery =
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.short.toLowerCase().includes(query.toLowerCase());
      const matchCategory = category === "All" || c.category === category;
      return matchQuery && matchCategory;
    });
  }, [query, category]);

  const categories = ["All", ...new Set(sampleCourses.map((c) => c.category))];

  return (
    <>
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Courses</h2>
          <div className="d-flex gap-2">
            <input
              className="form-control"
              placeholder="Search courses..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          {filtered.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
