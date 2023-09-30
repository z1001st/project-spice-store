import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD, filterProductsByCategory, setSelectedProduct } from "../../../redux/actions/action";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import Sort from "../SortProduct";
import Search from "../SearchByNameProduct";
import ViewMode from "../ViewMode";
import CategoriesLeft from "../CategoriesLeft";


const CategoryGinger = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartreducer.carts);
  const products = useSelector((state) => state.cartreducer.products);
  const [data, setData] = useState(products);
  const [sortOption, setSortOption] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
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

  useEffect(() => {
    const sortedProducts = sortProducts(products, sortOption);
    setData(sortedProducts);
  }, [sortOption]);


  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };


  const filteredProducts = useSelector((state) => state.cartreducer.filteredProducts);


  useEffect(() => {
    dispatch(filterProductsByCategory("CategoryGinger"));
  }, [dispatch]);

  useEffect(() => {
    setData(filteredProducts);
  }, [filteredProducts]);

  const handleSortChange = (event) => {
    const option = event.target.value;
    setSortOption(option);
  };

  const filteredResults = data.filter((product) =>
    product.rname.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const renderProductCard = (product) => {
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
  };

  const renderListViewItem = (product) => {
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
  };

  return (
    <div className="col-md-10 products-box">
      <h1 style={{ fontSize: 25 }}>Price drop</h1>
      <Search searchKeyword={searchKeyword} handleSearch={handleSearch} />
      <div className="filters-panel d-flex justify-content-between align-items-center mx-3 mb-3">
        <Sort sortOption={sortOption} handleSortChange={handleSortChange} />
        <ViewMode viewMode={viewMode} toggleViewMode={toggleViewMode} />
      </div>
      <div>
        {viewMode === 'grid' ? (
          <div className="row" style={{ marginTop: 35 }}>
            {filteredResults.map(renderProductCard)}
          </div>
        ) : (
          <div className="list-view" style={{ marginTop: 35 }}>
            {filteredResults.map(renderListViewItem)}
          </div>
        )}
      </div>
    </div>
  );
};


const GingerProduct = () => {
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
        <CategoryGinger/>
      </div>
    </div>
  </main>
  )
}

export default GingerProduct
