import React from "react";
import { Container, Navbar } from "react-bootstrap";

function UserNavbar(props) {
  console.log(props, 'props')
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">EasyHired</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNavbar;
