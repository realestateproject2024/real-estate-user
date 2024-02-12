import { useState, useRef } from "react";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import Link from "next/link";
import { signUpApi, getOtpApi, registerApi } from "@/lib/api";
import swal from "sweetalert";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import OtpInput from "react-otp-input";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { userAuth } from "@/store";
import Toast from "react-bootstrap/Toast";
import { RiVerifiedBadgeFill } from "react-icons/ri";
function Register() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [otpModalShow, setotpModalShow] = useState(false);
  const [numberVeryfy, setNumberVeryFy] = useState("");
  const [numberVeryfied, setNumberVeryFied] = useState(false);

  const [otp, setOtp] = useState("");
  const inputs = useRef([]);
  const handleClose = () => setotpModalShow(false);
  // State variable to store form data

  // Function to handle input changes and update formData state

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access formData state to get input values
    console.log("Form Data:", formData);
    // Here you can perform any further actions like sending the data to a server
  };

  const handleGetOTP = async (onNext, formData) => {
    setNumberVeryFy(formData.mobile);
    console.log("working: ", formData.mobile);
    // e.preventDefault();
    if (formData.mobile !== "") {
      try {
        const response = await getOtpApi({
          phone: formData.mobile,
        });
        if (response.message === "User already exists") {
          // swal("Oops", response.message, "error");
          const toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
          });
          toast.fire({
            icon: "error",
            title: response.message,
            padding: "10px 20px",
          });
        } else {
          setotpModalShow(true);
          const toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
          });
          toast.fire({
            icon: "success",
            title: response.message,
            padding: "10px 20px",
          });
          onNext();
          // swal(response.message, "You clicked the button!", "success");
        }
      } catch (error) {
        console.log(error);
        // Handle error if needed
      }
    } else {
      // swal("Oops", "Please enter the mobile no", "error");
      const toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: "error",
        title: "Please enter the mobile no",
        padding: "10px 20px",
      });
    }
  };

  const handleRegister = async (onNext, formData, dob) => {
    console.log({
      name: formData.firstname,
      dob: dob,
      phone: numberVeryfy,
      email: formData.email,
      password: formData.password,
    });
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(formData.email);

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const isValidPassword = passwordPattern.test(formData.password);
    console.log("isValidPassword: ", isValidPassword);

    if (
      formData.firstname !== "" &&
      numberVeryfy !== "" &&
      dob !== "" &&
      formData.email !== "" &&
      formData.password !== ""
    ) {
      if (formData.password === formData.confirmpassword) {
        if (isValidEmail) {
          if (isValidPassword) {
            const response = await registerApi({
              name: formData.firstname,
              dob: dob,
              phone: numberVeryfy,
              email: formData.email,
              password: formData.password,
            });
            console.log("response: ", response);
            if (response.message === "User already exist") {
              const toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
              });
              toast.fire({
                icon: "error",
                title: response.message,
                padding: "10px 20px",
              });
            } else {
              const toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
              });
              toast.fire({
                icon: "success",
                title: response.message,
                padding: "10px 20px",
              });
              dispatch(
                userAuth({
                  loginAuth: true,
                  token: response.token,
                })
              );
              router.push("/");
            }
          } else {
            const toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
            });
            toast.fire({
              icon: "error",
              title:
                "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
              padding: "10px 20px",
            });
          }
        } else {
          const toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
          });
          toast.fire({
            icon: "error",
            title: "Your email id is invalid",
            padding: "10px 20px",
          });
        }
      } else {
        const toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
        toast.fire({
          icon: "error",
          title: "password not matched",
          padding: "10px 20px",
        });
      }
    } else {
      const toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: "error",
        title: "Please fill all the field",
        padding: "10px 20px",
      });
    }
  };

  const handleVerify = (onNext, otp) => {
    if (otp !== "") {
      const toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: "success",
        title: "OTP verify successfull",
        padding: "10px 20px",
      });
      onNext();
      setNumberVeryFied(true);
    } else {
      const toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: "error",
        title: "Please enter currect OTP",
        padding: "10px 20px",
      });
    }
  };

  // ========multi step form========

  function Step1({ onNext, onSkip }) {
    const [formData, setFormData] = useState({
      firstname: "",
      email: "",
      mobile: "",
      password: "",
      confirmpassword: "",
      consent1: false,
      consent2: false,
    });
    const handleInputChange = (e) => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    };

    const handleNext = () => {
      // onNext({ name });
      handleGetOTP(onNext, formData);
    };
    const handleSkip = () => {
      onSkip();
    };

    return (
      <Form>
        <h1 className="mb-5" style={{ color: "#007387" }}>
          realstate.com
        </h1>
        <div className="">
          <div className="d-flex align-items-center justify-content-between">
            <label>Enter mobile No</label>
            {numberVeryfied && (
              <div
                style={{
                  backgroundColor: "#38761d",
                  borderRadius: "8px",
                  padding: "3px 8px",
                  marginBottom: "5px",
                }}
              >
                <RiVerifiedBadgeFill color="#FFF" />
                <span style={{ color: "#FFF" }}>Your number is verified</span>
              </div>
            )}
          </div>
          {numberVeryfied ? (
            <input
              disabled
              type="text"
              name="mobile"
              placeholder="Mobile No*"
              value={numberVeryfy}
              onChange={handleInputChange}
            />
          ) : (
            <input
              type="text"
              name="mobile"
              placeholder="Mobile No*"
              value={formData.mobile}
              onChange={handleInputChange}
            />
          )}
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <Button
            style={{
              padding: "8px 20px",
              borderRadius: "2px",
              backgroundColor: "#3d85c6 ",
              border: "none",
            }}
            onClick={numberVeryfied ? handleSkip : handleNext}
          >
            Continue
          </Button>
        </div>
      </Form>
    );
  }

  function Step2({ data, onPrev, onNext, onSkip }) {
    const [otp, setOtp] = useState("");
    const handleotpChange = (e, index) => {
      const { value } = e.target;
      setOtp(value);
    };

    const handleNext = () => {
      handleVerify(onNext, otp);
    };
    const handleSkip = () => {
      onSkip();
    };

    return (
      <Form>
        <Form.Group>
          <h1 className="mb-5" style={{ color: "#007387" }}>
            realstate.com
          </h1>
          <div className="">
            <label>Please enter six digit OTP*</label>
            <input
              type="text"
              name="otp"
              placeholder="OTP*"
              value={otp}
              maxLength="6"
              onChange={handleotpChange}
            />
          </div>
          {/* <div className="d-flex justify-content-center">
            <button
              onClick={handleVerify}
              className="theme-btn-1 btn reverse-color btn-block"
              type="submit"
            >
              Verify
            </button>
          </div> */}
        </Form.Group>
        <div className="d-flex align-items-center justify-content-between">
          <Button
            style={{
              padding: "8px 20px",
              borderRadius: "2px",
              backgroundColor: "#FFF",
              color: "#222",
              border: "1.2px solid #CCC",
            }}
            onClick={onPrev}
          >
            Previous
          </Button>
          <Button
            style={{
              padding: "8px 20px",
              borderRadius: "2px",
              backgroundColor: "#007387",
              border: "none",
            }}
            onClick={numberVeryfied ? handleSkip : handleNext}
          >
            Continue
          </Button>
        </div>
      </Form>
    );
  }

  function Step3({ data, onPrev, onNext }) {
    const [dob, setDob] = useState("");
    const [formData, setFormData] = useState({
      firstname: "",
      email: "",
      mobile: "",
      password: "",
      confirmpassword: "",
      consent1: false,
      consent2: false,
    });
    const handleInputChange = (e) => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    };

    const handleDateChange = (e) => {
      const { value } = e.target;
      // Format the date as "YYYY-MM-DD"
      // const formattedDate = formatDate(value);
      const formattedDate = moment(value, "YYYY-MM-DD");
      setDob(formattedDate._i);
      console.log("formattedDate: ", formattedDate._i);
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const handleNext = () => {
      handleRegister(onNext, formData, dob);
    };
    const handleSkip = () => {
      onSkip();
    };
    return (
      <>
        <label>Full Name*</label>
        <input
          type="text"
          name="firstname"
          placeholder="Full Name" //add fullname field
          value={formData.firstname}
          onChange={handleInputChange}
        />
        <label>Email*</label>
        <input
          type="text"
          name="email" //add email field
          placeholder="Email*"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label>Date of birth*</label>
        <input
          style={{
            padding: "15px",
            border: "1.5px solid #CCC",
            marginBottom: "20px",
            width: "100%",
          }}
          type="date"
          name="dob"
          placeholder="Date of birth*"
          value={dob}
          onChange={handleDateChange}
        />
        <label>Password*</label>
        <input
          type="password"
          name="password"
          placeholder="Password*"
          value={formData.password}
          onChange={handleInputChange}
        />
        <label>Confirm Password*</label>
        <input
          type="password" // add confirm password field
          name="confirmpassword"
          placeholder="Confirm Password*"
          value={formData.confirmpassword}
          onChange={handleInputChange}
        />
        {/* <div className="btn-wrapper">
          <button
            onClick={handleRegister}
            className="theme-btn-1 btn reverse-color btn-block"
            type="submit"
          >
            CREATE ACCOUNT
          </button>
        </div> */}
        <div className="d-flex align-items-center justify-content-between">
          <Button
            style={{
              padding: "8px 20px",
              borderRadius: "2px",
              backgroundColor: "#FFF",
              color: "#222",
              border: "1.2px solid #CCC",
            }}
            onClick={onPrev}
          >
            Previous
          </Button>
          <Button
            style={{
              padding: "8px 20px",
              borderRadius: "2px",
              backgroundColor: "#007387",
              border: "none",
            }}
            onClick={handleNext}
          >
            Continue
          </Button>
        </div>
      </>
    );
  }

  const [step, setStep] = useState(1);
  // const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    // setFormData({ ...formData, ...data });
    setStep(step + 1);
  };
  const handleSkipPhoneOtp = (data) => {
    // setFormData({ ...formData, ...data });
    setStep(3);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <>
      <LayoutOne topbar={true}>
        {/* <ShopBreadCrumb title="Account" sectionPace="" currentSlug="Register" /> */}

        {/* <!-- LOGIN AREA START (Register) --> */}
        <div className="ltn__login-area pb-50 pt-50">
          <Row>
            {/* <Col xs={12}>
              <div className="section-title-area text-center">
                <h1 className="section-title">
                  Register <br />
                  Your Account
                </h1>
              </div>
            </Col> */}
          </Row>
          <Container fluid>
            <Row>
              <Col md={6}>
                <div className="account-login-inner">
                  <form
                    onSubmit={handleSubmit}
                    className="ltn__form-box contact-form-box"
                  >
                    {step === 1 && (
                      <Step1 onNext={handleNext} onSkip={handleSkipPhoneOtp} />
                    )}
                    {step === 2 && (
                      <Step2
                        // data={formData}
                        onPrev={handlePrev}
                        onNext={handleNext}
                        onSkip={handleSkipPhoneOtp}
                      />
                    )}
                    {step === 3 && (
                      <Step3
                        // data={formData}
                        onPrev={handlePrev}
                        onNext={handleNext}
                      />
                    )}
                  </form>
                  <div className="by-agree text-center">
                    <p>By creating an account, you agree to our:</p>
                    <p>
                      <Link href="#">
                        TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp;
                        PRIVACY POLICY
                      </Link>
                    </p>
                    <div className="go-to-btn mt-50">
                      <Link href="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} className="overflow-hidden">
                <div>
                  <img src={`/img/register-img/reg1.jpg`} alt="reg1" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- LOGIN AREA END --> */}
      </LayoutOne>
      {/* <Modal
        show={otpModalShow}
        onHide={handleClose}
        animation={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ padding: "40px" }}></Modal.Header>
        <Modal.Body>
          <h1 className="text-center mb-5">OTP Verification</h1>
          <div className="d-flex justify-content-center">
            <input
              style={{ width: "400px", textAlign: "center" }}
              type="text"
              name="otp"
              placeholder="OTP*"
              value={otp}
              maxLength="6"
              onChange={handleotpChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={handleVerify}
              className="theme-btn-1 btn reverse-color btn-block"
              type="submit"
            >
              Verify
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>

          <button
            onClick={() => setotpModalShow(false)}
            className="theme-btn-1 btn reverse-color btn-block"
            type="submit"
          >
            Close
          </button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default Register;
