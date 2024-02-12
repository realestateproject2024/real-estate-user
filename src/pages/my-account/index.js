import { LayoutOne } from "@/layouts";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import {
  FaHome,
  FaUserAlt,
  FaMapMarkerAlt,
  FaList,
  FaHeart,
  FaMapMarked,
  FaDollarSign,
  FaSignOutAlt,
  FaLock,
  FaEnvelope,
  FaArrowDown,
  FaPencilAlt,
  FaPhoneAlt,
  FaTrashAlt,
  FaStar,
  FaRegStarHalf,
  FaRegStar,
  FaGlobe,
} from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function MyAccount() {
  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="My Account"
          sectionPace=""
          currentSlug="My Account"
          Bg={`url("../img/bg/14_4.jpg")`}
        />

        {/* <!-- LOGIN AREA START --> */}
        <div className="liton__wishlist-area pb-70">
          <Container>
            <Row>
              <Col xs={12}>
                {/* <!-- PRODUCT TAB AREA START --> */}
                <div className="ltn__product-tab-area">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="ltn_tab_1_1"
                  >
                    <Row>
                      <Col xs={12} lg={4}>
                        <div className="ltn__tab-menu-list mb-50">
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_1">
                                My Profiles <FaUserAlt />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_5">
                                My Enquiry <FaList />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="ltn_tab_1_9">
                                Change Password <FaLock />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link href="/login">
                                Logout <FaSignOutAlt />
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </Col>
                      <Col xs={12} lg={8}>
                        <Tab.Content>
                          <Tab.Pane eventKey="ltn_tab_1_1">
                            <div className="ltn__myaccount-tab-content-inner">
                              {/* <!-- comment-area --> */}
                              <div className="ltn__comment-area mb-50">
                                <div className="ltn-author-introducing clearfix">
                                  <div className="author-img">
                                    <img
                                      src="img/blog/author.jpg"
                                      alt="Author Image"
                                    />
                                  </div>
                                  <div className="author-info">
                                    <h6>My Profile</h6>
                                    <h2>Rosalina D. William</h2>
                                    <div className="footer-address">
                                      <ul>
                                        <li>
                                          <div className="footer-address-icon">
                                            <i className="icon-placeholder"></i>
                                          </div>
                                          <div className="footer-address-info">
                                            <p>
                                              Brooklyn, New York, United States
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="footer-address-icon">
                                            <i className="icon-call"></i>
                                          </div>
                                          <div className="footer-address-info">
                                            <p>
                                              <Link href="tel:+0123-456789">
                                                +0123-456789
                                              </Link>
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="footer-address-icon">
                                            <i className="icon-mail"></i>
                                          </div>
                                          <div className="footer-address-info">
                                            <p>
                                              <Link href="mailto:example@example.com">
                                                example@example.com
                                              </Link>
                                            </p>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tab.Pane>

                          <Tab.Pane eventKey="ltn_tab_1_5">
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">My Enquiry</th>
                                      {/* <th scope="col"></th> */}
                                      <th scope="col">Enquiry Data</th>
                                      <th scope="col">Status</th>
                                      <th scope="col">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Enquiry-1</td>
                                      {/* <td>
                                        <div className="ltn__my-properties-info">
                                          <h6 className="mb-10">
                                            <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                              sdfasdfdsfsdafs
                                            </Link>
                                          </h6>
                                          <small>
                                            <i className="icon-placeholder"></i>
                                            Brooklyn, New York, United States
                                          </small>
                                        </div>
                                      </td> */}
                                      <td>Feb 22, 2022</td>
                                      <td>
                                        <Badge bg="warning">Processing</Badge>
                                      </td>
                                      {/* <td>
                                        <Link href="/enquiry-details">
                                          <span>
                                            <Link
                                              href="/enquiry-details"
                                              style={{
                                                borderBottom: "1px solid blue",
                                                color: "blue",
                                              }}
                                            >
                                              View Property
                                            </Link>
                                          </span>
                                        </Link>
                                      </td> */}
                                      <td>
                                        <Link href="/enquiry-details">
                                          <span>
                                            <MdOutlineKeyboardArrowRight
                                              size={30}
                                            />
                                          </span>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Enquiry-2</td>
                                      {/* <td className="ltn__my-properties-img">
                                        <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                          <img
                                            src="/img/product-3/3.jpg"
                                            alt="#"
                                          />
                                        </Link>
                                      </td> */}
                                      {/* <td>
                                        <div className="ltn__my-properties-info">
                                          <h6 className="mb-10">
                                            <Link href="https://quarter-nextjs.netlify.app/shop/new-apartment-nice-view">
                                              sdfasdfdsfsdafs
                                            </Link>
                                          </h6>
                                          <small>
                                            <i className="icon-placeholder"></i>
                                            Brooklyn, New York, United States
                                          </small>
                                          <div className="product-ratting">
                                            <ul>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaRegStarHalf />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li>
                                                <Link href="#">
                                                  <span>
                                                    <FaRegStar />
                                                  </span>
                                                </Link>
                                              </li>
                                              <li className="review-total">
                                                <Link href="#">
                                                  {" "}
                                                  ( 95 Reviews )
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </td> */}
                                      <td>Feb 22, 2022</td>
                                      <td>
                                        <td>
                                          <Badge bg="success">Processing</Badge>
                                        </td>
                                      </td>
                                      <td>
                                        <Link href="/enquiry-details">
                                          <span>
                                            <MdOutlineKeyboardArrowRight
                                              size={30}
                                            />
                                          </span>
                                        </Link>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* <div className="ltn__pagination-area text-center">
                                <div className="ltn__pagination">
                                  <ul>
                                    <li>
                                      <Link href="#">
                                        <i className="fas fa-angle-double-left"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="#">1</Link>
                                    </li>
                                    <li className="active">
                                      <Link href="#">2</Link>
                                    </li>
                                    <li>
                                      <Link href="#">3</Link>
                                    </li>
                                    <li>
                                      <Link href="#">...</Link>
                                    </li>
                                    <li>
                                      <Link href="#">10</Link>
                                    </li>
                                    <li>
                                      <Link href="#">
                                        <i className="fas fa-angle-double-right"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div> */}
                            </div>
                          </Tab.Pane>

                          <Tab.Pane eventKey="ltn_tab_1_9">
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="account-login-inner">
                                <form
                                  action="#"
                                  className="ltn__form-box contact-form-box"
                                >
                                  <h5 className="mb-30">Change Password</h5>
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Current Password*"
                                  />
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="New Password*"
                                  />
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Confirm New Password*"
                                  />
                                  <div className="btn-wrapper mt-0">
                                    <button
                                      className="theme-btn-1 btn btn-block"
                                      type="submit"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>
                {/* <!-- PRODUCT TAB AREA END --> */}
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- LOGIN AREA END --> */}
      </LayoutOne>
    </>
  );
}

export default MyAccount;
