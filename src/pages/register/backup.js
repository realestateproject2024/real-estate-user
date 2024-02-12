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
function Register() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [otpModalShow, setotpModalShow] = useState(false);
  const [numberVeryfy, setNumberVeryFy] = useState(false);
  const [dob, setDob] = useState("");
  const [otp, setOtp] = useState("");
  const inputs = useRef([]);
  const handleClose = () => setotpModalShow(false);
  // State variable to store form data
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
    consent1: false,
    consent2: false,
  });

  // Function to handle input changes and update formData state
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

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access formData state to get input values
    console.log("Form Data:", formData);
    // Here you can perform any further actions like sending the data to a server
  };

  const handleGetOTP = async (onNext) => {
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

  const handleRegister = async (e) => {
    e.preventDefault();
    // console.log({
    //   name: formData.firstname,
    //   dob: dob,
    //   phone: formData.mobile,
    //   email: formData.email,
    //   password: formData.password,
    // });
    if (
      formData.firstname !== "" &&
      formData.mobile !== "" &&
      dob !== "" &&
      formData.email !== "" &&
      formData.password !== ""
    ) {
      try {
        if (formData.password === formData.confirmpassword) {
          const response = await registerApi({
            name: formData.firstname,
            dob: dob,
            phone: formData.mobile,
            email: formData.email,
            password: formData.password,
          });
          console.log("response: ", response);
          if (response.message === "User already exist") {
            swal("Oops", response.message, "error");
          } else {
            swal(response.message, "You clicked the button!", "success");
            dispatch(
              userAuth({
                loginAuth: true,
                token: response.token,
              })
            );
            router.push("/");
          }
        } else {
          swal("Oops", "password not matched", "error");
        }
      } catch (error) {
        console.log(error);
        // Handle error if needed
      }
    } else {
      swal("Oops", "Please fill all the field", "error");
    }
  };

  const handleotpChange = (e, index) => {
    const { value } = e.target;
    setOtp(value);
  };

  const handleVerify = () => {
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

  function Step1({ onNext }) {
    const [name, setName] = useState("");

    const handleNext = () => {
      // onNext({ name });
      handleGetOTP(onNext);
    };

    return (
      <Form>
        <h1 className="mb-5" style={{ color: "#3652AD" }}>
          realstate.com
        </h1>
        <div className="">
          <input
            type="text"
            name="mobile"
            placeholder="Mobile No*"
            value={formData.mobile}
            onChange={handleInputChange}
          />
          {/* <button
            disabled={numberVeryfy ? true : false}
            style={{
              height: "65px",
              backgroundColor: numberVeryfy ? "green" : "",
              color: numberVeryfy ? "#FFF" : "",
            }}
            className="theme-btn-1 btn reverse-color btn-block"
            type="button" // Change type to button to prevent form submission
            onClick={handleNext} // Add onClick event handler
            // onClick={handleGetOTP} // Add onClick event handler
          >
            {numberVeryfy ? "verified" : "Get OTP"}
          </button> */}
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <Button
            style={{
              padding: "8px 20px",
              borderRadius: "2px",
              backgroundColor: "#3652AD",
              border: "none",
            }}
            onClick={handleNext}
          >
            Continue
          </Button>
        </div>
      </Form>
    );
  }

  function Step2({ data, onPrev, onNext }) {
    const [formData, setFormData] = useState({
      firstname: "",
      email: "",
      mobile: "",
      password: "",
      confirmpassword: "",
      consent1: false,
      consent2: false,
    });

    const handleNext = () => {
      handleVerify();
    };

    return (
      <Form>
        <Form.Group>
          <h1 className="mb-5" style={{ color: "#3652AD" }}>
            realstate.com
          </h1>
          <div className="">
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
              backgroundColor: "#3652AD",
              border: "none",
            }}
            onClick={handleNext}
          >
            Continue
          </Button>
        </div>
      </Form>
    );
  }

  function Step3({ data, onPrev, onNext }) {
    const [email, setEmail] = useState("");

    const handleNext = () => {
      handleVerify();
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
          type="text"
          name="password"
          placeholder="Password*"
          value={formData.password}
          onChange={handleInputChange}
        />
        <label>Confirm Password*</label>
        <input
          type="text" // add confirm password field
          name="confirmpassword"
          placeholder="Confirm Password*"
          value={formData.confirmpassword}
          onChange={handleInputChange}
        />
        <label className="checkbox-inline">
          <input
            type="checkbox"
            name="consent1"
            checked={formData.consent1}
            onChange={handleInputChange}
          />
          &nbsp;I consent to Herboil processing my personal data in order to
          send personalized marketing material in accordance with the consent
          form and the privacy policy.
        </label>
        <label className="checkbox-inline">
          <input
            type="checkbox"
            name="consent2"
            checked={formData.consent2}
            onChange={handleInputChange}
          />
          &nbsp;By clicking create account, I consent to the privacy policy.
        </label>
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
              backgroundColor: "#3652AD",
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

  const [step, setStep] = useState(2);
  // const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
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
                    {step === 1 && <Step1 onNext={handleNext} />}
                    {step === 2 && (
                      <Step2
                        // data={formData}
                        onPrev={handlePrev}
                        onNext={handleNext}
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
