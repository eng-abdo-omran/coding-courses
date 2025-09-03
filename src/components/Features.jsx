import { Container, Row, Col } from "react-bootstrap";
import { Code, Award, Users, Laptop } from "lucide-react";
import "./css/Features.css";

const features = [
  {
    icon: <Code size={40} />,
    title: "محتوى برمجي احترافي",
    description:
      "دورات عملية تغطي أحدث لغات وتقنيات البرمجة مع أمثلة ومشاريع تطبيقية.",
  },
  {
    icon: <Award size={40} />,
    title: "شهادات معتمدة",
    description: "عند إنهاء الدورة تحصل على شهادة تساعدك في بناء مسارك المهني.",
  },
  {
    icon: <Users size={40} />,
    title: "مجتمع داعم",
    description:
      "مجتمع من المتعلمين والمدرسين جاهزين لمساعدتك والإجابة عن أسئلتك.",
  },
  {
    icon: <Laptop size={40} />,
    title: "تعلم من أي مكان",
    description:
      "منصتنا متاحة 24/7 على جميع الأجهزة لتتعلم في أي وقت وأي مكان.",
  },
];

const Features = () => {
  return (
    <>
      <section className="features-section" id="features">
        <div className="features-bg">
          <Container>
            <h2 className="features-title text-center mb-5">مميزاتنا</h2>
            <Row>
              {features.map((feature, index) => (
                <Col md={6} lg={3} key={index} className="mb-4">
                  <div className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h5 className="feature-title">{feature.title}</h5>
                    <p className="feature-desc">{feature.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Features;
