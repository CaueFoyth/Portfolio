import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import trader from "../../Assets/Projects/trader.jpg";
import refigure from "../../Assets/Projects/refigure.png";
import floodhelp from "../../Assets/Projects/floodhelp.png";
import NOAR from "../../Assets/Projects/NOAR.jpg";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={floodhelp}
              isBlog={false}
              title="FloodHelp"
              description="The idea of the project is to create a dApp to help flood victims through an online crowdfunding campaign, where users can log in with their MetaMask wallet and make donations via cryptocurrencies. The idea originated from an environmental catastrophe that occurred in Rio Grande do Sul, Brazil, in 2024. Technologies used: Smart contract with Solidity, FrontEnd with React.js and Next.js, and integration of the FrontEnd and inChain BackEnd with the Web3.js library."
              ghLink="https://github.com/CaueFoyth/FloodHelp"
              demoLink="https://flood-help-gray.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NOAR}
              isBlog={false}
              title="NOAR"
              description="The goal is to facilitate the routine for volunteer firefighters of NOAR. The purpose of the application is to enable the complete recording of incidents, including victim details, location, injuries, and everything that needs to be documented. Additionally, administrators can view, edit, filter, and delete incidents. Technologies used: Flask, Scss, JS, Bootstrap and MySQL"
              ghLink="https://github.com/CaueFoyth/NOAR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={refigure}
              isBlog={false}
              title="RE:Figure"
              description="E-commerce with the goal of selling action figures printed with filaments made from recycled plastic. My first project in the Senai Systems Development technical course, it was essential for the development of my knowledge in the field! Technologies used: PHP, Bootstrap and MySQL"
              ghLink="https://github.com/CaueFoyth/REfigure"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trader}
              isBlog={false}
              title="In development..."
              description="Platform for automating cryptocurrency trades through the Binance API. Technologies being used: WebSockets, Express.js, React.js, MySQL and Sequelize."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
