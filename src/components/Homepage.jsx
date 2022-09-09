import { Container, Row, Nav, Navbar, Col, NavDropdown } from "react-bootstrap";
import Navigation from "./Navigation";
import nasaLogo from "../icons/NASA_logo.svg.png";
import wormLogo from "../icons/worm-logo-png-transparent.png";

export default function Homepage() {
  return (
    <Container className="homepage-container" fluid>
      <Navigation />
      <Row className="nav-row"></Row>
      <Row className="title-row">
        <Col md="auto" className="title-col">
          {/* <h1>
            At&nbsp;{" "}
            <span className="nasa-font title-span nasa-span">NASA</span>{" "}
          </h1> */}
          {/* <h1>
            At &nbsp; <img src={wormLogo}></img>{" "}
          </h1> */}
          <h1 className="title-text">
            We make Air and Space available for
            <span className="red title-text">&nbsp;everyone.</span>{" "}
          </h1>
        </Col>
      </Row>
    </Container>
  );
}
