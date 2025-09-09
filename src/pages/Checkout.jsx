import React from "react";
import { useParams, Link } from "react-router-dom";
import { courses as sampleCourses } from "../data/courses";

const Checkout = () => {
  const { id } = useParams();
  const course = sampleCourses.find((c) => c.id.toString() === id);

  if (!course) {
    return (
      <div className="container py-5 text-center">
        <h3>الكورس غير موجود ❌</h3>
        <Link to="/courses" className="btn btn-primary mt-3">
          العودة إلى الكورسات
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ direction: "rtl" }}>
      <div className="row g-4">

        <div className="col-lg-7">
          <div className="card shadow-sm p-4">
            <h3 className="mb-4">إتمام الدفع</h3>

            <h5 className="mb-3">معلوماتك الشخصية</h5>
            <form>
              <div className="mb-3">
                <label className="form-label">الاسم الكامل</label>
                <input type="text" className="form-control" placeholder="أدخل اسمك الكامل" required />
              </div>
              <div className="mb-3">
                <label className="form-label">البريد الإلكتروني</label>
                <input type="email" className="form-control" placeholder="example@email.com" required />
              </div>

              <h5 className="mt-4 mb-3">معلومات الدفع</h5>
              <div className="mb-3">
                <label className="form-label">رقم البطاقة</label>
                <input type="text" className="form-control" placeholder="**** **** **** ****" required />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">تاريخ الانتهاء</label>
                  <input type="text" className="form-control" placeholder="MM/YY" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">CVV</label>
                  <input type="password" className="form-control" placeholder="***" required />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                إتمام الدفع
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card shadow-sm p-4">
            <h5 className="mb-3">ملخص الطلب</h5>
            <div className="d-flex align-items-center mb-3">
              <img
                src={course.image}
                alt={course.title}
                className="img-fluid rounded"
                style={{ width: "100px", height: "70px", objectFit: "cover" }}
              />
              <div className="ms-3">
                <h6 className="mb-1">{course.title}</h6>
                <small className="text-muted">{course.instructor}</small>
              </div>
            </div>

            <hr />

            <p>
              <strong>السعر:</strong> {course.price ? `${course.price} ج.م` : "مجاني"}
            </p>
            <p>
              <strong>المجموع:</strong>{" "}
              <span className="text-success fs-5">
                {course.price ? `${course.price} ج.م` : "مجاني"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
