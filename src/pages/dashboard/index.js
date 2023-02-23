import React from "react";
import { Row, Col, Button, Card, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import linkedInIcon from "../../assets/icons/linkedin.png";
import githubIcon from "../../assets/icons/github-sign.png";
import redditIcon from "../../assets/icons/reddit.png";
import twitterIcon from "../../assets/icons/twitter.png";
import profilePic from "../../assets/profile/bale-1.jpg";
import cardImg from '../../assets/profile/office.jpeg'
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";


function Dashboard() {
  
  const anchorStyles = {
    color: "black",
  };
  return (
    <Container>
      <div style={{ marginBottom: "40px", marginTop: "40px" }}>
        <Row>
          <Col md={4}>
            <div className="text-center">
              <img
                // src="https://m.media-amazon.com/images/M/MV5BNjg3OTg4MDczMl5BMl5BanBnXkFtZTgwODc0NzUwNjE@._V1_.jpg"
                src={profilePic}
                width={"60%"}
                height={"250px"}
                style={{ borderRadius: "50%" }}
              />
            </div>
          </Col>
          <Col md={8}>
            {" "}
            <br />
            <h3>Patrick Bateman</h3>
            {/* <h5>Community Name: Adobe HR department</h5><br /> */}
            <p>
              There is an idea of a Patrick Bateman; some kind of abstraction.
              But there is no real me: only an entity, something illusory. And
              though I can hide my cold gaze, and you can shake my hand and feel
              flesh gripping yours and maybe you can even sense our lifestyles
              are probably comparable. I simply am not there.
            </p>
            <span style={{ fontWeight: "lighter" }}>Pune, Maharashtra</span>
            <Row className="mt-2">
              <Row>
                <Col md={1} className="text-center">
                  <Image src={linkedInIcon} width={"90%"} />
                </Col>
                <Col md={5} className="mt-1">
                  <a
                    style={anchorStyles}
                    href="https://9gag.com/tag/patrick-bateman"
                  >
                    www.linkedin.com/in/patrick-bateman
                  </a>
                </Col>
                <Col md={1}>
                  <Image src={redditIcon} width={"90%"} />
                </Col>
                <Col md={5}>
                  <a
                    style={anchorStyles}
                    href="https://9gag.com/tag/patrick-bateman"
                  >
                    https://www.reddit.com/user/bateman-patrick
                  </a>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={1} className="text-center">
                  <Image src={githubIcon} width={"90%"} />
                </Col>
                <Col md={5} className="mt-1">
                  <a style={anchorStyles} href="https://9gag.com/tag/patrick-bateman">
                    https://github.com/bateman-codes
                  </a>
                </Col>
                <Col md={1}>
                  <Image src={twitterIcon} width={"90%"} />
                </Col>
                <Col md={5}>
                  <a
                    style={anchorStyles}
                    href="https://9gag.com/tag/patrick-bateman"
                  >
                    https://twitter.com/haha_miracle
                  </a>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </div>
      <br />
      <h4> Applied jobs.</h4>
      <br />
      <div>
        <Card style={{ marginBottom: "40px" }}>
          <Row>
            <Col md={3} className="text-center p-4">
              <Card.Img
                variant="top"
                src={cardImg}
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>abracadabra</Card.Title>
                <Card.Text>
                  <br />
                  The company was started in John Warnock's garage. The name of
                  the company, Adobe, comes from Adobe Creek in Los Altos,
                  California, which ran behind Warnock's house. That creek is so
                  named because of the type of clay found there (Adobe being a
                  Spanish word for Mudbrick), which alludes to the creative
                  nature of the company's software. Adobe's corporate logo
                  features a stylized "A" and was designed by graphic designer
                  Marva Warnock, John Warnock's wife. In 2020, the company
                  updated its visual identity, including updating its logo to a
                  single color, an all-red logo that is warmer and more
                  contemporary.
                </Card.Text>
                <Link to={`/applynow`}>
                  <Button variant="dark">Learn More</Button>
                </Link>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
      <div>
        <Card style={{ marginBottom: "40px" }}>
          <Row>
            <Col md={3} className="text-center p-4">
              <Card.Img
                variant="top"
                src={cardImg}
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>abracadabra</Card.Title>
                <Card.Text>
                  <br />
                  The company was started in John Warnock's garage. The name of
                  the company, Adobe, comes from Adobe Creek in Los Altos,
                  California, which ran behind Warnock's house. That creek is so
                  named because of the type of clay found there (Adobe being a
                  Spanish word for Mudbrick), which alludes to the creative
                  nature of the company's software. Adobe's corporate logo
                  features a stylized "A" and was designed by graphic designer
                  Marva Warnock, John Warnock's wife. In 2020, the company
                  updated its visual identity, including updating its logo to a
                  single color, an all-red logo that is warmer and more
                  contemporary.
                </Card.Text>
                <Link to={`/applynow`}>
                  <Button variant="dark">Apply Now</Button>
                </Link>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
      <div>
        <Card style={{ marginBottom: "40px" }}>
          <Row>
            <Col md={3} className="text-center p-4">
              <Card.Img
                variant="top"
                src={cardImg}
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>abracadabra</Card.Title>
                <Card.Text>
                  <br />
                  The company was started in John Warnock's garage. The name of
                  the company, Adobe, comes from Adobe Creek in Los Altos,
                  California, which ran behind Warnock's house. That creek is so
                  named because of the type of clay found there (Adobe being a
                  Spanish word for Mudbrick), which alludes to the creative
                  nature of the company's software. Adobe's corporate logo
                  features a stylized "A" and was designed by graphic designer
                  Marva Warnock, John Warnock's wife. In 2020, the company
                  updated its visual identity, including updating its logo to a
                  single color, an all-red logo that is warmer and more
                  contemporary.
                </Card.Text>
                <Link to={`/applynow`}>
                  <Button variant="dark">Apply Now</Button>
                </Link>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    </Container>
  );
}

export default Dashboard;
