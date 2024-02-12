import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import {
  getSortedProducts,
  productSlug,
  getDiscountPrice,
} from "@/lib/product";
import { LayoutOne } from "@/layouts";
import {
  FaThLarge,
  FaThList,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaCalendarAlt,
  FaCarAlt,
  FaCookie,
  FaDollyFlatbed,
} from "react-icons/fa";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import SideBar from "@/components/shopSideBar";
import ProductList from "@/components/product/list";
import Search from "@/components/search";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import ProductItem from "@/components/product";

function ShopLeftSideBar() {
  const router = useRouter();
  const { propertyType } = router.query;
  const { products } = useSelector((state) => state.product);
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [sortedProducts, setSortedProducts] = useState([]);
  const pageLimit = 6;
  const [currentItems, setCurrentItems] = useState(products);
  const [pageCount, setPageCount] = useState(0);

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  // ---------
  // --------
  // --------
  // --------
  // --------
  // --------
  // --------
  // --------

  //start property search
  const propertyData = {
    Apartments: [
      "Area",
      "Bedrooms",
      "Number_of_Toilets",
      "Lounges",
      "Property_Age",
      "Car_Entrance",
      "Area",
      "Availability_of_Electricity",
      "Special_Deck",
      "Role",
      "Elevator",
      "Interface",
      "Availability_of_Sanitation",
      "Water_Availability",
      "Last_Update",
    ],
    Villas: [
      "Bedrooms",
      "Interface",
      "Number_of_Toilets",
      "Lounges",
      "Lounge_Staircase",
      "View_Street",
      "Drivers_Room",
      "Courtyard",
      "Area",
      "Availability_of_Electricity",
      "Property_Age",
      "Maids_Room",
      "Kitchen",
      "Car_Entrance",
      "Water_Availability",
      "Availability_of_Sanitation",
    ],
    Buildings: [
      "Residential_or_Commercial",
      "Property_Age",
      "Area",
      "Availability_of_Sanitation",
      "Interface",
      "View_Street",
      "Number_of_Rooms",
      "Availability_of_Electricity",
    ],
    Houses: [
      "Bedrooms",
      "Number_of_Toilets",
      "Property_Age",
      "Area",
      "Length",
      "Availability_of_Electricity",
      "Interface",
      "Lounges",
      "View_Street",
      "Kitchen",
      "Display",
      "Water_Availability",
    ],
  };

  const [selectedValue, setSelectedValue] = useState("");
  const propertyTypes = ["Apartments", "Villas", "Buildings", "Houses"];

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  console.log("selectedValue: ", selectedValue);
  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  useEffect(() => {
    setSelectedValue(propertyType);
  }, []);

  const propertyFilter = propertyData[selectedValue];

  console.log("propertyFilter:", propertyFilter);

  //end property search

  // ---------
  // --------
  // --------
  // --------
  // --------
  // --------
  // --------
  // --------

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  const [query, setQuery] = useState("");
  const keys = ["title"];
  const SearchProduct = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);

    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );

    sortedProducts = filterSortedProducts;

    setSortedProducts(sortedProducts);

    setCurrentItems(sortedProducts.slice(offset, offset + pageLimit));

    setCurrentItems(
      SearchProduct(sortedProducts.slice(offset, offset + pageLimit))
    );
  }, [
    offset,
    products,
    sortType,
    sortValue,
    filterSortType,
    filterSortValue,
    query,
  ]);

  useEffect(() => {
    const endOffset = offset + pageLimit;
    setCurrentItems(products.slice(offset, endOffset));
    setPageCount(Math.ceil(products.length / pageLimit));
  }, [offset, pageLimit]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * pageLimit) % products.length;
    setOffset(newOffset);
  };

  return (
    <LayoutOne topbar={true}>
      {/* <!-- BREADCRUMB AREA START --> */}

      <ShopBreadCrumb
        title="Property Left Sidebar"
        sectionPace=""
        currentSlug="Property Left Sidebar"
        Bg={`url("../img/bg/14_2.jpg")`}
      />
      <div className="text-left">
        <Container>
          <div className="car-dealer-form-inner">
            <form action="#" className="ltn__car-dealer-form-box row">
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
                  <option value="">Type of real estate product</option>
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
                  <option>Bedrooms</option>
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
              </Col>
              {/* <Col xs={12} className="car-price-filter-range">
              <div className="btn-wrapper text-center">
                <Link
                  href="/property/left-sidebar"
                  className="btn theme-btn-1 btn-effect-1 text-uppercase"
                >
                  Search Property
                </Link>
              </div>
            </Col> */}
            </form>
          </div>
        </Container>
      </div>
      {/* <!-- BREADCRUMB AREA END -->
    
    <!-- PRODUCT DETAILS AREA START --> */}
      <div className="ltn__product-area ltn__product-gutter mb-120">
        <Container>
          <Row>
            <Col xs={12} lg={{ span: 8, order: 1 }}>
              <Tab.Container defaultActiveKey="first">
                <div className="ltn__shop-options">
                  <ul className="justify-content-between">
                    <li>
                      <div className="ltn__grid-list-tab-menu">
                        <Nav className="nav">
                          <Nav.Link eventKey="first">
                            <FaThLarge />
                          </Nav.Link>
                          <Nav.Link eventKey="second">
                            <FaThList />
                          </Nav.Link>
                        </Nav>
                      </div>
                    </li>

                    <li>
                      <div className="short-by text-center">
                        <Form.Select
                          className="form-control nice-select"
                          onChange={(e) =>
                            getFilterSortParams("filterSort", e.target.value)
                          }
                        >
                          <option value="default">Default</option>
                          <option value="priceHighToLow">
                            Price - High to Low
                          </option>
                          <option value="priceLowToHigh">
                            Price - Low to High
                          </option>
                        </Form.Select>
                      </div>
                    </li>
                  </ul>
                </div>

                <Search spaceBottom="mb-30" setQuery={setQuery} />

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                      <Row>
                        {currentItems.map((product, key) => {
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
                            <Col key={key} xs={12} sm={6}>
                              <ProductItem
                                key={product.id}
                                productData={product}
                                slug={slug}
                                baseUrl="shop"
                                discountedPrice={discountedPrice}
                                productPrice={productPrice}
                                cartItem={cartItem}
                                wishlistItem={wishlistItem}
                                compareItem={compareItem}
                              />
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="ltn__product-tab-content-inner ltn__product-list-view">
                      <Row>
                        {currentItems.map((product, key) => {
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
                            <Col key={key} xs={12}>
                              <ProductList
                                slug={slug}
                                baseUrl="shop/left-sidebar"
                                productData={product}
                                discountedPrice={discountedPrice}
                                productPrice={productPrice}
                                cartItem={cartItem}
                                wishlistItem={wishlistItem}
                                compareItem={compareItem}
                              />
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

              <div className="ltn__pagination-area text-center">
                <ReactPaginate
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={pageCount}
                  nextLabel={<FaAngleDoubleRight />}
                  previousLabel={<FaAngleDoubleLeft />}
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination ltn__pagination justify-content-center"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              </div>
            </Col>
            <Col xs={12} lg={{ span: 4, order: 0 }}>
              <SideBar
                products={products}
                getSortParams={getSortParams}
                propertyFilter={propertyFilter}
                selectedValue={selectedValue}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
}

export default ShopLeftSideBar;
