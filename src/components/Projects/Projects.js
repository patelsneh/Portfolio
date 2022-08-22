import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Gym from "../../Assets/Projects/Gym.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import blog from "../../Assets/Projects/blog.png";
import taxi from "../../Assets/Projects/taxi.jpg";
import book from "../../Assets/Projects/book.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
        “There are three responses to a piece of design - yes, no, and WOW! Wow is the one to aim for” - Milton Glaser
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Demo Movie App"
              description="A Demo Movie Store which Uses the Redux and Axios library built on React to show the remote API Data Fetching and Routing."
              ghLink="https://github.com/patelsneh/Movie-App"
              demoLink="https://super-tiramisu-6fcc14.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Nursing Schedular"
              description="Developed an Auto Record Tracking System for the students of nursing department of university of Windsor. 
              A custom dashboard analysis where there is management of students of various semesters in different year pursuing their clinical trial at various hospital locations."
              ghLink="https://github.com/patelsneh/Nursing-Schedular-University-of-Windsor"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Biblophily Connect"
              description="Developed a web-based application that allows users to leave comments on books they've read as well as see what their friends have said about books, which they can subsequently add to their profile. Additionally, admin can view the report on which user influence the most."
              ghLink="https://github.com/zhra013/bibliophily"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gym}
              isBlog={false}
              title="CGS"
              description="Developed a system which provide website URL to clients on registering their gym in our system on rental basis and will get a personal panel to handle all its gym activities. It was a UDP based project."
              ghLink="https://github.com/yogeshgithup/CGS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taxi}
              isBlog={false}
              title="New York Taxi Data Analysis"
              description="Developed a data analysis project on New York taxi data in order to add value to the data and provide relevant insights for the firm to make business decisions."
              ghLink="https://github.com/patelsneh/Newyork_taxi_data_Analysis"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
