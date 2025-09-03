import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import categories from "../data/swiper-categories";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/CategoriesSwiper.css";

const CategoriesSwiper = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">تصفح حسب المجالات</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="category-card">
                <img src={cat.icon} alt={cat.title} />
                <h3>
                  <Link to={cat.link} className="category-link">
                    {cat.title}
                  </Link>
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategoriesSwiper;
