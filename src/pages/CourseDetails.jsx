import React from "react";
import { useParams, Link } from "react-router-dom";
import { courses as sampleCourses } from "../data/courses";

const CourseDetails = () => {
  const { id } = useParams();
  const course = sampleCourses.find((c) => c.id.toString() === id);

  if (!course) {
    return (
      <div className="container py-5">
        <h3>Course not found</h3>
        <Link to="/courses" className="btn btn-primary mt-3">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8">
          <img
            src={course.image}
            alt={course.title}
            className="img-fluid rounded mb-4"
          />
          <h2>{course.title}</h2>
          <p className="text-muted">{course.category}</p>
          <p>{course.description || course.short}</p>

          <h5 className="mt-4">What you'll learn</h5>
          <ul>
            {course.outcomes?.length ? (
              course.outcomes.map((o, i) => <li key={i}>{o}</li>)
            ) : (
              <li>No outcomes listed</li>
            )}
          </ul>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4 className="mb-3">Course Info</h4>
            <p><strong>Instructor:</strong> {course.instructor || "Unknown"}</p>
            <p><strong>Duration:</strong> {course.duration || "N/A"}</p>
            <p><strong>Level:</strong> {course.level || "All Levels"}</p>
            <p><strong>Rating:</strong> ⭐ {course.rating || "N/A"}</p>
            <p><strong>Students:</strong> {course.students || 0}</p>
            <p><strong>Price:</strong> {course.price ? `${course.price} ج.م` : "Free"}</p>

            {/* الزرار الجديد */}
            <Link to="/login" className="btn btn-primary w-100">
              اشترك الآن
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
