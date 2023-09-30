import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-start-organic.png';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../../redux/actions/action';



const Header = () => {
    const [price, setPrice] = useState(0);
    const getdata = useSelector((state) => state.cartreducer.carts);
    const dispatch = useDispatch();

    const dlt = (id) => {
        dispatch(DLT(id));
    };

    const total = () => {
        const totalPrice = getdata.reduce((total, item) => total + item.price * item.qnty, 0);
        setPrice(totalPrice);
    };

    useEffect(() => {
        total();
    }, [total]);

    return (

        <header header>
            <div id="header-top">
                <div className="container ">
                    <div className="header-top-wrapper d-flex align-items-center">
                        <div className="left">
                            <div className="contact-list">
                                <ul className="d-flex align-items-center">
                                    <li>
                                        <i className="fa fa-phone" />
                                        <span className="text">2944-2336</span>
                                    </li>
                                    <li>
                                        <i className="fa-brands fa-whatsapp" />
                                        <span className="text">
                                            <a href="https://api.whatsapp.com/send?l=en&phone=85298883559">
                                                9888-3559
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right">
                            <ul className="d-flex align-items-center">
                                <li>
                                    <a href="#">Order Tracking</a>
                                </li>
                                <li>
                                    <a href="#">
                                        USD
                                        <span>
                                            <i className="ri-arrow-down-s-line" />
                                        </span>
                                    </a>
                                    <ul>
                                        <li className="current">
                                            <a href="#">USD</a>
                                        </li>
                                        <li>
                                            <a href="#">EURO</a>
                                        </li>
                                        <li>
                                            <a href="#">GBP</a>
                                        </li>
                                        <li>
                                            <a href="#">IDR</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        English
                                        <span>
                                            <i className="ri-arrow-down-s-line" />
                                        </span>
                                    </a>
                                    <ul>
                                        <li className="current">
                                            <a href="#">ENGLISH</a>
                                        </li>
                                        <li>
                                            <a href="#">German</a>
                                        </li>
                                        <li>
                                            <a href="#">Spanish</a>
                                        </li>
                                        <li>
                                            <a href="#">Bahasa</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="header-main" className="container ">

                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid navbar-container ">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <a className="navbar-brand" href="/">
                            <img
                                src={Logo}
                                alt="logo-start-organic"
                                height="60px"
                            />
                        </a>
                        <div className="cart-mobile">
                            <div className="btn-group" id="cart-block">
                                <a href="#" className="dropdown-toggle cart-icon" data-bs-toggle="dropdown">
                                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                                    <span className="ajax_cart_quantity"> {getdata.length}  </span>
                                </a>
                                <span className="cart_block_total ajax_block_cart_total">$ {price}</span>
                                <div className="dropdown-menu dropdown-menu-end shoppingcart-box">
                                    {getdata.length ? (









                                        <div className="cart_details" style={{ width: "24rem", padding: 10 }}>



                                            <ul className="list products cart_block_list" id="cart_block_list">
                                                {getdata.map((e) => (
                                                    <li key={e.id}>
                                                        <div className=" d-flex align-items-center  ">
                                                            <div className="item-image">
                                                                <Link to="/view-cart"
                                                                >

                                                                    <img
                                                                        src={e.imgdata}
                                                                        style={{ width: "auto", height: "5rem" }}
                                                                        title={e.rname}
                                                                    />

                                                                </Link>


                                                            </div>
                                                            <div className="item-details">
                                                                <div className="description__cart ">
                                                                    <a href="#" title={e.rname}>
                                                                        {e.rname}
                                                                    </a>
                                                                    <div className="price-quantity">
                                                                        <span className="price">{e.price.toFixed(3)}$</span>
                                                                    </div>
                                                                    <div className="quantity-formatted">
                                                                        x <span className="quantity">{e.qnty}</span>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div
                                                                className="remove-item"
                                                                style={{

                                                                    fontSize: 20,
                                                                    cursor: "pointer",
                                                                }}
                                                                onClick={() => dlt(e.id)}
                                                            >
                                                                <i className="fas fa-close" style={{
                                                                    position: "absolute",
                                                                    top: 7,
                                                                    right: 0,
                                                                    fontSize: 16,
                                                                    cursor: "pointer",
                                                                }} />

                                                            </div>
                                                        </div>


                                                    </li>

                                                ))}
                                            </ul>

                                        </div>
                                    ) : (
                                        <div
                                            className="card_details d-flex justify-content-center align-items-center"
                                            style={{ width: "24rem", padding: 10, position: "relative" }}
                                        >
                                            <i
                                                className="fas fa-close smallclose"

                                                style={{
                                                    position: "absolute",
                                                    top: 2,
                                                    right: 20,
                                                    fontSize: 23,
                                                    cursor: "pointer",

                                                }}
                                            />
                                            <p style={{ fontSize: 22 }}>Your cart is empty</p>
                                            <img
                                                alt=""
                                                className="emptycart_img"
                                                style={{ width: "5rem", padding: 10 }}
                                            />
                                        </div>
                                    )}
                                    <div className="checkout-info">
                                        <div className="shipping">
                                            <span className="label">Shipping:</span>
                                            <span
                                                id="cart_block_shipping_cost"
                                                className="ajax_cart_shipping_cost pull-right"
                                            >
                                                HKD 0.00
                                            </span>
                                        </div>
                                        <div className="total">
                                            <span className="label">Total:</span>
                                            <span className="cart_block_total ajax_block_cart_total pull-right">
                                                {price}
                                            </span>
                                        </div>
                                        <div className="cart-button">
                                            <Link to="/view-cart"
                                                id="button_order_cart"
                                                className="cart-button-primary btn-effect"
                                                title="Check out">


                                                View Cart
                                            </Link>
                                            <Link to="/checkout"
                                                id="button_order_cart"
                                                className="cart-button-primary btn-effect mt-3"
                                                title="Check out">


                                                Check out
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 jms-megamenu">
                                <li className="nav-item">
                                    <Link to="/" aria-current="page">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/product">PRODUCT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/news">NEWS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/gallery">
                                        GALLERY
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about">ABOUT US</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact">CONTACT</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="cart_desktop">
                            <div className="btn-group" id="cart-block">



                                <a href="#" className="dropdown-toggle cart-icon" data-bs-toggle="dropdown">
                                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                                    <span className="ajax_cart_quantity"> {getdata.length} </span>
                                </a>
                                <span className="cart_block_total ajax_block_cart_total">{price.toFixed(2)}$</span>
                                <div className="dropdown-menu dropdown-menu-end shoppingcart-box">
                                    {getdata.length ? (


                                        <div className="cart_details" style={{ width: "24rem", padding: 10 }}>



                                            <ul className="list products cart_block_list" id="cart_block_list">
                                                {getdata.map((e) => (
                                                    <li key={e.id}>
                                                        <div className=" d-flex align-items-center  ">
                                                            <div className="item-image">
                                                                <Link to="/view-cart"
                                                                >

                                                                    <img
                                                                        src={e.imgdata}

                                                                        title={e.rname}
                                                                    />

                                                                </Link>

                                                            </div>
                                                            <div className="item-details">
                                                                <div className="description__cart ">
                                                                    <a href="#" title={e.rname}>
                                                                        {e.rname}
                                                                    </a>
                                                                    <div className="price-quantity">
                                                                        <span className="price">{e.price.toFixed(2)}$</span>
                                                                    </div>
                                                                    <div className="quantity-formatted">
                                                                        x <span className="quantity">{e.qnty}</span>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div
                                                                className="remove-item"
                                                                style={{

                                                                    fontSize: 20,
                                                                    cursor: "pointer",
                                                                }}
                                                                onClick={() => dlt(e.id)}
                                                            >
                                                                <i className="fas fa-close" style={{
                                                                    position: "absolute",
                                                                    top: 7,
                                                                    right: 0,
                                                                    fontSize: 16,
                                                                    cursor: "pointer",
                                                                }} />

                                                            </div>
                                                        </div>

                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                    ) : (
                                        <div
                                            className="card_details d-flex justify-content-center align-items-center"
                                            style={{ width: "24rem", padding: 10, position: "relative" }}
                                        >
                                            <i
                                                className="fas fa-close smallclose"

                                                style={{
                                                    position: "absolute",
                                                    top: 2,
                                                    right: 20,
                                                    fontSize: 23,
                                                    cursor: "pointer",

                                                }}
                                            />
                                            <p style={{ fontSize: 22 }}>Your cart is empty</p>
                                            <img
                                                src="./cart.gif"
                                                alt=""
                                                className="emptycart_img"
                                                style={{ width: "5rem", padding: 10 }}
                                            />
                                        </div>
                                    )}
                                    <div className="checkout-info">
                                        <div className="shipping">
                                            <span className="label">Shipping:</span>
                                            <span
                                                id="cart_block_shipping_cost"
                                                className="ajax_cart_shipping_cost pull-right"
                                            >
                                                0.00$
                                            </span>
                                        </div>
                                        <div className="total">
                                            <span className="label">Total:</span>
                                            <span className="cart_block_total ajax_block_cart_total pull-right">
                                                {price.toFixed(2)}$
                                            </span>
                                        </div>
                                        <div className="cart-button">
                                            <Link to="/view-cart"
                                                id="button_order_cart"
                                                className="cart-button-primary btn-effect"
                                                title="Check out">


                                                View Cart
                                            </Link>
                                            <Link to="/checkout"
                                                id="button_order_cart"
                                                className="cart-button-primary btn-effect mt-3"
                                                title="Check out">


                                                Check out
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </header>











    )
}

export default Header;
