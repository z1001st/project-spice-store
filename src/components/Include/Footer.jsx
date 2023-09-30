import React from 'react'

const Footer = () => {
  return (
    <footer id="main-footer" className="pt-4">
  <div className="footer-newsletters">
    <div className="container">
      <div className="newsletter">
        <div className="wrapper">
          <div className="box">
            <div className="content">
              <h3>SIGN UP FOR OUR NEWSLETTER</h3>
              <div className="desc-text">
                Subscribe and get notifications about new updates &amp;
                exclusive discount.
              </div>
            </div>
            <form action="" className="search">
              <span className="icon-large">
                <i className="ri-mail-line" />
              </span>
              <input
                type="text"
                name="email"
                size={18}
                placeholder="Enter your e-mail"
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container footer-navbar">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6 col-6">
        <div className="addon-box">
          <div className="addon-titlez">
            <h3>HOTLINES</h3>
          </div>
          <div className="contact-info">
            <div className="contact-box">
              <ul>
                <li>
                  <i className="fa fa-phone" aria-hidden="true" />
                  <span>29442336</span>
                </li>
                <li>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <span>98883559</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-6">
        <div className="addon-box">
          <div className="addon-titlez">
            <h3>Information</h3>
          </div>
          <div className="footer-list">
            <ul>
              <li>
                <a href="#" title="About Us">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" title="Delivery information">
                  Delivery information
                </a>
              </li>
              <li>
                <a href="#" title="Licenses">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" title="Sitemap">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-6">
        <div className="addon-box">
          <div className="addon-titlez">
            <h3>MY ACCOUNT</h3>
          </div>
          <div className="footer-list">
            <ul>
              <li>
                <a href="#" title="My Account">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" title="Order History">
                  Order History
                </a>
              </li>
              <li>
                <a href="#" title="My Addresses">
                  My Addresses
                </a>
              </li>
              <li>
                <a href="#" title="My Personal Info">
                  My Personal Info
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-6">
        <div className="addon-box">
          <div className="addon-titlez">
            <h3>SUPPORT</h3>
          </div>
          <div className="footer-list">
            <ul>
              <li>
                <a href="#" title="Email Us">
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?l=en&phone=85298883559"
                  title="Whatsapp Us"
                >
                  Whatsapp Us
                </a>
              </li>
              <li>
                <a href="#" title="Ordering Help">
                  Ordering Help
                </a>
              </li>
              <li>
                <a href="#" title="Privacy Policy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-copyright " style={{ background: "#eceff6" }}>
    <div className="container">
      <div className="copy-right">
        Copyright @2023
        <a href="#">Spice Store</a> All rights reserved.
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
