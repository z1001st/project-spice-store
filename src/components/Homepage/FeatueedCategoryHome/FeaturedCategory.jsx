import React from 'react'
import { Link } from 'react-router-dom';
const featuredCategories = [
  {
    title: 'Chili',
    description: 'Chili pepper (Capsicum anuum) has been a part of human cuisine from as early as 7500 BC. There is archaeological evidence in southwestern Ecuador that chili was domesticated more than 6000 years ago, making it one of the first agricultural crops in the Americas.',
    imageSrc: 'https://dace.vn/wp-content/uploads/2021/06/chili.jpg',
  },
  {
    title: 'Ginger',
    description: 'Ginger (Zingiber officinale) is a herbaceous plant occurring in the tropics and subtropics, mainly in South and Southeast Asia',
    imageSrc: 'https://www.dace.vn/wp-content/uploads/2023/03/ginger-dace.png',
  },
  {
    title: 'Turmeric',
    description: 'Like ginger, turmeric (Curcuma longa) is a perennial herbaceous plant belonging to the ginger family (Zingiberaceae)',
    imageSrc: 'https://www.dace.vn/wp-content/uploads/2023/03/turmeric-dace.png',
  },
 
  {
    title: 'Lemongrass',
    description: 'Lemongrass (Cymbopogon citratus) is tall a perennial grass, which means it comes back year after year. The plants can grow up to three feet tall. Lemongrass',
    imageSrc: 'https://www.dace.vn/wp-content/uploads/2021/06/lemongrass.jpg',
  },
  {
    title: 'Garlic',
    description: 'Garlic (Allium sativum) is a species of bulbous flowering plant in the genus Allium. It is native to Central Asia and northeastern Iran and has long been used as a seasoning worldwide, with a history of several thousand years of human consumption and use. ',
    imageSrc: 'https://www.dace.vn/wp-content/uploads/2021/06/Garlic-Recovered.png',
  },
  {
    title: 'Retail Products',
    description: 'In 2019 we have introduced organic products in retail packaging. These products are marketed under the DACE label. The product range comprises ginger, turmeric, chili, garlic and lemongrass in various dry forms. Packaging is in glass or in plastic jars. Next to this range, we have developed a high quality hot chili sauce which, unlike many other products in the market, does not contain any additives and is made from cayenne peppers and water only. Some traditional Vietnamese products complete the range.',
    imageSrc: 'https://www.dace.vn/wp-content/uploads/2021/08/JUM_0662-2-scaled.jpg',
  },
  {
    title: 'Cassia/ Cinnamon',
    description: 'Cassia, also known as cinnamon, is a spice derived from the bark of trees belonging to the Cinnamomum family. It has been used for centuries in cooking, baking, and traditional medicine due to its aromatic flavor and potential health benefits. Cassia is known for its warm and sweet taste, with a slightly spicy undertone. It is commonly used in both savory and sweet dishes, such as curries, desserts, and hot beverages like tea and mulled wine. The spice is often available in the form of sticks or ground powder, and its distinctive aroma adds depth and richness to various cuisines around the world. Along with its culinary uses, cassia is believed to have anti-inflammatory, antioxidant, and antimicrobial properties, although further research is needed to fully understand its potential health benefits.',
    imageSrc: 'https://www.dace.vn/wp-content/uploads/2023/06/cinnamon-sticks-and-ground.jpeg',
  },
  {
    title: 'Star Anise',
    description: 'Star anise is a unique spice known for its distinctive star-shaped appearance and strong licorice-like flavor. It comes from the fruit of the Illicium verum tree, which is native to Southeast Asia. The spice is commonly used in Asian cuisines, particularly in Chinese and Vietnamese dishes.',
    imageSrc: 'https://www.dace.vn/wp-content/uploads/2023/06/hoi.jpg',
  },
];

const FeaturedCategory = () => {





  return (
    <div id="featured-box" style={{ marginTop: 35 }}>
      <h3 className="text-center text-uppercase">Featured category</h3>
      <div className="green-border-home" />
      <div className="list-card" style={{ marginTop: 35 }}>
        <div className="row">
          {featuredCategories.map((category, index) => (

            <div className="col-md-3 col-6" id="card-item">
            <Link to={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="card mb-3 box-shadow" style={{ color: "black" }}>
                  <img
                    className="card-img-top"
                    src={category.imageSrc}
                    title={category.title}
                  />
                  <div
                    className="card-body text-center"
                    style={{ paddingLeft: 5, paddingRight: 5 }}
                  >
                    <p className="card-text font-weight-bold font-weight-bolder black-f">
                      {category.title}
                    </p>
                    <p className="features__description">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>

          ))}










        </div>
      </div>
    </div>

  )
}

export default FeaturedCategory
