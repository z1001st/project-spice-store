import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD, setSelectedProduct } from "../../redux/actions/action";
import { toast } from "react-toastify";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import './list-view.css';


const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartreducer.carts);
  const originalData = useSelector((state) => state.cartreducer.products);
  const [data, setData] = useState(originalData); 

  const [sortOption, setSortOption] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [searchKeyword, setSearchKeyword] = useState('');


  const handleSearch = (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);

    const filteredResults = originalData.filter((product) =>
      product.rname.toLowerCase().includes(keyword.toLowerCase())
    );
    setData(filteredResults);
  };

  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product));
  };

  const send = (product) => {
    dispatch(ADD(product));
    toast.success('Item added to cart successfully');
  };

  const getItemQuantity = (itemId) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.qnty : 0;
  };

  const sortProducts = (products, sortOption) => {
    switch (sortOption) {
      case 'price:asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price:desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'name:asc':
        return [...products].sort((a, b) => a.rname.localeCompare(b.rname));
      case 'name:desc':
        return [...products].sort((a, b) => b.rname.localeCompare(a.rname));
      default:
        return products;
    }
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };


  useEffect(() => {
    const sortedProducts = sortProducts(originalData, sortOption);
    setData(sortedProducts);
  }, [sortOption]);


  return (
    <>
      <div className="col-md-10 products-box">
        <h1 style={{ fontSize: 25 }}>Price drop</h1>
        <div className='search pb-3 ' style={{ marginLeft: "auto", width: 400 }}>
          <form
            action=""
            className="search"
            style={{ height: 38 }}
          >
            <span className="icon-large">
              <i className="ri-search-line" />
            </span>
            <input
              type="search"
              placeholder="Search by name products"
              style={{ height: 38, borderRadius: 0 }}
              value={searchKeyword}
              onChange={handleSearch}
            />
            <button type="submit" style={{ borderRadius: 0 }}>
              Search
            </button>
          </form>
        </div>
        <div className="filters-panel d-flex justify-content-between align-items-center  mx-3  mb-3">
          <div className="product-sort">
            <form id="productsSortForm" action="#" className="productsSortForm">
              <div className="selector-form">
                <select
                  className="form-select no-effect-focus"
                  value={sortOption}
                  onChange={(event) => setSortOption(event.target.value)}
                >
                  <option value="">SORT BY</option>
                  <option value="price:asc">Price: Lowest first</option>
                  <option value="price:desc">Price: Highest first</option>
                  <option value="name:asc">Product Name: A to Z</option>
                  <option value="name:desc">Product Name: Z to A</option>
                </select>
              </div>
            </form>
          </div>
          <div className="view-mode">
            <a
              className={`view-grid${viewMode === 'grid' ? ' active' : ''}`}
              onClick={toggleViewMode}
            >
              <i className="fa fa-th" />
            </a>
            <a
              className={`view-list hover-effects${viewMode === 'list' ? ' active' : ''}`}
              onClick={toggleViewMode}
            >
              <i className="fa fa-list-ul" />
            </a>
          </div>
        </div>
        <div >
          {viewMode === 'grid' ? (
            <div className="row" style={{ marginTop: 35 }}>
              {data.map((product) => {
                const itemQuantity = getItemQuantity(product.id);
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    itemQuantity={itemQuantity}
                    handleProductClick={handleProductClick}
                    addToCart={send}
                  />
                );
              })}
            </div>
          ) : (
            <div className="list-view " style={{ marginTop: 35 }}>
              {data.map((product) => {
                const itemQuantity = getItemQuantity(product.id);
                return (
                  <div key={product.id} className="list-item">
                    <div className="list-item-image">
                      <Link
                        to={`/product/${product.id}`}
                        onClick={() => handleProductClick(product)}
                      >
                        <img
                          src={product.imgdata}
                          title={product.rname}
                        />
                      </Link>
                    </div>
                    <div className="list-item-details">
                      <Link
                        to={`/product/${product.id}`}
                        onClick={() => handleProductClick(product)}
                      >
                        <div>
                          <p className="list-item-title">{product.rname}</p>
                          <p className="list-item-price">{product.price.toFixed(2)}$</p>
                        </div>
                      </Link>
                      <button
                        className="cart-button-primary btn-effect"
                        onClick={() => send(product)}
                      >
                        <span className="fa fa-shopping-cart me-2" />
                        ADD TO CART {itemQuantity > 0 ? `(${itemQuantity})` : ''}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
