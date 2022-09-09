import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Fade from "react-reveal/Fade";

export default function Articles() {
  const [a1Status, setA1Status] = useState(true);

  const setA1 = () => {
    // setA1Status(!a1Status);
  };

  const [a2Status, setA2Status] = useState(true);

  const setA2 = () => {
    // setA2Status(!a2Status);
  };

  const [b2Status, setB2Status] = useState(true);

  const setB2 = () => {
    // setB2Status(!b2Status);
  };

  return (
    <Container fluid>
      <Row className="article-row">
        <Col
          xl={6}
          lg={6}
          md={12}
          className="acol"
          onMouseEnter={setA1}
          onMouseLeave={setA1}
        >
          <Fade duration={3000} delay={200}>
            <div className="a1">
              {a1Status === true ? (
                <Row className="article-header-row">
                  <h4 className="article-header-lower">
                    <a className="article-header-link">Image of the Day</a>
                  </h4>
                </Row>
              ) : null}
              {a1Status === true ? (
                <Row className="article-text-row">
                  {/* <a className="photo-info">
                  Voyager 1’s Mission to the Outer Planet Begins &gt;
                </a>
                <p className="article-text">
                  The Voyager mission was designed to take advantage of a rare
                  geometric arrangement of the outer planets in the late 1970s
                  and the 1980s which allowed for a four-planet tour for a
                  minimum of propellant and trip time.
                </p> */}
                </Row>
              ) : null}
            </div>
          </Fade>
        </Col>

        <Col xl={6} lg={6} md={12} className="image-text-row bcol">
          <Col className="">
            <Fade duration={3000} delay={800}>
              <div className="a2" onMouseEnter={setA2} onMouseLeave={setA2}>
                {a2Status === true ? (
                  <div className="article-header-row">
                    <h4 className="article-header-lower">
                      <a className="article-header-link">
                        Astronomy Picture of the Day
                      </a>
                    </h4>
                  </div>
                ) : null}
              </div>
            </Fade>
          </Col>

          <div className="">
            <Fade duration={3000} delay={1000}>
              <div className="a3">
                <div className="wrapper">
                  <div>
                    <h4>NASA News Photos on Flickr</h4>
                  </div>
                  <div>
                    <p>
                      Official NASA photographs from agency photographers
                      chronicle what's making news across the agency, from
                      launches and landings to important science announcements.
                    </p>
                  </div>
                  <ul>
                    <li>
                      &#x2022;&nbsp; <a href="">NASA Headquarters Images</a>
                    </li>
                    <li>
                      &#x2022;&nbsp; <a href="">Kennedy Space Center Images</a>
                    </li>
                    <li>
                      &#x2022;&nbsp; <a href="">Johnson Space Center Images</a>
                    </li>
                    <li>
                      &#x2022;&nbsp;{" "}
                      <a href="">Goodard Space FlightCenter Images</a>
                    </li>
                    <li>
                      &#x2022;&nbsp;{" "}
                      <a href="">Marshall Space Fligth Center Images</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>
          </div>
          <Fade duration={3000}>
            <div className="b2" onMouseEnter={setB2} onMouseLeave={setB2}>
              {b2Status === true ? (
                <div className="article-div">
                  <div className="article-header-row">
                    <h4 className="article-header-lower">
                      <a className="article-header-link">NASA Image Library</a>
                    </h4>
                  </div>
                  {/* <p className="article-text">
                  NASA's image library,consolidates imagery and videos in one
                  searchable locations. Users can download content in multiple
                  sizes and resolutions and see the metadata associated with
                  images, including EXIF/camera data on many images.
                </p> */}
                </div>
              ) : null}
            </div>
          </Fade>
        </Col>
      </Row>

      <Row>
        <Col className="ccol" xl={6} lg={6} md={12}>
          <Fade duration={3000} delay={500}>
            <div className="c1"></div>
          </Fade>
        </Col>
        <Col className="ccol" xl={3} lg={3} md={12}>
          <Fade duration={3000} delay={300}>
            <div className="c2">
              <div className="wrapper">
                <h4 className="">Mission Galleries</h4>
                <p>
                  View images from our missions exploring the universe and our
                  home planet. For a list of all missions, visit&nbsp;{" "}
                  <a href=""> the missions A-Z page.</a>
                </p>
                <ul>
                  <li>
                    &#x2022;&nbsp;<a href="">Mars Curiousity Rover</a>
                  </li>
                  <li>
                    &#x2022;&nbsp;<a href="">Juno Mission to Jupiter</a>
                  </li>
                  <li>
                    &#x2022;&nbsp;
                    <a href="">International Space Station</a>
                  </li>
                  <li>
                    &#x2022;&nbsp;
                    <a href="">Space Launch System Rocket</a>
                  </li>
                  <li>
                    &#x2022;&nbsp;<a href="">Orion Spacecraft</a>
                  </li>
                  <li>
                    &#x2022;&nbsp;<a href="">Earth Missions</a>
                  </li>
                </ul>
              </div>
            </div>
          </Fade>
        </Col>
        <Col className="ccol" xl={3} lg={3} md={12}>
          <Fade duration={3000} delay={600}>
            <div className="c3">
              <div className="article-header-row-lower">
                <h4 className="article-header-lower">
                  <a href="">Historic Images on Flickr Commons </a>
                </h4>
              </div>
            </div>
          </Fade>
        </Col>
      </Row>
      <Row>
        <Col className="dcol" xl={3} lg={3} md={6} sm={12}>
          <Fade duration={3000} delay={100}>
            <div className="d1 ">
              <div className="article-header-row-lower">
                <h4 className="article-header-lower">
                  <a href="">Earth Observatory Images</a>
                </h4>
              </div>
            </div>
          </Fade>
        </Col>
        <Col className="dcol" xl={3} lg={3} md={6} sm={12}>
          <Fade duration={3000} delay={300}>
            <div className="d2">
              <div className="article-header-row-lower">
                <h4 className="article-header-lower">
                  <a href="">Search for NASA Images</a>
                </h4>
              </div>
            </div>
          </Fade>
        </Col>
        <Col className="dcol" xl={3} lg={3} md={6} sm={12}>
          <Fade duration={3000} delay={200}>
            <div className="d3">
              <div className="article-header-row-lower">
                <h4 className="article-header-lower">
                  <a href="">Nasa Armstrong Aircraft Image Gallery</a>
                </h4>
              </div>
            </div>
          </Fade>
        </Col>
        <Col className="dcol" xl={3} lg={3} md={6} sm={12}>
          <Fade duration={3000} delay={800}>
            <div className="d4">
              <div className="article-header-row-lower">
                <h4 className="article-header-lower">
                  <a href="">
                    Space Images from NASA's Jet Propulstion Laboratory{" "}
                  </a>
                </h4>
              </div>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}
