import { useSelector } from "react-redux";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { LayoutOne } from "@/layouts";
import Feature from "@/components/features";
import TitleSection from "@/components/titleSection";
import ProductItem from "@/components/product";
import VideoBanner from "@/components/banner/videoBanner";
import aminitiesData from "@/data/aminities/index.json";
import AminitiesItem from "@/components/aminities/item";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import testimonialData from "@/data/testimonial";
import featuresData from "@/data/service";
import CarDealerSearchFormTwo from "@/components/carDealerSearchForm/indexTwo";
import { useEffect, useState } from "react";
import { getPropertyApi } from "@/lib/api";

function HomePage(props) {
  const { products } = useSelector((state) => state.product);
  const featuredProducts = getProducts(products, "buying", "featured", 5);
  const latestListingsProducts = getProducts(products, "buying", "new", 6);
  const featureData = getProducts(featuresData, "buying", "featured", 3);
  const [propertyApiData, setPropetyApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Function to fetch data from both APIs
    const fetchData = async () => {
      setLoading(true);
      try {
        // Calling businessApi and homeApi simultaneously
        const [propertyData] = await Promise.all([
          getPropertyApi({
            page: "1",
            count: "6",
          }),
        ]);

        // Updating state with the API data
        setPropetyApiData(propertyData.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);
  console.log("propertyApiData: ", propertyApiData);
  // console.log("latestListingsProducts: ", latestListingsProducts);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? "slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );
  const productCarouselsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1799,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testiMonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  return (
    <>
      <LayoutOne topbar={true}>
        {/* <!-- SLIDER AREA START (slider-4) --> */}
        <div className="ltn__slider-area ltn__slider-4">
          <div className="ltn__slide-animation-active">
            <div
              className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-4 bg-image bg-overlay-theme-black-60"
              style={{
                backgroundImage: `url("/img/slider/11.jpg")`,
              }}
            >
              <div className="text-left">
                <CarDealerSearchFormTwo />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- SLIDER AREA END --> */}

        {/* <!-- PRODUCT SLIDER AREA START --> */}
        <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-70">
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "Property",
                    title: "Latest Listings",
                  }}
                />
              </Col>
            </Row>

            <Row>
              {latestListingsProducts.map((product, key) => {
                const slug = productSlug(product.title);

                const discountedPrice = getDiscountPrice(
                  product.price,
                  product.discount
                ).toFixed(2);
                const productPrice = product.price.toFixed(2);
                const cartItem = cartItems.find(
                  (cartItem) => cartItem.id === product.id
                );
                const wishlistItem = wishlistItems.find(
                  (wishlistItem) => wishlistItem.id === product.id
                );
                const compareItem = compareItems.find(
                  (compareItem) => compareItem.id === product.id
                );

                return (
                  <Col xs={12} sm={6} xl={4} key={key}>
                    <ProductItem
                      key={product.id}
                      productData={product}
                      slug={slug}
                      baseUrl="shop"
                      discountedPrice={discountedPrice}
                      // productPrice={productPrice}
                      cartItem={cartItem}
                      wishlistItem={wishlistItem}
                      compareItem={compareItem}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>

        {/* <!-- FEATURE AREA START ( Feature - 6) --> */}
        <Feature
          classes="section-bg-1"
          servicebtn={true}
          iconTag={false}
          data={featureData}
          headingClasses="section-subtitle-2"
          titleSectionData={{
            sectionClasses: "text-center",
            subTitle: "Our Services",
            title: "Our Main Focus",
          }}
        />
        {/* PRODUCT SLIDER AREA START */}
        <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "Properties",
                    title: "Featured Listings",
                  }}
                />
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                {!!featuredProducts?.length ? (
                  <Slider
                    {...productCarouselsettings}
                    className="ltn__product-slider-item-four-active-full-width slick-arrow-1"
                  >
                    {featuredProducts.map((product, key) => {
                      const slug = productSlug(product.title);

                      const discountedPrice = getDiscountPrice(
                        product.price,
                        product.discount
                      ).toFixed(2);
                      const productPrice = product.price.toFixed(2);
                      const cartItem = cartItems.find(
                        (cartItem) => cartItem.id === product.id
                      );
                      const wishlistItem = wishlistItems.find(
                        (wishlistItem) => wishlistItem.id === product.id
                      );
                      const compareItem = compareItems.find(
                        (compareItem) => compareItem.id === product.id
                      );

                      return (
                        <ProductItem
                          key={product.id}
                          productData={product}
                          slug={slug}
                          baseUrl="shop"
                          discountedPrice={discountedPrice}
                          // productPrice={productPrice}
                          cartItem={cartItem}
                          wishlistItem={wishlistItem}
                          compareItem={compareItem}
                        />
                      );
                    })}
                  </Slider>
                ) : null}
              </Col>
            </Row>
          </Container>
        </div>

        {/* <!-- VIDEO AREA START --> */}
        {/* <div className="ltn__video-popup-area">
          <VideoBanner />
        </div> */}
        {/* <!-- VIDEO AREA END --> */}
        {/* <!-- CATEGORY AREA START -->  */}
        <div className="ltn__category-area ltn__product-gutter pt-115 pb-90">
          <Container>
            <Row>
              <Col xs={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "Our Aminities",
                    title: "Building Aminities",
                    additionalClassName: "",
                  }}
                />
              </Col>
            </Row>
            <Row className="slick-arrow-1 justify-content-center">
              {aminitiesData.map((data, key) => {
                return (
                  <Col key={key} xs={12} sm={6} md={4} lg={3}>
                    <AminitiesItem data={data} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        {/* <!-- CATEGORY AREA END --> */}

        {/* <!-- TESTIMONIAL AREA START (testimonial-7) -->  */}
        <div
          className="ltn__testimonial-area bg-image-top pt-115 pb-70"
          style={{ backgroundImage: `url("../img/bg/20.jpg")` }}
        >
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "Our Testimonial",
                    title: "Clients Feedback",
                  }}
                />
              </Col>
            </Row>

            <Slider
              {...testiMonialsettings}
              className="ltn__testimonial-slider-5-active slick-arrow-1"
            >
              {testimonialData.map((data, key) => {
                return <TestimonialCarouselItem key={key} data={data} />;
              })}
            </Slider>
          </Container>
        </div>
        {/* <!-- TESTIMONIAL AREA END --> */}
      </LayoutOne>
    </>
  );
}

export default HomePage;
