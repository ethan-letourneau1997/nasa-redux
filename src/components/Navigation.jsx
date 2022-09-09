import {
  Container,
  Col,
  Row,
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  DropdownButton,
  Button,
  Offcanvas,
  Accordion,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import wormLogo from "../icons/worm-logo-png-transparent.png";
import nasaGlobe from "../icons/NASA_logo.svg.png";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export default function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid>
      <Navbar className="fixed-top nav-main" bg="" expand="lg">
        <Container fluid className="nav-container">
          <Col md={2} className="logo-div-left">
            <img className="nasa-globe" src={nasaGlobe}></img>
          </Col>
          <Col md={8}>
            <Nav className="me-auto">
              <Nav.Link href="#home">Topics</Nav.Link>
              <Nav.Link href="#features">Missions</Nav.Link>
              <Nav.Link href="#pricing">Galleries</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">NASA TV</Nav.Link>

              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header
                  closeButton
                  closeVariant="white"
                ></Offcanvas.Header>
                <Offcanvas.Body>
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Topics</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <a href="">Humans in Space</a>
                          </li>
                          <li>
                            <a href="">Moon to Mars</a>
                          </li>
                          <li>
                            <a href="">Earth</a>
                          </li>
                          <li>
                            <a href="">Space Tech</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">Flight</a>
                          </li>
                          <li>
                            <a href="">Solar System and Beyond</a>
                          </li>
                          <li>
                            <a href="">STEM Engagement</a>
                          </li>
                          <li>
                            <a href="">History</a>
                          </li>
                          <li>
                            <a href="">Benefits to You</a>
                          </li>
                          <li>
                            <br></br>
                          </li>
                          <li>
                            {" "}
                            <a href="">All Topics A-Z</a>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Missions</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <a href="">Artemis I</a>
                          </li>
                          <li>
                            <a href="">Commercial Crew</a>
                          </li>
                          <li>
                            <a href="">DART</a>
                          </li>
                          <li>
                            <a href="">Hubble Space Telescope</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">James Webb Space Telescope</a>
                          </li>
                          <li>
                            <a href="">Juno: Mission at Jupiter</a>
                          </li>
                          <li>
                            <a href="">International Spce Station</a>
                          </li>
                          <li>
                            <a href="">Perseverance Mars Rover</a>
                          </li>
                          <li>
                            <a href="">Parker Solar Probe</a>
                          </li>
                          <li>
                            <br></br>
                          </li>
                          <li>
                            {" "}
                            <a href="">Launhes and Landings</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">All Missions A-Z</a>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Galleries</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <a href="">Image of the Day</a>
                          </li>
                          <li>
                            <a href="">Image Galleries</a>
                          </li>
                          <li>
                            <a href="">Ultra-High-Def Videos</a>
                          </li>
                          <li>
                            <a href="">Usage and Copyright</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">Videos</a>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Follow NASA</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <a href="">Get Involved</a>
                          </li>
                          <li>
                            <a href="">NASA Blogs</a>
                          </li>
                          <li>
                            <a href="">NASA Live</a>
                          </li>
                          <li>
                            <a href="">NASA Newsletters</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">NASA Socials</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">Social Media</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">Spot the Station</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">Join the Virtual Guest List</a>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>Downloads</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <a href="">Apps</a>
                          </li>
                          <li>
                            <a href="">Audio & Ringtones</a>
                          </li>
                          <li>
                            <a href="">E-Books</a>
                          </li>
                          <li>
                            <a href="">Podcasts</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">Third Rock Radio</a>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>About</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <a href="">About NASA</a>
                          </li>
                          <li>
                            <a href="">Astronauts</a>
                          </li>
                          <li>
                            <a href="">Careers@NASA</a>
                          </li>
                          <li>
                            <a href="">Exhibits and Speakers</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">Leadership</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">Locations</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">Organizations</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">People of NASA</a>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>NASA Audiences</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <a href="">For Media</a>
                          </li>
                          <li>
                            <a href="">For Educators</a>
                          </li>
                          <li>
                            <a href="">For Students</a>
                          </li>
                          <li>
                            <br></br>
                          </li>
                          <li>
                            {" "}
                            <a href="">Grades K-4</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">Grades 5-8</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">Grades 9-12</a>
                          </li>
                          <li>
                            {" "}
                            <a href="">Colleges and Universities</a>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
          </Col>
          <Col md={2} className="logo-div-right">
            <Button variant="" className="menu-butn" onClick={handleShow}>
              Menu
            </Button>
          </Col>
        </Container>
      </Navbar>
    </Container>
  );
}
