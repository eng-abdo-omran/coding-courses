import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/PopularCoursesSwiper.css";

import { Link } from "react-router-dom";   // 👈 اضفنا Link
import courses from "../data/swiper-courses";

const PopularCoursesSwiper = () => {
  return (
    <section className="popular-courses-section" id="popular-courses">
      <div className="container">
        <h2 className="section-title">الكورسات الأكثر شعبية</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="course-card">
                <img src={course.image} alt={course.title} />
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-footer">
                    {/* 👇 الزرار الجديد اللي يودّي على التفاصيل */}
                    <Link to={`/courses/${course.id}`} className="btn-enroll">
                      سجل الآن
                    </Link>
                    <span className="course-price">{course.price} ج.م</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularCoursesSwiper;
