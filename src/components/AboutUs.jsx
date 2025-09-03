import { Container, Row, Col } from "react-bootstrap";
import "./css/AboutUs.css";
import React from "react";

const AboutUs = () => {
  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="/images/coding-developer-img.jpg"
              alt="About Us"
              className="about-img"
            />
          </Col>
          <Col md={6} style={{ textAlign: "right" }}>
            <h2 className="about-title">من نحن</h2>
            <p className="about-text">
              نحن منصة تعليمية عربية متخصصة في مجال البرمجة وتطوير الويب،
              نقدم دورات احترافية وعملية تساعدك على بناء مستقبل مهني قوي في
              مجالات التقنية المختلفة.
            </p>
            <p className="about-text">
              هدفنا أن نكون المصدر العربي الأول لتعليم البرمجة باحترافية من
              خلال محتوى عالي الجودة، أمثلة عملية، ومشاريع تطبيقية.
            </p>
            <button className="btn btn-primary btn-lg mt-3">
              اعرف المزيد
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
