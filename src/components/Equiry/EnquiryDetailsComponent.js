import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function EnquiryDetailsComponent({ sectionSpace }) {
  const [index, setIndex] = useState(-1);
  const percentage = 66;
  const slides = [
    {
      src: "/img/img-slide/12.jpg",
      width: 800,
      height: 570,
    },
    {
      src: "/img/img-slide/12.jpg",
      width: 800,
      height: 570,
    },
    {
      src: "/img/img-slide/13.jpg",
      width: 800,
      height: 570,
    },
  ];

  return (
    <>
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Zoom, Counter, Fullscreen, Download]}
      />

      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="">
              <div className="about-us-img-wrap">
                <img
                  src="https://dummyimage.com/600x400/ccc/fff"
                  alt="About Us Image"
                />
              </div>
              <div className=" mt-20">
                <Row>
                  {slides.map((ele, index) => {
                    return (
                      <Col key={index}>
                        <img src={ele.src} alt="About Us Image" />
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>
            <Col xs={12} lg={6} className="mt-20">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-30">
                  <div
                    className="mb-20"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "50px",
                    }}
                  >
                    <h1 className="section-title">Property Title </h1>
                    {/* <div
                      style={{
                        width: "70px",
                        height: "70px",
                      }}
                    >
                      <CircularProgressbar
                        value={66}
                        text={`${66}%`}
                        styles={buildStyles({
                          // Rotation of path and trail, in number of turns (0-1)
                          rotation: 0.25,

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",
                          // Text size
                          textSize: "16px",

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',

                          // Colors
                          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                          textColor: "#f88",
                          trailColor: "#d6d6d6",
                          backgroundColor: "#3e98c7",
                        })}
                      />
                    </div> */}
                  </div>
                  <p>
                    Houzez allow you to design unlimited panels and real estate
                    custom forms to capture leads and keep record of all
                    information
                  </p>
                </div>
                <div>
                  <Row>
                    <Col>
                      <ul
                        style={{
                          listStyle: "none",
                          borderRight: "1px dotted #ccc",
                        }}
                      >
                        <li>
                          <label>Property ID:</label>{" "}
                          <span>
                            <b>HZ29</b>
                          </span>
                        </li>
                        <li>
                          <label>Home Area: </label>{" "}
                          <span>
                            {" "}
                            <b>3450 sqft</b>{" "}
                          </span>
                        </li>
                        <li>
                          <label>Rooms:</label>{" "}
                          <span>
                            <b>7</b>
                          </span>
                        </li>
                        <li>
                          <label>Baths:</label>{" "}
                          <span>
                            <b>2</b>
                          </span>
                        </li>
                        <li>
                          <label>Year built:</label>{" "}
                          <span>
                            <b>1992</b>
                          </span>
                        </li>
                      </ul>
                    </Col>
                    <Col>
                      <ul
                        style={{
                          listStyle: "none",
                        }}
                      >
                        <li>
                          <label>Lot Area:</label>{" "}
                          <span>
                            <b>HZ29</b>
                          </span>
                        </li>
                        <li>
                          <label>Lot dimensions:</label>{" "}
                          <span>
                            {" "}
                            <b>3450 sqft</b>
                          </span>
                        </li>
                        <li>
                          <label>Beds:</label>{" "}
                          <span>
                            <b>3</b>
                          </span>
                        </li>
                        <li>
                          <label>Price:</label>{" "}
                          <span>
                            <b>1099</b>
                          </span>
                        </li>
                        <li>
                          <label>Property Status:</label>{" "}
                          <span>
                            <b>For Sale</b>
                          </span>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default EnquiryDetailsComponent;
