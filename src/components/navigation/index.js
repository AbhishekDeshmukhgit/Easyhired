import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Image,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import darkModeIcon from "../../assets/icons/dark-mode.png";
import './style.css'

function Navigation(props) {
  // console.log(siteTheme, "siteTheme");

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid style={{ fontSize: "20px" }}>
        <LinkContainer to="/" style={{ fontSize: "25px" }}>
          <Navbar.Brand href="#">EasyHired</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://github.com/AbhishekDeshmukhgit/Easyhired">GitHub</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          {/* <Form>
            <Form.Check type="switch" variant="dark" />
          </Form> */}
          <div>
            <Image
            className="DarkMode"
              src={darkModeIcon}
              style={{ float: "right", marginRight: "10px" }}
              width={"7%"}
            />
          </div>
          {/* {isLoggedIn ? (
            <Navbar.Text>
              Signed in as: <a href="#login">{props.username}</a>
            </Navbar.Text>
          ) : (
            ""
          )} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
