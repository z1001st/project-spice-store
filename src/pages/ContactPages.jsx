import React from 'react'

const ContactPages = () => {
    return (
        <main className="container">
            <div className="breadcrumb-box">
                <div className="breadcrumb-inner">
                    <div className="left">
                        <a
                            className="home"
                            href="#"
                        >
                            Home
                        </a>
                        <span className="navigation-pipe" />
                        Contact
                    </div>
                </div>
            </div>
            <section className="container content-center" id="center_column">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12">
                        <div className="container" id="center_column">
                            <form
                            >
                                <fieldset>
                                    <h1 className="page-heading">CONTACT FORM</h1>
                                    <div className="row">
                                        <div className="col-sm-6 ">
                                            <div className="mb-3">
                                                <label htmlFor="id_contact" className="form-label">
                                                    Subject Heading
                                                </label>
                                                <select
                                                    className="form-select"
                                                    id="id_contact"
                                                    name="id_contact"
                                                >
                                                    <option value={0}>-- Choose --</option>
                                                    <option value={2}>Customer service</option>
                                                    <option value={1}>Feedback</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="id_order" className="form-label">
                                                    Order reference
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="id_order"
                                                    name="id_order"
                                                    placeholder="Enter Order Reference"
                                                    defaultValue=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="email"
                                                    name="from"
                                                    placeholder="Enter Email Address"
                                                    defaultValue=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label htmlFor="message" className="form-label">
                                                    Message
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    name="message"
                                                    rows={9}
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit">
                                        <button
                                            type="submit"
                                            name="submitMessage"
                                            id="submitMessage"
                                            className="btn btn-green"
                                        >
                                            <span>
                                                Send Contact
                                                <i className="icon-chevron-right right" />
                                            </span>
                                        </button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12">
                        <div className="container d-flex mt-3 align-items-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d507095.9399833301!2d79.9136904!3d6.8078722!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ae245f26fd188c9%3A0xae07cd225563bb1!2sThree%20Star%20Oraganic%20Farm%20No.%2010%2C%20Cambridge%20Court%20Gangarama%20Rd%20Piliyandala%2010300%2C%20Sri%20Lanka!3m2!1d6.807872199999999!2d79.9136904!5e0!3m2!1svi!2s!4v1695395369583!5m2!1svi!2s"
                                width={600}
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default ContactPages
