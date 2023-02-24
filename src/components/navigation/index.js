import React from "react";
import { getAuth, signOut } from "firebase/auth";
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
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Navigation(props) {
  // console.log(siteTheme, "siteTheme");
  const navigate=useNavigate()
  const location =useLocation()
  const isLoginPage = location.pathname === "/";

  return (
    !isLoginPage &&(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid style={{ fontSize: "20px" }}>
        <LinkContainer to="/findJob" style={{ fontSize: "25px" }}>
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
            {/* <Image
            className="DarkMode"
              src={darkModeIcon}
              style={{ float: "right", marginRight: "10px" }}
              width={"7%"}
            /> */}
            <Button variant="dark" style={{ fontSize: "14px" }} size="sm" className="DarkMode"
            onClick={()=>{
              const auth = getAuth();
            signOut(auth).then(() => {
            // 
            console.log("Sign-out successful.")
            navigate("/")
            }).catch((error) => {
            console.log("An error happened.")
          });
            }}
            >Logout</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ))
}

export default Navigation;
