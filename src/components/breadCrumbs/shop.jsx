import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FaHome, FaAngleRight } from "react-icons/fa";

const ShopBreadCrumb = ({ title, currentSlug, sectionPace, Bg }) => {
  return (
    <>
      <div
        className={`ltn__breadcrumb-area text-left bg-image ${sectionPace}`}
        style={{ backgroundImage: `${Bg}` }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="ltn__breadcrumb-inner">
                <h1 className="page-title text-light">{title}</h1>
                <div className="ltn__breadcrumb-list text-light">
                  <ul>
                    <li>
                      <Link href="/">
                        <span className="ltn__secondary-color text-light">
                          <FaHome className="me-2 text-light" />
                        </span>
                        <span className="me-2 text-light">Home</span>
                        <FaAngleRight color="#FFF" />
                      </Link>
                    </li>
                    <li className="text-light">{currentSlug}</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ShopBreadCrumb;
