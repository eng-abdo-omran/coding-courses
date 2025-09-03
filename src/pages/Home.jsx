import HomeSection1 from "../components/HomeSection1";
import AboutUs from "../components/AboutUs";
import Features from "../components/Features";
import PopularCoursesSwiper from "../components/PopularCoursesSwiper";
import CategoriesSwiper from "../components/CategoriesSwiper";
const Home = () => {
  return (
    <>
        <header className="py-5 bg-white shadow-sm">
          <div className="container text-center">
            <HomeSection1 />
          </div>
        </header>

        <PopularCoursesSwiper />

        <CategoriesSwiper />

        <Features />

        <section id="about-us" name="about-us">
          <AboutUs />
        </section>
    </>
  );
};

export default Home;
