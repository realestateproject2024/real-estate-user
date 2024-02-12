import { useState } from "react";
import { LayoutOne } from "@/layouts";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import Link from "next/link";
import { BASE_URL, loginApi, userLoginApi } from "@/lib/api";
import axios from "axios";
import swal from "sweetalert";
import { userAuth } from "@/store";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you can access the form data in formData state
  //   console.log("Form data:", formData);
  //   // You can now submit this data to your backend or perform any other necessary actions
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.email !== "" && formData.password !== "") {
      try {
        setLoading(true);
        const res = await userLoginApi({
          phone: formData.email,
          email: formData.email,
          password: formData.password,
        });
        console.log("res: ", res);
        setLoading(false);
        if (res.message === "User login successfully") {
          localStorage.setItem("usertoken", res.token);
          swal("Login", "Login successfully !", "success");
          dispatch(
            userAuth({
              loginAuth: true,
              token: res.token,
            })
          );
          router.push("/");
        } else {
          setLoading(false);
          swal("Oops", "Incorrect username & password", "error");
        }
      } catch (err) {
        setLoading(false);
        swal("Oops", "Please try again", "error");
        console.log("err: ", err);
      }
    } else {
      swal("Oops", "Please enter correct username & password", "error");
    }
  };

  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="Account"
          sectionPace=""
          currentSlug="Login"
          Bg={`url("../img/bg/14_3.jpg")`}
        />
        {/* <!-- LOGIN AREA START --> */}
        <div className="ltn__login-area pb-65">
          <div className="container">
            <Row>
              <Col xs={12}>
                <div className="section-title-area text-center">
                  <h1 className="section-title">
                    Sign In <br />
                    To Your Account
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Sit aliquid, Non distinctio vel iste.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6}>
                <div className="account-login-inner ltn__form-box contact-form-box">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Or Phone No*"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <div className="btn-wrapper mt-0">
                      <button
                        className="theme-btn-10 btn btn-block"
                        type="submit"
                      >
                        SIGN IN
                      </button>
                    </div>
                  </form>
                  <div className="go-to-btn mt-20">
                    <button onClick={handleShow}>
                      <small>FORGOTTEN YOUR PASSWORD?</small>
                    </button>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="account-create text-center pt-50">
                  <h4>{`DON'T HAVE AN ACCOUNT?`}</h4>
                  <p>
                    Add items to your wishlistget personalised recommendations{" "}
                    <br />
                    check out more quickly track your orders register
                  </p>
                  <div className="btn-wrapper d-flex justify-content-center">
                    <Link
                      href="/register"
                      className="theme-btn-10 btn black-btn w-50"
                    >
                      CREATE ACCOUNT
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* <!-- LOGIN AREA END --> */}
      </LayoutOne>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
        className="ltn__modal-area"
      >
        <Modal.Header>
          <Button onClick={handleClose} className="close" variant="secondary">
            <span aria-hidden="true">&times;</span>
          </Button>
        </Modal.Header>

        <Modal.Body>
          <div className="ltn__quick-view-modal-inner">
            <div className="modal-product-item">
              <div className="row">
                <div className="col-12">
                  <div className="modal-product-info text-center">
                    <h4>FORGET PASSWORD?</h4>
                    <p className="added-cart"> Enter you register email.</p>
                    <form action="#" class="ltn__form-box">
                      <input
                        type="text"
                        name="email"
                        placeholder="Type your register email*"
                      />
                      <div className="btn-wrapper mt-0">
                        <button
                          className="theme-btn-1 btn btn-full-width-2"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
