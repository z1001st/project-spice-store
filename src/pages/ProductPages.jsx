import React from 'react'
import ProductDetailsPage from '../components/Products/ProductDetaisPages'
import CategoriesLeft from '../components/Products/CategoriesLeft'

const ProductPages = () => {
  return (
    <main className="container">
      <div className="bg-image-area container">
        <div className="content_scene_img">
          <div className="breadcrumb-box">
            <div className="breadcrumb-inner">
              <div className="left">
                <a className="home" href="#" title="Return to Home">
                  Home
                </a>
                <span className="navigation-pipe" />
                Price drop
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content_product_box">
        <div className="row">
          <div className="col-md-2">
         <CategoriesLeft/>
          </div>
         <ProductDetailsPage/>
        </div>
      </div>
    </main>

  )
}

export default ProductPages
