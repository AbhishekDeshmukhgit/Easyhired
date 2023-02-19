import React from "react";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function SetRole() {
  return (
    <div className="text-center">
      <Container className="d-flex justify-content-center mt-5">
        <h1>SELECT YOUR ROLE</h1>
      </Container>
      You can change your role afterwards* <br />
      <br />
      <Container className="d-flex justify-content-center card-container">
        <Link to="/post" style={{ textDecoration: 'none' }}>
          <Card
            bg="dark"
            key="dark"
            text="light"
            style={{ width: "18rem" }}
            className="mb-2 myCard"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title> Job Seeker </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/giveJob" style={{ textDecoration: 'none' }}>
          <Card
            bg="dark"
            key="dark"
            text="light"
            style={{ width: "18rem" }}
            className="mb-2 myCard"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title> Job Provider </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        {/* <Link to="/findJob">
          <Button variant="dark">Job seeker</Button>
        </Link>
        <Link to="/giveJob">
          <Button variant="dark">Job provider</Button>
        </Link> */}
      </Container>
    </div>
  );
}

export default SetRole;
