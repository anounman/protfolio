import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tasmeal from "../../Assets/Projects/b.png";
import ai from "../../Assets/Projects/ai.png";
import codesync from "../../Assets/Projects/a.png";
import dict from "../../Assets/Projects/c.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={codesync}
              isBlog={false}
              title="Gym Gude Using ML and Flutter"
              description="ML flutter project it use image processing to detect postion and count your workout
              "
              link="https://github.com/anounman/Flutter-ML-Gym-Guide"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tasmeal}
              isBlog={false}
              title="ReLation"
              description="It's a dating app where we carefully make matches. We are here to make our generation best by giving them their best partners. Now we are just making best matches but gradually our app will provide many more advanced advantages that are not given by any other dating apps."
              link="https://github.com/anounman/ReLatio"
              website="https://play.google.com/store/apps/details?id=com.in.relation.app"
            />
          </Col>

          {/* <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="AI New Reader"
              description="We have used React Js to design the app. This app is designed for web users. AI New Reader is a platform through which you can search latest news by your voice command. You can also open specific news by giving a command."
              link="https://github.com/rht-singh/A.I-news.git"
            />
          </Col> */}

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={dict}
              isBlog={false}
              title="WhatsApp Clone"
              description="This is a simple whatsapp clone built using react and use firebase a backend. And it use firebase google authenticator for login. You can login with google in it."
              link="https://github.com/anounman/whatsapp_clone"
              website="https://reactwpc.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
