import React from "react";
import Login from "../../components/forms/login";
import Signup from "../../components/forms/signup";
import "./style.css";
import { Button, Container, ButtonGroup } from "react-bootstrap";
import { useState } from "react";

function LoginPage() {
  const [activeBtn, setActiveBtn] = useState("login");
  return (
    <Container className="box-style">
      <ButtonGroup className="d-flex justify-content-center text-center mb-5">
        <Button
          variant={activeBtn === "login" ? "light" : "dark"}
          onClick={() => setActiveBtn("login")}
          style={{ boxShadow: "none" }}
        >
          Log In
        </Button>
        <Button
          variant={activeBtn === "login" ? "dark" : "light"}
          onClick={() => setActiveBtn("signup")}
          style={{ boxShadow: "none" }}
        >
          Sign Up
        </Button>
      </ButtonGroup>
      {activeBtn === "login" ? <Login /> : <Signup />}
    </Container>
  );
}

export default LoginPage;
