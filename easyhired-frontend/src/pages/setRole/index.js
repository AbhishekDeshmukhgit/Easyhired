import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function SetRole() {
  return (
    <Container
      className="d-flex justify-content-center"
    >
      <Link to="/findJob">
        <Button variant="primary">Job seeker</Button>
      </Link>
      <Link>
        <Button variant="primary">Job provider</Button>
      </Link>
    </Container>
  );
}

export default SetRole;
