import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="footer-brand">
            <h3 className="footer-logo">Coding<span>developer</span></h3>
            <p>
              منصتنا العربية الأولى لتعلم البرمجة باحترافية من خلال دورات عملية 
              ومشاريع تطبيقية تساعدك على دخول سوق العمل بثقة.
            </p>
          </Col>

          <Col md={4} className="footer-links">
            <h5>روابط سريعة</h5>
            <ul>
              <li>
                <NavLink className="nav-link" to="/">
                  الصفحة الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/courses">
                  الدورات
                </NavLink>
              </li>
              <li>
                <a href="#about-us" className="nav-link">
                  من نحن
                </a>
              </li>
              <li>
                <NavLink className="nav-link" to="/login">
                  تسجيل الدخول
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/register">
                  تسجيل
                </NavLink>
              </li>
            </ul>
          </Col>

          <Col md={4} className="footer-social">
            <h5>تابعنا</h5>
            <div className="social-icons">
              <a href="#"><Facebook size={22} /></a>
              <a href="#"><Twitter size={22} /></a>
              <a href="#"><Linkedin size={22} /></a>
              <a href="#"><Youtube size={22} /></a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center footer-bottom">
            <p>© {new Date().getFullYear()} Abdulrahman Omran - جميع الحقوق محفوظة</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
