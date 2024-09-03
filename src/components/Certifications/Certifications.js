import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationsCards from "./CertificationsCards";
import Particle from "../Particle";
import blockchain from "../../Assets/Certificates/bfb.png";
import go from "../../Assets/Certificates/go.png";
import webweek from "../../Assets/Certificates/web3.png";
import django from "../../Assets/Certificates/django.png";
import tecnico from "../../Assets/Certificates/tecnico.png";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My main <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationsCards
              imgPath={blockchain}
              isBlog={false}
              title="Blockchain for Business: real applications and cases"
              description="This course covered: the various platforms that use blockchain, how block creation and mining work, several real-world use cases, understanding a methodology to start projects using blockchain, and learning how to implement it in real models."
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationsCards
              imgPath={go}
              isBlog={false}
              title="Go: Object Oriented"
              description="I've completed the course on Go! I built a local application from scratch, following the main conventions, gained practical experience with structs and explored the concept of composition over inheritance and encapsulation. This course deepened my understanding of the Go language, improving my ability to write clean, modular code by organizing it into packages. A big step forward in mastering the language developed by Google!"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationsCards
              imgPath={webweek}
              isBlog={false}
              title="Web3 Week"
              description="In this course, I learned how to develop a dApp using the following technologies for building the dApp: Smart contracts with Solidity, FrontEnd with React.js and Next.js, and integrating the FrontEnd and the in-chain BackEnd with the Web3.js library."
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationsCards
              imgPath={django}
              isBlog={false}
              title="API with Django 3: Django Rest Framework"
              description="Completed a course on developing APIs from scratch using Python! I learned how to work with models, serializers and views, and gained insights into building a solid architecture for Django Rest API projects. I also integrated Django Admin into my API and discovered how to create my own APIs with Django. A valuable experience for mastering API development with Python and Django!"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationsCards
              imgPath={tecnico}
              isBlog={false}
              title="Systems Development Technician"
              description="Completed at Senai, where I had my introduction to the world of programming and built my entire knowledge base."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
