import React from 'react'

const AboutPages = () => {
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
                        About us
                    </div>
                </div>
            </div>
            <section className="container content-center" id="center_column">
                <h2>About us</h2>
                <div className="rte">
                    <p>
                        We are committed to being Hong Kong's leading online grocery store for
                        South East Asian products and offer:
                    </p>
                    <p>
                        <strong>Extensive product range</strong>with hundreds of items
                        stocked, from ready-to-eat frozen products, snacks, dairy, recipe
                        and dessert mixes, cooking oils, teas, to personal care products
                    </p>
                    <p>
                        <strong>Discounted prices</strong>
                        <strong>FREE home delivery</strong>for orders above HK$400,
                        especially helpful for the heavier orders Flexible payment
                        terms, pay by credit card, bank transfer, or cash on delivery
                    </p>
                    <p>
                        <strong>Friendly order system</strong>, by phone or website and we will
                        track all your order history for easy reference
                    </p>
                    <p>
                        <strong>PLUS</strong> we<em>personally</em> answer your
                        questions via phone or email, whether you need help deciding between
                        products or learn more about how we can help! Our grocery products
                        are authentic and comprise international and local brands, all
                        guaranteed to be fresh.
                    </p>
                    <p>
                        As we continuously introduce quality products, please visit
                        our site regularly. If you like what we do, please do refer our
                        site to others via the online referral program located in the "your
                        account" section. As a token of our thanks, we will provide a referral
                        credit on future orders - so be sure to register and login for
                        benefit.
                    </p>
                    <p>
                        We're always looking to improve so please tell us what you or think
                        about our products, service, your shopping experience or even a product
                        you're looking for by emailing us at
                        <span style={{ textDecoration: "underline" }}>
                            <strong>feedback "@" spicestore.hk</strong>
                        </span>
                        or by calling us at
                        <span style={{ textDecoration: "underline" }}>
                            <strong>29442336</strong>
                        </span>
                        from Monday to Saturday 09:00 AM to 06:00 PM or by Whatsapp at 9888-3559
                    </p>
                    <p>We look forward to serving you!</p>
                    <p>Team Spice Store</p>
                    <p />
                    <p>Fresh Beef & Mutton Supplied by:</p>
                    <p>Kashmir Meat Shop. FEHD License Number: 3694000460</p>
                    <p />
                    <p>Frozen Beef, Mutton & Chicken Supplied by:</p>
                    <p>Halal Meat Shop. FEHD License Number: 3694800781</p>
                    <p />
                </div>
            </section>
        </main>

    )
}

export default AboutPages
