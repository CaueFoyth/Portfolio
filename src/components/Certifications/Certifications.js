import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationsCards from "./CertificationsCards";
import Particle from "../Particle";
import trader from "../../Assets/Projects/trader.jpg";
import refigure from "../../Assets/Projects/refigure.png";
import floodhelp from "../../Assets/Projects/floodhelp.png";
import NOAR from "../../Assets/Projects/NOAR.jpg";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationsCards
              imgPath={floodhelp}
              isBlog={false}
              title="FloodHelp"
              description="The idea of the project is to create a dApp to help flood victims through an online crowdfunding campaign, where users can log in with their MetaMask wallet and make donations via cryptocurrencies. The idea originated from an environmental catastrophe that occurred in Rio Grande do Sul, Brazil, in 2024. Technologies used: Smart contract with Solidity, FrontEnd with React.js and Next.js, and integration of the FrontEnd and inChain BackEnd with the Web3.js library."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
