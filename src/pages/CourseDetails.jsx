import React from "react";
import { useParams, Link } from "react-router-dom";
import { courses as sampleCourses } from "../data/courses";
import { useAuth } from "../context/useAuth";  // 👈 إضافة

const CourseDetails = () => {
  const { id } = useParams();
  const { user } = useAuth(); // 👈 جلب المستخدم الحالي
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

          <h5 className="mt-4">ماذا ستتعلم؟</h5>
          <ul>
            {course.outcomes?.length ? (
              course.outcomes.map((o, i) => <li key={i}>{o}</li>)
            ) : (
              <li>لا يوجد محتوى محدد</li>
            )}
          </ul>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4 className="mb-3">معلومات الكورس</h4>
            <p><strong>المحاضر:</strong> {course.instructor || "غير معروف"}</p>
            <p><strong>المدة:</strong> {course.duration || "غير محدد"}</p>
            <p><strong>المستوى:</strong> {course.level || "كل المستويات"}</p>
            <p><strong>التقييم:</strong> ⭐ {course.rating || "N/A"}</p>
            <p><strong>الطلاب:</strong> {course.students || 0}</p>
            <p><strong>السعر:</strong> {course.price ? `${course.price} ج.م` : "مجاني"}</p>

            <Link 
              to={user ? `/checkout/${course.id}` : "/login"} 
              className="btn btn-primary w-100"
            >
              اشترك الآن
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
