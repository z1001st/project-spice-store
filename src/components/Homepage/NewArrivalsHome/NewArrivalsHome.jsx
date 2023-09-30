import { useDispatch, useSelector } from "react-redux";
import { ADD, setSelectedProduct } from "../../../redux/actions/action";
import { toast } from "react-toastify";
import Notification from "../../Include/Notification";
import ProductCard from "../../Products/ProductCard";




const NewArrivalsHome = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartreducer.carts);
  const data = useSelector((state) => state.cartreducer.products);

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

  const latestProducts = data.slice(0, 8);

  return (
    <div className='container mt-3'>
      <div id="arrivals-box">
        <h3 className="text-center text-uppercase">New Arrivals</h3>
        <div className="green-border-home" />
        <div className="products-box">
          <div className="row" style={{ marginTop: 35 }}>
            {latestProducts.map((product) => {
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
        </div>
      </div>
      <Notification />
    </div>
  );
};

export default NewArrivalsHome;
