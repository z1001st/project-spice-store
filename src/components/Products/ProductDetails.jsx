import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../../redux/actions/action";
import { toast } from "react-toastify";

import SliderImagesProduct from './SliderImagesProduct';
import { Alert } from "react-bootstrap";
import Notification from "../Include/Notification";
import CategoriesLeft from "./CategoriesLeft";


const ProductDetails = () => {
  const selectedProduct = useSelector((state) => state.cartreducer.selectedProduct);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
    toast.success('Item added to cart successfully', {
    });
  }



  return (



    <div className="container">
      <div className="breadcrumb-box">
        <div className="breadcrumb-inner">
          <div className="left">
            <a
              className="home "
              href="#"
              title="Return to Home"
            >
              Home
            </a>
            <span className="navigation-pipe">
              <span>
                <a href="#" title="Grocery">
                  <span>Grocery</span>
                </a>
              </span>


              <span className="navigation-pipe" />
              ORGANIC
            </span>
          </div>
        </div>

      </div>
      <div className="content_product_box">
        <div className="row">
          <div className="col-md-3 col-lg-2">
           <CategoriesLeft/>
          </div>
          <div className="col-md-9 col-lg-10">
            <div className="row ">
              {selectedProduct ? (
                <>

                  <div className="col-md-12 col-lg-5">

                    <div className="image-ss ">
                      <SliderImagesProduct />

                    </div>
                  </div>

                  <div className="col-md-12 col-lg-7 ">
                    <div className="pb-right-column">
                      <h1 itemProp="name">{selectedProduct.rname}</h1>

                      <div className="content_prices">
                        <p className="our_price_display">
                          <span id="our_price_display" className="price">
                            {selectedProduct.price.toFixed(2)}$
                          </span>
                        </p>
                        <p id="old_price" className="hidden">
                          <span className="price" />
                        </p>
                      </div>
                      <div id="short_description_block">
                        <div
                          id="short_description_content"
                          className="rte align-justify"
                        >
                          <p>
                            {selectedProduct.description}
                          </p>
                        </div>
                      </div>
                      <ul className="feature-list">
                        <li>
                          <i className="fa fa-check" aria-hidden="true" />
                          <span>Weight: </span>
                          {selectedProduct.weight}
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true" />
                          <span>Country of origin: </span>
                          {selectedProduct.countryOfOrigin}
                        </li>
                      </ul>
                      <div className="product-description ">
                        <form id="buy_block" action="#" method="post">
                          <p className="hidden">
                            <input type="hidden" name="token" defaultValue="" />
                            <input
                              type="hidden"
                              name="id_product"
                              defaultValue=""
                              id="product_page_product_id"
                            />
                            <input type="hidden" name="add" defaultValue={1} />
                            <input
                              type="hidden"
                              name="id_product_attribute"
                              id="idCombination"
                              defaultValue=""
                            />
                          </p>
                          <div className="quantity-and-cart-container">
                            <div className="quantity-box">
                              <div className="option" style={{ marginRight: 40 }}>
                                <div id="quantity_wanted_p" className="input-group">
                                  <span className="input-group-cart minus" onClick={decreaseQuantity}>
                                    <i className="fa fa-angle-left" aria-hidden="true" />
                                  </span>
                                  <input style={{ height: 46 }}
                                    type="text"
                                    name="qty"
                                    id="quantity_wanted"
                                    className="text form-control text-center"
                                    value={quantity}
                                  />
                                  <span className="input-group-cart plus" onClick={increaseQuantity}>
                                    <i className="fa fa-angle-right" aria-hidden="true" />
                                  </span>
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => send({ ...selectedProduct, quantity })}
                              className="cart-button-primary btn-effect"

                            >
                              <span className="text">Add To Cart</span>
                            </button>
                          </div>


                        </form>
                      </div>
                      <ul className="other-info">

                        <li id="availability_statut" className="availability_statut">
                          <label id="pQuantityAvailable">Availability:</label>
                          <span
                            id="availability_value"
                            className="label-availability"
                          >
                            In stock
                          </span>
                        </li>
                        <li id="availability_statut" className="availability_statut">
                          <label>Questions?</label>
                          <span
                            id="availability_value"
                            className="label-availability"
                          >
                            <a href="https://api.whatsapp.com/send?l=en&phone=85298883559">
                              Whatsapp Us
                            </a>
                          </span>
                        </li>
                      </ul>

                    </div>
                  </div>
                  <div id="more_info_block">
                    <div className="tabs-info">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link active"
                            id="description-tab"
                            data-bs-toggle="tab"
                            href="#tabs-1"
                            role="tab"
                            aria-controls="tabs-1"
                            aria-selected="true"
                          >
                            Description
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link"
                            id="specification-tab"
                            data-bs-toggle="tab"
                            href="#tabs-2"
                            role="tab"
                            aria-controls="tabs-2"
                            aria-selected="false"
                          >
                            Specification
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link"
                            id="review-tab"
                            data-bs-toggle="tab"
                            href="#tabs-3"
                            role="tab"
                            aria-controls="tabs-3"
                            aria-selected="false"
                          >
                            Review
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="tabs-1"
                        role="tabpanel"
                        aria-labelledby="description-tab"
                      >
                        <p>
                          {selectedProduct.descriptionContent}
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tabs-2"
                        role="tabpanel"
                        aria-labelledby="specification-tab"
                      >
                        <section className="page-product-box">
                          <div className="specification">
                            <span className="title">Country of origin:</span>
                            India
                          </div>
                        </section>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="tabs-3"
                        role="tabpanel"
                        aria-labelledby="review-tab"
                      >
                        <div id="idTab5">
                          <div id="product_comments_block_tab">
                            <p className="align_center">
                              No customer reviews for the moment.
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </>
              ) : (

                <Alert variant="warning">
                  <Alert.Heading>Your shopping cart is empty!</Alert.Heading>


                </Alert>
              )}



            </div>

          </div>
        </div>
      </div>

      <Notification />
    </div>



  );
}

export default ProductDetails;
