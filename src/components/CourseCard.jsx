import React from "react";

const CourseCard = ({ course, onOpen }) => {
  return (
    <>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card course-card h-100">
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
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text text-muted small">{course.short}</p>
            <div className="mt-auto d-flex justify-content-between align-items-center">
              <div>
                <span className="badge bg-secondary">{course.level}</span>
              </div>
              <div>
                <button
                  className="btn btn-outline-primary btn-sm me-2"
                  onClick={() => onOpen(course)}
                >
                  Open
                </button>
                <a
                  className="btn btn-primary btn-sm"
                  href={course.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enroll
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default CourseCard;
