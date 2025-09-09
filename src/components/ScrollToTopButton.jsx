import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // مراقبة النزول في الصفحة
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // وظيفة الصعود لأعلى
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // عشان يطلع بهدوء
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            backgroundColor: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "18px",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
            transition: "0.3s ease-in-out",
          }}
        >
          UP ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
