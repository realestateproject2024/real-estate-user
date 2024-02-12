import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productSlug } from "@/lib/product";
import Link from "next/link";
import HeaderTopBarThree from "./headerTopBar/headerTopBarStyleThree";
import HeaderCartMenu from "./elements/headerCartMenu";
import MobileMenu from "./elements/mobileMennu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clsx from "clsx";
import { FaRegUser } from "react-icons/fa";
import MenuList from "@/components/header/elements/menuList";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { userAuth } from "@/store";

const HeaderStyleOne = function ({ SetToggleClassName, topbar }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const loginAuth = useSelector((state) => state.userAuthReducer.loginAuth);
  const [userAuthTwo, setUserAuthTwo] = useState(false);
  const [searchFormOpener, searchFormOpenerSet] = useState(false);
  const [cartMenuOpener, cartMenuOpenerSet] = useState(false);
  const [overlayBtn, SetoverlayBtn] = useState(false);
  const [offCanVastoggleBtn, SetOffCanVastoggleBtn] = useState(false);

  useEffect(() => {
    setUserAuthTwo(loginAuth);
  }, [loginAuth]);

  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout your account",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Loged Out",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Loged Out",
          text: "Your account successfully Loged Out",
          icon: "success",
        });
        dispatch(
          userAuth({
            loginAuth: false,
            token: "",
          })
        );
        router.push("/");
      }
    });
  };

  function offcanVasToggler() {
    SetToggleClassName(true);
    SetoverlayBtn(true);
    SetOffCanVastoggleBtn((offCanVastoggleBtn) => !offCanVastoggleBtn);
  }

  function searchForm() {
    searchFormOpenerSet((searchFormOpener) => !searchFormOpener);
  }

  function cartMenu() {
    SetoverlayBtn(true);
    cartMenuOpenerSet((cartMenuOpener) => !cartMenuOpener);
    SetToggleClassName(false);
  }

  function closeSideBar() {
    SetoverlayBtn(false);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
  }

  function overlay() {
    SetoverlayBtn((overlayBtn) => !overlayBtn);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
    SetToggleClassName(false);
  }

  const { cartItems } = useSelector((state) => state.cart);

  const [scroll, setScroll] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const header = document.querySelector(".ltn__header-sticky");
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const { products } = useSelector((state) => state.product);
  const [currentItems, setCurrentItems] = useState([]);

  const [query, setQuery] = useState("");
  const keys = ["title"];
  const SearchProduct = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const updatedProducts = query.length ? SearchProduct(products) : [];

  useEffect(() => {
    setCurrentItems(updatedProducts);
  }, [products, query]);

  return (
    <>
      <header className="ltn__header-area ltn__header-5">
        {/* <!-- ltn__header-top-area start --> */}
        {topbar ? <HeaderTopBarThree /> : null}

        {/* <!-- ltn__header-top-area end --> */}

        {/* <!-- ltn__header-middle-area start --> */}
        <div
          className={clsx(
            "ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white",
            scroll > headerHeight && "sticky-active"
          )}
        >
          <Container>
            <Row>
              <Col>
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <Link href="/">
                      {/* <img src="/img/logo.png" alt="Logo" /> */}
                      <h3>Real Estate</h3>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col className="header-menu-column">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu">
                      <MenuList addListing={false} />
                    </div>
                  </nav>
                </div>
              </Col>
              <Col className="ltn__header-options ltn__header-options-2 mb-sm-20">
                {/* <!-- user-menu --> */}
                <div className="ltn__drop-menu user-menu">
                  <ul>
                    {/* <li
                      style={{
                        marginRight: "15px",
                      }}
                    >
                      <div className="header-top-btn">
                        <Link href="/add-listing">Login</Link>
                      </div>
                    </li>
                    <li
                      style={{
                        marginRight: "15px",
                      }}
                    >
                      <div className="header-top-btn ml-2">
                        <Link href="/add-listing">Register</Link>
                      </div>
                    </li>
                    <li
                      style={{
                        marginRight: "15px",
                      }}
                    >
                      <div className="header-top-btn ml-2">
                        <Link href="/add-listing">My Profile</Link>
                      </div>
                    </li> */}

                    {userAuthTwo ? (
                      <li
                        style={{
                          marginLeft: "20px",
                        }}
                      >
                        <Link href="#">
                          <FaRegUser />
                        </Link>
                        <ul>
                          <li>
                            <Link href={"#"} onClick={logout}>
                              Logout
                            </Link>
                          </li>
                          <li>
                            <Link href="/my-account">My Account</Link>
                          </li>
                        </ul>
                      </li>
                    ) : (
                      <div className="header-top-btn">
                        <Link href="/login">Sign In</Link>
                      </div>
                    )}
                  </ul>
                </div>
                {/* <!-- Mobile Menu Button --> */}
                <div className="mobile-menu-toggle d-xl-none">
                  <button
                    onClick={offcanVasToggler}
                    className={`ltn__utilize-toggle ${
                      offCanVastoggleBtn ? "close" : ""
                    }`}
                  >
                    <svg viewBox="0 0 800 600">
                      <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                      ></path>
                      <path d="M300,320 L540,320" id="middle"></path>
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
                      ></path>
                    </svg>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <!-- ltn__header-middle-area end --> */}
      </header>

      {/* <!-- Utilize Cart Menu Start --> */}

      <HeaderCartMenu
        cartMenu={cartMenu}
        cartMenuOpener={cartMenuOpener}
        closeSideBar={closeSideBar}
      />

      {/* <!-- Utilize Cart Menu End --> */}

      {/* <!-- Utilize Mobile Menu Start --> */}
      <MobileMenu
        offCanVastoggleBtn={offCanVastoggleBtn}
        offcanVasToggler={offcanVasToggler}
        closeSideBar={closeSideBar}
      />

      {/* <!-- Utilize Mobile Menu End --> */}
      <div
        className="ltn__utilize-overlay"
        style={{
          display: overlayBtn ? "block" : "none",
          opacity: overlayBtn ? "1" : "0",
        }}
        onClick={overlay}
      ></div>
    </>
  );
};

export default HeaderStyleOne;
