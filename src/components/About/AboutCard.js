import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankush Das </span>
            from <span className="purple"> Saarland , Germany.</span>
            <br />
            Aside from coding, there are a few other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening music
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "They ain't make me what I am, they just found me like this!"{" "}
          </p>
          <footer className="blockquote-footer">ovo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
