import React from "react";
import { Link } from "react-router-dom";
import "./css/CourseCard.css";

const CourseCard = ({ course }) => {
  return (
    <>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card course-card h-100 shadow-sm">
          {course.image ? (
            <img
              src={course.image}
              alt={course.title}
              className="card-img-top"
              style={{ height: 160, objectFit: "cover" }}
            />
          ) : (
            <div style={{ height: 160, background: "#e9ecef" }}></div>
          )}

          <div className="card-body d-flex flex-column">

            <h5 className="card-title course-title">{course.title}</h5>
            <p className="card-text text-muted small course-des">
              {course.short}
            </p>


            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="badge bg-secondary">{course.level}</span>
              <span className="course-price">
                {course.price ? `${course.price} ج.م` : "Free"}
              </span>
            </div>


            <div className="mt-auto d-flex justify-content-between">
              <Link
                to={`/courses/${course.id}`}
                className="btn btn-outline-primary"
              >
                Open
              </Link>
              <Link to={`/courses/${course.id}`} className="btn btn-primary">
                Enroll
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
