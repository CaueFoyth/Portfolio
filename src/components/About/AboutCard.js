import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Cauê Marchi Foyth </span>
            from <span className="purple"> Joinville, Brazil.</span>
            <br />
            I currently work as a software developer at SchulzTech, where I integrate web systems with TPMS for truck fleets.
            <br />
            I'm studying Systems Analysis and Development at UniSenai.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
