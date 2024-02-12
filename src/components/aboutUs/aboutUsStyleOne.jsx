import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";
function AboutUsStyleOne({ sectionSpace }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="X7R-q9rsrtU"
        onClose={() => setOpen(false)}
      />
      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            {/* <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src="/img/others/7.png" alt="About Us Image" />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  <div className="ltn__video-img ltn__animation-pulse1">
                    <img src="/img/others/8.png" alt="video popup bg image" />
                    <button
                      onClick={() => setOpen(true)}
                      className="ltn__video-icon-2"
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
              </div>
            </Col> */}
            <Col xs={12} lg={12} className="align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">
                    The Leading Real Estate Financing and Realty Brokerage
                    <span>.</span>
                  </h1>
                </div>
                <Row>
                  <Col xs={12} lg={6} className="align-self-center">
                    <div className="about-us-img-wrap about-img-left">
                      <img src="/img/others/7.png" alt="About Us Image" />
                      <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                        {/* <div className="ltn__video-img ltn__animation-pulse1">
                          <img
                            src="/img/others/8.png"
                            alt="video popup bg image"
                          />
                          <button
                            onClick={() => setOpen(true)}
                            className="ltn__video-icon-2"
                          >
                            <FaPlay />
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <p>
                      We are a promising Saudi Company based in Makkah, which is
                      specialized in Financing and Realty Brokerage. Our
                      Business started with the aim of providing the easiest and
                      best Brokerage and Realty Financing Solutions everywhere
                      in the KSA. Moreover, we buy, sell and divide lands and
                      properties, besides managing and leasing owned or rented
                      residential and non-residential properties, as well as
                      managing buildings for commission, and developing
                      residential and commercial buildings using modern
                      construction methods.
                    </p>
                    <p>
                      We work hard to be effective contributors in our business,
                      depending on our expertise in property marketing and
                      brokerage, by offering diverse property options and
                      financing solutions in cooperation with real estate
                      developers, owners, all Saudi banks and multiple financing
                      companies, in order to make it easier for our valued
                      customers to own properties
                    </p>
                    <ul className="ltn__list-item-half clearfix">
                      <li>
                        <i className="flaticon-home-2"></i>
                        Devotion
                      </li>
                      <li>
                        <i className="flaticon-mountain"></i>
                        Honesty
                      </li>
                      <li>
                        <i className="flaticon-heart"></i>
                        Professionalism
                      </li>
                      <li>
                        <i className="flaticon-secure"></i>
                        Innovative solutions
                      </li>
                      <li>
                        <i className="flaticon-secure"></i>
                        Smoothness
                      </li>
                    </ul>
                    {/* <div className="btn-wrapper animated">
                      <Link
                        href="/service"
                        className="theme-btn-1 btn btn-effect-1"
                      >
                        OUR SERVICES
                      </Link>
                    </div> */}
                  </Col>
                </Row>
                {/* <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                    Enimad minim veniam quis nostrud exercitation <br />
                    llamco laboris. Lorem ipsum dolor sit amet
                  </p>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOne;
