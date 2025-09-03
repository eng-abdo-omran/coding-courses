import { Container, Row, Col } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import "./css/HomeSection1.css";

const HomeSection1 = () => {
  return (
    <>
      <Container style={{ margin: "50px" }}>
        <Row>
          <Col style={{ textAlign: "left" }}>
            <video
              src="/videos/intro-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "450px",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            />
          </Col>
          <Col style={{ textAlign: "right" }}>
            <h1>المصدر العربي الاول لتعلم البرمجة باحترافية</h1>
            <p>
              نقدم لك افضل الدورات التعليمية في مجال البرمجة وتطوير الويب
              والتطبيقات والمزيد من المجالات التقنية الاخرى
            </p>
            <Link to="/courses" className="btn btn-primary btn-lg mt-3">
              ابدأ التعلم
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeSection1;
