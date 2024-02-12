import { FaTrashAlt, FaRegStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import BreadCrumb from "@/components/breadCrumbs";
import Accordion from "react-bootstrap/Accordion";
import AccordionButton from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap";
import { LayoutOne } from "@/layouts";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineExpandMore } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TiTick } from "react-icons/ti";
import "react-circular-progressbar/dist/styles.css";
import EnquiryDetailsComponent from "@/components/Equiry/EnquiryDetailsComponent";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { ImHourGlass } from "react-icons/im";
function Enquirydetails() {
  const percentage = 66;
  // const [index, setIndex] = useState(-1);

  const slides = [
    {
      src: "/img/img-slide/11.jpg",
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

  const sectionSpace = "pt-0 pb-90";

  // const eventKey = "3";

  const CustomButton = ({ eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("Custom button clicked!")
    );

    return (
      <Link
        href="#"
        onClick={decoratedOnClick}
        style={{
          border: "2px solid #007387",
          padding: "15px 8px",
        }}
      >
        <span>
          <MdOutlineExpandMore size={45} />
        </span>
      </Link>
    );
  };

  return (
    <>
      <LayoutOne topbar={true}>
        {/* <!-- BREADCRUMB AREA START --> */}

        <BreadCrumb
          title="Enquiry-1"
          sectionPace="mb-0"
          currentSlug="Enquiry-1"
          Bg={`url("../img/bg/14_2.jpg")`}
        />
        {/* <!-- BREADCRUMB AREA END --> */}
        <div className="neighbour-area section-bg-1 pb-120">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
                  <Row>
                    <Col xs={12} lg={12}>
                      <Accordion>
                        {/* <!-- card --> */}
                        <Accordion.Item eventKey="1" className="card">
                          <div className="ltn__myaccount-tab-content-inner">
                            <div className="ltn__myaccount-tab-content-inner">
                              {/* ... rest of your code ... */}
                            </div>
                            <div className="ltn__my-properties-table table-responsive">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td className="ltn__my-properties-img">
                                      <Link href="#">
                                        <img
                                          src="/img/product-3/3.jpg"
                                          alt="#"
                                        />
                                      </Link>
                                    </td>
                                    <td>
                                      <div className="ltn__my-properties-info">
                                        <h6 className="mb-10">
                                          <Link href="#">Property Title 1</Link>
                                        </h6>
                                        <small>
                                          {/* <i className="icon-placeholder"></i> */}
                                          <GrLocation />
                                          Brooklyn, New York, United States
                                        </small>
                                      </div>
                                    </td>
                                    <td>
                                      <td>
                                        <Badge bg="success">Completed</Badge>
                                      </td>
                                    </td>
                                    <td>Feb 22, 2022</td>
                                    <td>
                                      <div
                                        style={{
                                          width: "70px",
                                          height: "70px",
                                        }}
                                      >
                                        <CircularProgressbar
                                          value={100}
                                          text={`${100}%`}
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
                                            pathColor: `rgba(62, 152, 199, ${
                                              percentage / 100
                                            })`,
                                            textColor: "#f88",
                                            trailColor: "#d6d6d6",
                                            backgroundColor: "#3e98c7",
                                          })}
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <CustomButton eventKey="1" />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>

                          <Accordion.Body>
                            <div className="ltn__neighbour-tab-wrap">
                              <Container defaultActiveKey="first">
                                <EnquiryDetailsComponent sectionSpace="pb-90" />
                              </Container>
                            </div>
                            <VerticalTimeline>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                  color: "#fff !importent",
                                }}
                                contentArrowStyle={{
                                  borderRight: "7px solid  #FFF",
                                }}
                                date="18-01-2024"
                                iconStyle={{
                                  background: "green",
                                  color: "#fff",
                                }}
                                icon={<TiTick />}
                              >
                                <h3 className="vertical-timeline-element-title">
                                  Enquiry Started
                                </h3>

                                <p>
                                  Creative Direction, User Experience, Visual
                                  Design, Project Management, Team Leading
                                </p>
                              </VerticalTimelineElement>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="21-01-2024"
                                iconStyle={{
                                  background: "green",
                                  color: "#fff",
                                }}
                                icon={<TiTick />}
                              >
                                <h3 className="vertical-timeline-element-title">
                                  Appointment Created for Site Visit
                                </h3>

                                <p>
                                  Creative Direction, User Experience, Visual
                                  Design, SEO, Online Marketing
                                </p>
                              </VerticalTimelineElement>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="25-01-2024"
                                iconStyle={{
                                  background: "green",
                                  color: "#fff",
                                }}
                                icon={<TiTick />}
                              >
                                <h3 className="vertical-timeline-element-title">
                                  Site Visit Completed
                                </h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">
                                  Los Angeles, CA
                                </h4> */}
                                <p>User Experience, Visual Design</p>
                              </VerticalTimelineElement>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="25-01-2024"
                                iconStyle={{
                                  background: "green",
                                  color: "#fff",
                                }}
                                icon={<TiTick />}
                              >
                                <h3 className="vertical-timeline-element-title">
                                  Appointment Created for Document Collection
                                </h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">
                                  Los Angeles, CA
                                </h4> */}
                                <p>User Experience, Visual Design</p>
                              </VerticalTimelineElement>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="25-01-2024"
                                iconStyle={{
                                  background: "green",
                                  color: "#fff",
                                }}
                                icon={<TiTick />}
                              >
                                <h3 className="vertical-timeline-element-title">
                                  Bank Approval
                                </h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">
                                  Los Angeles, CA
                                </h4> */}
                                <p>User Experience, Visual Design</p>
                              </VerticalTimelineElement>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="25-01-2024"
                                iconStyle={{
                                  background: "green",
                                  color: "#fff",
                                }}
                                icon={<TiTick />}
                              >
                                <h3 className="vertical-timeline-element-title">
                                  Payment Processing
                                </h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">
                                  Los Angeles, CA
                                </h4> */}
                                <p>User Experience, Visual Design</p>
                              </VerticalTimelineElement>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="25-01-2024"
                                iconStyle={{
                                  background: "green",
                                  color: "#fff",
                                }}
                                icon={<TiTick />}
                              >
                                <h3 className="vertical-timeline-element-title">
                                  Property Handover
                                </h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">
                                  Los Angeles, CA
                                </h4> */}
                                <p>User Experience, Visual Design</p>
                              </VerticalTimelineElement>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="25-01-2024"
                                iconStyle={{
                                  background: "green",
                                  color: "#fff",
                                }}
                                icon={<TiTick />}
                              >
                                <h3 className="vertical-timeline-element-title">
                                  Complete
                                </h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">
                                  Los Angeles, CA
                                </h4> */}
                                <p>User Experience, Visual Design</p>
                              </VerticalTimelineElement>
                            </VerticalTimeline>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="card">
                          <div className="ltn__myaccount-tab-content-inner">
                            <div className="ltn__myaccount-tab-content-inner">
                              {/* ... rest of your code ... */}
                            </div>
                            <div className="ltn__my-properties-table table-responsive">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td className="ltn__my-properties-img">
                                      <Link href="#">
                                        <img
                                          src="/img/product-3/2.jpg"
                                          alt="#"
                                        />
                                      </Link>
                                    </td>
                                    <td>
                                      <div className="ltn__my-properties-info">
                                        <h6 className="mb-10">
                                          <Link href="#">Property Title 2</Link>
                                        </h6>
                                        <small>
                                          {/* <i className="icon-placeholder"></i> */}
                                          <GrLocation />
                                          Brooklyn, New York, United States
                                        </small>
                                      </div>
                                    </td>
                                    <td>
                                      <td>
                                        <Badge bg="warning">Processing</Badge>
                                      </td>
                                    </td>
                                    <td>March 5, 2022</td>
                                    <td>
                                      <div
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
                                            pathColor: `rgba(62, 152, 199, ${
                                              percentage / 100
                                            })`,
                                            textColor: "#f88",
                                            trailColor: "#d6d6d6",
                                            backgroundColor: "#3e98c7",
                                          })}
                                        />
                                      </div>
                                    </td>
                                    {/* <td>
                                      <Link href="#">Edit</Link>
                                    </td> */}
                                    <td>
                                      <CustomButton eventKey="2" />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>

                          <Accordion.Body>
                            <div className="ltn__neighbour-tab-wrap">
                              <Container defaultActiveKey="first">
                                <EnquiryDetailsComponent sectionSpace="pb-90" />
                              </Container>
                            </div>
                            <VerticalTimeline>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                  // background: "rgb(255, 90, 60)",
                                  color: "#fff !importent",
                                }}
                                contentArrowStyle={{
                                  borderRight: "7px solid  #FFF",
                                }}
                                date="18-01-2024"
                                iconStyle={{
                                  background: "green",
                                  color: "#fff",
                                }}
                                icon={<TiTick />}
                              >
                                <h3 className="vertical-timeline-element-title">
                                  Enquiry Started
                                </h3>

                                <p>
                                  Creative Direction, User Experience, Visual
                                  Design, Project Management, Team Leading
                                </p>
                              </VerticalTimelineElement>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="21-01-2024"
                                iconStyle={{
                                  background: "green",
                                  color: "#fff",
                                }}
                                icon={<TiTick />}
                              >
                                <h3 className="vertical-timeline-element-title">
                                  Site Visit Completed
                                </h3>

                                <p>
                                  Creative Direction, User Experience, Visual
                                  Design, SEO, Online Marketing
                                </p>
                              </VerticalTimelineElement>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="21-01-2024"
                                iconStyle={{
                                  background: "#FFF",
                                  color: "red",
                                }}
                                icon={<ImHourGlass />}
                              >
                                <h3 className="vertical-timeline-element-title">
                                  Appointment Created for Document Collection
                                </h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">
                                  Los Angeles, CA
                                </h4> */}
                                <p>User Experience, Visual Design</p>
                              </VerticalTimelineElement>
                            </VerticalTimeline>
                          </Accordion.Body>
                        </Accordion.Item>

                        {/* <!--  --> */}
                      </Accordion>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default Enquirydetails;
