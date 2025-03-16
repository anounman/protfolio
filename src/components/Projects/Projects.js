import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

import ml from "../../Assets/Projects/a.png";
import dating from "../../Assets/Projects/b.png";
import wp from "../../Assets/Projects/c.png";
import cvGen from "../../Assets/Projects/cv_gen.png";
import dilivery from "../../Assets/Projects/dilivery.png";
import halloween from "../../Assets/Projects/halloween.png";
import hirred from "../../Assets/Projects/hirred.png";
import typetourney from "../../Assets/Projects/typetourney.png";


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
              imgPath={typetourney}
              isBlog={false}
              title="TypeTourney - A Multiplayer Typing Race Game! "
              description="a fun little multiplayer typing race app where you can challenge friends to see who types fastest!What's Typeo?join a room, share the code with friends, and race to type a given passage. The coolest part? You can see everyone's cursors moving in real-time as they type - watching your friend's cursor zoom past yours (or fall behind) adds that competitive edge that makes it addictive!Even you can practice your typing skill offline also"
              link="https://github.com/anounman/typetourney"
              website="https://typetourney.vercel.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={hirred}
              isBlog={false}
              title="Hirrd - Job Portal Application"
              description="Hirrd is a modern job portal application that connects job seekers with employers. The platform enables companies to post job listings and candidates to search and apply for positions that match their skills and interests."
              link="https://github.com/anounman/Full-Stack-Job-Portal"
              website="https://full-stack-job-portal.vercel.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={cvGen}
              isBlog={false}
              title="ATS-Friendly CV Generator"
              description="An AI-powered tool that analyzes your existing CV and job descriptions to generate LaTeX code for ATS-optimized resumes. The generated LaTeX code can be compiled into a PDF using Overleaf."
              link="https://github.com/anounman/ATS-Friendly-Resume-Maker"
              websit="https://ats-friendly-resume-maker.streamlit.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={halloween}
              isBlog={false}
              title="Responsive Halloween Website"
              description="It's a responsive Halloween website built using HTML, CSS, and JavaScript to showcase the the htm and css knowladge. It's a simple website with some animations and responsive design."
              link="https://github.com/anounman/Halloween-Website"
              websit="https://anounman.github.io/Halloween-Website/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={dilivery}
              isBlog={false}
              title="Responsive Website Delivery"
              description="It's a responsive Delivery website built using HTML, CSS, and JavaScript to showcase the the htm and css knowladge. It's a simple website with some animations and responsive design."
              link="https://github.com/anounman/Responsive-Website-Delivery"
              websit="https://anounman.github.io/Responsive-Website-Delivery/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Gym Gude Using ML and Flutter"
              description="ML flutter project it use image processing to detect postion and count your workout
              "
              link="https://github.com/anounman/Flutter-ML-Gym-Guide"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={dating}
              isBlog={false}
              title="ReLation"
              description="It's a dating app where we carefully make matches. We are here to make our generation best by giving them their best partners. Now we are just making best matches but gradually our app will provide many more advanced advantages that are not given by any other dating apps."
              link="https://github.com/anounman/ReLatio"
              website="https://play.google.com/store/apps/details?id=com.in.relation.app"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={wp}
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
