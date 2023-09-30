import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesLeft = () => {
    return (
        <>
            <div id="categories_block_left" className=" categories_block_left">
                <div className="title_block">
                    <h3>Categories</h3>
                </div>
                <div className="block_content">
                    <ul >
                        <li>
                            <span className="grower CLOSE"> </span>
                            <Link to={'/chili'}>
                                Chili
                            </Link>

                        </li>
                        <li>
                            <span className="grower CLOSE"> </span>
                            <Link to={'/ginger'}>
                                Ginger
                            </Link>

                        </li>
                        <li>
                            <span className="grower CLOSE"> </span>
                            <Link to={'/turmeric'}>
                                Turmeric

                            </Link>

                        </li>
                        <li>
                            <span className="grower CLOSE"> </span>
                            <Link to={'/lemongrass'}>
                                Lemongrass

                            </Link>

                        </li>
                        <li>
                            <span className="grower CLOSE"> </span>
                            <Link to={'/garlic'}>
                                Garlic

                            </Link>

                        </li>
                        <li>
                            <span className="grower CLOSE"> </span>
                            <Link to={'/retail-products'}>
                                Retail Products

                            </Link>

                        </li>
                        <li>
                            <span className="grower CLOSE"> </span>
                            <Link to={'/cassia/-cinnamon'}>
                                Cassia/ Cinnamon

                            </Link>

                        </li>
                        <li>
                            <span className="grower CLOSE"> </span>
                            <Link to={'/star-anise'}>
                                Star Anise

                            </Link>

                        </li>


                    </ul>
                </div>
            </div>
        </>
    )
}

export default CategoriesLeft

