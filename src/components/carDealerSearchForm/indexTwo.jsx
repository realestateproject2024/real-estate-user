import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaCarAlt,
  FaCookie,
  FaDollyFlatbed,
  FaHome,
} from "react-icons/fa";
import Link from "next/link";
import PriceRange from "../priceRange";

function CarDealerSearchFormTwo() {
  const [selectedValue, setSelectedValue] = useState("");
  const propertyTypes = ["Apartments", "Villas", "Buildings", "Houses"];

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  // console.log("selectedValue: ", selectedValue);
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="slide-item-car-dealer-form">
              <div className="ltn__car-dealer-form-tab">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div className={`ltn__tab-menu text-uppercase`}>
                    <Nav variant="pills">
                      <Nav.Item className="me-2">
                        <Nav.Link eventKey="first">
                          <FaHome />
                          BUY PROPERTY
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>

                  <Tab.Content className="tab-content">
                    <Tab.Pane eventKey="first">
                      <div className="car-dealer-form-inner">
                        <form
                          action="#"
                          className="ltn__car-dealer-form-box row"
                        >
                          <Col
                            xs={12}
                            md={6}
                            lg={4}
                            className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar"
                          >
                            <span className="inline-icon">
                              <FaCalendarAlt />
                            </span>
                            <Form.Select
                              className="nice-select"
                              onChange={handleSelectChange}
                              value={selectedValue}
                            >
                              <option value="">
                                Type of real estate product
                              </option>
                              {propertyTypes.map((ele, index) => {
                                return (
                                  <option key={index} value={ele}>
                                    {ele}
                                  </option>
                                );
                              })}
                            </Form.Select>
                          </Col>
                          <Col
                            xs={12}
                            md={6}
                            lg={4}
                            className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car"
                          >
                            <span className="inline-icon">
                              <FaCarAlt />
                            </span>
                            <Form.Select className="nice-select">
                              <option>Region</option>
                              <option>chicago</option>
                              <option>London</option>
                              <option>Los Angeles</option>
                              <option>New York</option>
                              <option>New Jersey</option>
                            </Form.Select>
                          </Col>
                          <Col
                            xs={12}
                            md={6}
                            lg={4}
                            className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter"
                          >
                            <span className="inline-icon">
                              <FaCookie />
                            </span>
                            <Form.Select className="nice-select">
                              <option>City</option>
                              <option>Bayonne</option>
                              <option>Greenville</option>
                              <option>Manhattan</option>
                              <option>Queens</option>
                              <option>The Heights</option>
                              <option>Upper East Side</option>
                              <option>West Side</option>
                            </Form.Select>
                          </Col>
                          <Col
                            xs={12}
                            md={6}
                            lg={4}
                            className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring"
                          >
                            <span className="inline-icon">
                              <FaDollyFlatbed />
                            </span>
                            <Form.Select className="nice-select">
                              <option>District</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </Form.Select>
                          </Col>
                          <Col
                            xs={12}
                            md={6}
                            lg={4}
                            className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog"
                          >
                            <div className="input-item input-item-name ltn__custom-icon">
                              <input
                                type="text"
                                name="name"
                                placeholder="Min size (in sqft)"
                              />
                            </div>
                          </Col>
                          <Col
                            xs={12}
                            md={6}
                            lg={4}
                            className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog"
                          >
                            <div className="input-item input-item-name ltn__custom-icon">
                              <input
                                type="text"
                                name="name"
                                placeholder="Max size (in sqft)"
                              />
                            </div>
                            <div className="btn-wrapper text-center d-flex align-items-center justify-content-end">
                              <Link
                                // href="/shop/left-sidebar"
                                href={`/shop/left-sidebar?propertyType=${encodeURIComponent(
                                  selectedValue
                                )}`}
                                className="btn theme-btn-10 text-uppercase"
                              >
                                Search Property
                              </Link>
                            </div>
                          </Col>
                          {/* <Col xs={12} className="car-price-filter-range">
                            <div className="price_filter">
                              <PriceRange />
                            </div>
                          </Col> */}
                        </form>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default CarDealerSearchFormTwo;
