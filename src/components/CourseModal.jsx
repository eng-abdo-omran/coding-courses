import React from "react";

const CourseModal = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <>
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        role="dialog"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{course.title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>{course.short}</p>
              <ul>
                <li>Level: {course.level}</li>
                <li>Lessons: {course.lessons}</li>
                <li>Duration: {course.duration}</li>
                <li>Rating: {course.rating}</li>
              </ul>
            </div>
            <div className="modal-footer">
              <a
                className="btn btn-primary"
                href={course.link}
                target="_blank"
                rel="noreferrer"
              >
                Go to course
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default CourseModal;
