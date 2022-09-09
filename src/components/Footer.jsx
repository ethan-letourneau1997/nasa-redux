import { Container, Row, Col } from "react-bootstrap";
import nasaLogo from "../icons/NASA_logo.svg.png";

export default function Footer() {
  return (
    <Container className="footer-container" fluid>
      <Row>
        <Col md="auto">
          <img src={nasaLogo}></img>
        </Col>
        <Col>
          <p>National Aeronautics and Space Administration</p>
          <p>Page Last Updated: Jan 4, 2020</p>
          <p>Page Editor: Sarah Loff</p>
          <p>NASA Official: Brian Dunbar</p>
        </Col>
      </Row>
      <Row className="bottom-pg-links">
        <ul className="bottom-pg-links-list">
          <li>
            <a href="">No Fear Act</a>
          </li>
          <li>
            <a href="">FOIA</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">Office of Inspector General</a>
          </li>
          <li>
            <a href="">Office of Special Counsel</a>
          </li>
          <li>
            <a href="">Agency Financial Reports</a>
          </li>
          <li>
            <a href="">Contact NASA</a>
          </li>
        </ul>
      </Row>
    </Container>
  );
}
